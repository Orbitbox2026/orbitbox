#!/usr/bin/env node
import { Command } from "commander";
import { registerSetupCommand } from "./commands/setup.js";
import { registerAuthCommand } from "./commands/auth.js";
import { registerProjectCommand } from "./commands/project.js";
import { registerTestCommand } from "./commands/test.js";
import { registerAgentCommand } from "./commands/agent.js";

const program = new Command();

program
  .name("kentest")
  .description("KenTest CLI — AI-powered browser testing for coding agents")
  .version("0.1.0")
  .option("--json", "Output results as JSON (applies to all subcommands)")
  .addHelpText(
    "after",
    `
Examples:
  $ kentest setup                                        Configure API key
  $ kentest auth status                                  Check authentication
  $ kentest project list                                 List projects
  $ kentest test create <projectId> --name "Login flow" --desc "User can log in" --run --wait
  $ kentest test run <projectId> <testId> --wait         Run a test and wait
  $ kentest test failure get <projectId> <testId> <runId>  Get failure bundle
  $ kentest agent install claude                         Install Claude skill

Environment variables:
  KENTEST_API_KEY       API key (alternative to running setup)
  KENTEST_API_BASE_URL  Override API base URL
`
  );

registerSetupCommand(program);
registerAuthCommand(program);
registerProjectCommand(program);
registerTestCommand(program);
registerAgentCommand(program);

program.parse(process.argv);
