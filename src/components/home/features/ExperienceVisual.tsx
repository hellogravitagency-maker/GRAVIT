import React, { useState } from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { LayoutGrid, Type, LayoutTemplate, Smartphone } from 'lucide-react';

interface ExperienceVisualProps {
  isActive: boolean;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export default function ExperienceVisual({ isActive, mouseX, mouseY }: ExperienceVisualProps) {
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);

  // Parallax transforms
  const bgX = useTransform(mouseX, [0, 1], [-2, 2]);
  const bgY = useTransform(mouseY, [0, 1], [-2, 2]);
  const iconX = useTransform(mouseX, [0, 1], [-4, 4]);
  const iconY = useTransform(mouseY, [0, 1], [-4, 4]);
  const uiX = useTransform(mouseX, [0, 1], [-6, 6]);
  const uiY = useTransform(mouseY, [0, 1], [-6, 6]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <div className={`relative w-full h-full flex items-center justify-center overflow-hidden bg-background rounded-xl border border-black/5 dark:border-white/5 ${isActive ? '' : 'pointer-events-none'}`}>
      {/* Background Grid - Parallax */}
      <motion.div 
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 opacity-20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 0.2 : 0 }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div>

      {/* Main Browser Frame */}
      <motion.div
        style={{ x: uiX, y: uiY }}
        className="relative z-10 w-[80%] max-w-sm aspect-[4/3] bg-[#0a0a0a] rounded-lg border border-white/10 shadow-2xl flex flex-col overflow-hidden"
        className="relative z-10 w-[80%] max-w-sm aspect-[4/3] bg-background rounded-lg border border-border shadow-2xl flex flex-col overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate={isActive ? "show" : "hidden"}
      >
        {/* Browser Header */}
        <div className="h-6 border-b border-border flex items-center px-3 gap-1.5 bg-muted/50">
          <div className="w-2 h-2 rounded-full bg-border" />
          <div className="w-2 h-2 rounded-full bg-border" />
          <div className="w-2 h-2 rounded-full bg-border" />
          <div className="mx-auto text-[8px] tracking-widest text-muted-foreground uppercase font-mono">gravit.dev</div>
        </div>

        {/* Browser Content */}
        <div className="flex-1 p-4 flex flex-col gap-4">
          {/* Headline */}
          <motion.div 
            variants={itemVariants}
            className="group relative"
            onMouseEnter={() => setHoveredZone('type')}
            onMouseLeave={() => setHoveredZone(null)}
          >
            <div className={`w-3/4 h-4 rounded transition-colors ${hoveredZone === 'type' ? 'bg-foreground' : 'bg-muted'}`} />
            <div className={`w-1/2 h-4 rounded mt-2 transition-colors ${hoveredZone === 'type' ? 'bg-foreground' : 'bg-muted'}`} />
            {hoveredZone === 'type' && (
              <div className="absolute -top-6 left-0 bg-foreground text-background text-[9px] font-mono px-2 py-0.5 rounded font-bold uppercase tracking-wider z-20">
                TYPE / SCALE 01
              </div>
            )}
          </motion.div>

          {/* Grid Layout */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-3 gap-2 flex-1 group relative"
            onMouseEnter={() => setHoveredZone('grid')}
            onMouseLeave={() => setHoveredZone(null)}
          >
            {[1, 2, 3].map((i) => (
              <div key={i} className={`rounded border transition-colors cursor-pointer ${hoveredZone === 'grid' ? 'bg-muted border-foreground/30' : 'bg-muted/50 border-border'}`} />
            ))}
            {hoveredZone === 'grid' && (
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-foreground text-background text-[9px] font-mono px-2 py-0.5 rounded font-bold uppercase tracking-wider whitespace-nowrap z-20">
                GRID / 12 COL
              </div>
            )}
          </motion.div>
        </div>
        
        {/* Completed Overlay */}
        <motion.div 
          className="absolute inset-0 bg-background/40 backdrop-blur-[2px] flex flex-col items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? [0, 0, 0, 1] : 0 }}
          transition={{ duration: 4, times: [0, 0.7, 0.8, 1] }}
        >
          <div className="text-[10px] text-primary font-mono tracking-widest bg-background/80 px-3 py-1 rounded border border-border">
            DESIGN COMPLETE
          </div>
          <div className="text-[8px] text-muted-foreground font-mono tracking-widest mt-2">
            01 / 04
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Icons connecting to the interface */}
      <motion.div 
        style={{ x: iconX, y: iconY }}
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
      >
        <div className="absolute top-[20%] left-[10%] text-muted-foreground">
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: isActive ? [0, 1, 1, 0] : 0, scale: isActive ? [0, 1, 1, 0.5] : 0 }} transition={{ duration: 4, times: [0, 0.1, 0.8, 1] }}>
            <LayoutGrid size={20} />
          </motion.div>
        </div>
        <div className="absolute top-[30%] right-[15%] text-white/40">
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: isActive ? [0, 1, 1, 0] : 0, scale: isActive ? [0, 1, 1, 0.5] : 0 }} transition={{ duration: 4, times: [0, 0.3, 0.8, 1] }}>
            <Type size={20} />
          </motion.div>
        </div>
        <div className="absolute bottom-[20%] left-[20%] text-white/40">
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: isActive ? [0, 1, 1, 0] : 0, scale: isActive ? [0, 1, 1, 0.5] : 0 }} transition={{ duration: 4, times: [0, 0.5, 0.8, 1] }}>
            <LayoutTemplate size={20} />
          </motion.div>
        </div>
        <div className="absolute bottom-[25%] right-[10%] text-white/40">
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: isActive ? [0, 1, 1, 0] : 0, scale: isActive ? [0, 1, 1, 0.5] : 0 }} transition={{ duration: 4, times: [0, 0.7, 0.8, 1] }}>
            <Smartphone size={20} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
