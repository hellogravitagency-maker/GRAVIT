import React from 'react';
import { motion } from 'motion/react';
import { BarChart3, Users, Target, Megaphone, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const FEATURES = [
  {
    icon: Users,
    title: 'Audience Segmentation',
    description: 'Group your contacts based on behavior, demographics, and engagement history for highly targeted campaigns.'
  },
  {
    icon: Target,
    title: 'Conversion Tracking',
    description: 'Monitor every click, signup, and purchase across all your active marketing channels in one unified dashboard.'
  },
  {
    icon: Megaphone,
    title: 'Omnichannel Campaigns',
    description: 'Launch synchronized marketing efforts across email, SMS, and social media from a single interface.'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Generate comprehensive reports with actionable insights to continuously optimize your return on ad spend (ROAS).'
  }
];

export default function MarketingTools() {
  return (
    <div className="w-full bg-[#f8fafc] text-[#334155] min-h-screen overflow-x-hidden font-sans selection:bg-[#bae6fd] selection:text-[#0f172a] pb-32">
      <SEO 
        title="Marketing Tools — GRAVIT" 
        description="Comprehensive marketing automation and analytics." 
        path="/marketing-tools" 
      />

      {/* HERO SECTION */}
      <section className="bg-white border-b border-[#e2e8f0] pt-40 pb-24 px-6 md:px-12 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#0f172a] mb-6 tracking-tight">
            Data-Driven Marketing. <br className="hidden md:block"/> Simplified.
          </h1>
          <p className="text-lg md:text-xl text-[#64748b] max-w-2xl mx-auto mb-10 leading-relaxed">
            Empower your marketing team with enterprise-grade tools to capture leads, automate workflows, and measure ROI with precision.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-3 rounded-md font-medium transition-colors shadow-sm w-full sm:w-auto">
              Start Free Trial
            </motion.button>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="bg-white border border-[#cbd5e1] hover:bg-[#f1f5f9] text-[#334155] px-8 py-3 rounded-md font-medium transition-colors w-full sm:w-auto">
              Request Demo
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* DASHBOARD MOCKUP */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full max-w-6xl mx-auto px-6 md:px-12 -mt-12 relative z-10 mb-24"
      >
        <div className="bg-white rounded-lg border border-[#e2e8f0] shadow-xl p-2 hover:shadow-2xl transition-shadow duration-500">
          <div className="bg-[#f8fafc] rounded border border-[#e2e8f0] h-[400px] md:h-[600px] w-full flex items-center justify-center overflow-hidden relative">
            {/* Abstract representation of a dashboard rather than a real image to keep it clean */}
            <div className="absolute inset-0 p-8 grid grid-cols-3 gap-6 opacity-50">
              <div className="col-span-3 flex justify-between items-center border-b border-[#cbd5e1] pb-4">
                <div className="w-32 h-6 bg-[#cbd5e1] rounded"></div>
                <div className="w-16 h-6 bg-[#cbd5e1] rounded"></div>
              </div>
              <div className="col-span-2 bg-white border border-[#cbd5e1] rounded shadow-sm p-4 h-64">
                <div className="w-full h-full border-b border-l border-[#cbd5e1] flex items-end justify-around pb-2">
                  <div className="w-8 bg-[#3b82f6] h-1/3 rounded-t"></div>
                  <div className="w-8 bg-[#3b82f6] h-1/2 rounded-t"></div>
                  <div className="w-8 bg-[#3b82f6] h-3/4 rounded-t"></div>
                  <div className="w-8 bg-[#3b82f6] h-2/3 rounded-t"></div>
                  <div className="w-8 bg-[#3b82f6] h-full rounded-t"></div>
                </div>
              </div>
              <div className="col-span-1 grid grid-rows-2 gap-6 h-64">
                <div className="bg-white border border-[#cbd5e1] rounded shadow-sm p-4 flex flex-col justify-center">
                  <div className="w-16 h-4 bg-[#cbd5e1] rounded mb-2"></div>
                  <div className="text-3xl font-bold text-[#0f172a]">24.5k</div>
                </div>
                <div className="bg-white border border-[#cbd5e1] rounded shadow-sm p-4 flex flex-col justify-center">
                  <div className="w-16 h-4 bg-[#cbd5e1] rounded mb-2"></div>
                  <div className="text-3xl font-bold text-[#0f172a]">8.2%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FEATURES GRID */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-4 tracking-tight">Everything you need to grow</h2>
          <p className="text-[#64748b] max-w-2xl mx-auto">Our comprehensive suite of tools helps you manage the entire customer journey from awareness to retention.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURES.map((feat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white p-8 rounded-lg border border-[#e2e8f0] flex gap-6 hover:border-[#94a3b8] hover:shadow-md transition-all cursor-default"
            >
              <div className="w-12 h-12 bg-[#eff6ff] rounded flex items-center justify-center shrink-0">
                <feat.icon className="w-6 h-6 text-[#2563eb]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">{feat.title}</h3>
                <p className="text-[#64748b] leading-relaxed">{feat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
