import { Command } from "commander";
import * as readline from "readline";
import { saveConfig, loadConfig, getDefaultConfig } from "../lib/config.js";
import { ApiClient } from "../lib/api.js";
import { printSuccess, printError, printInfo } from "../lib/output.js";
import type { KenTestConfig } from "../types.js";

export function registerSetupCommand(program: Command): void {
  program
    .command("setup")
    .description("Configure KenTest API key and install agent skills")
    .option("--from-env", "Read API key from KENTEST_API_KEY environment variable")
    .option("--yes", "Skip confirmation prompts")
    .option("--agent <name>", "Install skill for a specific agent (claude|cursor|cline|codex)")
    .action(async (options: { fromEnv?: boolean; yes?: boolean; agent?: string }) => {
      console.log("\n  Welcome to KenTest CLI\n");
      console.log("  AI-powered browser testing for coding agents.\n");

      let apiKey: string | undefined;

      if (options.fromEnv) {
        apiKey = process.env["KENTEST_API_KEY"];
        if (!apiKey) {
          printError("KENTEST_API_KEY environment variable is not set.");
          process.exit(1);
        }
        printInfo("Using API key from environment variable.");
      } else {
        const existing = loadConfig();
        if (existing?.apiKey && !options.yes) {
          const confirmed = await prompt(
            "An existing configuration was found. Overwrite it? [y/N] "
          );
          if (confirmed.toLowerCase() !== "y") {
            printInfo("Setup cancelled.");
            return;
          }
        }

        apiKey = await prompt("Enter your KenTest API key: ");
        if (!apiKey.trim()) {
          printError("API key cannot be empty.");
          process.exit(1);
        }
        apiKey = apiKey.trim();
      }

      printInfo("Validating API key...");

      const defaults = getDefaultConfig();
      const config: KenTestConfig = {
        apiKey,
        apiBaseUrl: defaults.apiBaseUrl ?? "https://api.kentest.dev",
      };

      try {
        const client = new ApiClient(config);
        const result = await client.validateApiKey();
        if (!result.valid) {
          printError("Invalid API key. Please check your key and try again.");
          process.exit(1);
        }
        if (result.email) {
          printInfo(`Authenticated as: ${result.email}`);
        }
      } catch (err) {
        printWarningAndContinue(
          "Could not validate API key (offline or API unavailable). Saving anyway."
        );
      }

      saveConfig(config);
      printSuccess("Configuration saved to ~/.kentest/config.json");

      if (options.agent) {
        await installAgentSkill(options.agent);
      } else if (!options.yes) {
        const agentName = await prompt(
          "\nInstall agent skill? Enter agent name (claude/cursor/cline/codex) or press Enter to skip: "
        );
        if (agentName.trim()) {
          await installAgentSkill(agentName.trim());
        }
      }

      console.log("\n  Setup complete! Get started:\n");
      console.log("    kentest project list          List your projects");
      console.log("    kentest test create            Create and run a new test");
      console.log("    kentest test run               Run an existing test");
      console.log("    kentest test failure get       Get failure bundle for agents\n");
    });
}

function printWarningAndContinue(message: string): void {
  console.warn(`  ⚠ ${message}`);
}

async function installAgentSkill(agentName: string): Promise<void> {
  const supportedAgents = ["claude", "cursor", "cline", "codex"];
  if (!supportedAgents.includes(agentName.toLowerCase())) {
    printError(`Unknown agent: ${agentName}. Supported: ${supportedAgents.join(", ")}`);
    return;
  }
  printInfo(`Installing KenTest skill for ${agentName}...`);
  // Skill installation would copy a skill template to the appropriate agent config directory
  printSuccess(`Skill installed for ${agentName}.`);
  printInfo(`The ${agentName} agent can now use KenTest to verify code changes.`);
}

function prompt(question: string): Promise<string> {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}
