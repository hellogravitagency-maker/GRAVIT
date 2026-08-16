import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const CURRENCIES = [
  { code: 'USD', symbol: '$', rate: 1.0, flag: '🇺🇸' },
  { code: 'EUR', symbol: '€', rate: 0.92, flag: '🇪🇺' },
  { code: 'GBP', symbol: '£', rate: 0.79, flag: '🇬🇧' },
  { code: 'JPY', symbol: '¥', rate: 155.4, flag: '🇯🇵' },
];

const FEATURES = [
  { num: '01', title: 'Sub-Second Checkout', desc: 'Pre-fetched payment tokens and single-click checkout flows that eliminate friction at the moment of intent.' },
  { num: '02', title: 'Global Multi-Currency', desc: 'Automatic localized currency display and localized payment method routing (Apple Pay, iDEAL, Klarna, SEPA).' },
  { num: '03', title: 'Physical & Digital Products', desc: 'Seamlessly sell physical goods with automatic shipping calculation alongside instant digital downloads and license keys.' },
  { num: '04', title: 'Inventory Sync & Order Routing', desc: 'Real-time stock reservation and automated dispatch webhooks connecting directly to your 3PL or warehouse.' },
];

const DEMO_PRODUCTS = [
  { id: 'p1', name: 'Acoustic Desk Lamp', basePrice: 280, category: 'Hardware', stock: '12 left' },
  { id: 'p2', name: 'Typography Poster Vol. 4', basePrice: 95, category: 'Print', stock: 'In Stock' },
  { id: 'p3', name: 'Studio Design Tokens', basePrice: 149, category: 'Digital', stock: 'Instant Download' },
];

export default function OnlineStores() {
  const [selectedCurrency, setSelectedCurrency] = useState(CURRENCIES[0]);
  const [cartCount, setCartCount] = useState(0);

  const formatPrice = (base: number) => {
    const val = base * selectedCurrency.rate;
    return `${selectedCurrency.symbol}${selectedCurrency.code === 'JPY' ? Math.round(val) : val.toFixed(2)}`;
  };

  return (
    <div className="w-full bg-transparent text-primary font-sans min-h-screen overflow-x-hidden">
      <SEO 
        title="Online Stores & Digital Commerce — GRAVIT" 
        description="High-velocity digital storefronts engineered for sub-second checkouts and global scale." 
        path="/online-stores" 
      />

      {/* HERO */}
      <section className="relative min-h-[90vh] flex flex-col justify-between px-6 md:px-12 pt-36 pb-16 w-full max-w-[1800px] mx-auto">
        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="flex items-center gap-3"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-secondary">Commerce Architecture</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          </motion.div>

          <div className="overflow-hidden">
            {['HIGH-VELOCITY', 'STOREFRONTS.', 'ENGINEERED', 'FOR SCALE.'].map((line, i) => (
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

        {/* Currency & Live Demo Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="border-t border-border pt-10 mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-end"
        >
          <div className="md:col-span-6">
            <p className="text-xl text-secondary leading-relaxed max-w-xl">
              We construct custom digital commerce platforms that combine extreme aesthetic precision with zero-latency checkout pipelines.
            </p>
          </div>
          <div className="md:col-span-6 flex flex-col md:items-end gap-4">
            <div className="flex items-center gap-2 border border-border p-1 bg-surface">
              <span className="text-xs font-mono uppercase tracking-wider text-secondary px-3">Live Currency:</span>
              {CURRENCIES.map((curr) => (
                <button
                  key={curr.code}
                  onClick={() => setSelectedCurrency(curr)}
                  className={`px-3 py-1.5 text-xs font-mono transition-colors ${
                    selectedCurrency.code === curr.code
                      ? 'bg-primary text-background font-bold'
                      : 'text-secondary hover:text-primary'
                  }`}
                >
                  {curr.flag} {curr.code}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* INTERACTIVE STORE PREVIEW */}
      <section className="px-6 md:px-12 py-16 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="flex items-center justify-between border-b border-border pb-8 mb-12">
          <h2 className="text-2xl font-bold uppercase tracking-tight font-mono">Storefront Interactive Demo</h2>
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-secondary">Bag ({cartCount})</span>
            {cartCount > 0 && (
              <motion.button
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                onClick={() => setCartCount(0)}
                className="text-xs font-mono text-accent hover:underline"
              >
                Clear
              </motion.button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DEMO_PRODUCTS.map((prod) => (
            <div key={prod.id} className="border border-border p-8 bg-background flex flex-col justify-between group hover:border-primary transition-colors">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-secondary mb-6">
                  <span>{prod.category}</span>
                  <span className="text-accent">{prod.stock}</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight uppercase mb-2 group-hover:text-accent transition-colors">{prod.name}</h3>
                <div className="text-3xl font-bold font-mono tracking-tight my-6">
                  {formatPrice(prod.basePrice)}
                </div>
              </div>
              <button
                onClick={() => setCartCount(c => c + 1)}
                className="w-full bg-primary text-background py-3 text-xs font-mono uppercase tracking-widest hover:bg-accent transition-colors flex items-center justify-center gap-2"
              >
                + Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="px-6 md:px-12 py-32 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="flex items-end justify-between border-b border-border pb-12 mb-0">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">COMMERCE ENGINE</h2>
          <span className="font-mono text-xs uppercase tracking-widest text-secondary hidden md:block">04 Pillars</span>
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
          <span className="text-xs font-mono uppercase tracking-widest text-secondary block mb-4">Start Selling</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">BUILD YOUR<br />ONLINE STORE</h2>
        </div>
        <Link to="/contact" className="bg-primary text-background px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors flex-shrink-0">
          Commission Storefront →
        </Link>
      </section>
    </div>
  );
}
