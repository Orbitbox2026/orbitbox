'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Sprout, Wallet, PawPrint, Building2 } from 'lucide-react';

const phases = [
  {
    quarter: 'Phase 1',
    title: 'The Farming Loop',
    icon: Sprout,
    status: 'complete' as const,
    items: ['Playable proof-of-concept', 'Core planting & harvesting loop', 'Real-time farms', 'Gold & base economy'],
  },
  {
    quarter: 'Phase 2',
    title: 'On-Chain & Social',
    icon: Wallet,
    status: 'active' as const,
    items: ['Wallet login & $CROP token', 'Gems, progression & orders', 'Jobs, achievements & friends', 'Daily Harvest Pool & leaderboards'],
  },
  {
    quarter: 'Phase 3',
    title: 'Animals & Pets',
    icon: PawPrint,
    status: 'upcoming' as const,
    items: ['Animals & barns', 'Collectible pets', 'New game loops', 'Stronger early-game progression'],
  },
  {
    quarter: 'Phase 4',
    title: 'Build & Customize',
    icon: Building2,
    status: 'upcoming' as const,
    items: ['Buildings & decorations', 'Character customization', 'Cosmetics & seasonal events', 'Marketplace & trading'],
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-xs font-semibold text-[#fbbf24] tracking-widest uppercase mb-4">
          Roadmap
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-farm-text">
          Growing <span className="gradient-text">Season by Season</span>
        </h2>
        <p className="mt-4 text-farm-muted text-lg max-w-xl mx-auto">
          From a single field to a living, breathing farming world.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-farm-border md:-translate-x-px" aria-hidden />

        <div className="space-y-10">
          {phases.map((phase, i) => {
            const Icon = phase.icon;
            const isRight = i % 2 === 1;

            return (
              <motion.div
                key={phase.quarter}
                initial={{ opacity: 0, x: isRight ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 md:gap-0 ${isRight ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              >
                {/* Content side */}
                <div className={`flex-1 ml-16 md:ml-0 ${isRight ? 'md:pl-10' : 'md:pr-10 md:text-right'}`}>
                  <article
                    className={`inline-block p-6 rounded-2xl bg-farm-card border transition-all duration-300 max-w-sm w-full ${
                      phase.status === 'complete'
                        ? 'border-[#22c55e]/30 hover:border-[#22c55e]/50'
                        : phase.status === 'active'
                        ? 'border-[#f59e0b]/40 hover:border-[#f59e0b]/60'
                        : 'border-farm-border hover:border-farm-border/60 opacity-70'
                    }`}
                  >
                    <div className={`flex items-center gap-2 mb-1 ${isRight ? '' : 'md:flex-row-reverse md:justify-end'}`}>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        phase.status === 'complete' ? 'bg-[#22c55e]/15 text-[#4ade80]' :
                        phase.status === 'active' ? 'bg-[#f59e0b]/15 text-[#fbbf24]' :
                        'bg-farm-border text-farm-muted'
                      }`}>
                        {phase.status === 'complete' ? 'Completed' : phase.status === 'active' ? 'In Progress' : 'Upcoming'}
                      </span>
                      <span className="text-xs text-farm-muted font-medium">{phase.quarter}</span>
                    </div>
                    <h3 className="text-xl font-bold text-farm-text mb-3">{phase.title}</h3>
                    <ul className="space-y-1.5">
                      {phase.items.map((item) => (
                        <li key={item} className={`flex items-center gap-2 text-sm ${isRight ? '' : 'md:flex-row-reverse'}`}>
                          {phase.status === 'complete' ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#4ade80] flex-shrink-0" aria-hidden />
                          ) : (
                            <Circle className="w-3.5 h-3.5 text-farm-border flex-shrink-0" aria-hidden />
                          )}
                          <span className={phase.status === 'upcoming' ? 'text-farm-muted/60' : 'text-farm-muted'}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>

                {/* Center dot */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center z-10 ${
                    phase.status === 'complete'
                      ? 'bg-[#22c55e] border-[#22c55e]'
                      : phase.status === 'active'
                      ? 'bg-[#f59e0b] border-[#f59e0b] animate-[pulse-slow_4s_ease-in-out_infinite]'
                      : 'bg-farm-bg border-farm-border'
                  }`}>
                    <Icon className={`w-3 h-3 ${phase.status !== 'upcoming' ? 'text-[#0a120c]' : 'text-farm-muted'}`} aria-hidden />
                  </div>
                </div>

                {/* Empty spacer for alternating layout */}
                <div className="hidden md:block flex-1" aria-hidden />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
