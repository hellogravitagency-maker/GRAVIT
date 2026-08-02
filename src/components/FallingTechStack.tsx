import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  Atom, 
  Triangle, 
  Code2, 
  Hexagon, 
  Sparkles, 
  Server, 
  Database, 
  Cloud,
  Cpu,
  Boxes,
  Zap,
  Globe2,
  Workflow,
  Shield,
  Layers,
  TerminalSquare
} from 'lucide-react';

const icons = [
  Atom, Triangle, Code2, Hexagon, Sparkles, Server, Database, Cloud,
  Cpu, Boxes, Zap, Globe2, Workflow, Shield, Layers, TerminalSquare
];

export default function FallingTechStack() {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    // Generate 40 random falling particles
    const newParticles = Array.from({ length: 40 }).map((_, i) => {
      const IconComponent = icons[Math.floor(Math.random() * icons.length)];
      return {
        id: i,
        Icon: IconComponent,
        x: Math.random() * 100, // random X percentage
        delay: Math.random() * 10, // random delay before starting
        duration: 10 + Math.random() * 15, // random duration between 10-25s
        size: 30 + Math.random() * 60, // random size 30px-90px
        opacity: 0.3 + Math.random() * 0.7, // random opacity
        rotation: Math.random() * 360,
      };
    });
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative w-full h-[120vh] bg-black overflow-hidden flex items-center justify-center border-b border-white/10">
      
      {/* Background layer behind icons (optional, keep black for multiply) */}
      <div className="absolute inset-0 z-0 bg-black" />

      {/* Falling Icons Layer */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {particles.map((p) => {
          const Icon = p.Icon;
          return (
            <motion.div
              key={p.id}
              className="absolute text-white flex items-center justify-center"
              style={{
                left: `${p.x}%`,
                top: '-10%',
                width: p.size,
                height: p.size,
                opacity: p.opacity
              }}
              animate={{
                y: ['0vh', '140vh'],
                rotate: [p.rotation, p.rotation + (Math.random() > 0.5 ? 360 : -360)],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "linear",
                delay: p.delay,
              }}
            >
              <Icon size={p.size} strokeWidth={1.5} />
            </motion.div>
          );
        })}
      </div>

      {/* Knockout Text Overlay */}
      {/* 
        mix-blend-multiply does this:
        - White text (1,1,1) * Underlying pixel = Underlying pixel (Shows icons)
        - Black background (0,0,0) * Underlying pixel = Black (Hides icons)
      */}
      <div className="absolute inset-0 z-20 bg-black text-white mix-blend-multiply flex flex-col items-center justify-center pointer-events-none select-none px-4">
        <h2 className="text-[14vw] md:text-[9vw] font-bold leading-[0.85] uppercase text-center tracking-tighter w-full max-w-[100vw]">
          We<br/>
          Engineer<br/>
          The<br/>
          Peak<br/>
          Of<br/>
          Experience
        </h2>
      </div>

    </section>
  );
}
