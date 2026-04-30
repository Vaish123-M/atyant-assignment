import React from 'react';
import { motion } from 'framer-motion';

const journeyTabs = [
  { id: 'after12th', label: 'After 12th 🔥' },
  { id: 'college', label: 'College Student 🚀' },
  { id: 'finalyear', label: 'Final Year 💼' },
  { id: 'workingpro', label: 'Working Pro 📈' },
];

export default function Navbar({ activeTab, onTabChange, onLeadClick }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0F2E]/88 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2 sm:gap-3 text-white">
          <div className="flex h-10 sm:h-11 w-10 sm:w-11 items-center justify-center flex-shrink-0 rounded-2xl bg-gradient-to-br from-[#FF6B2B] to-[#ff8a57] shadow-lg shadow-[#FF6B2B]/30">
            <span className="text-xs sm:text-sm font-black tracking-[0.3em]">A</span>
          </div>
          <div className="hidden sm:block">
            <div className="text-base sm:text-lg font-extrabold tracking-[0.24em]">ATYANT</div>
            <div className="text-xs text-white/55">India's Student Decision Platform</div>
          </div>
        </a>

        <div className="hidden min-w-0 flex-1 items-center justify-center gap-3 lg:flex">
          <span className="text-xs font-semibold uppercase tracking-[0.26em] text-white/45">I'm in</span>
          <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1 shadow-[0_12px_30px_rgba(0,0,0,0.18)] backdrop-blur">
            {journeyTabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition relative z-10 ${
                  activeTab === tab.id
                    ? 'bg-[#FF6B2B] text-white shadow-lg shadow-[#FF6B2B]/25'
                    : 'text-white/68 hover:text-white hover:bg-[#FF6B2B]/12'
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>

        <button
          onClick={onLeadClick}
          className="ml-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#FF6B2B] px-3 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-[#FF6B2B]/25 transition hover:scale-[1.03] hover:bg-[#ff7a42]"
        >
          Get Clarity
        </button>
      </div>

      <div className="border-t border-white/10 bg-[#0B0F2E]/96 px-4 py-3 backdrop-blur lg:hidden">
        <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-white/42">I'm in</div>
          <div className="flex gap-2 overflow-x-auto pb-1">
          {journeyTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition relative z-10 ${
                activeTab === tab.id
                  ? 'bg-[#FF6B2B] text-white shadow-lg shadow-[#FF6B2B]/25'
                  : 'bg-white/5 text-white/70 hover:bg-[#FF6B2B]/12 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
