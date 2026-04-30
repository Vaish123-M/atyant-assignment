import React from 'react';

const steps = [
  'Understand your rank reality',
  'Compare real outcomes',
  'Choose best path',
  'Validate with seniors',
];

export default function AtyantFramework() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 bg-[#0B0F2E] text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black">Atyant Decision System™</h2>
          <p className="mt-2 text-sm text-white/70">A repeatable 4-step approach to make the right 4-year decision.</p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s} className="rounded-xl border p-6 text-center bg-white/6">
              <div className="text-lg font-black text-[#FF6B2B]">{i + 1}</div>
              <div className="mt-3 font-semibold">{s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
