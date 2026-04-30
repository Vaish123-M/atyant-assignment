import React from 'react';
import { motion } from 'framer-motion';

const sample = {
  a: { title: 'Tier 2 Mechanical', placement: '45%', salary: '3.5 LPA', growth: 'Moderate', risk: 'Medium', highlight: true },
  b: { title: 'Tier 3 CSE', placement: '30%', salary: '2.8 LPA', growth: 'High', risk: 'High' },
};

export default function ComparisonSection() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center px-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Compare Your Options</h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">Quick side-by-side view to reduce decision friction.</p>
        </div>

        <div className="mt-8 grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
          {[sample.a, sample.b].map((opt) => (
            <motion.div key={opt.title} whileHover={{ y: -8 }} className={`rounded-2xl p-4 sm:p-6 shadow-lg border ${opt.highlight ? 'border-[#FF6B2B] bg-white' : 'bg-white'}`}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                <div className="min-w-0">
                  <div className="text-base sm:text-lg font-bold">{opt.title}</div>
                  <div className="mt-1 text-xs text-slate-500">Snapshot of real outcomes to help compare choices quickly.</div>
                </div>
                {opt.highlight && <div className="rounded-full bg-[#FF6B2B] px-3 py-1 text-xs font-semibold text-white w-fit">Recommended</div>}
              </div>

              <div className="mt-4 sm:mt-6 grid gap-2 sm:gap-3">
                <div className="flex items-center justify-between">
                  <div className="text-xs sm:text-sm text-slate-600">Placement rate</div>
                  <div className="text-xs sm:text-sm font-semibold">{opt.placement}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-xs sm:text-sm text-slate-600">Avg salary</div>
                  <div className="text-xs sm:text-sm font-semibold">{opt.salary}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-xs sm:text-sm text-slate-600">Growth</div>
                  <div className="text-xs sm:text-sm font-semibold">{opt.growth}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-xs sm:text-sm text-slate-600">Risk level</div>
                  <div className="text-xs sm:text-sm font-semibold">{opt.risk}</div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center sm:justify-between gap-2">
                <a className="text-xs sm:text-sm font-semibold text-[#FF6B2B] hover:underline text-center" href="#">Discuss</a>
                <button className="rounded-full bg-[#0B122B] px-4 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-[#0B122B]/90 transition">View details</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
