import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';
import PipelineDiagram from './PipelineDiagram';
import ArsenalGrid from './ArsenalGrid';
import SEO from './SEO';

gsap.registerPlugin(ScrollTrigger);

export default function Agency() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>('section.animate-on-scroll');
      
      sections.forEach((section) => {
        gsap.fromTo(section, 
          { y: 50, opacity: 0 },
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
    <div ref={containerRef} className="w-full flex flex-col bg-white text-black">
      <SEO 
        title="About GRAVIT | Digital Engineering Studio" 
        description="We don't build websites to fill a screen. We build experiences people remember. Strategy-driven. Design-led. Technology-powered." 
        path="/about"
      />
      
      {/* HERO */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-start pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-gray-200 overflow-hidden">
        <div className="relative z-10 flex flex-col items-start justify-center w-full h-full">
           <span className="text-xs font-sans tracking-[0.2em] uppercase text-gray-500 mb-8">
             About Gravit
           </span>
           <h1 className="text-[clamp(3rem,6vw,6rem)] leading-[1.1] font-serif text-black max-w-[900px]">
              More than an agency. <span className="text-gray-400 italic">A digital engineering partner.</span>
           </h1>
           <motion.p 
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="text-gray-600 text-lg md:text-2xl font-light tracking-wide max-w-3xl mt-8 leading-relaxed"
           >
             Today, we build digital experiences. Tomorrow, we build the technology behind them.
           </motion.p>
        </div>
      </section>

      {/* [01. WHY GRAVIT] */}
      <section className="animate-on-scroll py-32 px-6 md:px-12 max-w-7xl mx-auto w-full border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <h3 className="text-xs font-sans tracking-[0.1em] text-gray-400 uppercase">The Problem</h3>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-3xl md:text-5xl font-serif text-black mb-8 leading-[1.2]">
              Templates create familiarity. <br />
              <span className="italic text-gray-500">We create distinction.</span>
            </h2>
            <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed max-w-2xl">
              We don't build websites to fill a screen. We build experiences people remember, focusing on the subtle details that elevate a brand from ordinary to exceptional.
            </p>
          </div>
        </div>
      </section>

      {/* [02. OUR STANDARD] */}
      <section className="animate-on-scroll py-32 px-6 md:px-12 max-w-7xl mx-auto w-full border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-4">
            <h3 className="text-xs font-sans tracking-[0.1em] text-gray-400 uppercase">Our Standard</h3>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-3xl md:text-5xl font-serif text-black mb-6">
              Simple. Fast. Memorable.
            </h2>
            <p className="text-gray-600 text-lg font-light max-w-2xl">
              No unnecessary complexity. No copy-paste websites. No meaningless decoration. Just purposeful digital experiences.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 bg-gray-50 rounded-none border border-gray-100 transition-colors hover:bg-white hover:border-gray-300">
            <span className="text-xs font-sans text-gray-400 uppercase tracking-widest block mb-6">01</span>
            <h3 className="text-2xl font-serif mb-4 text-black">Pure Performance</h3>
            <p className="text-gray-600 text-sm font-light leading-relaxed">Eliminating bloated plugins, slow scripts, and unnecessary layers.</p>
          </div>
          <div className="p-10 bg-gray-50 rounded-none border border-gray-100 transition-colors hover:bg-white hover:border-gray-300">
            <span className="text-xs font-sans text-gray-400 uppercase tracking-widest block mb-6">02</span>
            <h3 className="text-2xl font-serif mb-4 text-black">Custom Engineering</h3>
            <p className="text-gray-600 text-sm font-light leading-relaxed">Tailored visual languages and codebases built specifically for your brand.</p>
          </div>
          <div className="p-10 bg-gray-50 rounded-none border border-gray-100 transition-colors hover:bg-white hover:border-gray-300">
            <span className="text-xs font-sans text-gray-400 uppercase tracking-widest block mb-6">03</span>
            <h3 className="text-2xl font-serif mb-4 text-black">Purposeful Design</h3>
            <p className="text-gray-600 text-sm font-light leading-relaxed">Every pixel, transition, and layout decision drives user engagement and conversion.</p>
          </div>
        </div>
      </section>

      {/* [03. OUR VISION & ROADMAP] */}
      <section className="animate-on-scroll py-32 px-6 md:px-12 max-w-7xl mx-auto w-full border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h3 className="text-xs font-sans tracking-[0.1em] text-gray-400 uppercase">The Roadmap</h3>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-3xl md:text-5xl font-serif text-black mb-8 leading-[1.2]">
              Agency &rarr; Products &rarr; Technology
            </h2>
            <p className="text-2xl font-light text-gray-500 italic">
              We don't follow what's next. We build it.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-40 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-serif text-black mb-12 leading-[1.1]">
          If you're ready to build <br/> <span className="italic font-light">something exceptional</span>
        </h2>
        <Link 
          to="/contact" 
          className="inline-block px-12 py-5 bg-black text-white font-sans font-medium uppercase tracking-widest text-sm hover:bg-gray-900 transition-colors"
        >
          Let's Build It
        </Link>
      </section>

    </div>
  );
}
