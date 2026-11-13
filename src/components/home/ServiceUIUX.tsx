import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, MousePointer2, Layout, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceUIUX() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scrollY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const features = [
    { title: "User Research", desc: "Insights & persona mapping" },
    { title: "Wireframing", desc: "Structural layout planning" },
    { title: "UI Design", desc: "High-fidelity visual systems" },
    { title: "Prototyping", desc: "Interactive user flows" }
  ];

  return (
    <section ref={containerRef} className="py-14 md:py-20 lg:py-24 relative overflow-hidden bg-background">
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
            <p className="text-sm md:text-[17px] font-medium text-accent mb-4">Service 02</p>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl display-editorial mb-6 text-primary">
              UI/UX <span className="text-muted">Design.</span>
            </h2>
            
            <p className="text-secondary text-lg md:text-xl mb-10 md:mb-12 max-w-xl leading-relaxed tracking-[-0.015em]">
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

        {/* Left: Motion Card - UI/UX visualization */}
        <div className="flex-1 w-full flex justify-center lg:justify-start relative">
          <motion.div 
            style={{ y: scrollY }}
            className="relative w-full max-w-[500px] aspect-square md:aspect-[4/3] lg:aspect-square bg-surface-hover rounded-[28px] border border-border-subtle shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)] overflow-hidden flex items-center justify-center p-8 group"
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
                   <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-transparent" />
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
                <div className="w-6 h-6 rounded bg-accent/15 flex items-center justify-center">
                  <Layers className="w-3 h-3 text-accent" />
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <div className="h-1.5 w-full bg-black/10 dark:bg-white/20 rounded-full" />
                  <div className="h-1.5 w-2/3 bg-black/5 dark:bg-white/10 rounded-full" />
                </div>
              </motion.div>

              <motion.div 
                className="absolute bottom-1/4 -left-6 bg-accent shadow-2xl shadow-accent/30 rounded-full px-5 py-2.5 flex items-center gap-2 text-xs font-medium text-white"
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
