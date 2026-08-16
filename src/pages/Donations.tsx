import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const AMOUNTS = [25, 50, 100, 250, 500];

const FEATURES = [
  { num: '01', title: 'Zero Platform Fee Collection', desc: 'Ensure 100% of donor contributions flow directly to your non-profit bank account via Stripe Giving.' },
  { num: '02', title: 'Automated Tax Deduction Receipts', desc: 'Instantly issue compliant 501(c)(3) or registered charity tax-deductible PDF receipts via automated email.' },
  { num: '03', title: 'Recurring Supporter Subscriptions', desc: 'Convert one-time donors into sustaining monthly patrons with automated card updates and thank-you notes.' },
  { num: '04', title: 'Live Campaign Goal Meters', desc: 'Embed real-time progress bars, donor leaderboard feeds, and milestone alerts into your campaign landing pages.' },
];

export default function Donations() {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('monthly');
  const [raised, setRaised] = useState(64500);
  const goal = 100000;

  const handleDonate = () => {
    setRaised(r => r + selectedAmount);
  };

  const pct = Math.min(100, (raised / goal) * 100);

  return (
    <div className="w-full bg-transparent text-primary font-sans min-h-screen overflow-x-hidden">
      <SEO 
        title="Donations & Fundraising Architecture — GRAVIT" 
        description="High-converting non-profit fundraising portals, zero-fee collection, and automated donor management." 
        path="/donations" 
      />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex flex-col justify-between px-6 md:px-12 pt-36 pb-16 w-full max-w-[1800px] mx-auto">
        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-secondary"
          >
            <span>Impact Infrastructure</span>
            <span className="text-border">•</span>
            <span className="text-accent">FUNDRAISING PIPELINE</span>
          </motion.div>

          <div className="overflow-hidden">
            {['POWER YOUR', 'MISSION.', 'ZERO-FEE.', 'SUSTAINED IMPACT.'].map((line, i) => (
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
            We build transparent, trust-first donation platforms for non-profits, foundations, and public interest initiatives that maximize donor conversion.
          </p>
          <div className="md:col-span-5 flex md:justify-end">
            <Link to="/contact" className="bg-primary text-background px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors">
              Deploy Campaign Platform →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* INTERACTIVE DONATION ENGINE SIMULATOR */}
      <section className="px-6 md:px-12 py-16 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="flex items-center justify-between border-b border-border pb-6 mb-8 font-mono text-xs uppercase tracking-wider text-secondary">
          <span>Interactive Fundraising Campaign Demo</span>
          <span className="text-accent">GOAL: ${goal.toLocaleString()}</span>
        </div>

        <div className="border border-border bg-surface p-8 md:p-12">
          {/* Progress Meter */}
          <div className="mb-10">
            <div className="flex justify-between items-end mb-3 font-mono">
              <span className="text-xs text-secondary uppercase">CAMPAIGN PROGRESS:</span>
              <span className="text-xl font-bold text-accent">${raised.toLocaleString()} <span className="text-xs text-secondary font-normal">({pct.toFixed(1)}%)</span></span>
            </div>
            <div className="w-full h-3 bg-border rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-accent transition-all duration-500"
                animate={{ width: `${pct}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-t border-border pt-8">
            {/* Frequency */}
            <div className="md:col-span-4 flex flex-col gap-2">
              <span className="text-xs font-mono text-secondary uppercase">FREQUENCY:</span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setFrequency('monthly')}
                  className={`py-3 font-mono text-xs uppercase border transition-colors ${
                    frequency === 'monthly' ? 'bg-primary text-background font-bold border-primary' : 'border-border text-secondary'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setFrequency('once')}
                  className={`py-3 font-mono text-xs uppercase border transition-colors ${
                    frequency === 'once' ? 'bg-primary text-background font-bold border-primary' : 'border-border text-secondary'
                  }`}
                >
                  One-Time
                </button>
              </div>
            </div>

            {/* Amounts */}
            <div className="md:col-span-5 flex flex-col gap-2">
              <span className="text-xs font-mono text-secondary uppercase">CONTRIBUTION AMOUNT:</span>
              <div className="flex gap-2">
                {AMOUNTS.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setSelectedAmount(amt)}
                    className={`flex-1 py-3 font-mono text-xs uppercase border transition-colors ${
                      selectedAmount === amt ? 'border-accent bg-accent/10 text-accent font-bold' : 'border-border text-secondary'
                    }`}
                  >
                    ${amt}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <div className="md:col-span-3 flex flex-col gap-2">
              <span className="text-xs font-mono text-secondary uppercase">ACTION:</span>
              <button
                onClick={handleDonate}
                className="w-full bg-primary text-background py-3 text-xs font-mono uppercase tracking-widest hover:bg-accent transition-colors"
              >
                Donate ${selectedAmount} {frequency === 'monthly' ? '/ mo' : ''}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="px-6 md:px-12 py-32 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="flex items-end justify-between border-b border-border pb-12 mb-0">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">DONATION ENGINE</h2>
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
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">AMPLIFY YOUR<br />ORGANIZATION'S REACH</h2>
        </div>
        <Link to="/contact" className="bg-primary text-background px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors flex-shrink-0">
          Start Campaign Build →
        </Link>
      </section>
    </div>
  );
}
