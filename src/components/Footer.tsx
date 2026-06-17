import { Logo } from './ui/Logo';
import { SOCIAL } from '@/lib/constants';
import { Send } from 'lucide-react';

const GAME_LINKS = [
  { label: 'How to Play', href: '#how-to-play' },
  { label: 'Harvest Pool', href: '#harvest-pool' },
  { label: 'Token', href: '#token' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'FAQ', href: '#faq' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-farm-bg border-t border-farm-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Logo size={28} />
            <p className="mt-4 text-farm-muted text-sm leading-relaxed max-w-xs">
              A cozy real-time multiplayer farming world. Grow crops, expand your farm, and earn real $CROP rewards.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={SOCIAL.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CropVerse on X"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-farm-card border border-farm-border text-farm-muted hover:text-farm-text hover:border-[#22c55e]/40 transition-all duration-200"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                </svg>
              </a>
              <a
                href={SOCIAL.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CropVerse on Telegram"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-farm-card border border-farm-border text-farm-muted hover:text-farm-text hover:border-[#fbbf24]/40 transition-all duration-200"
              >
                <Send className="w-[15px] h-[15px]" aria-hidden />
              </a>
              <a
                href={SOCIAL.discord}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CropVerse on Discord"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-farm-card border border-farm-border text-farm-muted hover:text-farm-text hover:border-[#22c55e]/40 transition-all duration-200"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-farm-text mb-4">Game</h3>
            <ul className="space-y-2.5">
              {GAME_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-farm-muted hover:text-farm-text transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-farm-text mb-4">Community</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'X (Twitter)', href: SOCIAL.x },
                { label: 'Telegram', href: SOCIAL.telegram },
                { label: 'Discord', href: SOCIAL.discord },
                { label: 'GitHub', href: SOCIAL.github },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-farm-muted hover:text-farm-text transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-farm-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-farm-muted">
            © {currentYear} CropVerse. All rights reserved.
          </p>
          <p className="text-xs text-farm-muted">
            Token &amp; market data is demo only — not financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
