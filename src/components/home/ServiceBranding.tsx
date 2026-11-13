import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceBranding() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scrollY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  // Interactive States
  const colors = [
    { id: 'white', hex: '#FFFFFF', name: 'Base' },
    { id: 'green', hex: '#10B981', name: 'Brand' },
    { id: 'orange', hex: '#F97316', name: 'Accent' },
  ];
  const [activeColor, setActiveColor] = useState(colors[0]);

  const typography = [
    { id: 'serif', family: 'font-serif', label: 'Editorial', chars: 'Aa' },
    { id: 'sans', family: 'font-sans', label: 'Modern', chars: 'Aa' },
    { id: 'mono', family: 'font-mono', label: 'System', chars: '{ }' },
  ];
  const [typeIndex, setTypeIndex] = useState(0);
  const activeType = typography[typeIndex];

  const features = [
    { title: "Brand Positioning", desc: "Strategic foundation & voice" },
    { title: "Identity Systems", desc: "Logos, marks & typography" },
    { title: "Design Systems", desc: "Scalable UI/UX guidelines" },
    { title: "Brand Collateral", desc: "Digital & physical assets" }
  ];

  return (
    <section ref={containerRef} className="py-14 md:py-20 lg:py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row gap-12 md:gap-16 lg:gap-24 items-center">
        
        {/* Left: Text Content */}
        <div className="flex-1 w-full flex flex-col items-start z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <p className="text-sm md:text-[17px] font-medium text-accent mb-4">Service 01</p>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl display-editorial mb-6 text-primary">
              Brand <span className="text-muted">Identity.</span>
            </h2>
            
            <p className="text-secondary text-lg md:text-xl mb-10 md:mb-12 max-w-xl leading-relaxed tracking-[-0.015em]">
              We forge iconic brand identities designed for the modern digital landscape. From foundational logo marks to comprehensive visual systems, we craft cohesive narratives that command attention.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-10 md:mb-12">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1), duration: 0.5 }}
                  className="flex flex-col gap-1 border-l border-black/10 dark:border-white/10 pl-4 relative before:absolute before:left-[-1px] before:top-0 before:h-0 before:w-[1px] before:bg-primary hover:before:h-full before:transition-all before:duration-300"
                >
                  <span className="text-base md:text-[17px] font-semibold tracking-[-0.02em] text-primary">{feature.title}</span>
                  <span className="text-sm text-secondary">{feature.desc}</span>
                </motion.div>
              ))}
            </div>

            <Link 
              to="/contact"
              className="group inline-flex items-center gap-1.5 text-[15px] md:text-[17px] font-medium text-accent hover:underline underline-offset-4"
            >
              Start a project
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        <div className="flex-1 w-full flex justify-center lg:justify-end relative">
          <motion.div 
            style={{ y: scrollY }}
            className="relative w-full max-w-[500px] aspect-square md:aspect-[4/3] lg:aspect-square bg-surface-hover rounded-[28px] border border-border-subtle shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)] overflow-hidden flex flex-col p-8 group"
            ref={cardRef}
          >
            {/* Top Section: Specs */}
            <motion.div className="flex justify-between items-start w-full z-20">
              
              {/* Typography Spec */}
              <motion.div 
                onClick={() => setTypeIndex((prev) => (prev + 1) % typography.length)}
                className="flex flex-col gap-1 cursor-pointer group/type"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-[9px] font-mono tracking-widest text-primary/40 uppercase flex items-center gap-2">
                  Primary Type
                  <span className="opacity-0 group-hover/type:opacity-100 transition-opacity text-[8px] text-secondary">Click to cycle</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className={`text-4xl text-primary ${activeType.family} tracking-tighter`}>{activeType.chars}</span>
                  <span className={`text-sm text-secondary ${activeType.family}`}>{activeType.label}</span>
                </div>
              </motion.div>

              {/* Grid System Spec */}
              <motion.div 
                className="flex flex-col gap-2 items-end pointer-events-none"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-[9px] font-mono tracking-widest text-primary/40 uppercase">Grid System</div>
                <div className="grid grid-cols-4 gap-1.5">
                  {[...Array(16)].map((_, i) => (
                    <motion.div 
                      key={i} 
                      className="w-2.5 h-2.5 rounded-[2px]"
                      animate={{ 
                        backgroundColor: [5, 6, 9, 10].includes(i) ? activeColor.hex : 'var(--primary-10, rgba(128,128,128,0.1))',
                      }}
                    />
                  ))}
                </div>
              </motion.div>

            </motion.div>

            {/* Center: Minimal Gravit Logo Showcase */}
            <motion.div className="flex-1 flex flex-col items-center justify-center w-full z-10 py-8 text-primary">
               <motion.svg 
                 viewBox="0 0 200 200" 
                 className="w-32 h-32 overflow-visible text-primary"
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
               >
                  <motion.path 
                    d="M138 55 A55 55 0 1 0 138 145" 
                    fill="none" 
                    stroke="currentColor"
                    strokeWidth="16" 
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                  />
                  <motion.line 
                    x1="138" y1="100" x2="102" y2="100" 
                    stroke="currentColor"
                    strokeWidth="16" 
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                  />
               </motion.svg>
               <motion.div 
                 className={`text-2xl mt-4 tracking-[0.2em] text-primary transition-all duration-300 ${activeType.family}`}
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.4 }}
               >
                 GRAVIT
               </motion.div>
            </motion.div>

            {/* Bottom: Color Swatches */}
            <div className="flex justify-center w-full z-20 mt-auto">
              <motion.div 
                className="flex gap-4 p-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {colors.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setActiveColor(c)}
                    className="flex flex-col gap-2 items-center group/btn relative cursor-pointer"
                  >
                    <motion.div 
                      className="w-8 h-8 rounded-full border border-black/20 dark:border-white/20 transition-transform duration-300 group-hover/btn:scale-110 flex items-center justify-center" 
                      style={{ backgroundColor: c.hex }}
                      animate={{ 
                        scale: activeColor.id === c.id ? 1.15 : 1,
                        borderColor: activeColor.id === c.id ? c.hex : 'rgba(128,128,128,0.2)'
                      }}
                    >
                      {activeColor.id === c.id && (
                        <motion.div 
                          layoutId="activeColorRing"
                          className="absolute -inset-1.5 border border-white/30 rounded-full pointer-events-none"
                        />
                      )}
                    </motion.div>
                    <div className="text-[10px] font-mono tracking-widest text-white/70">{c.hex}</div>
                  </button>
                ))}
              </motion.div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
