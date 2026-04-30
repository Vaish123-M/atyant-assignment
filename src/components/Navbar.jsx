import React from 'react';

export default function Navbar({ onLeadClick }) {
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

        <button
          onClick={onLeadClick}
          className="ml-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#FF6B2B] px-3 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-[#FF6B2B]/25"
        >
          Get Clarity
        </button>
      </div>
    </header>
  );
}
