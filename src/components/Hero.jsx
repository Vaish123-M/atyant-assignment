import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { heroTrustBadges } from '../data/siteContent';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#0B0F2E] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,107,43,0.24),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(63,94,251,0.16),_transparent_30%)]" />
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#FF6B2B]/20 blur-3xl" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-1 lg:items-center lg:px-8 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="w-full text-center">
          <div className="mb-6 inline-flex items-center gap-2 justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 backdrop-blur">
            <Sparkles className="h-4 w-4 text-[#FF6B2B]" />
            Built for students confused after boards, JEE, NEET, and commerce results
          </div>
          <h1 className="w-full text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Confused After 12th?
            <span className="block text-[#FFB38E]">Don’t Risk a Wrong 4-Year Decision.</span>
          </h1>
          <p className="mt-6 mx-auto w-full max-w-4xl text-base leading-8 text-white/72 sm:text-lg">
            JEE / NEET / Commerce students use Atyant to choose better colleges, better branches, and better futures.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://chat.whatsapp.com/F3qcw7JZRIK5vbPgvUfaOA?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#FF6B2B] px-6 py-4 text-sm font-semibold text-white shadow-2xl shadow-[#FF6B2B]/25 transition hover:scale-[1.03] hover:bg-[#ff7a42]"
            >
              Get Clarity on WhatsApp
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold text-white backdrop-blur transition hover:scale-[1.03] hover:bg-white/10"
            >
              See Plans
            </a>
          </div>
          <div className="mt-10 grid w-full max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3 sm:mx-auto">
            {heroTrustBadges.map((badge) => (
              <div key={badge} className="rounded-2xl border border-white/10 bg-white/6 px-4 py-4 text-sm font-semibold text-white/82 shadow-lg backdrop-blur">
                {badge}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Decision roadmap and student profile removed as requested */}
      </div>
    </section>
  );
}
