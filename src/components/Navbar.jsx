import React from 'react';

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
          <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1 shadow-[0_12px_30px_rgba(0,0,0,0.18)] backdrop-blur">
            {journeyTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold relative z-10 ${
                  activeTab === tab.id
                    ? 'bg-[#FF6B2B] text-white'
                    : 'bg-white/20 text-white border border-white/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={onLeadClick}
          className="ml-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#FF6B2B] px-3 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-[#FF6B2B]/25"
        >
          Get Clarity
        </button>
      </div>

      <div className="border-t border-white/10 bg-[#0B0F2E]/96 px-3 py-3 backdrop-blur lg:hidden">
        <div className="grid grid-cols-4 gap-2">
          {journeyTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`min-h-[52px] rounded-2xl px-1 py-2 text-center text-[9px] font-semibold leading-tight relative z-10 sm:text-[10px] ${
                activeTab === tab.id
                  ? 'bg-[#FF6B2B] text-white'
                  : 'bg-white/20 text-white border border-white/30'
              }`}
            >
              <span className="block whitespace-normal break-words">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
