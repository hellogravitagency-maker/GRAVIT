import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const PRINCIPLES = [
  {
    title: 'Typographic Intelligence',
    body: 'We analyze your brand voice and industry vertical to prescribe a typographic system — scale, rhythm, hierarchy — that communicates authority before a word is read.',
    tag: 'TYPE',
  },
  {
    title: 'Spatial Logic',
    body: 'Every layout decision is intentional. Negative space, grid breakpoints, and content density are calibrated to guide the eye toward the action you need users to take.',
    tag: 'SPACE',
  },
  {
    title: 'Color Architecture',
    body: 'A dominant tone, one accent, one neutral system. No palette committees, no "pick from 12 colors." One direction, fully committed.',
    tag: 'COLOR',
  },
  {
    title: 'Motion Grammar',
    body: 'Animation as vocabulary — not decoration. Every transition communicates state. Every entrance reinforces hierarchy. Silence where motion would distract.',
    tag: 'MOTION',
  },
];

export default function DesignIntelligence() {
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.di-block', {
        backgroundColor: 'var(--color-primary, #0A0A0A)',
        scrollTrigger: {
          trigger: blockRef.current,
          start: 'top 60%',
          end: 'top 20%',
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full bg-transparent text-primary font-sans min-h-screen overflow-x-hidden">
      <SEO title="Design Intelligence — GRAVIT" description="Design is a system, not a style. Every decision earns its position." path="/design-intelligence" />

      {/* HERO — Swiss colour block */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        {/* Left — text */}
        <div className="flex flex-col justify-end px-6 md:px-12 pt-36 pb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-mono text-xs uppercase tracking-widest text-secondary mb-12 block"
          >
            Design System
          </motion.span>
          {['DESIGN', 'IS A', 'SYSTEM,', 'NOT A', 'STYLE.'].map((line, i) => (
            <div key={line} className="overflow-hidden">
              <motion.div
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.85, delay: 0.1 + i * 0.11, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(2.5rem,6vw,7rem)] font-bold tracking-tighter uppercase leading-[0.87]"
              >
                {line}
              </motion.div>
            </div>
          ))}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-secondary text-lg leading-relaxed mt-12 max-w-md"
          >
            Every element earns its position. Every color carries meaning. Every line of motion has a grammar.
          </motion.p>
        </div>
        {/* Right — animated color block */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative bg-primary flex flex-col justify-end p-12 md:pt-36"
        >
          {/* Grid of color tokens as visual device */}
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-10">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className={`border-[0.5px] border-background/30 ${i % 7 === 0 || i % 11 === 0 ? 'bg-background/20' : ''}`} />
            ))}
          </div>
          <div className="relative z-10">
            <span className="text-background/40 font-mono text-xs uppercase tracking-widest block mb-6">Token System</span>
            {[
              { token: '--color-background', val: '#F4F3EF' },
              { token: '--color-primary', val: '#0A0A0A' },
              { token: '--color-accent', val: '#5B4BFF' },
              { token: '--color-border', val: '#E5E4E0' },
            ].map(t => (
              <div key={t.token} className="flex items-center justify-between py-3 border-b border-background/10">
                <span className="font-mono text-xs text-background/60">{t.token}</span>
                <span className="font-mono text-xs text-background/90">{t.val}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* PRINCIPLES */}
      <section className="px-6 md:px-12 py-32 w-full max-w-[1800px] mx-auto">
        <div className="flex items-end justify-between border-b border-border pb-12">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.9]">OUR DESIGN<br />PILLARS</h2>
          <span className="font-mono text-xs uppercase tracking-widest text-secondary hidden md:block">4 Principles</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px border-l border-border mt-0">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.tag}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="border-b border-r border-border p-10 group hover:bg-primary/[0.02] transition-colors"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-secondary block mb-6">{p.tag}</span>
              <h3 className="text-2xl font-bold tracking-tight uppercase mb-6 group-hover:text-accent transition-colors">{p.title}</h3>
              <p className="text-secondary leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SCRUB BLOCK */}
      <div ref={blockRef} className="border-t border-border">
        <div className="di-block px-6 md:px-12 py-32 w-full max-w-[1800px] mx-auto transition-colors duration-300">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">
              DESIGNED FOR<br />DISCERNMENT.
            </h2>
            <Link to="/contact" className="inline-flex items-center bg-background text-primary px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-background transition-colors flex-shrink-0">
              Commission a System →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
