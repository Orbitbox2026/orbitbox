'use client';

import { useState, useEffect, useRef } from 'react';
import { Logo, XIcon, GitHubIcon } from './Logo';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    function handleOutside(e: MouseEvent) {
      if (!headerRef.current?.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [menuOpen]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false);
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 920) setMenuOpen(false);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <header className="site-header" ref={headerRef}>
      <a href="#top" className="brand" aria-label="OrbitBox home">
        <Logo />
      </a>

      <nav aria-label="Primary navigation">
        <a href="#platform">Platform</a>
        <a href="#sandboxes">Sandboxes</a>
        <a href="#workflow">Workflow</a>
        <a href="#docs">Docs</a>
        <a href="#project">Project</a>
        <a
          className="x-link"
          href="https://x.com/daytonaio"
          target="_blank"
          rel="noreferrer"
          aria-label="Follow on X"
        >
          <XIcon />
        </a>
        <a
          className="x-link"
          href="https://github.com/Orbitbox2026/orbitbox"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub repository"
        >
          <GitHubIcon />
        </a>
      </nav>

      <div className="header-right">
        <a className="header-cta" href="#demo">Start building</a>
        <button
          className="mobile-menu-btn"
          type="button"
          aria-label={menuOpen ? 'Tutup menu' : 'Buka menu navigasi'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          className="mobile-menu"
          aria-label="Mobile navigation"
        >
          <a href="#platform" onClick={close}>Platform</a>
          <a href="#sandboxes" onClick={close}>Sandboxes</a>
          <a href="#workflow" onClick={close}>Workflow</a>
          <a href="#docs" onClick={close}>Docs</a>
          <a href="#project" onClick={close}>Project</a>
          <div className="mobile-menu-socials">
            <a
              href="https://x.com/daytonaio"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow on X"
              onClick={close}
            >
              <XIcon />
              <span>X (Twitter)</span>
            </a>
            <a
              href="https://github.com/Orbitbox2026/orbitbox"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              onClick={close}
            >
              <GitHubIcon />
              <span>GitHub</span>
            </a>
          </div>
          <a className="primary-btn mobile-cta-btn" href="#demo" onClick={close}>
            Start building
          </a>
        </nav>
      )}
    </header>
  );
}
