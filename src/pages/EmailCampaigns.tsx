import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom'; // Wait, let's make sure it's react-router-dom!
import { Link as RouterLink } from 'react-router-dom';
import SEO from '../components/SEO';

const SEGMENTS = [
  { id: 'vip', name: 'VIP BUYERS (2,410)', openRate: '62.4%', ctr: '18.9%' },
  { id: 'trial', name: 'ACTIVE TRIALS (8,920)', openRate: '48.1%', ctr: '11.4%' },
  { id: 'churned', name: 'INACTIVE 60D (14,100)', openRate: '24.8%', ctr: '4.2%' },
];

const FEATURES = [
  { num: '01', title: '99.8% Inbox Deliverability Rate', desc: 'Dedicated IP rotation, automated SPF/DKIM/DMARC alignment, and real-time spam domain filtering.' },
  { num: '02', title: 'Dynamic Personalized Content Blocks', desc: 'Render custom product recommendations and dynamic pricing based on user purchase history.' },
  { num: '03', title: 'Automated A/B Subject Testing', desc: 'Automatically test 2 variant subject lines on 10% of your audience, then dispatch the winning variant to the rest.' },
  { num: '04', title: 'Zero-Bloat HTML Templates', desc: 'Lightweight, dark-mode responsive email layouts engineered to bypass Gmail Promotions tab sorting.' },
];

export default function EmailCampaigns() {
  const [selectedSegment, setSelectedSegment] = useState(SEGMENTS[0]);
  const [subjectLine, setSubjectLine] = useState('Exclusive Access: New Design System Release');

  const getScore = (text: string) => {
    if (!text) return 0;
    const len = text.length;
    if (len > 20 && len < 60) return 94;
    if (len <= 20) return 72;
    return 81;
  };

  const score = getScore(subjectLine);

  return (
    <div className="w-full bg-transparent text-primary font-sans min-h-screen overflow-x-hidden">
      <SEO 
        title="Email Campaigns & Broadcasts — GRAVIT" 
        description="High-deliverability email broadcasts, behavioral automation, and A/B subject testing engines." 
        path="/email-campaigns" 
      />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex flex-col justify-between px-6 md:px-12 pt-36 pb-16 w-full max-w-[1800px] mx-auto">
        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-secondary"
          >
            <span>Broadcast Engine</span>
            <span className="text-border">•</span>
            <span className="text-accent">EMAIL ARCHITECTURE</span>
          </motion.div>

          <div className="overflow-hidden">
            {['HIGH-IMPACT', 'EMAIL CAMPAIGNS.', 'LAND IN THE', 'INBOX, ALWAYS.'].map((line, i) => (
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
            Bypass spam filters and drive meaningful revenue. We design high-converting email design systems and high-deliverability infrastructure.
          </p>
          <div className="md:col-span-5 flex md:justify-end">
            <RouterLink to="/contact" className="bg-primary text-background px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors">
              Launch Campaign Engine →
            </RouterLink>
          </div>
        </motion.div>
      </section>

      {/* INTERACTIVE SUBJECT LINE & SEGMENT SIMULATOR */}
      <section className="px-6 md:px-12 py-16 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="flex items-center justify-between border-b border-border pb-6 mb-8 font-mono text-xs uppercase tracking-wider text-secondary">
          <span>Interactive Subject Line & Segment Analyzer</span>
          <span className="text-accent">SIMULATOR ACTIVE</span>
        </div>

        <div className="border border-border bg-surface p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Subject Input */}
            <div className="md:col-span-7 flex flex-col gap-4">
              <span className="text-xs font-mono text-secondary uppercase">TEST YOUR SUBJECT LINE:</span>
              <input
                type="text"
                value={subjectLine}
                onChange={(e) => setSubjectLine(e.target.value)}
                className="w-full bg-transparent border border-border px-4 py-3 text-lg font-sans text-primary focus:outline-none focus:border-accent"
                placeholder="Enter email subject line..."
              />
              
              <div className="flex justify-between items-center font-mono text-xs pt-2">
                <span className="text-secondary">Length: {subjectLine.length} characters</span>
                <span className="text-accent font-bold">PREDICTED OPEN SCORE: {score}/100</span>
              </div>
            </div>

            {/* Segment Selector */}
            <div className="md:col-span-5 border-t md:border-t-0 md:border-l border-border pt-6 md:pt-0 md:pl-8 flex flex-col gap-3">
              <span className="text-xs font-mono text-secondary uppercase">SELECT TARGET SEGMENT:</span>
              {SEGMENTS.map((seg) => (
                <button
                  key={seg.id}
                  onClick={() => setSelectedSegment(seg)}
                  className={`p-3 text-left font-mono text-xs uppercase border transition-colors flex justify-between items-center ${
                    selectedSegment.id === seg.id
                      ? 'border-accent bg-accent/10 text-accent font-bold'
                      : 'border-border text-secondary hover:border-primary'
                  }`}
                >
                  <span>{seg.name}</span>
                  <span>OPEN: {seg.openRate}</span>
                </button>
              ))}
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
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">DOMINATE THE<br />INBOX TODAY</h2>
        </div>
        <RouterLink to="/contact" className="bg-primary text-background px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors flex-shrink-0">
          Build Email System →
        </RouterLink>
      </section>
    </div>
  );
}
