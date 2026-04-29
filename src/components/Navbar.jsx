import React from 'react';
import { motion } from 'framer-motion';
import { navLinks } from '../data/siteContent';

export default function Navbar({ activeTab, onTabChange }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0F2E]/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3 text-white">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF6B2B] to-[#ff8a57] shadow-lg shadow-[#FF6B2B]/30">
            <span className="text-sm font-black tracking-[0.3em]">A</span>
          </div>
          <div>
            <div className="text-lg font-extrabold tracking-[0.24em]">ATYANT</div>
            <div className="text-xs text-white/55">House of Products</div>
          </div>
        </a>

        {/* Tab Switcher */}
        <div className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1 backdrop-blur lg:flex">
          <motion.button
            onClick={() => onTabChange('careeros')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
              activeTab === 'careeros'
                ? 'bg-[#FF6B2B] text-white shadow-lg shadow-[#FF6B2B]/25'
                : 'text-white/70 hover:text-white'
            }`}
          >
            CareerOS
          </motion.button>
          <motion.button
            onClick={() => onTabChange('launchpad')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
              activeTab === 'launchpad'
                ? 'bg-[#FF6B2B] text-white shadow-lg shadow-[#FF6B2B]/25'
                : 'text-white/70 hover:text-white'
            }`}
          >
            Launchpad 🔥
          </motion.button>
        </div>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-white/75 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://chat.whatsapp.com/F3qcw7JZRIK5vbPgvUfaOA?mode=gi_t"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#FF6B2B] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#FF6B2B]/25 transition hover:scale-[1.03] hover:bg-[#ff7a42]"
        >
          Get Clarity
        </a>
      </div>

      {/* Mobile Tab Switcher */}
      <div className="flex items-center gap-2 border-t border-white/10 bg-[#0B0F2E]/95 px-4 py-3 backdrop-blur lg:hidden">
        <button
          onClick={() => onTabChange('careeros')}
          className={`flex-1 rounded-lg px-4 py-2 text-xs font-semibold transition ${
            activeTab === 'careeros'
              ? 'bg-[#FF6B2B] text-white'
              : 'bg-white/5 text-white/70 hover:bg-white/10'
          }`}
        >
          CareerOS
        </button>
        <button
          onClick={() => onTabChange('launchpad')}
          className={`flex-1 rounded-lg px-4 py-2 text-xs font-semibold transition ${
            activeTab === 'launchpad'
              ? 'bg-[#FF6B2B] text-white'
              : 'bg-white/5 text-white/70 hover:bg-white/10'
          }`}
        >
          Launchpad 🔥
        </button>
      </div>
    </header>
  );
}
