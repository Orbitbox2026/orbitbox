import { readFileSync, writeFileSync, mkdirSync, existsSync, unlinkSync } from "fs";
import { homedir } from "os";
import { join } from "path";
import type { KenTestConfig } from "../types.js";

const CONFIG_DIR = join(homedir(), ".kentest");
const CONFIG_FILE = join(CONFIG_DIR, "config.json");
const DEFAULT_API_BASE_URL = "https://api.kentest.dev";

export function getConfigDir(): string {
  return CONFIG_DIR;
}

export function configExists(): boolean {
  return existsSync(CONFIG_FILE);
}

export function loadConfig(): KenTestConfig | null {
  if (!configExists()) return null;
  try {
    const raw = readFileSync(CONFIG_FILE, "utf-8");
    return JSON.parse(raw) as KenTestConfig;
  } catch {
    return null;
  }
}

export function saveConfig(config: KenTestConfig): void {
  if (!existsSync(CONFIG_DIR)) {
    mkdirSync(CONFIG_DIR, { recursive: true });
  }
  writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2), {
    encoding: "utf-8",
    mode: 0o600,
  });
}

export function removeConfig(): void {
  if (existsSync(CONFIG_FILE)) {
    unlinkSync(CONFIG_FILE);
  }
}

export function requireConfig(): KenTestConfig {
  const config = loadConfig();
  if (!config?.apiKey) {
    console.error(
      "Error: Not authenticated. Run `kentest setup` or `kentest auth` to configure your API key."
    );
    process.exit(1);
  }
  return config;
}

export function getDefaultConfig(): Partial<KenTestConfig> {
  return {
    apiBaseUrl:
      process.env["KENTEST_API_BASE_URL"] ?? DEFAULT_API_BASE_URL,
  };
}
