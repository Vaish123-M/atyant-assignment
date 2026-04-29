import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircleMore, School2, Sparkles } from 'lucide-react';
import { heroDecisionRows, heroProfilePoints, heroTrustBadges } from '../data/siteContent';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#0B0F2E] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,107,43,0.24),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(63,94,251,0.16),_transparent_30%)]" />
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#FF6B2B]/20 blur-3xl" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 backdrop-blur">
            <Sparkles className="h-4 w-4 text-[#FF6B2B]" />
            Built for students confused after boards, JEE, NEET and commerce results
          </div>
          <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Confused After 12th?
            <span className="block text-[#FFB38E]">Don’t Take a Wrong College Decision.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/72 sm:text-lg">
            Talk to seniors who already lived your path. Get clarity on college, branch, placements & future growth before you commit to four years.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
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
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
            {heroTrustBadges.map((badge) => (
              <div key={badge} className="rounded-2xl border border-white/10 bg-white/6 px-4 py-4 text-sm font-semibold text-white/82 shadow-lg backdrop-blur">
                {badge}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6 lg:p-7">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_30%,rgba(255,107,43,0.12))]" />
            <div className="relative grid gap-4 sm:grid-cols-5">
              <div className="rounded-[1.6rem] border border-white/10 bg-[#101738]/80 p-4 sm:col-span-3 sm:p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-white/45">Decision roadmap</div>
                    <div className="mt-1 text-xl font-black leading-tight sm:text-2xl">Confusion to clarity</div>
                  </div>
                  <div className="rounded-2xl bg-[#FF6B2B]/15 p-3 text-[#FFB38E]">
                    <School2 className="h-6 w-6" />
                  </div>
                </div>
                <div className="mt-5 space-y-3 sm:space-y-4">
                  {heroDecisionRows.map((item) => (
                    <div key={item.label} className="rounded-2xl bg-white/6 px-4 py-3">
                      <div className="flex items-center justify-between gap-3 text-sm text-white/78">
                        <span className="min-w-0">{item.label}</span>
                        <span className="whitespace-nowrap font-semibold text-[#FFB38E]">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:col-span-2">
                <div className="rounded-[1.6rem] border border-white/10 bg-white/8 p-4 sm:p-5">
                  <div className="text-sm text-white/55">Student profile</div>
                  <div className="mt-2 text-lg font-bold leading-tight sm:text-xl">Rank 80k - 3 lakh</div>
                  <div className="mt-3 space-y-2 text-sm text-white/72">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#FF6B2B]" />
                      <span>Tier 2 / Tier 3 city</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#FF6B2B]" />
                      <span>Parent-influenced decision</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-[1.6rem] border border-white/10 bg-white/8 p-4 sm:p-5">
                  <div className="text-sm text-white/55">Result</div>
                  <div className="mt-2 text-lg font-bold leading-tight">One clear next step</div>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#FF6B2B] px-4 py-2 text-sm font-semibold text-white">
                    <MessageCircleMore className="h-4 w-4" />
                    WhatsApp ready
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <div className="rounded-full border border-white/10 bg-white px-4 py-2 text-xs font-semibold text-[#0B0F2E] shadow-lg shadow-black/10">
                4 years saved from regret
              </div>
              <div className="rounded-full border border-white/10 bg-[#FF6B2B] px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-[#FF6B2B]/20">
                Better decision. Better future.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
