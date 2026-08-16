import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const INITIAL_ITEMS = [
  { id: 1, desc: 'Brand Identity & Design System', qty: 1, rate: 12000 },
  { id: 2, desc: 'Next.js Frontend Engineering', qty: 1, rate: 18500 },
  { id: 3, desc: 'Headless CMS Integration', qty: 1, rate: 6500 },
];

const FEATURES = [
  { num: '01', title: 'Automated Milestone Billing', desc: 'Trigger invoices automatically upon sprint completion, contract signature, or project milestone approval.' },
  { num: '02', title: 'Instant Payment Portals', desc: 'Give clients a branded, zero-friction portal to pay via ACH, wire, or credit card with 1-click receipts.' },
  { num: '03', title: 'Automated Payment Chasing', desc: 'Polite, scheduled reminders before and after due dates that reduce average payment terms to 4.2 days.' },
  { num: '04', title: 'Multi-Currency Tax Engine', desc: 'Automatic VAT, GST, and sales tax calculation compliant with cross-border EU and US state regulations.' },
];

export default function Invoicing() {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [taxRate, setTaxRate] = useState(10);
  const [discount, setDiscount] = useState(0);

  const subtotal = items.reduce((sum, item) => sum + item.qty * item.rate, 0);
  const taxAmount = (subtotal * taxRate) / 100;
  const total = subtotal + taxAmount - discount;

  const updateRate = (id: number, newRate: number) => {
    setItems(items.map(it => it.id === id ? { ...it, rate: Math.max(0, newRate) } : it));
  };

  return (
    <div className="w-full bg-transparent text-primary font-sans min-h-screen overflow-x-hidden">
      <SEO 
        title="Invoicing & Automated Billing — GRAVIT" 
        description="Precision invoicing infrastructure for high-ticket services and recurring billing." 
        path="/invoicing" 
      />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex flex-col justify-between px-6 md:px-12 pt-36 pb-16 w-full max-w-[1800px] mx-auto">
        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-secondary"
          >
            <span>Financial Logistics</span>
            <span className="text-border">•</span>
            <span className="text-accent">LEDGER ARCHITECTURE</span>
          </motion.div>

          <div className="overflow-hidden">
            {['PRECISION', 'INVOICING.', 'GET PAID', 'ON TIME.'].map((line, i) => (
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
            Eliminate late payments and manual billing administration with automated milestone invoicing, real-time ledger tracking, and instant client settlement channels.
          </p>
          <div className="md:col-span-5 flex md:justify-end">
            <Link to="/contact" className="bg-primary text-background px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors">
              Deploy Billing Infrastructure →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* INTERACTIVE LEDGER CALCULATOR */}
      <section className="px-6 md:px-12 py-16 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="flex items-center justify-between border-b border-border pb-6 mb-8 font-mono text-xs uppercase tracking-wider text-secondary">
          <span>Live Ledger Calculator Simulator</span>
          <span className="text-accent">INV-2026-0892</span>
        </div>

        <div className="border border-border bg-surface p-8 md:p-12 font-mono">
          <div className="flex justify-between items-start mb-12 border-b border-border pb-8">
            <div>
              <span className="text-xs text-secondary block mb-1">CLIENT:</span>
              <span className="text-lg font-bold">NEXUS GLOBAL CORP</span>
            </div>
            <div className="text-right">
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase border border-accent/20">
                STATUS: DRAFT
              </span>
            </div>
          </div>

          {/* Line Items */}
          <div className="flex flex-col gap-4 mb-8">
            <div className="grid grid-cols-12 text-xs text-secondary uppercase pb-2 border-b border-border/50">
              <span className="col-span-6">Item Description</span>
              <span className="col-span-2 text-center">Qty</span>
              <span className="col-span-4 text-right">Rate ($)</span>
            </div>
            {items.map((it) => (
              <div key={it.id} className="grid grid-cols-12 items-center text-sm py-2 border-b border-border/30">
                <span className="col-span-6 font-bold">{it.desc}</span>
                <span className="col-span-2 text-center text-secondary">{it.qty}</span>
                <div className="col-span-4 text-right flex items-center justify-end gap-2">
                  <span>$</span>
                  <input 
                    type="number" 
                    value={it.rate} 
                    onChange={(e) => updateRate(it.id, parseFloat(e.target.value) || 0)}
                    className="w-28 text-right bg-background border border-border px-2 py-1 focus:outline-none focus:border-accent font-mono"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Totals Calculation */}
          <div className="flex flex-col items-end gap-2 pt-4 border-t border-border">
            <div className="flex justify-between w-64 text-xs text-secondary">
              <span>Subtotal:</span>
              <span>${subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between w-64 text-xs text-secondary items-center">
              <span>Tax Rate ({taxRate}%):</span>
              <span>${taxAmount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between w-64 text-lg font-bold text-primary pt-3 border-t border-border mt-2">
              <span>TOTAL DUE:</span>
              <span className="text-accent">${total.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="px-6 md:px-12 py-32 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="flex items-end justify-between border-b border-border pb-12 mb-0">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">BILLING SYSTEM</h2>
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
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">AUTOMATE YOUR<br />CLIENT BILLING</h2>
        </div>
        <Link to="/contact" className="bg-primary text-background px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors flex-shrink-0">
          Talk to a Billing Architect →
        </Link>
      </section>
    </div>
  );
}
