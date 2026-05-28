#!/usr/bin/env node

/**
 * MIGRATE-VEHICLES.JS
 *
 * Migración de vehículos desde lib/page-data.js a Sanity CMS.
 *
 * Características:
 * - Idempotente: safe to run multiple times
 * - Dry-run mode: --dry-run flag for testing
 * - Dataset targeting: --dataset flag
 * - Interactive confirmation for production
 * - Migration log generation
 *
 * Usage:
 *   node scripts/migrate-vehicles.js --dataset=development
 *   node scripts/migrate-vehicles.js --dataset=production --dry-run
 */

import { createClient } from "@sanity/client";
import { join, dirname, resolve } from "path";
import { fileURLToPath, pathToFileURL } from "url";
import fs from "fs";
import readline from "readline";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: resolve(__dirname, "../.env.local") });

const CONFIG = {
  projectId: "j182601n",
  apiVersion: "2025-10-18",
  dataset: null,
  dryRun: false,
};

const migrationLog = {
  timestamp: new Date().toISOString(),
  dataset: null,
  dryRun: false,
  stats: {
    vehiclesCreated: 0,
    vehiclesExisted: 0,
    imagesUploaded: 0,
    imagesReused: 0,
    imagesSkipped: 0,
  },
  errors: [],
  warnings: [],
};

function log(message, type = "info") {
  const timestamp = new Date().toISOString();
  const prefix = {
    info: "ℹ️",
    success: "✅",
    warning: "⚠️",
    error: "❌",
    dryrun: "🔍 [DRY-RUN]",
  }[type];

  console.log(`${prefix} [${timestamp}] ${message}`);
}

function parseArgs() {
  const args = process.argv.slice(2);
  const flags = {};

  for (const arg of args) {
    if (arg.startsWith("--")) {
      const [key, value] = arg.slice(2).split("=");
      const camelKey = key.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());

      if (value === undefined || value === "true") {
        flags[camelKey] = true;
      } else if (value === "false") {
        flags[camelKey] = false;
      } else {
        flags[camelKey] = value;
      }
    }
  }

  return flags;
}

function createSanityClient() {
  if (!CONFIG.dataset) {
    throw new Error("Dataset not specified. Use --dataset flag.");
  }

  const token = process.env.SANITY_API_TOKEN;
  console.log(`🔑 Token loaded: ${token ? `YES (length: ${token.length})` : "NO"}`);

  return createClient({
    projectId: CONFIG.projectId,
    dataset: CONFIG.dataset,
    apiVersion: CONFIG.apiVersion,
    useCdn: false,
    token: token,
  });
}

async function saveMigrationLog() {
  const logPath = join(__dirname, `migration-log-vehicles-${Date.now()}.json`);
  fs.writeFileSync(logPath, JSON.stringify(migrationLog, null, 2));
  log(`Migration log saved to: ${logPath}`, "success");
}

async function uploadImage(client, imagePath) {
  if (!fs.existsSync(imagePath)) {
    migrationLog.warnings.push(`Image not found: ${imagePath}`);
    log(`Image not found: ${imagePath}`, "warning");
    return null;
  }

  if (CONFIG.dryRun) {
    log(`[DRY-RUN] Would upload image: ${imagePath}`, "dryrun");
    return {
      _type: "image",
      asset: { _ref: `dry-run-image-${Date.now()}` },
    };
  }

  const filename = imagePath.split("/").pop();

  try {
    const existingAsset = await client.fetch(
      `*[_type == "sanity.imageAsset" && originalFilename == $filename][0]`,
      { filename }
    );

    if (existingAsset) {
      log(`Reusing existing image: ${filename}`, "info");
      migrationLog.stats.imagesReused++;
      return {
        _type: "image",
        asset: { _ref: existingAsset._id },
      };
    }

    const imageBuffer = await fs.promises.readFile(imagePath);
    const asset = await client.assets.upload("image", imageBuffer, {
      filename,
    });

    log(`Uploaded image: ${filename}`, "success");
    migrationLog.stats.imagesUploaded++;

    return {
      _type: "image",
      asset: { _ref: asset._id },
    };
  } catch (error) {
    migrationLog.errors.push({
      type: "image_upload",
      path: imagePath,
      error: error.message,
    });
    log(`Failed to upload ${imagePath}: ${error.message}`, "error");
    return null;
  }
}

async function migrateVehicleColorsNew(client, colorsData) {
  if (!colorsData || !Array.isArray(colorsData.colors)) {
    return null;
  }

  const migratedColors = [];

  for (const color of colorsData.colors) {
    let colorImage = null;

    if (color.image && color.image.startsWith("/")) {
      const imagePath = join(__dirname, "../public", color.image);
      colorImage = await uploadImage(client, imagePath);
    }

    migratedColors.push({
      name: color.name,
      hex: color.hex,
      image: colorImage,
    });
  }

  return {
    modelName: colorsData.modelName,
    colors: migratedColors,
  };
}

async function migrateFeatureSlides(client, featureSlides) {
  if (!featureSlides || !Array.isArray(featureSlides)) {
    return [];
  }

  const migratedSlides = [];

  for (const featureModule of featureSlides) {
    const slides = [];

    for (const slide of featureModule.slides || []) {
      let slideImage = null;

      if (slide.backgroundImage && slide.backgroundImage.startsWith("/")) {
        const imagePath = join(__dirname, "../public", slide.backgroundImage);
        slideImage = await uploadImage(client, imagePath);
      }

      slides.push({
        backgroundImage: slideImage,
        bullets: slide.bullets || [],
      });
    }

    migratedSlides.push({
      title: featureModule.title,
      slides: slides,
    });
  }

  return migratedSlides;
}

async function migrateVehicleGallery(client, galleryData) {
  if (!galleryData || !Array.isArray(galleryData.images)) {
    return null;
  }

  const migratedImages = [];

  for (const img of galleryData.images) {
    let imageRef = null;

    if (img.src && img.src.startsWith("/")) {
      const imagePath = join(__dirname, "../public", img.src);
      imageRef = await uploadImage(client, imagePath);
    }

    migratedImages.push({
      id: img.id,
      src: imageRef,
      alt: img.alt,
    });
  }

  return {
    title: galleryData.title,
    subtitle: galleryData.subtitle,
    images: migratedImages,
  };
}

async function migrateVideoGallery(client, videoGalleryData) {
  if (!videoGalleryData || !Array.isArray(videoGalleryData.videos)) {
    return null;
  }

  const migratedVideos = [];

  for (const video of videoGalleryData.videos) {
    let thumbnailRef = null;

    if (video.thumbnail && video.thumbnail.startsWith("/")) {
      const imagePath = join(__dirname, "../public", video.thumbnail);
      thumbnailRef = await uploadImage(client, imagePath);
    }

    migratedVideos.push({
      id: video.id,
      title: video.title,
      thumbnail: thumbnailRef,
      videoUrl: video.videoUrl,
      views: video.views,
      type: video.type,
    });
  }

  return {
    title: videoGalleryData.title,
    videos: migratedVideos,
  };
}

async function migrateHero(client, heroData, modelKey) {
  let backgroundImageRef = null;
  let logoImageRef = null;

  if (heroData.backgroundImage && heroData.backgroundImage.startsWith("/")) {
    const imagePath = join(__dirname, "../public", heroData.backgroundImage);
    backgroundImageRef = await uploadImage(client, imagePath);
  }

  if (heroData.logoImage && heroData.logoImage.startsWith("/")) {
    const imagePath = join(__dirname, "../public", heroData.logoImage);
    logoImageRef = await uploadImage(client, imagePath);
  }

  return {
    backgroundImage: backgroundImageRef,
    backgroundVideo: heroData.backgroundVideo || null,
    vehicleName: heroData.vehicleName,
    vehicleDescription: heroData.vehicleDescription,
    height: heroData.height || "h-screen",
    logoImage: logoImageRef,
    logoAlt: heroData.logoAlt || null,
    highlights: heroData.highlights || [],
  };
}

async function migrateSpecificationsVideo(client, specsData) {
  if (!specsData) {
    return null;
  }

  let logoImageRef = null;

  if (specsData.logoImage && specsData.logoImage.startsWith("/")) {
    const imagePath = join(__dirname, "../public", specsData.logoImage);
    logoImageRef = await uploadImage(client, imagePath);
  }

  return {
    videoUrl: specsData.videoUrl || null,
    imageUrl: specsData.imageUrl || null,
    title: specsData.title || null,
    subtitle: specsData.subtitle || null,
    model: specsData.model || null,
    logoImage: logoImageRef,
    logoAlt: specsData.logoAlt || null,
    description: specsData.description || null,
  };
}

async function migrateVehicles(client) {
  log("=== MIGRATING VEHICLES ===", "info");

  const pageDataUrl = pathToFileURL(join(__dirname, "../lib/page-data.js")).href;
  const { vehicleModelPagesData } = await import(pageDataUrl);

  if (!vehicleModelPagesData || typeof vehicleModelPagesData !== "object") {
    throw new Error("Failed to parse vehicleModelPagesData from lib/page-data.js");
  }

  const modelKeys = Object.keys(vehicleModelPagesData);
  log(`Found ${modelKeys.length} vehicle models to migrate`, "info");

  for (const modelKey of modelKeys) {
    try {
      const modelData = vehicleModelPagesData[modelKey];

      if (CONFIG.dryRun) {
        log(`[DRY-RUN] Would create vehicle: "${modelKey}"`, "dryrun");
        migrationLog.stats.vehiclesCreated++;
        continue;
      }

      const existing = await client.fetch(
        `*[_type == "vehicleModel" && slug.current == $slug][0]`,
        { slug: modelKey }
      );

      if (existing) {
        log(`Vehicle "${modelKey}" already exists, skipping`, "info");
        migrationLog.stats.vehiclesExisted++;
        continue;
      }

      const hero = await migrateHero(client, modelData.hero, modelKey);
      const videoGallery = await migrateVideoGallery(client, modelData.videoGallery);
      const vehicleGallery = await migrateVehicleGallery(client, modelData.vehicleGallery);
      const vehicleColorsNew = await migrateVehicleColorsNew(client, modelData.vehicleColorsNew);
      const featureSlides = await migrateFeatureSlides(client, modelData.featureSlides);
      const specificationsVideo = await migrateSpecificationsVideo(client, modelData.specificationsVideo);

      const doc = {
        _type: "vehicleModel",
        name: modelData.hero.vehicleName,
        slug: { _type: "slug", current: modelKey },
        hero,
        videoGallery,
        vehicleGallery,
        threeSixty: modelData.threeSixty || null,
        vehicleColorsNew,
        featureSlides,
        technicalSheet: modelData.technicalSheet || false,
        specificationsVideo,
      };

      const created = await client.create(doc);
      log(`Created vehicle: "${modelKey}"`, "success");
      migrationLog.stats.vehiclesCreated++;

    } catch (error) {
      migrationLog.errors.push({
        type: "vehicle_creation",
        slug: modelKey,
        error: error.message,
      });
      log(`Failed to create vehicle "${modelKey}": ${error.message}`, "error");
    }
  }
}

async function confirmProductionMigration() {
  if (CONFIG.dataset !== "production" || CONFIG.dryRun) {
    return true;
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(
      "\n⚠️  YOU ARE ABOUT TO MIGRATE TO PRODUCTION DATASET ⚠️\n" +
      "This will create vehicle documents in your production Sanity CMS.\n" +
      "Type 'yes' to confirm: ",
      (answer) => {
        rl.close();
        resolve(answer.toLowerCase() === "yes");
      }
    );
  });
}

async function main() {
  try {
    const flags = parseArgs();

    if (!flags.dataset) {
      console.error("❌ Error: --dataset flag is required");
      console.error("\nUsage:");
      console.error("  node scripts/migrate-vehicles.js --dataset=development");
      console.error("  node scripts/migrate-vehicles.js --dataset=production --dry-run");
      process.exit(1);
    }

    CONFIG.dataset = flags.dataset;
    CONFIG.dryRun = flags.dryRun === true;

    migrationLog.dataset = CONFIG.dataset;
    migrationLog.dryRun = CONFIG.dryRun;

    console.log("\n" + "=".repeat(60));
    console.log("🔧 SANITY VEHICLE MIGRATION");
    console.log("=".repeat(60));
    console.log(`📦 Project: ${CONFIG.projectId}`);
    console.log(`🎯 Dataset: ${CONFIG.dataset}`);
    console.log(`🔍 Dry-run: ${CONFIG.dryRun ? "YES" : "NO"}`);
    console.log("=".repeat(60) + "\n");

    const client = createSanityClient();

    const confirmed = await confirmProductionMigration();
    if (!confirmed) {
      log("Migration cancelled by user", "warning");
      process.exit(0);
    }

    await migrateVehicles(client);

    console.log("\n" + "=".repeat(60));
    console.log("📊 MIGRATION SUMMARY");
    console.log("=".repeat(60));
    console.log(`Vehicles created: ${migrationLog.stats.vehiclesCreated}`);
    console.log(`Vehicles existed: ${migrationLog.stats.vehiclesExisted}`);
    console.log(`Images uploaded: ${migrationLog.stats.imagesUploaded}`);
    console.log(`Images reused: ${migrationLog.stats.imagesReused}`);
    console.log(`Warnings: ${migrationLog.warnings.length}`);
    console.log(`Errors: ${migrationLog.errors.length}`);
    console.log("=".repeat(60) + "\n");

    await saveMigrationLog();

    if (migrationLog.errors.length > 0) {
      log("Migration completed with errors", "error");
      process.exit(1);
    }

    log("Migration completed successfully", "success");

  } catch (error) {
    log(`Fatal error: ${error.message}`, "error");
    console.error(error);
    process.exit(1);
  }
}

main();
