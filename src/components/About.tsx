import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import { PageHero, SectionLayout, PremiumCard } from './ui/LayoutElements';

const TEAM = [
  { name: 'ARJUN K.', role: 'Founding Engineer / Systems', exp: 'Ex-Google' },
  { name: 'M. THEJ', role: 'Design Director / Creative', exp: 'Ex-Pentagram' },
  { name: 'SARAH J.', role: 'Principal Architect / Web3', exp: 'Ex-Stripe' },
  { name: 'DAVID W.', role: 'Performance Lead / Core', exp: 'Ex-Vercel' }
];

export default function About() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="w-full bg-transparent text-primary min-h-screen font-sans overflow-hidden">
      <SEO 
        title="The Studio | GRAVIT®" 
        description="We are a premium digital product studio operating at the intersection of rigorous engineering and minimal design." 
        path="/about"
      />
      
      {/* 01: HERO */}
      <PageHero 
        title="DIGITAL ARCHITECTURE."
        subtitle="01 / The Studio"
        className="border-b border-border"
      >
        <div className="flex flex-col md:flex-row gap-12 mt-12 pt-12 border-t border-border">
          <div className="md:w-2/3">
            <p className="text-xl md:text-3xl text-secondary leading-relaxed font-light">
              We operate on a simple premise: too many beautiful interfaces are built on fragile architecture, and too many robust systems are painful to use. We exist to bridge that gap.
            </p>
          </div>
          <div className="md:w-1/3 flex flex-col justify-end">
            <div className="font-mono text-xs uppercase tracking-widest text-secondary">
              Est. 2024
              <ul className="mt-4 flex flex-col gap-2 font-sans font-bold text-primary">
                <li>SWISS DESIGN</li>
                <li>SYSTEMS ENGINEERING</li>
                <li>PERFORMANCE METRICS</li>
              </ul>
            </div>
          </div>
        </div>
      </PageHero>

      {/* ABSTRACT VISUAL MARQUEE */}
      <div className="w-full border-b border-border py-12 flex overflow-hidden bg-primary text-background whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="text-[120px] font-bold tracking-tighter uppercase leading-none flex gap-16"
        >
          <span>ENGINEERING DISCIPLINE &bull; MINIMALIST AESTHETICS &bull; SCALABLE ARCHITECTURE &bull;</span>
          <span>ENGINEERING DISCIPLINE &bull; MINIMALIST AESTHETICS &bull; SCALABLE ARCHITECTURE &bull;</span>
        </motion.div>
      </div>

      {/* 02: PHILOSOPHY */}
      <SectionLayout>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase leading-tight sticky top-32">
              THE<br/>PRINCIPLES.
            </h2>
            
            {/* Abstract visual art piece */}
            <motion.div style={{ y: y1 }} className="mt-24 w-full aspect-square border border-border relative overflow-hidden flex items-center justify-center">
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-[150%] h-[150%] absolute border border-primary/20 rounded-full"
              />
              <motion.div 
                animate={{ rotate: -360 }} 
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="w-1/2 h-1/2 absolute border border-primary rotate-45"
              />
            </motion.div>
          </div>
          
          <div className="lg:col-span-8 flex flex-col gap-12">
            {[
              {
                title: "Designed, not decorated.",
                desc: "We believe in extreme legibility. Every pixel must serve a purpose. We strip away unnecessary visual noise—heavy gradients, glassmorphism, and arbitrary shadows—in favor of strict grids, high-contrast typography, and deliberate whitespace."
              },
              {
                title: "Engineering discipline.",
                desc: "Design is useless if the system fails under load. We maintain a zero-tolerance policy for technical debt. Our architectures prioritize type safety, relational integrity, and server-side observability."
              },
              {
                title: "Platform Thinking.",
                desc: "We don't just build brochures. We build digital operating systems. From CRM pipelines to automated invoicing, we architect the full lifecycle of your digital product."
              }
            ].map((principle, idx) => (
              <div key={idx} className="group border border-border p-8 md:p-12 hover:bg-surface transition-colors cursor-default">
                <span className="text-xs font-mono uppercase tracking-widest text-secondary mb-8 block">0{idx + 1} / Principle</span>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-6">{principle.title}</h3>
                <p className="text-lg text-secondary font-light leading-relaxed max-w-2xl">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionLayout>

      {/* 03: THE TEAM */}
      <div className="border-t border-border bg-surface">
        <SectionLayout>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 pb-12 border-b border-border">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
              THE TEAM.
            </h2>
            <span className="text-xs font-mono uppercase tracking-widest text-secondary">
              Focused. Elite. Dedicated.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <div key={i} className="border border-border p-6 flex flex-col h-full bg-background group hover:border-primary transition-colors">
                <div className="w-full aspect-square bg-surface border border-border mb-6 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                  {/* Abstract placeholder for team member photo */}
                  <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                    <div className={`w-full h-[1px] bg-primary/20 absolute top-1/2 -translate-y-1/2 rotate-${(i+1)*45}`}></div>
                    <div className={`w-[1px] h-full bg-primary/20 absolute left-1/2 -translate-x-1/2 rotate-${(i+1)*45}`}></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold tracking-tight uppercase mb-2">{member.name}</h3>
                <p className="text-sm font-mono text-secondary mb-4">{member.role}</p>
                <div className="mt-auto pt-4 border-t border-border text-xs font-mono tracking-widest uppercase">
                  {member.exp}
                </div>
              </div>
            ))}
          </div>
        </SectionLayout>
      </div>

      {/* 04: METRICS */}
      <SectionLayout className="border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {[
            { value: "40+", label: "Products Launched" },
            { value: "100M+", label: "API Requests/Mo" },
            { value: "<0.1s", label: "P99 Latency" }
          ].map((stat, i) => (
            <div key={i} className="border-l border-border pl-8 py-4">
              <div className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">{stat.value}</div>
              <div className="text-sm font-mono uppercase tracking-widest text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </SectionLayout>

      {/* 05: CTA */}
      <section className="py-32 md:py-48 px-6 md:px-8 lg:px-12 w-full max-w-[1800px] mx-auto border-t border-border bg-primary text-background">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-end">
          <div className="md:col-span-8">
            <span className="text-xs font-mono uppercase tracking-widest text-background/60 block mb-8">Next Step</span>
            <h2 className="text-6xl md:text-8xl lg:text-[10vw] font-bold tracking-tighter uppercase leading-[0.85]">
              INITIATE.
            </h2>
          </div>
          <div className="md:col-span-4 flex flex-col gap-4 items-start md:items-end pb-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-background text-primary px-12 py-6 text-sm font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform w-full md:w-auto"
            >
              Start a Project &rarr;
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
