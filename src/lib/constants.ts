export const SOCIAL = {
  x: 'https://x.com/gramlabs',
  telegram: 'https://t.me/gramlabs',
  github: 'https://github.com/gramlabs',
  discord: 'https://discord.gg/gramlabs',
} as const;

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Tokenomics', href: '#tokenomics' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'FAQ', href: '#faq' },
] as const;

export const FALLBACK_COINS = [
  { id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin', image: '', current_price: 67420, price_change_percentage_24h: 2.34 },
  { id: 'ethereum', symbol: 'ETH', name: 'Ethereum', image: '', current_price: 3512, price_change_percentage_24h: -1.12 },
  { id: 'binancecoin', symbol: 'BNB', name: 'BNB', image: '', current_price: 612, price_change_percentage_24h: 0.88 },
  { id: 'solana', symbol: 'SOL', name: 'Solana', image: '', current_price: 178, price_change_percentage_24h: 4.21 },
  { id: 'ripple', symbol: 'XRP', name: 'XRP', image: '', current_price: 0.624, price_change_percentage_24h: -0.55 },
  { id: 'cardano', symbol: 'ADA', name: 'Cardano', image: '', current_price: 0.483, price_change_percentage_24h: 1.67 },
  { id: 'avalanche', symbol: 'AVAX', name: 'Avalanche', image: '', current_price: 38.5, price_change_percentage_24h: 3.14 },
  { id: 'dogecoin', symbol: 'DOGE', name: 'Dogecoin', image: '', current_price: 0.162, price_change_percentage_24h: -2.01 },
  { id: 'polkadot', symbol: 'DOT', name: 'Polkadot', image: '', current_price: 7.84, price_change_percentage_24h: 1.45 },
  { id: 'chainlink', symbol: 'LINK', name: 'Chainlink', image: '', current_price: 14.72, price_change_percentage_24h: 0.92 },
];
