import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'GramLabs — The Future of Decentralized Finance',
  description: 'GramLabs is a community-driven DeFi protocol building next-generation decentralized infrastructure. Join 18,000+ holders.',
  openGraph: {
    title: 'GramLabs — The Future of Decentralized Finance',
    description: 'Community-driven DeFi. Decentralized, Secure, and Built for Everyone.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
