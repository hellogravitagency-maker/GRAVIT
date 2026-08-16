import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const TIERS = [
  { id: 'free', name: 'COMMUNITY', price: '$0', desc: 'Public field notes, open research, and community forum access.' },
  { id: 'pro', name: 'PRO MEMBER', price: '$49/mo', desc: 'Full research archive, source code access, and monthly Q&A sessions.' },
  { id: 'founder', name: 'FOUNDER CLUB', price: '$199/mo', desc: '1-on-1 monthly advisory, private Slack channel, and custom system audits.' },
];

const FEATURES = [
  { num: '01', title: 'Paywalled Content Gates', desc: 'Protect articles, video streams, code repositories, or downloadable assets behind granular membership tiers.' },
  { num: '02', title: 'Recurring Subscription Engine', desc: 'Native recurring billing via Stripe Billing with automatic credit card retry rules and churn reduction flows.' },
  { num: '03', title: 'Automated Drip Scheduling', desc: 'Unlock modules and resources progressively over days or weeks following a member’s join date.' },
  { num: '04', title: 'Community Role Syncing', desc: 'Automatically assign or revoke Discord roles, Telegram group access, and GitHub team permissions.' },
];

export default function ContentMemberships() {
  const [selectedTier, setSelectedTier] = useState(TIERS[1]);
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <div className="w-full bg-transparent text-primary font-sans min-h-screen overflow-x-hidden">
      <SEO 
        title="Content & Memberships Architecture — GRAVIT" 
        description="Gated content portals, subscription tiers, and recurring membership engines." 
        path="/content-memberships" 
      />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex flex-col justify-between px-6 md:px-12 pt-36 pb-16 w-full max-w-[1800px] mx-auto">
        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-secondary"
          >
            <span>Monetization Infrastructure</span>
            <span className="text-border">•</span>
            <span className="text-accent">MEMBERSHIP PIPELINE</span>
          </motion.div>

          <div className="overflow-hidden">
            {['MONETIZE', 'KNOWLEDGE.', 'SUBSCRIPTIONS.', 'GATED ACCESS.'].map((line, i) => (
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
            Turn audience trust into predictable recurring revenue. Build custom paywalled publications, course portals, and exclusive member networks.
          </p>
          <div className="md:col-span-5 flex md:justify-end">
            <Link to="/contact" className="bg-primary text-background px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors">
              Build Membership System →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* INTERACTIVE PAYWALL DEMO */}
      <section className="px-6 md:px-12 py-16 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="flex items-center justify-between border-b border-border pb-6 mb-8 font-mono text-xs uppercase tracking-wider text-secondary">
          <span>Interactive Content Gate & Tier Selector Demo</span>
          <span className="text-accent">SELECTED TIER: {selectedTier.name}</span>
        </div>

        {/* Tier Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {TIERS.map((tier) => (
            <button
              key={tier.id}
              onClick={() => setSelectedTier(tier)}
              className={`p-6 text-left border transition-colors ${
                selectedTier.id === tier.id
                  ? 'border-primary bg-primary/5 font-bold'
                  : 'border-border text-secondary hover:border-primary'
              }`}
            >
              <div className="flex justify-between items-center mb-2 font-mono text-xs">
                <span>{tier.name}</span>
                <span className="text-accent text-sm font-bold">{tier.price}</span>
              </div>
              <p className="text-xs text-secondary leading-relaxed">{tier.desc}</p>
            </button>
          ))}
        </div>

        {/* Article Paywall Mock */}
        <div className="border border-border bg-surface p-8 md:p-12 relative overflow-hidden">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-accent uppercase tracking-widest block mb-2">RESTRICTED RESEARCH PAPER #104</span>
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">Architecture Patterns for Autonomous Multi-Agent Workflows</h3>
            <p className="text-secondary leading-relaxed mb-4">
              Autonomous AI agent execution requires rigid transactional boundaries to prevent recursive loops and unexpected API bill spikes. In this paper, we document...
            </p>
            
            <div className={`relative transition-all duration-500 ${!isUnlocked ? 'blur-sm select-none opacity-40' : 'blur-none opacity-100'}`}>
              <p className="text-secondary leading-relaxed">
                ...the exact state machine pattern we deploy for high-concurrency workloads. By isolating agent memory in ephemeral Redis nodes and validating state transitions against Pydantic schemas, we achieve 99.98% execution reliability.
              </p>
            </div>

            {!isUnlocked && (
              <div className="mt-8 border-t border-border pt-6 flex items-center justify-between">
                <span className="text-xs font-mono text-secondary uppercase">Requires {selectedTier.name} subscription</span>
                <button
                  onClick={() => setIsUnlocked(true)}
                  className="bg-primary text-background px-6 py-2.5 text-xs font-mono uppercase tracking-widest hover:bg-accent transition-colors"
                >
                  Unlock Article Preview
                </button>
              </div>
            )}
            {isUnlocked && (
              <div className="mt-6 text-xs font-mono text-accent uppercase">
                ✓ Access granted under active session token
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="px-6 md:px-12 py-32 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="flex items-end justify-between border-b border-border pb-12 mb-0">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">MEMBERSHIP ENGINE</h2>
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
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">LAUNCH YOUR<br />PAID MEMBERSHIP</h2>
        </div>
        <Link to="/contact" className="bg-primary text-background px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors flex-shrink-0">
          Consult Membership Architect →
        </Link>
      </section>
    </div>
  );
}
