import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';
import PipelineDiagram from './PipelineDiagram';
import ArsenalGrid from './ArsenalGrid';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import ScrollReveal from './ScrollReveal';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import ScrambleText from './ScrambleText';
import SEO from './SEO';


gsap.registerPlugin(ScrollTrigger);

const dnaItems = [
  {
    title: "Modern Technology",
    desc: "We use the latest tools to make sure your website is fast and can grow with your business.",
  },
  {
    title: "Top Performance",
    desc: "Speed is our priority. We optimize every part of your website to ensure it loads instantly and keeps users happy.",
  },
  {
    title: "Beautiful Animations",
    desc: "We use advanced animation tools to create smooth, beautiful effects that delight your users.",
  },
  {
    title: "Full Transparency",
    desc: "We work directly with your team, keeping everything open and clear at every step of the process.",
  }
];

const phases = [
  {
    step: '01.',
    title: 'Discovery & Architecture',
    desc: 'We map out the entire domain before writing a single line of code.'
  },
  {
    step: '02.',
    title: 'Creative Prototyping',
    desc: 'Motion and interaction are explored early. High-fidelity prototypes to test emotional resonance.'
  },
  {
    step: '03.',
    title: 'Hardcore Engineering',
    desc: 'Clean, perfectly typed, brutally performant code. No bloat, no shortcuts.'
  },
  {
    step: '04.',
    title: 'Deployment & Scale',
    desc: 'Automated CI/CD pipelines, global CDN distribution, and synthetic testing ensure zero downtime.'
  }
];



const engagementModels = [
  {
    title: "Dedicated Squads",
    desc: "Fully autonomous, cross-functional engineering teams embedded directly into your operational pipeline. Ideal for long-term product evolution."
  },
  {
    title: "Architectural Consulting",
    desc: "High-level system design, performance auditing, and technical strategy for organizations looking to modernize their infrastructure."
  },
  {
    title: "Project Delivery",
    desc: "End-to-end execution of flagship digital products. We take full ownership from the initial discovery phase through deployment and scaling."
  }
];

export default function Agency() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full flex flex-col bg-transparent text-white">
      <SEO title="The Agency" description="We are a tight-knit collective of digital craftsmen building the next web." />
      
      {/* HERO */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-start pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10 overflow-hidden">
        <div className="relative z-10 flex flex-col items-start justify-center w-full h-full">
           <h1 className="text-[clamp(3rem,8vw,8rem)] leading-[0.9] font-bold tracking-tighter mb-6 text-white uppercase flex flex-col items-start justify-center">
              <ScrambleText text="Expert" className="block" />
              <ScrambleText text="Engineering." className="block" />
           </h1>
           <motion.h2 
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.8 }}
             className="text-white/60 text-lg md:text-xl font-light tracking-wide max-w-2xl mt-4"
           >
             We don't build generic templates. We build fast, reliable websites with great attention to detail.
           </motion.h2>
        </div>
      </section>

      {/* [01. MANIFESTO] */}
      <section className="animate-on-scroll py-32 px-6 md:px-12 max-w-7xl mx-auto w-full border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-3">
            <h3 className="text-[10px] font-mono tracking-[0.2em] text-[#ff6a00] uppercase">[01. MANIFESTO]</h3>
          </div>
          <div className="md:col-span-9">
            <ScrollReveal
              enableBlur={true}
              baseOpacity={0.1}
              baseRotation={0}
              blurStrength={4}
              rotationEnd="bottom bottom"
              wordAnimationEnd="bottom bottom"
              textClassName="text-2xl md:text-5xl font-normal text-white leading-[1.2] tracking-tight"
            >
              The era of bloated digital products is over. We engineer platforms blending ruthless speed with aesthetic utility. No templates. Just market leaders.
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* [02. CORE DNA] */}
      <section className="animate-on-scroll py-32 px-6 md:px-12 max-w-7xl mx-auto w-full border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-3">
            <h3 className="text-[10px] font-mono tracking-[0.2em] text-[#ff6a00] uppercase">[02. CORE DNA]</h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dnaItems.map((item, i) => (
            <div key={i} className="p-10 border border-white/10 rounded-2xl group hover:bg-white/5 transition-all duration-500 cursor-default relative overflow-hidden">
              <div className="font-mono text-xs text-white/40 mb-8 group-hover:text-[var(--color-accent)] transform group-hover:rotate-90 origin-center transition-all duration-500 inline-block">[+]</div>
              <h2 className="text-xl font-normal text-white mb-4 tracking-tight transform group-hover:translate-x-2 transition-transform duration-500">{item.title}</h2>
              <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* [03. ASSEMBLY LINE] */}
      <section className="animate-on-scroll py-32 px-6 md:px-12 max-w-7xl mx-auto w-full border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-3">
            <h3 className="text-[10px] font-mono tracking-[0.2em] text-[#ff6a00] uppercase">[03. ASSEMBLY LINE]</h3>
          </div>
        </div>
        
        <div className="flex flex-col border-t border-white/10 mt-16 pt-16">
          <ScrollStack itemDistance={150} itemStackDistance={30} baseScale={0.85} rotationAmount={0} blurAmount={2} useWindowScroll={true}>
            {phases.map((p, i) => (
              <ScrollStackItem key={p.step} itemClassName="w-full bg-[#050505] border border-white/10 rounded-3xl p-10 md:p-16 mb-[10vh] max-w-5xl mx-auto flex items-center justify-center min-h-[300px]">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center w-full">
                  <div className="md:col-span-3 font-mono text-[#ff6a00] text-xl md:text-3xl tracking-tighter">{p.step}</div>
                  <div className="md:col-span-4 text-white text-2xl md:text-4xl font-bold tracking-tight">{p.title}</div>
                  <div className="md:col-span-5 text-white/60 text-base md:text-lg leading-relaxed">{p.desc}</div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </section>

      {/* [04. DEPLOYMENT PIPELINE] */}
      <section className="animate-on-scroll py-32 px-6 md:px-12 max-w-7xl mx-auto w-full border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-3">
            <h3 className="text-[10px] font-mono tracking-[0.2em] text-[#ff6a00] uppercase">[04. DEPLOYMENT SAFETY]</h3>
          </div>
          <div className="md:col-span-9">
            <h2 className="text-lg md:text-2xl font-normal text-white leading-[1.2] tracking-tight mb-8">
              We deploy across isolated branching environments, ensuring 100% test coverage before any merge hits production.
            </h2>
          </div>
        </div>
        
        <div className="w-full relative z-10 border border-white/10 p-2 md:p-6 rounded-2xl overflow-hidden bg-black/40 backdrop-blur-sm">
          <PipelineDiagram />
        </div>
      </section>

      {/* [05. THE ARSENAL] */}
      <section className="animate-on-scroll py-32 px-6 md:px-12 max-w-7xl mx-auto w-full border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-3">
            <h3 className="text-[10px] font-mono tracking-[0.2em] text-[#ff6a00] uppercase">[05. THE ARSENAL]</h3>
          </div>
        </div>
        <div className="w-full relative z-10 pt-8">
           <ArsenalGrid />
        </div>
      </section>

      {/* [06. ENGAGEMENT MODEL] */}
      <section className="animate-on-scroll py-32 px-6 md:px-12 max-w-7xl mx-auto w-full border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-3">
            <h3 className="text-[10px] font-mono tracking-[0.2em] text-[#ff6a00] uppercase">[06. ENGAGEMENT MODEL]</h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {engagementModels.map((model, i) => (
            <div key={i} className="p-10 border border-white/10 rounded-2xl group hover:bg-white/5 transition-all duration-500 cursor-default relative overflow-hidden">
              <div className="font-mono text-xs text-white/40 mb-8 group-hover:text-[var(--color-accent)] transform group-hover:rotate-90 origin-center transition-all duration-500 inline-block">[+]</div>
              <h2 className="text-xl font-normal text-white mb-4 tracking-tight transform group-hover:translate-x-2 transition-transform duration-500">{model.title}</h2>
              <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-500">{model.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / Outro */}
      <section className="animate-on-scroll pt-32 pb-48 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-12 text-center">Ready to engineer<br/>the future?</h2>
        <HoverBorderGradient as={Link} to="/contact" className="px-8 py-4 bg-[#050505] text-white text-sm font-mono tracking-[0.1em] uppercase flex items-center gap-3">
          <span>Initialize Project</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </HoverBorderGradient>
      </section>

    </div>
  );
}
