"use client";

import { motion } from "framer-motion";

const BUNDLE_JSON = `{
  "runId": "run_j8kl92",
  "summary": "Login fails — CSRF token missing",
  "rootCause": "POST /api/auth/login returns 403 when X-CSRF-Token header is absent. The new fetch() call in LoginForm.tsx omits the token.",
  "suggestedFix": "Read csrfToken from the meta tag and add it to the fetch headers: { 'X-CSRF-Token': document.querySelector('meta[name=csrf]').content }",
  "steps": [
    { "index": 3, "passed": false,
      "action": "Click submit",
      "expected": "Redirect to /dashboard",
      "actual": "Error: Invalid request (403)" }
  ],
  "screenshotUrls": ["https://cdn.kentest.dev/..."],
  "logs": ["POST /api/auth/login 403 Forbidden"]
}`;

export default function FailureBundle() {
  return (
    <section className="py-28 px-6 border-t border-[#1a1b2e]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Left: explanation */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest mb-4">
            Failure Bundle
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#e2e8f0] leading-tight mb-6">
            Everything an agent
            <br />
            needs,{" "}
            <span className="gradient-text">in one response</span>
          </h2>
          <p className="text-[#94a3b8] leading-relaxed mb-8 text-lg">
            When a test fails, <code className="text-[#22d3ee] text-sm">kentest test failure get</code> returns a
            self-contained JSON bundle. No dashboard navigation. No multiple
            API calls. One payload with everything needed to fix the bug.
          </p>

          <ul className="space-y-3">
            {[
              ["rootCause", "Plain-language diagnosis of why it broke"],
              ["suggestedFix", "Exact code change to make"],
              ["steps", "Per-step expected vs actual breakdown"],
              ["screenshotUrls", "Visual proof at the moment of failure"],
              ["logs", "Browser and network logs"],
            ].map(([field, desc]) => (
              <li key={field} className="flex gap-3">
                <span className="shrink-0 w-2 h-2 rounded-full bg-[#6366f1] mt-2" />
                <span className="text-sm text-[#94a3b8]">
                  <code className="text-[#22d3ee]">{field}</code> — {desc}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right: JSON preview */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="terminal p-5 relative overflow-hidden"
        >
          {/* Glow */}
          <div
            className="absolute top-0 right-0 w-48 h-48 opacity-10 blur-[60px] pointer-events-none"
            style={{ background: "radial-gradient(circle, #6366f1, transparent)" }}
          />
          <div className="flex items-center gap-1.5 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28ca41]" />
            <span className="ml-3 text-xs text-[#475569]">
              kentest test failure get proj_1 test_2 run_3 --json
            </span>
          </div>
          <pre className="text-xs leading-relaxed overflow-x-auto">
            <code>
              {BUNDLE_JSON.split("\n").map((line, i) => {
                const isKey = line.includes('"') && line.includes(":");
                const isString = line.trim().startsWith('"') && !isKey;
                return (
                  <span
                    key={i}
                    className={
                      isKey
                        ? "text-[#94a3b8]"
                        : line.includes("false") || line.includes("403")
                        ? "text-[#f87171]"
                        : "text-[#22d3ee]"
                    }
                  >
                    {line}
                    {"\n"}
                  </span>
                );
              })}
            </code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
