import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Users, Lightbulb } from 'lucide-react';

const frameworkSteps = [
  {
    number: '1',
    title: 'Understand Your Reality',
    description: 'Map your profile: rank, stream, location, preferences. No assumptions.',
    icon: Lightbulb,
    color: '#FF6B2B',
  },
  {
    number: '2',
    title: 'Compare Real Outcomes',
    description: 'See placement rates, cut-offs, peer groups across 100+ colleges',
    icon: TrendingUp,
    color: '#FFC900',
  },
  {
    number: '3',
    title: 'Choose Best Path',
    description: 'Get personalized recommendation backed by data, not pressure',
    icon: CheckCircle2,
    color: '#00D084',
  },
  {
    number: '4',
    title: 'Validate with Seniors',
    description: 'Talk to real students from your chosen college & branch',
    icon: Users,
    color: '#0066FF',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function AtyantFramework() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="bg-white px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-block rounded-full bg-[#FF6B2B]/10 px-4 py-2">
            <span className="text-sm font-semibold text-[#FF6B2B]">OUR SYSTEM</span>
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0B0F2E] sm:text-4xl">
            Atyant Decision System™
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            A proven 4-step framework designed by experts who've guided 12,000+ students
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {frameworkSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -12 }}
                className="group rounded-[1.7rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
              >
                <div
                  className="inline-flex h-14 w-14 items-center justify-center rounded-2xl text-2xl font-bold"
                  style={{
                    backgroundColor: `${step.color}20`,
                    color: step.color,
                  }}
                >
                  <Icon className="h-7 w-7" />
                </div>

                <div
                  className="mt-4 inline-block rounded-lg px-3 py-1 text-sm font-bold"
                  style={{
                    backgroundColor: `${step.color}20`,
                    color: step.color,
                  }}
                >
                  Step {step.number}
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#0B0F2E]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>

                {idx < frameworkSteps.length - 1 && (
                  <div className="mt-8 hidden text-center lg:block">
                    <div className="text-3xl text-slate-300">↓</div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-16 rounded-[2rem] border border-slate-200 bg-gradient-to-r from-[#FF6B2B]/10 to-[#FF6B2B]/5 p-8 text-center md:p-12"
        >
          <h3 className="text-2xl font-bold text-[#0B0F2E]">
            Why This System Works
          </h3>
          <p className="mt-4 text-base leading-8 text-slate-600">
            We eliminate guesswork by combining <span className="font-semibold">real data</span>, <span className="font-semibold">senior insights</span>, and <span className="font-semibold">personalized guidance</span>. The result? Students choose colleges they actually love.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div>
              <div className="text-3xl font-black text-[#FF6B2B]">12,000+</div>
              <p className="mt-2 text-sm text-slate-600">Students Guided</p>
            </div>
            <div>
              <div className="text-3xl font-black text-[#FF6B2B]">100+</div>
              <p className="mt-2 text-sm text-slate-600">Colleges Covered</p>
            </div>
            <div>
              <div className="text-3xl font-black text-[#FF6B2B]">4.9⭐</div>
              <p className="mt-2 text-sm text-slate-600">Student Rating</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
