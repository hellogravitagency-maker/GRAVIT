import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const RECENT_MARKS = [
  { id: 1, name: "Aethel", industry: "FinTech", year: "2026", color: "bg-[#111]" },
  { id: 2, name: "Chronos", industry: "Luxury", year: "2025", color: "bg-[#1A1A1A]" },
  { id: 3, name: "Vanguard", industry: "Architecture", year: "2026", color: "bg-[#0A0A0A]" },
  { id: 4, name: "Lumina", industry: "SaaS", year: "2025", color: "bg-[#141414]" },
];

const PROCESS_STEPS = [
  { num: "01", title: "Discovery & Strategy", desc: "We deep-dive into your brand's core values, target audience, and market positioning to build a solid foundation." },
  { num: "02", title: "Concept Exploration", desc: "Our designers sketch and explore multiple visual directions, focusing on timelessness and scalability." },
  { num: "03", title: "Refinement", desc: "We narrow down to the strongest concept, meticulously tweaking proportions, typography, and color harmony." },
  { num: "04", title: "Delivery", desc: "You receive a comprehensive brand book, vector files, and guidelines for deploying your new identity." },
];

const PACKAGES = [
  {
    name: "Essential",
    price: "$2,500",
    desc: "Perfect for startups needing a strong initial mark.",
    features: ["Primary Logo Design", "Secondary Logo / Icon", "Color Palette", "Typography Selection", "Basic Brand Guidelines"],
    highlight: false,
  },
  {
    name: "Comprehensive",
    price: "$5,000",
    desc: "For established businesses ready to dominate their market.",
    features: ["Everything in Essential", "3 Logo Concepts", "Social Media Kit", "Stationery Design", "Comprehensive Brand Book"],
    highlight: true,
  }
];

export default function LogoDesign() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div ref={containerRef} className="w-full bg-[#030303] text-[#F5F5F5] font-sans min-h-screen overflow-x-hidden selection:bg-white selection:text-black">
      <SEO 
        title="Logo Design & Brand Identity — GRAVIT"
        description="Crafting iconic brand identities. We build timeless logo designs that resonate and drive recognition."
        path="/logo-design"
      />
      
      {/* HERO SECTION */}
      <section className="relative z-10 min-h-[90vh] flex flex-col justify-center px-6 md:px-12 pt-32 pb-16 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <div className="text-xs font-mono uppercase tracking-[0.4em] text-white/50 mb-8 inline-flex items-center gap-4 bg-white/5 px-5 py-2.5 rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Identity Design Studio
          </div>
          <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-heading font-medium tracking-tighter leading-[0.85] text-white mb-8">
            Visual <br /> <span className="text-white/40 italic">Identity.</span>
          </h1>
          <p className="text-xl md:text-3xl text-white/60 leading-relaxed font-light max-w-3xl">
            A logo is not just a mark—it’s the anchor of your entire brand ecosystem. We design minimalist, scalable, and timeless identities engineered to endure.
          </p>
        </motion.div>
      </section>

      {/* RECENT MARKS BENTO GRID */}
      <section className="relative z-10 py-24 px-6 md:px-12 w-full max-w-7xl mx-auto border-t border-white/10">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-medium tracking-tight">Recent Marks</h2>
          <span className="hidden md:block text-sm font-mono text-white/40 uppercase tracking-widest">Selected Works 25—26</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RECENT_MARKS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
              className={`aspect-square ${item.color} rounded-3xl border border-white/5 p-8 group relative overflow-hidden flex flex-col justify-between hover:border-white/20 transition-colors duration-500`}
            >
              <div className="flex justify-between items-start z-10">
                <span className="text-xs font-mono text-white/40 uppercase tracking-wider">{item.industry}</span>
                <span className="text-xs font-mono text-white/40">{item.year}</span>
              </div>
              
              <div className="flex-1 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                {/* Abstract logo placeholder */}
                <div className="w-24 h-24 border border-white/20 rounded-full flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="font-heading text-4xl">{item.name.charAt(0)}</span>
                </div>
              </div>

              <div className="z-10">
                <h3 className="text-lg font-medium tracking-wide">{item.name}</h3>
              </div>
              
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="relative z-10 py-32 bg-white text-black rounded-t-[3rem] mt-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-32">
          <div className="md:w-1/3 shrink-0">
            <div className="sticky top-32">
              <h2 className="text-4xl md:text-6xl font-heading font-medium tracking-tight mb-6">The Process</h2>
              <p className="text-black/60 text-lg leading-relaxed">
                Methodical, strategic, and iterative. Our process ensures that every decision serves a purpose.
              </p>
            </div>
          </div>
          
          <div className="md:w-2/3 flex flex-col gap-12 md:gap-24">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative border-t border-black/10 pt-8"
              >
                <span className="absolute -top-4 bg-white px-2 text-sm font-mono text-black/40">{step.num}</span>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">{step.title}</h3>
                <p className="text-black/70 text-lg md:text-xl leading-relaxed max-w-xl">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="relative z-10 py-32 px-6 md:px-12 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-medium tracking-tight mb-6">Investment</h2>
            <p className="text-black/60 text-lg max-w-2xl mx-auto">Transparent pricing for premium identity design.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {PACKAGES.map((pkg, i) => (
              <motion.div 
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ y: -8 }}
                className={`p-10 md:p-12 rounded-[2rem] border ${pkg.highlight ? 'bg-black text-white border-black shadow-[0_20px_60px_rgba(0,0,0,0.15)]' : 'bg-transparent border-black/10 hover:border-black/30 transition-colors'} flex flex-col cursor-default`}
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-medium mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-heading tracking-tight mb-4">{pkg.price}</div>
                  <p className={pkg.highlight ? 'text-white/70' : 'text-black/60'}>{pkg.desc}</p>
                </div>
                
                <div className="flex-1 flex flex-col gap-4 mb-12">
                  {pkg.features.map(f => (
                    <div key={f} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className={pkg.highlight ? 'text-white/50' : 'text-black/50'} />
                      <span className={pkg.highlight ? 'text-white/90' : 'text-black/80'}>{f}</span>
                    </div>
                  ))}
                </div>
                
                <a 
                  href="https://cal.com/gravitstudio/project-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-4 rounded-full text-center font-medium transition-transform hover:scale-[1.02] active:scale-95 ${pkg.highlight ? 'bg-white text-black' : 'bg-black text-white'}`}
                >
                  Initiate Project
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative z-10 py-24 px-6 md:px-12 w-full max-w-7xl mx-auto bg-[#030303]">
        <div className="bg-[#0A0A0A] border border-white/5 p-12 md:p-24 rounded-[3rem] flex flex-col items-center text-center group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/40 block mb-6 relative z-10">
            Next Steps
          </span>
          <h2 className="text-4xl md:text-7xl font-heading font-medium tracking-tight leading-tight text-white mb-10 relative z-10 max-w-3xl mx-auto">
            Ready to build something iconic?
          </h2>
          <Link
            to="/contact"
            className="relative z-10 inline-flex items-center gap-3 bg-white text-black px-10 py-5 text-sm font-medium rounded-full hover:scale-105 transition-transform duration-300"
          >
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
