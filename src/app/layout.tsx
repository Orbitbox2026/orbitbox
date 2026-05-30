import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';

export const metadata: Metadata = {
  title: 'SiCerdas — Asisten AI DPRD Kabupaten Mesuji',
  description:
    'Platform kecerdasan buatan untuk mempermudah kinerja Dewan Perwakilan Rakyat Daerah Kabupaten Mesuji, Provinsi Lampung: asisten AI, analisis aspirasi, notulen otomatis, dan produk hukum.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
