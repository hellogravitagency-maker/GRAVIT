import React from 'react';
import { motion } from 'motion/react';
import { 
  Atom, 
  Triangle, 
  Code2, 
  Hexagon, 
  Sparkles, 
  Wind, 
  Server, 
  Database, 
  Cloud 
} from 'lucide-react';

const technologies = [
  { name: 'React & Next.js', icon: Atom, desc: 'Component Architecture' },
  { name: 'TypeScript', icon: Code2, desc: 'Type-Safe Logic' },
  { name: 'WebGL & Three.js', icon: Hexagon, desc: '3D rendering' },
  { name: 'GSAP & Motion', icon: Sparkles, desc: 'Cinematic Animation' },
  { name: 'TailwindCSS v4', icon: Wind, desc: 'Atomic Styling' },
  { name: 'Node.js & Go', icon: Server, desc: 'Backend Services' },
  { name: 'PostgreSQL', icon: Database, desc: 'Relational Data' },
  { name: 'AWS & Vercel Edge', icon: Cloud, desc: 'Global Infrastructure' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as any }
  },
};

export default function ArsenalGrid() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full"
    >
      {technologies.map((tech, i) => {
        const Icon = tech.icon;
        return (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="group relative flex flex-col items-start p-6 md:p-8 border border-white/10 rounded-2xl bg-transparent hover:bg-white/5 transition-colors overflow-hidden"
          >
            {/* Subtle radial gradient on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                 style={{ background: 'radial-gradient(circle at top right, rgba(255,106,0,0.05), transparent 70%)' }} 
            />
            
            <div className="text-white/40 group-hover:text-[#ff6a00] transition-colors duration-500 mb-6">
              <Icon size={32} strokeWidth={1.5} />
            </div>
            
            <h4 className="text-white font-mono text-sm tracking-tight mb-2 z-10">
              {tech.name}
            </h4>
            
            <p className="text-white/40 text-xs font-sans z-10 group-hover:text-white/60 transition-colors">
              {tech.desc}
            </p>
            
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff6a00]/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left" />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
