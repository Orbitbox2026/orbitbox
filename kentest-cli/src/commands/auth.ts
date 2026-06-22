import { Command } from "commander";
import { loadConfig, removeConfig, requireConfig } from "../lib/config.js";
import { ApiClient } from "../lib/api.js";
import { printSuccess, printError, printInfo, printJson, getOutputFormat } from "../lib/output.js";

export function registerAuthCommand(program: Command): void {
  const auth = program
    .command("auth")
    .description("Manage KenTest authentication");

  auth
    .command("status")
    .description("Show current authentication status")
    .option("--json", "Output as JSON")
    .action(async (options: { json?: boolean }) => {
      const format = getOutputFormat(options);
      const config = loadConfig();

      if (!config?.apiKey) {
        if (format === "json") {
          printJson({ authenticated: false });
        } else {
          printInfo("Not authenticated. Run `kentest setup` to configure your API key.");
        }
        process.exit(1);
      }

      try {
        const client = new ApiClient(config);
        const result = await client.validateApiKey();

        if (format === "json") {
          printJson({
            authenticated: result.valid,
            email: result.email,
            apiBaseUrl: config.apiBaseUrl,
          });
        } else {
          if (result.valid) {
            printSuccess("Authenticated");
            if (result.email) printInfo(`Email: ${result.email}`);
            printInfo(`API Base URL: ${config.apiBaseUrl}`);
          } else {
            printError("API key is invalid or expired.");
            process.exit(1);
          }
        }
      } catch {
        if (format === "json") {
          printJson({ authenticated: true, apiBaseUrl: config.apiBaseUrl, online: false });
        } else {
          printInfo("API key is saved but the API is unreachable right now.");
          printInfo(`API Base URL: ${config.apiBaseUrl}`);
        }
      }
    });

  auth
    .command("remove")
    .description("Remove saved credentials")
    .option("--yes", "Skip confirmation prompt")
    .action(async (options: { yes?: boolean }) => {
      if (!loadConfig()) {
        printInfo("No credentials found.");
        return;
      }

      if (!options.yes) {
        const { createInterface } = await import("readline");
        const rl = createInterface({ input: process.stdin, output: process.stdout });
        await new Promise<void>((resolve) => {
          rl.question("Remove saved credentials? [y/N] ", (answer) => {
            rl.close();
            if (answer.toLowerCase() !== "y") {
              printInfo("Cancelled.");
              process.exit(0);
            }
            resolve();
          });
        });
      }

      removeConfig();
      printSuccess("Credentials removed.");
    });
}
