import React from 'react';
import { motion } from 'framer-motion';

const sample = {
  a: { title: 'Tier 2 Mechanical', placement: '45%', salary: '3.5 LPA', growth: 'Moderate', risk: 'Medium' },
  b: { title: 'Tier 3 CSE', placement: '30%', salary: '2.8 LPA', growth: 'High', risk: 'High' },
};

export default function ComparisonSection() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black">Compare Your Options</h2>
          <p className="mt-2 text-sm text-slate-600">Quick side-by-side view to reduce decision friction.</p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[sample.a, sample.b].map((opt) => (
            <motion.div key={opt.title} whileHover={{ y: -6 }} className="rounded-[1.2rem] border p-6">
              <div className="text-lg font-bold">{opt.title}</div>
              <div className="mt-4 grid gap-2 text-sm">
                <div>Placement rate: <strong>{opt.placement}</strong></div>
                <div>Avg salary: <strong>{opt.salary}</strong></div>
                <div>Growth: <strong>{opt.growth}</strong></div>
                <div>Risk level: <strong>{opt.risk}</strong></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
