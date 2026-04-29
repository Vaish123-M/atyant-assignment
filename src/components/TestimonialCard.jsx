import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function TestimonialCard({ quote, name }) {
  return (
    <motion.div whileHover={{ y: -6 }} className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
      <div className="flex items-center gap-1 text-[#FF6B2B]">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-700">“{quote}”</p>
      <div className="mt-5 text-sm font-bold text-[#0B0F2E]">— {name}</div>
    </motion.div>
  );
}
