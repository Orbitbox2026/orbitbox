import { Command } from "commander";
import { requireConfig, loadConfig } from "../lib/config.js";
import { ApiClient, KenTestApiError } from "../lib/api.js";
import {
  printJson,
  printError,
  printTable,
  printSuccess,
  printInfo,
  statusBadge,
  getOutputFormat,
} from "../lib/output.js";
import type { FailureBundle } from "../types.js";

export function registerTestCommand(program: Command): void {
  const test = program
    .command("test")
    .description("Manage and run KenTest tests");

  // test list
  test
    .command("list <projectId>")
    .description("List all tests in a project")
    .option("--json", "Output as JSON")
    .action(async (projectId: string, options: { json?: boolean }) => {
      const format = getOutputFormat(options);
      const config = requireConfig();
      const client = new ApiClient(config);

      try {
        const tests = await client.listTests(projectId);
        if (format === "json") {
          printJson(tests);
          return;
        }
        if (tests.length === 0) {
          printInfo("No tests found. Create one with `kentest test create`.");
          return;
        }
        printTable(
          ["ID", "Name", "Status", "Last Run"],
          tests.map((t) => [
            t.id,
            t.name,
            statusBadge(t.status),
            t.lastRunAt ? new Date(t.lastRunAt).toLocaleString() : "—",
          ])
        );
      } catch (err) {
        handleApiError(err);
      }
    });

  // test get
  test
    .command("get <projectId> <testId>")
    .description("Get details of a test")
    .option("--json", "Output as JSON")
    .action(async (projectId: string, testId: string, options: { json?: boolean }) => {
      const format = getOutputFormat(options);
      const config = requireConfig();
      const client = new ApiClient(config);

      try {
        const t = await client.getTest(projectId, testId);
        if (format === "json") {
          printJson(t);
          return;
        }
        printInfo(`ID:          ${t.id}`);
        printInfo(`Name:        ${t.name}`);
        printInfo(`Description: ${t.description}`);
        printInfo(`Status:      ${statusBadge(t.status)}`);
        printInfo(`Created:     ${new Date(t.createdAt).toLocaleString()}`);
        if (t.lastRunAt) {
          printInfo(`Last Run:    ${new Date(t.lastRunAt).toLocaleString()}`);
        }
      } catch (err) {
        handleApiError(err);
      }
    });

  // test create
  test
    .command("create <projectId>")
    .description("Create a new test and optionally run it")
    .requiredOption("--name <name>", "Test name")
    .requiredOption("--desc <description>", "What behavior this test verifies")
    .option("--run", "Run the test immediately after creating it")
    .option("--wait", "Wait for the run to complete (implies --run)")
    .option("--json", "Output as JSON")
    .action(
      async (
        projectId: string,
        options: {
          name: string;
          desc: string;
          run?: boolean;
          wait?: boolean;
          json?: boolean;
        }
      ) => {
        const format = getOutputFormat(options);
        const config = requireConfig();
        const client = new ApiClient(config);
        const shouldRun = options.run || options.wait;

        try {
          const t = await client.createTest(projectId, options.name, options.desc);

          if (!shouldRun) {
            if (format === "json") {
              printJson(t);
              return;
            }
            printSuccess(`Test created: ${t.name} (${t.id})`);
            printInfo(`Run it with: kentest test run ${projectId} ${t.id}`);
            return;
          }

          if (format !== "json") printInfo("Running test...");
          const run = await client.runTest(projectId, t.id);

          if (!options.wait) {
            if (format === "json") {
              printJson({ test: t, run });
              return;
            }
            printSuccess(`Test created and run started (${run.id})`);
            printInfo(`Check status: kentest test run-status ${projectId} ${t.id} ${run.id}`);
            return;
          }

          if (format !== "json") printInfo("Waiting for results...");
          const completed = await client.waitForRun(projectId, t.id, run.id);

          if (format === "json") {
            printJson({ test: t, run: completed });
            return;
          }

          printInfo(`Status: ${statusBadge(completed.status)}`);
          if (completed.status === "failed" || completed.status === "error") {
            printInfo(`Get failure details: kentest test failure get ${projectId} ${t.id} ${run.id}`);
          }
        } catch (err) {
          handleApiError(err);
        }
      }
    );

  // test update
  test
    .command("update <projectId> <testId>")
    .description("Update a test's metadata")
    .option("--name <name>", "New test name")
    .option("--desc <description>", "New description")
    .option("--json", "Output as JSON")
    .action(
      async (
        projectId: string,
        testId: string,
        options: { name?: string; desc?: string; json?: boolean }
      ) => {
        const format = getOutputFormat(options);
        const config = requireConfig();
        const client = new ApiClient(config);

        if (!options.name && !options.desc) {
          printError("Provide at least --name or --desc to update.");
          process.exit(1);
        }

        try {
          const updates: { name?: string; description?: string } = {};
          if (options.name) updates.name = options.name;
          if (options.desc) updates.description = options.desc;

          const t = await client.updateTest(projectId, testId, updates);
          if (format === "json") {
            printJson(t);
            return;
          }
          printSuccess(`Test updated: ${t.name}`);
        } catch (err) {
          handleApiError(err);
        }
      }
    );

  // test delete
  test
    .command("delete <projectId> <testId>")
    .description("Delete a test")
    .option("--yes", "Skip confirmation")
    .action(async (projectId: string, testId: string, options: { yes?: boolean }) => {
      const config = requireConfig();
      const client = new ApiClient(config);

      if (!options.yes) {
        const { createInterface } = await import("readline");
        const rl = createInterface({ input: process.stdin, output: process.stdout });
        await new Promise<void>((resolve) => {
          rl.question(`Delete test ${testId}? [y/N] `, (answer) => {
            rl.close();
            if (answer.toLowerCase() !== "y") {
              printInfo("Cancelled.");
              process.exit(0);
            }
            resolve();
          });
        });
      }

      try {
        await client.deleteTest(projectId, testId);
        printSuccess(`Test ${testId} deleted.`);
      } catch (err) {
        handleApiError(err);
      }
    });

  // test run
  test
    .command("run <projectId> <testId>")
    .description("Run a test")
    .option("--wait", "Wait for the run to complete")
    .option("--json", "Output as JSON")
    .action(
      async (
        projectId: string,
        testId: string,
        options: { wait?: boolean; json?: boolean }
      ) => {
        const format = getOutputFormat(options);
        const config = requireConfig();
        const client = new ApiClient(config);

        try {
          if (format !== "json") printInfo("Starting test run...");
          const run = await client.runTest(projectId, testId);

          if (!options.wait) {
            if (format === "json") {
              printJson(run);
              return;
            }
            printSuccess(`Run started: ${run.id}`);
            printInfo(`Wait for it: kentest test wait ${projectId} ${testId} ${run.id}`);
            return;
          }

          if (format !== "json") printInfo("Waiting for results...");
          const completed = await client.waitForRun(projectId, testId, run.id);

          if (format === "json") {
            printJson(completed);
            return;
          }
          printInfo(`Status: ${statusBadge(completed.status)}`);
          if (completed.durationMs) {
            printInfo(`Duration: ${(completed.durationMs / 1000).toFixed(1)}s`);
          }
          if (completed.status === "failed" || completed.status === "error") {
            printInfo(
              `Get failure details: kentest test failure get ${projectId} ${testId} ${completed.id}`
            );
          }
        } catch (err) {
          handleApiError(err);
        }
      }
    );

  // test rerun
  test
    .command("rerun <projectId> <testId> <runId>")
    .description("Re-run a specific test run")
    .option("--wait", "Wait for the run to complete")
    .option("--json", "Output as JSON")
    .action(
      async (
        projectId: string,
        testId: string,
        runId: string,
        options: { wait?: boolean; json?: boolean }
      ) => {
        const format = getOutputFormat(options);
        const config = requireConfig();
        const client = new ApiClient(config);

        try {
          if (format !== "json") printInfo("Re-running test...");
          const run = await client.rerunTest(projectId, testId, runId);

          if (!options.wait) {
            if (format === "json") {
              printJson(run);
              return;
            }
            printSuccess(`Re-run started: ${run.id}`);
            return;
          }

          if (format !== "json") printInfo("Waiting for results...");
          const completed = await client.waitForRun(projectId, testId, run.id);

          if (format === "json") {
            printJson(completed);
            return;
          }
          printInfo(`Status: ${statusBadge(completed.status)}`);
        } catch (err) {
          handleApiError(err);
        }
      }
    );

  // test wait
  test
    .command("wait <projectId> <testId> <runId>")
    .description("Wait for a running test to complete")
    .option("--timeout <ms>", "Timeout in milliseconds", "300000")
    .option("--json", "Output as JSON")
    .action(
      async (
        projectId: string,
        testId: string,
        runId: string,
        options: { timeout: string; json?: boolean }
      ) => {
        const format = getOutputFormat(options);
        const config = requireConfig();
        const client = new ApiClient(config);

        try {
          if (format !== "json") printInfo("Waiting for run to complete...");
          const completed = await client.waitForRun(
            projectId,
            testId,
            runId,
            parseInt(options.timeout, 10)
          );

          if (format === "json") {
            printJson(completed);
            return;
          }
          printInfo(`Status: ${statusBadge(completed.status)}`);
        } catch (err) {
          handleApiError(err);
        }
      }
    );

  // test failure get
  const failure = test
    .command("failure")
    .description("Get failure information for a test run");

  failure
    .command("get <projectId> <testId> <runId>")
    .description(
      "Get the failure bundle for a test run (agent-optimized output)"
    )
    .option("--json", "Output as JSON")
    .action(
      async (
        projectId: string,
        testId: string,
        runId: string,
        options: { json?: boolean }
      ) => {
        const format = getOutputFormat(options);
        const config = requireConfig();
        const client = new ApiClient(config);

        try {
          const bundle = await client.getFailureBundle(projectId, testId, runId);

          if (format === "json") {
            printJson(bundle);
            return;
          }

          printFailureBundle(bundle);
        } catch (err) {
          handleApiError(err);
        }
      }
    );
}

function printFailureBundle(bundle: FailureBundle): void {
  console.log("\n  FAILURE BUNDLE\n");
  console.log(`  Summary:    ${bundle.summary}`);
  console.log(`  Root Cause: ${bundle.rootCause}`);
  console.log(`\n  Suggested Fix:\n  ${bundle.suggestedFix}`);

  if (bundle.steps.length > 0) {
    console.log("\n  Failed Steps:");
    for (const step of bundle.steps.filter((s) => !s.passed)) {
      console.log(`    Step ${step.index}: ${step.action}`);
      console.log(`      Expected: ${step.expected}`);
      console.log(`      Actual:   ${step.actual}`);
      if (step.screenshotUrl) {
        console.log(`      Screenshot: ${step.screenshotUrl}`);
      }
    }
  }

  if (bundle.screenshotUrls.length > 0) {
    console.log("\n  Screenshots:");
    bundle.screenshotUrls.forEach((url) => console.log(`    ${url}`));
  }

  if (bundle.logs.length > 0) {
    console.log("\n  Logs:");
    bundle.logs.forEach((log) => console.log(`    ${log}`));
  }
  console.log("");
}

function handleApiError(err: unknown): never {
  if (err instanceof Error) {
    printError(err.message);
  } else {
    printError("An unexpected error occurred.");
  }
  process.exit(1);
}
