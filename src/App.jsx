import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PricingCard from './components/PricingCard';
import TestimonialCard from './components/TestimonialCard';
import FAQItem from './components/FAQItem';
import Footer from './components/Footer';
import {
  faqItems,
  freeGroupBullets,
  howItWorksSteps,
  painPoints,
  pillars,
  pricingPlans,
  testimonials,
} from './data/siteContent';

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

function PainSection() {
  return (
    <motion.section id="pain" className="bg-[#f6f7fb] px-4 py-20 sm:px-6 lg:px-8" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF6B2B]">Why Students Regret Their Choice</div>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0B0F2E] sm:text-4xl">The wrong choice doesn’t feel wrong on day one.</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">It usually feels confusing, rushed, and “good enough” until the reality of placements, branch, crowd, or location hits later.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {painPoints.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} whileHover={{ y: -8, scale: 1.01 }} className="group rounded-[1.7rem] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF6B2B]/10 text-[#FF6B2B] transition group-hover:bg-[#FF6B2B] group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#0B0F2E]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

function SolutionSection() {
  return (
    <motion.section id="how-it-works" className="bg-[#0B0F2E] px-4 py-20 text-white sm:px-6 lg:px-8" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FFB38E]">Introducing Atyant Decision System</div>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Not mentorship. A sharper way to decide.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div key={pillar.title} whileHover={{ y: -8 }} className="rounded-[1.7rem] border border-white/10 bg-white/6 p-7 shadow-2xl shadow-black/20 backdrop-blur-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF6B2B]/15 text-[#FFB38E]">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-2xl font-bold">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/72">{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

function PricingSection() {
  return (
    <motion.section id="pricing" className="bg-[#f6f7fb] px-4 py-20 sm:px-6 lg:px-8" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF6B2B]">Pricing</div>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0B0F2E] sm:text-4xl">Pick the clarity you actually need.</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">Simple plans. Easy to understand. Built to help students and parents make the right decision faster.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function StoriesSection() {
  return (
    <motion.section id="stories" className="bg-white px-4 py-20 sm:px-6 lg:px-8" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF6B2B]">Trust</div>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0B0F2E] sm:text-4xl">Students like you found clarity.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function HowItWorksSection() {
  return (
    <motion.section className="bg-[#0B0F2E] px-4 py-20 text-white sm:px-6 lg:px-8" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FFB38E]">How it works</div>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Three steps to a better decision.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {howItWorksSteps.map((item) => (
            <motion.div key={item.step} whileHover={{ y: -8 }} className="rounded-[1.7rem] border border-white/10 bg-white/6 p-7 backdrop-blur-xl">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF6B2B] text-lg font-black text-white shadow-lg shadow-[#FF6B2B]/25">
                {item.step}
              </div>
              <h3 className="mt-5 text-2xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/72">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function FreeGroupSection() {
  return (
    <motion.section className="bg-[#f6f7fb] px-4 py-20 sm:px-6 lg:px-8" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0B0F2E,#12193d_55%,#1b2459)] px-6 py-8 shadow-[0_30px_90px_rgba(11,15,46,0.18)] sm:px-10 sm:py-10 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FFB38E]">Lead magnet</div>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">Free WhatsApp Group for 2026 Aspirants</h2>
            <p className="mt-4 text-base leading-8 text-white/72">College updates, cutoff alerts, mistakes to avoid, and senior Q&A in one place.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {freeGroupBullets.map((bullet) => (
                <span key={bullet} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/78">
                  {bullet}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#FF6B2B] px-6 py-4 text-sm font-semibold text-white shadow-2xl shadow-[#FF6B2B]/25 transition hover:scale-[1.03] hover:bg-[#ff7a42]">
              Join Free Group
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <motion.section id="faq" className="bg-white px-4 py-20 sm:px-6 lg:px-8" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF6B2B]">FAQ</div>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0B0F2E] sm:text-4xl">Questions students and parents usually ask.</h2>
        </div>
        <div className="mt-10 grid gap-4 lg:max-w-4xl">
          {faqItems.map((item, index) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              open={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="bg-[#0B0F2E] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,107,43,0.16),rgba(255,255,255,0.04))] p-8 text-center shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:p-12">
        <h2 className="text-3xl font-black tracking-tight sm:text-5xl">One Wrong Decision Costs 4 Years.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/74 sm:text-lg">One right decision changes everything. Get clarity before you commit to a college or branch that does not fit you.</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#pricing" className="inline-flex items-center justify-center rounded-full bg-[#FF6B2B] px-8 py-4 text-sm font-semibold text-white shadow-2xl shadow-[#FF6B2B]/25 transition hover:scale-[1.03] hover:bg-[#ff7a42]">
            Get Clarity Now
          </a>
          <a href="#faq" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition hover:scale-[1.03] hover:bg-white/10">
            Read FAQ
          </a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <PainSection />
        <SolutionSection />
        <PricingSection />
        <StoriesSection />
        <HowItWorksSection />
        <FreeGroupSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
