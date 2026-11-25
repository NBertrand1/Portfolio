import { readFileSync } from "node:fs";

const reportPath = process.argv[2];

if (!reportPath) {
  console.error("Usage: node scripts/check-audit.mjs <npm-audit-json-file>");
  process.exit(2);
}

let report;

try {
  report = JSON.parse(readFileSync(reportPath, "utf8"));
} catch (error) {
  console.error("Unable to read a valid npm audit JSON report:", error.message);
  process.exit(2);
}

if (report.error) {
  console.error("npm audit returned an error:", report.error.summary ?? report.error.code);
  process.exit(2);
}

const vulnerabilities = report.vulnerabilities ?? {};
const blocking = Object.entries(vulnerabilities)
  .filter(([, vulnerability]) =>
    ["high", "critical"].includes(vulnerability.severity),
  )
  .map(([name, vulnerability]) => ({
    name,
    severity: vulnerability.severity,
    advisories: (vulnerability.via ?? [])
      .filter((entry) => typeof entry === "object" && entry !== null)
      .map((advisory) => advisory.url ?? advisory.title),
  }));

if (blocking.length > 0) {
  console.error("Blocking high/critical dependency vulnerabilities:");
  console.error(JSON.stringify(blocking, null, 2));
  process.exit(1);
}

console.log("Audit passed: no high/critical dependency vulnerabilities.");
