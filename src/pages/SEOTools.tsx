import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const METRICS = [
  { name: 'FIRST CONTENTFUL PAINT', val: '0.4s', status: 'GOOD', pct: 98 },
  { name: 'LARGEST CONTENTFUL PAINT', val: '0.7s', status: 'GOOD', pct: 99 },
  { name: 'CUMULATIVE LAYOUT SHIFT', val: '0.00', status: 'PERFECT', pct: 100 },
  { name: 'INTERACTION TO NEXT PAINT', val: '28ms', status: 'GOOD', pct: 96 },
];

const FEATURES = [
  { num: '01', title: 'Programmatic Page Generation', desc: 'Generate thousands of unique, search-intent targeted pages with dynamic content rendering and zero duplicate content penalties.' },
  { num: '02', title: 'Schema.org JSON-LD Infrastructure', desc: 'Automatically embed rich snippet markup for Organizations, Products, FAQs, Articles, and Local Businesses.' },
  { num: '03', title: 'Sub-100ms Server Response Times', desc: 'Host on global edge networks (Cloudflare Workers, Vercel Edge) to guarantee Google bot crawl priority.' },
  { num: '04', title: 'Automated Internal Linking Loops', desc: 'Dynamically interlink related content hubs based on semantic topic cluster mapping.' },
];

export default function SEOTools() {
  const [scanning, setScanning] = useState(false);
  const [scanned, setScanned] = useState(false);

  const triggerScan = () => {
    setScanning(true);
    setScanned(false);
    setTimeout(() => {
      setScanning(false);
      setScanned(true);
    }, 1200);
  };

  return (
    <div className="w-full bg-transparent text-primary font-sans min-h-screen overflow-x-hidden">
      <SEO 
        title="Technical SEO Tools & Architecture — GRAVIT" 
        description="Technical SEO engines, Core Web Vitals optimization, and programmatic SEO infrastructure." 
        path="/seo-tools" 
      />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex flex-col justify-between px-6 md:px-12 pt-36 pb-16 w-full max-w-[1800px] mx-auto">
        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-secondary"
          >
            <span>Search Radar</span>
            <span className="text-border">•</span>
            <span className="text-accent">SEO ARCHITECTURE</span>
          </motion.div>

          <div className="overflow-hidden">
            {['TECHNICAL SEO.', 'RANK #1.', 'DOMINATE SEARCH', 'INTENT.'].map((line, i) => (
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
            We build technical SEO directly into your codebase. Guaranteed 100/100 Lighthouse scores, structured schema graphs, and programmatic page architectures.
          </p>
          <div className="md:col-span-5 flex md:justify-end">
            <Link to="/contact" className="bg-primary text-background px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors">
              Audit Your Technical SEO →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* INTERACTIVE SEO AUDIT SIMULATOR */}
      <section className="px-6 md:px-12 py-16 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="flex items-center justify-between border-b border-border pb-6 mb-8 font-mono text-xs uppercase tracking-wider text-secondary">
          <span>Core Web Vitals & Technical SEO Diagnostic Simulator</span>
          <span className="text-accent">LIGHTHOUSE SCORE: 100/100</span>
        </div>

        <div className="border border-border bg-surface p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {METRICS.map((m) => (
              <div key={m.name} className="p-6 border border-border bg-background">
                <span className="text-[10px] font-mono text-secondary block mb-2">{m.name}</span>
                <div className="text-3xl font-bold font-mono text-primary mb-2">{m.val}</div>
                <span className="text-[10px] font-mono text-accent font-bold uppercase border border-accent/20 px-2 py-0.5 inline-block">
                  {m.status} ({m.pct}%)
                </span>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-border flex justify-between items-center">
            {scanning ? (
              <span className="font-mono text-xs text-accent uppercase animate-pulse">Scanning site crawlability & schema graphs...</span>
            ) : scanned ? (
              <span className="font-mono text-xs text-accent uppercase">✓ Technical Audit Complete: Zero crawl errors found.</span>
            ) : (
              <span className="font-mono text-xs text-secondary uppercase">Run live diagnostic scan on sample architecture</span>
            )}

            <button
              onClick={triggerScan}
              disabled={scanning}
              className="bg-primary text-background px-6 py-2.5 text-xs font-mono uppercase tracking-widest hover:bg-accent transition-colors disabled:opacity-50"
            >
              {scanning ? 'Scanning...' : 'Run Audit Scan →'}
            </button>
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="px-6 md:px-12 py-32 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="flex items-end justify-between border-b border-border pb-12 mb-0">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">SEO ENGINE</h2>
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
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">CLAIM YOUR TOP<br />SEARCH RANKINGS</h2>
        </div>
        <Link to="/contact" className="bg-primary text-background px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors flex-shrink-0">
          Build SEO Architecture →
        </Link>
      </section>
    </div>
  );
}
