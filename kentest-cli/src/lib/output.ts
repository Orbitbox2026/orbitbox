import type { OutputFormat } from "../types.js";

export function printJson(data: unknown): void {
  console.log(JSON.stringify(data, null, 2));
}

export function printSuccess(message: string): void {
  console.log(`✓ ${message}`);
}

export function printError(message: string): void {
  console.error(`✗ ${message}`);
}

export function printWarning(message: string): void {
  console.warn(`⚠ ${message}`);
}

export function printInfo(message: string): void {
  console.log(`  ${message}`);
}

export function printTable(
  headers: string[],
  rows: string[][]
): void {
  const colWidths = headers.map((h, i) =>
    Math.max(h.length, ...rows.map((r) => (r[i] ?? "").length))
  );

  const divider = colWidths.map((w) => "-".repeat(w + 2)).join("+");
  const formatRow = (cells: string[]) =>
    cells
      .map((c, i) => ` ${(c ?? "").padEnd(colWidths[i] ?? 0)} `)
      .join("|");

  console.log(formatRow(headers));
  console.log(divider);
  for (const row of rows) {
    console.log(formatRow(row));
  }
}

export function statusBadge(status: string): string {
  const badges: Record<string, string> = {
    passed: "✓ passed",
    failed: "✗ failed",
    error: "! error",
    running: "⟳ running",
    queued: "○ queued",
    pending: "○ pending",
  };
  return badges[status] ?? status;
}

export function getOutputFormat(options: { json?: boolean }): OutputFormat {
  return options.json ? "json" : "human";
}
