import { Command } from "commander";
import { requireConfig } from "../lib/config.js";
import { ApiClient } from "../lib/api.js";
import {
  printJson,
  printError,
  printTable,
  printSuccess,
  printInfo,
  getOutputFormat,
} from "../lib/output.js";
import { homedir } from "os";
import { join } from "path";
import { existsSync, mkdirSync, writeFileSync } from "fs";

const SUPPORTED_AGENTS = ["claude", "cursor", "cline", "codex"] as const;
type AgentName = (typeof SUPPORTED_AGENTS)[number];

export function registerAgentCommand(program: Command): void {
  const agent = program
    .command("agent")
    .description("Manage agent skill integrations");

  agent
    .command("list")
    .description("List available agent integrations")
    .option("--json", "Output as JSON")
    .action(async (options: { json?: boolean }) => {
      const format = getOutputFormat(options);
      const agents = SUPPORTED_AGENTS.map((name) => ({
        name,
        displayName: getDisplayName(name),
        skillPath: getSkillPath(name),
        installed: existsSync(getSkillPath(name)),
      }));

      if (format === "json") {
        printJson(agents);
        return;
      }

      printTable(
        ["Agent", "Skill Path", "Installed"],
        agents.map((a) => [a.displayName, a.skillPath, a.installed ? "✓ yes" : "—"])
      );
    });

  agent
    .command("install <agentName>")
    .description(`Install KenTest skill for an agent (${SUPPORTED_AGENTS.join("|")})`)
    .option("--json", "Output as JSON")
    .action(async (agentName: string, options: { json?: boolean }) => {
      const format = getOutputFormat(options);

      if (!SUPPORTED_AGENTS.includes(agentName as AgentName)) {
        printError(
          `Unknown agent: ${agentName}. Supported: ${SUPPORTED_AGENTS.join(", ")}`
        );
        process.exit(1);
      }

      const name = agentName as AgentName;
      const skillPath = getSkillPath(name);
      const skillDir = skillPath.substring(0, skillPath.lastIndexOf("/"));

      try {
        if (!existsSync(skillDir)) {
          mkdirSync(skillDir, { recursive: true });
        }
        const skillContent = generateSkillContent(name);
        writeFileSync(skillPath, skillContent, { encoding: "utf-8", mode: 0o644 });

        if (format === "json") {
          printJson({ agent: name, skillPath, installed: true });
          return;
        }
        printSuccess(`KenTest skill installed for ${getDisplayName(name)}`);
        printInfo(`Skill path: ${skillPath}`);
        printInfo(
          `The ${getDisplayName(name)} agent can now use kentest to verify code changes.`
        );
      } catch (err) {
        if (err instanceof Error) {
          printError(`Failed to install skill: ${err.message}`);
        }
        process.exit(1);
      }
    });
}

function getDisplayName(name: AgentName): string {
  const names: Record<AgentName, string> = {
    claude: "Claude (Anthropic)",
    cursor: "Cursor",
    cline: "Cline",
    codex: "OpenAI Codex",
  };
  return names[name];
}

function getSkillPath(name: AgentName): string {
  const home = homedir();
  const paths: Record<AgentName, string> = {
    claude: join(home, ".claude", "skills", "kentest.md"),
    cursor: join(home, ".cursor", "skills", "kentest.md"),
    cline: join(home, ".cline", "skills", "kentest.md"),
    codex: join(home, ".codex", "skills", "kentest.md"),
  };
  return paths[name];
}

function generateSkillContent(name: AgentName): string {
  return `# KenTest Skill

Use the \`kentest\` CLI to run browser tests and verify your code changes.

## When to use

After making code changes that affect UI behavior or API responses, run KenTest to verify the implementation is correct.

## Workflow

1. Run the relevant test:
   \`\`\`
   kentest test run <projectId> <testId> --wait --json
   \`\`\`

2. If the test fails, get the failure bundle:
   \`\`\`
   kentest test failure get <projectId> <testId> <runId> --json
   \`\`\`

3. Read the \`rootCause\` and \`suggestedFix\` fields to understand what needs to change.

4. Fix the code and rerun.

## Key Commands

- \`kentest test list <projectId>\` — list all tests
- \`kentest test run <projectId> <testId> --wait\` — run and wait for result
- \`kentest test failure get <projectId> <testId> <runId>\` — get failure details
- \`kentest auth status\` — verify authentication
- \`kentest project list\` — list your projects

## Notes

- Always use \`--json\` flag when processing output programmatically
- \`test failure get\` returns a self-contained bundle — do not navigate a dashboard
- Exit code 0 = success, non-zero = failure or error
`;
}
