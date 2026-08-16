import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const CATEGORIES = [
  { id: 'getting-started', name: 'Getting Started', count: 18, desc: 'Initial setup, project deployment, and workspace configuration.' },
  { id: 'domains-dns', name: 'Domains & Anycast DNS', count: 24, desc: 'Custom domain mapping, EPP transfers, and SSL certificates.' },
  { id: 'commerce-billing', name: 'Commerce & Billing', count: 32, desc: 'Stripe integration, subscription dunning, and invoice templates.' },
  { id: 'custom-code', name: 'Custom React & CSS', desc: 'Integrating custom hooks, Tailwind v4 tokens, and GSAP motion.' },
];

const ARTICLES = [
  { cat: 'getting-started', title: 'How to deploy a Next.js platform to GRAVIT Edge in 60 seconds', readTime: '3 min' },
  { cat: 'domains-dns', title: 'Configuring custom CNAME and MX records for Google Workspace', readTime: '5 min' },
  { cat: 'commerce-billing', title: 'Setting up zero-fee donation pipelines and automatic PDF receipts', readTime: '4 min' },
  { cat: 'custom-code', title: 'Optimizing Framer Motion layout transitions for 60fps mobile performance', readTime: '7 min' },
];

export default function HelpCenter() {
  const [query, setQuery] = useState('');
  const [selectedCat, setSelectedCat] = useState<string | null>(null);

  const filteredArticles = ARTICLES.filter(a => {
    const matchesQuery = !query || a.title.toLowerCase().includes(query.toLowerCase());
    const matchesCat = !selectedCat || a.cat === selectedCat;
    return matchesQuery && matchesCat;
  });

  return (
    <div className="w-full bg-transparent text-primary font-sans min-h-screen overflow-x-hidden">
      <SEO 
        title="Help Center & Knowledge Base — GRAVIT" 
        description="In-depth platform documentation, guides, and diagnostic tutorials." 
        path="/resources/help" 
      />

      {/* HERO */}
      <section className="relative min-h-[80vh] flex flex-col justify-between px-6 md:px-12 pt-36 pb-16 w-full max-w-[1800px] mx-auto">
        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-secondary"
          >
            <span>Knowledge Base</span>
            <span className="text-border">•</span>
            <span className="text-accent">PLATFORM HELP CENTER</span>
          </motion.div>

          <div className="overflow-hidden">
            {['SEARCH THE', 'HELP CENTER.', 'GUIDES &', 'DOCUMENTATION.'].map((line, i) => (
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

        {/* Live Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="border-t border-border pt-10 mt-12"
        >
          <div className="max-w-3xl">
            <label className="text-xs font-mono text-secondary uppercase block mb-2">SEARCH DOCUMENTATION KNOWLEDGE BASE:</label>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-surface border border-border px-6 py-4 text-lg font-mono text-primary focus:outline-none focus:border-accent"
              placeholder="e.g. DNS, Stripe checkout, SSL certificate, Next.js..."
            />
          </div>
        </motion.div>
      </section>

      {/* CATEGORIES GRID */}
      <section className="px-6 md:px-12 py-16 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="flex items-center justify-between border-b border-border pb-6 mb-8 font-mono text-xs uppercase tracking-wider text-secondary">
          <span>Help Topics ({CATEGORIES.length})</span>
          {selectedCat && (
            <button onClick={() => setSelectedCat(null)} className="text-accent hover:underline">
              Clear Filter
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(selectedCat === cat.id ? null : cat.id)}
              className={`p-6 text-left border font-mono transition-colors ${
                selectedCat === cat.id ? 'border-primary bg-primary/5 font-bold' : 'border-border text-secondary hover:border-primary'
              }`}
            >
              <div className="text-xs text-accent uppercase mb-2">{cat.count} Articles</div>
              <h3 className="text-lg font-bold text-primary mb-2">{cat.name}</h3>
              <p className="text-xs text-secondary leading-relaxed">{cat.desc}</p>
            </button>
          ))}
        </div>

        {/* Article Results */}
        <div className="border border-border bg-surface p-8 md:p-12 font-mono">
          <h3 className="text-xs text-secondary uppercase tracking-widest mb-6">SEARCH RESULTS ({filteredArticles.length}):</h3>
          <div className="flex flex-col gap-4">
            {filteredArticles.map((art) => (
              <div key={art.title} className="p-4 border border-border bg-background flex flex-col md:flex-row justify-between md:items-center gap-2 hover:border-accent transition-colors">
                <span className="text-sm font-bold text-primary">{art.title}</span>
                <span className="text-xs text-secondary">{art.readTime} read →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border px-6 md:px-12 py-32 w-full max-w-[1800px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">STILL NEED HELP?</h2>
        </div>
        <Link to="/support" className="bg-primary text-background px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors flex-shrink-0">
          Contact 24/7 Support →
        </Link>
      </section>
    </div>
  );
}
