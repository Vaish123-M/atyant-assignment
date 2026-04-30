import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { title: 'Tier 3 CSE ≠ guaranteed placement', color: 'from-[#FFD8C4] to-[#FFB6A2]', icon: '⚠️' },
  { title: 'Branch matters more than you think', color: 'from-[#E7F6FF] to-[#CFEFFF]', icon: '🔍' },
  { title: 'Private colleges hide real placement data', color: 'from-[#FFE7E0] to-[#FFD1C1]', icon: '🕵️‍♂️' },
  { title: 'Following friends leads to regret', color: 'from-[#FFF6DF] to-[#FFE6B8]', icon: '🤝' },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function WhatNobody() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">What Nobody Tells You About College Decisions</h2>
          <p className="mt-3 text-sm text-slate-600">Little truths that change the way you pick a college or branch.</p>
        </div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-8 grid gap-4 md:grid-cols-4">
          {items.map((it) => (
            <motion.div key={it.title} variants={card} whileHover={{ y: -8, scale: 1.02 }} className={`rounded-2xl p-5 shadow-lg border border-white/10 bg-gradient-to-br ${it.color} text-[#0B0F2E]`}>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-2xl">{it.icon}</div>
                <div>
                  <div className="text-sm font-semibold">{it.title}</div>
                  <div className="mt-2 text-xs text-slate-700">Short, actionable insight to help you think differently about choices.</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
