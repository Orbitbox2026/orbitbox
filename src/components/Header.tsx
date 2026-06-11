'use client';

import { useState, useEffect, useRef } from 'react';
import { Logo } from './ui/Logo';
import { NAV_LINKS, SOCIAL } from '@/lib/constants';
import { Send, Menu, X, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    const onOutside = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onOutside);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <header
      ref={headerRef}
      className={clsx(
        'fixed top-0 inset-x-0 z-50 h-16 flex items-center justify-between px-6 md:px-10 transition-all duration-300',
        scrolled
          ? 'bg-[#0a0a0f]/85 backdrop-blur-md border-b border-[#1e1e2e] shadow-lg shadow-black/20'
          : 'bg-transparent',
      )}
    >
      <Logo size={30} />

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-7" aria-label="Primary navigation">
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="text-sm font-medium text-[#9ca3af] hover:text-[#e5e7eb] transition-colors duration-200"
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Desktop social + CTA */}
      <div className="hidden md:flex items-center gap-3">
        <a
          href={SOCIAL.x}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow GramLabs on X"
          className="w-9 h-9 flex items-center justify-center rounded-lg text-[#9ca3af] hover:text-[#e5e7eb] hover:bg-[#12121a] transition-all duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
          </svg>
        </a>
        <a
          href={SOCIAL.telegram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Join GramLabs on Telegram"
          className="w-9 h-9 flex items-center justify-center rounded-lg text-[#9ca3af] hover:text-[#e5e7eb] hover:bg-[#12121a] transition-all duration-200"
        >
          <Send className="w-4 h-4" aria-hidden="true" />
        </a>
        <a
          href="#about"
          className="ml-1 px-4 py-2 rounded-lg bg-[#8b5cf6] text-white text-sm font-semibold hover:bg-[#a78bfa] transition-colors duration-200 shadow-lg shadow-[#8b5cf6]/25"
        >
          Get Started
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-[#9ca3af] hover:text-[#e5e7eb] hover:bg-[#12121a] transition-all duration-200"
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen(v => !v)}
      >
        {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-16 bg-[#0a0a0f]/97 backdrop-blur-xl z-40 flex flex-col p-6 border-t border-[#1e1e2e]"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={close}
                className="flex items-center justify-between px-4 py-4 rounded-xl text-[#e5e7eb] font-medium hover:bg-[#12121a] transition-colors duration-200"
              >
                {label}
                <ChevronRight className="w-4 h-4 text-[#9ca3af]" aria-hidden="true" />
              </a>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href={SOCIAL.x}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#12121a] text-[#9ca3af] hover:text-[#e5e7eb] transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
              </svg>
              <span className="text-sm font-medium">Follow on X</span>
            </a>
            <a
              href={SOCIAL.telegram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#12121a] text-[#9ca3af] hover:text-[#e5e7eb] transition-colors duration-200"
            >
              <Send className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-medium">Join Telegram</span>
            </a>
          </div>
          <div className="mt-auto">
            <a
              href="#about"
              onClick={close}
              className="flex items-center justify-center w-full py-3.5 rounded-xl bg-[#8b5cf6] text-white font-semibold hover:bg-[#a78bfa] transition-colors duration-200"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
