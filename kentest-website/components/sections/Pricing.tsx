"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PLANS } from "@/lib/constants";

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6 border-t border-[#1a1b2e]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#e2e8f0] leading-tight mb-4">
            Simple,{" "}
            <span className="gradient-text">transparent pricing</span>
          </h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto text-lg">
            Start free. Upgrade when your agents need more runs.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-7 flex flex-col ${
                plan.highlighted
                  ? "bg-[#6366f1]/10 border-2 border-[#6366f1]/60 shadow-2xl shadow-[#6366f1]/20"
                  : "bg-[#0e0f1a] border border-[#1a1b2e]"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#6366f1] text-white text-xs font-semibold">
                  Most popular
                </div>
              )}

              <div className="mb-6">
                <p className="text-sm font-semibold text-[#94a3b8] mb-2">{plan.name}</p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold text-[#e2e8f0]">{plan.price}</span>
                  {plan.period && (
                    <span className="text-[#64748b] text-sm">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-[#64748b]">{plan.description}</p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#6366f1] mt-0.5 shrink-0" />
                    <span className="text-sm text-[#94a3b8]">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#get-started"
                className={`w-full text-center px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  plan.highlighted
                    ? "bg-[#6366f1] text-white hover:bg-[#818cf8] shadow-lg shadow-[#6366f1]/30"
                    : "bg-[#1a1b2e] text-[#e2e8f0] hover:bg-[#1e2035] border border-[#2a2b40]"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
