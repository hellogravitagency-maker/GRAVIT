import { useRef, useState, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    index: '01',
    name: 'Little Stars Academy',
    result: 'Admissions site with online enquiry form',
    link: 'https://little-stars-academy.pages.dev/',
    tag: 'Education',
    image: "/images/Little_Stars.webp"
  },
  {
    index: '02',
    name: 'SSV School',
    result: 'Full institutional rebuild, notice board + faculty directory',
    link: 'https://ssvemhs.pages.dev/',
    tag: 'Education',
    image: "/images/SSVEMHS.webp"
  },
  {
    index: '03',
    name: 'Wonderkids Academy',
    result: 'Site audit & pre-deployment QA',
    link: 'https://wonderkids-67h.pages.dev/',
    tag: 'Education',
    image: "/images/WonderKids.webp"
  }
];

export default function SelectedWork() {
  const containerRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sizerRef = useRef<HTMLDivElement>(null);
  
  const [scrollRange, setScrollRange] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);

  useLayoutEffect(() => {
    const updateDimensions = () => {
      if (scrollRef.current) {
        setScrollRange(scrollRef.current.scrollWidth);
      }
      if (sizerRef.current) {
        setContentWidth(sizerRef.current.offsetWidth);
      } else if (typeof window !== 'undefined') {
        setContentWidth(window.innerWidth);
      }
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });

    if (sizerRef.current) resizeObserver.observe(sizerRef.current);
    if (scrollRef.current) resizeObserver.observe(scrollRef.current);
    window.addEventListener('resize', updateDimensions);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const maxScroll = Math.max(0, scrollRange - contentWidth);
  const transform = useTransform(scrollYProgress, [0, 1], [0, -maxScroll]);

  return (
    <section ref={containerRef} className="w-full relative border-t border-border bg-background">
      {/* ── DESKTOP PINNED HORIZONTAL SCROLL (md and up) ── */}
      <div className="hidden md:block">
        <div className="sticky top-0 pt-12 md:pt-16 pb-12 w-full h-screen overflow-hidden flex flex-col justify-between">
          {/* Section label */}
          <div className="section-editorial mb-6 shrink-0">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-secondary">Selected Work</p>
          </div>

          {/* Horizontal Scroll Track */}
          <motion.div 
            ref={scrollRef} 
            style={{ x: transform }} 
            className="w-max flex gap-8 px-10 lg:px-16 items-stretch flex-1 pb-4"
          >
            {projects.map((p) => (
              <a
                key={p.link}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-[55vw] lg:w-[40vw] shrink-0 bento-card p-8 md:p-10 flex flex-col justify-between overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                
                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex items-start justify-between mb-auto">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-muted uppercase tracking-widest">
                        W.{p.index}
                      </span>
                      <span className="text-[10px] font-mono text-gradient-accent border border-border rounded-full px-3 py-1 uppercase tracking-wider">
                        {p.tag}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted group-hover:text-primary group-hover:border-primary/30 transition-all duration-400 bg-background/50 backdrop-blur-sm">
                      <ArrowUpRight size={16} className="-translate-x-0.5 translate-y-0.5 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-400" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold tracking-tight text-primary mt-6">
                    {p.name}
                  </h3>
                  <p className="text-secondary text-sm md:text-[15px] leading-relaxed">
                    {p.result}
                  </p>
                </div>
                
                <div className="relative z-10 w-full aspect-video rounded-lg overflow-hidden mt-8 md:mt-10 bg-muted/20 border border-border">
                  <img
                    src={p.image}
                    srcSet={`${encodeURI(p.image.replace('.webp', '-300w.webp'))} 300w, ${encodeURI(p.image.replace('.webp', '-400w.webp'))} 400w, ${encodeURI(p.image.replace('.webp', '-600w.webp'))} 600w, ${encodeURI(p.image.replace('.webp', '-800w.webp'))} 800w, ${encodeURI(p.image)} 1200w`}
                    sizes="(max-width: 1024px) 55vw, 40vw"
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
                  />
                </div>
              </a>
            ))}

            {/* "View All" card */}
            <Link
              to="/work"
              className="group block w-[35vw] lg:w-[25vw] shrink-0 bento-card p-8 md:p-10 flex flex-col items-center justify-center text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-400">
                  <ArrowUpRight size={24} />
                </div>
                <h3 className="text-2xl font-heading font-semibold tracking-tight text-primary mb-2">
                  View All Work
                </h3>
                <p className="text-secondary text-sm">
                  Explore our complete portfolio
                </p>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Sizer for desktop scroll travel height */}
        <div 
          ref={sizerRef} 
          aria-hidden="true" 
          style={{ width: "100%", height: maxScroll > 0 ? maxScroll + 200 : 0 }} 
          className="pointer-events-none"
        />
      </div>

      {/* ── MOBILE NATIVE SWIPEABLE CAROUSEL (under md) ── */}
      <div className="md:hidden py-12">
        <div className="section-editorial mb-6">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-secondary">Selected Work</p>
        </div>

        <div className="w-full overflow-x-auto flex gap-4 px-6 pb-6 snap-x snap-mandatory scrollbar-none">
          {projects.map((p) => (
            <a
              key={p.link}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="snap-start group block w-[85vw] shrink-0 bento-card p-6 flex flex-col justify-between overflow-hidden relative"
            >
              <div className="relative z-10 flex flex-col gap-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-muted uppercase tracking-widest">
                      W.{p.index}
                    </span>
                    <span className="text-[10px] font-mono text-gradient-accent border border-border rounded-full px-2.5 py-0.5 uppercase tracking-wider">
                      {p.tag}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
                
                <h3 className="text-xl font-heading font-semibold tracking-tight text-primary mt-2">
                  {p.name}
                </h3>
                <p className="text-secondary text-xs leading-relaxed">
                  {p.result}
                </p>
              </div>
              
              <div className="relative z-10 w-full aspect-video rounded-lg overflow-hidden mt-6 bg-muted/20 border border-border">
                <img
                  src={p.image}
                  srcSet={`${encodeURI(p.image.replace('.webp', '-300w.webp'))} 300w, ${encodeURI(p.image.replace('.webp', '-400w.webp'))} 400w, ${encodeURI(p.image.replace('.webp', '-600w.webp'))} 600w, ${encodeURI(p.image.replace('.webp', '-800w.webp'))} 800w, ${encodeURI(p.image)} 1200w`}
                  sizes="85vw"
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
          ))}

          <Link
            to="/work"
            className="snap-start group block w-[70vw] shrink-0 bento-card p-6 flex flex-col items-center justify-center text-center relative"
          >
            <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center mb-4 bg-primary text-primary-foreground">
              <ArrowUpRight size={20} />
            </div>
            <h3 className="text-lg font-heading font-semibold tracking-tight text-primary mb-1">
              View All Work
            </h3>
            <p className="text-secondary text-xs">
              Explore our complete portfolio
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
