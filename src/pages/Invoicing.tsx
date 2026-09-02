import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { CreditCard, FileText, Globe, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

const FEATURES = [
  {
    icon: Globe,
    title: 'Global Payments',
    description: 'Accept 135+ currencies. Settle in your preferred currency instantly with zero FX fees.',
  },
  {
    icon: FileText,
    title: 'Smart Invoices',
    description: 'Automated tax calculation, recurring billing, and branded invoice portals.',
  },
  {
    icon: CheckCircle2,
    title: 'Auto-Reconciliation',
    description: 'Sync seamlessly with QuickBooks, Xero, and NetSuite. Close your books faster.',
  }
];

export default function Invoicing() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="w-full bg-[#030303] text-[#ededed] min-h-screen overflow-x-hidden font-sans selection:bg-indigo-500/30 selection:text-white pb-32">
      <SEO 
        title="Invoicing & Billing — GRAVIT" 
        description="Enterprise-grade billing infrastructure for modern platforms." 
        path="/invoicing" 
      />

      {/* AMBIENT GLOWS */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/20 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[30%] h-[50%] bg-purple-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 pt-32 md:pt-48">
        
        {/* HEADER SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.8)]" />
              <span className="text-xs font-medium uppercase tracking-widest text-white/70">Financial Infrastructure</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/30">
              Billing, <br/>Beautifully <br/>Engineered.
            </h1>
            
            <p className="text-xl text-white/50 leading-relaxed mb-10 max-w-lg font-light">
              Automate your revenue operations with precision. From one-off invoices to complex usage-based subscriptions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform flex items-center justify-center gap-2">
                Get Started <ArrowUpRight className="w-4 h-4" />
              </button>
              <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors backdrop-blur-md flex items-center justify-center">
                View Documentation
              </button>
            </div>
          </motion.div>

          {/* MOCK INVOICE CARD (GLASSMORPHISM) */}
          <motion.div 
            style={{ y: y1 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Background decorative card */}
            <motion.div 
              initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
              animate={{ opacity: 1, rotate: -5, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute inset-0 max-w-md mx-auto bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 rounded-3xl backdrop-blur-3xl transform origin-bottom-right"
            />
            
            {/* Foreground Invoice */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md bg-black/40 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl overflow-hidden"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-50 pointer-events-none" />
              
              <div className="flex justify-between items-start mb-12">
                <div>
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-4">
                    <div className="w-5 h-5 bg-black rounded-sm" />
                  </div>
                  <h3 className="text-xl font-medium text-white">Invoice INV-001</h3>
                  <p className="text-sm text-white/40">Due in 14 days</p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Pending
                  </span>
                </div>
              </div>

              <div className="space-y-6 mb-12">
                {[
                  { item: 'Enterprise License', amount: '$4,999.00' },
                  { item: 'API Usage (Overage)', amount: '$124.50' },
                  { item: 'Priority Support', amount: '$500.00' }
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center pb-6 border-b border-white/10 last:border-0 last:pb-0">
                    <span className="text-white/70">{row.item}</span>
                    <span className="text-white font-medium">{row.amount}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/10 flex justify-between items-center mb-8">
                <span className="text-white/50">Total Due</span>
                <span className="text-3xl font-semibold text-white tracking-tight">$5,623.50</span>
              </div>

              <button className="w-full bg-indigo-500 hover:bg-indigo-400 text-white py-4 rounded-xl font-medium transition-colors shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                Pay Now
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* FEATURES GRID */}
        <div className="py-24 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feat, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                key={i} 
                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors backdrop-blur-sm group"
              >
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                  <feat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">{feat.title}</h3>
                <p className="text-white/50 leading-relaxed font-light">{feat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
