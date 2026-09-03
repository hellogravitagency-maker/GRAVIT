import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Video, UserPlus, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const FEATURES = [
  { icon: Calendar, title: 'Smart Sync', desc: 'Connects with Google, Outlook, and iCloud to prevent double-booking.' },
  { icon: Clock, title: 'Timezone Intel', desc: 'Automatically detects and adapts to your client\'s local timezone.' },
  { icon: Video, title: 'Auto Conferencing', desc: 'Generates unique Zoom or Meet links for every booked session.' }
];

export default function Scheduling() {
  return (
    <div className="w-full bg-[#fdfaf6] text-[#4a4238] min-h-screen overflow-x-hidden font-sans selection:bg-[#f3e5d8] selection:text-[#4a4238] pb-32">
      <SEO 
        title="Scheduling — GRAVIT" 
        description="Effortless booking and time management." 
        path="/scheduling" 
      />

      {/* ABSTRACT CALM BACKGROUND SHAPES */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-[#f9f1e7] blur-[80px] opacity-70"
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#f0f4f1] blur-[100px] opacity-70"
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 pt-32 md:pt-40">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-sm font-medium tracking-widest uppercase text-[#9e8f7e] mb-6 block">Time Management</span>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-[#2c2721] leading-tight mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
              Protect your <br/>
              <span className="italic text-[#b68d6c]">most valuable</span> <br/>
              resource.
            </h1>
            <p className="text-xl text-[#7a6e62] font-light leading-relaxed mb-10 max-w-lg">
              Eliminate the back-and-forth emails. Share your availability with a single link and let clients book the perfect time, instantly.
            </p>
            
            <button className="bg-[#4a4238] text-white px-8 py-4 rounded-full font-medium hover:bg-[#2c2721] transition-all flex items-center gap-3 shadow-lg shadow-[#4a4238]/20 group">
              Start Free Trial 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* MOCK UI CALENDAR (FLOATING) */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="relative h-[500px] flex items-center justify-center"
          >
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute z-20 bg-white/80 backdrop-blur-xl border border-white/50 p-6 rounded-[2rem] shadow-[0_20px_60px_rgba(74,66,56,0.08)] w-full max-w-sm transition-all hover:shadow-[0_30px_70px_rgba(74,66,56,0.12)]"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#f3e5d8] rounded-full flex items-center justify-center text-[#4a4238]">
                    <UserPlus className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2c2721]">Design Consultation</h3>
                    <p className="text-sm text-[#9e8f7e]">45 min</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-sm font-medium text-[#7a6e62] mb-2">Select a time</div>
                {['09:00 AM', '11:30 AM', '02:15 PM'].map((time, i) => (
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    key={i}
                    className="border border-[#e6ded5] bg-white rounded-xl p-4 flex justify-between items-center cursor-pointer hover:border-[#b68d6c] hover:shadow-sm transition-all"
                  >
                    <span className="font-medium text-[#4a4238]">{time}</span>
                    <span className="text-xs text-[#9e8f7e] uppercase tracking-wider">Available</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Decorative elements behind */}
            <motion.div
               animate={{ y: [-10, 10, -10] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-10 right-0 w-32 h-32 bg-[#e8f0ec] rounded-full blur-xl z-10"
            />
          </motion.div>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feat, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              key={i} 
              className="bg-white/60 backdrop-blur-md border border-white p-8 rounded-3xl hover:bg-white transition-all shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 bg-[#f9f1e7] text-[#b68d6c] rounded-full flex items-center justify-center mb-6">
                <feat.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-[#2c2721] mb-3">{feat.title}</h3>
              <p className="text-[#7a6e62] leading-relaxed font-light">{feat.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
