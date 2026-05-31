import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OrbitBox — Secure AI Code Runtime',
  description: 'Secure, elastic sandboxes for AI-generated code and agent workflows.',
  icons: {
    icon: '/orbitbox-logo.jpg',
    shortcut: '/orbitbox-logo.jpg',
    apple: '/orbitbox-logo.jpg',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
