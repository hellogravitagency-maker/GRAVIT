import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, MousePointer2, Layout, Layers } from 'lucide-react';

export default function ServiceUIUX() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scrollY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const features = [
    { title: "User Research", desc: "Insights & persona mapping" },
    { title: "Wireframing", desc: "Structural layout planning" },
    { title: "UI Design", desc: "High-fidelity visual systems" },
    { title: "Prototyping", desc: "Interactive user flows" }
  ];

  return (
    <section ref={containerRef} className="py-16 md:py-24 lg:py-32 relative border-t border-black/5 dark:border-white/5 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row-reverse gap-12 md:gap-16 lg:gap-24 items-center">
        
        {/* Right (Text Content) - Swapped for alternate layout */}
        <div className="flex-1 w-full flex flex-col items-start z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-secondary">Service 02</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-7xl display-editorial mb-6 text-primary tracking-tight">
              UI/UX <span className="text-primary/40 italic">Design.</span>
            </h2>
            
            <p className="text-secondary text-sm md:text-base lg:text-lg mb-8 md:mb-12 max-w-xl leading-relaxed font-light">
              Our design process focuses on creating intuitive, beautiful interfaces that users love. We combine user research, modern design principles, and cutting-edge tools to deliver exceptional experiences.
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
                  <span className="text-sm font-medium text-primary/90">{feature.title}</span>
                  <span className="text-xs text-primary/40 font-light">{feature.desc}</span>
                </motion.div>
              ))}
            </div>

            <a 
              href="https://cal.com/gravitstudio/project-call"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-primary px-8 py-4 rounded-full font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Initiate Project
              <ArrowUpRight size={16} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>
          </motion.div>
        </div>

        {/* Left: Motion Card - UI/UX visualization */}
        <div className="flex-1 w-full flex justify-center lg:justify-start relative">
          <motion.div 
            style={{ y: scrollY, opacity }}
            className="relative w-full max-w-[500px] aspect-square md:aspect-[4/3] lg:aspect-square bg-white dark:bg-[#050505] rounded-3xl border border-black/10 dark:border-white/10 shadow-xl overflow-hidden flex items-center justify-center p-8 group"
            ref={cardRef}
          >
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M0 40L40 40L40 0%22 fill=%22none%22 stroke=%22currentColor%22 stroke-width=%221%22/%3E%3C/svg%3E')" }} />

            {/* Abstract UI Composition */}
            <div className="relative w-full h-full max-w-[320px] max-h-[320px]">
              {/* Wireframe Skeleton (Background) */}
              <motion.div 
                className="absolute inset-0 border border-black/10 dark:border-white/10 rounded-2xl p-4 flex flex-col gap-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-1/3 h-4 bg-black/5 dark:bg-white/5 rounded-md" />
                <div className="flex-1 bg-black/5 dark:bg-white/5 rounded-xl border border-black/5 dark:border-white/5 flex items-center justify-center overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-50" />
                   <Layout className="text-primary/50 w-12 h-12" />
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-1/2 h-8 bg-black/5 dark:bg-white/5 rounded-md" />
                  <div className="w-8 h-8 rounded-full bg-black/10 dark:bg-white/10" />
                </div>
              </motion.div>

              {/* Floating UI Elements */}
              <motion.div 
                className="absolute top-1/4 -right-4 bg-white dark:bg-[#111] border border-black/10 dark:border-white/20 shadow-2xl rounded-xl p-3 w-40 flex items-center gap-3 backdrop-blur-md"
                initial={{ opacity: 0, x: 20, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6, type: "spring", bounce: 0.4 }}
              >
                <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center">
                  <Layers className="w-3 h-3 text-blue-400" />
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <div className="h-1.5 w-full bg-black/10 dark:bg-white/20 rounded-full" />
                  <div className="h-1.5 w-2/3 bg-black/5 dark:bg-white/10 rounded-full" />
                </div>
              </motion.div>

              <motion.div 
                className="absolute bottom-1/4 -left-6 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-2xl shadow-blue-900/50 rounded-full px-5 py-2.5 flex items-center gap-2 text-xs font-medium text-white"
                initial={{ opacity: 0, x: -20, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6, type: "spring", bounce: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <span>Primary Action</span>
              </motion.div>

              {/* Custom Cursor */}
              <motion.div
                className="absolute z-20 pointer-events-none"
                initial={{ x: 200, y: 200, opacity: 0 }}
                whileInView={{ x: 60, y: 200, opacity: 1 }}
                viewport={{ once: true }}
                animate={{
                  x: [60, -10, 40, 60],
                  y: [200, 160, 240, 200],
                }}
                //@ts-ignore
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                  delay: 1.8
                }}
              >
                <MousePointer2 className="w-6 h-6 text-primary drop-shadow-md transform -rotate-12" fill="currentColor" />
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
