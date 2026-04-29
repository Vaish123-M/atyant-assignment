import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQItem({ question, answer, open, onToggle }) {
  return (
    <div className="rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_16px_50px_rgba(15,23,42,0.05)]">
      <button type="button" onClick={onToggle} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
        <span className="text-base font-semibold text-[#0B0F2E]">{question}</span>
        <span className="rounded-full bg-[#FF6B2B]/10 p-2 text-[#FF6B2B]">
          {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-sm leading-7 text-slate-600">{answer}</div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
