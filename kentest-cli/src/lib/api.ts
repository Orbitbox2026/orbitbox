import type {
  KenTestConfig,
  Project,
  Test,
  TestRun,
  FailureBundle,
  Agent,
  ApiError,
} from "../types.js";

export class KenTestApiError extends Error {
  constructor(
    public readonly code: string,
    public readonly status: number,
    message: string
  ) {
    super(message);
    this.name = "KenTestApiError";
  }
}

export class ApiClient {
  private readonly baseUrl: string;
  private readonly apiKey: string;

  constructor(config: KenTestConfig) {
    this.baseUrl = config.apiBaseUrl.replace(/\/$/, "");
    this.apiKey = config.apiKey;
  }

  private async request<T>(
    method: string,
    path: string,
    body?: unknown
  ): Promise<T> {
    const url = `${this.baseUrl}${path}`;
    const headers: Record<string, string> = {
      Authorization: `Bearer ${this.apiKey}`,
      "Content-Type": "application/json",
      "User-Agent": "kentest-cli/0.1.0",
    };

    const res = await fetch(url, {
      method,
      headers,
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });

    if (!res.ok) {
      let errBody: Partial<ApiError> = {};
      try {
        errBody = (await res.json()) as Partial<ApiError>;
      } catch {}
      throw new KenTestApiError(
        errBody.code ?? "UNKNOWN",
        res.status,
        errBody.message ?? `HTTP ${res.status}: ${res.statusText}`
      );
    }

    if (res.status === 204) return undefined as T;
    return res.json() as Promise<T>;
  }

  // Auth
  async validateApiKey(): Promise<{ valid: boolean; email?: string }> {
    return this.request("GET", "/v1/auth/validate");
  }

  // Projects
  async listProjects(): Promise<Project[]> {
    return this.request("GET", "/v1/projects");
  }

  async getProject(projectId: string): Promise<Project> {
    return this.request("GET", `/v1/projects/${projectId}`);
  }

  async createProject(name: string, url: string): Promise<Project> {
    return this.request("POST", "/v1/projects", { name, url });
  }

  // Tests
  async listTests(projectId: string): Promise<Test[]> {
    return this.request("GET", `/v1/projects/${projectId}/tests`);
  }

  async getTest(projectId: string, testId: string): Promise<Test> {
    return this.request("GET", `/v1/projects/${projectId}/tests/${testId}`);
  }

  async createTest(
    projectId: string,
    name: string,
    description: string
  ): Promise<Test> {
    return this.request("POST", `/v1/projects/${projectId}/tests`, {
      name,
      description,
    });
  }

  async updateTest(
    projectId: string,
    testId: string,
    updates: Partial<Pick<Test, "name" | "description">>
  ): Promise<Test> {
    return this.request(
      "PATCH",
      `/v1/projects/${projectId}/tests/${testId}`,
      updates
    );
  }

  async deleteTest(projectId: string, testId: string): Promise<void> {
    return this.request("DELETE", `/v1/projects/${projectId}/tests/${testId}`);
  }

  // Test Runs
  async runTest(projectId: string, testId: string): Promise<TestRun> {
    return this.request(
      "POST",
      `/v1/projects/${projectId}/tests/${testId}/runs`
    );
  }

  async rerunTest(
    projectId: string,
    testId: string,
    runId: string
  ): Promise<TestRun> {
    return this.request(
      "POST",
      `/v1/projects/${projectId}/tests/${testId}/runs/${runId}/rerun`
    );
  }

  async getTestRun(
    projectId: string,
    testId: string,
    runId: string
  ): Promise<TestRun> {
    return this.request(
      "GET",
      `/v1/projects/${projectId}/tests/${testId}/runs/${runId}`
    );
  }

  async waitForRun(
    projectId: string,
    testId: string,
    runId: string,
    timeoutMs = 300_000,
    pollIntervalMs = 3_000
  ): Promise<TestRun> {
    const deadline = Date.now() + timeoutMs;
    while (Date.now() < deadline) {
      const run = await this.getTestRun(projectId, testId, runId);
      if (run.status === "passed" || run.status === "failed" || run.status === "error") {
        return run;
      }
      await new Promise((r) => setTimeout(r, pollIntervalMs));
    }
    throw new KenTestApiError("TIMEOUT", 408, `Run did not complete within ${timeoutMs / 1000}s`);
  }

  // Failures
  async getFailureBundle(
    projectId: string,
    testId: string,
    runId: string
  ): Promise<FailureBundle> {
    return this.request(
      "GET",
      `/v1/projects/${projectId}/tests/${testId}/runs/${runId}/failure`
    );
  }

  // Agents
  async listAgents(): Promise<Agent[]> {
    return this.request("GET", "/v1/agents");
  }
}
