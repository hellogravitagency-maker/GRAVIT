import React, { useRef, useEffect, useState } from 'react';
import Infinite3DCarousel, { Infinite3DCarouselRef } from './Infinite3DCarousel';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatePresence } from 'motion/react';
import SEO from './SEO';
import Ballpit from './Ballpit';
import ParticleImage from './ParticleImage';
import TextType from './TextType';

gsap.registerPlugin(ScrollTrigger);

// ─── Stat Counter ─────────────────────────────────────────────────────────────
function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || hasAnimated) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          
          let startTimestamp: number | null = null;
          const duration = 2.5;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(easeProgress * value));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
          
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated, value]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center text-center">
      <div className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-background mb-2">
        {count}{suffix}
      </div>
      <div className="text-xs md:text-sm font-mono uppercase tracking-widest text-background/60">
        {label}
      </div>
    </div>
  );
}

// ─── Accordion ────────────────────────────────────────────────────────────────
function AccordionItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-border group/accordion relative overflow-hidden">
      {/* Interactive left border */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 bg-primary transition-all duration-500 ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 group-hover/accordion:opacity-50 group-hover/accordion:scale-y-100'}`} />
      
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-8 text-left pl-6"
      >
        <h3 className={`text-2xl md:text-3xl font-bold tracking-tight transition-colors pr-8 ${isOpen ? 'text-primary' : 'text-primary/80 group-hover/accordion:text-primary'}`}>
          {question}
        </h3>
        <motion.div 
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-2xl font-light text-secondary flex-shrink-0"
        >
          +
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-8 pl-6 text-lg text-secondary max-w-3xl leading-relaxed font-light">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Removed Marquee section per user request

// ─── Pinned Work Section ───────────────────────────────────────────────────────
const PROJECTS = [
  {
    num: '01',
    title: 'NEXUS COMMERCE',
    type: 'B2B Wholesale Platform',
    tags: ['SaaS', 'Ecommerce', 'Automation'],
    year: '2026',
    color: '#1A1A2E',
    href: '/work/nexus',
  },
  {
    num: '02',
    title: 'STRATA',
    type: 'Fintech Analytics Dashboard',
    tags: ['Web App', 'Data Viz'],
    year: '2025',
    color: '#0D2137',
    href: '/work/strata',
  },
  {
    num: '03',
    title: 'MERIDIAN',
    type: 'Real Estate Intelligence',
    tags: ['AI', 'Maps', 'Dashboard'],
    year: '2025',
    color: '#1C1008',
    href: '/work',
  },
  {
    num: '04',
    title: 'KOROVA',
    type: 'Editorial Publishing Platform',
    tags: ['CMS', 'Editorial', 'Performance'],
    year: '2024',
    color: '#0E1A0E',
    href: '/work',
  },
];

function WorkSection() {
  const carouselRef = useRef<Infinite3DCarouselRef>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const CAROUSEL_ITEMS = [
    { 
      title: 'Classic',
      imageUrl: { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80', alt: 'Classic Website Design' },
      gradient: 'radial-gradient(circle at 50% 50%, rgba(217, 226, 74, 0.45) 0%, rgba(0, 0, 0, 1) 90%)'
    },
    { 
      title: 'Professional',
      imageUrl: { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', alt: 'Professional Website Design' },
      gradient: 'radial-gradient(circle at 50% 50%, rgba(241, 213, 94, 0.45) 0%, rgba(0, 0, 0, 1) 90%)'
    },
    { 
      title: 'Ecommerce',
      imageUrl: { src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80', alt: 'Ecommerce Website Design' },
      gradient: 'radial-gradient(circle at 50% 50%, rgba(175, 109, 200, 0.45) 0%, rgba(0, 0, 0, 1) 90%)'
    },
    { 
      title: 'Portfolio',
      imageUrl: { src: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80', alt: 'Portfolio Website Design' },
      gradient: 'radial-gradient(circle at 50% 50%, rgba(117, 93, 225, 0.45) 0%, rgba(0, 0, 0, 1) 90%)'
    },
    { 
      title: 'Blog',
      imageUrl: { src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80', alt: 'Blog Website Design' },
      gradient: 'radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.45) 0%, rgba(0, 0, 0, 1) 90%)'
    }
  ];

  return (
    <section className="border-t border-border bg-background pt-20 overflow-hidden relative">
      <div className="px-6 md:px-8 lg:px-12 w-full max-w-[1800px] mx-auto flex flex-col justify-center items-center pb-12 pt-8">
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.9]">
            Grow your business
          </h2>
          <p className="text-xl md:text-2xl mt-6 font-light text-secondary max-w-2xl mx-auto">
            You deserve a website that can do it all.
          </p>
        </div>
      </div>
      
      <div className="w-full flex md:justify-center gap-3 pt-6 pb-4 relative z-10 px-6 overflow-x-auto snap-x snap-mandatory">
        {CAROUSEL_ITEMS.map((item, idx) => (
          <button
            key={item.title}
            onClick={() => carouselRef.current?.goToSlide(idx)}
            className="px-6 py-3 rounded-full border border-border text-xs md:text-sm font-bold uppercase tracking-widest hover:border-primary hover:text-background hover:bg-primary transition-all duration-300 bg-background flex-shrink-0 snap-center shadow-sm hover:shadow-md"
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="w-full h-[500px] md:h-[700px] relative mt-4 md:mt-0">
        <Infinite3DCarousel 
          ref={carouselRef} 
          items={CAROUSEL_ITEMS}
          autoPlay={false}
          cardWidth={isMobile ? 280 : 430}
          cardHeight={isMobile ? 320 : 440}
          overlap={isMobile ? 180 : 300}
        />
      </div>
    </section>
  );
}

// ─── Main Home ─────────────────────────────────────────────────────────────────

function useResponsiveParticleImages() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    let timeoutId: ReturnType<typeof setTimeout>;

    const generateImages = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const isMobile = w < 768;
      
      const textCanvas = document.createElement("canvas");
      textCanvas.width = w;
      textCanvas.height = h;
      const textCtx = textCanvas.getContext("2d");
      
      if (textCtx) {
        textCtx.clearRect(0, 0, w, h);
        if (isMobile) {
          const fontSize = Math.min(130, w * 0.28); // Increased from 0.25 to 0.28 to fill more horizontal space
          textCtx.font = `900 ${fontSize}px Inter, sans-serif`;
          textCtx.textAlign = "center";
          textCtx.textBaseline = "middle";
          textCtx.fillStyle = "white";
          // Move text up slightly to balance the bottom buttons
          textCtx.fillText("GRAVIT", w / 2, (h / 2) - (h * 0.12));
        } else {
          const fontSize = Math.min(320, w * 0.2);
          textCtx.font = `900 ${fontSize}px Inter, sans-serif`;
          textCtx.textAlign = "center";
          textCtx.textBaseline = "middle";
          textCtx.fillStyle = "white";
          textCtx.fillText("GRAVIT", w / 2, (h / 2) - (h * 0.1));
        }
      }
      const textDataUrl = textCanvas.toDataURL();

      const logoCanvas = document.createElement("canvas");
      logoCanvas.width = w;
      logoCanvas.height = h;
      const logoCtx = logoCanvas.getContext("2d");
      
      if (logoCtx) {
        logoCtx.clearRect(0, 0, w, h);
        logoCtx.strokeStyle = "white";
        if (isMobile) {
          const logoScale = 1.6; // Increased logo scale to fill more space
          logoCtx.lineWidth = 12;
          logoCtx.lineCap = "round";
          logoCtx.save();
          // Match the text's vertical offset
          logoCtx.translate(w / 2, (h / 2) - (h * 0.12));
          logoCtx.scale(logoScale, logoScale);
          logoCtx.translate(-100, -100);
        } else {
          const logoScale = 2.5;
          logoCtx.lineWidth = 20;
          logoCtx.lineCap = "round";
          logoCtx.save();
          logoCtx.translate(w / 2, (h / 2) - (h * 0.1));
          logoCtx.scale(logoScale, logoScale);
          logoCtx.translate(-100, -100);
        }
        
        const p1 = new Path2D("M138 55 A55 55 0 1 0 138 145");
        logoCtx.stroke(p1);
        logoCtx.beginPath();
        logoCtx.moveTo(138, 100);
        logoCtx.lineTo(102, 100);
        logoCtx.stroke();
        logoCtx.restore();
      }
      const logoDataUrl = logoCanvas.toDataURL();
      
      setImages([textDataUrl, logoDataUrl]);
    };

    generateImages();

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(generateImages, 300);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return images;
}

export default function Home() {
  const particleImages = useResponsiveParticleImages();
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      setIsDark(document.documentElement.classList.contains('dark'));
      
      const observer = new MutationObserver(() => {
        setIsDark(document.documentElement.classList.contains('dark'));
      });
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
      });
      return () => observer.disconnect();
    }
  }, []);

  return (
    <div className="w-full bg-transparent text-primary selection:bg-primary selection:text-background font-sans overflow-x-hidden">
      <SEO
        title="GRAVIT® — Digital Product Ecosystems"
        description="An editorial digital product studio. We architect, design, and engineer systems that scale cleanly."
      />

      {/* ── 01: HERO ─────────────────────────────────────────────────────── */}
      <section className="relative w-full h-screen flex flex-col justify-between overflow-hidden">
        
        {/* Backgrounds Container */}
        <div className="absolute inset-0 z-0 bg-background transition-colors duration-500 overflow-hidden">
          {/* Layer 1: Ballpit (Background) */}
          <div className="absolute inset-0 z-0 pointer-events-auto opacity-70">
            <Ballpit
              count={isMobile ? 12 : 30}
              gravity={0.5}
              friction={0.99}
              wallBounce={0.8}
              ambientColor={isDark ? "#ffffff" : "#000000"}
              colors={["#e9d5ff", "#c084fc", "#d8b4fe", "#a855f7"]}
              followCursor={false}
              size0={1.5}
            />
          </div>

          {/* Layer 2: Particle Image (Text/Logo Overlay) */}
          <div className="absolute inset-0 z-10 pointer-events-auto">
            {particleImages.length > 0 && (
              <ParticleImage 
                width="100%" 
                height="100%" 
                particleCount={isMobile ? 8 : 25} // Severely lowered on mobile to fix lag
                particleSize={isMobile ? (isDark ? 3 : 5) : (isDark ? 3 : 8)}
                particleColor="single"
                singleColor={isDark ? "#ffffff" : "#000000"}
                repulsionEnabled={!isMobile}
                hoverEnabled={!isMobile}
                imageConfig={{
                  image: particleImages,
                  morphInterval: 5000,
                  mode: isMobile ? "fill" : "fit", // Use fill on mobile to avoid double-scaling, keep fit for desktop
                  scale: isMobile ? 10 : 9, // 10 scale for fill, 9 for fit on desktop
                  sizeUnit: "%",
                  widthPx: 400,
                  heightPx: 400,
                  widthPct: 100,
                  heightPct: 100
                }}
              />
            )}
          </div>
        </div>

        {/* Subtitle & Buttons Overlay */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-end pb-48 md:pb-32 pointer-events-none mix-blend-difference text-white text-center px-6">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-8"
          >
            <div className="flex items-center gap-6 opacity-90">
              <div className="hidden sm:block w-12 md:w-24 h-[1px] bg-white/40"></div>
              <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] md:tracking-[0.5em] text-white font-medium">
                Where design meets engineering
              </p>
              <div className="hidden sm:block w-12 md:w-24 h-[1px] bg-white/40"></div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pointer-events-auto">
              <Link to="/contact" className="group relative px-8 py-3.5 bg-white text-black font-semibold uppercase tracking-widest text-xs rounded-full overflow-hidden hover:scale-105 transition-transform duration-500">
                <span className="relative z-10">Start a Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Bouncing Ball Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 mix-blend-difference pointer-events-auto">
          <motion.div 
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="w-7 h-11 rounded-full border-2 border-white/40 flex justify-center p-1 cursor-pointer hover:border-white transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <motion.div 
              className="w-1.5 h-1.5 bg-white rounded-full mt-1"
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── 02: STATS ────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 w-full bg-primary relative z-20">
        <div className="max-w-[1800px] mx-auto px-6 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-background/10">
          <StatItem value={100} suffix="%" label="Type-Safe Architecture" />
          <StatItem value={40} suffix="ms" label="Global Edge Latency" />
          <StatItem value={100} suffix="" label="Lighthouse Performance" />
        </div>
      </section>

      {/* ── 03: MANIFESTO ────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-8 lg:px-12 w-full max-w-[1700px] mx-auto bg-primary text-background my-16 md:my-24 rounded-3xl overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-background/10 via-transparent to-transparent opacity-50" />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-start relative z-10">
          <div className="md:col-span-4 lg:sticky top-32">
            <span className="text-xs font-mono uppercase tracking-widest text-background/50 block mb-6">
              How We Work
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase leading-[0.9] text-background">
              LESS DECORATION.<br />
              <span className="text-background/40">MORE INTENTION.</span>
            </h2>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {[
              { n: '01', title: 'Earn Your Place', text: "Every element earns its place. If removing it doesn't hurt, it was never needed." },
              { n: '02', title: 'Build Systems', text: 'We build systems, not pages. Architecture that holds when your business changes shape.' },
              { n: '03', title: 'Speed by Design', text: 'Speed is a design decision. Performance is not a feature you add at the end.' },
            ].map((p, idx) => (
              <div 
                key={p.n} 
                className={`group relative p-8 rounded-3xl border border-background/10 bg-background/5 hover:bg-background/10 transition-colors duration-500 overflow-hidden ${idx === 2 ? 'md:col-span-2' : ''}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="text-xs font-mono uppercase tracking-widest text-background/40 mb-8 border-b border-background/10 pb-4">
                    Principle {p.n}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-background mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    {p.title}
                  </h3>
                  <p className="text-background/80 text-lg leading-relaxed font-light">
                    {p.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04: CORE SERVICES ────────────────────────────────────────────── */}
      <section className="py-24 md:py-48 px-6 md:px-8 lg:px-12 w-full max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-secondary block mb-6">
              Our Capabilities
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.9]">
              ARCHITECTING<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/40">THE FUTURE.</span>
            </h2>
          </div>
          <p className="text-secondary text-lg max-w-sm font-light">
            We don't just build websites. We engineer entire digital ecosystems designed for scale, speed, and conversion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Brand Architecture', desc: 'Positioning, identity systems, and visual languages that command premium market share.', href: '/services' },
            { title: 'Digital Platforms', desc: 'Bespoke marketing sites and immersive web experiences built on modern frameworks.', href: '/websites' },
            { title: 'SaaS Engineering', desc: 'Complex web applications, dashboards, and scalable backend infrastructure.', href: '/services' },
            { title: 'Performance SEO', desc: 'Technical optimization and algorithmic visibility to dominate search rankings.', href: '/seo-tools' }
          ].map((srv, i) => (
            <Link to={srv.href} key={srv.title} className="group relative p-8 rounded-3xl border border-border bg-background hover:bg-surface transition-colors duration-500 overflow-hidden flex flex-col min-h-[300px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex-grow">
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center mb-8 text-primary font-mono text-sm group-hover:border-primary/50 transition-colors">
                  0{i + 1}
                </div>
                <h3 className="font-bold text-2xl tracking-tight uppercase text-primary mb-4">
                  {srv.title}
                </h3>
                <p className="text-secondary text-sm font-light leading-relaxed">
                  {srv.desc}
                </p>
              </div>
              
              <div className="relative z-10 mt-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-background">
                  <span className="rotate-[-45deg] group-hover:rotate-0 transition-transform duration-500">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 05: WORK (GSAP Pinned) ───────────────────────────────────────── */}
      <WorkSection />

      {/* ── 06: CAPABILITY MATRIX ────────────────────────────────────────── */}
      <section className="py-24 md:py-48 px-6 md:px-8 lg:px-12 w-full max-w-[1800px] mx-auto border-t border-border relative overflow-hidden">
        {/* Abstract background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start relative z-10">
          <div className="lg:col-span-5 lg:sticky top-32">
            <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter uppercase leading-[0.85] mb-6">
              TECHNICAL<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/40">AUTHORITY.</span>
            </h2>
            <p className="text-secondary text-lg md:text-xl mt-8 max-w-md font-light leading-relaxed">
              We build bespoke systems using modern, highly performant technologies —
              no bloated CMS, no generic scaffolding. Just pure, precise engineering.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  label: 'Frontend Engineering',
                  desc: 'Crafting fluid, interactive user experiences.',
                  items: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'WebGL / Three.js', 'Framer Motion'],
                },
                {
                  label: 'Backend & Infrastructure',
                  desc: 'Architecting scalable, secure server environments.',
                  items: ['Node.js / Bun', 'PostgreSQL / Supabase', 'Redis', 'Vercel / AWS', 'Cloudflare Workers'],
                },
              ].map((col, ci) => (
                <div
                  key={col.label}
                  className="group relative flex flex-col p-8 rounded-3xl border border-border bg-background hover:bg-surface transition-colors duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 mb-10">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary font-mono text-sm">
                      0{ci + 1}
                    </div>
                    <h3 className="font-bold text-2xl tracking-tight uppercase text-primary mb-3">
                      {col.label}
                    </h3>
                    <p className="text-secondary text-sm font-light">
                      {col.desc}
                    </p>
                  </div>

                  <ul className="relative z-10 flex flex-col gap-4 mt-auto">
                    {col.items.map((item) => (
                      <li
                        key={item}
                        className="group/item flex items-center gap-4 text-lg md:text-xl font-bold tracking-tight uppercase text-primary/80 transition-colors cursor-default"
                      >
                        <span className="w-6 h-px bg-border group-hover/item:bg-primary transition-all duration-300 group-hover/item:w-10" />
                        <span className="group-hover/item:text-primary transition-colors duration-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 07: TESTIMONIALS ─────────────────────────────────────────────── */}
      <section className="py-24 md:py-48 px-6 md:px-8 lg:px-12 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24 items-start">
          <div className="md:col-span-4 lg:sticky top-32">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.9] mb-6">
              THE PROOF.
            </h2>
            <p className="text-secondary text-lg font-light leading-relaxed max-w-sm">
              Don't take our word for it. Here is what industry leaders say about the systems we build.
            </p>
          </div>

          <div className="md:col-span-8 flex flex-col">
            {[
              { quote: "GRAVIT operates as a true extension of our engineering team. Their ability to translate complex business requirements into scalable, performant architecture is unmatched.", author: "Michael Chen", role: "VP Engineering, Novus" },
              { quote: "We needed a complete digital overhaul on a tight timeline. They didn't just deliver on time; they provided a system that improved our core web vitals and organic traffic by 40%.", author: "Sarah Jenkins", role: "Director of Digital, Meridian" },
              { quote: "What sets them apart is their focus on foundational quality. We never have to worry about tech debt. Everything they ship is robust, documented, and built to scale.", author: "David Thorne", role: "CTO, Lumina AI" },
              { quote: "Their design aesthetic is premium, but their engineering is what keeps us coming back. They architected a headless solution that completely transformed our content delivery.", author: "Elena Rostova", role: "Head of Product, Korova Media" }
            ].map((t, i) => (
              <div key={i} className={`flex flex-col md:flex-row gap-6 md:gap-12 items-start py-12 ${i !== 0 ? 'border-t border-border' : 'pt-0'}`}>
                <div className="w-full md:w-1/3 flex flex-col gap-2">
                  <span className="font-bold text-sm uppercase tracking-widest text-primary">{t.author}</span>
                  <span className="text-xs text-secondary font-mono tracking-wider">{t.role}</span>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-lg md:text-xl font-light leading-relaxed text-primary/90">
                    "{t.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 08: BEHIND THE AGENCY ────────────────────────────────────────── */}
      <section className="w-full relative overflow-hidden my-16 md:my-24">
        {/* Parallax Image Container */}
        <div className="w-full h-[60vh] md:h-[80vh] relative group">
          <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-700 group-hover:bg-black/20" />
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            alt="Agency Office" 
            className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out"
          />
          
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6">
            <span className="text-xs font-mono uppercase tracking-widest text-white/70 block mb-6 drop-shadow-md">
              The Humans Behind The Code
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase leading-[0.9] text-white max-w-4xl drop-shadow-lg">
              ENGINEERING EXCELLENCE IS NOT A COMMODITY. IT IS A PURSUIT.
            </h2>
          </div>
        </div>
      </section>

      {/* ── 09: FAQ ──────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-48 px-6 md:px-8 lg:px-12 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">
              COMMON<br />QUESTIONS.
            </h2>
          </div>
          <div className="md:col-span-8 border-t border-border">
            {[
              {
                q: 'How much does a project cost?',
                a: 'We price based on the value we deliver and the complexity of the system. Typical web platform engagements start at $15,000, while complex SaaS architectures begin at $35,000. We provide fixed-price contracts so there are no surprises.',
              },
              {
                q: 'How long does a typical build take?',
                a: 'Marketing platforms usually take 4-8 weeks from discovery to deployment. Complex web applications and SaaS products typically require 12-16 weeks. We work in rigorous sprints to ensure velocity.',
              },
              {
                q: 'Do you work with startups or enterprise?',
                a: 'Both. We help funded startups launch MVPs with scalable architecture, and we help enterprise teams modernize legacy systems or spin up new digital ventures outside slow internal IT cycles.',
              },
              {
                q: 'What is your tech stack?',
                a: 'We are framework-agnostic but highly opinionated. Our standard stack is React/Next.js for the frontend, combined with strongly-typed backends (Node/TypeScript) and managed databases (Supabase/Postgres) hosted on Vercel or AWS.',
              },
            ].map((item, i) => (
              <AccordionItem
                key={i}
                isOpen={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                question={item.q}
                answer={item.a}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 10: FINAL CTA ────────────────────────────────────────────────── */}
      <section className="py-32 md:py-48 px-6 md:px-8 lg:px-12 w-full max-w-[1800px] mx-auto border-t border-border relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-end relative z-10">
          <div className="md:col-span-8">
            <span className="text-xs font-mono uppercase tracking-widest text-secondary block mb-8">
              Next Step
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-[8vw] font-bold tracking-tighter uppercase leading-[0.85]">
              START THE<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/40">SYSTEM.</span>
            </h2>
          </div>
          <div className="md:col-span-4 flex flex-col gap-4 items-start md:items-end pb-2">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-primary text-background px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors w-full md:w-auto overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center gap-2">
                Brief Us 
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </Link>
            <a
              href="mailto:hello@gravit.agency"
              className="group inline-flex items-center justify-center border border-border px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:border-primary transition-colors w-full md:w-auto text-secondary hover:text-primary bg-background"
            >
              hello@gravit.agency
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
