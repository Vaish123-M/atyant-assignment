import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { heroTrustBadges } from '../data/siteContent';
import ParticleClusterBackground from './ParticleClusterBackground';

const journeyTabs = [
  { id: 'after12th', label: 'After 12th 🔥' },
  { id: 'college', label: 'College Student 🚀' },
  { id: 'finalyear', label: 'Final Year 💼' },
  { id: 'workingpro', label: 'Working Pro 📈' },
];

export default function Hero({ activeTab, onTabChange }) {
  return (
    <div className="relative w-full">
      <ParticleClusterBackground particleCount={20} variant="dark" intensity="subtle" />
      <section id="top" className="relative overflow-hidden bg-[#0B0F2E] text-white z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,107,43,0.24),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(63,94,251,0.16),_transparent_30%)]" />
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#FF6B2B]/20 blur-3xl" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-1 lg:items-center lg:px-8 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="w-full text-center">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
            {journeyTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition ${
                  activeTab === tab.id
                    ? 'bg-[#FF6B2B] text-white'
                    : 'border border-white/30 bg-white/8 text-white hover:bg-white/12'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="mb-6 inline-flex items-center gap-2 justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 backdrop-blur">
            <Sparkles className="h-4 w-4 text-[#FF6B2B]" />
            Decision Clarity Platform for Students
          </div>
          <h1 className="w-full text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-6xl">
            Confused After 12th? Don’t Risk a Wrong 4-Year Decision.
          </h1>
          <p className="mt-4 sm:mt-6 mx-auto w-full max-w-4xl text-sm sm:text-base leading-7 sm:leading-8 text-white/72 lg:text-lg px-2">
            Most students choose blindly. We help you choose right — avoid wrong decisions, reduce regret, and get a clear next step.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col items-center gap-3 sm:gap-4 sm:flex-row sm:justify-center px-2">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openLeadModal'))}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#FF6B2B] to-[#ff8a57] px-6 py-3 sm:py-4 text-sm font-semibold text-white shadow-2xl shadow-[#FF6B2B]/25 transition hover:scale-[1.03] hover:opacity-95"
            >
              Get Clarity Now
            </button>
            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 sm:py-4 text-sm font-semibold text-white backdrop-blur transition hover:scale-[1.03] hover:bg-[#FF6B2B]/12 hover:text-white"
            >
              See Plans
            </a>
          </div>
          <div className="mt-8 sm:mt-10 grid w-full max-w-4xl grid-cols-1 gap-2 sm:gap-3 sm:grid-cols-3 sm:mx-auto px-2">
            {heroTrustBadges.map((badge) => (
              <div key={badge} className="rounded-2xl border border-white/10 bg-white/6 px-3 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-white/82 shadow-lg backdrop-blur">
                {badge}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Decision roadmap and student profile removed as requested */}
        </div>
      </section>
    </div>
  );
}
