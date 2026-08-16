import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const TLDS = [
  { tld: '.com', price: '$14.99/yr', status: 'AVAILABLE', popular: true },
  { tld: '.ai', price: '$69.99/yr', status: 'AVAILABLE', popular: true },
  { tld: '.io', price: '$39.99/yr', status: 'AVAILABLE', popular: true },
  { tld: '.design', price: '$24.99/yr', status: 'AVAILABLE', popular: false },
  { tld: '.app', price: '$19.99/yr', status: 'AVAILABLE', popular: false },
  { tld: '.agency', price: '$29.99/yr', status: 'AVAILABLE', popular: false },
];

const FEATURES = [
  { num: '01', title: 'Free WHOIS Privacy Protection', desc: 'Keep your personal name, address, and phone number hidden from public WHOIS databases at no extra charge forever.' },
  { num: '02', title: 'Anycast DNS Global Routing', desc: 'Sub-10ms DNS lookup times worldwide powered by redundant edge DNS servers with 100% uptime SLA.' },
  { num: '03', title: 'Free Automated SSL Certificates', desc: 'Automatic Let\'s Encrypt wildcard SSL certificate provisioning and renewal for all your domains and subdomains.' },
  { num: '04', title: '1-Click DNS Presets', desc: 'Pre-configured DNS records for Next.js, Vercel, Cloudflare, Google Workspace, and Supabase.' },
];

export default function DomainSearch() {
  const [searchTerm, setSearchTerm] = useState('yourbrand');

  const cleanTerm = searchTerm.toLowerCase().replace(/[^a-z0-9-]/g, '') || 'brand';

  return (
    <div className="w-full bg-transparent text-primary font-sans min-h-screen overflow-x-hidden">
      <SEO 
        title="Domain Search & Registration — GRAVIT" 
        description="Search over 400 TLDs with free WHOIS privacy, Anycast DNS, and 1-click presets." 
        path="/domain-search" 
      />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex flex-col justify-between px-6 md:px-12 pt-36 pb-16 w-full max-w-[1800px] mx-auto">
        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-secondary"
          >
            <span>Domain Registration</span>
            <span className="text-border">•</span>
            <span className="text-accent">TLD RADAR</span>
          </motion.div>

          <div className="overflow-hidden">
            {['FIND YOUR', 'PERFECT DOMAIN.', 'INSTANT DNS.', 'FREE PRIVACY.'].map((line, i) => (
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
            Register your custom domain on high-performance global DNS infrastructure. Free WHOIS privacy, zero markup renewals, and instant SSL included.
          </p>
          <div className="md:col-span-5 flex md:justify-end">
            <Link to="/contact" className="bg-primary text-background px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors">
              Claim Your Domain →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* INTERACTIVE DOMAIN SEARCH RADAR */}
      <section className="px-6 md:px-12 py-16 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="flex items-center justify-between border-b border-border pb-6 mb-8 font-mono text-xs uppercase tracking-wider text-secondary">
          <span>Real-Time TLD Availability Radar</span>
          <span className="text-accent">RADAR ACTIVE</span>
        </div>

        <div className="border border-border bg-surface p-8 md:p-12">
          {/* Search Box */}
          <div className="mb-8">
            <label className="text-xs font-mono text-secondary uppercase block mb-2">TYPE YOUR BRAND NAME:</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent border border-border px-4 py-4 text-xl font-mono text-primary font-bold focus:outline-none focus:border-accent"
              placeholder="e.g. gravit, nexus, studio"
            />
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {TLDS.map((tldItem) => (
              <div key={tldItem.tld} className="p-6 border border-border bg-background flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center text-xs font-mono text-secondary mb-3">
                    <span className="text-accent font-bold">● {tldItem.status}</span>
                    <span>{tldItem.price}</span>
                  </div>
                  <div className="text-xl font-bold font-mono tracking-tight text-primary mb-4">
                    {cleanTerm}<span className="text-accent">{tldItem.tld}</span>
                  </div>
                </div>
                <button
                  onClick={() => alert(`Domain ${cleanTerm}${tldItem.tld} reserved for checkout.`)}
                  className="w-full bg-primary text-background py-2.5 text-xs font-mono uppercase tracking-widest hover:bg-accent transition-colors"
                >
                  Reserve Domain →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="px-6 md:px-12 py-32 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="flex items-end justify-between border-b border-border pb-12 mb-0">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">DOMAIN ENGINE</h2>
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
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">REGISTER YOUR<br />CUSTOM DOMAIN</h2>
        </div>
        <Link to="/contact" className="bg-primary text-background px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors flex-shrink-0">
          Start Registration →
        </Link>
      </section>
    </div>
  );
}
