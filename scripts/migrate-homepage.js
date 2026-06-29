#!/usr/bin/env node

/**
 * MIGRATE-HOMEPAGE.JS
 *
 * Migra el doc `homePage` desde el export viejo (jetour-sanity-export.ndjson) al
 * Sanity nuevo (j182601n). Las imágenes referenciadas viven en el proyecto Sanity
 * viejo (wjwg4t3x, dataset público): se descargan de su CDN y se re-suben a j182601n,
 * remapeando los asset refs. Los videos (hero + stats + videoGallery) ya son URLs de
 * GCS y se preservan tal cual.
 *
 * Idempotente: usa createOrReplace con _id fijo "homePage".
 *
 * Usage:
 *   node scripts/migrate-homepage.js --dataset=production [--dry-run]
 */

import { createClient } from "@sanity/client";
import { dirname, resolve, join } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local") });

const NEW_PROJECT = "j182601n";
const OLD_PROJECT = "wjwg4t3x";
const OLD_DATASET = "production";
const API_VERSION = "2025-10-18";
const EXPORT_PATH = resolve(__dirname, "../../jetour-sanity-export.ndjson");

function parseArgs() {
  const flags = {};
  for (const a of process.argv.slice(2)) {
    if (a.startsWith("--")) {
      const [k, v] = a.slice(2).split("=");
      flags[k] = v === undefined ? true : v;
    }
  }
  return flags;
}

// image-<hash>-<WxH>-<fmt>  ->  https://cdn.sanity.io/images/<pid>/<ds>/<hash>-<WxH>.<fmt>
function refToUrl(ref) {
  const body = ref.slice("image-".length);
  const i = body.lastIndexOf("-");
  const base = body.slice(0, i);
  const fmt = body.slice(i + 1);
  return `https://cdn.sanity.io/images/${OLD_PROJECT}/${OLD_DATASET}/${base}.${fmt}`;
}

function collectImageRefs(node, set) {
  if (Array.isArray(node)) node.forEach((n) => collectImageRefs(n, set));
  else if (node && typeof node === "object") {
    if (node._type === "image" && node.asset?._ref) set.add(node.asset._ref);
    Object.values(node).forEach((v) => collectImageRefs(v, set));
  }
}

function remapRefs(node, map) {
  if (Array.isArray(node)) return node.map((n) => remapRefs(n, map));
  if (node && typeof node === "object") {
    if (node._type === "image" && node.asset?._ref) {
      const newId = map[node.asset._ref];
      return newId ? { _type: "image", asset: { _type: "reference", _ref: newId } } : null;
    }
    const out = {};
    for (const [k, v] of Object.entries(node)) {
      if (["_rev", "_createdAt", "_updatedAt", "_system"].includes(k)) continue;
      out[k] = remapRefs(v, map);
    }
    return out;
  }
  return node;
}

async function main() {
  const flags = parseArgs();
  const dataset = flags.dataset;
  const dryRun = flags["dry-run"] === true;
  if (!dataset) {
    console.error("❌ --dataset es requerido");
    process.exit(1);
  }

  const docs = fs
    .readFileSync(EXPORT_PATH, "utf8")
    .split("\n")
    .filter(Boolean)
    .map((l) => JSON.parse(l));
  // El doc completo es el de _id "homePage" (el otro solo tiene hero)
  const home = docs.find((d) => d._type === "homePage" && d._id === "homePage");
  if (!home) throw new Error("No se encontró homePage en el export");

  const refs = new Set();
  collectImageRefs(home, refs);
  console.log(`🖼️  imágenes a migrar: ${refs.size}`);

  const client = createClient({
    projectId: NEW_PROJECT,
    dataset,
    apiVersion: API_VERSION,
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
  });

  const map = {};
  for (const ref of refs) {
    const url = refToUrl(ref);
    const filename = ref.slice("image-".length).replace(/-([^-]+)$/, ".$1");
    if (dryRun) {
      console.log(`🔍 [DRY] subiría ${filename} desde ${url}`);
      map[ref] = `dry-${ref}`;
      continue;
    }
    // ¿ya existe en el destino? (reusar por originalFilename)
    const existing = await client.fetch(
      `*[_type == "sanity.imageAsset" && originalFilename == $fn][0]._id`,
      { fn: filename }
    );
    if (existing) {
      console.log(`♻️  reusando ${filename}`);
      map[ref] = existing;
      continue;
    }
    const res = await fetch(url);
    if (!res.ok) throw new Error(`No se pudo bajar ${url}: ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    const asset = await client.assets.upload("image", buf, { filename });
    console.log(`✅ subida ${filename} -> ${asset._id}`);
    map[ref] = asset._id;
  }

  const doc = remapRefs(home, map);
  doc._id = "homePage";
  doc._type = "homePage";

  if (dryRun) {
    console.log("🔍 [DRY] doc resultante (claves):", Object.keys(doc));
    console.log("  globalStats.stats:", doc.globalStats?.stats?.length);
    console.log("  roldanSection.features:", doc.roldanSection?.features?.length);
    console.log("  videoGallery.videos:", doc.videoGallery?.videos?.length);
    return;
  }

  await client.createOrReplace(doc);
  console.log(`\n✅ homePage creado/reemplazado en ${NEW_PROJECT}/${dataset}`);
}

main().catch((e) => {
  console.error("❌", e.message);
  process.exit(1);
});
