import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Terminal, Database, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceDevelopment() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scrollY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const features = [
    { title: "Web & Mobile", desc: "High-performance applications" },
    { title: "API & Backend", desc: "Robust data architectures" },
    { title: "Cloud Infrastructure", desc: "Scalable & secure deployment" },
    { title: "Maintenance", desc: "Ongoing support & optimization" }
  ];

  // Typing effect state for the terminal
  const [typedText, setTypedText] = useState("");
  const codeString = `function initializeSystem() {
  const kernel = await Kernel.boot();
  kernel.connect({
    secure: true,
    nodes: 4,
    latency: 'low'
  });
  return "System Online";
}`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(codeString.slice(0, i));
      i++;
      if (i > codeString.length) {
        clearInterval(interval);
      }
    }, 50); // Typing speed
    
    return () => clearInterval(interval);
  }, []);

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
            <p className="text-sm md:text-[17px] font-medium text-accent mb-4">Service 03</p>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl display-editorial mb-6 text-primary">
              Product <span className="text-muted">Development.</span>
            </h2>
            
            <p className="text-secondary text-lg md:text-xl mb-10 md:mb-12 max-w-xl leading-relaxed tracking-[-0.015em]">
              We build scalable, high-performance web and mobile applications using modern technologies. Our development approach ensures your product is secure, fast, and ready to scale with your business.
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

        {/* Right: Motion Card - Engineering/Development */}
        <div className="flex-1 w-full flex justify-center lg:justify-end relative">
          <motion.div 
            style={{ y: scrollY }}
            className="relative w-full max-w-[500px] aspect-square md:aspect-[4/3] lg:aspect-square bg-surface-hover rounded-[28px] border border-border-subtle shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)] overflow-hidden flex items-center justify-center p-8 group"
            ref={cardRef}
          >
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M0 40L40 40L40 0%22 fill=%22none%22 stroke=%22currentColor%22 stroke-width=%221%22/%3E%3C/svg%3E')" }} />

            {/* Glowing orb in center background */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-orange-500/10 blur-[80px] pointer-events-none"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Abstract Backend Composition */}
            <div className="relative w-full h-full max-w-[340px] max-h-[340px] flex items-center justify-center">
              
              {/* Terminal Window */}
              <motion.div 
                className="absolute w-[90%] bg-[#f8f9fa] dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 rounded-xl overflow-hidden shadow-2xl z-10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-2 px-4 py-2 border-b border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <div className="ml-2 text-[10px] font-mono text-secondary flex items-center gap-1">
                    <Terminal size={10} /> server.ts
                  </div>
                </div>
                <div className="p-4 text-[11px] font-mono leading-relaxed text-orange-200/80 whitespace-pre">
                  {typedText}
                  <motion.span 
                    className="inline-block w-2 h-3 bg-orange-500/70 ml-1 align-middle"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </div>
              </motion.div>

              {/* Floating Node 1 (Database) */}
              <motion.div 
                className="absolute top-[10%] -left-[10%] bg-surface/90 backdrop-blur-xl border border-border-subtle shadow-[0_20px_50px_-20px_rgba(0,0,0,0.4)] rounded-2xl p-4 flex flex-col gap-3 z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{ y: [-10, 10, -10] }}
                //@ts-ignore
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.4 }}
              >
                <Database className="text-primary/40 w-5 h-5" />
                <div className="flex gap-1 mt-1">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="w-2 h-2 rounded-full bg-primary/20" />
                </div>
              </motion.div>

              {/* Floating Node 2 (Cloud) */}
              <motion.div 
                className="absolute bottom-[10%] -right-[5%] bg-surface/90 backdrop-blur-xl border border-border-subtle shadow-[0_20px_50px_-20px_rgba(0,0,0,0.4)] rounded-2xl p-4 flex flex-col gap-3 z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
                animate={{ y: [10, -10, 10] }}
              >
                <Cloud className="text-primary/40 w-5 h-5" />
                <div className="h-1.5 w-12 bg-primary/10 rounded-full mt-1 overflow-hidden">
                  <motion.div 
                    className="h-full bg-orange-500/80"
                    animate={{ width: ["20%", "80%", "40%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
