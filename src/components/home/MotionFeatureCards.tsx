import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'motion/react';
import ExperienceVisual from './features/ExperienceVisual';
import ProductVisual from './features/ProductVisual';
import AIVisual from './features/AIVisual';
import SystemsVisual from './features/SystemsVisual';

// ── DATA ─────────────────────────────────────────────────────────────
const features = [
  {
    id: "experience",
    number: "01 / 04",
    title: "Digital Experiences",
    description: "High-performance websites and digital experiences engineered around clarity, speed, and conversion.",
  },
  {
    id: "product",
    number: "02 / 04",
    title: "Product Engineering",
    description: "From early concepts to production-ready platforms, we turn ambitious ideas into scalable digital products.",
  },
  {
    id: "ai",
    number: "03 / 04",
    title: "AI & Automation",
    description: "Intelligent systems that automate workflows, amplify teams, and unlock entirely new ways of working.",
  },
  {
    id: "systems",
    number: "04 / 04",
    title: "Digital Systems",
    description: "Scalable design and engineering systems that keep complex digital ecosystems consistent and fast.",
  }
];

// ── MAIN COMPONENT ───────────────────────────────────────────────────

export default function MotionFeatureCards() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallax tracking
  const rawMouseX = useMotionValue(0.5);
  const rawMouseY = useMotionValue(0.5);
  const mouseX = useSpring(rawMouseX, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(rawMouseY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    rawMouseX.set(x);
    rawMouseY.set(y);
  };

  // Auto-play logic (4.5s cycle)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % features.length);
    }, 5000); // 5s loop to give time for 4.5s animation

    return () => clearInterval(interval);
  }, [isHovered]);

  const renderVisual = (id: string, isActive: boolean) => {
    switch (id) {
      case 'experience': return <ExperienceVisual isActive={isActive} mouseX={mouseX} mouseY={mouseY} />;
      case 'product': return <ProductVisual isActive={isActive} mouseX={mouseX} mouseY={mouseY} />;
      case 'ai': return <AIVisual isActive={isActive} mouseX={mouseX} mouseY={mouseY} />;
      case 'systems': return <SystemsVisual isActive={isActive} mouseX={mouseX} mouseY={mouseY} />;
      default: return null;
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 md:py-32 w-full bg-background overflow-hidden relative text-primary"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 w-full">
        
        {/* Editorial Introduction */}
        <div className="mb-16 md:mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-secondary mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-primary/20 block"></span>
              What We Build
            </p>
            <h2 className="display-editorial text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.05] tracking-tight font-medium">
              Digital systems engineered <br className="hidden md:block"/> to move businesses forward.
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-secondary text-base md:text-lg font-light leading-relaxed">
              From high-performance websites to intelligent products and digital platforms, GRAVIT combines design, engineering, and emerging technology into experiences built for impact.
            </p>
          </div>
        </div>

        {/* Feature Cards System */}
        
        {/* Desktop Layout (Flex) */}
        <div className="hidden lg:flex flex-row w-full h-[550px] gap-4">
          {features.map((feature, idx) => {
            const isActive = activeCardIndex === idx;
            return (
              <motion.div
                key={feature.id}
                layout
                onClick={() => setActiveCardIndex(idx)}
                onMouseEnter={() => setActiveCardIndex(idx)}
                initial={false}
                animate={{
                  flex: isActive ? 2.5 : 1,
                  backgroundColor: isActive ? 'var(--primary-10)' : 'transparent',
                }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`relative h-full rounded-[24px] border transition-colors duration-500 overflow-hidden cursor-pointer group flex flex-col ${
                  isActive ? 'border-primary/20 shadow-[0_0_50px_rgba(0,0,0,0.02)]' : 'border-primary/5 hover:border-primary/10'
                }`}
              >
                {/* Visual Area */}
                <div className="relative w-full flex-1 min-h-[250px] overflow-hidden p-6 pb-0">
                  <div className="w-full h-full relative">
                     {renderVisual(feature.id, isActive)}
                  </div>
                </div>

                {/* Content Area */}
                <div className="px-8 pb-8 pt-6 flex flex-col justify-end shrink-0 relative z-30">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between w-full">
                       <span className={`text-[10px] font-mono tracking-widest uppercase transition-colors duration-300 ${isActive ? 'text-secondary' : 'text-secondary'}`}>
                         {feature.number}
                       </span>
                    </div>
                    
                    {/* Progress Bar (Visible only when active) */}
                    <div className="w-full h-0.5 bg-primary/5 rounded-full overflow-hidden mb-2 relative">
                      {isActive && (
                        <motion.div 
                          className="absolute left-0 top-0 bottom-0 bg-primary/40"
                          initial={{ width: "0%" }}
                          animate={{ width: isHovered ? "100%" : "100%" }}
                          transition={{ 
                            duration: 5, 
                            ease: "linear",
                          }}
                        />
                      )}
                    </div>

                    <h3 className={`text-xl md:text-2xl font-medium tracking-tight whitespace-nowrap transition-colors duration-300 ${isActive ? 'text-primary' : 'text-secondary'}`}>
                      {feature.title}
                    </h3>
                  </div>

                  {/* Description Expansion */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: 10 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: 10 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-secondary text-sm mt-4 leading-relaxed pr-4">
                          {feature.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile/Tablet Layout (Stacked) */}
        <div className="flex lg:hidden flex-col gap-4 w-full">
          {features.map((feature, idx) => {
            const isActive = activeCardIndex === idx;
            return (
              <motion.div
                key={feature.id}
                layout
                onClick={() => setActiveCardIndex(idx)}
                initial={false}
                animate={{
                  backgroundColor: isActive ? 'var(--primary-10)' : 'transparent',
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`relative rounded-[20px] border overflow-hidden cursor-pointer flex flex-col ${
                  isActive ? 'border-primary/20' : 'border-primary/5'
                }`}
              >
                {/* Visual Area (Only visible when active) */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 320 }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="relative w-full border-b border-primary/5 p-4"
                    >
                      <div className="w-full h-full relative">
                         {renderVisual(feature.id, isActive)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Content Area */}
                <div className="p-6 md:p-8 flex flex-col gap-2 relative z-10">
                  <div className="flex flex-col gap-3">
                     
                    {/* Progress Bar */}
                    <div className="w-full h-[1px] bg-primary/5 relative">
                      {isActive && (
                        <motion.div 
                          className="absolute left-0 top-0 bottom-0 bg-primary/40"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 5, ease: "linear" }}
                        />
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <h3 className={`text-lg md:text-xl font-medium tracking-tight ${isActive ? 'text-primary' : 'text-secondary'}`}>
                        {feature.title}
                      </h3>
                      <span className="text-[10px] md:text-xs font-mono tracking-widest text-secondary uppercase">
                        {feature.number}
                      </span>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <p className="text-secondary text-sm md:text-base mt-2 leading-relaxed pr-4">
                          {feature.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
