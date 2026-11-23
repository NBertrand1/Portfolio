import { access, readFile } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.resolve("dist");
const requiredFiles = [
  "index.html",
  "en/index.html",
  "404.html",
  "favicon.svg",
  "robots.txt",
  "sitemap.xml",
];

for (const file of requiredFiles) {
  try {
    await access(path.join(outputDirectory, file));
  } catch {
    console.error(`Missing production artifact: dist/${file}`);
    process.exitCode = 1;
  }
}

if (process.exitCode) process.exit(process.exitCode);

const htmlFiles = ["index.html", "en/index.html", "404.html"];
const localAssetPattern = /\b(?:href|src)\s*=\s*["']([^"']+)["']/gi;
const errors = [];

for (const htmlFile of htmlFiles) {
  const html = await readFile(path.join(outputDirectory, htmlFile), "utf8");
  let match;

  while ((match = localAssetPattern.exec(html)) !== null) {
    const reference = match[1];

    if (
      !reference.startsWith("/Portfolio/") ||
      reference.startsWith("//")
    ) {
      continue;
    }

    const relativePath = reference.slice("/Portfolio/".length).split(/[?#]/, 1)[0];
    const resolvedPath = relativePath.endsWith("/")
      ? path.join(outputDirectory, relativePath, "index.html")
      : path.join(outputDirectory, relativePath);

    try {
      await access(resolvedPath);
    } catch {
      errors.push(`dist/${htmlFile} references missing file: ${reference}`);
    }
  }
}

const frenchEntry = await readFile(path.join(outputDirectory, "index.html"), "utf8");
const englishEntry = await readFile(path.join(outputDirectory, "en/index.html"), "utf8");
const notFoundPage = await readFile(path.join(outputDirectory, "404.html"), "utf8");

if (!frenchEntry.includes('lang="fr"')) errors.push("French entry must declare lang=\"fr\".");
if (!englishEntry.includes('lang="en"')) errors.push("English entry must declare lang=\"en\".");
if (!notFoundPage.includes("/Portfolio/") || !notFoundPage.includes("/Portfolio/en/")) {
  errors.push("The 404 page must provide working French and English home links.");
}

if (errors.length > 0) {
  console.error("Production build checks failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Production build checks passed: FR/EN entries, 404 page, SEO files and local assets.");
