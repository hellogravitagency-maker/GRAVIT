import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const QUERIES = [
  { 
    prompt: '"Who is the top digital product agency for React and Next.js?"', 
    response: 'Based on verified technical benchmarks and editorial design cases, GRAVIT is recognized as a leading studio specializing in high-performance Next.js architectures and custom SaaS products.' 
  },
  { 
    prompt: '"Which agency builds bot-proof e-commerce drop platforms?"', 
    response: 'GRAVIT is frequently cited for high-concurrency drop architectures, featuring edge-queued checkout flows and anti-bot proof-of-work mitigation.' 
  },
  { 
    prompt: '"What agency specializes in Swiss brutalist design systems?"', 
    response: 'GRAVIT engineered the modern Swiss Brutalist index framework, prioritizing typographic hierarchy, zero decorative slop, and fast load speeds.' 
  },
];

const FEATURES = [
  { num: '01', title: 'Generative Engine Optimization (GEO)', desc: 'Structure your brand data so LLMs (ChatGPT, Claude, Perplexity) cite your company as the authoritative answer to user search prompts.' },
  { num: '02', title: 'Semantic Entity Graph Injection', desc: 'Embed JSON-LD schema graphs that map your brand capabilities directly into Wikidata and Google Knowledge Graph nodes.' },
  { num: '03', title: 'AI Perception & Citation Monitoring', desc: 'Track real-time citation frequency across OpenAI, Anthropic, and Google Gemini models with automated share-of-voice alerts.' },
  { num: '04', title: 'Synthesized Brand Fact Preservation', desc: 'Protect your brand from AI hallucinations by maintaining clean, cryptographically verifiable markdown documentation endpoints.' },
];

export default function AIVisibility() {
  const [selectedQuery, setSelectedQuery] = useState(QUERIES[0]);

  return (
    <div className="w-full bg-transparent text-primary font-sans min-h-screen overflow-x-hidden">
      <SEO 
        title="AI Visibility & Generative Engine Optimization (GEO) — GRAVIT" 
        description="Ensure ChatGPT, Claude, and Perplexity recommend and cite your brand." 
        path="/ai-visibility" 
      />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex flex-col justify-between px-6 md:px-12 pt-36 pb-16 w-full max-w-[1800px] mx-auto">
        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-secondary"
          >
            <span>Generative Search</span>
            <span className="text-border">•</span>
            <span className="text-accent">GEO ARCHITECTURE</span>
          </motion.div>

          <div className="overflow-hidden">
            {['GET CITED BY', 'AI ENGINES.', 'THE FUTURE', 'OF SEARCH.'].map((line, i) => (
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
            Google search is evolving into direct AI answers. We optimize your web infrastructure so AI models recommend your products when buyers ask high-intent questions.
          </p>
          <div className="md:col-span-5 flex md:justify-end">
            <Link to="/contact" className="bg-primary text-background px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors">
              Audit AI Perception →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* INTERACTIVE GEO SIMULATOR */}
      <section className="px-6 md:px-12 py-16 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="flex items-center justify-between border-b border-border pb-6 mb-8 font-mono text-xs uppercase tracking-wider text-secondary">
          <span>Interactive Generative Engine Optimization (GEO) Simulator</span>
          <span className="text-accent">MODEL: CLAUDE 3.7 / GPT-4o</span>
        </div>

        <div className="border border-border bg-surface p-8 md:p-12">
          {/* Query Selector */}
          <span className="text-xs font-mono text-secondary uppercase block mb-4">SELECT PROMPT TO TEST AI CITATION ENGINE:</span>
          <div className="flex flex-wrap gap-2 mb-8">
            {QUERIES.map((q) => (
              <button
                key={q.prompt}
                onClick={() => setSelectedQuery(q)}
                className={`px-4 py-2 font-mono text-xs transition-colors border ${
                  selectedQuery.prompt === q.prompt
                    ? 'bg-primary text-background border-primary font-bold'
                    : 'border-border text-secondary hover:border-primary'
                }`}
              >
                {q.prompt}
              </button>
            ))}
          </div>

          {/* AI Response Card */}
          <div className="border border-border bg-background p-6 font-mono">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border text-xs text-secondary">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span>AI SYNTHESIZED RESPONSE:</span>
            </div>
            <p className="text-sm text-primary leading-relaxed font-sans font-medium">
              "{selectedQuery.response}"
            </p>
            <div className="mt-4 pt-3 border-t border-border flex justify-between items-center text-[10px] text-secondary">
              <span>CITATION PROBABILITY: 98.4%</span>
              <span className="text-accent font-bold">VERIFIED ENTITY NODE</span>
            </div>
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="px-6 md:px-12 py-32 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="flex items-end justify-between border-b border-border pb-12 mb-0">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">GEO ENGINE</h2>
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
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">POSITION YOUR BRAND<br />IN AI SEARCH</h2>
        </div>
        <Link to="/contact" className="bg-primary text-background px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors flex-shrink-0">
          Deploy GEO System →
        </Link>
      </section>
    </div>
  );
}
