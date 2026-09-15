import React, { useState } from 'react';
import { motion, MotionValue, useTransform } from 'motion/react';
import { Database, Lock, Server, Terminal, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface ProductVisualProps {
  isActive: boolean;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export default function ProductVisual({ isActive, mouseX, mouseY }: ProductVisualProps) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Parallax transforms
  const bgX = useTransform(mouseX, [0, 1], [-2, 2]);
  const bgY = useTransform(mouseY, [0, 1], [-2, 2]);
  const dataX = useTransform(mouseX, [0, 1], [-8, 8]);
  const dataY = useTransform(mouseY, [0, 1], [-8, 8]);
  const nodeX = useTransform(mouseX, [0, 1], [-4, 4]);
  const nodeY = useTransform(mouseY, [0, 1], [-4, 4]);

  const Node = ({ 
    id, 
    icon: Icon, 
    label, 
    status, 
    x, 
    y, 
    delay 
  }: { 
    id: string; 
    icon: any; 
    label: string; 
    status: string; 
    x: string; 
    y: string; 
    delay: number 
  }) => (
    <motion.div 
      className="absolute flex flex-col items-center justify-center gap-2 group cursor-pointer z-20"
      style={{ left: x, top: y, x: '-50%', y: '-50%' }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.8 }}
      transition={{ delay: isActive ? delay : 0, type: 'spring' }}
      onMouseEnter={() => setHoveredNode(id)}
      onMouseLeave={() => setHoveredNode(null)}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-colors ${hoveredNode === id ? 'bg-primary/10 border-primary/30 text-primary' : 'bg-background border-border text-muted-foreground'}`}>
        <Icon size={20} />
      </div>
      
      {/* Tooltip */}
      {hoveredNode === id && (
        <div className="absolute top-14 bg-popover text-popover-foreground border border-border text-[9px] font-mono px-2 py-1 rounded font-bold uppercase tracking-wider whitespace-nowrap flex flex-col items-center shadow-lg">
          <span>{label}</span>
          <span className="text-muted-foreground">{status}</span>
        </div>
      )}
    </motion.div>
  );

  return (
    <div className={`relative w-full h-full flex items-center justify-center overflow-hidden bg-background rounded-xl border border-black/5 dark:border-white/5 ${isActive ? '' : 'pointer-events-none'}`}>
      {/* Background Dots - Parallax */}
      <motion.div 
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 opacity-20 pointer-events-none"
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </motion.div>

      {/* SVG Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
        <motion.g stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" strokeDasharray="4 4">
          {/* Auth to Product */}
          <motion.line 
            x1="20%" y1="50%" x2="40%" y2="50%"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isActive ? 1 : 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          />
          {/* DB to Product */}
          <motion.line 
            x1="80%" y1="50%" x2="60%" y2="50%"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isActive ? 1 : 0 }}
            transition={{ delay: 1, duration: 1 }}
          />
          {/* API to Product */}
          <motion.line 
            x1="50%" y1="20%" x2="50%" y2="40%"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isActive ? 1 : 0 }}
            transition={{ delay: 1.2, duration: 1 }}
          />
          {/* Product to Services */}
          <motion.line 
            x1="50%" y1="60%" x2="50%" y2="80%"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isActive ? 1 : 0 }}
            transition={{ delay: 1.4, duration: 1 }}
          />
        </motion.g>
      </svg>

      {/* Data Packets (Dots moving along lines) */}
      {isActive && (
        <motion.div style={{ x: dataX, y: dataY }} className="absolute inset-0 z-10 pointer-events-none">
          {/* Auth Packet */}
          <motion.div className="absolute w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            initial={{ left: '20%', top: '50%', x: '-50%', y: '-50%', opacity: 0 }}
            animate={{ left: '50%', opacity: [0, 1, 1, 0] }}
            transition={{ delay: 1.5, duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
          />
          {/* DB Packet */}
          <motion.div className="absolute w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            initial={{ left: '80%', top: '50%', x: '-50%', y: '-50%', opacity: 0 }}
            animate={{ left: '50%', opacity: [0, 1, 1, 0] }}
            transition={{ delay: 1.7, duration: 1.5, repeat: Infinity, repeatDelay: 1.2 }}
          />
          {/* API Packet */}
          <motion.div className="absolute w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            initial={{ left: '50%', top: '20%', x: '-50%', y: '-50%', opacity: 0 }}
            animate={{ top: '50%', opacity: [0, 1, 1, 0] }}
            transition={{ delay: 1.9, duration: 1.5, repeat: Infinity, repeatDelay: 0.8 }}
          />
        </motion.div>
      )}

      {/* Interactive Nodes */}
      <motion.div style={{ x: nodeX, y: nodeY }} className="absolute inset-0 w-full h-full">
        <Node id="auth" icon={Lock} label="AUTH" status="SECURE" x="20%" y="50%" delay={0.2} />
        <Node id="db" icon={Database} label="DATABASE" status="SYNC ACTIVE" x="80%" y="50%" delay={0.4} />
        <Node id="api" icon={ArrowRight} label="API" status="REST / JSON" x="50%" y="20%" delay={0.6} />
        
        {/* Central Product Node */}
        <motion.div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0 }}
          transition={{ delay: 0.8, type: 'spring', stiffness: 120 }}
          onMouseEnter={() => setHoveredNode('product')}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <div className="relative">
            {isActive && (
              <motion.div 
                className="absolute inset-0 border border-white/30 rounded-xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center border transition-colors ${hoveredNode === 'product' ? 'bg-primary text-primary-foreground border-primary' : 'bg-background border-black/20 dark:border-white/20 text-primary'}`}>
              <Terminal size={24} />
            </div>
          </div>
          
          <div className="absolute top-20 bg-background border border-black/10 dark:border-white/10 text-primary text-[9px] font-mono px-3 py-1.5 rounded flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            BUILDING
          </div>
        </motion.div>

        <Node id="services" icon={Server} label="SERVICES" status="DEPLOYMENT LIVE" x="50%" y="80%" delay={1} />
      </motion.div>
    </div>
  );
}
