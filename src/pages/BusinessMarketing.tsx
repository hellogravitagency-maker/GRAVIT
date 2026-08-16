import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const FUNNEL_STAGES = [
  { 
    id: 'acquire', 
    name: '1. ACQUISITION', 
    metric: '+340% Traffic Surge', 
    desc: 'Technical SEO architecture, programmatic landing pages, and viral referral loops that lower customer acquisition costs.' 
  },
  { 
    id: 'engage', 
    name: '2. ENGAGEMENT', 
    metric: '4.8m Avg. Session', 
    desc: 'Interactive product previews, high-contrast editorial design, and personalized content feeds that capture deep attention.' 
  },
  { 
    id: 'convert', 
    name: '3. CONVERSION', 
    metric: '4.2% Conv. Rate', 
    desc: 'Frictionless checkout paths, one-click payment wallets, and dynamic urgency triggers that turn visitors into paying clients.' 
  },
  { 
    id: 'retain', 
    name: '4. RETENTION', 
    metric: '78% Repeat Rate', 
    desc: 'Automated lifecycle emails, win-back drip campaigns, and subscriber loyalty perks that maximize customer lifetime value.' 
  },
];

const FEATURES = [
  { num: '01', title: 'Automated Lifecycle Sequences', desc: 'Trigger event-driven email & SMS flows based on real user actions: abandoned carts, onboarding steps, or feature usage.' },
  { num: '02', title: 'Programmatic SEO Engine', desc: 'Generate thousands of high-ranking, fast-loading landing pages targeted at long-tail search intent.' },
  { num: '03', title: 'Built-in Referral & Affiliate Systems', desc: 'Equip your customers with personal referral links and track multi-touch commission payouts automatically.' },
  { num: '04', title: 'Real-Time Attribution Analytics', desc: 'Know precisely which campaign, channel, or piece of content generated every single dollar of revenue.' },
];

export default function BusinessMarketing() {
  const [activeStage, setActiveStage] = useState(FUNNEL_STAGES[0]);

  return (
    <div className="w-full bg-transparent text-primary font-sans min-h-screen overflow-x-hidden">
      <SEO 
        title="Marketing Systems & Growth Engines — GRAVIT" 
        description="Automated lifecycle marketing, programmatic acquisition, and high-conversion growth engines." 
        path="/business-marketing" 
      />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex flex-col justify-between px-6 md:px-12 pt-36 pb-16 w-full max-w-[1800px] mx-auto">
        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-secondary"
          >
            <span>Growth Architecture</span>
            <span className="text-border">•</span>
            <span className="text-accent">ACQUISITION & RETENTION</span>
          </motion.div>

          <div className="overflow-hidden">
            {['ENGINEERED', 'GROWTH ENGINES.', 'AUTOMATED', 'ACQUISITION.'].map((line, i) => (
              <div key={line} className="overflow-hidden">
                <motion.div
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.85, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[clamp(2.8rem,8.5vw,10.5rem)] font-bold tracking-tighter uppercase leading-[0.85]"
                >
                  {line}
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="border-t border-border pt-10 mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-end"
        >
          <p className="md:col-span-7 text-xl text-secondary leading-relaxed max-w-2xl">
            We build automated growth systems into your software platform — replacing manual ad spend relying on organic SEO engines, behavioral email loops, and referral networks.
          </p>
          <div className="md:col-span-5 flex md:justify-end">
            <Link to="/contact" className="bg-primary text-background px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors">
              Build Growth Engine →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* INTERACTIVE FUNNEL SIMULATOR */}
      <section className="px-6 md:px-12 py-16 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="flex items-center justify-between border-b border-border pb-6 mb-8 font-mono text-xs uppercase tracking-wider text-secondary">
          <span>Interactive Growth Funnel Visualizer</span>
          <span className="text-accent">ACTIVE STAGE: {activeStage.name}</span>
        </div>

        {/* Funnel Navigation Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
          {FUNNEL_STAGES.map((stage) => (
            <button
              key={stage.id}
              onClick={() => setActiveStage(stage)}
              className={`p-4 font-mono text-xs text-left uppercase border transition-colors ${
                activeStage.id === stage.id
                  ? 'bg-primary text-background border-primary font-bold'
                  : 'border-border text-secondary hover:border-primary'
              }`}
            >
              {stage.name}
            </button>
          ))}
        </div>

        {/* Stage Content Card */}
        <div className="border border-border bg-surface p-8 md:p-12">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-3xl font-bold uppercase tracking-tight">{activeStage.name}</h3>
            <span className="px-3 py-1 bg-accent/10 border border-accent/20 text-accent font-mono text-xs font-bold">
              BENCHMARK: {activeStage.metric}
            </span>
          </div>
          <p className="text-secondary text-lg leading-relaxed max-w-3xl">
            {activeStage.desc}
          </p>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="px-6 md:px-12 py-32 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="flex items-end justify-between border-b border-border pb-12 mb-0">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">MARKETING ENGINE</h2>
          <span className="font-mono text-xs uppercase tracking-widest text-secondary hidden md:block">04 Features</span>
        </div>
        {FEATURES.map((feat) => (
          <div key={feat.num} className="grid grid-cols-12 gap-6 items-start border-b border-border py-12 group hover:bg-primary/[0.02] transition-colors">
            <span className="col-span-1 text-xs font-mono text-secondary pt-1">{feat.num}</span>
            <h3 className="col-span-4 text-2xl font-bold tracking-tight uppercase group-hover:text-accent transition-colors">{feat.title}</h3>
            <p className="col-span-7 text-secondary text-base leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="border-t border-border px-6 md:px-12 py-32 w-full max-w-[1800px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">SCALE YOUR<br />CUSTOMER ACQUISITION</h2>
        </div>
        <Link to="/contact" className="bg-primary text-background px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors flex-shrink-0">
          Consult Growth Engineers →
        </Link>
      </section>
    </div>
  );
}
