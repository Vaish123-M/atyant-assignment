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
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold">Compare Your Options</h2>
          <p className="mt-2 text-sm text-slate-600">Quick side-by-side view to reduce decision friction.</p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[sample.a, sample.b].map((opt) => (
            <motion.div key={opt.title} whileHover={{ y: -8 }} className={`rounded-2xl p-6 shadow-lg border ${opt.highlight ? 'border-[#FF6B2B] bg-white' : 'bg-white'}`}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold">{opt.title}</div>
                  <div className="mt-1 text-xs text-slate-500">Snapshot of real outcomes to help compare choices quickly.</div>
                </div>
                {opt.highlight && <div className="rounded-full bg-[#FF6B2B] px-3 py-1 text-xs font-semibold text-white">Recommended</div>}
              </div>

              <div className="mt-6 grid gap-3">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-600">Placement rate</div>
                  <div className="text-sm font-semibold">{opt.placement}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-600">Avg salary</div>
                  <div className="text-sm font-semibold">{opt.salary}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-600">Growth</div>
                  <div className="text-sm font-semibold">{opt.growth}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-600">Risk level</div>
                  <div className="text-sm font-semibold">{opt.risk}</div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <a className="text-sm font-semibold text-[#FF6B2B] hover:underline" href="#">Discuss</a>
                <button className="rounded-full bg-[#0B122B] px-4 py-2 text-sm font-semibold text-white">View details</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
