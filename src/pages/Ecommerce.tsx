import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const FEATURES = [
  { num: '01', title: 'Product Catalog Engine', desc: 'Handles 50,000+ SKUs with faceted search, real-time inventory, and intelligent cross-sell logic.' },
  { num: '02', title: 'Checkout Architecture', desc: 'Conversion-optimised, single-page checkout with guest flow, address autocomplete, and 1-click return purchase.' },
  { num: '03', title: 'Payment Infrastructure', desc: 'Stripe, Razorpay, and regional gateway integration with automatic tax calculation and compliance handling.' },
  { num: '04', title: 'Inventory & Fulfilment', desc: 'Real-time stock sync across warehouses, automatic low-stock alerts, and 3PL integration.' },
  { num: '05', title: 'Analytics & Attribution', desc: 'Revenue by channel, campaign ROI, and lifetime value — built in, not bolted on.' },
  { num: '06', title: 'Headless Commerce', desc: 'API-first architecture so your storefront can be a React app, a native mobile app, or both simultaneously.' },
];

// Ticker items
const TICKER = ['Conversion Optimised', 'Headless-Ready', 'Multi-Currency', 'Mobile-First', 'Sub-Second Checkout', 'PCI DSS Compliant', 'Global Tax Engine', 'Real-Time Inventory'];

export default function Ecommerce() {
  return (
    <div className="w-full bg-transparent text-primary font-sans min-h-screen overflow-x-hidden">
      <SEO title="Ecommerce — GRAVIT" description="Commerce infrastructure that converts. Not themes — systems." path="/ecommerce" />

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-between px-6 md:px-12 pt-36 pb-0 w-full max-w-[1800px] mx-auto">
        <div>
          {['COMMERCE', 'THAT', 'CONVERTS.'].map((word, i) => (
            <div key={word} className="overflow-hidden">
              <motion.div
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, delay: i * 0.13, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(3rem,9.5vw,11.5rem)] font-bold tracking-tighter uppercase leading-[0.87]"
              >
                {word}
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-border py-12 mt-8"
        >
          <p className="md:col-span-5 text-xl text-secondary leading-relaxed">
            We build commerce systems that scale. Not Shopify themes. Bespoke, API-first
            storefronts engineered to maximise conversion and handle real traffic.
          </p>
          <div className="md:col-span-7 md:col-start-8 flex items-start md:justify-end gap-4 flex-wrap">
            <Link to="/contact" className="inline-flex items-center bg-primary text-background px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors">
              Build My Store →
            </Link>
            <Link to="/work" className="inline-flex items-center border border-border px-8 py-4 text-sm font-bold uppercase tracking-widest hover:border-primary transition-colors">
              See Commerce Work
            </Link>
          </div>
        </motion.div>
      </section>

      {/* TICKER STRIP */}
      <div className="overflow-hidden border-y border-border py-4 my-0">
        <motion.div
          className="flex gap-0 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
        >
          {[...TICKER, ...TICKER].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6 font-mono text-xs uppercase tracking-[0.2em] text-secondary pr-6">
              {item}<span className="text-border font-light">·</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* FEATURES */}
      <section className="px-6 md:px-12 py-32 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="flex items-end justify-between border-b border-border pb-12 mb-0">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">WHAT'S INSIDE</h2>
          <span className="font-mono text-xs uppercase tracking-widest text-secondary hidden md:block">Commerce Stack</span>
        </div>
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.num}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-12 gap-6 items-start border-b border-border py-10 group hover:bg-primary/[0.02] transition-colors"
          >
            <span className="col-span-1 font-mono text-xs text-secondary">{f.num}</span>
            <h3 className="col-span-4 text-xl md:text-2xl font-bold tracking-tight uppercase group-hover:text-accent transition-colors">{f.title}</h3>
            <p className="col-span-7 text-secondary text-base leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-primary text-background px-6 md:px-12 py-32 w-full">
        <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">
            YOUR STORE.<br />ENGINEERED.
          </h2>
          <Link to="/contact" className="bg-background text-primary px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-background transition-colors flex-shrink-0">
            Start a Commerce Build →
          </Link>
        </div>
      </section>
    </div>
  );
}
