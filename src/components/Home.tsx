import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import Infinite3DCarousel from './framer/Infinite3DCarousel';
import { HERO_ITEMS } from './home/HeroCards';
import CtaPanel from './CtaPanel';
import TrustedBy from './home/TrustedBy';
import MotionFeatureCards from './home/MotionFeatureCards';
import Capabilities from './home/Capabilities';
import ServiceBranding from './home/ServiceBranding';
import ServiceUIUX from './home/ServiceUIUX';
import ServiceDevelopment from './home/ServiceDevelopment';
import ProcessSection from './home/ProcessSection';
import ManifestoSection from './home/ManifestoSection';
import SelectedWork from './home/SelectedWork';
import CreativePartner from './home/CreativePartner';
import Faq from './home/Faq';

export default function Home() {

  return (
    <main className="bg-background text-primary w-full font-sans relative">
      <SEO
        title="GRAVIT | Engineering the Extraordinary"
        description="GRAVIT designs and builds high-performance websites, SaaS products and AI automations for ambitious teams."
      />

      {/* ══════════════════════════════════════════════════════════════
          01: HERO — Build Your Identity / Connect Your World
      ══════════════════════════════════════════════════════════════ */}
      <section className="hero relative w-full overflow-hidden bg-background pt-36 md:pt-44 pb-10">
        <div className="hero-content relative z-10 flex flex-col items-center text-center px-6 max-w-6xl mx-auto">
          <h1 className="hero-headline font-heading font-semibold text-primary text-[clamp(3rem,9vw,8.5rem)] tracking-[-0.05em] leading-[0.95]">
            <span className="hero-line block">Engineering the</span>
            {/* ponytail: gradient word is revealed as one block — splitting it into chars breaks background-clip:text */}
            <span className="hero-word inline-block overflow-hidden align-bottom pb-[0.08em]">
              <span className="text-gradient-accent inline-block">Extraordinary.</span>
            </span>
          </h1>

          <p className="hero-subtitle mt-7 text-lg md:text-2xl text-secondary leading-snug tracking-[-0.02em] max-w-2xl">
            Fast websites, scalable SaaS products and AI automations, designed, engineered and shipped under one roof.
          </p>

          <div className="hero-ctas mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <Link to="/contact" className="inline-flex items-center px-7 py-3.5 rounded-full bg-primary text-background text-[15px] md:text-[17px] font-medium hover:opacity-85 active:scale-[0.97] transition">
              Start a Project
            </Link>
            <Link to="/work" className="group inline-flex items-center gap-1 text-[15px] md:text-[17px] font-medium text-accent hover:underline underline-offset-4">
              View our work
              <span className="transition-transform group-hover:translate-x-0.5">›</span>
            </Link>
          </div>

          <ul className="hero-stack mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[11px] md:text-xs uppercase tracking-wider text-muted" aria-label="Our stack">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Supabase', 'OpenAI', 'n8n'].map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        {/* Product stage: GSAP pins the hero and grows this to full size on scroll */}
        <div className="hero-stage relative w-full mt-16 md:mt-24 h-[430px] sm:h-[500px] lg:h-[580px] origin-top">
          <div className="hero-stage-inner w-full h-full">
            <Infinite3DCarousel
              items={HERO_ITEMS}
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
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          02: TRUSTED BY — Auto-scroll Marquee (Directly below hero)
      ══════════════════════════════════════════════════════════════ */}
      <TrustedBy />

      {/* ══════════════════════════════════════════════════════════════
          03: WHAT WE BUILD (Motion Feature Cards)
      ══════════════════════════════════════════════════════════════ */}
      <MotionFeatureCards />

      {/* ══════════════════════════════════════════════════════════════
          04: SELECTED WORK & CONCEPT SHOWCASE (Top Section Showcase)
      ══════════════════════════════════════════════════════════════ */}
      <SelectedWork />

      {/* ══════════════════════════════════════════════════════════════
          04b: COMMERCIAL PRODUCTION ATELIER (INEX STUDIO)
      ══════════════════════════════════════════════════════════════ */}
      <CreativePartner />

      {/* ══════════════════════════════════════════════════════════════
          05: CAPABILITIES ARCHITECTURE
      ══════════════════════════════════════════════════════════════ */}
      <Capabilities />

      {/* ══════════════════════════════════════════════════════════════
          06: SERVICE PIPELINE
      ══════════════════════════════════════════════════════════════ */}
      <ServiceBranding />
      <ServiceUIUX />
      <ServiceDevelopment />

      {/* ══════════════════════════════════════════════════════════════
          07: PROCESS
      ══════════════════════════════════════════════════════════════ */}
      <ProcessSection />

      {/* ══════════════════════════════════════════════════════════════
          08: MANIFESTO — Scroll Scrub Reveal
      ══════════════════════════════════════════════════════════════ */}
      <ManifestoSection />

      {/* ══════════════════════════════════════════════════════════════
          09: FAQ
      ══════════════════════════════════════════════════════════════ */}
      <Faq />

      {/* ══════════════════════════════════════════════════════════════
          10: CTA BANNER — Full-width dark
      ══════════════════════════════════════════════════════════════ */}
      <CtaPanel />
    </main>
  );
}
