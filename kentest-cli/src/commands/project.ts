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

export function registerProjectCommand(program: Command): void {
  const project = program
    .command("project")
    .description("Manage KenTest projects");

  project
    .command("list")
    .description("List all projects")
    .option("--json", "Output as JSON")
    .action(async (options: { json?: boolean }) => {
      const format = getOutputFormat(options);
      const config = requireConfig();
      const client = new ApiClient(config);

      try {
        const projects = await client.listProjects();
        if (format === "json") {
          printJson(projects);
          return;
        }
        if (projects.length === 0) {
          printInfo("No projects found. Create one with `kentest project create`.");
          return;
        }
        printTable(
          ["ID", "Name", "URL", "Tests", "Created"],
          projects.map((p) => [
            p.id,
            p.name,
            p.url,
            String(p.testCount),
            new Date(p.createdAt).toLocaleDateString(),
          ])
        );
      } catch (err) {
        handleApiError(err);
      }
    });

  project
    .command("get <projectId>")
    .description("Get details of a project")
    .option("--json", "Output as JSON")
    .action(async (projectId: string, options: { json?: boolean }) => {
      const format = getOutputFormat(options);
      const config = requireConfig();
      const client = new ApiClient(config);

      try {
        const p = await client.getProject(projectId);
        if (format === "json") {
          printJson(p);
          return;
        }
        printInfo(`ID:        ${p.id}`);
        printInfo(`Name:      ${p.name}`);
        printInfo(`URL:       ${p.url}`);
        printInfo(`Tests:     ${p.testCount}`);
        printInfo(`Created:   ${new Date(p.createdAt).toLocaleString()}`);
      } catch (err) {
        handleApiError(err);
      }
    });

  project
    .command("create <name> <url>")
    .description("Create a new project")
    .option("--json", "Output as JSON")
    .action(async (name: string, url: string, options: { json?: boolean }) => {
      const format = getOutputFormat(options);
      const config = requireConfig();
      const client = new ApiClient(config);

      try {
        const p = await client.createProject(name, url);
        if (format === "json") {
          printJson(p);
          return;
        }
        printSuccess(`Project created: ${p.name} (${p.id})`);
      } catch (err) {
        handleApiError(err);
      }
    });
}

function handleApiError(err: unknown): never {
  if (err instanceof Error) {
    printError(err.message);
  } else {
    printError("An unexpected error occurred.");
  }
  process.exit(1);
}
