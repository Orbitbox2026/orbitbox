'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'What is GramLabs?',
    a: 'GramLabs is a decentralized finance protocol building community-owned DeFi infrastructure. Our GRAM token powers governance, staking, and protocol fees across the ecosystem.',
  },
  {
    q: 'How do I get GRAM tokens?',
    a: 'GRAM tokens are available via our public sale (currently in demo phase) and will be listed on DEXes post-launch. Join our Telegram for announcements on official listing dates.',
  },
  {
    q: 'Is GramLabs audited?',
    a: 'All GramLabs smart contracts undergo multi-firm security audits before deployment. Audit reports are published publicly on our GitHub repository for full transparency.',
  },
  {
    q: 'How does governance work?',
    a: 'GRAM token holders can submit and vote on governance proposals via our on-chain DAO (launching Q4 2025). Proposals can cover fee parameters, treasury spending, and protocol upgrades.',
  },
  {
    q: 'What is the vesting schedule for the team allocation?',
    a: 'The 15% team allocation has a 1-year cliff followed by a 36-month linear vesting schedule. This ensures long-term team alignment with community interests.',
  },
  {
    q: 'Is the tokenomics data on this site real?',
    a: 'All tokenomics, price data, and statistics on this site are clearly marked as demo data. No real token contract exists yet. Placeholder data will be replaced with real on-chain data at launch.',
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
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-gram-purple/10 border border-gram-purple/30 text-xs font-semibold text-gram-purple-light tracking-widest uppercase mb-4">
          FAQ
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gram-text">
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
            <div className={`rounded-xl border transition-colors duration-200 ${open === i ? 'border-gram-purple/40 bg-gram-card' : 'border-gram-border bg-gram-card/50 hover:border-gram-border/70'}`}>
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="font-semibold text-gram-text text-sm md:text-base">{faq.q}</span>
                <span className="flex-shrink-0 text-gram-muted">
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
                    <p className="px-6 pb-5 text-sm text-gram-muted leading-relaxed">{faq.a}</p>
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
