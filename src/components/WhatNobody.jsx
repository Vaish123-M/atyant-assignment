import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { title: 'Tier 3 CSE ≠ guaranteed placement', color: 'from-orange-200 to-red-200' },
  { title: 'Branch matters more than you think', color: 'from-orange-200 to-yellow-200' },
  { title: 'Private colleges hide real placement data', color: 'from-red-200 to-orange-200' },
  { title: 'Following friends leads to regret', color: 'from-yellow-200 to-orange-200' },
];

export default function WhatNobody() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black">What Nobody Tells You About College Decisions</h2>
          <p className="mt-3 text-sm text-slate-600">Little truths that change the way you pick a college or branch.</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {items.map((it) => (
            <motion.div whileHover={{ y: -6 }} key={it.title} className={`rounded-xl border p-4 shadow-sm bg-gradient-to-br ${it.color}`}>
              <div className="text-sm font-bold text-[#0B0F2E]">{it.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
