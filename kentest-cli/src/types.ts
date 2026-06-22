export interface KenTestConfig {
  apiKey: string;
  apiBaseUrl: string;
  projectId?: string;
}

export interface Project {
  id: string;
  name: string;
  url: string;
  createdAt: string;
  testCount: number;
}

export interface Test {
  id: string;
  projectId: string;
  name: string;
  description: string;
  status: "pending" | "running" | "passed" | "failed" | "error";
  createdAt: string;
  updatedAt: string;
  lastRunAt?: string;
  lastRunId?: string;
}

export interface TestRun {
  id: string;
  testId: string;
  projectId: string;
  status: "queued" | "running" | "passed" | "failed" | "error";
  startedAt?: string;
  completedAt?: string;
  durationMs?: number;
  failureBundle?: FailureBundle;
}

export interface FailureBundle {
  runId: string;
  testId: string;
  summary: string;
  rootCause: string;
  suggestedFix: string;
  steps: FailureStep[];
  screenshotUrls: string[];
  domSnapshot?: string;
  logs: string[];
}

export interface FailureStep {
  index: number;
  action: string;
  expected: string;
  actual: string;
  passed: boolean;
  screenshotUrl?: string;
}

export interface Agent {
  id: string;
  name: "claude" | "cursor" | "cline" | "codex" | "custom";
  displayName: string;
  skillPath?: string;
  installedAt?: string;
}

export interface ApiError {
  code: string;
  message: string;
  status: number;
}

export type OutputFormat = "human" | "json";
