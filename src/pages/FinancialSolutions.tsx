import React from 'react';
import { Building2, Shield, Landmark, ArrowRight, LineChart, Briefcase } from 'lucide-react';
import SEO from '../components/SEO';

const SOLUTIONS = [
  {
    icon: Building2,
    title: 'Corporate Treasury',
    description: 'Optimize liquidity, manage foreign exchange risk, and streamline global cash management with our robust treasury solutions.'
  },
  {
    icon: Shield,
    title: 'Asset Protection',
    description: 'Institutional-grade custody and secure asset management designed for family offices and private wealth clients.'
  },
  {
    icon: LineChart,
    title: 'Capital Markets',
    description: 'Access to primary and secondary markets, capital raising, and strategic advisory for mid-to-large cap enterprises.'
  }
];

export default function FinancialSolutions() {
  return (
    <div className="w-full bg-white text-slate-900 min-h-screen overflow-x-hidden font-sans selection:bg-slate-200 selection:text-slate-900 pb-32">
      <SEO 
        title="Financial Solutions — GRAVIT" 
        description="Institutional banking and capital management for the modern enterprise." 
        path="/financial-solutions" 
      />

      {/* HEADER - NAVY BLUE */}
      <section className="bg-slate-900 text-white pt-40 pb-32 px-6 md:px-12 w-full">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-8 uppercase tracking-widest text-xs font-semibold text-slate-400">
              <Landmark className="w-4 h-4" /> Institutional Services
            </div>
            <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Capital Management, Elevated.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-light max-w-lg">
              We provide enduring financial stability and strategic advisory for enterprises navigating complex global markets.
            </p>
            <button className="bg-white text-slate-900 px-8 py-4 text-sm font-semibold hover:bg-slate-100 transition-colors flex items-center gap-2 shadow-sm">
              Schedule a Consultation <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="relative h-[400px] w-full hidden md:block">
            <img 
              src="/images/financial_hero.jpg" 
              alt="Corporate architecture" 
              className="absolute inset-0 w-full h-full object-cover shadow-2xl border border-slate-700"
            />
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="py-24 px-6 md:px-12 w-full max-w-6xl mx-auto border-b border-slate-200">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>Our Expertise</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Comprehensive financial structuring and asset management built on decades of institutional experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {SOLUTIONS.map((sol, i) => (
            <div key={i} className="flex flex-col">
              <div className="w-12 h-12 bg-slate-100 border border-slate-200 flex items-center justify-center mb-6 text-slate-700">
                <sol.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{sol.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{sol.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NUMBERS SECTION */}
      <section className="py-24 px-6 md:px-12 w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Scale with Confidence
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Our infrastructure is engineered for resilience. We partner with the world's most demanding institutions to execute trades, manage risk, and secure capital in volatile environments.
            </p>
            <ul className="space-y-4 mb-8">
              {['Regulated across 15+ jurisdictions', '24/7 dedicated institutional support', 'Direct market access to Tier-1 liquidity'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-px bg-slate-200 border border-slate-200">
            <div className="bg-white p-8 text-center flex flex-col justify-center h-48">
              <span className="text-4xl font-serif text-slate-900 mb-2">$42B+</span>
              <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Assets Under Management</span>
            </div>
            <div className="bg-white p-8 text-center flex flex-col justify-center h-48">
              <span className="text-4xl font-serif text-slate-900 mb-2">99.99%</span>
              <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">System Uptime</span>
            </div>
            <div className="bg-white p-8 text-center flex flex-col justify-center h-48">
              <span className="text-4xl font-serif text-slate-900 mb-2">135+</span>
              <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Currencies Supported</span>
            </div>
            <div className="bg-white p-8 text-center flex flex-col justify-center h-48">
              <span className="text-4xl font-serif text-slate-900 mb-2">12ms</span>
              <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Average Execution</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
