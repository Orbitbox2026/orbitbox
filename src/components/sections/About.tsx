'use client';

import { motion, type Variants } from 'framer-motion';
import { Network, ShieldCheck, Users } from 'lucide-react';

const cards = [
  {
    icon: Network,
    title: 'Decentralized',
    description:
      'GramLabs runs on a fully decentralized network with no single point of failure. Every decision, transaction, and governance vote happens on-chain, ensuring trustless and transparent execution for all participants.',
    iconColor: 'text-[#8b5cf6]',
    iconBg: 'bg-[#8b5cf6]/10',
    borderHover: 'hover:border-[#8b5cf6]/40',
  },
  {
    icon: ShieldCheck,
    title: 'Secure',
    description:
      'Our smart contracts are audited by leading security firms. Multi-sig governance, time-locks on upgrades, and formal verification of core logic ensure that your assets are protected at every layer.',
    iconColor: 'text-[#22d3ee]',
    iconBg: 'bg-[#22d3ee]/10',
    borderHover: 'hover:border-[#22d3ee]/40',
  },
  {
    icon: Users,
    title: 'Community-Owned',
    description:
      'GRAM token holders govern the protocol. From fee adjustments to new features, every major decision is put to a DAO vote. The community drives the roadmap — not a foundation or VC backers.',
    iconColor: 'text-[#a78bfa]',
    iconBg: 'bg-[#a78bfa]/10',
    borderHover: 'hover:border-[#a78bfa]/40',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 text-xs font-semibold text-[#a78bfa] tracking-widest uppercase mb-4">
          Our Mission
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-[#e5e7eb]">
          Built Different. Built for{' '}
          <span className="gradient-text">Everyone.</span>
        </h2>
        <p className="mt-4 text-[#9ca3af] text-lg max-w-2xl mx-auto leading-relaxed">
          Three core principles drive everything we build at GramLabs.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6"
      >
        {cards.map(({ icon: Icon, title, description, iconColor, iconBg, borderHover }) => (
          <motion.article
            key={title}
            variants={itemVariants}
            className={`relative p-8 rounded-2xl bg-[#12121a] border border-[#1e1e2e] ${borderHover} group transition-all duration-300 hover:-translate-y-1`}
          >
            <div className={`inline-flex p-3 rounded-xl ${iconBg} border border-[#1e1e2e] mb-5`}>
              <Icon className={`w-6 h-6 ${iconColor}`} aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-[#e5e7eb] mb-3">{title}</h3>
            <p className="text-[#9ca3af] leading-relaxed text-sm">{description}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
