import { useRef, useState, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    index: '01',
    name: 'Little Stars Academy',
    result: 'Admissions site with online enquiry form',
    link: 'https://little-stars-academy.pages.dev/',
    tag: 'Education',
    image: "/images/Little_Stars.png"
  },
  {
    index: '02',
    name: 'SSV School',
    result: 'Full institutional rebuild, notice board + faculty directory',
    link: 'https://ssvemhs.pages.dev/',
    tag: 'Education',
    image: "/images/SSVEMHS.png"
  },
  {
    index: '03',
    name: 'Wonderkids Academy',
    result: 'Site audit & pre-deployment QA',
    link: 'https://wonderkids-67h.pages.dev/',
    tag: 'Education',
    image: "/images/WonderKids.png"
  }
];

export default function SelectedWork() {
  const containerRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sizerRef = useRef<HTMLDivElement>(null);
  
  const [scrollRange, setScrollRange] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);

  useLayoutEffect(() => {
    if (!scrollRef.current) return;
    setScrollRange(scrollRef.current.scrollWidth);
    
    const onResize = (entries: ResizeObserverEntry[]) => {
      for (let entry of entries) {
        setContentWidth(entry.contentRect.width);
        if (scrollRef.current) {
          setScrollRange(scrollRef.current.scrollWidth);
        }
      }
    };
    
    const resizeObserver = new ResizeObserver(onResize);
    if (sizerRef.current) resizeObserver.observe(sizerRef.current);
    
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Map scroll progress to horizontal translation
  const transform = useTransform(scrollYProgress, [0, 1], [0, -scrollRange + contentWidth]);
  
  // Add physics spring for butter-smooth momentum
  const physics = { damping: 60, mass: 1, stiffness: 500 };
  const spring = useSpring(transform, physics);

  return (
    <section ref={containerRef} className="w-full relative border-t border-border bg-background pb-12">
      {/* Sticky Container */}
      <div className="sticky top-0 pt-12 md:pt-16 pb-12 w-full h-screen overflow-hidden flex flex-col">
        {/* Section label */}
        <div className="section-editorial mb-8 shrink-0">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-secondary">Selected Work</p>
        </div>

        {/* Horizontal Scroll Track */}
        <motion.div 
          ref={scrollRef} 
          style={{ x: spring }} 
          className="w-max flex gap-5 md:gap-8 px-6 md:px-10 lg:px-16 items-stretch flex-1"
        >
          {projects.map((p) => (
            <a
              key={p.link}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-[85vw] md:w-[55vw] lg:w-[40vw] shrink-0 bento-card p-8 md:p-10 flex flex-col justify-between overflow-hidden relative"
            >
              {/* Background Hover Effect */}
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
                
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold tracking-tight text-primary mt-8">
                  {p.name}
                </h3>
                <p className="text-secondary text-sm md:text-[15px] leading-relaxed">
                  {p.result}
                </p>
              </div>
              
              <div className="relative z-10 w-full aspect-video rounded-lg overflow-hidden mt-8 md:mt-12 bg-muted/20 border border-border">
                <img
                  src={p.image}
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
            className="group block w-[85vw] md:w-[35vw] lg:w-[25vw] shrink-0 bento-card p-8 md:p-10 flex flex-col items-center justify-center text-center relative overflow-hidden"
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

      {/* Sizer for scroll height generation (multiplier < 1 makes scroll faster) */}
      <div 
        ref={sizerRef} 
        aria-hidden="true" 
        style={{ width: "100%", height: scrollRange ? scrollRange * 0.65 : 0 }} 
        className="pointer-events-none"
      />
    </section>
  );
}
