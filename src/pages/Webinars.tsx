import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Play, Users, MessageCircle, CalendarDays } from 'lucide-react';
import SEO from '../components/SEO';

export default function Webinars() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <div className="w-full bg-[#0a0a0a] text-[#ffffff] min-h-screen overflow-x-hidden font-sans selection:bg-red-600/30 selection:text-white pb-32">
      <SEO 
        title="Webinars & Events — GRAVIT" 
        description="Host cinematic virtual events that captivate." 
        path="/webinars" 
      />

      {/* CINEMATIC HERO */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 pt-32 overflow-hidden">
        
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] bg-red-600/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block border border-red-900/50 bg-red-900/20 text-red-500 px-4 py-1 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-8">
              Live Broadcast Engine
            </span>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.85]" style={{ textShadow: '0 0 40px rgba(220, 38, 38, 0.4)' }}>
              Command The <br /> Attention.
            </h1>
            <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-12 font-light">
              Host high-fidelity virtual events, webinars, and keynotes with zero latency and absolute reliability.
            </p>

            {/* BIG PLAY BUTTON */}
            <div className="relative inline-flex items-center justify-center group cursor-pointer">
              <div className="absolute inset-0 bg-red-600 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
              <button className="relative z-10 bg-red-600 hover:bg-red-500 text-white w-24 h-24 rounded-full flex items-center justify-center transition-transform hover:scale-110">
                <Play className="w-8 h-8 ml-2 fill-white" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MOCK THEATER / PLAYER */}
      <section className="relative z-20 w-full max-w-6xl mx-auto px-6 md:px-12 -mt-20">
        <motion.div 
          style={{ y: y1 }}
          className="relative aspect-video bg-black border border-white/10 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] flex items-center justify-center group"
        >
          <div className="absolute inset-0 bg-[url('/images/webinars_hero.jpg')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-1000 mix-blend-luminosity" />
          
          {/* Controls UI Overlay */}
          <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
              <div className="w-1/3 h-full bg-red-600 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              </div>
            </div>
            <div className="flex justify-between items-center text-xs font-bold tracking-widest text-white/50 uppercase">
              <span>LIVE • 14:23:09</span>
              <span>10,402 VIEWERS</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FEATURES ROW */}
      <section className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left border-t border-white/10 pt-20">
          {[
            { icon: Users, title: 'Massive Scale', desc: 'Support up to 100,000 concurrent viewers without breaking a sweat.' },
            { icon: MessageCircle, title: 'Real-time Chat', desc: 'Moderated Q&A, polls, and emoji reactions with zero lag.' },
            { icon: CalendarDays, title: 'Automated Replays', desc: 'Instantly convert live broadcasts into evergreen on-demand content.' }
          ].map((feat, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              key={i}
            >
              <feat.icon className="w-8 h-8 text-red-500 mb-6 mx-auto md:mx-0" />
              <h3 className="text-xl font-bold uppercase tracking-wide mb-3">{feat.title}</h3>
              <p className="text-white/50 leading-relaxed font-light">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
