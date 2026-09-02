import React from 'react';
import { motion } from 'motion/react';
import { Heart, Globe2, ShieldCheck, TrendingUp } from 'lucide-react';
import SEO from '../components/SEO';

export default function Donations() {
  return (
    <div className="w-full bg-[#f4f1ea] text-[#3d4a3e] min-h-screen overflow-x-hidden font-serif selection:bg-[#4a5d4c] selection:text-[#f4f1ea] pb-32">
      <SEO 
        title="Donations & Fundraising — GRAVIT" 
        description="Power your cause with seamless, high-converting donation flows." 
        path="/donations" 
      />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-32">
        
        {/* HERO SECTION */}
        <section className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-16 h-16 bg-[#e6e2d6] rounded-full flex items-center justify-center mx-auto mb-8 text-[#4a5d4c]">
              <Heart className="w-8 h-8 fill-current" />
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight mb-8 text-[#2c362d] leading-[0.9]" style={{ fontFamily: 'Georgia, serif' }}>
              Fund The <br className="hidden md:block"/> Future.
            </h1>
            
            <p className="text-xl md:text-2xl text-[#5c6e5e] max-w-3xl mx-auto mb-12 font-sans font-light leading-relaxed">
              Accept one-time and recurring donations globally. Empower your non-profit, open-source project, or community initiative with zero friction.
            </p>
            
            <button className="bg-[#4a5d4c] hover:bg-[#3d4a3e] text-[#f4f1ea] px-10 py-5 rounded-[2rem] font-sans text-lg font-medium transition-colors shadow-xl shadow-[#4a5d4c]/20">
              Start Campaign
            </button>
          </motion.div>
        </section>

        {/* ORGANIC MOCK CAMPAIGN CARD */}
        <section className="relative w-full max-w-4xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-white p-8 md:p-12 rounded-[3rem] shadow-[0_20px_50px_rgba(61,74,62,0.08)] flex flex-col md:flex-row gap-12 items-center"
          >
            <div className="w-full md:w-1/2 h-64 md:h-full min-h-[300px] rounded-[2rem] overflow-hidden relative">
              <img 
                src="/images/donations_hero.jpg" 
                alt="Conservation" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            <div className="w-full md:w-1/2 font-sans">
              <div className="text-sm font-bold text-[#8a9a8c] uppercase tracking-widest mb-4">Live Campaign</div>
              <h3 className="text-3xl font-serif text-[#2c362d] mb-4">Global Reforestation Initiative</h3>
              <p className="text-[#5c6e5e] mb-8 leading-relaxed">Join us in planting 1 million trees to restore critical ecosystems and combat climate change.</p>
              
              <div className="mb-8">
                <div className="flex justify-between text-sm mb-3 font-medium text-[#3d4a3e]">
                  <span>$425,000 raised</span>
                  <span>85%</span>
                </div>
                <div className="w-full h-3 bg-[#e6e2d6] rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    className="h-full bg-[#4a5d4c]"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-[#4a5d4c] text-white py-4 rounded-xl font-medium hover:bg-[#3d4a3e] transition-colors">
                  Donate $50
                </button>
                <button className="flex-1 bg-[#e6e2d6] text-[#3d4a3e] py-4 rounded-xl font-medium hover:bg-[#d6d0c4] transition-colors">
                  Custom
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* FEATURES */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Globe2, title: 'Global Reach', desc: 'Accept donations in over 100 currencies with localized payment methods like iDEAL and Alipay.' },
            { icon: TrendingUp, title: 'Recurring Revenue', desc: 'Convert one-time donors into monthly supporters with automated subscription billing.' },
            { icon: ShieldCheck, title: 'Fraud Protection', desc: 'Enterprise-grade risk management ensuring every transaction is secure and verified.' }
          ].map((feat, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              key={i}
              className="text-center md:text-left p-8 bg-white/40 rounded-[2rem] border border-white"
            >
              <div className="w-12 h-12 bg-[#4a5d4c] text-[#f4f1ea] rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6">
                <feat.icon className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-serif text-[#2c362d] mb-4">{feat.title}</h3>
              <p className="font-sans text-[#5c6e5e] leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </section>

      </div>
    </div>
  );
}
