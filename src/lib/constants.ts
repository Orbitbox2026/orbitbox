import type { CropMarketItem } from './types';

export const SITE = {
  name: 'CropVerse',
  token: '$CROP',
  tagline: 'A cozy real-time multiplayer farming world where your crops pay off.',
} as const;

export const SOCIAL = {
  x: 'https://x.com/cropverse',
  telegram: 'https://t.me/cropverse',
  discord: 'https://discord.gg/cropverse',
  github: 'https://github.com/cropverse',
} as const;

export const NAV_LINKS = [
  { label: 'How to Play', href: '#how-to-play' },
  { label: 'Harvest Pool', href: '#harvest-pool' },
  { label: 'Token', href: '#token' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'FAQ', href: '#faq' },
] as const;

// Farmer's Market — in-game crop prices (Gold per crate). Demo data only.
export const CROP_MARKET: CropMarketItem[] = [
  { id: 'wheat', name: 'Wheat', emoji: '🌾', price: 12, change24h: 2.4 },
  { id: 'corn', name: 'Corn', emoji: '🌽', price: 18, change24h: -1.1 },
  { id: 'carrot', name: 'Carrot', emoji: '🥕', price: 9, change24h: 3.8 },
  { id: 'tomato', name: 'Tomato', emoji: '🍅', price: 24, change24h: 0.9 },
  { id: 'strawberry', name: 'Strawberry', emoji: '🍓', price: 41, change24h: 5.2 },
  { id: 'pumpkin', name: 'Pumpkin', emoji: '🎃', price: 56, change24h: -0.6 },
  { id: 'grapes', name: 'Grapes', emoji: '🍇', price: 33, change24h: 1.7 },
  { id: 'apple', name: 'Apple', emoji: '🍎', price: 27, change24h: -2.0 },
  { id: 'potato', name: 'Potato', emoji: '🥔', price: 14, change24h: 1.2 },
  { id: 'sunflower', name: 'Sunflower', emoji: '🌻', price: 38, change24h: 4.1 },
];
