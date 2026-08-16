import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const UTILITIES = [
  { id: 'og', name: 'Live OG Card Generator', desc: 'Generate crisp 1200x630 social preview images dynamically for Twitter, LinkedIn, and Slack.' },
  { id: 'schema', name: 'Schema JSON-LD Builder', desc: 'Construct validated Schema.org structured data blocks for Organizations, FAQs, and Products.' },
  { id: 'contrast', name: 'WCAG 2.2 Contrast Matrix', desc: 'Audit text and background color pairs against WCAG AA and AAA accessibility ratios.' },
  { id: 'tokens', name: 'Design Token Exporter', desc: 'Export CSS variables, Tailwind v4 theme extensions, and Figma tokens instantly.' },
];

export default function FreeTools() {
  const [ogTitle, setOgTitle] = useState('Architecting Inevitable Systems');
  const [ogCategory, setOgCategory] = useState('SYSTEM ARCHITECTURE');

  return (
    <div className="w-full bg-transparent text-primary font-sans min-h-screen overflow-x-hidden">
      <SEO 
        title="Free Developer Tools & Utilities — GRAVIT" 
        description="Open-source tools, OG image generators, and schema builders created by GRAVIT." 
        path="/free-tools" 
      />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex flex-col justify-between px-6 md:px-12 pt-36 pb-16 w-full max-w-[1800px] mx-auto">
        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-secondary"
          >
            <span>Open Source</span>
            <span className="text-border">•</span>
            <span className="text-accent">FREE DEVELOPER UTILITIES</span>
          </motion.div>

          <div className="overflow-hidden">
            {['FREE UTILITIES', 'FOR BUILDERS.', 'OPEN SOURCE.', 'ZERO BLOAT.'].map((line, i) => (
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
            We build open-source tools to help designers and engineers ship better software. Free to use, no signup required.
          </p>
          <div className="md:col-span-5 flex md:justify-end">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-primary text-background px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors">
              Explore on GitHub →
            </a>
          </div>
        </motion.div>
      </section>

      {/* INTERACTIVE OG IMAGE GENERATOR WORKSHOP */}
      <section className="px-6 md:px-12 py-16 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="flex items-center justify-between border-b border-border pb-6 mb-8 font-mono text-xs uppercase tracking-wider text-secondary">
          <span>Live Interactive Open Graph (OG) Social Card Studio</span>
          <span className="text-accent">CANVAS: 1200 x 630 (ASPECT 1.91:1)</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-5 flex flex-col gap-4 border border-border p-6 bg-surface">
            <span className="text-xs font-mono text-secondary uppercase">CARD CUSTOMIZATION:</span>
            
            <div>
              <label className="text-xs font-mono text-secondary block mb-1">CATEGORY / TAG:</label>
              <input
                type="text"
                value={ogCategory}
                onChange={(e) => setOgCategory(e.target.value)}
                className="w-full bg-transparent border border-border px-3 py-2 text-xs font-mono text-primary focus:outline-none focus:border-accent"
              />
            </div>

            <div>
              <label className="text-xs font-mono text-secondary block mb-1">HEADLINE TITLE:</label>
              <textarea
                value={ogTitle}
                onChange={(e) => setOgTitle(e.target.value)}
                rows={3}
                className="w-full bg-transparent border border-border px-3 py-2 text-sm font-sans font-bold text-primary focus:outline-none focus:border-accent"
              />
            </div>
          </div>

          {/* Live Preview Card */}
          <div className="lg:col-span-7 border border-border bg-primary text-background p-8 md:p-12 aspect-[1.91/1] flex flex-col justify-between relative overflow-hidden select-none">
            {/* Background grid guide */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #FFF 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

            <div className="relative z-10 flex justify-between items-center">
              <span className="font-mono text-xs font-bold tracking-wider uppercase text-accent border border-accent/40 px-3 py-1 bg-accent/10">
                {ogCategory}
              </span>
              <span className="font-mono text-xs text-background/60">GRAVIT® STUDIO</span>
            </div>

            <div className="relative z-10 my-auto">
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight uppercase leading-[0.9] text-background">
                {ogTitle || 'Untitled Social Card'}
              </h3>
            </div>

            <div className="relative z-10 pt-4 border-t border-background/20 flex justify-between items-center font-mono text-xs text-background/50">
              <span>https://gravit.agency</span>
              <span>100/100 LIGHTHOUSE</span>
            </div>
          </div>
        </div>
      </section>

      {/* CORE UTILITIES GRID */}
      <section className="px-6 md:px-12 py-32 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="flex items-end justify-between border-b border-border pb-12 mb-0">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">UTILITIES MATRIX</h2>
          <span className="font-mono text-xs uppercase tracking-widest text-secondary hidden md:block">04 Tools</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px border-l border-border">
          {UTILITIES.map((u, i) => (
            <div key={u.id} className="border-r border-b border-border p-10 group hover:bg-primary/[0.02] transition-colors">
              <span className="font-mono text-xs uppercase tracking-widest text-secondary block mb-4">0{i + 1}</span>
              <h3 className="text-2xl font-bold tracking-tight uppercase mb-4 group-hover:text-accent transition-colors">{u.name}</h3>
              <p className="text-secondary leading-relaxed text-sm mb-6">{u.desc}</p>
              <span className="text-xs font-mono text-primary font-bold uppercase tracking-wider group-hover:text-accent transition-colors flex items-center gap-1">
                Launch Utility <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border px-6 md:px-12 py-32 w-full max-w-[1800px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">NEED CUSTOM UTILITIES<br />FOR YOUR TEAM?</h2>
        </div>
        <Link to="/contact" className="bg-primary text-background px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors flex-shrink-0">
          Brief Our Tooling Engineers →
        </Link>
      </section>
    </div>
  );
}
