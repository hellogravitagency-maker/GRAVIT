import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const FEATURES = [
  { num: '01', title: 'High-Concurrency Edge Queuing', desc: 'Absorb thousands of simultaneous requests during peak drop seconds without server degradation.' },
  { num: '02', title: 'Bot Mitigation & Rate Protection', desc: 'Proof-of-work challenges and device fingerprinting to guarantee products land in human hands.' },
  { num: '03', title: 'Tokenized VIP Access Passes', desc: 'Distribute cryptographic access tokens or password links to high-value customers prior to public release.' },
  { num: '04', title: 'Timed Auto-Lock Storefronts', desc: 'Lock the store pre-drop with custom countdown timers and auto-open instantly when the clock strikes zero.' },
];

export default function LimitedReleases() {
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 32, seconds: 19 });
  const [queuePos, setQueuePos] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t.seconds > 0) return { ...t, seconds: t.seconds - 1 };
        if (t.minutes > 0) return { ...t, minutes: 59, seconds: 59 };
        return { hours: Math.max(0, t.hours - 1), minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const startQueue = () => {
    setQueuePos(1429);
    const interval = setInterval(() => {
      setQueuePos(p => {
        if (p === null || p <= 0) { clearInterval(interval); return 0; }
        return Math.max(0, p - Math.floor(Math.random() * 150 + 50));
      });
    }, 400);
  };

  return (
    <div className="w-full bg-transparent text-primary font-sans min-h-screen overflow-x-hidden">
      <SEO 
        title="Limited Releases & Product Drops — GRAVIT" 
        description="High-velocity drop architecture built for high concurrency, bot protection, and instant checkouts." 
        path="/limited-releases" 
      />

      {/* HERO */}
      <section className="relative min-h-[90vh] flex flex-col justify-between px-6 md:px-12 pt-36 pb-16 w-full max-w-[1800px] mx-auto">
        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-secondary"
          >
            <span>Drop Mechanics</span>
            <span className="text-border">•</span>
            <span className="text-accent flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              HIGH-CONCURRENCY PIPELINE
            </span>
          </motion.div>

          <div className="overflow-hidden">
            {['HIGH-STAKES', 'LIMITED DROPS.', 'BOT-PROOF.', 'ZERO DOWNTIME.'].map((line, i) => (
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
            Architected for extreme demand spikes. Keep your infrastructure online, protect inventory from automated scalper bots, and deliver an electric drop experience.
          </p>
          <div className="md:col-span-5 flex md:justify-end">
            <Link to="/contact" className="bg-primary text-background px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors">
              Engine Your Drop →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* INTERACTIVE DROP SIMULATOR */}
      <section className="px-6 md:px-12 py-16 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="flex items-center justify-between border-b border-border pb-6 mb-8 font-mono text-xs uppercase tracking-wider text-secondary">
          <span>Live Drop Countdown & Queue Mechanics Simulator</span>
          <span className="text-accent">DROP STATUS: LOCKED</span>
        </div>

        <div className="border border-border bg-surface p-8 md:p-12 font-mono">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Clock */}
            <div className="md:col-span-6 flex flex-col gap-2">
              <span className="text-xs text-secondary uppercase tracking-widest">RELEASE COUNTDOWN:</span>
              <div className="text-4xl md:text-6xl font-bold tracking-tight text-primary">
                00:{String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </div>
            </div>

            {/* Queue Button & Simulator */}
            <div className="md:col-span-6 border-t md:border-t-0 md:border-l border-border pt-6 md:pt-0 md:pl-8">
              {queuePos === null ? (
                <div className="flex flex-col gap-4">
                  <span className="text-xs text-secondary uppercase">TEST THE QUEUE ENGINE:</span>
                  <button
                    onClick={startQueue}
                    className="w-full bg-primary text-background py-4 text-xs font-mono uppercase tracking-widest hover:bg-accent transition-colors"
                  >
                    Enter Live Drop Queue
                  </button>
                </div>
              ) : queuePos > 0 ? (
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-secondary uppercase">QUEUE POSITION:</span>
                    <span className="text-accent font-bold animate-pulse">PROCESSING</span>
                  </div>
                  <div className="text-3xl font-bold text-primary">#{queuePos} IN LINE</div>
                  <div className="w-full h-1.5 bg-border rounded-full overflow-hidden mt-2">
                    <div 
                      className="h-full bg-accent transition-all duration-300"
                      style={{ width: `${Math.min(100, Math.max(5, ((1429 - queuePos) / 1429) * 100))}%` }}
                    />
                  </div>
                </div>
              ) : (
                <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} className="p-4 border border-accent bg-accent/10 text-accent font-bold text-xs uppercase text-center">
                  ✓ QUEUE CLEARED — ACCESS TOKEN ISSUED. PROCEED TO CHECKOUT.
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="px-6 md:px-12 py-32 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="flex items-end justify-between border-b border-border pb-12 mb-0">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">DROP ENGINE</h2>
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
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">PREPARE FOR YOUR<br />NEXT DROP</h2>
        </div>
        <Link to="/contact" className="bg-primary text-background px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors flex-shrink-0">
          Consult Drop Engineers →
        </Link>
      </section>
    </div>
  );
}
