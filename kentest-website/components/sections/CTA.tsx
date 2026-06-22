"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { LINKS } from "@/lib/constants";

export default function CTA() {
  return (
    <section id="get-started" className="py-28 px-6 border-t border-[#1a1b2e]">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Glow blob */}
          <div
            className="absolute left-1/2 -translate-x-1/2 w-[500px] h-[200px] blur-[100px] opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(ellipse, #6366f1, transparent)" }}
          />

          <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest mb-4">
            Get started
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#e2e8f0] leading-tight mb-6">
            Start verifying in{" "}
            <span className="gradient-text">under a minute</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-xl mx-auto mb-10">
            Install KenTest, run setup, and ship your first verified test today.
            Free forever for solo devs.
          </p>

          {/* Install box */}
          <div className="terminal p-5 mb-8 text-left max-w-lg mx-auto">
            <div className="flex items-center gap-1.5 mb-3">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28ca41]" />
            </div>
            <p className="text-[#94a3b8]">
              <span className="text-[#6366f1]">$</span>{" "}
              <span className="text-[#22d3ee]">npm install -g @kentest/kentest-cli</span>
            </p>
            <p className="text-[#94a3b8] mt-1">
              <span className="text-[#6366f1]">$</span>{" "}
              <span className="text-[#e2e8f0]">kentest setup</span>
            </p>
            <p className="text-[#94a3b8] mt-1">
              <span className="text-[#6366f1]">$</span>{" "}
              <span className="text-[#e2e8f0]">kentest agent install claude</span>
            </p>
            <p className="text-[#22c55e] mt-2">✓ Ready. Your agent can now verify every change it ships.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={LINKS.docs}
              className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#6366f1] text-white font-semibold hover:bg-[#818cf8] transition-colors shadow-xl shadow-[#6366f1]/30"
            >
              <Terminal className="w-4 h-4" />
              Read the docs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#0e0f1a] border border-[#1a1b2e] text-[#e2e8f0] font-semibold hover:border-[#6366f1]/50 transition-colors"
            >
              Join Discord
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
