import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const SESSIONS = [
  { id: 1, title: 'Building 100/100 Core Web Vitals Next.js 15 Architectures', date: 'THU, AUG 22 @ 1:00 PM EST', speaker: 'Elena Vance (Principal Engineer)', seatsLeft: 14 },
  { id: 2, title: 'Designing Motion Graphics & Swiss Grid Systems in React', date: 'THU, AUG 29 @ 2:30 PM EST', speaker: 'Marcus Thorne (Design Director)', seatsLeft: 8 },
  { id: 3, title: 'High-Concurrency Commerce: Absorb 50k Ticket Drops Without Crashing', date: 'THU, SEP 05 @ 1:00 PM EST', speaker: 'Julian Cole (Infra Architect)', seatsLeft: 22 },
];

export default function Webinars() {
  const [reservedId, setReservedId] = useState<number | null>(null);

  return (
    <div className="w-full bg-transparent text-primary font-sans min-h-screen overflow-x-hidden">
      <SEO 
        title="Live Masterclasses & Technical Webinars — GRAVIT" 
        description="Free online sessions on software architecture, design systems, and platform scaling." 
        path="/resources/webinars" 
      />

      {/* HERO */}
      <section className="relative min-h-[80vh] flex flex-col justify-between px-6 md:px-12 pt-36 pb-16 w-full max-w-[1800px] mx-auto">
        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-secondary"
          >
            <span>Live Broadcasts</span>
            <span className="text-border">•</span>
            <span className="text-accent">TECHNICAL MASTERCLASSES</span>
          </motion.div>

          <div className="overflow-hidden">
            {['LIVE MASTERCLASSES.', 'REFINE YOUR', 'ENGINEERING', 'SKILLS.'].map((line, i) => (
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
            Free live workshops led by principal engineers and design directors. Learn how to architect, optimize, and scale production systems.
          </p>
        </motion.div>
      </section>

      {/* SESSIONS GRID */}
      <section className="px-6 md:px-12 py-16 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="flex items-center justify-between border-b border-border pb-6 mb-8 font-mono text-xs uppercase tracking-wider text-secondary">
          <span>Upcoming Live Workshops</span>
          <span className="text-accent">SEATS LIMITED</span>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {SESSIONS.map((session) => (
            <div key={session.id} className="border border-border bg-surface p-8 md:p-12 font-mono flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="max-w-2xl">
                <span className="text-xs text-accent uppercase font-bold block mb-2">{session.date}</span>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-primary mb-2">{session.title}</h3>
                <span className="text-xs text-secondary block">HOST: {session.speaker}</span>
              </div>

              {reservedId === session.id ? (
                <div className="px-6 py-3 border border-accent bg-accent/10 text-accent font-bold text-xs uppercase">
                  ✓ Seat Reserved & Calendar Pass Dispatched
                </div>
              ) : (
                <button
                  onClick={() => setReservedId(session.id)}
                  className="bg-primary text-background px-8 py-4 text-xs font-mono uppercase tracking-widest hover:bg-accent transition-colors flex-shrink-0"
                >
                  Reserve Free Seat ({session.seatsLeft} Left) →
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border px-6 md:px-12 py-32 w-full max-w-[1800px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">WANT A CUSTOM<br />WORKSHOP FOR YOUR TEAM?</h2>
        </div>
        <Link to="/contact" className="bg-primary text-background px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors flex-shrink-0">
          Request Team Workshop →
        </Link>
      </section>
    </div>
  );
}
