# KenTest CLI

> AI-powered browser testing platform for coding agents.

AI ships code in minutes — verifying it hasn't. KenTest closes that gap.

## What it does

KenTest runs real browser tests against your live application and returns agent-optimized failure bundles containing root causes, screenshots, DOM snapshots, and suggested fixes — designed for autonomous code improvement loops.

```
code change → kentest test run → failure bundle → agent fixes → rerun → pass
```

## Installation

```bash
npm install -g @kentest/kentest-cli
kentest setup
```

Requires Node.js ≥ 20.

## Quick Start

```bash
# 1. Authenticate
kentest setup

# 2. Create a project
kentest project create "My App" "https://myapp.com"

# 3. Create and run a test
kentest test create <projectId> \
  --name "User can log in" \
  --desc "Navigate to /login, enter credentials, submit, verify redirect to /dashboard" \
  --run --wait

# 4. Get failure details when a test fails
kentest test failure get <projectId> <testId> <runId>
```

## Commands

| Command | Description |
|---------|-------------|
| `setup` | Configure API key and install agent skill |
| `auth status` | Show authentication status |
| `auth remove` | Remove saved credentials |
| `project list` | List all projects |
| `project get <id>` | Get project details |
| `project create <name> <url>` | Create a new project |
| `test list <projectId>` | List all tests |
| `test get <projectId> <testId>` | Get test details |
| `test create <projectId>` | Create a new test |
| `test update <projectId> <testId>` | Update test metadata |
| `test delete <projectId> <testId>` | Delete a test |
| `test run <projectId> <testId>` | Run a test |
| `test rerun <projectId> <testId> <runId>` | Re-run a specific run |
| `test wait <projectId> <testId> <runId>` | Wait for a run to complete |
| `test failure get <projectId> <testId> <runId>` | Get failure bundle |
| `agent list` | List available agent integrations |
| `agent install <name>` | Install agent skill |

## Failure Bundle

When a test fails, `kentest test failure get` returns a single self-consistent bundle:

```json
{
  "runId": "run_abc123",
  "testId": "test_xyz",
  "summary": "Login form submission fails due to missing CSRF token",
  "rootCause": "The /api/auth/login endpoint returns 403 when X-CSRF-Token header is absent",
  "suggestedFix": "Include the CSRF token from the cookie jar in the request headers",
  "steps": [
    {
      "index": 3,
      "action": "Click submit button",
      "expected": "Redirect to /dashboard",
      "actual": "Error message: Invalid request",
      "passed": false,
      "screenshotUrl": "https://..."
    }
  ],
  "screenshotUrls": ["https://..."],
  "logs": ["POST /api/auth/login 403 Forbidden"]
}
```

## CI / Non-Interactive Setup

```bash
KENTEST_API_KEY=kt-... kentest setup --from-env --yes --agent claude
```

## Agent Integration

KenTest installs as a skill for popular coding agents:

```bash
kentest agent install claude    # Claude (Anthropic)
kentest agent install cursor    # Cursor
kentest agent install cline     # Cline
kentest agent install codex     # OpenAI Codex
```

After installation, the agent knows to run `kentest test failure get` after any failing test and use the bundle to fix the code.

## JSON Output

All commands support `--json` for machine-readable output:

```bash
kentest test run <projectId> <testId> --wait --json
kentest test failure get <projectId> <testId> <runId> --json
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `KENTEST_API_KEY` | API key (alternative to `kentest setup`) |
| `KENTEST_API_BASE_URL` | Override the API base URL |

## License

Apache 2.0
