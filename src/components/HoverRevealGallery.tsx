import React, { useState, useRef } from 'react';
import { motion, useSpring, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  { id: '01', title: 'APEX', category: 'E-Commerce', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop', link: '/work' },
  { id: '02', title: 'SENTINEL', category: 'FinTech', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop', link: '/work' },
  { id: '03', title: 'CHROMA', category: 'WebGL', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop', link: '/work' },
  { id: '04', title: 'ORBIT', category: 'Web3', image: 'https://images.unsplash.com/photo-1639762681485-074b7f4ec651?q=80&w=2070&auto=format&fit=crop', link: '/work' },
  { id: '05', title: 'ECHO', category: 'Portfolio', image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop', link: '/work' },
];

export default function HoverRevealGallery() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  // Smooth mouse tracking springs
  const mouseX = useSpring(0, { stiffness: 100, damping: 25 });
  const mouseY = useSpring(0, { stiffness: 100, damping: 25 });
  
  // For subtle 3D rotation effect on the floating image based on mouse position
  const rotateX = useTransform(mouseY, [0, 1000], [15, -15]);
  const rotateY = useTransform(mouseX, [0, 1600], [-15, 15]);
  
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full min-h-[80vh] flex flex-col py-24 overflow-hidden bg-transparent"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setActiveProject(null)}
    >
      {/* Floating Image Reveal with 3D Tilt */}
      <motion.div 
        className="pointer-events-none absolute left-0 top-0 z-0 origin-center will-change-transform"
        style={{
          x: mouseX,
          y: mouseY,
          rotateX,
          rotateY,
          perspective: 1000
        }}
        initial={false}
        animate={{
          opacity: activeProject !== null ? 1 : 0,
          scale: activeProject !== null ? 1 : 0.5,
        }}
        transition={{ opacity: { duration: 0.5, ease: 'circOut' }, scale: { duration: 0.6, ease: 'backOut' } }}
      >
        <div className="relative w-[320px] h-[450px] md:w-[450px] md:h-[600px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2rem] shadow-[0_40px_80px_rgba(0,0,0,0.8)] border border-white/10 bg-black">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={cn(
                "absolute inset-0 transition-opacity duration-700 ease-in-out",
                activeProject === index ? "opacity-100 z-10" : "opacity-0 z-0"
              )}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale brightness-75 contrast-125 transition-transform duration-[1.5s] ease-out"
                style={{ transform: activeProject === index ? 'scale(1)' : 'scale(1.15)' }}
              />
              {/* Mood Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 mix-blend-overlay" />
              <div className="absolute inset-0 bg-[#00F0FF]/10 mix-blend-color-dodge opacity-40"></div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Project List */}
      <div className="relative z-10 w-full flex flex-col max-w-[1600px] mx-auto px-6 md:px-12">
        {projects.map((project, index) => {
          const isActive = activeProject === index;
          const isFaded = activeProject !== null && !isActive;
          
          return (
            <Link 
              key={project.id}
              to={project.link}
              className={cn(
                "group relative flex items-center justify-between py-10 md:py-16 border-b border-white/10 transition-colors duration-500",
                isActive ? "border-white/30" : "hover:border-white/20"
              )}
              onMouseEnter={() => setActiveProject(index)}
            >
              {/* Subtle background highlight */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent transition-opacity duration-500 pointer-events-none -z-10",
                isActive ? "opacity-100" : "opacity-0"
              )}></div>

              <div className="flex items-center gap-8 md:gap-16 flex-1">
                <span className={cn(
                  "font-mono text-sm md:text-base tracking-[0.2em] transition-all duration-500",
                  isActive ? "text-[#00F0FF] -translate-y-2" : "text-white/30"
                )}>
                  {project.id}
                </span>
                
                {/* Rolling Text Effect Container */}
                <h2 className="text-5xl md:text-7xl lg:text-[8rem] font-bold tracking-tighter uppercase relative overflow-hidden h-[1em] pb-1">
                  <div className={cn(
                    "transition-transform duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col",
                    isActive ? "-translate-y-[1em]" : "translate-y-0"
                  )}>
                    {/* Primary Text */}
                    <span className={cn(
                      "block h-[1em] transition-opacity duration-500 leading-none",
                      isFaded ? "opacity-20" : "text-white opacity-100"
                    )}>
                      {project.title}
                    </span>
                    {/* Secondary Text (Revealed on hover) */}
                    <span className="block h-[1em] text-transparent [-webkit-text-stroke:2px_#00F0FF] leading-none italic pr-8 relative z-10">
                      {project.title}
                    </span>
                  </div>
                </h2>
              </div>
              
              <div className="hidden md:flex items-center justify-end gap-12 overflow-hidden flex-1">
                <span className={cn(
                  "block text-sm tracking-[0.2em] uppercase transition-all duration-500 transform font-medium whitespace-nowrap",
                  isActive ? "text-white translate-x-0 opacity-100" : "text-white/40 translate-x-12 opacity-0"
                )}>
                  {project.category}
                </span>
                
                {/* Arrow Icon */}
                <div className={cn(
                  "w-14 h-14 rounded-full border border-white/20 flex items-center justify-center transition-all duration-500 origin-center",
                  isActive ? "bg-[#00F0FF] border-[#00F0FF] text-black -rotate-45 scale-100" : "bg-transparent text-white rotate-0 scale-50 opacity-0"
                )}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
