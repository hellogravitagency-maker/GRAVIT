import React from 'react';
import { motion } from 'motion/react';
import { Mail, ShieldCheck, Zap, Server, Check } from 'lucide-react';
import SEO from '../components/SEO';

const FEATURES = [
  { icon: ShieldCheck, title: 'Enterprise Security', desc: 'End-to-end encryption, advanced spam filtering, and automated threat detection.' },
  { icon: Zap, title: 'Instant Sync', desc: 'Real-time synchronization across all devices via ActiveSync and IMAP.' },
  { icon: Server, title: 'Dedicated Infrastructure', desc: 'High-availability servers guaranteeing 99.9% uptime for your communications.' }
];

const PRICING = [
  {
    name: 'Basic',
    price: '$5',
    storage: '50GB',
    features: ['Custom domain', 'Web & Mobile app', 'Standard support']
  },
  {
    name: 'Professional',
    price: '$12',
    storage: '250GB',
    features: ['Everything in Basic', 'Advanced threat protection', 'Archiving', '24/7 priority support']
  }
];

export default function BusinessEmail() {
  return (
    <div className="w-full bg-[#fcfcfc] text-[#111111] min-h-screen overflow-x-hidden font-sans selection:bg-[#111111] selection:text-white pb-32">
      <SEO 
        title="Business Email — GRAVIT" 
        description="Professional, secure email hosting for modern teams." 
        path="/business-email" 
      />

      {/* SWISS DESIGN HERO */}
      <section className="pt-40 pb-20 px-6 md:px-12 w-full max-w-7xl mx-auto border-b-2 border-[#111111]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] uppercase">
              Business<br />Email.
            </h1>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 pb-2"
          >
            <p className="text-xl font-medium leading-tight mb-8">
              Professional communication infrastructure.<br />
              Secure, fast, and completely reliable.
            </p>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#111111] text-white px-8 py-4 font-bold tracking-wide hover:bg-[#333333] transition-colors w-full md:w-auto uppercase text-sm"
            >
              Create Account
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* UTILITARIAN FEATURES GRID */}
      <section className="w-full max-w-7xl mx-auto border-b-2 border-[#111111]">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-[#111111]">
          {FEATURES.map((feat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 md:p-12 hover:bg-[#f0f0f0] transition-colors group cursor-default"
            >
              <feat.icon className="w-10 h-10 mb-8 text-[#111111] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{feat.title}</h3>
              <p className="text-lg font-medium leading-snug text-[#555555]">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRICING TABLE - STRICT GRID */}
      <section className="w-full max-w-7xl mx-auto py-24 px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-16">Plans & Pricing</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRICING.map((plan, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{ y: -8 }}
              className="border-2 border-[#111111] p-8 md:p-12 flex flex-col bg-white shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] transition-all hover:shadow-[12px_12px_0px_0px_rgba(17,17,17,1)]"
            >
              <h3 className="text-3xl font-bold uppercase tracking-tight mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-2 mb-8 pb-8 border-b-2 border-[#111111]">
                <span className="text-6xl font-bold tracking-tighter">{plan.price}</span>
                <span className="text-lg font-bold text-[#555555] uppercase">/ user / month</span>
              </div>
              
              <div className="mb-6 font-bold text-xl uppercase tracking-tight">
                Storage: {plan.storage}
              </div>
              
              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-4 text-lg font-medium">
                    <Check className="w-6 h-6 shrink-0 mt-0.5" strokeWidth={2} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <motion.button 
                whileTap={{ scale: 0.95 }}
                className="w-full border-2 border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white py-4 font-bold uppercase tracking-wide transition-colors"
              >
                Select {plan.name}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
