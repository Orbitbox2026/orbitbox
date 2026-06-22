"use client";

import { motion } from "framer-motion";
import { FEATURES } from "@/lib/constants";

export default function Features() {
  return (
    <section id="features" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest mb-3">
            Features
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#e2e8f0] leading-tight mb-4">
            Built for the{" "}
            <span className="gradient-text">agentic era</span>
          </h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto text-lg">
            Traditional test frameworks were designed for humans. KenTest is
            designed for agents — deterministic, composable, and failure-first.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-6 rounded-2xl bg-[#0e0f1a] border border-[#1a1b2e] hover:border-[#6366f1]/40 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#6366f1]/10 flex items-center justify-center text-xl mb-4 group-hover:bg-[#6366f1]/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-[#e2e8f0] mb-2">{feature.title}</h3>
              <p className="text-sm text-[#64748b] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
