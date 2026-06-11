'use client';

import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, type TooltipContentProps } from 'recharts';
import { Info } from 'lucide-react';

const SEGMENTS = [
  { name: 'Public Sale', value: 40, color: '#8b5cf6', desc: 'Open to community via fair launch' },
  { name: 'Ecosystem', value: 25, color: '#22d3ee', desc: 'Grants, partnerships, integrations' },
  { name: 'Liquidity', value: 20, color: '#67e8f9', desc: 'DEX liquidity & market making' },
  { name: 'Team (Vested)', value: 15, color: '#a78bfa', desc: '4-year vesting, 1-year cliff' },
];

const RADIAN = Math.PI / 180;

function CustomLabel({ cx, cy, midAngle, innerRadius, outerRadius, value }: {
  cx: number; cy: number; midAngle: number; innerRadius: number; outerRadius: number; value: number;
}) {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={13} fontWeight={700}>
      {`${value}%`}
    </text>
  );
}

function CustomTooltip({ active, payload }: TooltipContentProps<number, string>) {
  if (!active || !payload?.length) return null;
  const d = payload[0];
  return (
    <div className="bg-gram-bg border border-gram-border rounded-xl px-4 py-3 shadow-xl text-sm">
      <p className="font-semibold text-gram-text">{d.name}</p>
      <p className="text-gram-muted mt-0.5">{d.value}% of total supply</p>
    </div>
  );
}

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="py-24 md:py-32 px-6 bg-gram-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gram-cyan/10 border border-gram-cyan/30 text-xs font-semibold text-gram-cyan tracking-widest uppercase mb-4">
            <Info className="w-3 h-3" aria-hidden />
            Demo Data
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gram-text">
            Token <span className="gradient-text">Distribution</span>
          </h2>
          <p className="mt-4 text-gram-muted text-lg max-w-xl mx-auto">
            GRAM total supply: <span className="font-semibold text-gram-text">1,000,000,000</span> tokens. Tokenomics designed for long-term sustainability.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Donut chart */}
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={SEGMENTS}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={130}
                  paddingAngle={3}
                  dataKey="value"
                  labelLine={false}
                  label={CustomLabel as unknown as boolean}
                >
                  {SEGMENTS.map((seg) => (
                    <Cell key={seg.name} fill={seg.color} stroke="transparent" />
                  ))}
                </Pie>
                <Tooltip content={(props) => <CustomTooltip {...(props as TooltipContentProps<number, string>)} />} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="space-y-4">
            {SEGMENTS.map((seg) => (
              <div key={seg.name} className="flex items-start gap-4 p-4 rounded-xl bg-gram-card border border-gram-border hover:border-gram-border/80 transition-colors duration-200">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: seg.color }} aria-hidden />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-gram-text">{seg.name}</span>
                    <span className="font-bold text-gram-text tabular-nums">{seg.value}%</span>
                  </div>
                  <p className="text-xs text-gram-muted mt-0.5">{seg.desc}</p>
                  <div className="mt-2 h-1.5 rounded-full bg-gram-bg overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ width: `${seg.value * 2.5}%`, backgroundColor: seg.color }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
