import React from 'react';
import { navLinks } from '../data/siteContent';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0F2E]/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3 text-white">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF6B2B] to-[#ff8a57] shadow-lg shadow-[#FF6B2B]/30">
            <span className="text-sm font-black tracking-[0.3em]">A</span>
          </div>
          <div>
            <div className="text-lg font-extrabold tracking-[0.24em]">ATYANT</div>
            <div className="text-xs text-white/55">Decision clarity for 12th students</div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-white/75 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#pricing"
          className="inline-flex items-center gap-2 rounded-full bg-[#FF6B2B] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#FF6B2B]/25 transition hover:scale-[1.03] hover:bg-[#ff7a42]"
        >
          Get Clarity
        </a>
      </div>
    </header>
  );
}
