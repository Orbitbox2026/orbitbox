"use client";

import { motion } from "framer-motion";
import { STEPS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 px-6 border-t border-[#1a1b2e]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest mb-3">
            How it works
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#e2e8f0] leading-tight mb-4">
            From code change to{" "}
            <span className="gradient-text">verified fix</span>
          </h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto text-lg">
            Three commands. One feedback loop. No dashboard required.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-8">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="grid md:grid-cols-2 gap-6 items-start p-6 rounded-2xl bg-[#0e0f1a] border border-[#1a1b2e]"
            >
              {/* Left: step info */}
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-[#6366f1]">{step.number}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#e2e8f0] mb-2 text-lg">{step.title}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{step.description}</p>
                </div>
              </div>

              {/* Right: code */}
              <div className="terminal p-4">
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28ca41]" />
                </div>
                {step.code.split("\n").map((line, j) => (
                  <p key={j} className="text-[#94a3b8]">
                    {line.startsWith("  ") ? (
                      <span className="text-[#64748b]">{line}</span>
                    ) : (
                      <>
                        <span className="text-[#6366f1]">$</span>{" "}
                        <span className="text-[#e2e8f0]">{line.replace(/^\$ /, "")}</span>
                      </>
                    )}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Loop arrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#6366f1]/10 border border-[#6366f1]/20">
            <span className="text-sm text-[#a5b4fc] font-medium">
              Agent fixes the code → reruns → loop until green ✓
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
