import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const FEATURES = [
  { num: '01', title: 'Global Multi-Party Payouts', desc: 'Split revenue across creators, partners, or affiliates automatically at the transaction moment.' },
  { num: '02', title: 'Embedded Treasury Wallets', desc: 'Hold multi-currency balances in virtual wallets with instant wire, SEPA, and ACH payout capabilities.' },
  { num: '03', title: 'Automated 1099 & Tax Withholding', desc: 'Collect W-9/W-8BEN forms automatically and calculate localized tax withholdings at payout time.' },
  { num: '04', title: 'Real-Time FX Hedging & Routing', desc: 'Route cross-border transactions through local acquiring banks to minimize FX conversion spreads.' },
];

export default function FinancialSolutions() {
  const [partnerSplit, setPartnerSplit] = useState(80);
  const totalVolume = 50000;

  const partnerPayout = (totalVolume * partnerSplit) / 100;
  const platformTake = (totalVolume * (100 - partnerSplit)) / 100;

  return (
    <div className="w-full bg-transparent text-primary font-sans min-h-screen overflow-x-hidden">
      <SEO 
        title="Financial Solutions & Payout Systems — GRAVIT" 
        description="Global payout routing, multi-currency treasury, and automated revenue splits." 
        path="/financial-solutions" 
      />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex flex-col justify-between px-6 md:px-12 pt-36 pb-16 w-full max-w-[1800px] mx-auto">
        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-secondary"
          >
            <span>Treasury Architecture</span>
            <span className="text-border">•</span>
            <span className="text-accent">FINANCIAL ENGINE</span>
          </motion.div>

          <div className="overflow-hidden">
            {['PROGRAMMABLE', 'MONEY FLOWS.', 'AUTOMATED', 'SETTLEMENTS.'].map((line, i) => (
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
            Engineer complex money flows into your software platform. Automate vendor splits, global affiliate payouts, and multi-currency balance management.
          </p>
          <div className="md:col-span-5 flex md:justify-end">
            <Link to="/contact" className="bg-primary text-background px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors">
              Design Financial Pipeline →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* INTERACTIVE PAYOUT SPLITTER SIMULATOR */}
      <section className="px-6 md:px-12 py-16 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="flex items-center justify-between border-b border-border pb-6 mb-8 font-mono text-xs uppercase tracking-wider text-secondary">
          <span>Programmable Revenue Splitter Simulator</span>
          <span className="text-accent">TRANSACTION VOLUME: ${totalVolume.toLocaleString()}</span>
        </div>

        <div className="border border-border bg-surface p-8 md:p-12 font-mono">
          <div className="mb-8">
            <div className="flex justify-between items-center text-xs mb-3">
              <span className="text-secondary uppercase">PARTNER / VENDOR SHARE: {partnerSplit}%</span>
              <span className="text-secondary uppercase">PLATFORM FEE: {100 - partnerSplit}%</span>
            </div>
            <input 
              type="range" 
              min="50" 
              max="95" 
              value={partnerSplit} 
              onChange={(e) => setPartnerSplit(parseInt(e.target.value))}
              className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-accent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border">
            <div className="p-6 border border-border bg-background">
              <span className="text-xs text-secondary block mb-1">AUTOMATED VENDOR PAYOUT ({partnerSplit}%):</span>
              <span className="text-3xl font-bold text-accent">${partnerPayout.toLocaleString()}</span>
              <span className="text-[10px] text-secondary block mt-2">→ Dispatched via instant SEPA / ACH rail</span>
            </div>

            <div className="p-6 border border-border bg-background">
              <span className="text-xs text-secondary block mb-1">PLATFORM TREASURY NET ({100 - partnerSplit}%):</span>
              <span className="text-3xl font-bold text-primary">${platformTake.toLocaleString()}</span>
              <span className="text-[10px] text-secondary block mt-2">→ Retained in primary USD wallet</span>
            </div>
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="px-6 md:px-12 py-32 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="flex items-end justify-between border-b border-border pb-12 mb-0">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">FINANCIAL ENGINE</h2>
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
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">SCALE YOUR<br />PAYOUT INFRASTRUCTURE</h2>
        </div>
        <Link to="/contact" className="bg-primary text-background px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors flex-shrink-0">
          Consult Fintech Engineers →
        </Link>
      </section>
    </div>
  );
}
