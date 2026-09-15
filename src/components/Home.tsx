import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import SmartTypewriter from './ui/SmartTypewriter';
import Infinite3DCarousel from './framer/Infinite3DCarousel';
import { ArrowRight } from 'lucide-react';
const TrustedBy = React.lazy(() => import('./home/TrustedBy'));
const MotionFeatureCards = React.lazy(() => import('./home/MotionFeatureCards'));
const Capabilities = React.lazy(() => import('./home/Capabilities'));
const ServiceBranding = React.lazy(() => import('./home/ServiceBranding'));
const ServiceUIUX = React.lazy(() => import('./home/ServiceUIUX'));
const ServiceDevelopment = React.lazy(() => import('./home/ServiceDevelopment'));
const ProcessSection = React.lazy(() => import('./home/ProcessSection'));
const ManifestoSection = React.lazy(() => import('./home/ManifestoSection'));
const SelectedWork = React.lazy(() => import('./home/SelectedWork'));
const PortfolioGrid = React.lazy(() => import('./home/PortfolioGrid'));
const Results = React.lazy(() => import('./home/Results'));
const Testimonials = React.lazy(() => import('./home/Testimonials'));
const Faq = React.lazy(() => import('./home/Faq'));

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <main ref={containerRef} className="bg-background text-primary w-full font-sans relative">
      <SEO
        title="GRAVIT | Engineering the Extraordinary"
        description="We build digital products that move businesses forward. Sophisticated digital engineering for ambitious teams."
      />

      {/* ══════════════════════════════════════════════════════════════
          01: HERO — Build Your Identity / Connect Your World
      ══════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative w-full flex flex-col items-center justify-center overflow-hidden pt-12 pb-4 sm:pb-6 bg-background transition-colors duration-300">
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
            src="/assets/hero-avatars/prop_megaphone.webp"
            alt="3D Megaphone"
            className="w-28 h-28 xl:w-36 xl:h-36 object-cover rounded-3xl shadow-[0_24px_48px_rgba(0,0,0,0.6)] border border-white/10 mix-blend-screen"
            fetchPriority="low" loading="lazy" decoding="async"
          />
        </div>

        {/* Floating 3D Prop: Retro Computer (Right) */}
        <div className="hidden lg:block absolute bottom-[22%] right-[3%] xl:right-[6%] z-20 animate-float-prop-right pointer-events-none select-none">
          <img
            src="/assets/hero-avatars/prop_computer.webp"
            alt="3D Retro Computer"
            className="w-28 h-28 xl:w-36 xl:h-36 object-cover rounded-3xl shadow-[0_24px_48px_rgba(0,0,0,0.6)] border border-white/10 mix-blend-screen"
            fetchPriority="low" loading="lazy" decoding="async"
          />
        </div>

        <div className="hero-content relative z-10 flex flex-col items-center text-center w-full px-4 sm:px-6 pt-16 pb-2 max-w-7xl mx-auto">
          
          {/* Headline — GRAVIT Signature Font (Syne) */}
          <h1 className="hero-headline text-[clamp(2rem,5.5vw,4.5rem)] font-heading font-bold text-primary tracking-tight leading-[1.05] min-h-[2.5em] transition-colors duration-300">
            Engineering the
            <br />
            <span className="text-gradient-accent pb-2 inline-block">
              <SmartTypewriter words={["Extraordinary", "Future", "Impossible", "Unimaginable"]} />
            </span>
          </h1>

          {/* Subtitle — GRAVIT Body Font (Inter) */}
          <p className="hero-subtitle mt-4 sm:mt-5 text-xs sm:text-sm md:text-base text-secondary font-normal leading-relaxed max-w-2xl text-center">
            We craft high-performance digital products for ambitious teams.
            Strategy, design, and engineering — unified under one roof.
          </p>

          {/* 3D Cards Carousel */}
          <div className="relative w-full flex justify-center items-center h-[360px] sm:h-[420px] lg:h-[480px] mt-12 sm:mt-16 lg:mt-20 mb-6">
            <Infinite3DCarousel 
              style={{ width: '100%', height: '100%' }}
              autoPlay={true}
              autoPlaySpeed={22}
              dragSensitivity={1.1}
              blurAmount={0}
              sideRotation={14}
              sideTilt={6}
              perspective={1800}
            />
          </div>

          {/* Start Project CTA with text */}
          <div className="hero-cta flex flex-col items-center text-center mt-2 z-20 max-w-md px-4">
            <p className="text-xs sm:text-sm text-secondary mb-2.5 leading-relaxed">
              Ready to bring your digital vision to life? Let’s create something extraordinary.
            </p>
            <Link 
              to="/contact" 
              className="group inline-flex items-center gap-2.5 px-6 py-2.5 sm:py-3 rounded-full bg-primary text-primary-foreground font-semibold text-xs sm:text-sm shadow-xl hover:scale-105 hover:bg-primary/90 transition-all duration-300 pointer-events-auto"
            >
              <span>Start a Project</span>
              <span className="w-5 h-5 rounded-full bg-background text-primary flex items-center justify-center text-[11px] font-bold group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </Link>
          </div>

        </div>
      </section>

      <Suspense fallback={<div className="min-h-[200px] flex items-center justify-center"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
        {/* ══════════════════════════════════════════════════════════════
            02: TRUSTED BY — Auto-scroll Marquee (Directly below hero)
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
        <ManifestoSection />

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
      </Suspense>
    </main>
  );
}
