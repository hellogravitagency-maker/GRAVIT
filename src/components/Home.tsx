import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import { ArrowRight, ArrowUpRight, Code, Cpu, Palette, BarChart3, Layout, Sparkles, Megaphone, Search } from 'lucide-react';
import TrustedBy from './home/TrustedBy';
import SelectedWork from './home/SelectedWork';
import Results from './home/Results';
import Testimonials from './home/Testimonials';
import Faq from './home/Faq';
import CrescentQuotePro from './framer/CrescentQuotePro';
import MotionFeatureCards from './home/MotionFeatureCards';
import ServiceBranding from './home/ServiceBranding';
import ServiceUIUX from './home/ServiceUIUX';
import ServiceDevelopment from './home/ServiceDevelopment';
import ProcessSection from './home/ProcessSection';
import PortfolioGrid from './home/PortfolioGrid';
import SmartTypewriter from './ui/SmartTypewriter';

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

  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useGSAP(() => {
    // ── Hero entrance ──────────────────────────────────────────
    const tl = gsap.timeline();

    tl.fromTo(".hero-label",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(".hero-headline",
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
      "-=0.5"
    )
    .fromTo(".hero-subtitle",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
      "-=0.8"
    )
    .fromTo(".hero-cta",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
      "-=0.6"
    )
    .fromTo(".hero-quick-links",
      { y: 15, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.7"
    );

    // Removed Hero parallax to keep content visible while scrolling

    // ── Manifesto word reveal ──────────────────────────────────
    const manifestoWords = gsap.utils.toArray('.manifesto-word');
    gsap.fromTo(manifestoWords,
      { color: "var(--app-border)" },
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
          01: HERO — Cinematic Editorial
      ══════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative w-full flex flex-col items-center justify-center overflow-hidden pt-8 pb-4">
        {/* Atmospheric orbs */}
        <div className="elevenlabs-orb elevenlabs-orb--mint w-[500px] h-[500px] top-[-10%] left-[-5%]" style={{ animationDelay: '0s' }} />
        <div className="elevenlabs-orb elevenlabs-orb--peach w-[400px] h-[400px] bottom-[5%] right-[-5%]" style={{ animationDelay: '7s' }} />
        <div className="elevenlabs-orb elevenlabs-orb--lavender w-[350px] h-[350px] top-[30%] right-[20%]" style={{ animationDelay: '14s' }} />

        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />

        <div className="hero-content relative z-10 flex flex-col items-center text-center w-full px-6 pt-24 pb-4 max-w-7xl mx-auto">
          
          {/* Top: Text */}
          <div className="flex flex-col items-center max-w-3xl mb-4 mt-2">
            {/* Headline */}
            <h1 className="hero-headline display-editorial text-[clamp(1.75rem,4vw,3.5rem)] text-primary leading-[1.05] h-[2.1em] md:h-auto">
              Engineering the
              <br />
              <SmartTypewriter words={["Extraordinary", "Future", "Impossible", "Unimaginable"]} />
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle mt-3 text-sm md:text-base text-secondary font-normal leading-relaxed max-w-2xl">
              We craft high-performance digital products for ambitious teams.
              Strategy, design, and engineering — unified under one roof.
            </p>
          </div>

          {/* Center: Cards (CrescentQuotePro) */}
          <div className="relative w-full flex justify-center items-center h-[300px] md:h-[400px] lg:h-[480px] mb-4 lg:mb-8">
            <CrescentQuotePro 
              style={{ width: '100%', height: '100%' }} 
              plateW={isDesktop ? 260 : 180} 
              plateH={isDesktop ? 340 : 240}
              roster={[
                {
                  name: "Aetheris AI",
                  role: "Technology Platform",
                  location: "Dark Mode",
                  rating: 5,
                  accent: "#3F6B7D",
                  title: "Intelligence beautifully engineered.",
                  quote: "Sleek glassmorphism and glowing gradients create an interface that feels as advanced as the AI powering it.",
                  photoUrl: "/assets/work/premium_web_ai_1788031024675.jpg"
                },
                {
                  name: "Aethelred & Co.",
                  role: "Architecture Firm",
                  location: "Minimalist",
                  rating: 5,
                  accent: "#9C5468",
                  title: "Crafting digital spaces.",
                  quote: "Elegant serif typography and high-res photography blend into a sophisticated, award-winning luxury experience.",
                  photoUrl: "/assets/work/premium_web_architecture_1788031038602.jpg"
                },
                {
                  name: "Aura AI",
                  role: "SaaS Application",
                  location: "Bento Layout",
                  rating: 5,
                  accent: "#B0654A",
                  title: "Clarity through design.",
                  quote: "Clean layouts, perfect spacing, and beautiful 3D abstract icons that elevate the standard SaaS landing page.",
                  photoUrl: "/assets/work/premium_web_saas_1788031048052.jpg"
                },
                {
                  name: "Avant Garde",
                  role: "Creative Studio",
                  location: "Immersive Web",
                  rating: 5,
                  accent: "#5A7D62",
                  title: "Breaking digital boundaries.",
                  quote: "Dynamic bold typography and elegant dark mode UI combine for an unapologetically professional portfolio.",
                  photoUrl: "/assets/work/premium_web_portfolio_1788031060883.jpg"
                },
                {
                  name: "Nexus DeFi",
                  role: "Web3 Platform",
                  location: "Holographic UI",
                  rating: 5,
                  accent: "#6F63A0",
                  title: "The future of finance.",
                  quote: "Subtle holographic and neon accents paired with exceptional data visualization for the modern crypto user.",
                  photoUrl: "/assets/work/premium_web_web3_1788031072809.jpg"
                }
              ]}
            />
          </div>

          {/* Bottom: Content & CTAs */}
          <div className="flex flex-col items-center max-w-md text-center">
            <p className="text-secondary text-sm md:text-sm mb-6 leading-relaxed">
              Experience the perfect blend of aesthetic brilliance and technical superiority. We bring your vision to life with modern digital solutions.
            </p>
            {/* Dual CTAs */}
            <div className="hero-cta flex flex-wrap items-center justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-medium text-xs tracking-wide hover:scale-105 transition-transform">
                Start a Project
                <ArrowRight size={14} />
              </Link>
              <Link to="/work" className="inline-flex items-center gap-2 border border-border text-primary px-5 py-2.5 rounded-full font-medium text-xs tracking-wide hover:border-primary/60 hover:scale-105 transition-all">
                View Our Work
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          02: TRUSTED BY — Auto-scroll Marquee
      ══════════════════════════════════════════════════════════════ */}
      <TrustedBy />

      {/* ══════════════════════════════════════════════════════════════
          03: CAPABILITIES (Replaces Services Bento)
      ══════════════════════════════════════════════════════════════ */}
      <MotionFeatureCards />

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
          <div ref={manifestoRef} className="text-3xl md:text-5xl lg:text-6xl display-editorial leading-[1.15] max-w-5xl">
            {("We reject the generic. Every pixel, every line of code, every interaction is engineered with precision to create digital experiences that refuse to be ignored.").split(" ").map((word, i) => (
              <span key={i} className="manifesto-word inline-block mr-[0.25em]">{word}</span>
            ))}
          </div>
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
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary-foreground/50 mb-6">Ready to build?</p>
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
