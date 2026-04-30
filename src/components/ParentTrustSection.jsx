import React from 'react';

export default function ParentTrustSection() {
  const points = [
    'Data-backed guidance',
    'Real student outcomes',
    'No random counselling',
    'Transparent advice',
  ];

  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black">Why Parents Trust Atyant</h2>
          <p className="mt-2 text-sm text-slate-600">Practical, evidence-backed guidance that parents can rely on.</p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {points.map((p) => (
            <div key={p} className="rounded-lg border p-6 text-center">
              <div className="text-xl font-bold text-[#FF6B2B]">✓</div>
              <div className="mt-3 font-semibold">{p}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
