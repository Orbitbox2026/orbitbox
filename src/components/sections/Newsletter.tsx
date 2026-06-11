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
    <section aria-labelledby="newsletter-heading" className="py-24 px-6 bg-gram-card/30 border-y border-gram-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto text-center"
      >
        <div className="inline-flex p-3 rounded-xl bg-gram-purple/10 border border-gram-purple/30 mb-5">
          <Mail className="w-6 h-6 text-gram-purple-light" aria-hidden />
        </div>
        <h2 id="newsletter-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-gram-text mb-3">
          Stay in the Loop
        </h2>
        <p className="text-gram-muted leading-relaxed mb-8">
          Get notified about the token launch, DAO governance proposals, and ecosystem updates.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 text-green-400 font-semibold">
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
                className="flex-1 px-4 py-3 rounded-xl bg-gram-bg border border-gram-border text-gram-text placeholder:text-gram-muted text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gram-purple focus-visible:border-gram-purple/50 transition-colors duration-200"
                aria-describedby={error ? 'email-error' : undefined}
                aria-invalid={!!error}
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gram-purple text-white font-semibold text-sm hover:bg-gram-purple-light transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gram-purple focus-visible:ring-offset-2 focus-visible:ring-offset-gram-bg whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" aria-hidden />
              </button>
            </div>
            {error && (
              <p id="email-error" role="alert" className="mt-2 text-sm text-red-400 text-left">
                {error}
              </p>
            )}
            <p className="mt-3 text-xs text-gram-muted">
              No spam. Unsubscribe at any time. UI demo only — no emails are actually sent.
            </p>
          </form>
        )}
      </motion.div>
    </section>
  );
}
