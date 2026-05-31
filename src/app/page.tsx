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
  { href: '#docs-sandbox', label: 'Konsep Sandbox' },
  { href: '#docs-lifecycle', label: 'Siklus Hidup (Lifecycle)' },
  { href: '#docs-security', label: 'Model Keamanan' },
  { href: '#docs-workflow', label: 'Workflow Agen' },
  { href: '#docs-quickstart', label: 'Quickstart' },
  { href: '#docs-api', label: 'API Konseptual' },
  { href: '#docs-faq', label: 'FAQ' },
];

const docsOnPage = [
  { href: '#docs-overview', label: 'Overview' },
  { href: '#docs-sandbox', label: 'Konsep Sandbox' },
  { href: '#docs-lifecycle', label: 'Lifecycle' },
  { href: '#docs-security', label: 'Keamanan' },
  { href: '#docs-workflow', label: 'Workflow Agen' },
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

      {/* ── GitBook-style Docs ────────────────────────────────────── */}
      <section id="docs" className="section docs-section reveal">
        <div className="docs-section-header">
          <span className="mono-label">Dokumentasi</span>
          <h2>Panduan lengkap OrbitBox.</h2>
          <p className="docs-intro">
            Referensi teknis dan konseptual untuk memahami cara kerja OrbitBox —
            dari konsep sandbox hingga contoh quickstart.
          </p>
        </div>

        <div className="docs-layout">
          {/* Left sidebar — table of contents */}
          <aside className="docs-sidebar" aria-label="Daftar isi dokumentasi">
            <p className="sidebar-heading">Pada halaman ini</p>
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
              OrbitBox adalah platform infrastruktur runtime yang dirancang untuk menjalankan
              kode hasil generasi agen AI secara aman, terisolasi, dan efisien. Berbeda dengan
              pendekatan tradisional yang hanya mengandalkan eksekutor fungsi sederhana,
              OrbitBox memberikan agen AI sebuah <strong>komputer lengkap</strong> — kernel
              boundary terdedikasi, filesystem pribadi, koneksi jaringan terkontrol, serta
              akses terminal interaktif.
            </p>
            <p>
              Ini berarti agen AI tidak lagi terbatas hanya pada pemanggilan fungsi. Mereka
              dapat menginstal paket, menjalankan proses lama (long-running), membuat dan
              memodifikasi file, mengakses database, hingga melakukan preview aplikasi web —
              semua dalam lingkungan yang terisolasi dan dapat dibuang (ephemeral) saat
              sudah tidak diperlukan.
            </p>

            <h2 id="docs-sandbox">Konsep Sandbox</h2>
            <p>
              Sandbox dalam OrbitBox adalah unit komputasi yang berdiri sendiri. Setiap
              sandbox beroperasi secara independen dan tidak berbagi state dengan sandbox
              lain. Berikut komponen utama sebuah sandbox:
            </p>
            <ul>
              <li><strong>Kernel boundary terdedikasi</strong> — proses di dalam sandbox tidak dapat memengaruhi proses di luar.</li>
              <li><strong>Filesystem terisolasi</strong> — setiap sandbox memiliki sistem file sendiri.</li>
              <li><strong>Network policy</strong> — akses jaringan keluar dikontrol melalui kebijakan yang dapat dikonfigurasi.</li>
              <li><strong>Resource quotas</strong> — CPU, memori, dan disk dibatasi sesuai konfigurasi platform.</li>
              <li><strong>Preview URL</strong> — setiap port yang di-expose mendapat URL aman untuk diakses manusia.</li>
            </ul>
            <p>
              Sandbox bisa bersifat <strong>ephemeral</strong> (dibuang otomatis setelah
              selesai) atau <strong>persistent</strong> (data disimpan dalam volume yang
              tahan lama dan bisa di-snapshot).
            </p>

            <h2 id="docs-lifecycle">Siklus Hidup (Lifecycle)</h2>
            <p>
              Setiap sandbox melewati siklus hidup yang terstruktur. Memahami lifecycle ini
              penting untuk merancang workflow agen yang efisien.
            </p>

            <h3>1. Create</h3>
            <p>
              Sandbox dibuat dari sebuah snapshot atau template dasar (misalnya image
              Node.js, Python, atau custom). Proses inisialisasi biasanya berlangsung
              kurang dari 100&nbsp;ms karena OrbitBox menggunakan mekanisme snapshot
              copy-on-write yang cepat.
            </p>

            <h3>2. Run</h3>
            <p>
              Agen atau pengguna menjalankan perintah di dalam sandbox melalui Process API,
              PTY session, atau Filesystem API. Di fase ini agen bisa menginstal dependensi,
              menulis kode, menjalankan server, dan mengiterasi perubahan.
            </p>

            <h3>3. Preview</h3>
            <p>
              Port aplikasi di-expose melalui URL aman yang bisa diakses oleh manusia
              (human-in-the-loop review). Preview URL tersedia selama sandbox aktif dan
              tidak memerlukan konfigurasi jaringan tambahan.
            </p>

            <h3>4. Snapshot</h3>
            <p>
              State sandbox yang sudah terverifikasi disimpan sebagai snapshot. Snapshot
              ini bisa digunakan sebagai titik awal (base) untuk sandbox berikutnya,
              sehingga setup tidak perlu diulang dari awal.
            </p>

            <h3>5. Dispose</h3>
            <p>
              Sandbox dihentikan dan semua resource dibebaskan. Data ephemeral dihapus
              secara otomatis. Data yang disimpan di volume persistent tetap tersedia
              untuk sesi berikutnya.
            </p>

            <h2 id="docs-security">Model Keamanan</h2>
            <p>
              OrbitBox dirancang dengan prinsip <em>untrusted code execution by default</em>.
              Setiap lapisan infrastruktur dibangun dengan asumsi bahwa kode yang berjalan
              di dalamnya tidak dapat dipercaya secara penuh.
            </p>
            <ul>
              <li><strong>Kernel isolation</strong> — setiap sandbox memiliki kernel boundary tersendiri, bukan sekadar container namespace biasa.</li>
              <li><strong>Network egress policy</strong> — lalu lintas jaringan keluar dikontrol oleh policy, bukan hanya firewall level host.</li>
              <li><strong>Ephemeral volumes</strong> — volume sementara dibuang otomatis saat dispose, tidak ada data residual.</li>
              <li><strong>Audit logs</strong> — semua operasi dicatat dalam audit log yang dapat diekspor ke OpenTelemetry.</li>
              <li><strong>Preview tunnel</strong> — URL preview menggunakan tunnel terenkripsi, tidak mengekspos IP server secara langsung.</li>
              <li><strong>Resource quotas</strong> — CPU dan memori dibatasi per sandbox, mencegah satu sandbox memonopoli resource.</li>
            </ul>

            <h2 id="docs-workflow">Workflow Agen</h2>
            <p>
              Berikut adalah contoh workflow tipikal agen AI yang menggunakan OrbitBox
              untuk menyelesaikan sebuah task pengembangan:
            </p>
            <ul>
              <li>Agen menerima instruksi dari orkestrator (misalnya: &ldquo;Buat REST API sederhana dengan Node.js dan Express&rdquo;).</li>
              <li>Agen membuat sandbox baru menggunakan API atau CLI OrbitBox.</li>
              <li>Agen menginstal dependensi melalui Process API (menjalankan <code>npm install</code> di dalam sandbox).</li>
              <li>Agen menulis file kode menggunakan Filesystem API.</li>
              <li>Agen menjalankan server via PTY session dan memantau output log.</li>
              <li>Agen mengambil Preview URL dan mengirimkannya ke manusia untuk review.</li>
              <li>Setelah disetujui, snapshot dibuat dan sandbox di-dispose.</li>
            </ul>
            <p>
              Seluruh alur ini bisa dijalankan secara otomatis oleh agen tanpa intervensi
              manusia, kecuali di titik review yang memang membutuhkan persetujuan.
            </p>

            <h2 id="docs-quickstart">Quickstart</h2>
            <p>
              Contoh perintah CLI berikut menggunakan placeholder. Ganti{' '}
              <code>{'<YOUR-API-KEY>'}</code> dengan kunci API yang diperoleh dari
              dashboard OrbitBox.
            </p>
            <pre><code>{`# Set variabel environment API key
export ORBITBOX_API_KEY=<YOUR-API-KEY>

# Buat sandbox baru dari snapshot Node.js 20
orbitbox sandbox create my-workspace --snapshot node-20

# Jalankan perintah di dalam sandbox
orbitbox exec my-workspace -- npm install express

# Tulis file ke dalam sandbox
orbitbox fs write my-workspace /app/server.js --from ./server.js

# Jalankan server (PTY session)
orbitbox exec my-workspace --pty -- node /app/server.js

# Lihat preview URL
orbitbox sandbox info my-workspace --json | jq '.preview_url'

# Simpan state saat ini sebagai snapshot
orbitbox snapshot create my-workspace --name baseline-v1

# Dispose sandbox setelah selesai
orbitbox sandbox dispose my-workspace`}</code></pre>
            <p>
              Semua perintah di atas bersifat idempoten — menjalankan ulang perintah yang
              sama tidak akan menghasilkan duplikasi jika state sudah sesuai.
            </p>

            <h2 id="docs-api">API Konseptual</h2>
            <p>
              OrbitBox menyediakan REST API untuk integrasi programatik dari bahasa
              pemrograman apa pun. Endpoint berikut adalah contoh konseptual dengan
              placeholder URL — bukan endpoint produksi yang aktif.
            </p>

            <h3>Membuat Sandbox</h3>
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

            <h3>Contoh Respons</h3>
            <pre><code>{`{
  "id": "sbx_xxxxxxxxxxxx",
  "name": "ai-worker",
  "status": "running",
  "preview_url": "https://ai-worker.preview.orbitbox.example",
  "region": "ap-southeast-1",
  "created_at": "2026-01-01T00:00:00Z"
}`}</code></pre>

            <h3>Menjalankan Perintah</h3>
            <pre><code>{`POST https://api.orbitbox.example/v1/sandboxes/sbx_xxxxxxxxxxxx/exec
Authorization: Bearer <YOUR-API-KEY>
Content-Type: application/json

{
  "command": ["npm", "install", "express"],
  "workdir": "/app",
  "env": { "NODE_ENV": "development" }
}`}</code></pre>

            <h2 id="docs-faq">FAQ</h2>

            <h3>Apa bedanya sandbox OrbitBox dengan container biasa?</h3>
            <p>
              Container tradisional (Docker) berbagi kernel host dan mengandalkan
              namespace untuk isolasi. Sandbox OrbitBox menggunakan kernel boundary
              yang lebih kuat, memberikan isolasi yang lebih solid untuk menjalankan
              kode yang tidak terpercaya (untrusted code).
            </p>

            <h3>Berapa lama sandbox bisa berjalan?</h3>
            <p>
              Sandbox bisa berjalan selama task membutuhkan. Untuk workload sementara,
              gunakan mode ephemeral. Untuk project yang membutuhkan kontinuitas,
              gunakan volume persistent dan buat snapshot secara rutin.
            </p>

            <h3>Apakah data di sandbox aman dari sandbox lain?</h3>
            <p>
              Ya. Setiap sandbox memiliki filesystem terisolasi. Data tidak bocor ke
              sandbox lain. Untuk keamanan tambahan, aktifkan enkripsi volume dan
              pastikan audit log dikirim ke sistem SIEM Anda.
            </p>

            <h3>Bagaimana cara mengakses sandbox secara interaktif?</h3>
            <p>
              Tersedia tiga opsi: web terminal di dashboard OrbitBox, SSH langsung ke
              sandbox (menggunakan kunci yang diregister di platform), atau VNC untuk
              akses antarmuka grafis. PTY session juga tersedia via API untuk agen
              yang membutuhkan akses terminal programatik.
            </p>

            <h3>Apakah OrbitBox mendukung bahasa pemrograman selain Node.js?</h3>
            <p>
              Ya. OrbitBox menyediakan berbagai snapshot dasar: Python, Go, Rust, Java,
              dan lainnya. Anda juga bisa membuat snapshot custom dari image Anda
              sendiri menggunakan fitur Declarative Builder.
            </p>

          </article>

          {/* Right — on this page */}
          <aside className="docs-onpage" aria-label="Navigasi pada halaman ini">
            <p className="onpage-title">Pada halaman ini</p>
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
