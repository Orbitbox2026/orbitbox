import Header from '../components/Header';
import { Logo } from '../components/Logo';

const featureColumns = [
  {
    title: 'Platform',
    items: ['Organizations', 'API keys', 'Limits', 'Audit logs', 'OpenTelemetry'],
  },
  {
    title: 'Sandboxes',
    items: ['Environments', 'Snapshots', 'Volumes', 'Regions', 'Declarative builder'],
  },
  {
    title: 'Agent tools',
    items: ['Process execution', 'Filesystem API', 'Git operations', 'PTY sessions', 'MCP server'],
  },
  {
    title: 'Human tools',
    items: ['Dashboard', 'Web terminal', 'SSH access', 'Preview URLs', 'VNC access'],
  },
];

const workflow = [
  ['Develop', 'blue', 'Agents create files, install packages, run commands, and iterate inside a clean workspace.'],
  ['Preview', 'indigo', 'Expose ports, inspect app previews, stream logs, and approve changes before merge.'],
  ['Ship', 'navy', 'Snapshot the verified state, export artifacts, or hand the result to your deploy pipeline.'],
];

const projectNotes = [
  ['What it is', "OrbitBox is a landing page concept for secure, elastic AI-code sandboxes inspired by Daytona's public positioning."],
  ['What it does', 'It explains isolated runtime infrastructure for agents: sandbox lifecycle, snapshots, process execution, previews, and human access.'],
  ['What is original', 'The OrbitBox name, logo, copy structure, CSS animation, terminal mockup, and page implementation are custom-built for this project.'],
];

const docsSidebar = [
  { href: '#docs-overview', label: 'Overview OrbitBox' },
  { href: '#docs-sandbox', label: 'Sandbox Concept' },
  { href: '#docs-lifecycle', label: 'Lifecycle' },
  { href: '#docs-security', label: 'Security Model' },
  { href: '#docs-workflow', label: 'Agent Workflow' },
  { href: '#docs-quickstart', label: 'Quickstart' },
  { href: '#docs-api', label: 'Conceptual API' },
  { href: '#docs-faq', label: 'FAQ' },
];

const docsOnPage = [
  { href: '#docs-overview', label: 'Overview' },
  { href: '#docs-sandbox', label: 'Sandbox Concept' },
  { href: '#docs-lifecycle', label: 'Lifecycle' },
  { href: '#docs-security', label: 'Security' },
  { href: '#docs-workflow', label: 'Agent Workflow' },
  { href: '#docs-quickstart', label: 'Quickstart' },
  { href: '#docs-api', label: 'API' },
  { href: '#docs-faq', label: 'FAQ' },
];

export default function Home() {
  return (
    <main>
      <Header />

      <section id="top" className="hero reveal">
        <div className="hero-logo-lockup" aria-hidden="true">
          <Logo />
        </div>
        <div className="eyebrow">AI runtime infrastructure</div>
        <h1>
          Run AI Code.
          <br />
          Secure and Elastic Infrastructure for AI-Generated Code.
        </h1>
        <p>
          OrbitBox gives agents full composable computers with isolation, snapshots,
          filesystem access, process execution, previews, and human controls — built for
          code that should run fast but never run loose.
        </p>
        <div className="hero-actions">
          <a className="primary-btn" href="#demo">Get started</a>
          <a className="secondary-btn" href="https://github.com/Orbitbox2026/orbitbox" target="_blank" rel="noreferrer">GitHub repo</a>
        </div>

        <div className="hero-stage" role="img" aria-label="Animated sandbox runtime preview">
          <div className="sandbox-orbit orbit-one" />
          <div className="sandbox-orbit orbit-two" />
          <div className="runtime-node node-a">agent</div>
          <div className="runtime-node node-b">api</div>
          <div className="runtime-node node-c">pty</div>
          <div className="terminal-card">
            <div className="terminal-top">
              <span /> <span /> <span />
              <strong>orbitbox sandbox create ai-worker</strong>
            </div>
            <pre>{`$ orbitbox sandbox create ai-worker --snapshot node
✓ full computer allocated
✓ dedicated kernel boundary
✓ filesystem + network policy mounted
✓ preview tunnel online
✓ sandbox ready in 88ms

https://ai-worker.preview.orbitbox.dev`}</pre>
          </div>
        </div>
      </section>

      <section id="platform" className="section intro-band reveal">
        <span className="mono-label">Why OrbitBox</span>
        <h2>Safe execution for code produced by autonomous systems.</h2>
        <p>
          AI agents need more than a function call. They need computers: package managers,
          terminals, long-running processes, previews, snapshots, and permission boundaries.
          OrbitBox presents that idea as a clean product landing page.
        </p>
      </section>

      <section className="section quick-explain reveal" aria-label="Short OrbitBox project explanation">
        <div>
          <span className="mono-label">Project summary</span>
          <h2>OrbitBox is a Daytona-style concept for running AI code safely.</h2>
        </div>
        <p>
          It is not the real Daytona product. It is a custom Next.js landing page that demonstrates
          the same category: isolated sandboxes, fast startup, snapshots, terminal access, preview URLs,
          and controlled infrastructure for autonomous coding agents.
        </p>
      </section>

      <section id="sandboxes" className="section matrix-section reveal">
        <div className="section-copy">
          <span className="mono-label">Feature matrix</span>
          <h2>From sandbox lifecycle to human-in-the-loop access.</h2>
        </div>
        <div className="feature-matrix">
          {featureColumns.map((column) => (
            <article className="matrix-card" key={column.title}>
              <h3>{column.title}</h3>
              <ul>
                {column.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="workflow" className="section workflow-section reveal">
        <span className="mono-label">Workflow</span>
        <h2>Develop, preview, ship — every phase inside a controlled boundary.</h2>
        <div className="pipeline" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="workflow">
          {workflow.map(([title, color, body]) => (
            <article className={`workflow-step ${color}`} key={title}>
              <span>{title}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="security" className="section security-panel reveal">
        <div>
          <span className="mono-label">Security model</span>
          <h2>Designed for untrusted code execution.</h2>
          <p>
            Resource quotas, network policies, isolated kernels, ephemeral volumes,
            preview links, logs, and snapshots let agents explore freely while production
            systems remain protected.
          </p>
        </div>
        <div className="checklist">
          <span>Dedicated kernel boundary</span>
          <span>Policy-controlled network</span>
          <span>Ephemeral or persistent volumes</span>
          <span>Logs, previews, and PTY access</span>
        </div>
      </section>

      <section id="project" className="section project-section reveal">
        <span className="mono-label">Project explanation</span>
        <h2>OrbitBox project explanation.</h2>
        <div className="project-grid">
          {projectNotes.map(([title, body]) => (
            <article className="project-card" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <p className="legal-note">
          Note: the design is intentionally closer to Daytona's visual tone, while still using an original name,
          logo, animation, and copy so it does not directly copy Daytona assets or trademarks.
        </p>
      </section>

      {/* ── GitBook-style Docs ────────────────────────────────────── */}
      <section id="docs" className="section docs-section reveal">
        <div className="docs-section-header">
          <span className="mono-label">Documentation</span>
          <h2>Complete OrbitBox guide.</h2>
          <p className="docs-intro">
            Technical and conceptual references for understanding how OrbitBox works —
            from sandbox concepts to quickstart examples.
          </p>
        </div>

        <div className="docs-layout">
          {/* Left sidebar — table of contents */}
          <aside className="docs-sidebar" aria-label="Documentation table of contents">
            <p className="sidebar-heading">On this page</p>
            <nav>
              {docsSidebar.map((item) => (
                <a key={item.href} href={item.href} className="sidebar-link">
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Central article content */}
          <article className="docs-content">

            <h2 id="docs-overview">Overview OrbitBox</h2>
            <p>
              OrbitBox is a runtime infrastructure platform designed to run
              AI-generated code safely, in isolation, and efficiently. Unlike
              traditional approaches that rely only on simple function executors,
              OrbitBox gives AI agents a <strong>complete computer</strong> — a dedicated
              kernel boundary, private filesystem, controlled network connectivity, and
              interactive terminal access.
            </p>
            <p>
              This means AI agents are no longer limited to function calls. They
              can install packages, run long-lived processes, create and
              modify files, access databases, and preview web applications —
              all inside an isolated environment that can be discarded when
              it is no longer needed.
            </p>

            <h2 id="docs-sandbox">Sandbox Concept</h2>
            <p>
              A sandbox in OrbitBox is a self-contained compute unit. Each
              sandbox operates independently and does not share state with other
              sandboxes. These are the core components of a sandbox:
            </p>
            <ul>
              <li><strong>Dedicated kernel boundary</strong> — processes inside the sandbox cannot affect processes outside it.</li>
              <li><strong>Isolated filesystem</strong> — every sandbox has its own filesystem.</li>
              <li><strong>Network policy</strong> — outbound network access is controlled through configurable policies.</li>
              <li><strong>Resource quotas</strong> — CPU, memory, and disk are limited according to platform configuration.</li>
              <li><strong>Preview URL</strong> — every exposed port receives a secure URL for human access.</li>
            </ul>
            <p>
              A sandbox can be <strong>ephemeral</strong> (automatically discarded after
              completion) or <strong>persistent</strong> (data is stored in durable volumes
              that can be snapshotted).
            </p>

            <h2 id="docs-lifecycle">Lifecycle</h2>
            <p>
              Every sandbox moves through a structured lifecycle. Understanding this
              lifecycle is important for designing efficient agent workflows.
            </p>

            <h3>1. Create</h3>
            <p>
              A sandbox is created from a snapshot or base template, such as a
              Node.js, Python, or custom image. Initialization usually completes
              in under 100&nbsp;ms because OrbitBox uses a fast copy-on-write
              snapshot mechanism.
            </p>

            <h3>2. Run</h3>
            <p>
              Agents or users run commands inside the sandbox through the Process API,
              PTY sessions, or the Filesystem API. In this phase, agents can install dependencies,
              write code, run servers, and iterate on changes.
            </p>

            <h3>3. Preview</h3>
            <p>
              Application ports are exposed through secure URLs that humans can access
              for human-in-the-loop review. Preview URLs remain available while the sandbox is active
              and do not require additional network configuration.
            </p>

            <h3>4. Snapshot</h3>
            <p>
              The verified sandbox state is saved as a snapshot. This snapshot
              can be used as the base for the next sandbox, so setup does not need
              to be repeated from scratch.
            </p>

            <h3>5. Dispose</h3>
            <p>
              The sandbox is stopped and all resources are released. Ephemeral data is deleted
              automatically. Data stored in persistent volumes remains available
              for future sessions.
            </p>

            <h2 id="docs-security">Security Model</h2>
            <p>
              OrbitBox is designed around the principle of <em>untrusted code execution by default</em>.
              Every infrastructure layer assumes that code running inside it
              cannot be fully trusted.
            </p>
            <ul>
              <li><strong>Kernel isolation</strong> — every sandbox has its own kernel boundary, not just a standard container namespace.</li>
              <li><strong>Network egress policy</strong> — outbound network traffic is controlled by policy, not only by a host-level firewall.</li>
              <li><strong>Ephemeral volumes</strong> — temporary volumes are discarded automatically on dispose, leaving no residual data.</li>
              <li><strong>Audit logs</strong> — every operation is recorded in audit logs that can be exported to OpenTelemetry.</li>
              <li><strong>Preview tunnel</strong> — preview URLs use encrypted tunnels and do not expose the server IP directly.</li>
              <li><strong>Resource quotas</strong> — CPU and memory are limited per sandbox, preventing one sandbox from monopolizing resources.</li>
            </ul>

            <h2 id="docs-workflow">Agent Workflow</h2>
            <p>
              The following is a typical AI-agent workflow using OrbitBox
              to complete a development task:
            </p>
            <ul>
              <li>The agent receives instructions from an orchestrator, for example: &ldquo;Build a simple REST API with Node.js and Express&rdquo;.</li>
              <li>The agent creates a new sandbox using the OrbitBox API or CLI.</li>
              <li>The agent installs dependencies through the Process API by running <code>npm install</code> inside the sandbox.</li>
              <li>The agent writes code files using the Filesystem API.</li>
              <li>The agent runs a server through a PTY session and monitors log output.</li>
              <li>The agent retrieves the Preview URL and sends it to a human for review.</li>
              <li>After approval, a snapshot is created and the sandbox is disposed.</li>
            </ul>
            <p>
              This entire flow can be executed automatically by agents without human intervention,
              except at review points that require approval.
            </p>

            <h2 id="docs-quickstart">Quickstart</h2>
            <p>
              The following CLI commands use placeholders. Replace{' '}
              <code>{'<YOUR-API-KEY>'}</code> with the API key obtained from
              the OrbitBox dashboard.
            </p>
            <pre><code>{`# Set the API key environment variable
export ORBITBOX_API_KEY=<YOUR-API-KEY>

# Create a new sandbox from the Node.js 20 snapshot
orbitbox sandbox create my-workspace --snapshot node-20

# Run a command inside the sandbox
orbitbox exec my-workspace -- npm install express

# Write a file into the sandbox
orbitbox fs write my-workspace /app/server.js --from ./server.js

# Run the server in a PTY session
orbitbox exec my-workspace --pty -- node /app/server.js

# View the preview URL
orbitbox sandbox info my-workspace --json | jq '.preview_url'

# Save the current state as a snapshot
orbitbox snapshot create my-workspace --name baseline-v1

# Dispose the sandbox after completion
orbitbox sandbox dispose my-workspace`}</code></pre>
            <p>
              All commands above are idempotent — running the same command again
              will not create duplicates if the state already matches.
            </p>

            <h2 id="docs-api">Conceptual API</h2>
            <p>
              OrbitBox provides a REST API for programmatic integrations from any
              programming language. The following endpoints are conceptual examples with
              placeholder URLs — not active production endpoints.
            </p>

            <h3>Create a Sandbox</h3>
            <pre><code>{`POST https://api.orbitbox.example/v1/sandboxes
Authorization: Bearer <YOUR-API-KEY>
Content-Type: application/json

{
  "name": "ai-worker",
  "snapshot": "node-20",
  "region": "ap-southeast-1",
  "resources": {
    "cpu": 2,
    "memory_mb": 2048
  }
}`}</code></pre>

            <h3>Example Response</h3>
            <pre><code>{`{
  "id": "sbx_xxxxxxxxxxxx",
  "name": "ai-worker",
  "status": "running",
  "preview_url": "https://ai-worker.preview.orbitbox.example",
  "region": "ap-southeast-1",
  "created_at": "2026-01-01T00:00:00Z"
}`}</code></pre>

            <h3>Run a Command</h3>
            <pre><code>{`POST https://api.orbitbox.example/v1/sandboxes/sbx_xxxxxxxxxxxx/exec
Authorization: Bearer <YOUR-API-KEY>
Content-Type: application/json

{
  "command": ["npm", "install", "express"],
  "workdir": "/app",
  "env": { "NODE_ENV": "development" }
}`}</code></pre>

            <h2 id="docs-faq">FAQ</h2>

            <h3>How is an OrbitBox sandbox different from a regular container?</h3>
            <p>
              Traditional containers such as Docker share the host kernel and rely on
              namespaces for isolation. OrbitBox sandboxes use a stronger kernel boundary,
              providing more robust isolation for running untrusted code.
            </p>

            <h3>How long can a sandbox run?</h3>
            <p>
              A sandbox can run for as long as the task requires. For temporary workloads,
              use ephemeral mode. For projects that need continuity,
              use persistent volumes and create snapshots regularly.
            </p>

            <h3>Is data inside one sandbox safe from other sandboxes?</h3>
            <p>
              Yes. Every sandbox has an isolated filesystem. Data does not leak into
              other sandboxes. For additional security, enable volume encryption and
              ensure audit logs are sent to your SIEM system.
            </p>

            <h3>How do I access a sandbox interactively?</h3>
            <p>
              Three options are available: the web terminal in the OrbitBox dashboard, direct SSH into
              the sandbox using keys registered with the platform, or VNC for
              graphical interface access. PTY sessions are also available through the API for agents
              that need programmatic terminal access.
            </p>

            <h3>Does OrbitBox support programming languages beyond Node.js?</h3>
            <p>
              Yes. OrbitBox provides a variety of base snapshots: Python, Go, Rust, Java,
              and more. You can also create custom snapshots from your own images
              using the Declarative Builder feature.
            </p>

          </article>

          {/* Right — on this page */}
          <aside className="docs-onpage" aria-label="On-page navigation">
            <p className="onpage-title">On this page</p>
            <nav>
              {docsOnPage.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>
        </div>
      </section>

      <section id="demo" className="section final-cta reveal">
        <Logo />
        <h2>Give every AI agent a clean room to work in.</h2>
        <p>Build, test, inspect, snapshot, preview, and dispose of workspaces on demand.</p>
        <a className="primary-btn" href="https://github.com/Orbitbox2026/orbitbox" target="_blank" rel="noreferrer">
          View OrbitBox repo
        </a>
      </section>
    </main>
  );
}
