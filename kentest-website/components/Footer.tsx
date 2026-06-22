import { LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1b2e] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#6366f1] to-[#22d3ee] flex items-center justify-center">
            <span className="text-white font-bold text-xs">K</span>
          </div>
          <span className="font-semibold text-[#e2e8f0] text-sm">KenTest</span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#64748b]">
          <a href={LINKS.docs} className="hover:text-[#94a3b8] transition-colors">Docs</a>
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#94a3b8] transition-colors">GitHub</a>
          <a href={LINKS.discord} target="_blank" rel="noopener noreferrer" className="hover:text-[#94a3b8] transition-colors">Discord</a>
          <a href={LINKS.npm} target="_blank" rel="noopener noreferrer" className="hover:text-[#94a3b8] transition-colors">npm</a>
          <a href="#" className="hover:text-[#94a3b8] transition-colors">Privacy</a>
          <a href="#" className="hover:text-[#94a3b8] transition-colors">Terms</a>
        </nav>

        <p className="text-xs text-[#475569]">
          © {new Date().getFullYear()} KenTest. Apache 2.0.
        </p>
      </div>
    </footer>
  );
}
