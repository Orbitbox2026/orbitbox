# KenTest Skill

Use the `kentest` CLI to run AI-powered browser tests and verify every code change you ship.

## When to use

After modifying UI components, API endpoints, or any user-facing behavior — run the relevant KenTest tests to confirm correctness before marking the task complete.

## Core Loop

```
kentest test run <projectId> <testId> --wait --json
  → status: "passed" → done
  → status: "failed" → kentest test failure get <projectId> <testId> <runId> --json
                         → read rootCause + suggestedFix → fix code → rerun
```

## Command Reference

### Setup & Auth
```bash
kentest setup                          # Interactive setup
kentest setup --from-env --yes         # CI setup (uses KENTEST_API_KEY env var)
kentest auth status --json             # Check authentication
kentest auth remove                    # Remove credentials
```

### Projects
```bash
kentest project list --json            # List all projects
kentest project get <projectId> --json # Get project details
kentest project create <name> <url>    # Create a new project
```

### Tests
```bash
kentest test list <projectId> --json   # List tests
kentest test get <projectId> <testId> --json  # Get test details
kentest test create <projectId> \
  --name "User can log in" \
  --desc "Navigate to /login, fill credentials, submit, verify redirect to /dashboard" \
  --run --wait --json                  # Create + run + wait
kentest test update <projectId> <testId> --name "new name"
kentest test delete <projectId> <testId> --yes
```

### Running Tests
```bash
kentest test run <projectId> <testId> --wait --json    # Run and wait
kentest test rerun <projectId> <testId> <runId> --wait # Re-run specific run
kentest test wait <projectId> <testId> <runId> --json  # Wait for queued run
```

### Failures (use this when a run fails)
```bash
kentest test failure get <projectId> <testId> <runId> --json
```
This returns a single self-contained bundle with:
- `summary` — one-line description of what failed
- `rootCause` — why it failed
- `suggestedFix` — what to change in the code
- `steps` — each step with expected vs actual
- `screenshotUrls` — visual evidence
- `logs` — browser/server logs

### Agent Skills
```bash
kentest agent list                     # List available agent integrations
kentest agent install claude           # Install this skill for Claude
kentest agent install cursor           # Install for Cursor
```

## Exit Codes

| Code | Meaning |
|------|---------|
| 0    | Success |
| 1    | Error (auth failure, API error, test failed) |

## Notes

- Always pass `--json` when parsing output in code
- `test failure get` is the primary command for understanding failures — it returns everything needed to fix the issue in one request
- Set `KENTEST_API_KEY` in CI environments instead of running interactive setup
