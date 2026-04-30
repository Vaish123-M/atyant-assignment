import React from 'react';

const badges = [
  { id: 1, label: 'Trusted by 10k+ students' },
  { id: 2, label: '200+ college partners' },
  { id: 3, label: '90% satisfaction' },
];

export default function TrustBadges() {
  return (
    <div className="mx-auto my-6 max-w-4xl px-4">
      <div className="flex items-center justify-center gap-6 text-sm text-gray-700">
        {badges.map((b) => (
          <div key={b.id} className="flex items-center gap-3 rounded-md bg-white/5 px-3 py-2 shadow-sm">
            <div className="h-8 w-8 rounded-full bg-[#FF6B2B]/10 flex items-center justify-center text-xs font-semibold text-[#FF6B2B]">A</div>
            <div className="leading-4">
              <div className="font-semibold text-black">{b.label.split(' ')[0]}</div>
              <div className="text-xs text-black/70">{b.label.replace(b.label.split(' ')[0], '').trim()}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
