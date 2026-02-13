#!/usr/bin/env node

/**
 * Fetch changelogs from iNZight package GitHub repos.
 *
 * Downloads NEWS.md for each package, extracts the latest version,
 * and writes:
 *   - support/changelog/{pkg}.md   (individual changelog pages)
 *   - support/changelog/_versions.json (version summary for overview)
 *
 * Run with: node scripts/fetch-changelogs.mjs
 *
 * Designed to be called by CI/CD before `bun run build`, or manually
 * to refresh changelog data.
 */

import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const PACKAGES = [
  {
    name: "iNZight",
    repo: "iNZight",
    description: "The main iNZight GUI application.",
    category: "main",
  },
  {
    name: "iNZightPlots",
    repo: "iNZightPlots",
    description: "Graphics and basic analytical tools.",
    category: "core",
  },
  {
    name: "iNZightTools",
    repo: "iNZightTools",
    description: "Data wrangling and manipulation tools.",
    category: "core",
  },
  {
    name: "iNZightRegression",
    repo: "iNZightRegression",
    description: "Model fitting and regression diagnostics.",
    category: "modules",
  },
  {
    name: "iNZightTS",
    repo: "iNZightTS",
    description: "Time series analysis module.",
    category: "modules",
  },
  {
    name: "iNZightMR",
    repo: "iNZightMR",
    description: "Multiple response analysis.",
    category: "modules",
  },
  {
    name: "iNZightModules",
    repo: "iNZightModules",
    description: "Advanced menu modules (3D Plot, etc.).",
    category: "modules",
  },
  {
    name: "VIT",
    repo: "vit",
    description: "Visual Inference Tools.",
    category: "other",
  },
];

const OUT_DIR = join(import.meta.dirname, "..", "support", "changelog");

/**
 * Fetch a package's NEWS.md from GitHub.
 * Tries NEWS.md first, then NEWS.Md (some packages use that).
 */
async function fetchNewsFile(repo) {
  for (const filename of ["NEWS.md", "NEWS.Md"]) {
    const url = `https://raw.githubusercontent.com/iNZightVIT/${repo}/master/${filename}`;
    const res = await fetch(url);
    if (res.ok) {
      return await res.text();
    }
  }
  // try 'dev' branch as fallback
  for (const filename of ["NEWS.md", "NEWS.Md"]) {
    const url = `https://raw.githubusercontent.com/iNZightVIT/${repo}/dev/${filename}`;
    const res = await fetch(url);
    if (res.ok) {
      return await res.text();
    }
  }
  return null;
}

/**
 * Fix bare URLs in markdown content (e.g., github.com/... → https://github.com/...).
 * Matches markdown links with bare domain URLs: [text](domain.com/...)
 */
function fixBareUrls(content) {
  return content.replace(
    /\]\(((?:github|gitlab|bitbucket)\.com\/[^\s)]+)\)/g,
    "](https://$1)"
  );
}

/**
 * Extract the latest version from the first heading in NEWS.md.
 * e.g., "# iNZight 4.4.1" → "4.4.1"
 */
function extractLatestVersion(newsContent, pkgName) {
  const match = newsContent.match(
    /^#\s+(?:\w+\s+)?(\d+\.\d+(?:\.\d+)?(?:\.\d+)?)/m
  );
  return match ? match[1] : "unknown";
}

/**
 * Write an individual changelog page for a package.
 */
function writeChangelogPage(pkg, newsContent, version, position) {
  const frontmatter = [
    "---",
    `title: "${pkg.name}"`,
    `description: "Changelog for ${pkg.name} — ${pkg.description}"`,
    `sidebar_label: "${pkg.name}"`,
    `sidebar_position: ${position}`,
    "---",
    "",
    `# ${pkg.name} Changelog`,
    "",
    `> ${pkg.description}`,
    "",
    `**Current version:** ${version}`,
    "",
    `[View on GitHub](https://github.com/iNZightVIT/${pkg.repo}/releases)`,
    "",
    "---",
    "",
  ].join("\n");

  const filepath = join(OUT_DIR, `${pkg.repo}.md`);
  writeFileSync(filepath, frontmatter + fixBareUrls(newsContent), "utf-8");
  return filepath;
}

async function main() {
  // ensure output directory exists
  mkdirSync(OUT_DIR, { recursive: true });

  const versions = {};
  let position = 2; // 1 is reserved for index

  console.log("Fetching changelogs from GitHub...\n");

  for (const pkg of PACKAGES) {
    process.stdout.write(`  ${pkg.name} ... `);

    const news = await fetchNewsFile(pkg.repo);
    if (!news) {
      console.log("⚠ not found");
      continue;
    }

    const version = extractLatestVersion(news, pkg.name);
    const filepath = writeChangelogPage(pkg, news, version, position);
    position++;

    versions[pkg.name] = {
      version,
      description: pkg.description,
      repo: pkg.repo,
      category: pkg.category,
    };

    console.log(`✓ v${version}`);
  }

  // Write versions summary JSON
  const versionsPath = join(OUT_DIR, "_versions.json");
  writeFileSync(versionsPath, JSON.stringify(versions, null, 2), "utf-8");
  console.log(`\nWrote ${Object.keys(versions).length} changelogs + _versions.json`);
}

main().catch((err) => {
  console.error("Failed to fetch changelogs:", err);
  process.exit(1);
});
