import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const FEATURES = [
  { num: '01', title: 'Custom Domain Identity', desc: 'Build immediate brand trust with professional email addresses (you@yourcompany.com) matching your domain.' },
  { num: '02', title: 'Google Workspace & M365 Sync', desc: '1-click MX and TXT record provisioning for Google Workspace, Microsoft 365, or Fastmail.' },
  { num: '03', title: 'Unlimited Team Email Aliases', desc: 'Create unlimited email alias routing rules (hello@, support@, press@, billing@) forwarding to single inboxes.' },
  { num: '04', title: 'Enterprise Spam & Phishing Shield', desc: 'Built-in SPF, DKIM, and DMARC authentication policies that protect your domain authority and prevent spoofing.' },
];

export default function BusinessEmail() {
  const [seats, setSeats] = useState(3);
  const pricePerSeat = 6;

  return (
    <div className="w-full bg-transparent text-primary font-sans min-h-screen overflow-x-hidden">
      <SEO 
        title="Custom Business Email & Workspace — GRAVIT" 
        description="Professional custom domain email infrastructure with Google Workspace and M365 1-click setups." 
        path="/business-email" 
      />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex flex-col justify-between px-6 md:px-12 pt-36 pb-16 w-full max-w-[1800px] mx-auto">
        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-secondary"
          >
            <span>Workspace Security</span>
            <span className="text-border">•</span>
            <span className="text-accent">CUSTOM EMAIL ARCHITECTURE</span>
          </motion.div>

          <div className="overflow-hidden">
            {['PROFESSIONAL', 'CUSTOM EMAIL.', 'TRUSTED IDENTITY.', '99.99% UPTIME.'].map((line, i) => (
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
            Upgrade your client perception with custom domain email addresses. Powered by enterprise security, DKIM signing, and zero-spam deliverability.
          </p>
          <div className="md:col-span-5 flex md:justify-end">
            <Link to="/contact" className="bg-primary text-background px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors">
              Setup Business Email →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* INTERACTIVE SEAT & ALIAS CALCULATOR */}
      <section className="px-6 md:px-12 py-16 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="flex items-center justify-between border-b border-border pb-6 mb-8 font-mono text-xs uppercase tracking-wider text-secondary">
          <span>Workspace Seat & Pricing Calculator Simulator</span>
          <span className="text-accent">ENTERPRISE SLA</span>
        </div>

        <div className="border border-border bg-surface p-8 md:p-12 font-mono">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Seat Controls */}
            <div className="md:col-span-6 flex flex-col gap-4">
              <span className="text-xs text-secondary uppercase">TEAM WORKSPACE SEATS:</span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSeats(s => Math.max(1, s - 1))}
                  className="w-12 h-12 border border-border bg-background text-lg font-bold hover:border-primary transition-colors"
                >
                  -
                </button>
                <span className="text-3xl font-bold font-mono text-primary w-16 text-center">{seats}</span>
                <button
                  onClick={() => setSeats(s => s + 1)}
                  className="w-12 h-12 border border-border bg-background text-lg font-bold hover:border-primary transition-colors"
                >
                  +
                </button>
                <span className="text-xs text-secondary uppercase">SEATS (30GB / SEAT)</span>
              </div>
            </div>

            {/* Price Readout */}
            <div className="md:col-span-6 border-t md:border-t-0 md:border-l border-border pt-6 md:pt-0 md:pl-8 flex flex-col justify-between">
              <div>
                <span className="text-xs text-secondary uppercase block mb-1">TOTAL WORKSPACE PRICE:</span>
                <div className="text-4xl font-bold text-accent mb-2">${seats * pricePerSeat} <span className="text-sm font-normal text-secondary">/ month</span></div>
                <div className="text-xs text-secondary">Includes Unlimited Aliases (hello@, sales@, billing@)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="px-6 md:px-12 py-32 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="flex items-end justify-between border-b border-border pb-12 mb-0">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">EMAIL ENGINE</h2>
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
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">GET YOUR CUSTOM<br />BUSINESS EMAIL TODAY</h2>
        </div>
        <Link to="/contact" className="bg-primary text-background px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors flex-shrink-0">
          Provision Workspace →
        </Link>
      </section>
    </div>
  );
}
