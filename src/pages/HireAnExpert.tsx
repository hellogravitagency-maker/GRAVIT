import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const EXPERTS = [
  { id: 1, name: 'Vance & Co Studio', specialization: 'Headless Commerce & Next.js Platforms', rating: '5.0 ★', projects: 48, rate: '$150/hr' },
  { id: 2, name: 'Apex Digital Systems', specialization: 'B2B SaaS Architecture & Custom Dashboards', rating: '4.9 ★', projects: 62, rate: '$185/hr' },
  { id: 3, name: 'KINETIC Brand Lab', specialization: 'Swiss Brutalist UI/UX & Motion Design Systems', rating: '5.0 ★', projects: 31, rate: '$140/hr' },
];

export default function HireAnExpert() {
  const [selectedSpec, setSelectedSpec] = useState('ALL');

  return (
    <div className="w-full bg-transparent text-primary font-sans min-h-screen overflow-x-hidden">
      <SEO 
        title="Hire a GRAVIT Certified Expert — Partner Network" 
        description="Find verified experts and agencies to design, build, and scale your GRAVIT digital platform." 
        path="/hire-an-expert" 
      />

      {/* HERO */}
      <section className="relative min-h-[80vh] flex flex-col justify-between px-6 md:px-12 pt-36 pb-16 w-full max-w-[1800px] mx-auto">
        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-secondary"
          >
            <span>Partner Network</span>
            <span className="text-border">•</span>
            <span className="text-accent">CERTIFIED EXPERTS</span>
          </motion.div>

          <div className="overflow-hidden">
            {['HIRE A CERTIFIED', 'GRAVIT EXPERT.', 'VERIFIED TALENT.', 'GUARANTEED WORK.'].map((line, i) => (
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
            Need an elite developer or design partner? Match with vetted agency partners specializing in custom GRAVIT engineering.
          </p>
          <div className="md:col-span-5 flex md:justify-end">
            <Link to="/contact" className="bg-primary text-background px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors">
              Submit Expert Brief →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* EXPERTS DIRECTORY */}
      <section className="px-6 md:px-12 py-16 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="flex items-center justify-between border-b border-border pb-6 mb-8 font-mono text-xs uppercase tracking-wider text-secondary">
          <span>Verified Partner Directory ({EXPERTS.length})</span>
          <span className="text-accent">100% VETTED</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EXPERTS.map((exp) => (
            <div key={exp.id} className="border border-border bg-surface p-8 font-mono flex flex-col justify-between hover:border-primary transition-colors">
              <div>
                <div className="flex justify-between items-center text-xs text-secondary mb-4">
                  <span className="text-accent font-bold">{exp.rating}</span>
                  <span>{exp.projects} Projects Completed</span>
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-primary mb-2">{exp.name}</h3>
                <p className="text-xs text-secondary leading-relaxed mb-6">{exp.specialization}</p>
              </div>

              <div className="pt-4 border-t border-border flex justify-between items-center">
                <span className="text-xs text-secondary">{exp.rate}</span>
                <Link to="/contact" className="bg-primary text-background px-4 py-2 text-xs font-mono uppercase tracking-widest hover:bg-accent transition-colors">
                  Contact Studio →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border px-6 md:px-12 py-32 w-full max-w-[1800px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">ARE YOU AN ELITE STUDIO?<br />BECOME A CERTIFIED PARTNER</h2>
        </div>
        <Link to="/contact" className="bg-primary text-background px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors flex-shrink-0">
          Apply for Partner Program →
        </Link>
      </section>
    </div>
  );
}
