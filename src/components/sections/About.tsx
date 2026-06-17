'use client';

import { motion, type Variants } from 'framer-motion';
import { Sprout, Map, Users, Coins, ClipboardCheck, Trophy } from 'lucide-react';

const cards = [
  {
    icon: Sprout,
    title: 'Grow Crops',
    description:
      'Plant seeds, water your fields, and harvest a growing variety of crops in real time. Every harvest fills your barn and earns Gold you can reinvest in your farm.',
  },
  {
    icon: Map,
    title: 'Expand Your Land',
    description:
      'Clear new plots, unlock premium crops, and grow from a tiny patch into a sprawling estate. The bigger your farm, the more you can produce each day.',
  },
  {
    icon: Users,
    title: 'Visit Friends',
    description:
      'CropVerse is cozy and social. Hop into friends’ farms in real time, help with chores, trade goods, and farm together in a shared multiplayer world.',
  },
  {
    icon: ClipboardCheck,
    title: 'Complete Orders & Jobs',
    description:
      'Fill town orders and take on jobs to earn Gold, Farm Points, and Gems. Steady progress keeps your economy growing and unlocks new content.',
  },
  {
    icon: Coins,
    title: 'Earn Gold & Gems',
    description:
      'Gold is earned through play and keeps your farm running. Gems are the premium currency for speeding up growth and unlocking special crops and cosmetics.',
  },
  {
    icon: Trophy,
    title: 'Climb the Leaderboard',
    description:
      'Compete with farmers worldwide, rack up achievements, and rise through the daily and seasonal leaderboards to prove you run the best farm in CropVerse.',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function About() {
  return (
    <section id="how-to-play" className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 text-xs font-semibold text-[#4ade80] tracking-widest uppercase mb-4">
          How to Play
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-farm-text">
          A Whole Farming Loop in{' '}
          <span className="gradient-text">Your Pocket</span>
        </h2>
        <p className="mt-4 text-farm-muted text-lg max-w-2xl mx-auto leading-relaxed">
          Grow, expand, socialize, and compete. Here&apos;s everything you&apos;ll be doing in CropVerse.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {cards.map(({ icon: Icon, title, description }) => (
          <motion.article
            key={title}
            variants={itemVariants}
            className="relative p-8 rounded-2xl bg-farm-card border border-farm-border hover:border-[#22c55e]/40 group transition-all duration-300 hover:-translate-y-1"
          >
            <div className="inline-flex p-3 rounded-xl bg-[#22c55e]/10 border border-farm-border mb-5">
              <Icon className="w-6 h-6 text-[#4ade80]" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-farm-text mb-3">{title}</h3>
            <p className="text-farm-muted leading-relaxed text-sm">{description}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
