#!/usr/bin/env node

/**
 * MIGRATE-NEWS.JS
 *
 * Migración de noticias desde lib/data-site.js a Sanity CMS.
 *
 * Características:
 * - Idempotente: safe to run multiple times
 * - Dry-run mode: --dry-run flag for testing
 * - Dataset targeting: --dataset flag
 * - Interactive confirmation for production
 * - Migration log generation
 *
 * Usage:
 *   node scripts/migrate-news.js --dataset=development
 *   node scripts/migrate-news.js --dataset=production --dry-run
 */

import { createClient } from "@sanity/client";
import { join, dirname, resolve } from "path";
import { fileURLToPath, pathToFileURL } from "url";
import fs from "fs";
import readline from "readline";
import dotenv from 'dotenv';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env.local explicitly
dotenv.config({ path: resolve(__dirname, '../.env.local') });

// ============================================
// CONFIGURATION
// ============================================

const CONFIG = {
  projectId: "j182601n",
  apiVersion: "2025-10-18",
  // Dataset will be set from CLI flag
  dataset: null,
  dryRun: false,
};

// Categories mapping from lib/data-site.js to Sanity slugs
const CATEGORY_MAP = {
  "Todo": "todo",
  "Tendencias": "tendencias",
  "Lanzamientos": "lanzamientos",
  "Categoria Y": "categoria-y",
};

// Reverse mapping for display
const SLUG_TO_TITLE = {
  "todo": "Todo",
  "tendencias": "Tendencias",
  "lanzamientos": "Lanzamientos",
  "categoria-y": "Categoria Y",
};

// ============================================
// UTILITIES
// ============================================

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
      // Convert kebab-case to camelCase
      const camelKey = key.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());

      // Handle boolean flags (no value)
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

function parseDate(dateString) {
  // Parse "JUNIO 24, 2025" → ISO datetime
  const months = {
    ENERO: 0, FEBRERO: 1, MARZO: 2, ABRIL: 3, MAYO: 4, JUNIO: 5,
    JULIO: 6, AGOSTO: 7, SEPTIEMBRE: 8, OCTUBRE: 9, NOVIEMBRE: 10, DICIEMBRE: 11
  };

  const parts = dateString.toUpperCase().replace(",", "").split(" ");
  const [monthStr, day, year] = parts;
  const month = months[monthStr];

  if (month === undefined) {
    throw new Error(`Invalid date format: ${dateString}`);
  }

  const date = new Date(parseInt(year), month, parseInt(day));
  return date.toISOString();
}

// ============================================
// SANITY CLIENT SETUP
// ============================================

function createSanityClient() {
  if (!CONFIG.dataset) {
    throw new Error("Dataset not specified. Use --dataset flag.");
  }

  // Log token verification
  const token = process.env.SANITY_API_TOKEN;
  console.log(`🔑 Token loaded: ${token ? `YES (length: ${token.length})` : 'NO'}`);

  return createClient({
    projectId: CONFIG.projectId,
    dataset: CONFIG.dataset,
    apiVersion: CONFIG.apiVersion,
    useCdn: false,
    token: token,
  });
}

// ============================================
// MIGRATION LOG
// ============================================

const migrationLog = {
  timestamp: new Date().toISOString(),
  dataset: null,  // Will be set after parsing args
  dryRun: false,  // Will be set after parsing args
  stats: {
    categoriesCreated: 0,
    categoriesExisted: 0,
    newsCreated: 0,
    newsExisted: 0,
    imagesUploaded: 0,
    imagesReused: 0,
  },
  errors: [],
  warnings: [],
};

async function saveMigrationLog() {
  const logPath = join(__dirname, `migration-log-${Date.now()}.json`);
  fs.writeFileSync(logPath, JSON.stringify(migrationLog, null, 2));
  log(`Migration log saved to: ${logPath}`, "success");
}

// ============================================
// CATEGORY MIGRATION
// ============================================

async function getOrCreateCategory(client, title, slug) {
  // Early exit for dry-run (no Sanity queries)
  if (CONFIG.dryRun) {
    log(`[DRY-RUN] Would create category: "${title}" (slug: ${slug})`, "dryrun");
    migrationLog.stats.categoriesCreated++;
    return `dry-run-category-${slug}`;
  }

  // Check if category exists
  const existing = await client.fetch(
    `*[_type == "newsCategory" && slug.current == $slug][0]`,
    { slug }
  );

  if (existing) {
    log(`Category "${title}" already exists`, "info");
    migrationLog.stats.categoriesExisted++;
    return existing._id;
  }

  const doc = await client.create({
    _type: "newsCategory",
    title,
    slug: { _type: "slug", current: slug },
  });

  log(`Created category: "${title}"`, "success");
  migrationLog.stats.categoriesCreated++;
  return doc._id;
}

async function migrateCategories(client) {
  log("=== MIGRATING CATEGORIES ===", "info");

  const categories = [
    { title: "Todo", slug: "todo" },
    { title: "Tendencias", slug: "tendencias" },
    { title: "Lanzamientos", slug: "lanzamientos" },
    { title: "Categoria Y", slug: "categoria-y" },
  ];

  const categoryIds = {};

  for (const cat of categories) {
    const id = await getOrCreateCategory(client, cat.title, cat.slug);
    categoryIds[cat.title] = id;
  }

  return categoryIds;
}

// ============================================
// IMAGE UPLOAD
// ============================================

async function uploadImage(client, imagePath, altText) {
  // Check if file exists
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
    // Check if asset with same filename already exists
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

    // Upload new image
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

// ============================================
// NEWS MIGRATION
// ============================================

async function migrateNews(client, categoryIds) {
  log("=== MIGRATING NEWS ===", "info");

  // Import newsData from lib/data-site.js using dynamic import
  const dataSiteUrl = pathToFileURL(join(__dirname, "../lib/data-site.js")).href;
  const { newsData } = await import(dataSiteUrl);

  if (!Array.isArray(newsData)) {
    throw new Error("Failed to parse newsData from lib/data-site.js");
  }

  log(`Found ${newsData.length} news articles to migrate`, "info");

  for (const article of newsData) {
    try {
      // Validate image exists in BOTH dry-run and real mode
      const imagePath = join(__dirname, "../public", article.image);

      if (!fs.existsSync(imagePath)) {
        const errorMsg = `MISSING IMAGE: ${imagePath}`;
        migrationLog.errors.push({
          type: "image_missing",
          slug: article.slug,
          path: imagePath,
        });
        log(`❌ ${errorMsg} (for article: "${article.title}")`, "error");
        continue;
      }

      if (CONFIG.dryRun) {
        log(`[DRY-RUN] Would create article: "${article.title}"`, "dryrun");
        migrationLog.stats.newsCreated++;
        continue;
      }

      // Check if article exists
      const existing = await client.fetch(
        `*[_type == "newsArticle" && slug.current == $slug][0]`,
        { slug: article.slug }
      );

      if (existing) {
        log(`Article "${article.title}" already exists, skipping`, "info");
        migrationLog.stats.newsExisted++;
        continue;
      }

      // Map category title to Sanity reference
      const categoryTitle = article.category;
      const categoryId = categoryIds[categoryTitle];

      if (!categoryId) {
        migrationLog.warnings.push(`Category not found: ${categoryTitle}`);
        log(`Category not found: ${categoryTitle}`, "warning");
        continue;
      }

      // Upload main image (imagePath already validated above)
      const mainImage = await uploadImage(client, imagePath, article.title);

      if (!mainImage) {
        migrationLog.warnings.push(`Failed to upload image for: ${article.title}`);
        log(`Skipping article due to image upload failure: ${article.title}`, "warning");
        continue;
      }

      // Parse date
      const publishedAt = parseDate(article.date);

      // Create article document
      const doc = {
        _type: "newsArticle",
        title: article.title,
        slug: { _type: "slug", current: article.slug },
        category: { _type: "reference", _ref: categoryId },
        mainImage,
        excerpt: article.excerpt,
        content: [], // Empty for now (all articles have hardcoded content)
        publishedAt,
        featured: article.featured || false,
      };

      const created = await client.create(doc);
      log(`Created article: "${article.title}"`, "success");
      migrationLog.stats.newsCreated++;

    } catch (error) {
      migrationLog.errors.push({
        type: "article_creation",
        slug: article.slug,
        error: error.message,
      });
      log(`Failed to create article "${article.title}": ${error.message}`, "error");
    }
  }
}

// ============================================
// MAIN EXECUTION
// ============================================

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
      "This will create documents in your production Sanity CMS.\n" +
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
    // Parse CLI flags
    const flags = parseArgs();

    if (!flags.dataset) {
      console.error("❌ Error: --dataset flag is required");
      console.error("\nUsage:");
      console.error("  node scripts/migrate-news.js --dataset=development");
      console.error("  node scripts/migrate-news.js --dataset=production --dry-run");
      process.exit(1);
    }

    CONFIG.dataset = flags.dataset;
    CONFIG.dryRun = flags.dryRun === true;

    // Update migration log with parsed values
    migrationLog.dataset = CONFIG.dataset;
    migrationLog.dryRun = CONFIG.dryRun;

    // Banner
    console.log("\n" + "=".repeat(60));
    console.log("🔧 SANITY NEWS MIGRATION");
    console.log("=".repeat(60));
    console.log(`📦 Project: ${CONFIG.projectId}`);
    console.log(`🎯 Dataset: ${CONFIG.dataset}`);
    console.log(`🔍 Dry-run: ${CONFIG.dryRun ? "YES" : "NO"}`);
    console.log("=".repeat(60) + "\n");

    // Create Sanity client
    const client = createSanityClient();

    // Confirm production migration
    const confirmed = await confirmProductionMigration();
    if (!confirmed) {
      log("Migration cancelled by user", "warning");
      process.exit(0);
    }

    // Migrate categories first
    const categoryIds = await migrateCategories(client);

    // Migrate news articles
    await migrateNews(client, categoryIds);

    // Print summary
    console.log("\n" + "=".repeat(60));
    console.log("📊 MIGRATION SUMMARY");
    console.log("=".repeat(60));
    console.log(`Categories created: ${migrationLog.stats.categoriesCreated}`);
    console.log(`Categories existed: ${migrationLog.stats.categoriesExisted}`);
    console.log(`News created: ${migrationLog.stats.newsCreated}`);
    console.log(`News existed: ${migrationLog.stats.newsExisted}`);
    console.log(`Images uploaded: ${migrationLog.stats.imagesUploaded}`);
    console.log(`Warnings: ${migrationLog.warnings.length}`);
    console.log(`Errors: ${migrationLog.errors.length}`);
    console.log("=".repeat(60) + "\n");

    // Save migration log
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
