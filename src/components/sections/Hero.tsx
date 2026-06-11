'use client';

import { motion } from 'framer-motion';
import { SOCIAL } from '@/lib/constants';
import { ArrowRight, BookOpen, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      aria-label="Hero section"
    >
      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] animate-[blob_8s_ease-in-out_infinite]"
          style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-15 blur-[100px] animate-[blob_8s_ease-in-out_3s_infinite]"
          style={{ background: 'radial-gradient(circle, #22d3ee, transparent)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[140px] animate-[pulse-slow_4s_ease-in-out_infinite]"
          style={{ background: 'radial-gradient(circle, #8b5cf6 0%, #22d3ee 100%)' }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(139,92,246,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,.6) 1px, transparent 1px)',
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
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] animate-pulse" aria-hidden="true" />
          <span className="text-xs font-semibold text-[#a78bfa] tracking-widest uppercase">
            Decentralized Finance Protocol
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.92] mb-6 text-[#e5e7eb]"
        >
          The Future of{' '}
          <span className="gradient-text">Decentralized</span>
          <br />
          Finance
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-[#9ca3af] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          GramLabs is building next-generation DeFi infrastructure — secure,
          community-owned, and powered by a token that puts governance in your hands.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#tokenomics"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#8b5cf6] text-white font-semibold text-base hover:bg-[#a78bfa] transition-all duration-200 shadow-xl shadow-[#8b5cf6]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cf6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]"
          >
            <BookOpen className="w-4 h-4" aria-hidden="true" />
            Read Whitepaper
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
          </a>
          <a
            href={SOCIAL.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#12121a] border border-[#1e1e2e] text-[#e5e7eb] font-semibold text-base hover:border-[#8b5cf6]/50 hover:bg-[#8b5cf6]/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cf6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]"
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
            { label: 'TVL', value: '$42M' },
            { label: 'Holders', value: '18K+' },
            { label: 'Transactions', value: '2.4M' },
            { label: 'Countries', value: '120+' },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1 px-4 py-3 rounded-xl bg-[#12121a]/50 border border-[#1e1e2e] backdrop-blur-sm"
            >
              <span className="text-2xl font-bold gradient-text">{value}</span>
              <span className="text-xs text-[#9ca3af] font-medium">{label}</span>
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
          <div className="w-6 h-10 rounded-full border-2 border-[#1e1e2e] flex items-start justify-center pt-1.5">
            <div className="w-1 h-2.5 rounded-full bg-[#8b5cf6] animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
