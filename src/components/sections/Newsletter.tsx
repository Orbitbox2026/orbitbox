'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  }

  return (
    <section aria-labelledby="newsletter-heading" className="py-24 px-6 bg-farm-card/30 border-y border-farm-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto text-center"
      >
        <div className="inline-flex p-3 rounded-xl bg-[#22c55e]/10 border border-[#22c55e]/30 mb-5">
          <Mail className="w-6 h-6 text-[#4ade80]" aria-hidden />
        </div>
        <h2 id="newsletter-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-farm-text mb-3">
          Get Early Access
        </h2>
        <p className="text-farm-muted leading-relaxed mb-8">
          Be first to hear about the next playtest, the $CROP launch, and new crops, animals, and events landing in CropVerse.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 text-[#4ade80] font-semibold">
            <CheckCircle2 className="w-5 h-5" aria-hidden />
            <span>You&apos;re on the list! We&apos;ll be in touch.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate aria-label="Newsletter signup">
            <div className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="email-input" className="sr-only">Email address</label>
              <input
                id="email-input"
                type="email"
                value={email}
                onChange={e => { setEmail(e.target.value); setError(''); }}
                placeholder="Enter your email"
                autoComplete="email"
                className="flex-1 px-4 py-3 rounded-xl bg-farm-bg border border-farm-border text-farm-text placeholder:text-farm-muted text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22c55e] focus-visible:border-[#22c55e]/50 transition-colors duration-200"
                aria-describedby={error ? 'email-error' : undefined}
                aria-invalid={!!error}
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#22c55e] text-[#0a120c] font-semibold text-sm hover:bg-[#4ade80] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22c55e] focus-visible:ring-offset-2 focus-visible:ring-offset-farm-bg whitespace-nowrap"
              >
                Notify Me
                <ArrowRight className="w-4 h-4" aria-hidden />
              </button>
            </div>
            {error && (
              <p id="email-error" role="alert" className="mt-2 text-sm text-red-400 text-left">
                {error}
              </p>
            )}
            <p className="mt-3 text-xs text-farm-muted">
              No spam. Unsubscribe at any time. UI demo only — no emails are actually sent.
            </p>
          </form>
        )}
      </motion.div>
    </section>
  );
}
