'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { FALLBACK_COINS } from '@/lib/constants';
import type { CoinData } from '@/lib/types';
import { TrendingUp, TrendingDown, AlertCircle, X } from 'lucide-react';

export default function Ticker() {
  const [coins, setCoins] = useState<CoinData[]>([]);
  const [isLive, setIsLive] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(true);
  const toastTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    async function fetchCoins() {
      try {
        const res = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false',
          { cache: 'no-store' }
        );
        if (!res.ok) throw new Error('API error');
        const data: CoinData[] = await res.json();
        setCoins(data);
        setIsLive(true);
      } catch {
        setCoins(FALLBACK_COINS);
        setIsLive(false);
        setShowToast(true);
        toastTimer.current = setTimeout(() => setShowToast(false), 5000);
      } finally {
        setLoading(false);
      }
    }
    fetchCoins();
    return () => { if (toastTimer.current) clearTimeout(toastTimer.current); };
  }, []);

  function formatPrice(p: number) {
    if (p >= 1000) return `$${p.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
    if (p >= 1) return `$${p.toFixed(2)}`;
    return `$${p.toFixed(4)}`;
  }

  function formatChange(c: number) {
    const sign = c >= 0 ? '+' : '';
    return `${sign}${c.toFixed(2)}%`;
  }

  const doubled = [...coins, ...coins];

  return (
    <div className="relative bg-[#12121a] border-y border-[#1e1e2e] overflow-hidden">
      {/* Live / Demo badge */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0a0a0f] border border-[#1e1e2e] text-[10px] font-semibold">
        {isLive ? (
          <>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
            <span className="text-green-400">LIVE</span>
          </>
        ) : (
          <>
            <span className="w-1.5 h-1.5 rounded-full bg-[#9ca3af]" aria-hidden="true" />
            <span className="text-[#9ca3af]">DEMO</span>
          </>
        )}
      </div>

      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #12121a, transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #12121a, transparent)' }}
        aria-hidden="true"
      />

      {loading ? (
        <div className="h-12 flex items-center justify-center text-[#9ca3af] text-sm">
          Loading market data…
        </div>
      ) : (
        <div className="h-12 flex items-center" aria-label="Live cryptocurrency market prices">
          <div className="ticker-track" role="marquee" aria-live="off">
            {doubled.map((coin, i) => (
              <div
                key={`${coin.id}-${i}`}
                className="flex items-center gap-2 px-5 border-r border-[#1e1e2e]/50 last:border-r-0 whitespace-nowrap"
              >
                {coin.image ? (
                  <Image
                    src={coin.image}
                    alt={coin.name}
                    width={18}
                    height={18}
                    className="rounded-full"
                    unoptimized
                  />
                ) : (
                  <span className="w-[18px] h-[18px] rounded-full bg-[#1e1e2e] flex items-center justify-center text-[8px] font-bold text-[#9ca3af]">
                    {coin.symbol.charAt(0)}
                  </span>
                )}
                <span className="text-xs font-bold text-[#e5e7eb]">{coin.symbol.toUpperCase()}</span>
                <span className="text-xs text-[#9ca3af]">{formatPrice(coin.current_price)}</span>
                <span
                  className={`flex items-center gap-0.5 text-xs font-semibold ${
                    coin.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {coin.price_change_percentage_24h >= 0 ? (
                    <TrendingUp className="w-3 h-3" aria-hidden="true" />
                  ) : (
                    <TrendingDown className="w-3 h-3" aria-hidden="true" />
                  )}
                  {formatChange(coin.price_change_percentage_24h)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Toast: live data unavailable */}
      {showToast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-[#12121a] border border-[#1e1e2e] shadow-xl text-sm"
        >
          <AlertCircle className="w-4 h-4 text-[#9ca3af] flex-shrink-0" aria-hidden="true" />
          <span className="text-[#9ca3af]">Live data unavailable — showing demo data</span>
          <button
            onClick={() => setShowToast(false)}
            className="text-[#9ca3af] hover:text-[#e5e7eb] ml-1"
            aria-label="Dismiss notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
