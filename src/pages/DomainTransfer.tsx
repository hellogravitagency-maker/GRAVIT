import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const STEPS = [
  { num: '01', title: 'Unlock Domain at Registrar', desc: 'Remove the registrar lock switch in your existing domain management control panel.' },
  { num: '02', title: 'Obtain EPP Authorization Code', desc: 'Request your unique EPP/Auth secret code from your current domain provider.' },
  { num: '03', title: 'Automatic DNS Record Mirroring', desc: 'Our engine mirrors your existing A, CNAME, MX, and TXT records so zero traffic is lost during transfer.' },
  { num: '04', title: 'Instant Transfer Completion', desc: 'Transfer completes automatically within 24–48 hours with a free 1-year registration extension included.' },
];

export default function DomainTransfer() {
  const [domainInput, setDomainInput] = useState('brand.com');
  const [authCode, setAuthCode] = useState('EPP-8921-X4');
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState(false);

  const handleVerify = () => {
    setVerifying(true);
    setVerified(false);
    setTimeout(() => {
      setVerifying(false);
      setVerified(true);
    }, 1000);
  };

  return (
    <div className="w-full bg-transparent text-primary font-sans min-h-screen overflow-x-hidden">
      <SEO 
        title="Domain Transfer & Migration — GRAVIT" 
        description="Transfer your domain with zero DNS downtime, free 1-year extension, and automated EPP authorization." 
        path="/domain-transfer" 
      />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex flex-col justify-between px-6 md:px-12 pt-36 pb-16 w-full max-w-[1800px] mx-auto">
        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-secondary"
          >
            <span>Domain Migration</span>
            <span className="text-border">•</span>
            <span className="text-accent">ZERO-DOWNTIME PIPELINE</span>
          </motion.div>

          <div className="overflow-hidden">
            {['ZERO DOWNTIME', 'DOMAIN TRANSFERS.', 'FREE +1 YEAR', 'EXTENSION.'].map((line, i) => (
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
            Move your domains to GRAVIT's high-speed global Anycast DNS network without losing a single email or website request.
          </p>
          <div className="md:col-span-5 flex md:justify-end">
            <Link to="/contact" className="bg-primary text-background px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors">
              Start Domain Migration →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* INTERACTIVE EPP TRANSFER CHECKER */}
      <section className="px-6 md:px-12 py-16 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="flex items-center justify-between border-b border-border pb-6 mb-8 font-mono text-xs uppercase tracking-wider text-secondary">
          <span>Interactive EPP Transfer Readiness Simulator</span>
          <span className="text-accent">MIGRATION ENGINE READY</span>
        </div>

        <div className="border border-border bg-surface p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-6 flex flex-col gap-4">
              <span className="text-xs font-mono text-secondary uppercase">1. TARGET DOMAIN:</span>
              <input
                type="text"
                value={domainInput}
                onChange={(e) => setDomainInput(e.target.value)}
                className="w-full bg-transparent border border-border px-4 py-3 text-sm font-mono text-primary focus:outline-none focus:border-accent"
              />

              <span className="text-xs font-mono text-secondary uppercase mt-2">2. EPP AUTH CODE:</span>
              <input
                type="text"
                value={authCode}
                onChange={(e) => setAuthCode(e.target.value)}
                className="w-full bg-transparent border border-border px-4 py-3 text-sm font-mono text-primary focus:outline-none focus:border-accent"
              />
            </div>

            <div className="md:col-span-6 border-t md:border-t-0 md:border-l border-border pt-6 md:pt-0 md:pl-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-secondary uppercase block mb-3">MIGRATION DIAGNOSTIC:</span>
                <div className="border border-border p-4 bg-background font-mono text-xs text-secondary leading-relaxed">
                  <div>Domain Lock: UNLOCKED</div>
                  <div>DNS Propagation: MIRRORED</div>
                  <div>Registration Extension: +12 MONTHS</div>
                </div>
              </div>

              {verifying ? (
                <div className="p-3 bg-accent/10 border border-accent text-accent font-mono text-xs uppercase text-center animate-pulse mt-4">
                  Verifying EPP Auth Code & Mirroring DNS...
                </div>
              ) : verified ? (
                <div className="p-3 bg-accent/10 border border-accent text-accent font-mono text-xs uppercase text-center font-bold mt-4">
                  ✓ READY FOR INSTANT ZERO-DOWNTIME TRANSFER
                </div>
              ) : (
                <button
                  onClick={handleVerify}
                  className="w-full bg-primary text-background py-3.5 text-xs font-mono uppercase tracking-widest hover:bg-accent transition-colors mt-4"
                >
                  Test Transfer Readiness →
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CORE STEPS */}
      <section className="px-6 md:px-12 py-32 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="flex items-end justify-between border-b border-border pb-12 mb-0">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">TRANSFER STEPS</h2>
          <span className="font-mono text-xs uppercase tracking-widest text-secondary hidden md:block">04 Steps</span>
        </div>
        {STEPS.map((step) => (
          <div key={step.num} className="grid grid-cols-12 gap-6 items-start border-b border-border py-12 group hover:bg-primary/[0.02] transition-colors">
            <span className="col-span-1 text-xs font-mono text-secondary pt-1">{step.num}</span>
            <h3 className="col-span-4 text-2xl font-bold tracking-tight uppercase group-hover:text-accent transition-colors">{step.title}</h3>
            <p className="col-span-7 text-secondary text-base leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="border-t border-border px-6 md:px-12 py-32 w-full max-w-[1800px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">TRANSFER YOUR DOMAIN<br />WITHOUT INTERRUPTIONS</h2>
        </div>
        <Link to="/contact" className="bg-primary text-background px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors flex-shrink-0">
          Initiate Migration →
        </Link>
      </section>
    </div>
  );
}
