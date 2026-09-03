import React, { useState } from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { Mail, BrainCircuit, Filter, Users, Bell } from 'lucide-react';

interface AIVisualProps {
  isActive: boolean;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export default function AIVisual({ isActive, mouseX, mouseY }: AIVisualProps) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Parallax transforms
  const dataX = useTransform(mouseX, [0, 1], [-8, 8]);
  const dataY = useTransform(mouseY, [0, 1], [-8, 8]);
  const nodeX = useTransform(mouseX, [0, 1], [-3, 3]);
  const nodeY = useTransform(mouseY, [0, 1], [-3, 3]);

  const Node = ({ 
    id, 
    icon: Icon, 
    label, 
    hoverContent,
    x, 
    y, 
    delay,
    isCore = false
  }: { 
    id: string; 
    icon: any; 
    label: string; 
    hoverContent: string[];
    x: string; 
    y: string; 
    delay: number;
    isCore?: boolean;
  }) => (
    <motion.div 
      className={`absolute flex flex-col items-center justify-center gap-2 group cursor-pointer ${isCore ? 'z-30' : 'z-20'}`}
      style={{ left: x, top: y, x: '-50%', y: '-50%' }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -20 }}
      transition={{ delay: isActive ? delay : 0, type: 'spring' }}
      onMouseEnter={() => setHoveredNode(id)}
      onMouseLeave={() => setHoveredNode(null)}
    >
      <div className="relative">
        {isCore && isActive && (
          <motion.div 
            className="absolute -inset-2 border border-white/20 rounded-full border-t-white"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        )}
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-colors ${hoveredNode === id ? 'bg-primary/10 border-primary/30 text-primary' : 'bg-background border-black/10 dark:border-white/10 text-secondary'} ${isCore ? 'w-14 h-14 rounded-full border-black/30 dark:border-white/30 text-primary' : ''}`}>
          <Icon size={isCore ? 24 : 18} />
        </div>
      </div>
      
      {/* Node Label */}
      <div className={`text-[8px] font-mono tracking-widest ${isCore ? 'text-white' : 'text-white/70'}`}>
        {label}
      </div>
      
      {/* Hover Menu */}
      {hoveredNode === id && (
        <div className={`absolute ${isCore ? 'left-20 top-0' : 'top-14'} bg-background/90 backdrop-blur-md border border-black/20 dark:border-white/20 text-primary text-[9px] font-mono px-2 py-2 rounded flex flex-col gap-1 min-w-[80px] z-50`}>
          {hoverContent.map((item, i) => (
            <div key={i} className="flex items-center gap-1.5 opacity-80 hover:opacity-100">
              <div className="w-1 h-1 rounded-full bg-white" />
              {item}
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );

  return (
    <div className={`relative w-full h-full flex items-center justify-center overflow-hidden bg-background rounded-xl border border-black/5 dark:border-white/5 ${isActive ? '' : 'pointer-events-none'}`}>
      
      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
        <motion.g stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none">
          <motion.line x1="50%" y1="15%" x2="50%" y2="35%" initial={{ pathLength: 0 }} animate={{ pathLength: isActive ? 1 : 0 }} transition={{ delay: 0.5, duration: 1 }} />
          <motion.line x1="50%" y1="35%" x2="50%" y2="60%" initial={{ pathLength: 0 }} animate={{ pathLength: isActive ? 1 : 0 }} transition={{ delay: 1, duration: 1 }} />
          <motion.line x1="50%" y1="60%" x2="30%" y2="80%" initial={{ pathLength: 0 }} animate={{ pathLength: isActive ? 1 : 0 }} transition={{ delay: 1.5, duration: 1 }} />
          <motion.line x1="50%" y1="60%" x2="70%" y2="80%" initial={{ pathLength: 0 }} animate={{ pathLength: isActive ? 1 : 0 }} transition={{ delay: 1.5, duration: 1 }} />
        </motion.g>
      </svg>

      {/* Animated Packets */}
      {isActive && (
        <motion.div style={{ x: dataX, y: dataY }} className="absolute inset-0 z-10 pointer-events-none">
          {/* Incoming Mail Packet */}
          <motion.div className="absolute left-[50%] top-[15%] -translate-x-1/2 -translate-y-1/2 bg-white text-black text-[8px] font-mono font-bold px-2 py-0.5 rounded"
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: [0, 80], opacity: [0, 1, 1, 0] }}
            transition={{ delay: 2, duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
          >
            NEW LEAD
          </motion.div>

          {/* Outgoing Packets */}
          <motion.div className="absolute left-[50%] top-[60%] -translate-x-1/2 -translate-y-1/2 bg-white text-black text-[8px] font-mono font-bold px-2 py-0.5 rounded"
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ x: [0, -80], y: [0, 80], opacity: [0, 1, 1, 0] }}
            transition={{ delay: 3.5, duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
          >
            QUALIFIED
          </motion.div>

          <motion.div className="absolute left-[50%] top-[60%] -translate-x-1/2 -translate-y-1/2 bg-white/20 text-white/70 border border-white/10 text-[8px] font-mono font-bold px-2 py-0.5 rounded"
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ x: [0, 80], y: [0, 80], opacity: [0, 1, 1, 0] }}
            transition={{ delay: 3.5, duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
          >
            REJECTED
          </motion.div>
        </motion.div>
      )}

      {/* Nodes */}
      <motion.div style={{ x: nodeX, y: nodeY }} className="absolute inset-0 w-full h-full">
        <Node id="mail" icon={Mail} label="MAIL INPUT" hoverContent={['READ', 'EXTRACT']} x="50%" y="15%" delay={0.2} />
        <Node id="ai" icon={BrainCircuit} label="AI CORE" hoverContent={['CLASSIFY', 'SUMMARIZE', 'PREDICT', 'DECIDE']} x="50%" y="45%" delay={0.6} isCore={true} />
        <Node id="filter" icon={Filter} label="ROUTING" hoverContent={['EVALUATE', 'BRANCH']} x="50%" y="60%" delay={1} />
        <Node id="crm" icon={Users} label="CRM" hoverContent={['UPDATE', 'SYNC']} x="30%" y="80%" delay={1.4} />
        <Node id="notify" icon={Bell} label="ARCHIVE" hoverContent={['STORE', 'LOG']} x="70%" y="80%" delay={1.4} />
      </motion.div>
    </div>
  );
}
