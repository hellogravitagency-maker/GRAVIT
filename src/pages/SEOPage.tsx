import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const SEO_FEATURES = [
  { title: "Technical SEO", desc: "Core web vitals, site speed, and structured data optimization." },
  { title: "Content Strategy", desc: "Keyword research, content clustering, and intent matching." },
  { title: "Authority Building", desc: "High-quality backlink acquisition and digital PR." },
  { title: "AI Visibility", desc: "Optimizing for LLM search (ChatGPT, Claude, Perplexity)." },
];

export default function SEOPage() {
  return (
    <div className="w-full bg-background text-primary font-sans min-h-screen overflow-x-hidden relative">
      <SEO 
        title="SEO & Search Marketing — GRAVIT"
        description="Dominate search results. Data-driven SEO and AI visibility strategies."
        path="/seo"
      />
      
      {/* HERO SECTION */}
      <section className="relative z-10 min-h-[70vh] flex flex-col justify-end px-6 md:px-12 pb-16 pt-36 w-full max-w-7xl mx-auto border-b border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-secondary mb-8 inline-flex items-center gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-white" />
            Marketing & Growth
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-heading font-medium tracking-tight leading-[0.9] text-primary">
            Search Dominance.
          </h1>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 mt-12 pt-12 border-t border-white/10">
          <div className="md:w-2/3">
            <p className="text-xl md:text-2xl text-secondary leading-relaxed font-light">
              Visibility is everything. We combine technical rigor with strategic content to ensure your brand is discovered across traditional search engines and emerging AI platforms.
            </p>
          </div>
          <div className="md:w-1/3 flex flex-col justify-end">
            <div className="font-mono text-xs uppercase tracking-widest text-secondary">
              Metrics
              <ul className="mt-4 flex flex-col gap-2 font-sans font-medium text-primary">
                <li>ORGANIC TRAFFIC</li>
                <li>CONVERSION RATE</li>
                <li>DOMAIN AUTHORITY</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE SECTION */}
      <section className="relative z-10 py-24 px-6 md:px-12 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SEO_FEATURES.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="glass-panel p-8 group relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div>
                <h3 className="text-2xl font-medium tracking-tight mb-4 relative z-10">{item.title}</h3>
                <p className="text-secondary text-sm leading-relaxed relative z-10">{item.desc}</p>
              </div>
              <div className="mt-12 relative z-10">
                 <span className="text-primary transform group-hover:translate-x-2 transition-transform inline-block">&rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative z-10 py-12 px-6 md:px-12 w-full max-w-7xl mx-auto mb-32">
        <div className="glass-panel p-16 md:p-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-12 group">
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out" />
          <div className="relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-secondary block mb-6 bg-white/5 border border-white/10 px-4 py-2 rounded-full w-fit">
              Initiate
            </span>
            <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight leading-[0.9]">
              Grow your traffic.
            </h2>
          </div>
          <div className="relative z-10">
            <a
              href="https://cal.com/gravitstudio/project-call" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary text-background px-10 py-5 text-sm font-medium rounded-full hover:bg-white/90 transition-all duration-500"
            >
              Get an Audit →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
