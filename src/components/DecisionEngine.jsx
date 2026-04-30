import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const decisionSuggestions = {
  pcm: {
    topRanks: 'Focus on NIT/IIT prep. Top branches awaits you. Build projects simultaneously.',
    midRanks: 'Target Delhi colleges + Tier 1 state colleges. Engineering + data is your edge.',
    lowRanks: 'Choose colleges with strong placement culture. Choose branch wisely—consider CS over ECE.',
  },
  pcb: {
    topRanks: 'AIIMS/Top government college is likely. Prepare for high competition.',
    midRanks: 'Private med college or strong government college. Both paths viable.',
    lowRanks: 'Focus on college culture & hospital tie-ups. Career planning crucial.',
  },
  commerce: {
    topRanks: 'DU or Bombay colleges. CA/CS + degree combo recommended.',
    midRanks: 'Focus on specialization: Finance, Analytics, or Taxation.',
    lowRanks: 'Choose colleges with strong placement network. Skill-building essential.',
  },
};

export default function DecisionEngine() {
  const [stream, setStream] = useState('');
  const [rankInput, setRankInput] = useState('');
  const [confusion, setConfusion] = useState('');
  const [result, setResult] = useState(null);

  const handleGetDirection = () => {
    if (!stream || !rankInput) {
      alert('Please fill stream and rank/marks');
      return;
    }

    let suggestion = '';
    const rank = parseInt(rankInput);

    if (stream === 'pcm') {
      if (rank < 5000) suggestion = decisionSuggestions.pcm.topRanks;
      else if (rank < 50000) suggestion = decisionSuggestions.pcm.midRanks;
      else suggestion = decisionSuggestions.pcm.lowRanks;
    } else if (stream === 'pcb') {
      if (rank < 1000) suggestion = decisionSuggestions.pcb.topRanks;
      else if (rank < 10000) suggestion = decisionSuggestions.pcb.midRanks;
      else suggestion = decisionSuggestions.pcb.lowRanks;
    } else if (stream === 'commerce') {
      if (rank < 500) suggestion = decisionSuggestions.commerce.topRanks;
      else if (rank < 5000) suggestion = decisionSuggestions.commerce.midRanks;
      else suggestion = decisionSuggestions.commerce.lowRanks;
    }

    setResult(suggestion);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="bg-[#f6f7fb] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl">
          <motion.div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-12">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF6B2B]/15 text-[#FF6B2B]">
                <Sparkles className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-[#0B0F2E]">Decision Engine</h2>
            </div>

            <p className="mt-4 text-slate-600">
              Tell us about your situation. We'll show you what students like you should focus on.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#0B0F2E]">Your Stream</label>
                <select
                  value={stream}
                  onChange={(e) => setStream(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-700 focus:border-[#FF6B2B] focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/20"
                >
                  <option value="">Select your stream</option>
                  <option value="pcm">PCM (Engineering)</option>
                  <option value="pcb">PCB (Medical/Science)</option>
                  <option value="commerce">Commerce</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0B0F2E]">
                  Your Rank / Marks (out of 100)
                </label>
                <input
                  type="number"
                  value={rankInput}
                  onChange={(e) => setRankInput(e.target.value)}
                  placeholder="e.g., 5000 or 85"
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:border-[#FF6B2B] focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/20"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0B0F2E]">
                  What confuses you most? (Optional)
                </label>
                <textarea
                  value={confusion}
                  onChange={(e) => setConfusion(e.target.value)}
                  placeholder="e.g., Should I choose CSE or ECE? Is tier 2 college okay?"
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:border-[#FF6B2B] focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/20"
                  rows={3}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleGetDirection}
                className="w-full rounded-lg bg-gradient-to-r from-[#FF6B2B] to-[#ff8a57] py-4 text-base font-bold text-white shadow-lg shadow-[#FF6B2B]/30 transition hover:shadow-xl hover:shadow-[#FF6B2B]/40"
              >
                Get My Direction
              </motion.button>
            </div>

            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-8 rounded-xl border border-[#FF6B2B]/20 bg-[#FF6B2B]/5 p-6"
                >
                  <h3 className="text-lg font-bold text-[#0B0F2E]">
                    📌 Here's your direction:
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-700">{result}</p>
                  <p className="mt-4 text-sm text-slate-500">
                    Next step: Join our WhatsApp group and talk to seniors from your target colleges.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
