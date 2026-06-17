'use client';

import { useState, useEffect, useRef } from 'react';
import { Logo } from './ui/Logo';
import { NAV_LINKS, SOCIAL } from '@/lib/constants';
import { Send, Menu, X, ChevronRight, Sprout } from 'lucide-react';
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
          ? 'bg-[#0a120c]/85 backdrop-blur-md border-b border-[#1d2c21] shadow-lg shadow-black/20'
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
            className="text-sm font-medium text-[#93a399] hover:text-[#e8f0ea] transition-colors duration-200"
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
          aria-label="Follow CropVerse on X"
          className="w-9 h-9 flex items-center justify-center rounded-lg text-[#93a399] hover:text-[#e8f0ea] hover:bg-[#111c14] transition-all duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
          </svg>
        </a>
        <a
          href={SOCIAL.telegram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Join CropVerse on Telegram"
          className="w-9 h-9 flex items-center justify-center rounded-lg text-[#93a399] hover:text-[#e8f0ea] hover:bg-[#111c14] transition-all duration-200"
        >
          <Send className="w-4 h-4" aria-hidden="true" />
        </a>
        <a
          href="#how-to-play"
          className="ml-1 flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#22c55e] text-[#0a120c] text-sm font-semibold hover:bg-[#4ade80] transition-colors duration-200 shadow-lg shadow-[#22c55e]/25"
        >
          <Sprout className="w-4 h-4" aria-hidden="true" />
          Play Now
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-[#93a399] hover:text-[#e8f0ea] hover:bg-[#111c14] transition-all duration-200"
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
          className="fixed inset-0 top-16 bg-[#0a120c]/97 backdrop-blur-xl z-40 flex flex-col p-6 border-t border-[#1d2c21]"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={close}
                className="flex items-center justify-between px-4 py-4 rounded-xl text-[#e8f0ea] font-medium hover:bg-[#111c14] transition-colors duration-200"
              >
                {label}
                <ChevronRight className="w-4 h-4 text-[#93a399]" aria-hidden="true" />
              </a>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href={SOCIAL.x}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#111c14] text-[#93a399] hover:text-[#e8f0ea] transition-colors duration-200"
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
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#111c14] text-[#93a399] hover:text-[#e8f0ea] transition-colors duration-200"
            >
              <Send className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-medium">Join Telegram</span>
            </a>
          </div>
          <div className="mt-auto">
            <a
              href="#how-to-play"
              onClick={close}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#22c55e] text-[#0a120c] font-semibold hover:bg-[#4ade80] transition-colors duration-200"
            >
              <Sprout className="w-4 h-4" aria-hidden="true" />
              Play Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
