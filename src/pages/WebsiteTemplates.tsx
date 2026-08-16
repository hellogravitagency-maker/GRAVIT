import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const TEMPLATE_CATEGORIES = [
  { id: 'portfolio', label: 'Portfolio', count: 24, accent: '#0A0A0A' },
  { id: 'saas', label: 'SaaS / Product', count: 18, accent: '#0A0A0A' },
  { id: 'editorial', label: 'Editorial / Blog', count: 31, accent: '#0A0A0A' },
  { id: 'ecommerce', label: 'Ecommerce', count: 15, accent: '#0A0A0A' },
  { id: 'agency', label: 'Agency / Studio', count: 22, accent: '#0A0A0A' },
  { id: 'event', label: 'Event / Launch', count: 9, accent: '#0A0A0A' },
];

const TEMPLATES = [
  { id: 'arc', name: 'ARC', category: 'portfolio', tag: 'Minimalist · Light' },
  { id: 'stratum', name: 'STRATUM', category: 'saas', tag: 'Bold · Dark' },
  { id: 'folio', name: 'FOLIO', category: 'portfolio', tag: 'Editorial · Serif' },
  { id: 'motion', name: 'MOTION', category: 'agency', tag: 'Kinetic · Dark' },
  { id: 'edition', name: 'EDITION', category: 'editorial', tag: 'Newspaper · Classic' },
  { id: 'launch', name: 'LAUNCH', category: 'event', tag: 'Countdown · Minimal' },
  { id: 'shelf', name: 'SHELF', category: 'ecommerce', tag: 'Product · Clean' },
  { id: 'signal', name: 'SIGNAL', category: 'saas', tag: 'Dashboard · Technical' },
  { id: 'prose', name: 'PROSE', category: 'editorial', tag: 'Long-form · Warm' },
];

export default function WebsiteTemplates() {
  const [active, setActive] = useState<string>('all');
  const filtered = active === 'all' ? TEMPLATES : TEMPLATES.filter(t => t.category === active);

  return (
    <div className="w-full bg-transparent text-primary font-sans min-h-screen overflow-x-hidden">
      <SEO title="Website Templates — GRAVIT" description="Production-ready, designer-made templates engineered for real businesses." path="/website-templates" />

      {/* HERO */}
      <section className="pt-40 pb-0 px-6 md:px-12 w-full max-w-[1800px] mx-auto">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,10vw,12rem)] font-bold tracking-tighter uppercase leading-[0.82]"
          >
            TEMPLATES
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-t border-border pt-8 mt-8"
        >
          <p className="text-xl text-secondary leading-relaxed max-w-xl">
            Premium starting points built to perform. Every template ships with responsive layouts,
            structured content architecture, and sub-second load times.
          </p>
          <span className="text-xs font-mono uppercase tracking-widest text-secondary flex-shrink-0">
            {TEMPLATES.length} Templates Available
          </span>
        </motion.div>
      </section>

      {/* FILTER TABS */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="px-6 md:px-12 w-full max-w-[1800px] mx-auto pt-16"
      >
        <div className="flex flex-wrap gap-2 border-b border-border pb-8">
          <button
            onClick={() => setActive('all')}
            className={`px-5 py-2 text-xs font-mono uppercase tracking-widest transition-colors border ${
              active === 'all' ? 'bg-primary text-background border-primary' : 'border-border text-secondary hover:border-primary hover:text-primary'
            }`}
          >
            All ({TEMPLATES.length})
          </button>
          {TEMPLATE_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2 text-xs font-mono uppercase tracking-widest transition-colors border ${
                active === cat.id ? 'bg-primary text-background border-primary' : 'border-border text-secondary hover:border-primary hover:text-primary'
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>
      </motion.section>

      {/* TEMPLATE GRID */}
      <section className="px-6 md:px-12 w-full max-w-[1800px] mx-auto py-12">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px border border-border">
          <AnimatePresence mode="popLayout">
            {filtered.map((tpl, i) => (
              <motion.div
                key={tpl.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link to="/contact" className="group flex flex-col bg-background hover:bg-primary/[0.025] transition-colors border-b md:border-b-0 border-border">
                  {/* Template preview — typographic placeholder */}
                  <div className="w-full aspect-[4/3] bg-surface border-b border-border p-8 flex flex-col justify-between relative overflow-hidden">
                    {/* Simulated layout skeleton */}
                    <div className="flex flex-col gap-3">
                      <div className="h-px w-full bg-border" />
                      <div className="h-8 w-2/3 bg-primary/10" />
                      <div className="h-3 w-1/2 bg-primary/5" />
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-auto">
                      <div className="aspect-square bg-primary/5 border border-border" />
                      <div className="aspect-square bg-primary/5 border border-border" />
                      <div className="aspect-square bg-primary/5 border border-border" />
                    </div>
                    <div className="absolute inset-0 bg-primary/[0.04] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-xs font-mono uppercase tracking-widest border border-primary px-4 py-2 text-primary bg-background">
                        Preview →
                      </span>
                    </div>
                  </div>
                  {/* Meta */}
                  <div className="p-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight uppercase group-hover:text-accent transition-colors">{tpl.name}</h3>
                      <p className="text-xs font-mono text-secondary mt-1">{tpl.tag}</p>
                    </div>
                    <span className="text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">→</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="border-t border-border px-6 md:px-12 py-24 w-full max-w-[1800px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-[0.9]">NEED SOMETHING CUSTOM?</h2>
          <p className="text-secondary mt-4">We build fully bespoke systems when templates aren't enough.</p>
        </div>
        <Link to="/contact" className="bg-primary text-background px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors flex-shrink-0">
          Brief Us →
        </Link>
      </section>
    </div>
  );
}
