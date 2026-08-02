import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useRef, useEffect, useState, lazy, Suspense } from 'react';
import { DelayedRender } from '../App';
import TextType from './TextType';
const Ballpit = lazy(() => import('./Ballpit'));
import ScrollReveal from './ScrollReveal';
import CircularText from './CircularText';
import PixelCard from './PixelCard';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import { MorphingText } from './MorphingText';
import Magnetic from './Magnetic';
import SplitText from './SplitText';
import { HoverBorderGradient } from './ui/hover-border-gradient';

const SelectedWork = lazy(() => import('./home/SelectedWork'));
const Results = lazy(() => import('./home/Results'));
const TrustedBy = lazy(() => import('./home/TrustedBy'));
const Testimonials = lazy(() => import('./home/Testimonials'));
const Faq = lazy(() => import('./home/Faq'));

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from './SEO';


gsap.registerPlugin(ScrollTrigger);

const TechMarquee = () => {
  return (
    <div className="w-full overflow-hidden flex whitespace-nowrap py-6 border-y border-[#2F3336] bg-transparent">
      <SEO title="Gravit Agency | We Shape Digital Realities" description="A premium digital agency specializing in immersive 3D experiences, spatial computing, and high-performance web applications." />
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex items-center gap-16 text-[#71767B] font-mono text-xs tracking-widest uppercase"
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-16 ml-16">
            <span>REACT_19</span>
            <span>THREE.JS</span>
            <span>WEBGL</span>
            <span>FRAMER_MOTION</span>
            <span>GSAP</span>
            <span>TYPESCRIPT</span>
            <span>TAILWIND_V4</span>
            <span>LENIS</span>
            <span>VITE</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Grab all sections to animate
      const sections = gsap.utils.toArray<HTMLElement>('section.animate-on-scroll');
      
      sections.forEach((section) => {
        gsap.fromTo(section, 
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%', // Trigger when the top of the section hits 85% of viewport
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full flex flex-col bg-transparent">
      {/* 1. Cinematic Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-24 border-b border-white/5 overflow-hidden">
        
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-transparent">
        </div>

        {/* Architectural Plus Markers */}
        <div className="corner-plus tl" />
        <div className="corner-plus tr" />
        <div className="corner-plus bl" />
        <div className="corner-plus br" />

        <div className="absolute inset-0 z-0 pointer-events-auto opacity-70">
          <DelayedRender delay={8000}>
            <Suspense fallback={<div className="w-full h-full bg-transparent" />}>
              <Ballpit
                count={isMobile ? 15 : 30}
                gravity={0.8}
                friction={0.99}
                wallBounce={0.95}
                maxVelocity={0.5}
                followCursor={false}
                colors={[0xe6e6fa, 0xd8bfd8, 0xdda0dd, 0x9370db, 0x8a2be2, 0xffffff]}
              />
            </Suspense>
          </DelayedRender>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full h-full pointer-events-none mt-12">
          
          <h1 className="text-[clamp(3rem,7vw,7rem)] leading-[0.9] font-bold tracking-tighter mb-6 text-white uppercase" style={{ perspective: '1000px' }}>
            <span className="block overflow-hidden pb-4 -mb-4">
              {"BEYOND".split('').map((char, index) => (
                <motion.span
                  key={`beyond-${index}`}
                  className="inline-block origin-bottom"
                  initial={{ y: '100%', rotateX: -90 }}
                  animate={{ y: '0%', rotateX: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.02, ease: [0.25, 1, 0.5, 1] }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden pb-4 -mb-4">
              <span className="inline-block text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)' }}>
                {"ORDINARY".split('').map((char, index) => (
                  <motion.span
                    key={`ordinary-${index}`}
                    className="inline-block origin-bottom"
                    initial={{ y: '100%', rotateX: -90 }}
                    animate={{ y: '0%', rotateX: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.02 + 0.1, ease: [0.25, 1, 0.5, 1] }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>
            </span>
            <span className="block overflow-hidden pb-4 -mb-4">
              {"DESIGN.".split('').map((char, index) => (
                <motion.span
                  key={`design-${index}`}
                  className="inline-block origin-bottom"
                  initial={{ y: '100%', rotateX: -90 }}
                  animate={{ y: '0%', rotateX: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.02 + 0.2, ease: [0.25, 1, 0.5, 1] }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.h2 
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white/60 text-lg md:text-xl font-light tracking-wide max-w-2xl mt-4 mb-10"
          >
            We build high-performance digital flagship experiences for global brands. <span className="text-white font-medium">No templates. No compromises.</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 pointer-events-auto"
          >
            <Magnetic>
              <HoverBorderGradient as={Link} to="/contact" containerClassName="w-full sm:w-auto" className="px-8 py-4 bg-white text-black text-center font-mono text-xs uppercase tracking-widest block w-full">
                <span>Start Project</span>
              </HoverBorderGradient>
            </Magnetic>
            <Magnetic>
              <HoverBorderGradient as={Link} to="/work" containerClassName="w-full sm:w-auto" className="px-8 py-4 bg-[#050505] text-white text-center font-mono text-xs uppercase tracking-widest block w-full">
                <span>View Work</span>
              </HoverBorderGradient>
            </Magnetic>
          </motion.div>
        </div>
      </section>

      {/* 2. Tech Marquee */}
      <TechMarquee />


      {/* [01] RESEARCH ABSTRACT (Manifesto) */}
      <section className="animate-on-scroll py-32 px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-white/20 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-3">
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#ff6a00] uppercase">[01. ABSTRACT]</span>
          </div>
          <div className="md:col-span-9">
            <p className="text-2xl md:text-5xl font-normal text-white leading-[1.2] tracking-tight">
              We reject the mundane. We engineer digital spaces that operate with absolute precision and leave an indelible mark on brand perception.
            </p>
            <div className="mt-16 text-sm font-mono tracking-widest text-white/60 uppercase">
              <p>METHODOLOGY: High-Performance Architecture</p>
              <p className="mt-2">AESTHETIC: Structural Minimalism</p>
            </div>
          </div>
        </div>
      </section>

      {/* [02] METHODOLOGY (Process Pipeline) */}
      <section className="animate-on-scroll py-32 px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-3">
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#ff6a00] uppercase">[02. METHODOLOGY]</span>
          </div>
        </div>
        
        <div className="flex flex-col border-t border-white/10">
          {[
            { step: '01.', title: 'Discovery & Thesis', desc: 'We align on absolute business truth and architectural intent.' },
            { step: '02.', title: 'Structural Design', desc: 'Crafting high-fidelity mockups built strictly on utility and contrast.' },
            { step: '03.', title: 'Engineering', desc: 'Rigorous implementation using React, WebGL, and optimized payloads.' },
            { step: '04.', title: 'Deployment', desc: 'Final execution and global edge network distribution.' }
          ].map((p, i) => (
            <div key={p.step} className="grid grid-cols-1 md:grid-cols-12 gap-8 py-8 border-b border-white/10 group hover:bg-white/5 transition-all duration-500 hover:px-6 cursor-default -mx-6 px-6">
              <div className="md:col-span-3 font-mono text-white/60 text-sm group-hover:text-[var(--color-accent)] transition-colors duration-500">{p.step}</div>
              <div className="md:col-span-4 text-white text-lg tracking-tight group-hover:translate-x-4 transition-transform duration-500">{p.title}</div>
              <div className="md:col-span-5 text-white/60 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-500">{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* [03] AXIOMS (Core Values) */}
      <section className="animate-on-scroll py-32 px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-3">
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#ff6a00] uppercase">[03. AXIOMS]</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="p-10 border border-white/10 rounded-2xl group hover:bg-white/5 transition-all duration-500 cursor-default relative overflow-hidden">
             <div className="font-mono text-xs text-white/60 mb-8 group-hover:text-[var(--color-accent)] transform group-hover:rotate-90 origin-center transition-all duration-500 inline-block">[+]</div>
             <h2 className="text-xl font-normal text-white mb-4 tracking-tight transform group-hover:translate-x-2 transition-transform duration-500">Precision Code</h2>
             <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-500">Clean architecture and robust systems built without generic frameworks.</p>
           </div>
           <div className="p-10 border border-white/10 rounded-2xl group hover:bg-white/5 transition-all duration-500 cursor-default relative overflow-hidden">
             <div className="font-mono text-xs text-white/60 mb-8 group-hover:text-[var(--color-accent)] transform group-hover:rotate-90 origin-center transition-all duration-500 inline-block">[+]</div>
             <h2 className="text-xl font-normal text-white mb-4 tracking-tight transform group-hover:translate-x-2 transition-transform duration-500">Cinematic Contrast</h2>
             <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-500">Motion must be purposeful. We use stark contrasts over colorful noise.</p>
           </div>
           <div className="p-10 border border-white/10 rounded-2xl group hover:bg-white/5 transition-all duration-500 cursor-default relative overflow-hidden">
             <div className="font-mono text-xs text-white/60 mb-8 group-hover:text-[var(--color-accent)] transform group-hover:rotate-90 origin-center transition-all duration-500 inline-block">[+]</div>
             <h2 className="text-xl font-normal text-white mb-4 tracking-tight transform group-hover:translate-x-2 transition-transform duration-500">Unapologetic</h2>
             <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-500">If you want to blend in with safe SaaS designs, we are not the agency for you.</p>
           </div>
        </div>
      </section>

      {/* [04] CAPABILITIES (Services Teaser) */}
      <section className="animate-on-scroll py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-3">
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#ff6a00] uppercase">[04. CAPABILITIES]</span>
          </div>
        </div>
        <div className="flex flex-col border-t border-white/10">
           {['Web Engineering', 'Creative Design', 'Motion Graphics'].map((service, i) => (
             <div key={service} className="grid grid-cols-1 md:grid-cols-12 gap-8 py-8 border-b border-white/10 group hover:bg-white/5 transition-all duration-500 hover:px-6 cursor-default -mx-6 px-6">
               <div className="md:col-span-3 font-mono text-white/60 text-sm group-hover:text-[var(--color-accent)] transition-colors duration-500">0{i+1}.</div>
               <div className="md:col-span-9 text-2xl md:text-3xl font-normal tracking-tight text-white group-hover:translate-x-4 transition-transform duration-500">{service}</div>
             </div>
           ))}
        </div>
        <div className="mt-16">
          <HoverBorderGradient as={Link} to="/services" className="px-6 py-3 bg-[#050505] text-white text-xs font-mono tracking-[0.1em] uppercase flex items-center gap-2">
            <span>Index: All Services</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </HoverBorderGradient>
        </div>
      </section>

      {/* [06. SELECTED WORK] */}
      <Suspense fallback={<div className="h-screen w-full" />}>
        <SelectedWork />
      </Suspense>

      {/* [07. RESULTS] */}
      <Suspense fallback={<div className="h-screen w-full" />}>
        <Results />
      </Suspense>

      {/* [08. TRUSTED BY] */}
      <Suspense fallback={<div className="h-[40vh]" />}>
        <TrustedBy />
      </Suspense>

      <Suspense fallback={<div className="h-[40vh]" />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<div className="h-[40vh]" />}>
        <Faq />
      </Suspense>


    </div>
  );
}
