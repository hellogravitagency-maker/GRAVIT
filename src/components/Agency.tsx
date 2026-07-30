import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import Magnetic from './Magnetic';
import SplitText from './SplitText';
import { cn } from '../lib/utils';
import { MorphingText } from './MorphingText';
import { TerminalDemo } from './TerminalDemo';
import PixelCard from './PixelCard';
import { TechStackReveal } from './TechStackReveal';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

gsap.registerPlugin(ScrollTrigger);

const cultureItems = [
  {
    title: "HEADLESS ARCHITECTURE",
    desc: "We strictly decouple the frontend presentation layer from backend business logic. By utilizing composable, API-first architectures and edge-computed delivery, we ensure your digital infrastructure scales infinitely while remaining highly resilient to market and traffic fluctuations.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "DETERMINISTIC PERFORMANCE",
    desc: "To us, performance is not an afterthought—it is a core aesthetic. We meticulously engineer for zero Cumulative Layout Shift (CLS), sub-millisecond Time to First Byte (TTFB), and flawless Core Web Vitals. Our brutalist approach to asset optimization guarantees maximum conversion rates.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "CINEMATIC INTERACTIONS",
    desc: "Digital interfaces must transcend utility and feel entirely alive. We leverage raw WebGL, custom GLSL shaders, and highly optimized GSAP animation timelines to orchestrate award-winning, physics-driven micro-interactions that emotionally anchor users to your brand.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "RADICAL TRANSPARENCY",
    desc: "We dismantle the traditional, opaque agency model. No account managers acting as gatekeepers, no black box development cycles. We integrate directly with your internal teams via shared communication channels, synchronized GitHub repositories, and continuous, deployable staging environments.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
  }
];

const phases = [
  {
    num: "01",
    title: "DISCOVERY & ARCHITECTURE",
    desc: "We don't start with pixels. We start with data, business logic, and system architecture. We map out the entire domain before writing a single line of code.",
    stack: ["Figma", "Miro", "System Design", "Technical Spec"]
  },
  {
    num: "02",
    title: "CREATIVE PROTOTYPING",
    desc: "Motion and interaction are explored early. We build high-fidelity prototypes to test the emotional resonance of the interface.",
    stack: ["WebGL", "Framer Motion", "GSAP", "Creative Direction"]
  },
  {
    num: "03",
    title: "HARDCORE ENGINEERING",
    desc: "The execution phase. We write clean, perfectly typed, brutally performant code. No bloat, no shortcuts.",
    stack: ["React", "TypeScript", "Next.js", "TailwindCSS"]
  },
  {
    num: "04",
    title: "DEPLOYMENT & SCALE",
    desc: "We deploy to the edge. Automated CI/CD pipelines, global CDN distribution, and synthetic testing ensure zero downtime.",
    stack: ["Vercel", "AWS", "GitHub Actions", "Datadog"]
  }
];

export default function Agency() {
  const manifestoRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Scrubbing Text Reveal for Manifesto
    if (manifestoRef.current) {
      const words = manifestoRef.current.querySelectorAll('.word');
      gsap.set(words, { opacity: 0.1 });
      
      ScrollTrigger.create({
        trigger: manifestoRef.current,
        start: "top 80%",
        end: "bottom 40%",
        scrub: 1,
        animation: gsap.to(words, {
          opacity: 1,
          stagger: 0.05,
          ease: "none",
        })
      });
    }

    // 2. Bento Grid Image Scale & Fade
    if (gridRef.current) {
      const items = gridRef.current.querySelectorAll('.culture-card');
      items.forEach((item) => {
        const bg = item.querySelector('.card-bg');
        
        gsap.fromTo(bg, 
          { scale: 1.2, opacity: 0.2 },
          {
            scale: 1,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              end: "top 40%",
              scrub: 1
            }
          }
        );
      });
    }

    // Vertical Stepper Logic Removed for ScrollStack

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="w-full max-w-full overflow-clip bg-transparent text-white font-sans">
      
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center pt-32 pb-24 px-6 gap-12 max-w-[1600px] mx-auto">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,106,57,0.15),transparent_60%)]" />
        </div>
        
        <div className="relative z-10 w-full lg:w-1/2 text-left flex flex-col">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="h-[2px] w-12 bg-[#ff6a39] mb-8" />
            
            <h1 className="text-5xl md:text-[5rem] lg:text-[6rem] font-bold tracking-tighter leading-[0.9] mb-8 flex flex-col">
              <span>WE ARE</span>
              <MorphingText texts={["ENGINEERS.", "ARCHITECTS.", "CREATORS.", "GRAVIT."]} className="text-[#ff6a39] block min-h-[1.2em]" />
            </h1>
            
            <p className="text-xl md:text-2xl text-white/50 max-w-xl leading-relaxed mb-16">
              Founded on the belief that software should be beautiful, fast, and engineered with absolute precision. We don't build generic templates.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-start">
              <Magnetic>
                <a href="#process" className="liquid-glass px-8 py-4 text-white font-medium hover:text-black hover:bg-white transition-all duration-300 rounded-full flex items-center gap-2">
                  Our Process
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#manifesto" className="px-8 py-4 text-white/50 font-medium hover:text-white transition-all duration-300 flex items-center gap-2">
                  Read Manifesto
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 w-full lg:w-1/2 hidden md:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <TerminalDemo />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: MANIFESTO */}
      <section id="manifesto" className="py-24 md:py-32 px-6 lg:px-12 max-w-[1200px] mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-10 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-[#ff6a39] animate-pulse" />
            <span className="font-mono text-xs tracking-widest text-white/80 uppercase">The Manifesto</span>
          </div>
          <h2 ref={manifestoRef} className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.4] text-white">
            {"The era of bloated digital products is over. We engineer high-performance platforms blending ruthless speed with cinematic aesthetics. No templates. Just market leaders.".split(" ").map((word, i) => (
              <span key={i} className="word inline-block mr-[0.25em]">{word}</span>
            ))}
          </h2>
        </div>
      </section>

      {/* SECTION 3: DNA GRID */}
      <section className="py-32 md:py-48 px-4 md:px-8 max-w-[1600px] mx-auto">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <div className="h-[2px] w-12 bg-[#ff6a39] mb-8" />
            <SplitText text="Our DNA." className="text-5xl md:text-7xl font-bold tracking-tight" />
          </div>
          <p className="text-white/50 text-xl max-w-lg leading-relaxed">
            The immutable principles that govern our engineering philosophy and design decisions. We reject mediocrity to build software that scales aggressively and performs flawlessly.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 auto-rows-[400px] gap-6 grid-flow-dense">
          {cultureItems.map((item, i) => (
            <PixelCard
              key={i}
              variant="default"
              speed={40}
              gap={10}
              colors={i % 2 === 0 ? "#111111,#222222,#ff6a39" : "#111111,#222222,#6e7bff"}
              className={cn(
                "w-full h-full relative overflow-hidden rounded-[2rem] flex flex-col justify-end p-8 md:p-12 border border-white/5 group",
                i === 0 ? "md:col-span-2" : "",
                i === 3 ? "md:col-span-2" : ""
              )}
            >
              <div className="relative z-20 pointer-events-none">
                <span className="font-mono text-xs text-[#ff6a39] mb-4 block group-hover:translate-x-2 transition-transform duration-500">0{i + 1}</span>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/50 max-w-md leading-relaxed">{item.desc}</p>
              </div>
            </PixelCard>
          ))}
        </div>
      </section>

      {/* SECTION 4: PROCESS (SCROLL STACK) */}
      <section id="process" className="py-32 md:py-48 max-w-[1400px] mx-auto border-t border-white/10 relative">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-[radial-gradient(circle_at_center,rgba(255,106,57,0.1),transparent_70%)] blur-[100px]" />
        </div>

        <div className="relative z-10 mb-24 text-center px-4">
          <div className="h-[2px] w-12 bg-[#ff6a39] mx-auto mb-8" />
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 flex items-center justify-center gap-4">
            How we <span className="text-white/40 italic">build.</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/50 leading-relaxed max-w-2xl mx-auto">
            A brutalist approach to perfection. We have stripped away the agency bloat to focus entirely on engineering excellence.
          </p>
        </div>

        <div className="relative z-10">
          <ScrollStack 
            className="w-full"
            itemDistance={200}
            itemStackDistance={40}
            blurAmount={2}
            useWindowScroll={true}
          >
          {phases.map((phase) => (
            <ScrollStackItem key={phase.num}>
              <div className="group relative overflow-hidden w-full bg-[#050505] border border-white/10 hover:border-white/30 rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row gap-12 items-start justify-between min-h-[400px] transition-all duration-700 ease-out shadow-[0_0_0_rgba(255,106,57,0)] hover:shadow-[0_20px_60px_-20px_rgba(255,106,57,0.15)]">
                {/* Background Number */}
                <div className="absolute -right-8 -bottom-16 text-[20rem] font-bold leading-none text-white opacity-[0.02] group-hover:scale-105 group-hover:opacity-[0.05] group-hover:text-[#ff6a39] transition-all duration-[1s] ease-out pointer-events-none select-none font-mono">
                  {phase.num}
                </div>
                
                <div className="relative z-10 max-w-2xl transform group-hover:translate-x-4 transition-transform duration-700 ease-out">
                  <div className="flex items-center gap-6 mb-8">
                    <span className="font-mono text-2xl font-bold text-[#ff6a39] group-hover:text-white transition-colors duration-700">{phase.num}</span>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight">{phase.title}</h3>
                  </div>
                  
                  <p className="text-white/50 text-xl leading-relaxed mb-12">
                    {phase.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mt-auto">
                    {phase.stack.map((tech, idx) => (
                      <span 
                        key={tech} 
                        className="px-5 py-3 bg-[#111] border border-white/5 rounded-full font-mono text-sm text-white/80 hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-default hover:-translate-y-1"
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
        </div>
      </section>

      {/* SECTION 4.5: TECH STACK */}
      <section className="py-24 border-t border-white/10 w-full overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 mb-12 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Our Arsenal</h2>
          <p className="text-white/50 text-xl max-w-2xl">We build with the modern, high-performance web stack.</p>
        </div>
        <TechStackReveal />
      </section>

      {/* SECTION 5: CTA */}
      <section className="py-32 md:py-48 px-6 text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-12">
            Ready to <span className="text-[#ff6a39] italic">scale?</span>
          </h2>
          <Magnetic>
            <Link to="/contact" className="inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform duration-500">
              Start a Project
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </Magnetic>
        </div>
      </section>

    </div>
  );
}
