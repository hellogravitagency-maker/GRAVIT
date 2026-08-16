import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const TOOLS = [
  { id: 'search', name: 'Custom Domain Search', href: '/domain-search', desc: 'Register over 400 TLDs (.com, .ai, .io, .design) with free WHOIS privacy.', stat: '400+ TLDs Available' },
  { id: 'transfer', name: 'Zero-Downtime Domain Transfer', href: '/domain-transfer', desc: 'Seamlessly migrate existing domains with automated EPP authorization and zero DNS downtime.', stat: '0ms Downtime' },
  { id: 'email', name: 'Professional Business Email', href: '/business-email', desc: 'Custom domain email (you@yourbrand.com) integrated with Google Workspace or Microsoft 365.', stat: '99.99% Uptime SLA' },
];

export default function BusinessTools() {
  const [activeTool, setActiveTool] = useState(TOOLS[0]);

  return (
    <div className="w-full bg-transparent text-primary font-sans min-h-screen overflow-x-hidden">
      <SEO 
        title="Business Tools & Infrastructure — GRAVIT" 
        description="Domain registration, zero-downtime transfers, and custom business email infrastructure." 
        path="/business-tools" 
      />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex flex-col justify-between px-6 md:px-12 pt-36 pb-16 w-full max-w-[1800px] mx-auto">
        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-secondary"
          >
            <span>Infrastructure Suite</span>
            <span className="text-border">•</span>
            <span className="text-accent">BUSINESS UTILITIES</span>
          </motion.div>

          <div className="overflow-hidden">
            {['ESSENTIAL', 'BUSINESS TOOLS.', 'DOMAINS, EMAIL,', 'INFRASTRUCTURE.'].map((line, i) => (
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
            Establish your digital identity with enterprise domain management, instant DNS propagation, and secure custom business email setups.
          </p>
          <div className="md:col-span-5 flex md:justify-end">
            <Link to="/contact" className="bg-primary text-background px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors">
              Deploy Infrastructure →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* INTERACTIVE TOOL UTILITY SELECTOR */}
      <section className="px-6 md:px-12 py-16 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="flex items-center justify-between border-b border-border pb-6 mb-8 font-mono text-xs uppercase tracking-wider text-secondary">
          <span>Infrastructure Utilities Hub</span>
          <span className="text-accent">ACTIVE UTILITY: {activeTool.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {TOOLS.map((tool) => (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool)}
              className={`p-6 text-left border font-mono transition-colors ${
                activeTool.id === tool.id
                  ? 'border-primary bg-primary/5 font-bold'
                  : 'border-border text-secondary hover:border-primary'
              }`}
            >
              <div className="text-xs uppercase text-secondary mb-2">{tool.stat}</div>
              <div className="text-lg font-bold text-primary mb-2">{tool.name}</div>
            </button>
          ))}
        </div>

        <div className="border border-border bg-surface p-8 md:p-12">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-3xl font-bold uppercase tracking-tight">{activeTool.name}</h3>
            <Link to={activeTool.href} className="text-xs font-mono text-accent uppercase tracking-widest hover:underline">
              Open Tool →
            </Link>
          </div>
          <p className="text-secondary text-lg leading-relaxed max-w-3xl mb-8">
            {activeTool.desc}
          </p>
          <div className="pt-6 border-t border-border flex justify-between items-center">
            <span className="text-xs font-mono text-secondary uppercase">SPECIFICATION: {activeTool.stat}</span>
            <Link to={activeTool.href} className="bg-primary text-background px-6 py-2.5 text-xs font-mono uppercase tracking-widest hover:bg-accent transition-colors">
              Access {activeTool.name}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border px-6 md:px-12 py-32 w-full max-w-[1800px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">BUILD YOUR DIGITAL<br />FOUNDATION TODAY</h2>
        </div>
        <Link to="/contact" className="bg-primary text-background px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors flex-shrink-0">
          Get Started →
        </Link>
      </section>
    </div>
  );
}
