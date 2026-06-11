import { Logo } from './ui/Logo';
import { SOCIAL } from '@/lib/constants';
import { Send } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gram-bg border-t border-gram-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Logo size={28} />
            <p className="mt-4 text-gram-muted text-sm leading-relaxed max-w-xs">
              Building next-generation decentralized finance infrastructure. Community-owned, secure, and built for everyone.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={SOCIAL.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GramLabs on X"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-gram-card border border-gram-border text-gram-muted hover:text-gram-text hover:border-gram-purple/40 transition-all duration-200"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                </svg>
              </a>
              <a
                href={SOCIAL.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GramLabs on Telegram"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-gram-card border border-gram-border text-gram-muted hover:text-gram-text hover:border-gram-cyan/40 transition-all duration-200"
              >
                <Send className="w-[15px] h-[15px]" aria-hidden />
              </a>
              <a
                href={SOCIAL.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GramLabs on GitHub"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-gram-card border border-gram-border text-gram-muted hover:text-gram-text hover:border-gram-border/80 transition-all duration-200"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href={SOCIAL.discord}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GramLabs on Discord"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-gram-card border border-gram-border text-gram-muted hover:text-gram-text hover:border-gram-purple/40 transition-all duration-200"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-gram-text mb-4">Protocol</h3>
            <ul className="space-y-2.5">
              {['About', 'Tokenomics', 'Roadmap', 'FAQ'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm text-gram-muted hover:text-gram-text transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gram-text mb-4">Community</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'X (Twitter)', href: SOCIAL.x },
                { label: 'Telegram', href: SOCIAL.telegram },
                { label: 'Discord', href: SOCIAL.discord },
                { label: 'GitHub', href: SOCIAL.github },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-gram-muted hover:text-gram-text transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-gram-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gram-muted">
            © {currentYear} GramLabs. All rights reserved.
          </p>
          <p className="text-xs text-gram-muted">
            Token data is demo only — not financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
