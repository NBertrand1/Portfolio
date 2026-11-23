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
const blocking = [];
const allowed = [];

for (const [name, vulnerability] of Object.entries(vulnerabilities)) {
  if (!["high", "critical"].includes(vulnerability.severity)) continue;

  const advisories = (vulnerability.via ?? []).filter(
    (entry) => typeof entry === "object" && entry !== null,
  );

  const isOnlyDocumentedAdvisory =
    advisories.length > 0 &&
    advisories.every(
      (advisory) =>
        advisory.url ===
        "https://github.com/advisories/GHSA-fc5q-39xc-vjpf",
    );

  if (isOnlyDocumentedAdvisory) {
    allowed.push({ name, severity: vulnerability.severity });
  } else {
    blocking.push({
      name,
      severity: vulnerability.severity,
      advisories: advisories.map((advisory) => advisory.url ?? advisory.title),
    });
  }
}

for (const item of allowed) {
  console.warn(
    `TEMPORARY EXCEPTION: ${item.name} (${item.severity}) is linked only to GHSA-fc5q-39xc-vjpf.`,
  );
}

if (blocking.length > 0) {
  console.error("Blocking high/critical dependency vulnerabilities:");
  console.error(JSON.stringify(blocking, null, 2));
  process.exit(1);
}

console.log(
  `Audit passed: no unapproved high/critical vulnerabilities. ${allowed.length} documented exception(s).`,
);
