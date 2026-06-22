"use client";

import { motion } from "framer-motion";
import { Terminal, ArrowRight, Star } from "lucide-react";
import { LINKS } from "@/lib/constants";

const INSTALL_CMD = "npm install -g @kentest/kentest-cli";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.12] blur-[130px]"
          style={{ background: "radial-gradient(circle, #6366f1, transparent)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.10] blur-[110px]"
          style={{ background: "radial-gradient(circle, #22d3ee, transparent)" }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,.8) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6366f1]/10 border border-[#6366f1]/30 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] animate-pulse" />
          <span className="text-xs font-semibold text-[#a5b4fc] tracking-widest uppercase">
            AI-Powered Browser Testing
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-6 text-[#e2e8f0]"
        >
          Verify every behavior
          <br />
          <span className="gradient-text">your agent ships</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[#94a3b8] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          KenTest runs real browser tests against your live app and returns
          self-contained failure bundles — root cause, screenshots, and
          suggested fix — designed for AI coding agents to act on immediately.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <a
            href="#get-started"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#6366f1] text-white font-semibold text-base hover:bg-[#818cf8] transition-all duration-200 shadow-xl shadow-[#6366f1]/30"
          >
            Get started free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={LINKS.docs}
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#0e0f1a] border border-[#1a1b2e] text-[#e2e8f0] font-semibold text-base hover:border-[#6366f1]/50 transition-all duration-200"
          >
            <Terminal className="w-4 h-4" />
            Read the docs
          </a>
        </motion.div>

        {/* Install command */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="terminal max-w-lg mx-auto p-4 text-left"
        >
          <div className="flex items-center gap-1.5 mb-3">
            <div className="terminal-dot bg-[#ff5f57]" />
            <div className="terminal-dot bg-[#ffbd2e]" />
            <div className="terminal-dot bg-[#28ca41]" />
          </div>
          <p className="text-[#64748b]">
            <span className="text-[#6366f1]">$</span>{" "}
            <span className="text-[#22d3ee]">{INSTALL_CMD}</span>
          </p>
          <p className="text-[#64748b] mt-1">
            <span className="text-[#6366f1]">$</span>{" "}
            <span className="text-[#e2e8f0]">kentest setup</span>
          </p>
          <p className="text-[#22c55e] mt-1">✓ KenTest configured. You're ready to test.</p>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-[#64748b]"
        >
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 text-[#eab308] fill-[#eab308]" />
            <Star className="w-4 h-4 text-[#eab308] fill-[#eab308]" />
            <Star className="w-4 h-4 text-[#eab308] fill-[#eab308]" />
            <Star className="w-4 h-4 text-[#eab308] fill-[#eab308]" />
            <Star className="w-4 h-4 text-[#eab308] fill-[#eab308]" />
            <span className="ml-1">Loved by developers</span>
          </div>
          <span className="hidden sm:block text-[#1a1b2e]">|</span>
          <span>No credit card required</span>
          <span className="hidden sm:block text-[#1a1b2e]">|</span>
          <span>Node.js ≥ 20</span>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <div className="w-6 h-10 rounded-full border-2 border-[#1a1b2e] flex items-start justify-center pt-1.5">
          <div className="w-1 h-2.5 rounded-full bg-[#6366f1] animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
