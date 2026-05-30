import Link from 'next/link';
import { IconShield, IconBot } from './icons';

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand-lockup" aria-label="SiCerdas DPRD Mesuji — Beranda">
        <span className="brand-mark">
          <IconShield size={24} className="" />
        </span>
        <span className="brand-text">
          <strong>SiCerdas</strong>
          <span>DPRD Kabupaten Mesuji</span>
        </span>
      </Link>

      <nav className="main-nav" aria-label="Navigasi utama">
        <Link href="/">Beranda</Link>
        <Link href="/asisten">Asisten AI</Link>
        <Link href="/aspirasi">Aspirasi</Link>
        <Link href="/notulen">Notulen</Link>
        <Link href="/produk-hukum">Produk Hukum</Link>
        <Link href="/anggota">Anggota</Link>
      </nav>

      <Link href="/asisten" className="header-cta">
        <IconBot size={17} /> Buka Asisten
      </Link>
    </header>
  );
}
