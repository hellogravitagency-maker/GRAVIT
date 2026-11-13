import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface ConceptProject {
  id: number;
  number: string;
  brandName: string;
  categoryTag: string;
  industry: string;
  headline: string;
  description: string;
  image: string;
  route: string;
  ctaText: string;
}

const concepts: ConceptProject[] = [
  {
    id: 1,
    number: "01",
    brandName: "AURA Estates",
    categoryTag: "Real Estate",
    industry: "Architecture & Prime Living",
    headline: "Private Viewing & Architectural Archive",
    description: "Curated residential showcase featuring interactive multi-tier floorplans, daylight orientation studies, and private viewing appointment scheduling.",
    image: "/assets/work/aura_estates_preview.webp",
    route: "/concepts/real-estate",
    ctaText: "Launch Platform"
  },
  {
    id: 2,
    number: "02",
    brandName: "AETHEL Health",
    categoryTag: "Healthcare",
    industry: "Clinical & Telehealth Systems",
    headline: "Digital Triage & Attending Physician Directory",
    description: "Academic medical platform engineered with specialty department directories, physician availability routing, and instant digital patient triage.",
    image: "/assets/work/aethel_health_preview.webp",
    route: "/concepts/healthcare",
    ctaText: "Launch Platform"
  },
  {
    id: 3,
    number: "03",
    brandName: "VÉLORA Grand Resort",
    categoryTag: "Hospitality",
    industry: "Luxury Hospitality & Suites",
    headline: "Real-Time Suite Reservation Engine",
    description: "High-touch hospitality platform featuring live calendar availability, cellar sommelier scheduling, and sensory suite previews.",
    image: "/assets/work/velora_resort_preview.webp",
    route: "/concepts/hotel",
    ctaText: "Launch Platform"
  },
  {
    id: 4,
    number: "04",
    brandName: "ATELIER NORDIC",
    categoryTag: "Furniture",
    industry: "Modern Scandinavian Craft",
    headline: "Architectural Living & Tactile Commerce",
    description: "Minimalist Scandinavian interior platform featuring material texture exploration, interactive cart drawer, and craftsmanship provenance.",
    image: "/assets/work/atelier_nordic_preview.webp",
    route: "/concepts/furniture",
    ctaText: "Launch Platform"
  },
  {
    id: 5,
    number: "05",
    brandName: "UTSHA STUDIOS",
    categoryTag: "Fashion",
    industry: "Avant-Garde Couture",
    headline: "Limited Drop Architecture & Editorial Store",
    description: "High-fashion release portal featuring collection drop countdowns, real-time size matrix selection, and multi-currency checkout.",
    image: "/assets/work/utsha_studios_preview.webp",
    route: "/concepts/retail-ecommerce",
    ctaText: "Launch Platform"
  },
  {
    id: 6,
    number: "06",
    brandName: "STRATA Analytics",
    categoryTag: "SaaS Platform",
    industry: "Distributed Cloud Telemetry",
    headline: "High-Throughput Ingest & Observability Console",
    description: "Enterprise observability platform with interactive SVG throughput charts, live HTTP event streams, and synthetic load testing tools.",
    image: "/assets/work/strata_analytics_preview.webp",
    route: "/concepts/saas-dashboard",
    ctaText: "Launch Platform"
  }
];

const categories = [
  "All Platforms",
  "Real Estate",
  "Healthcare",
  "Hospitality",
  "Furniture",
  "Fashion",
  "SaaS Platform"
];

const clients = [
  {
    index: '01',
    name: 'Little Stars Academy',
    slug: 'little-stars',
    result: 'Admissions site with online enquiry form',
    link: 'https://little-stars-academy.pages.dev/',
    tag: 'Education',
    image: "/images/Little_Stars.webp"
  },
  {
    index: '02',
    name: 'SSV School',
    slug: 'ssvemhs',
    result: 'Full institutional rebuild, notice board + faculty directory',
    link: 'https://ssvemhs.pages.dev/',
    tag: 'Education',
    image: "/images/SSVEMHS.webp"
  },
  {
    index: '03',
    name: 'Wonderkids Academy',
    slug: 'wonderkids',
    result: 'Site audit & pre-deployment QA',
    link: 'https://wonderkids-67h.pages.dev/',
    tag: 'Education',
    image: "/images/WonderKids.webp"
  }
];

export default function SelectedWork({ showHeader = true }: { showHeader?: boolean }) {
  const [activeCategory, setActiveCategory] = useState<string>("All Platforms");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const filteredConcepts = activeCategory === "All Platforms"
    ? concepts
    : concepts.filter((c) => c.categoryTag === activeCategory);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true });
    }
    window.addEventListener('resize', checkScroll);
    return () => {
      if (el) el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [filteredConcepts]);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const offset = direction === 'left' ? -420 : 420;
    scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    setTimeout(checkScroll, 350);
  };

  const handleSelectCategory = (cat: string) => {
    setActiveCategory(cat);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="selected-work" className={`${showHeader ? 'pt-10 md:pt-14 pb-14 md:pb-20' : 'pb-16 md:pb-24'} bg-background`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        
        {/* Section Header */}
        {showHeader && (
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14 px-2">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-3.5 py-1 text-xs md:text-sm font-medium text-accent mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span>Interactive Concept Showcase</span>
            </p>
            <h2 className="display-editorial text-4xl md:text-6xl lg:text-7xl text-primary font-normal tracking-[-0.03em]">
              Work that speaks for itself.
            </h2>
            <p className="mt-4 text-base md:text-lg text-secondary max-w-xl mx-auto">
              Explore our fully engineered standalone website concepts. Click any project to launch its live, interactive full-featured experience.
            </p>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════════
            01: CONCEPT WORK & LIVE PLATFORMS
            6 Individually Styled, Bespoke Industry Cards (Horizontal Scroll)
        ══════════════════════════════════════════════════════════════ */}
        <div className="mb-14 md:mb-18">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 md:mb-8 px-2">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">Flagship Prototypes</span>
              <h3 className="text-2xl md:text-4xl font-semibold tracking-[-0.035em] text-primary mt-1">
                Concept Work & Live Platforms
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-secondary font-mono hidden sm:inline">
                6 Standalone Platforms · Swipe to Explore
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => scroll('left')}
                  disabled={!canScrollLeft}
                  className="w-8 h-8 rounded-full border border-border bg-surface/80 flex items-center justify-center text-primary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-surface active:scale-95 transition-all"
                  aria-label="Previous platform"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => scroll('right')}
                  disabled={!canScrollRight}
                  className="w-8 h-8 rounded-full border border-border bg-surface/80 flex items-center justify-center text-primary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-surface active:scale-95 transition-all"
                  aria-label="Next platform"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 px-2 scrollbar-none">
            {categories.map((cat) => {
              const count = cat === "All Platforms" 
                ? concepts.length 
                : concepts.filter((c) => c.categoryTag === cat).length;
              const isCurrent = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleSelectCategory(cat)}
                  className={`relative shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-all active:scale-95 ${
                    isCurrent 
                      ? "text-background" 
                      : "text-secondary hover:text-primary bg-surface/70 border border-border hover:bg-surface-hover"
                  }`}
                >
                  {isCurrent && (
                    <motion.span
                      layoutId="activeFilterPill"
                      transition={{ type: "spring", damping: 25, stiffness: 350 }}
                      className="absolute inset-0 rounded-full bg-primary -z-0"
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                  <span className={`relative z-10 text-[10px] px-1.5 py-0.2 rounded-full ${
                    isCurrent ? "bg-background/20 text-background" : "bg-white/10 text-muted"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── HORIZONTAL SCROLL CAROUSEL ─────────────────────────── */}
          <div className="relative group/carousel">
            {/* Floating Side Arrow Left (Desktop) */}
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full items-center justify-center bg-background/90 backdrop-blur-md border border-border shadow-2xl text-primary hover:bg-surface disabled:opacity-0 disabled:pointer-events-none transition-all active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Floating Side Arrow Right (Desktop) */}
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full items-center justify-center bg-background/90 backdrop-blur-md border border-border shadow-2xl text-primary hover:bg-surface disabled:opacity-0 disabled:pointer-events-none transition-all active:scale-95"
            >
              <ChevronRight size={20} />
            </button>

            {/* Scrollable Track */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth scrollbar-none snap-x snap-mandatory -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0"
            >
            {filteredConcepts.map((p) => (
              <a
                key={p.id}
                href={p.route}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col w-[320px] sm:w-[380px] md:w-[420px] shrink-0 snap-start rounded-[24px] bg-[#0E0F15] border border-white/[0.08] hover:border-white/[0.22] transition-all duration-500 overflow-hidden shadow-[0_16px_45px_rgba(0,0,0,0.45)] hover:shadow-[0_28px_70px_rgba(0,0,0,0.7)] hover:-translate-y-1.5"
              >
                {/* Media Window */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={p.image}
                    alt={p.brandName}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F15] via-[#0E0F15]/20 to-transparent" />

                  {/* Top Floating Chrome */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 border border-white/10 text-[11px] font-mono tracking-wider text-white/80">
                      <span className="text-white/40">{p.number}</span>
                      <span className="w-1 h-1 rounded-full bg-white/30" />
                      <span>{p.industry}</span>
                    </span>
                    <span className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-white/40 font-medium mb-1.5">
                      {p.categoryTag}
                    </div>
                    <h4 className="text-xl sm:text-2xl font-semibold tracking-[-0.03em] text-white transition-colors">
                      {p.brandName}
                    </h4>
                    <div className="text-xs sm:text-[13px] font-mono text-white/75 tracking-tight mt-1 mb-2.5">
                      {p.headline}
                    </div>
                    <p className="text-xs sm:text-[13px] text-white/50 leading-relaxed line-clamp-2 font-light">
                      {p.description}
                    </p>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-2 text-[11px] font-mono text-white/40">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF6A39]" />
                      <span>Standalone Platform</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/90 group-hover:text-white transition-colors">
                      <span>{p.ctaText}</span>
                      <ArrowUpRight size={13} className="text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
            </div>

            {/* Bottom scroll hint */}
            <div className="flex items-center justify-between mt-3 px-2">
              <span className="text-[11px] font-mono text-muted uppercase tracking-wider">
                ← Swipe or scroll horizontally to browse platforms →
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => scroll('left')}
                  disabled={!canScrollLeft}
                  className="w-7 h-7 rounded-full border border-border bg-surface/70 flex items-center justify-center text-primary disabled:opacity-25 hover:bg-surface active:scale-95 transition-all"
                  aria-label="Scroll left"
                >
                  <ChevronLeft size={14} />
                </button>
                <button
                  onClick={() => scroll('right')}
                  disabled={!canScrollRight}
                  className="w-7 h-7 rounded-full border border-border bg-surface/70 flex items-center justify-center text-primary disabled:opacity-25 hover:bg-surface active:scale-95 transition-all"
                  aria-label="Scroll right"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            02: CLIENT LAUNCHES (Production Websites)
        ══════════════════════════════════════════════════════════════ */}
        <div className="pt-12 border-t border-border">
          <div className="mb-10 px-2">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">Production Deployments</span>
            <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-primary mt-1">
              Client Sites & Institutional Rebuilds
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {clients.map((p, i) => (
              <Link
                key={p.name}
                to={`/work/${p.slug}`}
                className={`group block ${i === 0 ? 'md:col-span-2' : ''}`}
              >
                <div className={`overflow-hidden rounded-[28px] bg-surface-hover ${i === 0 ? 'aspect-[16/10] md:aspect-[21/9]' : 'aspect-[4/3]'}`}>
                  <div className="w-full h-full transition-transform duration-[1.2s] ease-[var(--ease-apple)] group-hover:scale-[1.03]">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      decoding="async"
                      className="gsap-parallax w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4 px-2 pt-5 pb-4">
                  <div>
                    <p className="text-sm font-medium text-accent">{p.tag}</p>
                    <h4 className="mt-1 text-2xl md:text-[28px] font-semibold tracking-[-0.03em] text-primary">{p.name}</h4>
                    <p className="mt-1 text-base md:text-[17px] text-secondary tracking-[-0.015em]">{p.result}</p>
                  </div>
                  <ArrowUpRight size={22} className="shrink-0 mt-7 text-muted group-hover:text-primary transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
