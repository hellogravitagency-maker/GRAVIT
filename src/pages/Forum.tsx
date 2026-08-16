import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const THREADS = [
  { id: 1, topic: 'ARCHITECTURE', title: 'Best practices for caching Next.js Server Components on Cloudflare Edge', author: 'dev_vance', replies: 42, votes: 128 },
  { id: 2, topic: 'SHOWCASE', title: 'Built a 50k SKU luxury ecommerce store using GRAVIT Commerce Stack', author: 'studio_k', replies: 19, votes: 94 },
  { id: 3, topic: 'FEATURE REQUEST', title: 'Native Support for Multi-Region PostgreSQL Replication in Dashboard', author: 'tech_lead', replies: 67, votes: 210 },
  { id: 4, topic: 'ARCHITECTURE', title: 'How we reduced LCP from 2.4s to 0.5s using zero-js image components', author: 'opt_pro', replies: 31, votes: 156 },
];

export default function Forum() {
  const [selectedTopic, setSelectedTopic] = useState('ALL');

  const filtered = selectedTopic === 'ALL' ? THREADS : THREADS.filter(t => t.topic === selectedTopic);

  return (
    <div className="w-full bg-transparent text-primary font-sans min-h-screen overflow-x-hidden">
      <SEO 
        title="Community Forum & Developer Exchange — GRAVIT" 
        description="Connect with engineers, designers, and entrepreneurs building with GRAVIT." 
        path="/resources/forum" 
      />

      {/* HERO */}
      <section className="relative min-h-[80vh] flex flex-col justify-between px-6 md:px-12 pt-36 pb-16 w-full max-w-[1800px] mx-auto">
        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-secondary"
          >
            <span>Community Network</span>
            <span className="text-border">•</span>
            <span className="text-accent">BUILDER FORUM</span>
          </motion.div>

          <div className="overflow-hidden">
            {['ENGINEERING', 'DISCUSSIONS.', 'COMMUNITY', 'POWERED.'].map((line, i) => (
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
            Join over 18,000 developers, agency founders, and designers sharing production insights, code benchmarks, and architectural patterns.
          </p>
          <div className="md:col-span-5 flex md:justify-end">
            <button onClick={() => alert('New thread creation modal opened.')} className="bg-primary text-background px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors">
              + Start Discussion →
            </button>
          </div>
        </motion.div>
      </section>

      {/* THREADS DIRECTORY */}
      <section className="px-6 md:px-12 py-16 w-full max-w-[1800px] mx-auto border-t border-border">
        {/* Topic Filters */}
        <div className="flex flex-wrap gap-2 mb-8 font-mono text-xs">
          {['ALL', 'ARCHITECTURE', 'SHOWCASE', 'FEATURE REQUEST'].map((topic) => (
            <button
              key={topic}
              onClick={() => setSelectedTopic(topic)}
              className={`px-4 py-2 border uppercase transition-colors ${
                selectedTopic === topic ? 'bg-primary text-background border-primary font-bold' : 'border-border text-secondary'
              }`}
            >
              {topic}
            </button>
          ))}
        </div>

        {/* Thread List */}
        <div className="border border-border bg-surface font-mono">
          <div className="grid grid-cols-12 text-xs text-secondary uppercase p-4 border-b border-border">
            <span className="col-span-2">Topic</span>
            <span className="col-span-6">Discussion Title</span>
            <span className="col-span-2 text-center">Author</span>
            <span className="col-span-2 text-right">Activity</span>
          </div>

          {filtered.map((t) => (
            <div key={t.id} className="grid grid-cols-12 items-center p-4 border-b border-border/50 text-sm hover:bg-background transition-colors cursor-pointer">
              <span className="col-span-2 text-xs font-bold text-accent">{t.topic}</span>
              <span className="col-span-6 font-bold text-primary">{t.title}</span>
              <span className="col-span-2 text-center text-xs text-secondary">@{t.author}</span>
              <span className="col-span-2 text-right text-xs text-secondary">{t.replies} replies • {t.votes} ▲</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border px-6 md:px-12 py-32 w-full max-w-[1800px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">JOIN THE BUILDER<br />COMMUNITY</h2>
        </div>
        <Link to="/contact" className="bg-primary text-background px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors flex-shrink-0">
          Create Forum Account →
        </Link>
      </section>
    </div>
  );
}
