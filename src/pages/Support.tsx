import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom'; // Wait, fix import to react-router-dom!
import { Link as RouterLink } from 'react-router-dom';
import SEO from '../components/SEO';

const INCIDENTS = [
  { service: 'Global Edge Anycast DNS', status: 'OPERATIONAL', uptime: '100%' },
  { service: 'Stripe Commerce Checkout API', status: 'OPERATIONAL', uptime: '99.99%' },
  { service: 'Sanity.io Studio CMS Sync', status: 'OPERATIONAL', uptime: '99.98%' },
  { service: 'Automated Email Dispatch Rail', status: 'OPERATIONAL', uptime: '100%' },
];

export default function Support() {
  const [severity, setSeverity] = useState('NORMAL');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="w-full bg-transparent text-primary font-sans min-h-screen overflow-x-hidden">
      <SEO 
        title="24/7 Technical Support & System Command Center — GRAVIT" 
        description="24/7 direct senior engineer technical support, live system status, and guaranteed response SLAs." 
        path="/support" 
      />

      {/* HERO */}
      <section className="relative min-h-[80vh] flex flex-col justify-between px-6 md:px-12 pt-36 pb-16 w-full max-w-[1800px] mx-auto">
        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-secondary"
          >
            <span>Command Center</span>
            <span className="text-border">•</span>
            <span className="text-accent flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              24/7 SUPPORT ONLINE
            </span>
          </motion.div>

          <div className="overflow-hidden">
            {['24/7 TECHNICAL', 'SUPPORT.', 'GUARANTEED', 'RESPONSE SLA.'].map((line, i) => (
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
            Direct access to principal platform engineers around the clock. Average response time: under 4 minutes for critical issues.
          </p>
        </motion.div>
      </section>

      {/* SYSTEM STATUS MATRIX */}
      <section className="px-6 md:px-12 py-16 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="flex items-center justify-between border-b border-border pb-6 mb-8 font-mono text-xs uppercase tracking-wider text-secondary">
          <span>Global Infrastructure Status Readout</span>
          <span className="text-accent font-bold">ALL SYSTEMS OPERATIONAL</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {INCIDENTS.map((inc) => (
            <div key={inc.service} className="p-6 border border-border bg-surface font-mono">
              <span className="text-[10px] text-accent font-bold uppercase block mb-1">● {inc.status}</span>
              <h3 className="text-sm font-bold text-primary mb-2">{inc.service}</h3>
              <span className="text-xs text-secondary">{inc.uptime} 30-Day SLA</span>
            </div>
          ))}
        </div>

        {/* Priority Ticket Simulator */}
        <div className="border border-border bg-surface p-8 md:p-12 font-mono">
          <h3 className="text-xs text-secondary uppercase tracking-widest mb-6">SUBMIT PRIORITY SUPPORT TICKET SIMULATOR:</h3>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {['NORMAL (4hr SLA)', 'HIGH (1hr SLA)', 'CRITICAL EMERGENCY (<15m SLA)'].map((sev) => (
              <button
                key={sev}
                onClick={() => setSeverity(sev)}
                className={`px-4 py-2 border text-xs uppercase transition-colors ${
                  severity === sev ? 'border-accent bg-accent/10 text-accent font-bold' : 'border-border text-secondary'
                }`}
              >
                {sev}
              </button>
            ))}
          </div>

          {submitted ? (
            <div className="p-4 border border-accent bg-accent/10 text-accent text-xs font-bold uppercase">
              ✓ Ticket #TK-9402 Dispatched to On-Call Senior Engineer. Response ETA: &lt;4 minutes.
            </div>
          ) : (
            <button
              onClick={() => setSubmitted(true)}
              className="bg-primary text-background px-8 py-3.5 text-xs font-mono uppercase tracking-widest hover:bg-accent transition-colors"
            >
              Dispatch Priority Ticket ({severity}) →
            </button>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border px-6 md:px-12 py-32 w-full max-w-[1800px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">UPGRADE TO ENTERPRISE<br />SUPPORT SLA</h2>
        </div>
        <RouterLink to="/contact" className="bg-primary text-background px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors flex-shrink-0">
          Inquire SLA Plans →
        </RouterLink>
      </section>
    </div>
  );
}
