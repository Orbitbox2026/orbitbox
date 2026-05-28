import { Logo, XIcon } from '../components/Logo';

const features = [
  {
    label: 'Isolated compute',
    title: 'Run generated code without trusting it.',
    body: 'Each workload starts inside a disposable computer with its own filesystem, network layer, process space, and resource limits.',
  },
  {
    label: 'Elastic by default',
    title: 'Scale from one task to a fleet of agents.',
    body: 'Spin up parallel runtimes for tests, crawlers, code interpreters, and autonomous development loops without hand-managed servers.',
  },
  {
    label: 'Stateful snapshots',
    title: 'Pause, resume, and reproduce every session.',
    body: 'Persist toolchains, package caches, logs, and artifacts so agents can continue work across long-running workflows.',
  },
];

const workflow = [
  ['Develop', 'Blue', 'Agents write, edit, and test code inside fresh workspaces.'],
  ['Preview', 'Pink', 'Expose ports, stream logs, and inspect UI changes safely.'],
  ['Ship', 'Red', 'Promote verified artifacts to your deployment pipeline.'],
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
          <a href="#workflow">Workflow</a>
          <a href="#security">Security</a>
          <a className="x-link" href="https://x.com/daytonaio" target="_blank" rel="noreferrer" aria-label="Follow on X">
            <XIcon />
            <span>X</span>
          </a>
        </nav>
        <a className="header-cta" href="#demo">Launch sandbox</a>
      </header>

      <section id="top" className="hero">
        <div className="eyebrow">Secure runtime for AI-generated code</div>
        <h1>Elastic sandboxes for agents that need a real computer.</h1>
        <p>
          OrbitBox is a Daytona-inspired landing concept: isolated runtimes, fast startup,
          persistent snapshots, and developer-grade controls for code-running AI workflows.
        </p>
        <div className="hero-actions">
          <a className="primary-btn" href="#demo">Start building</a>
          <a className="secondary-btn" href="#platform">Explore platform</a>
        </div>
        <div className="terminal-card" role="img" aria-label="Sandbox creation terminal preview">
          <div className="terminal-top">
            <span /> <span /> <span />
            <strong>orbitbox create --template node</strong>
          </div>
          <pre>{`$ orbitbox sandbox create agent-42
✓ kernel isolated
✓ filesystem mounted
✓ network policy applied
✓ snapshot ready in 88ms

https://agent-42.preview.orbitbox.dev`}</pre>
        </div>
      </section>

      <section id="platform" className="section grid-section">
        <div className="section-copy">
          <span className="mono-label">Composable infrastructure</span>
          <h2>Everything an agent needs. Nothing it should escape.</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <span>{feature.label}</span>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="workflow" className="section workflow-section">
        <span className="mono-label">Workflow</span>
        <h2>Develop, preview, ship — with a safety boundary at every step.</h2>
        <div className="workflow">
          {workflow.map(([title, color, body]) => (
            <article className={`workflow-step ${color.toLowerCase()}`} key={title}>
              <span>{color}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="security" className="section security-panel">
        <div>
          <span className="mono-label">Security model</span>
          <h2>Designed for untrusted code execution.</h2>
          <p>
            Use resource quotas, network rules, audit events, and immutable snapshots to let
            agents experiment freely while your production systems stay protected.
          </p>
        </div>
        <div className="checklist">
          <span>Dedicated kernel boundary</span>
          <span>Policy-controlled network</span>
          <span>Ephemeral or persistent volumes</span>
          <span>Logs, previews, and PTY access</span>
        </div>
      </section>

      <section id="demo" className="section final-cta">
        <Logo />
        <h2>Give every AI agent a clean room to work in.</h2>
        <p>Build, test, inspect, snapshot, and dispose of workspaces on demand.</p>
        <a className="primary-btn" href="https://github.com/daytonaio/daytona" target="_blank" rel="noreferrer">
          View inspiration repo
        </a>
      </section>
    </main>
  );
}
