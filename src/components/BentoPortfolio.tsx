import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  className: string;
}

const projects: Project[] = [
  { 
    id: '01', 
    title: 'SSVEMHS', 
    category: 'EdTech Portal', 
    description: 'An immersive, AI-powered interactive web portal featuring a 3D interactive scene, fluid physics-based scrolling, and role-based dashboards powered by Gemini AI and Supabase.',
    image: '/assets/projects/ssvemhs.webp', 
    link: '/work',
    className: 'md:col-span-2 md:row-span-2 min-h-[400px] md:min-h-[600px]'
  },
  { 
    id: '02', 
    title: 'Little Stars', 
    category: 'Playgroup Academy', 
    description: 'A beautifully designed, high-performance web application tailored for a kindergarten.',
    image: '/assets/projects/littlestars.webp', 
    link: '/work',
    className: 'col-span-1 row-span-1 min-h-[300px]'
  },
  { 
    id: '03', 
    title: 'WonderKids', 
    category: 'Academy Dashboard', 
    description: 'A full-stack academy platform with an interactive user interface, cinematic scrolling, 3D elements, and a dedicated administrative dashboard.',
    image: '/assets/projects/wonderkids.webp', 
    link: '/work',
    className: 'md:col-span-3 row-span-1 min-h-[300px]'
  }
];

const BentoCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);
  
  return (
    <Link 
      to={project.link}
      ref={cardRef}
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/10 flex flex-col justify-end p-8 transition-all duration-700",
        project.className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale brightness-50 contrast-125 transition-transform duration-[1.5s] ease-out group-hover:scale-110"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-[#00F0FF]/0 group-hover:bg-[#00F0FF]/10 transition-colors duration-700 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col justify-end h-full">
        <div className="flex justify-between items-end w-full">
          <div className="flex flex-col">
            <motion.div 
              initial={false}
              animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0.6 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 mb-3"
            >
              <span className="text-[#00F0FF] text-xs font-mono tracking-widest uppercase">{project.id}</span>
              <span className="text-white/60 text-xs tracking-widest uppercase">{project.category}</span>
            </motion.div>
            
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter uppercase leading-none">
              {project.title}
            </h3>
          </div>

          {/* Arrow Icon */}
          <div className={cn(
            "w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all duration-500",
            isHovered ? "bg-[#00F0FF] border-[#00F0FF] text-black -rotate-45" : "bg-white/5 backdrop-blur-sm text-white rotate-0"
          )}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>

        {/* Hover Description (Hidden on mobile, slides up on desktop) */}
        <div className="hidden md:block overflow-hidden mt-4 h-0 group-hover:h-[60px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <p className="text-white/70 text-sm max-w-md transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default function BentoPortfolio() {
  return (
    <section className="py-32 md:py-48 w-full relative border-t border-b border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00F0FF]/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="max-w-[1600px] mx-auto w-full px-6 md:px-12 flex flex-col items-start mb-16 z-10 relative">
        {/* Glassmorphic Eyebrow */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_30px_rgba(0,240,255,0.05)] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse"></span>
          <span className="text-[#00F0FF] text-xs md:text-sm tracking-[0.2em] uppercase font-semibold">
            Featured Projects
          </span>
        </div>
        
        <div className="flex flex-col xl:flex-row xl:items-end justify-between w-full gap-8">
          <h2 className="text-[clamp(3.5rem,6vw,7rem)] font-extrabold tracking-tighter leading-[0.9] text-white uppercase max-w-4xl">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Architecting</span>
            <span className="block">The Future</span>
          </h2>
          <p className="text-white/50 text-xl leading-relaxed max-w-md font-light pb-2">
            Explore our premium selection of highly engineered digital experiences that dominate their respective markets.
          </p>
        </div>
      </div>

      <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
          {projects.map((project) => (
            <BentoCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
