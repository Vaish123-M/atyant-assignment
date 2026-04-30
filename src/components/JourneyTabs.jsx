import React from 'react';

const journeyTabs = [
  { id: 'after12th', label: 'After 12th 🔥' },
  { id: 'college', label: 'College Student 🚀' },
  { id: 'finalyear', label: 'Final Year 💼' },
  { id: 'workingpro', label: 'Working Pro 📈' },
];

export default function JourneyTabs({ activeTab, onTabChange }) {
  return (
    <div className="bg-[#0B0F2E] border-b border-white/10 px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {journeyTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition ${
                activeTab === tab.id
                  ? 'bg-[#FF6B2B] text-white'
                  : 'border border-white/30 bg-white/8 text-white hover:bg-white/12'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
