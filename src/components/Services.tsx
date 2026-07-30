import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useNavigate } from 'react-router-dom';
import ComparisonSlider from './ComparisonSlider';
import ScrambleText from './ScrambleText';
import Magnetic from './Magnetic';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import SpecularButton from './SpecularButton';
import { cn } from '../lib/utils';

gsap.registerPlugin(ScrollTrigger);

const pricingTiers = [
  {
    name: "Dynamic / CMS Sites",
    price: "₹85k+",
    description: "For schools, clinics, and multi-service brands needing self-editable content. (typical range ₹85K–₹2.5L)",
    features: [
      "Up to 15 pages with CMS / Admin panel",
      "Blog/news, galleries, multi-step forms",
      "Database-backed where needed",
      "On-page SEO + basic analytics setup",
      "3 rounds of revisions included",
      "3 months of post-launch support included",
      "Delivery: 3–6 weeks from content handoff"
    ],
    buttonText: "Request a Quote",
    span: "md:col-span-8 md:row-span-2",
    isPrimary: true
  },
  {
    name: "Static / Brochure Sites",
    price: "₹25k+",
    description: "For portfolios, single-service businesses, and event landing pages. (typical range ₹25K–₹60K)",
    features: [
      "Up to 6 custom-designed pages",
      "Fully responsive, hand-built layout",
      "Lightweight GSAP animations",
      "On-page SEO basics",
      "Contact form wired to email",
      "2 rounds of revisions included",
      "Delivery: 1–2 weeks from content handoff"
    ],
    buttonText: "Request a Quote",
    span: "md:col-span-4 md:row-span-1",
    isPrimary: false
  },
  {
    name: "Custom / Cinematic 3D",
    price: "Custom",
    description: "For flagship brand sites and product launches. (starts at ₹2.5L, typical ₹2.5L–₹10L+)",
    features: [
      "Custom Three.js / R3F scenes & Shaders",
      "Full-stack web apps / E-commerce",
      "Performance budgeting across devices",
      "Dedicated project milestones",
      "3–6 months of post-launch support",
      "Delivery: 6–12+ weeks"
    ],
    buttonText: "Request a Quote",
    span: "md:col-span-4 md:row-span-1",
    isPrimary: false
  }
];

const services = [
  {
    id: 'Platform Engineering',
    title: 'High-Performance Architecture',
    desc: 'We build scalable, high-performance web applications using the modern React ecosystem. From complex SaaS dashboards to high-conversion storefronts.',
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'Creative Engineering',
    title: 'Immersive Motion',
    desc: 'Utilizing WebGL and advanced CSS/JS animations for cinematic storytelling that drives engagement.',
    tags: ['WebGL', 'GSAP', 'Three.js'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop'
  },
  {
    id: 'Digital Strategy',
    title: 'Conversion Architecture',
    desc: 'We analyze markets and audit UX to build strategies that convert traffic into revenue.',
    tags: ['UX Audit', 'SEO', 'Analytics'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop'
  },
  {
    id: 'Brand & Product Design',
    title: 'Premium Identity',
    desc: 'We design comprehensive systems and high-fidelity prototypes that prioritize both stunning aesthetics and seamless usability.',
    tags: ['Figma', 'Design Systems', 'Prototyping'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop'
  }
];

// Interactive Pricing Card Component
const PricingCard = ({ tier, index }: { tier: any, index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={cn(
        "group relative overflow-hidden rounded-3xl p-8 md:p-12 flex flex-col backdrop-blur-[24px] transition-colors duration-500",
        tier.span,
        tier.isPrimary 
          ? "bg-white/5 border border-white/30 shadow-[0_0_80px_-10px_rgba(255,255,255,0.1)] hover:border-white/50" 
          : "bg-[rgba(255,255,255,0.02)] border border-white/10 hover:border-white/30"
      )}
    >
      
      <div className="relative z-10 flex flex-col h-full pointer-events-none">
        <div className="mb-8 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h3 className={cn(
              "font-bold mb-4",
              tier.isPrimary ? "text-4xl md:text-5xl text-white" : "text-3xl text-white"
            )}>
              {tier.name}
            </h3>
            <p className={cn(
              "text-white/60",
              tier.isPrimary ? "text-xl max-w-md" : "text-base"
            )}>
              {tier.description}
            </p>
          </div>
          <div className="flex items-baseline gap-2">
            <span className={cn(
              "font-bold tracking-tighter text-white",
              tier.isPrimary ? "text-6xl md:text-8xl text-white" : "text-5xl"
            )}>
              {tier.price}
            </span>
            {tier.price !== "Custom" && <span className="text-white/40 text-sm uppercase tracking-widest whitespace-nowrap">/ Month</span>}
          </div>
        </div>

        <div className={cn(
          "flex-1 grid gap-4 mb-12",
          tier.isPrimary ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
        )}>
          {tier.features.map((feature: string, idx: number) => (
            <div key={idx} className="flex items-start gap-4 text-white/80">
              <div className={cn(
                "mt-1.5 w-1.5 h-1.5 rounded-full shrink-0",
                tier.isPrimary ? "bg-white" : "bg-white/40"
              )} />
              <span className={cn(
                tier.isPrimary ? "text-lg" : "text-base"
              )}>{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-8 pointer-events-auto w-full">
          {tier.isPrimary ? (
            <SpecularButton
              size="lg"
              radius={999}
              tint="#ffffff"
              tintOpacity={0.1}
              textColor="#ffffff"
              lineColor="#ffffff"
              baseColor="#525252"
              intensity={1}
              thickness={2}
              className="w-full font-bold uppercase tracking-widest text-sm py-5"
              onClick={() => window.location.href = '/contact'}
            >
              {tier.buttonText}
            </SpecularButton>
          ) : (
            <SpecularButton
              size="lg"
              radius={999}
              tint="#ffffff"
              tintOpacity={0}
              textColor="#ffffff"
              lineColor="#ffffff"
              baseColor="#525252"
              className="w-full font-bold uppercase tracking-widest text-sm py-5"
              onClick={() => window.location.href = '/contact'}
            >
              {tier.buttonText}
            </SpecularButton>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Services() {
  const navigate = useNavigate();
  const textRevealRef = useRef<HTMLHeadingElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeTween = useRef<gsap.core.Tween | null>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const heroImageRef = useRef<HTMLSpanElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const bgOrbRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Scrollspy logic for side navigation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(index)) {
              setActiveCardIndex(index);
            }
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    services.forEach((_, i) => {
      const el = document.getElementById(`service-card-wrapper-${i}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Hero Text Stagger
    if (heroTextRef.current) {
      const words = heroTextRef.current.querySelectorAll('.hero-word');
      gsap.fromTo(words,
        { opacity: 0, y: 50, rotateX: -90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          stagger: 0.05,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }

    // Hero Inline Image Scroll Animation
    if (heroImageRef.current && heroSectionRef.current) {
      gsap.fromTo(heroImageRef.current,
        { 
          width: "150px", 
          filter: "grayscale(100%) contrast(125%)",
        },
        {
          width: "300px",
          filter: "grayscale(0%) contrast(100%)",
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: "top top",
            end: "bottom center",
            scrub: true,
          }
        }
      );
    }

    // Orb Background Animation
    if (bgOrbRef.current) {
      gsap.to(bgOrbRef.current, {
        x: "20vw",
        y: "10vh",
        scale: 1.2,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }

    // Scrubbing Text Reveal
    if (textRevealRef.current) {
      const words = textRevealRef.current.querySelectorAll('.scrub-word');
      gsap.fromTo(words, 
        { opacity: 0.1 },
        {
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: textRevealRef.current,
            start: "top 80%",
            end: "bottom 40%",
            scrub: true,
          }
        }
      );
    }

    // Infinite Marquee GSAP
    if (marqueeRef.current) {
      marqueeTween.current = gsap.to(marqueeRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1,
      });
    }

    const mm = gsap.matchMedia();
    
    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const splitText = (text: string) => {
    return text.split(' ').map((word, i) => (
      <span key={i} className="scrub-word opacity-10 inline-block mr-2">{word}</span>
    ));
  };

  const getHeroText = () => {
    return (
      <h1 ref={heroTextRef} className="font-extrabold tracking-tighter leading-[0.9] text-[clamp(4rem,10vw,12rem)] uppercase w-full flex flex-col items-center text-white z-10" style={{ letterSpacing: "-0.04em" }}>
        <span className="block overflow-hidden pb-2 sm:pb-4 flex items-center justify-center flex-wrap gap-x-5 gap-y-2">
          <span className="hero-word inline-block">We</span>
          <span className="hero-word inline-block text-white/90">Engineer</span>
        </span>
        <span className="block overflow-hidden pb-2 sm:pb-4 flex items-center justify-center flex-wrap gap-x-5 gap-y-2">
          <span className="hero-word inline-block">The</span>
          <span className="hero-word inline-block text-white/90">Peak</span>
        </span>
        <span className="block overflow-hidden pb-2 sm:pb-4 flex items-center justify-center flex-wrap gap-x-5 gap-y-2">
          <span className="hero-word inline-block">Of</span>
          <span className="hero-word inline-block text-white/90">Experience</span>
        </span>
      </h1>
    );
  };

  return (
    <div className="w-full max-w-full overflow-x-clip bg-transparent text-white font-sans">
      
      {/* ATTENTION: Hero — Cinematic Center Layout */}
      <section ref={heroSectionRef} className="relative min-h-[90vh] pt-32 pb-16 px-6 md:px-12 overflow-hidden flex flex-col justify-center items-center text-center">
        
        {/* Background elements - Deep radial wash and grainy mesh */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.2] mix-blend-overlay pointer-events-none"></div>
        </div>

        <div className="max-w-[1600px] mx-auto w-full relative z-10 flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center w-full"
          >
            {/* Eyebrow - Glassmorphic Pill */}
            <div className="flex items-center justify-center mb-10">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_30px_rgba(0,240,255,0.1)] hover:bg-white/10 transition-colors cursor-default"
              >
                <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse shadow-[0_0_10px_#00F0FF]"></span>
                <span className="text-[#00F0FF] text-xs md:text-sm tracking-[0.2em] uppercase font-semibold">
                  Digital Engineering Studio
                </span>
              </motion.div>
            </div>

            {/* Massive Heading with Inline Typography Image */}
            {getHeroText()}
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12 max-w-2xl text-center text-white/60 text-lg md:text-xl leading-relaxed font-light backdrop-blur-xl bg-white/[0.02] p-8 rounded-3xl border border-white/[0.05] shadow-2xl relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
              We abandon standard templates. Our disciplines converge to create <strong className="text-white font-medium">custom digital architectures</strong> that dominate their respective markets.
            </motion.div>
          </motion.div>

          {/* High-Contrast CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
          >
              <SpecularButton
                size="lg"
                radius={999}
                tint="#ffffff"
                tintOpacity={0.05}
                textColor="#ffffff"
                lineColor="#ffffff"
                baseColor="#525252"
                className="font-bold tracking-widest text-sm uppercase px-12 py-6"
                onClick={() => navigate('/contact')}
              >
                <div className="flex items-center justify-center gap-5">
                  <span>Initiate Project</span>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </SpecularButton>
              <SpecularButton
                size="lg"
                radius={999}
                tint="#ffffff"
                tintOpacity={0}
                textColor="#ffffff"
                lineColor="#00F0FF"
                baseColor="#333333"
                className="font-bold tracking-widest text-sm uppercase px-12 py-6"
                onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                View Services
              </SpecularButton>
          </motion.div>
        </div>
      </section>

      {/* INTEREST: GSAP Infinite Marquee */}
      <section 
        className="py-6 md:py-10 border-y border-white/10 overflow-hidden relative bg-black/40 backdrop-blur-md z-20"
        onMouseEnter={() => marqueeTween.current && gsap.to(marqueeTween.current, { timeScale: 0.2, duration: 0.5 })}
        onMouseLeave={() => marqueeTween.current && gsap.to(marqueeTween.current, { timeScale: 1, duration: 0.5 })}
      >
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black/80 via-transparent to-black/80 w-full" />
        <div ref={marqueeRef} className="flex w-max items-center">
           {[1, 2].map((_, i) => (
             <div key={i} className="flex gap-16 md:gap-32 px-8 md:px-16 items-center">
               {['REACT', 'THREE.JS', 'GSAP', 'WEBGL', 'NODE.JS', 'NEXT.JS'].map(tech => (
                 <span key={tech} className="text-2xl md:text-4xl font-bold text-transparent uppercase tracking-tighter transition-colors duration-300 hover:text-[#FF3B00] hover:scale-110 cursor-default" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>{tech}</span>
               ))}
             </div>
           ))}
        </div>
      </section>

      {/* INTEREST: Scroll Pinned Services */}
      <section id="services" ref={sectionRef} className="py-24 md:py-48 px-4 md:px-8 lg:px-16 max-w-[1600px] mx-auto relative flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
        {/* Left Pinned Title & Navigation */}
        <div ref={leftColumnRef} className="w-full lg:w-1/3 mb-12 lg:mb-0 lg:sticky lg:top-32 self-start">
           <div className="h-[2px] w-12 bg-[#FF3B00] mb-8" />
           <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">Expertise that scales.</h3>
           <p className="text-white/50 text-xl leading-relaxed mb-12">
             Our disciplines converge to create digital platforms that dominate their respective markets.
           </p>
           
           {/* Side Navigation Index (Scrollspy) */}
           <div className="hidden lg:flex flex-col gap-6 border-l border-white/10 pl-8 relative">
             {/* Active Indicator Line */}
             <div 
               className="absolute left-[-2px] w-[3px] bg-[#FF3B00] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_0_15px_#FF3B00]" 
               style={{ 
                 top: `${activeCardIndex * 48}px`,
                 height: '24px'
               }} 
             />
             
             {services.map((s, i) => {
               const isActive = activeCardIndex === i;
               return (
                 <div 
                   key={s.id} 
                   className="group cursor-pointer flex items-center gap-6 h-[24px]"
                   onClick={() => {
                     const el = document.getElementById(`service-card-wrapper-${i}`);
                     if (el) {
                       const y = el.getBoundingClientRect().top + window.scrollY - 300;
                       window.scrollTo({ top: y, behavior: 'smooth' });
                     }
                   }}
                 >
                   <span className={cn(
                     "font-mono text-xs transition-colors duration-500",
                     isActive ? "text-[#FF3B00]" : "text-white/20 group-hover:text-white/60"
                   )}>
                     0{i + 1}
                   </span>
                   <span className={cn(
                     "font-bold tracking-widest uppercase text-sm transition-all duration-500",
                     isActive ? "text-white scale-105 origin-left" : "text-white/40 group-hover:text-white/70"
                   )}>
                     {s.id}
                   </span>
                 </div>
               );
             })}
           </div>
        </div>
        
        {/* Right Scrolling Cards */}
        <div className="w-full lg:w-2/3 pb-32">
          <ScrollStack
            useWindowScroll={true}
            itemDistance={60}
            itemScale={0.04}
            stackPosition="25%"
            className="w-full"
          >
            {services.map((s, i) => (
              <div id={`service-card-wrapper-${i}`} data-index={i} key={s.id}>
                <ScrollStackItem 
                  itemClassName="group relative overflow-hidden rounded-[2.5rem] p-8 md:p-12 lg:p-16 min-h-[500px] md:min-h-[600px] flex flex-col justify-end border border-white/10 transition-all duration-700 hover:border-white/30 shadow-[0_30px_60px_rgba(0,0,0,0.6)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[24px]"
                >
                {/* Parallax Image with Ken Burns effect */}
                <div 
                  className="absolute inset-0 z-0 opacity-40 mix-blend-overlay group-hover:opacity-100 transition-opacity duration-[1.5s] ease-out bg-cover bg-center animate-[kenburns_20s_infinite_alternate]"
                  style={{ backgroundImage: `url(${s.image})` }}
                />
              
              {/* Complex Gradients for readability and mood */}
              <div className="absolute inset-0 z-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent pointer-events-none" />
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
              
              {/* Animated Glare Sweep on Hover */}
              <div className="absolute -inset-[100%] z-0 bg-gradient-to-r from-transparent via-[#00F0FF]/10 to-transparent rotate-45 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-[2s] ease-in-out pointer-events-none" />

              <div className="relative z-10 w-full flex flex-col xl:flex-row justify-between items-start xl:items-end gap-8">
                <div className="max-w-2xl">
                  {/* Meta Label & Number */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-mono text-sm shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                      0{i + 1}
                    </span>
                    <span className="text-white font-mono text-sm tracking-[0.2em] uppercase font-bold px-4 py-2 rounded-full border border-white/10 bg-black/30 backdrop-blur-md">
                      {s.id}
                    </span>
                  </div>
                  
                  {/* Title & Desc */}
                  <h4 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight leading-[1.05] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all duration-500">
                    {s.title}
                  </h4>
                  <p className="text-white/60 leading-relaxed text-lg md:text-xl mb-0 group-hover:text-white/80 transition-colors duration-500">
                    {s.desc}
                  </p>
                </div>
                
                {/* Interactive Tags */}
                <div className="flex flex-wrap xl:flex-col gap-3 w-full xl:w-auto">
                  {s.tags.map((tag) => (
                    <span key={tag} className="px-6 py-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-sm font-mono text-white/80 text-center shadow-lg hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              </ScrollStackItem>
              </div>
            ))}
          </ScrollStack>
        </div>
      </section>

      {/* DESIRE: GSAP Scrubbing Text Reveal */}
      <section className="py-20 md:py-32 px-4 md:px-8 max-w-4xl mx-auto text-center border-t border-white/5 flex flex-col items-center justify-center">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
           <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse shadow-[0_0_10px_#00F0FF]"></span>
           <span className="text-[#00F0FF] text-xs tracking-[0.2em] font-mono font-bold uppercase">The GRAVIT Standard</span>
        </div>
        <h3 ref={textRevealRef} className="font-semibold text-white tracking-tight leading-[1.3]" style={{ fontSize: 'clamp(1.75rem, 3vw, 3rem)' }}>
          {splitText("Most agencies assemble pre-built blocks. We engineer custom architectures from the ground up to ensure your product demands attention in a saturated market.")}
        </h3>
      </section>

      {/* DESIRE: Visual Transformation Slider */}
      <section className="relative py-32 md:py-48 px-4 md:px-8 w-full border-t border-white/5 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-[#FF3B00]/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16 md:mb-24 w-full flex flex-col items-center"
          >
            {/* Cyberpunk Eyebrow */}
            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
              <span className="w-2 h-2 rounded-full bg-[#FF3B00] animate-pulse shadow-[0_0_10px_#FF3B00]"></span>
              <ScrambleText text="VISUAL TRANSFORMATION" className="text-white text-xs md:text-sm tracking-[0.3em] font-mono font-bold uppercase" />
            </div>

            <h3 className="font-bold text-white tracking-tighter leading-[0.95] mb-8 max-w-4xl" style={{ fontSize: 'clamp(3rem, 5vw, 5rem)' }}>
              The difference is <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/30 italic pr-4">night and day.</span>
            </h3>
            
            <p className="text-white/50 max-w-2xl mx-auto text-xl font-light leading-relaxed">
              We don't just build websites; we engineer <span className="text-white">high-conversion digital assets</span>. Slide to compare a typical cluttered template with a clean, performance-optimized layout by GRAVIT.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateX: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ transformPerspective: 1500 }}
            className="w-full relative group"
          >
            {/* Premium Mac-like / Tech Frame Wrap */}
            <div className="absolute -inset-1 bg-gradient-to-b from-white/10 to-transparent rounded-[2.5rem] md:rounded-[3.5rem] blur-sm transition-colors duration-700"></div>
            
            <div className="relative w-full rounded-[2rem] md:rounded-[3rem] p-2 md:p-4 bg-black/40 backdrop-blur-2xl border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
              {/* Decorative Tech Nodes */}
              <div className="absolute top-8 left-8 w-1 h-1 bg-white/30 rounded-full"></div>
              <div className="absolute top-8 right-8 w-1 h-1 bg-white/30 rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-1 h-1 bg-white/30 rounded-full"></div>
              <div className="absolute bottom-8 right-8 w-1 h-1 bg-white/30 rounded-full"></div>
              
              <div className="rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-white/5 relative bg-[#050505]">
                <ComparisonSlider 
                  beforeImage="/assets/images/before-website.png"
                  afterImage="/assets/images/after-website.png"
                  beforeLabel="GENERIC & CLUTTERED"
                  afterLabel="GRAVIT ENGINEERED"
                  className="w-full"
                />
              </div>
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* PRICING SECTION APPENDED */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center pt-32 pb-24 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-6xl w-full text-center relative z-10 flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-bold tracking-tighter text-white leading-[1.1] mb-8"
            style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}
          >
            Uncompromising value. <br className="hidden md:block" /> Absolute transparency.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white/50 text-xl max-w-2xl mx-auto font-light"
          >
            No hidden clauses. We operate with absolute clarity to deliver unparalleled digital excellence.
          </motion.p>
        </div>
      </section>

      <section className="py-12 md:py-24 px-4 md:px-8 max-w-[1400px] mx-auto pb-48">
        <div className="grid grid-cols-1 md:grid-cols-12 grid-flow-dense gap-4 md:gap-6">
          {pricingTiers.map((tier, i) => (
            <PricingCard key={tier.name} tier={tier} index={i} />
          ))}
        </div>
      </section>

      {/* ACTION: Massive CTA Footer */}
      <section className="py-20 md:py-32 px-6 text-center border-t border-white/5 bg-transparent relative overflow-hidden z-10">
        <div className="absolute inset-0 z-0">
           {/* Background orb removed */}
        </div>
        
        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
          <h2 className="font-bold text-white tracking-tighter leading-[1] mb-12 uppercase" style={{ fontSize: 'clamp(3rem, 7vw, 7rem)' }}>
            Start the <br /> conversation
          </h2>
            <SpecularButton
              size="lg"
              radius={999}
              tint="#ffffff"
              tintOpacity={0.05}
              textColor="#ffffff"
              lineColor="#00F0FF"
              baseColor="#525252"
              className="font-bold tracking-widest text-xl uppercase px-16 py-8"
              onClick={() => navigate('/contact')}
            >
              <div className="flex items-center justify-center gap-6">
                <span>Deploy Now</span>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </SpecularButton>
        </div>
      </section>

    </div>
  );
}
