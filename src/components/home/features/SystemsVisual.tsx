import React, { useState } from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { Component, MousePointer2, Type, GripHorizontal, Square, AppWindow, Smartphone } from 'lucide-react';

interface SystemsVisualProps {
  isActive: boolean;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export default function SystemsVisual({ isActive, mouseX, mouseY }: SystemsVisualProps) {
  const [hoveredToken, setHoveredToken] = useState<string | null>(null);

  // Parallax transforms
  const bgX = useTransform(mouseX, [0, 1], [-2, 2]);
  const bgY = useTransform(mouseY, [0, 1], [-2, 2]);
  const elementX = useTransform(mouseX, [0, 1], [-5, 5]);
  const elementY = useTransform(mouseY, [0, 1], [-5, 5]);

  // Framer Motion Variants
  const floatVariants = {
    hidden: (i: number) => ({
      opacity: 0,
      x: i % 2 === 0 ? -100 : 100,
      y: i % 3 === 0 ? -100 : 100,
      rotate: i * 15
    }),
    floating: (i: number) => ({
      opacity: 1,
      x: [i % 2 === 0 ? -80 : 80, i % 2 === 0 ? -60 : 60, i % 2 === 0 ? -80 : 80],
      y: [i % 3 === 0 ? -80 : 80, i % 3 === 0 ? -100 : 100, i % 3 === 0 ? -80 : 80],
      rotate: [i * 10, i * -10, i * 10],
      transition: { duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }
    }),
    snapped: (i: number) => {
      // Calculate grid position for 3x2 grid
      const col = i % 3;
      const row = Math.floor(i / 3);
      return {
        opacity: 1,
        x: col * 60 - 60, // center it (-60, 0, 60)
        y: row * 60 - 30, // center it (-30, 30)
        rotate: 0,
        scale: 1,
        transition: { type: 'spring', stiffness: 100, damping: 15, delay: i * 0.1 }
      };
    },
    scaled: (i: number) => {
      const col = i % 3;
      const row = Math.floor(i / 3);
      return {
        opacity: 1,
        x: col * 40 - 40, 
        y: row * 40 - 20, 
        rotate: 0,
        scale: 0.6,
        transition: { type: 'spring', stiffness: 100 }
      };
    }
  };

  const icons = [
    { id: 'btn', Icon: Square, label: 'BUTTON' },
    { id: 'input', Icon: Type, label: 'INPUT' },
    { id: 'card', Icon: GripHorizontal, label: 'CARD' },
    { id: 'nav', Icon: AppWindow, label: 'NAV' },
    { id: 'modal', Icon: Component, label: 'MODAL' },
    { id: 'cursor', Icon: MousePointer2, label: 'CURSOR' },
  ];

  // Animation sequence states
  // 0-2s: floating
  // 2-4s: snapped
  // 4-6s: scaled & duplicated
  const [sequenceState, setSequenceState] = useState<'floating' | 'snapped' | 'scaled'>('floating');

  // Trigger sequence based on isActive
  React.useEffect(() => {
    if (!isActive) {
      setSequenceState('floating');
      return;
    }
    
    const snapTimer = setTimeout(() => setSequenceState('snapped'), 1500);
    const scaleTimer = setTimeout(() => setSequenceState('scaled'), 3000);
    
    return () => {
      clearTimeout(snapTimer);
      clearTimeout(scaleTimer);
    };
  }, [isActive]);

  return (
    <div className={`relative w-full h-full flex items-center justify-center overflow-hidden bg-background rounded-xl border border-black/5 dark:border-white/5 ${isActive ? '' : 'pointer-events-none'}`}>
      
      {/* Central Grid Background */}
      <motion.div 
        style={{ x: bgX, y: bgY }}
        className="absolute w-[200px] h-[140px] border border-white/10 rounded-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: (isActive && sequenceState !== 'floating') ? 1 : 0, scale: sequenceState === 'scaled' ? 0.6 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="border border-white/5" />
          ))}
        </div>
      </motion.div>

      {/* Main Component System */}
      <motion.div style={{ x: elementX, y: elementY }} className="absolute inset-0 flex items-center justify-center">
        {icons.map((item, i) => (
          <motion.div
            key={item.id}
            custom={i}
            variants={floatVariants}
            initial="hidden"
            animate={isActive ? sequenceState : 'hidden'}
            className="absolute w-12 h-12 bg-background border border-black/20 dark:border-white/20 rounded-lg flex items-center justify-center text-primary/60 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors z-20"
            onMouseEnter={() => setHoveredToken(item.id)}
            onMouseLeave={() => setHoveredToken(null)}
          >
            <item.Icon size={20} />
            
            {hoveredToken === item.id && (
              <div className="absolute top-14 bg-white text-black text-[9px] font-mono px-2 py-1 rounded font-bold tracking-widest whitespace-nowrap z-50">
                {item.label} / TOKEN
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Scaled Duplicates (Website, Dashboard, Mobile) */}
      <motion.div 
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: sequenceState === 'scaled' ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Dashboard Duplicate */}
        <motion.div 
          className="absolute -translate-x-[140px] opacity-30"
          initial={{ x: 0 }}
          animate={{ x: sequenceState === 'scaled' ? -140 : 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <div className="relative w-[120px] h-[80px] border border-white/20 rounded-lg bg-white/5 flex flex-wrap gap-1 p-2 items-center justify-center">
             <div className="absolute -top-6 text-[8px] font-mono text-white/50 tracking-widest flex items-center gap-1"><AppWindow size={10}/> DASHBOARD</div>
             {[...Array(6)].map((_, i) => <div key={i} className="w-6 h-6 border border-white/10 rounded flex items-center justify-center text-white/20"><Square size={10}/></div>)}
          </div>
        </motion.div>

        {/* Mobile Duplicate */}
        <motion.div 
          className="absolute translate-x-[140px] opacity-30"
          initial={{ x: 0 }}
          animate={{ x: sequenceState === 'scaled' ? 140 : 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <div className="relative w-[70px] h-[120px] border border-white/20 rounded-lg bg-white/5 flex flex-col gap-1 p-2 items-center justify-center">
             <div className="absolute -top-6 text-[8px] font-mono text-white/50 tracking-widest flex items-center gap-1"><Smartphone size={10}/> MOBILE</div>
             {[...Array(4)].map((_, i) => <div key={i} className="w-8 h-8 border border-white/10 rounded flex items-center justify-center text-white/20"><Type size={10}/></div>)}
          </div>
        </motion.div>
      </motion.div>
      
    </div>
  );
}
