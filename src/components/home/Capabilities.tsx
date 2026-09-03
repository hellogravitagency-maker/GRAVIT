import React from 'react';
import { motion } from 'motion/react';
import { Palette, Code2, Workflow, LayoutTemplate, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Capabilities() {
  return (
    <section className="py-24 md:py-32 w-full bg-background overflow-hidden relative">
      {/* Background ambient light removed per request for pure black */}

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* ── Header Section ────────────────────────────────────────── */}
        <div className="flex flex-col items-center text-center mb-20 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6 bg-secondary/5 px-4 py-2 rounded-full border border-black/5 dark:border-white/5"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary">Features</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.5rem,5vw,3.5rem)] font-medium tracking-tight mb-6 leading-[1.1]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Digital Excellence <br className="hidden md:block"/> That Scales
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-secondary text-lg md:text-xl max-w-2xl font-light"
          >
            From strategy to engineering to design — unified under one roof to deliver products that command authority.
          </motion.p>
        </div>

        {/* ── 3-Column Layout Grid ──────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full items-start">
          
          {/* Col 1: Design Intelligence */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0, 
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.1, delayChildren: 0.2 } 
              }
            }}
            className="flex flex-col gap-4 bg-white dark:bg-black rounded-[24px] border border-black/5 dark:border-white/10 p-2 shadow-sm group"
          >
            <div className="w-full aspect-[4/3] bg-[#f8f9fa] dark:bg-[#111] rounded-[18px] border border-black/5 dark:border-white/5 overflow-hidden relative flex flex-col items-center justify-center p-8">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none opacity-50" />
               
               {/* UI Cards Animation */}
               <div className="relative z-10 w-full h-full flex flex-col gap-3">
                 <motion.div 
                   variants={{
                     hidden: { rotate: -3, scale: 0.95, opacity: 0 },
                     visible: { rotate: 0, scale: 1, opacity: 1, transition: { duration: 0.7, ease: [0.16,1,0.3,1] } }
                   }}
                   className="w-[90%] h-14 rounded-xl bg-white dark:bg-[#1a1a1a] border border-black/5 dark:border-white/5 shadow-sm flex items-center px-4 gap-4 hover:scale-105 transition-transform"
                 >
                   <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><Palette size={16} className="text-primary"/></div>
                   <div className="h-2 w-24 bg-muted-foreground/20 rounded-full" />
                 </motion.div>
                 <motion.div 
                   variants={{
                     hidden: { rotate: 2, scale: 0.95, opacity: 0 },
                     visible: { rotate: 0, scale: 1, opacity: 1, transition: { duration: 0.7, ease: [0.16,1,0.3,1] } }
                   }}
                   className="w-full h-20 rounded-xl bg-white dark:bg-[#1a1a1a] border border-black/5 dark:border-white/5 shadow-sm flex items-center px-4 gap-4 hover:scale-105 transition-transform"
                 >
                   <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><LayoutTemplate size={16} className="text-primary"/></div>
                   <div className="flex flex-col gap-2.5 flex-1">
                     <div className="h-2 w-32 bg-muted-foreground/30 rounded-full" />
                     <div className="h-2 w-16 bg-muted-foreground/15 rounded-full" />
                   </div>
                 </motion.div>
                 <motion.div 
                   variants={{
                     hidden: { rotate: -1, scale: 0.95, opacity: 0 },
                     visible: { rotate: 0, scale: 1, opacity: 1, transition: { duration: 0.7, ease: [0.16,1,0.3,1] } }
                   }}
                   className="w-[85%] h-14 rounded-xl bg-white dark:bg-[#1a1a1a] border border-black/5 dark:border-white/5 shadow-sm flex items-center px-4 gap-4 ml-auto hover:scale-105 transition-transform"
                 >
                   <div className="h-2 w-full bg-muted-foreground/20 rounded-full" />
                 </motion.div>
               </div>
            </div>
            
            <div className="flex flex-col px-6 pb-8 pt-4">
              <h3 className="text-xl font-medium tracking-tight mb-4">Design Intelligence</h3>
              <div className="w-full h-[1px] bg-gradient-to-r from-border via-border to-transparent mb-4" />
              <p className="text-secondary text-[15px] leading-relaxed">
                Data-driven brand identities, stunning UI systems, and visual languages that convert visitors into loyal customers.
              </p>
            </div>
          </motion.div>

          {/* Col 2: Engineering & AI */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0, 
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.2, delayChildren: 0.3 } 
              }
            }}
            className="flex flex-col gap-4 bg-white dark:bg-black rounded-[24px] border border-black/5 dark:border-white/10 p-2 shadow-sm lg:translate-y-8 group"
          >
            <div className="flex flex-col px-6 pt-8 pb-4">
              <h3 className="text-xl font-medium tracking-tight mb-4">Built for Scale</h3>
              <div className="w-full h-[1px] bg-gradient-to-r from-border via-border to-transparent mb-4" />
              <p className="text-secondary text-[15px] leading-relaxed">
                High-performance architecture and AI-driven platforms that power modern digital products.
              </p>
            </div>

            <div className="w-full aspect-[4/3] bg-[#f8f9fa] dark:bg-[#111] rounded-[18px] border border-black/5 dark:border-white/5 overflow-hidden relative flex flex-col items-center justify-center p-8">
               {/* Grid Pattern */}
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
               
               {/* Chat / Process Sequence */}
               <div className="relative z-10 w-full flex flex-col gap-4 font-mono text-[11px] tracking-tight">
                  <motion.div 
                    variants={{
                      hidden: { x: 20, opacity: 0 },
                      visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: [0.16,1,0.3,1] } }
                    }}
                    className="self-end bg-primary text-primary-foreground px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm"
                  >
                    Initializing cloud architecture...
                  </motion.div>
                  <motion.div 
                    variants={{
                      hidden: { x: -20, opacity: 0 },
                      visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: [0.16,1,0.3,1] } }
                    }}
                    className="self-start bg-white dark:bg-[#1a1a1a] border border-black/5 dark:border-white/5 text-primary px-4 py-2.5 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm"
                  >
                    <span className="flex items-center gap-2"><Workflow size={12} className="text-blue-500"/> Distributed systems active.</span>
                  </motion.div>
                  <motion.div 
                    variants={{
                      hidden: { x: 20, opacity: 0 },
                      visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: [0.16,1,0.3,1] } }
                    }}
                    className="self-end bg-primary text-primary-foreground px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm"
                  >
                    <span className="flex items-center gap-2"><Code2 size={12}/> Deploying models to edge.</span>
                  </motion.div>
               </div>
            </div>
          </motion.div>

          {/* Col 3: SEO & Performance */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0, 
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.1, delayChildren: 0.4 } 
              }
            }}
            className="flex flex-col gap-4 bg-white dark:bg-black rounded-[24px] border border-black/5 dark:border-white/10 p-2 shadow-sm group"
          >
            <div className="w-full aspect-[4/3] bg-[#f8f9fa] dark:bg-[#111] rounded-[18px] border border-black/5 dark:border-white/5 overflow-hidden relative flex flex-col justify-end p-8">
               
               <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none opacity-50" />
               
               {/* Analytics Bar Chart Graphic */}
               <div className="relative z-10 w-full h-[70%] flex items-end gap-3 px-2">
                 {[40, 65, 45, 80, 55, 95].map((h, i) => (
                    <div 
                      key={i}
                      className="relative flex-1 bg-primary/10 rounded-t-sm origin-bottom overflow-hidden hover:opacity-80 transition-opacity"
                      style={{ height: `${h}%` }}
                    >
                      <motion.div 
                        variants={{
                          hidden: { scaleY: 0 },
                          visible: { scaleY: 1, transition: { duration: 0.7, ease: [0.16,1,0.3,1] } }
                        }}
                        className="absolute bottom-0 left-0 right-0 bg-primary w-full origin-bottom"
                        style={{ height: '100%' }}
                      />
                    </div>
                 ))}
               </div>
            </div>
            
            <div className="flex flex-col px-6 pb-8 pt-4">
              <h3 className="text-xl font-medium tracking-tight mb-4">Performance & Growth</h3>
              <div className="w-full h-[1px] bg-gradient-to-r from-border via-border to-transparent mb-4" />
              <p className="text-secondary text-[15px] leading-relaxed">
                Technical audits, analytics integration, and organic strategies that dominate search and drive revenue.
              </p>
            </div>
          </motion.div>

        </div>
        
        {/* Footer Link / View All */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mt-16"
        >
          <Link to="/services" className="inline-flex items-center gap-2 group text-sm font-medium hover:text-primary transition-colors">
            View all capabilities
            <span className="w-8 h-8 rounded-full border border-border flex items-center justify-center bg-secondary/5 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
              <ArrowUpRight size={14} />
            </span>
          </Link>
        </motion.div>
        
      </div>
    </section>
  );
}
