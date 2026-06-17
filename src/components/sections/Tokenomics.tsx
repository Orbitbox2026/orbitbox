'use client';

import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, type TooltipContentProps } from 'recharts';
import { Info } from 'lucide-react';

const SEGMENTS = [
  { name: 'Harvest Pool Rewards', value: 45, color: '#22c55e', desc: 'Distributed daily to active farmers' },
  { name: 'Liquidity', value: 20, color: '#4ade80', desc: 'DEX liquidity & market making' },
  { name: 'Treasury', value: 15, color: '#fbbf24', desc: 'Funded partly by Gems purchases' },
  { name: 'Team (Vested)', value: 12, color: '#f59e0b', desc: '4-year vesting, 1-year cliff' },
  { name: 'Community & Airdrops', value: 8, color: '#a3e635', desc: 'Events, quests, and early players' },
];

const RADIAN = Math.PI / 180;

function CustomLabel({ cx, cy, midAngle, innerRadius, outerRadius, value }: {
  cx: number; cy: number; midAngle: number; innerRadius: number; outerRadius: number; value: number;
}) {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="#0a120c" textAnchor="middle" dominantBaseline="central" fontSize={13} fontWeight={700}>
      {`${value}%`}
    </text>
  );
}

function CustomTooltip({ active, payload }: TooltipContentProps<number, string>) {
  if (!active || !payload?.length) return null;
  const d = payload[0];
  return (
    <div className="bg-farm-bg border border-farm-border rounded-xl px-4 py-3 shadow-xl text-sm">
      <p className="font-semibold text-farm-text">{d.name}</p>
      <p className="text-farm-muted mt-0.5">{d.value}% of total supply</p>
    </div>
  );
}

export default function Tokenomics() {
  return (
    <section id="token" className="py-24 md:py-32 px-6 bg-farm-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-xs font-semibold text-[#fbbf24] tracking-widest uppercase mb-4">
            <Info className="w-3 h-3" aria-hidden />
            Demo Data
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-farm-text">
            The <span className="gradient-text">$CROP</span> Token
          </h2>
          <p className="mt-4 text-farm-muted text-lg max-w-xl mx-auto">
            Total supply: <span className="font-semibold text-farm-text">1,000,000,000</span> $CROP.
            The largest share goes straight back to farmers through the Harvest Pool.
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
              <div key={seg.name} className="flex items-start gap-4 p-4 rounded-xl bg-farm-card border border-farm-border hover:border-farm-border/80 transition-colors duration-200">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: seg.color }} aria-hidden />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-farm-text">{seg.name}</span>
                    <span className="font-bold text-farm-text tabular-nums">{seg.value}%</span>
                  </div>
                  <p className="text-xs text-farm-muted mt-0.5">{seg.desc}</p>
                  <div className="mt-2 h-1.5 rounded-full bg-farm-bg overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ width: `${seg.value}%`, backgroundColor: seg.color }}
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
