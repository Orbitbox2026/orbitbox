import { Logo, XIcon } from '../components/Logo';

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
  ['Preview', 'pink', 'Expose ports, inspect app previews, stream logs, and approve changes before merge.'],
  ['Ship', 'red', 'Snapshot the verified state, export artifacts, or hand the result to your deploy pipeline.'],
];

const projectNotes = [
  ['What it is', 'OrbitBox is a landing page concept for secure, elastic AI-code sandboxes inspired by Daytona\'s public positioning.'],
  ['What it does', 'It explains isolated runtime infrastructure for agents: sandbox lifecycle, snapshots, process execution, previews, and human access.'],
  ['What is original', 'The OrbitBox name, logo, copy structure, CSS animation, terminal mockup, and page implementation are custom-built for this project.'],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a href="#top" className="brand" aria-label="OrbitBox">
          <Logo />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#platform">Platform</a>
          <a href="#sandboxes">Sandboxes</a>
          <a href="#workflow">Workflow</a>
          <a href="#project">Project</a>
          <a className="x-link" href="https://x.com/daytonaio" target="_blank" rel="noreferrer" aria-label="Follow on X">
            <XIcon />
          </a>
        </nav>
        <a className="header-cta" href="#demo">Start building</a>
      </header>

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
        <h2>Penjelasan proyek OrbitBox.</h2>
        <div className="project-grid">
          {projectNotes.map(([title, body]) => (
            <article className="project-card" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <p className="legal-note">
          Catatan: desain dibuat agar lebih dekat dengan nuansa Daytona, tetapi tetap memakai nama,
          logo, animasi, dan copy original supaya tidak menyalin aset/trademark Daytona secara persis.
        </p>
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
