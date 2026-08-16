import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const PORTFOLIO_TYPES = [
  { id: 'arch', label: 'Architecture', desc: 'Full-bleed project archives with custom grid compositions.' },
  { id: 'photo', label: 'Photography', desc: 'Masonry and editorial layouts with EXIF metadata and lightbox.' },
  { id: 'design', label: 'Graphic Design', desc: 'Case study structures that tell the creative process, not just the output.' },
  { id: 'dev', label: 'Engineering', desc: 'Technical portfolio sites with live demos, code previews, and contribution graphs.' },
  { id: 'film', label: 'Film & Motion', desc: 'Video-first layouts with custom video players and chapter navigation.' },
  { id: 'fashion', label: 'Fashion', desc: 'Editorial campaigns and lookbook formats with full-screen image storytelling.' },
];

export default function Portfolios() {
  return (
    <div className="w-full bg-transparent text-primary font-sans min-h-screen overflow-x-hidden">
      <SEO title="Portfolios — GRAVIT" description="Portfolio sites that do your work justice. Every discipline, engineered to impress." path="/portfolios" />

      {/* HERO — full bleed mosaic feel */}
      <section className="min-h-screen relative flex flex-col">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 md:px-12 pt-36 pb-16 border-b border-border">
          <motion.h1
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,10vw,12rem)] font-bold tracking-tighter uppercase leading-none"
          >
            PORTFOLIOS
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="hidden md:flex flex-col items-end gap-2"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-secondary">6 Disciplines</span>
            <span className="font-mono text-xs uppercase tracking-widest text-secondary">Built to Impress</span>
          </motion.div>
        </div>

        {/* Mosaic grid */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 grid-rows-2 border-b border-border">
          {[1,2,3,4,5,6].map((n, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.08 }}
              className={`border-r border-b border-border bg-surface relative overflow-hidden group ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              {/* Typographic fill */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] select-none pointer-events-none">
                <span className="text-[12vw] font-bold tracking-tighter uppercase leading-none">0{n}</span>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="px-6 md:px-12 py-6 flex items-center justify-between"
        >
          <p className="text-secondary text-sm">Scroll to explore portfolio types</p>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="text-secondary text-lg"
          >
            ↓
          </motion.span>
        </motion.div>
      </section>

      {/* PORTFOLIO TYPES */}
      <section className="px-6 md:px-12 py-32 w-full max-w-[1800px] mx-auto border-t border-border">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9] border-b border-border pb-12 mb-0">
          BUILT FOR EVERY<br />DISCIPLINE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px border-l border-border">
          {PORTFOLIO_TYPES.map((type, i) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="border-r border-b border-border p-10 group hover:bg-primary/[0.025] transition-colors"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-secondary block mb-6">0{i + 1}</span>
              <h3 className="text-2xl font-bold tracking-tight uppercase mb-4 group-hover:text-accent transition-colors">{type.label}</h3>
              <p className="text-secondary text-base leading-relaxed">{type.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border px-6 md:px-12 py-32 w-full max-w-[1800px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">
          YOUR WORK<br />DESERVES THIS.
        </h2>
        <Link to="/contact" className="bg-primary text-background px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors flex-shrink-0">
          Build My Portfolio →
        </Link>
      </section>
    </div>
  );
}
