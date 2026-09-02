import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    id: "01",
    category: "DISCOVERY",
    title: "Research & Strategy",
    desc: "We start by deeply understanding your business, users, and market landscape to define a clear, actionable strategy."
  },
  {
    id: "02",
    category: "DESIGN",
    title: "UI/UX Design",
    desc: "Wireframes, prototypes, and high-fidelity interfaces crafted for exceptional user experiences."
  },
  {
    id: "03",
    category: "DEVELOPMENT",
    title: "Build & Iterate",
    desc: "Transforming design into reality with clean, scalable code. We build robust architectures that perform flawlessly."
  },
  {
    id: "04",
    category: "LAUNCH",
    title: "Deploy & Grow",
    desc: "Seamlessly deploying your digital product to the world, backed by ongoing support and continuous optimization."
  }
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState("01");
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const progressBarHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section 
      ref={containerRef} 
      className="relative bg-background border-t border-black/5 dark:border-white/5 py-16 md:py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row relative">
        
        {/* Left Side: Sticky Info */}
        <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
          <div className="sticky top-24 md:top-32 flex flex-col gap-8 md:gap-12">
            <div>
              <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary/70">Process</span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl display-editorial text-primary tracking-tight leading-tight">
                How We <span className="text-primary/40 italic">Work.</span>
              </h2>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-5xl md:text-6xl font-light text-primary tracking-tighter">
                {activeStep}
              </span>
              <span className="text-2xl md:text-3xl text-primary/20 font-light tracking-tighter">
                / 04
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Scrollable Steps */}
        <div className="w-full lg:w-2/3 lg:pl-24 relative flex">
          
          {/* Timeline Track */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-black/10 dark:bg-white/10 hidden md:block">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-orange-500 origin-top"
              style={{ height: progressBarHeight }}
            />
          </div>

          <div className="w-full flex flex-col">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                className={`flex flex-col gap-6 md:pl-16 relative py-16 lg:py-32 ${index === 0 ? 'pt-0 lg:pt-0' : ''} ${index === steps.length - 1 ? 'pb-0 lg:pb-0' : ''}`}
                onViewportEnter={() => setActiveStep(step.id)}
                viewport={{ margin: "-45% 0px -45% 0px" }} // Trigger when middle of screen
              >
                
                {/* Mobile/Tablet indicator */}
                <div className="md:hidden text-orange-500 font-mono text-sm tracking-widest mb-2">
                  {step.id} / 04
                </div>

                {/* Content block */}
                <motion.div 
                  className="bg-white dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 rounded-3xl p-8 md:p-12 hover:bg-black/5 dark:hover:bg-[#0F0F0F] transition-colors duration-500"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="text-xs font-mono text-primary/40 tracking-[0.2em] mb-6">
                    {step.category}
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary font-medium mb-6 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-primary/60 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </motion.div>
                
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
