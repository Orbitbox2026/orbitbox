'use client';

import { motion } from 'framer-motion';
import { SOCIAL } from '@/lib/constants';
import { ArrowRight, Sprout, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      aria-label="Hero section"
    >
      {/* Animated glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] animate-[blob_8s_ease-in-out_infinite]"
          style={{ background: 'radial-gradient(circle, #22c55e, transparent)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-15 blur-[100px] animate-[blob_8s_ease-in-out_3s_infinite]"
          style={{ background: 'radial-gradient(circle, #fbbf24, transparent)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[140px] animate-[pulse-slow_4s_ease-in-out_infinite]"
          style={{ background: 'radial-gradient(circle, #4ade80 0%, #fbbf24 100%)' }}
        />
        {/* Field grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(74,222,128,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,.6) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#fbbf24] animate-pulse" aria-hidden="true" />
          <span className="text-xs font-semibold text-[#4ade80] tracking-widest uppercase">
            Real-Time Multiplayer Farming
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.92] mb-6 text-[#e8f0ea]"
        >
          Plant. Harvest.{' '}
          <span className="gradient-text">Earn.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-[#93a399] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          CropVerse is a cozy real-time multiplayer farming world. Grow crops, expand
          your land, visit friends, and earn real $CROP rewards from the daily Harvest Pool.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#how-to-play"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#22c55e] text-[#0a120c] font-semibold text-base hover:bg-[#4ade80] transition-all duration-200 shadow-xl shadow-[#22c55e]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22c55e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a120c]"
          >
            <Sprout className="w-4 h-4" aria-hidden="true" />
            Start Farming
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
          </a>
          <a
            href={SOCIAL.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#111c14] border border-[#1d2c21] text-[#e8f0ea] font-semibold text-base hover:border-[#22c55e]/50 hover:bg-[#22c55e]/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22c55e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a120c]"
          >
            <Users className="w-4 h-4" aria-hidden="true" />
            Join Community
          </a>
        </motion.div>

        {/* Mini stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { label: 'Active Farmers', value: '24K+' },
            { label: 'Crops Harvested', value: '8.6M' },
            { label: 'Daily $CROP Pool', value: '50K' },
            { label: 'Countries', value: '90+' },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1 px-4 py-3 rounded-xl bg-[#111c14]/60 border border-[#1d2c21] backdrop-blur-sm"
            >
              <span className="text-2xl font-bold gradient-text">{value}</span>
              <span className="text-xs text-[#93a399] font-medium">{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <div className="w-6 h-10 rounded-full border-2 border-[#1d2c21] flex items-start justify-center pt-1.5">
            <div className="w-1 h-2.5 rounded-full bg-[#22c55e] animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
