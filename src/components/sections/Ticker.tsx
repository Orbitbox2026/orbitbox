'use client';

import { CROP_MARKET } from '@/lib/constants';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function Ticker() {
  const doubled = [...CROP_MARKET, ...CROP_MARKET];

  function formatChange(c: number) {
    const sign = c >= 0 ? '+' : '';
    return `${sign}${c.toFixed(1)}%`;
  }

  return (
    <div className="relative bg-[#111c14] border-y border-[#1d2c21] overflow-hidden">
      {/* Market label */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0a120c] border border-[#1d2c21] text-[10px] font-semibold">
        <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" aria-hidden="true" />
        <span className="text-[#4ade80]">FARMER&apos;S MARKET</span>
      </div>

      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #111c14, transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #111c14, transparent)' }}
        aria-hidden="true"
      />

      <div className="h-12 flex items-center" aria-label="Farmer's market crop prices in Gold">
        <div className="ticker-track" role="marquee" aria-live="off">
          {doubled.map((crop, i) => (
            <div
              key={`${crop.id}-${i}`}
              className="flex items-center gap-2 px-5 border-r border-[#1d2c21]/60 last:border-r-0 whitespace-nowrap"
            >
              <span className="text-base leading-none" aria-hidden="true">{crop.emoji}</span>
              <span className="text-xs font-bold text-[#e8f0ea]">{crop.name}</span>
              <span className="text-xs text-[#93a399]">{crop.price}g</span>
              <span
                className={`flex items-center gap-0.5 text-xs font-semibold ${
                  crop.change24h >= 0 ? 'text-[#4ade80]' : 'text-red-400'
                }`}
              >
                {crop.change24h >= 0 ? (
                  <TrendingUp className="w-3 h-3" aria-hidden="true" />
                ) : (
                  <TrendingDown className="w-3 h-3" aria-hidden="true" />
                )}
                {formatChange(crop.change24h)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
