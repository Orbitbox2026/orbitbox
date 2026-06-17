import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CropVerse — A Cozy On-Chain Farming World',
  description:
    'CropVerse is a cozy real-time multiplayer farming game. Grow crops, expand your farm, visit friends, and earn $CROP rewards from the daily Harvest Pool.',
  openGraph: {
    title: 'CropVerse — A Cozy On-Chain Farming World',
    description: 'Grow crops, expand your farm, and earn real $CROP rewards. Plant. Harvest. Earn.',
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
