import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  'Understand your rank reality',
  'Compare real outcomes',
  'Choose best path',
  'Validate with seniors',
];

export default function AtyantFramework() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-br from-[#071032] to-[#0B122B] text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold">Atyant Decision System™</h2>
          <p className="mt-2 text-sm text-white/70">A repeatable 4-step approach to make the right 4-year decision.</p>
        </div>

        <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mt-8 flex items-center justify-center">
          <div className="flex w-full max-w-4xl items-center gap-4">
            {steps.map((s, i) => (
              <div key={s} className="flex-1">
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0B122B] font-extrabold">{i + 1}</div>
                  {i < steps.length - 1 && (
                    <div className="flex-1 h-[2px] bg-white/20 mx-4" />
                  )}
                </div>
                <div className="mt-4 text-sm font-semibold text-center text-white/90">{s}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
