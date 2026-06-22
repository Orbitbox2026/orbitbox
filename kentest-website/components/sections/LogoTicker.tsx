export default function LogoTicker() {
  const agents = [
    "Claude (Anthropic)",
    "Cursor",
    "Cline",
    "OpenAI Codex",
    "GitHub Copilot",
    "Devin",
    "Aider",
    "Continue",
  ];

  const doubled = [...agents, ...agents];

  return (
    <section className="py-14 border-y border-[#1a1b2e] overflow-hidden">
      <p className="text-center text-xs font-semibold text-[#475569] uppercase tracking-widest mb-8">
        Works with every coding agent
      </p>
      <div className="relative">
        <div className="flex gap-12 animate-scroll-x whitespace-nowrap">
          {doubled.map((name, i) => (
            <span
              key={i}
              className="text-sm font-semibold text-[#475569] hover:text-[#94a3b8] transition-colors cursor-default shrink-0"
            >
              {name}
            </span>
          ))}
        </div>
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#07080f] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#07080f] to-transparent" />
      </div>
    </section>
  );
}
