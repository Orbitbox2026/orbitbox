'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Rocket, Globe, Vote, Zap } from 'lucide-react';

const phases = [
  {
    quarter: 'Q1 2025',
    title: 'Genesis',
    icon: Rocket,
    status: 'complete' as const,
    items: ['Smart contract deployment & audit', 'Website & whitepaper launch', 'Community building (X, Telegram)', 'Seed round completion'],
  },
  {
    quarter: 'Q2 2025',
    title: 'Launch',
    icon: Zap,
    status: 'complete' as const,
    items: ['GRAM token public sale', 'DEX listing (Uniswap V3)', 'Initial liquidity provision', 'First 10,000 holders milestone'],
  },
  {
    quarter: 'Q3 2025',
    title: 'Expansion',
    icon: Globe,
    status: 'active' as const,
    items: ['Cross-chain bridge deployment', 'CEX listings (Tier 2)', 'Staking protocol v1', 'DeFi integrations (Aave, Curve)'],
  },
  {
    quarter: 'Q4 2025',
    title: 'DAO',
    icon: Vote,
    status: 'upcoming' as const,
    items: ['Full DAO governance launch', 'On-chain proposal system', 'Treasury management tools', 'V2 protocol upgrade via DAO vote'],
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
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-gram-cyan/10 border border-gram-cyan/30 text-xs font-semibold text-gram-cyan tracking-widest uppercase mb-4">
          Roadmap
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gram-text">
          Our Path to <span className="gradient-text">Decentralization</span>
        </h2>
        <p className="mt-4 text-gram-muted text-lg max-w-xl mx-auto">
          Four phases building toward full community ownership.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gram-border md:-translate-x-px" aria-hidden />

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
                    className={`inline-block p-6 rounded-2xl bg-gram-card border transition-all duration-300 max-w-sm w-full ${
                      phase.status === 'complete'
                        ? 'border-green-500/30 hover:border-green-500/50'
                        : phase.status === 'active'
                        ? 'border-gram-purple/40 hover:border-gram-purple/60'
                        : 'border-gram-border hover:border-gram-border/60 opacity-70'
                    }`}
                  >
                    <div className={`flex items-center gap-2 mb-1 ${isRight ? '' : 'md:flex-row-reverse md:justify-end'}`}>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        phase.status === 'complete' ? 'bg-green-500/15 text-green-400' :
                        phase.status === 'active' ? 'bg-gram-purple/15 text-gram-purple-light' :
                        'bg-gram-border text-gram-muted'
                      }`}>
                        {phase.status === 'complete' ? 'Completed' : phase.status === 'active' ? 'In Progress' : 'Upcoming'}
                      </span>
                      <span className="text-xs text-gram-muted font-medium">{phase.quarter}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gram-text mb-3">{phase.title}</h3>
                    <ul className="space-y-1.5">
                      {phase.items.map((item) => (
                        <li key={item} className={`flex items-center gap-2 text-sm ${isRight ? '' : 'md:flex-row-reverse'} ${phase.status !== 'upcoming' ? 'text-gram-muted' : 'text-gram-border'}`}>
                          {phase.status === 'complete' ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" aria-hidden />
                          ) : (
                            <Circle className="w-3.5 h-3.5 text-gram-border flex-shrink-0" aria-hidden />
                          )}
                          <span className={phase.status === 'upcoming' ? 'text-gram-muted/50' : 'text-gram-muted'}>
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
                      ? 'bg-green-500 border-green-500'
                      : phase.status === 'active'
                      ? 'bg-gram-purple border-gram-purple animate-[pulse-slow_4s_ease-in-out_infinite]'
                      : 'bg-gram-bg border-gram-border'
                  }`}>
                    <Icon className={`w-3 h-3 ${phase.status !== 'upcoming' ? 'text-white' : 'text-gram-muted'}`} aria-hidden />
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
