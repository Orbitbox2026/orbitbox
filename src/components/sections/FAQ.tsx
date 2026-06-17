'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'What is CropVerse?',
    a: 'CropVerse is a cozy real-time multiplayer farming game. You grow crops, expand your farm, complete orders, visit friends, and compete on the leaderboard — while earning the on-chain $CROP token through real gameplay.',
  },
  {
    q: 'Do I need crypto to play?',
    a: 'No. You can jump in and farm for free using Gold earned in-game. Connecting a wallet simply lets you participate in the daily Harvest Pool and claim $CROP rewards once on-chain features go live.',
  },
  {
    q: 'How does the Harvest Pool work?',
    a: 'Each day, farmers sacrifice eligible in-game progress — Gold, Farm Points, and Levels — to gain Pool Power. Your final $CROP share is based on your Pool Power compared with everyone else in that day’s capped, server-verified pool.',
  },
  {
    q: 'What are Gold, Gems, and $CROP?',
    a: 'Gold is the free currency earned by playing and keeps your farm running. Gems are the premium currency used to speed up growth and unlock premium crops and cosmetics. $CROP is the on-chain token distributed through the Harvest Pool.',
  },
  {
    q: 'Is CropVerse pay-to-win?',
    a: 'No. The Harvest Pool has no unlimited printing and no pay-to-win drains — just capped daily pools and server-verified claims, so rewards are driven by real gameplay progress rather than spending.',
  },
  {
    q: 'Is the token data on this site real?',
    a: 'All tokenomics, prices, and statistics on this site are clearly marked as demo data for this concept website. No real token contract exists yet; placeholder data will be replaced with live on-chain data at launch.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 px-6 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 text-xs font-semibold text-[#4ade80] tracking-widest uppercase mb-4">
          FAQ
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-farm-text">
          Common <span className="gradient-text">Questions</span>
        </h2>
      </motion.div>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
          >
            <div className={`rounded-xl border transition-colors duration-200 ${open === i ? 'border-[#22c55e]/40 bg-farm-card' : 'border-farm-border bg-farm-card/50 hover:border-farm-border/70'}`}>
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="font-semibold text-farm-text text-sm md:text-base">{faq.q}</span>
                <span className="flex-shrink-0 text-farm-muted">
                  {open === i ? <Minus className="w-4 h-4" aria-hidden /> : <Plus className="w-4 h-4" aria-hidden />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    role="region"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm text-farm-muted leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
