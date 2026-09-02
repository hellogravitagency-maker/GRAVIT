import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Book, MessageCircle, FileText, ChevronDown, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const CATEGORIES = [
  { icon: Book, title: 'Getting Started', count: 12 },
  { icon: FileText, title: 'Billing & Plans', count: 8 },
  { icon: MessageCircle, title: 'Community', count: 24 },
];

const FAQS = [
  {
    question: "How do I connect a custom domain?",
    answer: "Navigate to Settings > Domains in your dashboard. Click 'Add Domain' and follow the wizard to update your DNS records with your registrar."
  },
  {
    question: "What happens if I exceed my bandwidth limit?",
    answer: "We don't hard-cap your traffic. If you consistently exceed your plan's limits, our team will reach out to help you upgrade to a tier that better suits your needs."
  },
  {
    question: "Can I invite team members?",
    answer: "Yes, all premium plans include team collaboration. You can invite members with specific roles (Admin, Editor, Viewer) from the Team settings page."
  },
  {
    question: "Do you offer educational discounts?",
    answer: "We offer a 50% discount for students and educators. Please contact support from your .edu email address to apply."
  }
];

export default function HelpCenter() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="w-full bg-[#fcfcfc] text-[#1a1a1a] min-h-screen overflow-x-hidden font-sans selection:bg-[#e2e8f0] selection:text-black pb-32">
      <SEO 
        title="Help Center — GRAVIT" 
        description="Find answers, guides, and support for your platform." 
        path="/help" 
      />

      {/* SOFT HEADER */}
      <section className="relative w-full max-w-5xl mx-auto px-6 md:px-12 pt-32 md:pt-48 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="text-sm font-medium text-slate-500 tracking-wide uppercase mb-4 block">Support Center</span>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6">
            How can we help?
          </h1>
          
          <div className="max-w-2xl mx-auto relative mt-12">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input 
              type="text" 
              placeholder="Search for articles, guides, and FAQs..."
              className="w-full bg-white border border-slate-200 text-slate-900 rounded-full py-5 pl-14 pr-6 text-lg shadow-sm shadow-slate-200/50 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all"
            />
          </div>
        </motion.div>
      </section>

      {/* CATEGORIES */}
      <section className="w-full max-w-5xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={cat.title}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all cursor-pointer group"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <cat.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
              <p className="text-slate-500">{cat.count} articles</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQS */}
      <section className="w-full max-w-3xl mx-auto px-6 md:px-12 py-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm"
            >
              <button 
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full text-left px-6 py-6 flex items-center justify-between focus:outline-none"
              >
                <span className="font-medium text-lg pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeFaq === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-slate-400 flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 text-slate-500 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STILL NEED HELP CTA */}
      <section className="w-full max-w-5xl mx-auto px-6 md:px-12 py-12">
        <div className="bg-slate-900 rounded-[2.5rem] p-12 md:p-16 text-center relative overflow-hidden flex flex-col items-center justify-center">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500 rounded-full blur-[80px] opacity-20"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500 rounded-full blur-[80px] opacity-20"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">Still need assistance?</h2>
            <p className="text-slate-300 text-lg mb-10 max-w-lg mx-auto">
              Our support team is available 24/7 to help you resolve any issues you might encounter.
            </p>
            <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 hover:bg-slate-100 transition-colors">
              Contact Support <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
