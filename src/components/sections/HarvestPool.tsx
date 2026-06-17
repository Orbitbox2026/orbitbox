'use client';

import { motion } from 'framer-motion';
import { Flame, ShieldCheck, Gauge, Trophy } from 'lucide-react';

const points = [
  {
    icon: Gauge,
    title: 'Sacrifice for Pool Power',
    description:
      'Each day, farmers sacrifice eligible in-game progress — Gold, Farm Points, and even Levels — to gain Pool Power for that day’s Harvest Pool.',
  },
  {
    icon: Trophy,
    title: 'Share the Daily Pool',
    description:
      'Your final $CROP share is based on your Pool Power compared with everyone else in the pool. Real gameplay progress decides real rewards.',
  },
  {
    icon: ShieldCheck,
    title: 'Capped & Server-Verified',
    description:
      'No unlimited printing and no pay-to-win drains — just a capped daily pool with server-verified claims, so rewards stay fair and sustainable.',
  },
  {
    icon: Flame,
    title: 'Deflationary by Design',
    description:
      '50% of every Gems purchase flows to the CropVerse treasury; the other 50% is burned forever, steadily reducing the circulating supply.',
  },
];

export default function HarvestPool() {
  return (
    <section id="harvest-pool" className="py-24 md:py-32 px-6 bg-farm-card/30 border-y border-farm-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-xs font-semibold text-[#fbbf24] tracking-widest uppercase mb-4">
            Harvest Pool
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-farm-text">
            Real Farming. <span className="gradient-text">Real Rewards.</span>
          </h2>
          <p className="mt-4 text-farm-muted text-lg max-w-2xl mx-auto leading-relaxed">
            The Harvest Pool is CropVerse&apos;s competitive daily reward system. Active farmers
            compete for a capped pool of $CROP — earned through play, not pay.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {points.map(({ icon: Icon, title, description }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5 p-7 rounded-2xl bg-farm-card border border-farm-border hover:border-[#f59e0b]/40 transition-colors duration-300"
            >
              <div className="flex-shrink-0">
                <div className="inline-flex p-3 rounded-xl bg-[#f59e0b]/10 border border-farm-border">
                  <Icon className="w-6 h-6 text-[#fbbf24]" aria-hidden="true" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-farm-text mb-2">{title}</h3>
                <p className="text-farm-muted leading-relaxed text-sm">{description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
