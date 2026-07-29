/**
 * update-vehicle-colors.js
 *
 * Sincroniza el campo `vehicleColorsNew` de los docs `vehicleModel` que YA existen en
 * Sanity con lo que tiene `lib/page-data.js`.
 *
 * ¿Por qué un script aparte y no `migrate-vehicles.js`?
 * `migrate-vehicles.js` es create-only: si el doc ya existe hace `skipping`. Los 10 modelos
 * ya están migrados (2026-06-11), así que re-correrlo no actualiza nada. Este script hace
 * `patch`, no `create`.
 *
 * Dos trampas que este script evita a propósito:
 *  1. `migrate-vehicles.js` NO propaga `hidden` — los colores retirados a pedido del cliente
 *     volverían a aparecer en el sitio. Acá sí se propaga (el schema tiene el campo y el
 *     componente VehicleColorsNew ya filtra por él).
 *  2. `uploadImage()` de `migrate-vehicles.js` reutiliza assets por `originalFilename`. Varias
 *     PNG de color cambiaron de contenido manteniendo el nombre, así que reusar por nombre
 *     dejaría la imagen vieja en el sitio. Acá se sube siempre y Sanity deduplica por hash
 *     de contenido (sha1), que es el comportamiento correcto.
 *
 * Uso:
 *   node scripts/update-vehicle-colors.js --dataset=production --dry-run
 *   node scripts/update-vehicle-colors.js --dataset=production
 *   node scripts/update-vehicle-colors.js --dataset=production --models=x70-plus,g700
 */

import { createClient } from "@sanity/client";
import fs from "fs";
import { join, dirname } from "path";
import { fileURLToPath, pathToFileURL } from "url";
import readline from "readline";

const __dirname = dirname(fileURLToPath(import.meta.url));

const CONFIG = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "j182601n",
  apiVersion: "2024-01-01",
  dataset: null,
  dryRun: false,
  models: null,
};

const report = {
  startedAt: new Date().toISOString(),
  dataset: null,
  dryRun: false,
  models: [],
  imagesUploaded: 0,
  errors: [],
};

function log(message, type = "info") {
  const prefix = {
    info: "ℹ️ ",
    success: "✅",
    warning: "⚠️ ",
    error: "❌",
    dryrun: "🔍 [DRY-RUN]",
  }[type];
  console.log(`${prefix} ${message}`);
}

function parseArgs() {
  const flags = {};
  for (const arg of process.argv.slice(2)) {
    if (!arg.startsWith("--")) continue;
    const [key, value] = arg.slice(2).split("=");
    const camelKey = key.replace(/-([a-z])/g, (_, l) => l.toUpperCase());
    flags[camelKey] =
      value === undefined || value === "true" ? true : value === "false" ? false : value;
  }
  return flags;
}

/**
 * Sube la imagen y devuelve la referencia. Siempre llama a assets.upload: Sanity deduplica
 * por hash de contenido, así que subir dos veces el mismo archivo no crea un asset nuevo,
 * pero un archivo con el mismo nombre y contenido distinto SÍ genera uno nuevo (que es lo
 * que queremos).
 */
async function uploadColorImage(client, publicPath) {
  if (!publicPath || !publicPath.startsWith("/")) return null;

  const imagePath = join(__dirname, "../public", publicPath);
  if (!fs.existsSync(imagePath)) {
    log(`Imagen inexistente, se deja el color sin imagen: ${publicPath}`, "warning");
    report.errors.push({ type: "image_missing", path: publicPath });
    return null;
  }

  const filename = publicPath.split("/").pop();
  if (CONFIG.dryRun) {
    log(`Subiría imagen: ${filename}`, "dryrun");
    return { _type: "image", asset: { _ref: `dry-run-${filename}` } };
  }

  const buffer = await fs.promises.readFile(imagePath);
  const asset = await client.assets.upload("image", buffer, { filename });
  report.imagesUploaded++;
  return { _type: "image", asset: { _ref: asset._id } };
}

/** Etiqueta legible de un color, para los diffs. */
function label(color) {
  return `${color.name}${color.hidden ? " (oculto)" : ""}`;
}

async function run() {
  const flags = parseArgs();

  if (!flags.dataset) {
    console.error("❌ Falta --dataset. Ej: --dataset=production --dry-run");
    process.exit(1);
  }

  CONFIG.dataset = flags.dataset;
  CONFIG.dryRun = flags.dryRun === true;
  CONFIG.models = flags.models ? String(flags.models).split(",").map((s) => s.trim()) : null;
  report.dataset = CONFIG.dataset;
  report.dryRun = CONFIG.dryRun;

  const token = process.env.SANITY_API_TOKEN;
  if (!token && !CONFIG.dryRun) {
    console.error("❌ Falta SANITY_API_TOKEN en el entorno.");
    process.exit(1);
  }

  console.log("");
  log(`Proyecto ${CONFIG.projectId} · dataset ${CONFIG.dataset} · dry-run: ${CONFIG.dryRun ? "SÍ" : "NO"}`);
  console.log("");

  const client = createClient({
    projectId: CONFIG.projectId,
    dataset: CONFIG.dataset,
    apiVersion: CONFIG.apiVersion,
    useCdn: false,
    token,
  });

  const { vehicleModelPagesData } = await import(
    pathToFileURL(join(__dirname, "../lib/page-data.js")).href
  );

  const keys = Object.keys(vehicleModelPagesData).filter((k) => {
    if (CONFIG.models && !CONFIG.models.includes(k)) return false;
    return Boolean(vehicleModelPagesData[k]?.vehicleColorsNew?.colors?.length);
  });

  if (!keys.length) {
    log("No hay modelos con colores que coincidan con el filtro.", "warning");
    return;
  }

  // --- Plan: qué cambia en cada modelo, antes de escribir nada ---
  const plan = [];
  for (const slug of keys) {
    const local = vehicleModelPagesData[slug].vehicleColorsNew;
    const doc = await client.fetch(
      `*[_type == "vehicleModel" && slug.current == $slug][0]{_id, "colors": vehicleColorsNew.colors[]{name, hex, hidden}}`,
      { slug }
    );

    if (!doc?._id) {
      log(`"${slug}" no existe en Sanity — este script solo actualiza, no crea. Se omite.`, "warning");
      report.errors.push({ type: "doc_missing", slug });
      continue;
    }

    const before = (doc.colors || []).map(label);
    const after = local.colors.map(label);
    plan.push({ slug, docId: doc._id, local, before, after, changed: before.join("|") !== after.join("|") });
  }

  console.log("── Plan de cambios ─────────────────────────────────────────");
  for (const p of plan) {
    console.log(`\n  ${p.slug}${p.changed ? "" : "  (sin cambios de nombre/orden)"}`);
    console.log(`    antes: ${p.before.join(", ") || "(vacío)"}`);
    console.log(`    ahora: ${p.after.join(", ")}`);
  }
  console.log("\n  Nota: las imágenes se re-suben siempre; Sanity deduplica por contenido.");
  console.log("────────────────────────────────────────────────────────────\n");

  if (CONFIG.dryRun) {
    log("Dry-run: no se escribió nada en Sanity.", "dryrun");
    return;
  }

  if (CONFIG.dataset === "production") {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    const answer = await new Promise((resolve) =>
      rl.question(`Vas a actualizar ${plan.length} modelo(s) en PRODUCTION. Escribe "si" para continuar: `, resolve)
    );
    rl.close();
    if (answer.trim().toLowerCase() !== "si") {
      log("Cancelado por el usuario. No se escribió nada.", "warning");
      return;
    }
    console.log("");
  }

  // --- Escritura ---
  for (const p of plan) {
    try {
      const colors = [];
      for (const color of p.local.colors) {
        colors.push({
          _type: "object",
          name: color.name,
          hex: color.hex,
          image: await uploadColorImage(client, color.image),
          hidden: Boolean(color.hidden),
        });
      }

      await client
        .patch(p.docId)
        .set({ vehicleColorsNew: { modelName: p.local.modelName, colors } })
        .commit();

      const shown = colors.filter((c) => !c.hidden).length;
      log(`${p.slug}: ${colors.length} colores guardados (${shown} visibles)`, "success");
      report.models.push({ slug: p.slug, total: colors.length, visible: shown });
    } catch (error) {
      log(`${p.slug}: falló — ${error.message}`, "error");
      report.errors.push({ type: "patch_failed", slug: p.slug, error: error.message });
    }
  }

  const logPath = join(__dirname, `color-update-log-${Date.now()}.json`);
  fs.writeFileSync(logPath, JSON.stringify(report, null, 2));
  console.log("");
  log(`${report.models.length} modelos actualizados · ${report.imagesUploaded} imágenes subidas · ${report.errors.length} errores`, report.errors.length ? "warning" : "success");
  log(`Log: ${logPath}`);
}

run().catch((error) => {
  log(error.message, "error");
  process.exit(1);
});
