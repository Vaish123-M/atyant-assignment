import React from 'react';
import { footerLinks } from '../data/siteContent';
import TrustBadges from './TrustBadges';

export default function Footer({ onAdminClick }) {
  return (
    <>
      <TrustBadges />
      <footer className="border-t border-white/10 bg-[#09102b] px-4 py-10 text-white/72 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
          <div className="text-lg font-extrabold tracking-[0.24em] text-white">ATYANT</div>
          <div className="mt-2 text-sm text-white">Built for students who deserve better decisions.</div>
        </div>
          <div className="flex flex-wrap gap-5 items-center text-sm">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
            <button onClick={onAdminClick} className="ml-2 text-xs text-white/60 hover:text-white">Admin</button>
          </div>
        </div>
      </footer>
    </>
  );
}
