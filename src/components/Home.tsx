import React, { useRef, useState, useEffect, Suspense } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import { ArrowRight, ArrowUpRight, Code, Cpu, Palette, BarChart3, Layout, Sparkles, Megaphone, Search } from 'lucide-react';
import SmartTypewriter from './ui/SmartTypewriter';
import Infinite3DCarousel from './framer/Infinite3DCarousel';
import TrustedBy from './home/TrustedBy';
import MotionFeatureCards from './home/MotionFeatureCards';
import Capabilities from './home/Capabilities';
import ServiceBranding from './home/ServiceBranding';
import ServiceUIUX from './home/ServiceUIUX';
import ServiceDevelopment from './home/ServiceDevelopment';
import ProcessSection from './home/ProcessSection';
import SelectedWork from './home/SelectedWork';
import PortfolioGrid from './home/PortfolioGrid';
import Results from './home/Results';
import Testimonials from './home/Testimonials';
import Faq from './home/Faq';

gsap.registerPlugin(ScrollTrigger);

// ── Scroll-triggered text reveal ────────────────────────────────
const SplitTextReveal = ({ text, className = "" }: { text: string; className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const chars = containerRef.current?.querySelectorAll('.char');
    if (!chars) return;

    gsap.fromTo(chars,
      { opacity: 0, y: 50, rotateX: -90 },
      {
        opacity: 1, y: 0, rotateX: 0,
        stagger: 0.02,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={`${className} perspective-1000`}>
      {text.split(' ').map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.3em] overflow-visible">
          {word.split('').map((char, charIdx) => (
            <span key={charIdx} className="char inline-block origin-bottom">
              {char}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
};


export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const manifestoRef = useRef<HTMLDivElement>(null);


  useGSAP(() => {
    // ── Hero entrance ──────────────────────────────────────────
    const tl = gsap.timeline();

    tl.fromTo(".hero-headline",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.0, ease: "power4.out" }
    )
    .fromTo(".hero-subtitle",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    )
    .fromTo(".hero-cta",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    );

    // Removed Hero parallax to keep content visible while scrolling

    // ── Manifesto word reveal ──────────────────────────────────
    const manifestoWords = gsap.utils.toArray('.manifesto-word');
    gsap.fromTo(manifestoWords,
      { color: "var(--app-text-secondary)" },
      {
        color: "var(--app-text-primary)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: manifestoRef.current,
          start: "top 70%",
          end: "bottom 50%",
          scrub: true
        }
      }
    );

    // (Cards are now handled in Capabilities component)

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="bg-background text-primary w-full font-sans relative">
      <SEO
        title="GRAVIT | Engineering the Extraordinary"
        description="We build digital products that move businesses forward. Sophisticated digital engineering for ambitious teams."
      />

      {/* ══════════════════════════════════════════════════════════════
          01: HERO — Build Your Identity / Connect Your World
      ══════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative w-full flex flex-col items-center justify-center overflow-hidden pt-12 pb-4 sm:pb-6 bg-black">
        {/* Floating Collaborator Pin: Robert (Left) */}
        <div className="hidden sm:flex absolute top-[28%] left-[5%] md:left-[10%] lg:left-[15%] z-30 animate-float-tag-left items-center gap-1.5 px-3 py-1 rounded-full bg-[#2DD4BF] text-black text-xs font-bold shadow-[0_8px_24px_rgba(45,212,191,0.35)] select-none pointer-events-auto">
          <span>Robert</span>
          <svg className="w-3.5 h-3.5 -rotate-45" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </div>

        {/* Floating Collaborator Pin: Clarissa (Right) */}
        <div className="hidden sm:flex absolute top-[34%] right-[5%] md:right-[10%] lg:right-[14%] z-30 animate-float-tag-right items-center gap-1.5 px-3 py-1 rounded-full bg-[#FB7185] text-black text-xs font-bold shadow-[0_8px_24px_rgba(251,113,133,0.35)] select-none pointer-events-auto">
          <span>Clarissa</span>
          <svg className="w-3.5 h-3.5 rotate-45" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </div>

        {/* Floating 3D Prop: Megaphone (Left) */}
        <div className="hidden lg:block absolute bottom-[24%] left-[3%] xl:left-[6%] z-20 animate-float-prop-left pointer-events-none select-none">
          <img
            src="/assets/hero-avatars/prop_megaphone.jpg"
            alt="3D Megaphone"
            className="w-28 h-28 xl:w-36 xl:h-36 object-cover rounded-3xl shadow-[0_24px_48px_rgba(0,0,0,0.6)] border border-white/10 mix-blend-screen"
          />
        </div>

        {/* Floating 3D Prop: Retro Computer (Right) */}
        <div className="hidden lg:block absolute bottom-[22%] right-[3%] xl:right-[6%] z-20 animate-float-prop-right pointer-events-none select-none">
          <img
            src="/assets/hero-avatars/prop_computer.jpg"
            alt="3D Retro Computer"
            className="w-28 h-28 xl:w-36 xl:h-36 object-cover rounded-3xl shadow-[0_24px_48px_rgba(0,0,0,0.6)] border border-white/10 mix-blend-screen"
          />
        </div>

        <div className="hero-content relative z-10 flex flex-col items-center text-center w-full px-4 sm:px-6 pt-16 pb-2 max-w-7xl mx-auto">
          
          {/* Headline — GRAVIT Signature Font (Syne) */}
          <h1 className="hero-headline flex flex-col items-center justify-center text-center font-heading tracking-tight">
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-white tracking-tight leading-[0.98]">
              Build Your Identity
            </span>
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-white/90 tracking-tight leading-[0.98] mt-2 sm:mt-3">
              Connect Your World
            </span>
          </h1>

          {/* Subtitle — GRAVIT Body Font (Inter) */}
          <p className="hero-subtitle mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-zinc-400 font-normal leading-relaxed max-w-xl text-center">
            Crafting iconic digital experiences and modern web products for ambitious brands.
          </p>

          {/* 3D Cards Carousel — tight bottom margin */}
          <div className="relative w-full flex justify-center items-center h-[335px] sm:h-[395px] lg:h-[445px] mt-4 mb-2">
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center relative">
                <div className="absolute bg-[#0096A8] rounded-[26px] shadow-2xl border border-white/20" style={{ width: 330, height: 440, transform: 'translateZ(0)', overflow: 'hidden' }}>
                  <img src="/assets/hero-avatars/avatar_glue.jpg" className="w-full h-full object-cover" alt="Glue Avatar" fetchPriority="high" loading="eager" decoding="sync" />
                </div>
              </div>
            }>
              <Infinite3DCarousel 
                style={{ width: '100%', height: '100%' }}
                autoPlay={true}
                autoPlaySpeed={20}
                dragSensitivity={1.1}
                blurAmount={6}
                sideRotation={14}
                sideTilt={6}
                perspective={1800}
              />
            </Suspense>
          </div>

          {/* Start Project CTA with text */}
          <div className="hero-cta flex flex-col items-center text-center mt-2 z-20 max-w-md px-4">
            <p className="text-xs sm:text-sm text-zinc-400 mb-2.5 leading-relaxed">
              Ready to bring your digital vision to life? Let’s create something extraordinary.
            </p>
            <Link 
              to="/contact" 
              className="group inline-flex items-center gap-2.5 px-6 py-2.5 sm:py-3 rounded-full bg-white text-black font-semibold text-xs sm:text-sm shadow-[0_10px_25px_rgba(255,255,255,0.15)] hover:scale-105 hover:bg-zinc-100 transition-all duration-300 pointer-events-auto"
            >
              <span>Start a Project</span>
              <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[11px] font-bold group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </Link>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          02: TRUSTED BY — Auto-scroll Marquee
      ══════════════════════════════════════════════════════════════ */}
      <TrustedBy />

      {/* ══════════════════════════════════════════════════════════════
          03: WHAT WE BUILD (Motion Feature Cards)
      ══════════════════════════════════════════════════════════════ */}
      <MotionFeatureCards />

      {/* ══════════════════════════════════════════════════════════════
          03a: CAPABILITIES ARCHITECTURE
      ══════════════════════════════════════════════════════════════ */}
      <Capabilities />

      {/* ══════════════════════════════════════════════════════════════
          03b: SERVICE PIPELINE
      ══════════════════════════════════════════════════════════════ */}
      <ServiceBranding />
      <ServiceUIUX />
      <ServiceDevelopment />

      {/* ══════════════════════════════════════════════════════════════
          03c: PROCESS
      ══════════════════════════════════════════════════════════════ */}
      <ProcessSection />

      {/* ══════════════════════════════════════════════════════════════
          04: MANIFESTO — Scroll Scrub Reveal
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="section-editorial">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-secondary mb-12">Our Philosophy</p>
          <div ref={manifestoRef} className="text-3xl md:text-5xl lg:text-6xl display-editorial leading-[1.15] max-w-5xl" aria-hidden="true">
            {("We reject the generic. Every pixel, every line of code, every interaction is engineered with precision to create digital experiences that refuse to be ignored.").split(" ").map((word, i) => (
              <span key={i} className="manifesto-word inline-block mr-[0.25em]">{word}</span>
            ))}
          </div>
          <p className="sr-only">We reject the generic. Every pixel, every line of code, every interaction is engineered with precision to create digital experiences that refuse to be ignored.</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          05: SELECTED WORK
      ══════════════════════════════════════════════════════════════ */}
      <SelectedWork />

      {/* ══════════════════════════════════════════════════════════════
          05b: PORTFOLIO GRID
      ══════════════════════════════════════════════════════════════ */}
      <PortfolioGrid />

      {/* ══════════════════════════════════════════════════════════════
          06: RESULTS / METRICS
      ══════════════════════════════════════════════════════════════ */}
      <Results />

      {/* ══════════════════════════════════════════════════════════════
          07: TESTIMONIALS
      ══════════════════════════════════════════════════════════════ */}
      <Testimonials />

      {/* ══════════════════════════════════════════════════════════════
          08: FAQ
      ══════════════════════════════════════════════════════════════ */}
      <Faq />

      {/* ══════════════════════════════════════════════════════════════
          09: CTA BANNER — Full-width dark
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-32 bg-primary text-primary-foreground overflow-hidden">
        {/* Atmospheric orbs */}
        <div className="elevenlabs-orb elevenlabs-orb--sky w-[400px] h-[400px] top-[-15%] right-[-5%] !opacity-10" />
        <div className="elevenlabs-orb elevenlabs-orb--mint w-[300px] h-[300px] bottom-[-10%] left-[10%] !opacity-10" />

        <div className="section-editorial relative z-10 flex flex-col items-center text-center">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary-foreground/70 mb-6">Ready to build?</p>
          <h2 className="display-editorial text-4xl md:text-6xl lg:text-7xl text-primary-foreground max-w-3xl mb-8">
            Let's create something
            <br />
            extraordinary together.
          </h2>
          <p className="text-primary-foreground/60 text-lg max-w-xl mb-12 leading-relaxed">
            We partner with ambitious teams to build digital products that set new standards. Tell us about your project.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-full font-semibold text-sm tracking-wide hover:scale-105 transition-transform"
            >
              Start a Project
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 border border-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm tracking-wide hover:border-primary-foreground/60 hover:scale-105 transition-all"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
