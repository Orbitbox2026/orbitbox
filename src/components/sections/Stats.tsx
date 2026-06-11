'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Total Value Locked', value: 42, suffix: 'M', prefix: '$', decimals: 0 },
  { label: 'GRAM Holders', value: 18, suffix: 'K+', prefix: '', decimals: 0 },
  { label: 'Transactions', value: 2.4, suffix: 'M', prefix: '', decimals: 1 },
  { label: 'Countries', value: 120, suffix: '+', prefix: '', decimals: 0 },
];

function Counter({
  value,
  suffix,
  prefix,
  decimals,
  active,
}: {
  value: number;
  suffix: string;
  prefix: string;
  decimals: number;
  active: boolean;
}) {
  const [current, setCurrent] = useState(0);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);
  const duration = 2000;

  useEffect(() => {
    if (!active) return;
    startRef.current = performance.now();
    function animate(now: number) {
      const elapsed = now - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(eased * value);
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    }
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, value]);

  const display =
    decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString();

  return (
    <span className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight gradient-text tabular-nums">
      {prefix}{display}{suffix}
    </span>
  );
}

export default function Stats() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section aria-label="Key protocol statistics" className="py-20 md:py-28 bg-[#12121a]/30 border-y border-[#1e1e2e]">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <Counter {...s} active={active} />
              <span className="text-sm text-[#9ca3af] font-medium">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
