import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ArrowRight } from 'lucide-react';

const ARCHETYPES = [
  { id: 'swiss', name: 'SWISS', tag: 'Minimalist · Grid · Utilitarian' },
  { id: 'brutalist', name: 'BRUTALIST', tag: 'Raw · Structural · Bold' },
  { id: 'neo-tokyo', name: 'NEO-TOKYO', tag: 'Cyber · High-Contrast · Neon' },
  { id: 'retro-terminal', name: 'RETRO TERMINAL', tag: 'Monospace · Hacker · Phosphor' },
  { id: 'glassmorphism', name: 'GLASSMORPHISM', tag: 'Blur · Depth · Modern' },
  { id: 'scandinavian', name: 'SCANDINAVIAN', tag: 'Light · Natural · Airy' },
];

export default function AIBuilderLanding() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-transparent text-primary font-sans min-h-screen overflow-x-hidden">
      <SEO 
        title="VisualCraft Studio — GRAVIT" 
        description="Programmatic design systems. Real-time rendering. No compromise." 
        path="/ai-builder" 
      />

      {/* HERO SECTION */}
      <section className="pt-40 pb-24 px-6 md:px-12 w-full max-w-[1800px] mx-auto border-b border-border">
        <div className="overflow-hidden mb-12">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,8vw,10rem)] font-bold tracking-tighter uppercase leading-[0.82]"
          >
            VISUALCRAFT<br />STUDIO
          </motion.h1>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pt-8"
        >
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4">
              PROGRAMMATIC DESIGN SYSTEMS.<br />REAL-TIME RENDERING.<br />NO COMPROMISE.
            </h2>
            <p className="text-xl text-secondary leading-relaxed">
              Dynamically switch archetypes, colors, and typography instantly. 
              The most advanced web design workspace ever built for production.
            </p>
          </div>
          
          <Link 
            to="/ai-builder/studio" 
            className="group flex items-center justify-between px-8 py-5 border border-primary bg-background hover:bg-primary hover:text-background transition-colors flex-shrink-0 min-w-[280px]"
          >
            <span className="text-sm font-bold uppercase tracking-widest">LAUNCH STUDIO</span>
            <ArrowRight className="w-5 h-5 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
          </Link>
        </motion.div>
      </section>

      {/* STRUCTURAL FEATURES GRID */}
      <section className="border-b border-border w-full max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
          <div className="p-12 md:p-16 hover:bg-primary/[0.02] transition-colors">
            <span className="text-xs font-mono uppercase tracking-widest text-secondary block mb-8">01 / ARCHITECTURES</span>
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">Instant Layout<br />Transformation</h3>
            <p className="text-secondary leading-relaxed">Instantly switch between completely different website architectures—from Brutalist grids to fluid Glassmorphism interfaces—without rebuilding from scratch.</p>
          </div>
          <div className="p-12 md:p-16 hover:bg-primary/[0.02] transition-colors">
            <span className="text-xs font-mono uppercase tracking-widest text-secondary block mb-8">02 / DESIGN TOKENS</span>
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">Global Semantic<br />Control</h3>
            <p className="text-secondary leading-relaxed">Absolute precision over color scales, typography stacks, and spatial rhythms. Watch the entire interface adapt synchronously across all components.</p>
          </div>
          <div className="p-12 md:p-16 hover:bg-primary/[0.02] transition-colors">
            <span className="text-xs font-mono uppercase tracking-widest text-secondary block mb-8">03 / MODES</span>
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">Client & Builder<br />Environments</h3>
            <p className="text-secondary leading-relaxed">Seamlessly toggle between a comprehensive full-screen builder experience and a clean, isolated client presentation view.</p>
          </div>
        </div>
      </section>

      {/* TEMPLATES SHOWCASE */}
      <section className="px-6 md:px-12 w-full max-w-[1800px] mx-auto py-24">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none">STARTING POINTS</h2>
          <span className="text-xs font-mono uppercase tracking-widest text-secondary hidden md:block">
            {ARCHETYPES.length} ARCHETYPES AVAILABLE
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px border border-border bg-border">
          {ARCHETYPES.map((archetype) => (
            <Link 
              key={archetype.id}
              to={`/ai-builder/studio`} 
              className="group flex flex-col bg-background hover:bg-primary/[0.025] transition-colors"
            >
              <div className="w-full aspect-[4/3] bg-surface border-b border-border p-8 flex flex-col justify-between relative overflow-hidden">
                {/* Abstract Preview */}
                <div className="flex flex-col gap-3 opacity-60">
                  <div className="h-px w-full bg-border" />
                  <div className="h-8 w-2/3 bg-primary/10" />
                  <div className="h-3 w-1/2 bg-primary/5" />
                </div>
                <div className="grid grid-cols-3 gap-2 mt-auto opacity-60">
                  <div className="aspect-square bg-primary/5 border border-border" />
                  <div className="aspect-square bg-primary/5 border border-border" />
                  <div className="aspect-square bg-primary/5 border border-border" />
                </div>
                
                {/* Hover CTA */}
                <div className="absolute inset-0 bg-primary/[0.04] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-xs font-mono uppercase tracking-widest border border-primary px-4 py-2 text-primary bg-background">
                    OPEN IN STUDIO →
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold tracking-tight uppercase group-hover:text-accent transition-colors">{archetype.name}</h3>
                  <p className="text-xs font-mono text-secondary mt-1">{archetype.tag}</p>
                </div>
                <span className="text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-border px-6 md:px-12 py-32 w-full max-w-[1800px] mx-auto text-center">
        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.9] mb-8">
          BUILD THE FUTURE<br />OF THE WEB
        </h2>
        <Link 
          to="/ai-builder/studio" 
          className="inline-flex bg-primary text-background px-12 py-6 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors"
        >
          ENTER VISUALCRAFT STUDIO →
        </Link>
      </section>

    </div>
  );
}
