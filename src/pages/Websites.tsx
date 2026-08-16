import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const CAPABILITIES = [
  { num: '01', title: 'Marketing Platforms', desc: 'Conversion-engineered websites for acquisition, product launches, and brand authority.' },
  { num: '02', title: 'SaaS Applications', desc: 'Complex web apps with real-time data, multi-tenant architecture, and audit-grade security.' },
  { num: '03', title: 'Editorial Sites', desc: 'High-performance publishing systems — lightning CDN delivery, structured content, and SEO at scale.' },
  { num: '04', title: 'Corporate Infrastructure', desc: 'Investor-ready platforms that reflect the precision of your operations.' },
];

const STATS = [
  { val: '<0.8s', label: 'First Contentful Paint' },
  { val: '100', label: 'Lighthouse Score' },
  { val: '4–8wk', label: 'Delivery Timeline' },
  { val: '3yr+', label: 'Avg. Client Relationship' },
];

export default function Websites() {
  const rulerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.rule-line', {
        scaleX: 0,
        transformOrigin: 'left center',
      }, {
        scaleX: 1,
        stagger: 0.12,
        duration: 1.1,
        ease: 'power4.out',
        scrollTrigger: { trigger: rulerRef.current, start: 'top 75%' },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full bg-transparent text-primary font-sans min-h-screen overflow-x-hidden">
      <SEO title="Websites — GRAVIT" description="High-performance digital products engineered for scale and precision." path="/websites" />

      {/* HERO — full viewport, word by word reveal */}
      <section className="relative min-h-screen flex flex-col justify-end px-6 md:px-12 pb-16 pt-36 w-full max-w-[1800px] mx-auto">
        <div className="mb-16">
          {['WEBSITES', 'ENGINEERED', 'TO LAST.'].map((word, i) => (
            <div key={word} className="overflow-hidden">
              <motion.div
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(3rem,9.5vw,11rem)] font-bold tracking-tighter uppercase leading-[0.85]"
              >
                {word}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Animated horizontal rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-primary origin-left"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12"
        >
          <p className="md:col-span-5 text-xl text-secondary leading-relaxed">
            We architect, design, and engineer web platforms that hold — not templates
            stitched together on a deadline.
          </p>
          <div className="md:col-span-7 md:col-start-8 flex items-start md:justify-end gap-4 flex-wrap">
            <Link to="/contact" className="inline-flex items-center bg-primary text-background px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors">
              Start a Build →
            </Link>
            <Link to="/work" className="inline-flex items-center border border-border px-8 py-4 text-sm font-bold uppercase tracking-widest hover:border-primary transition-colors">
              See the Work
            </Link>
          </div>
        </motion.div>
      </section>

      {/* STATS — horizontal ruled grid */}
      <section className="border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-8 py-14 border-r border-border last:border-r-0 flex flex-col gap-3"
            >
              <span className="text-5xl md:text-6xl font-bold tracking-tighter text-primary">{s.val}</span>
              <span className="text-xs font-mono uppercase tracking-widest text-secondary">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CAPABILITIES — cascade ruled lines */}
      <section ref={rulerRef} className="px-6 md:px-12 py-32 w-full max-w-[1800px] mx-auto">
        <div className="flex items-end justify-between border-b border-border pb-12 mb-0">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.9]">WHAT WE BUILD</h2>
          <span className="text-xs font-mono uppercase tracking-widest text-secondary hidden md:block">Capabilities</span>
        </div>
        {CAPABILITIES.map((cap, i) => (
          <div key={cap.num} className="relative group">
            <div className="rule-line absolute bottom-0 left-0 right-0 h-px bg-border" />
            <div className="grid grid-cols-12 gap-6 items-start py-12 hover:bg-primary/[0.02] transition-colors px-0">
              <span className="col-span-1 text-xs font-mono text-secondary pt-1">{cap.num}</span>
              <h3 className="col-span-4 text-2xl md:text-3xl font-bold tracking-tight uppercase group-hover:text-accent transition-colors">
                {cap.title}
              </h3>
              <p className="col-span-7 text-secondary text-base leading-relaxed pt-1">{cap.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="border-t border-border px-6 md:px-12 py-32 w-full max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">
            YOUR SITE.<br />OUR SYSTEM.
          </h2>
          <Link to="/contact" className="bg-primary text-background px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors flex-shrink-0">
            Brief Us →
          </Link>
        </div>
      </section>
    </div>
  );
}
