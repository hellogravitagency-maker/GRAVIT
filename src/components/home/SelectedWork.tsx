import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { index: 'W.01', name: 'Little Stars Academy', result: 'Admissions site with online enquiry form', link: 'https://little-stars-academy.pages.dev/' },
  { index: 'W.02', name: 'SSV School', result: 'Full institutional rebuild, notice board + faculty directory', link: 'https://ssvemhs.pages.dev/' },
  { index: 'W.03', name: 'Wonderkids Academy', result: 'Site audit & pre-deployment QA', link: 'https://wonderkids-67h.pages.dev/' }
];

export default function SelectedWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const section = sectionRef.current;
      const scrollContainer = scrollRef.current;
      
      if (!section || !scrollContainer) return;

      const getScrollAmount = () => {
        const scrollWidth = scrollContainer.scrollWidth;
        const amount = scrollWidth - window.innerWidth;
        return Math.max(0, amount);
      };

      // Set the height of the section dynamically based on how much we need to scroll
      // This maps 1px of horizontal scroll to 1px of vertical scroll
      if (getScrollAmount() > 0) {
        gsap.to(scrollContainer, {
          x: () => -getScrollAmount(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            invalidateOnRefresh: true,
            onRefresh: () => {
              gsap.set(section, { height: window.innerHeight + getScrollAmount() });
            }
          }
        });
      }
      
      return () => {
        gsap.set(section, { clearProps: "height" });
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full relative bg-[#000]">
      <div className="sticky top-0 py-24 md:py-32 w-full border-t border-white/20 overflow-hidden h-screen flex flex-col justify-center">
        <div className="absolute top-12 md:top-24 left-6 md:left-12 max-w-7xl w-full z-10 pointer-events-none">
          <span className="text-[10px] font-mono tracking-[0.2em] text-[#ff6a00] uppercase">[06. SELECTED WORK]</span>
        </div>
        
        {/* GSAP Horizontal Scroll Container */}
        <div ref={scrollRef} className="w-max flex gap-6 md:gap-10 px-6 md:px-12 items-center h-[50vh] md:h-[65vh]">
          {projects.map((p) => (
            <a 
              key={p.link} 
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-[85vw] md:w-[60vw] lg:w-[45vw] xl:w-[40vw] h-full relative shrink-0 rounded-[2rem] overflow-hidden"
            >
              {/* Background Plate */}
              <div className="absolute inset-0 bg-[#0a0a0a] group-hover:bg-[#111] transition-colors duration-500" />
              
              {/* Internal Border (Overlay so it doesn't scale with the image) */}
              <div className="absolute inset-0 border border-white/10 group-hover:border-[var(--color-accent)] rounded-[2rem] transition-colors duration-500 z-20 pointer-events-none" />

              {/* Content Area */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-30 pointer-events-none">
                <div className="flex justify-between items-start">
                  <span className="text-xl md:text-2xl font-mono font-bold text-white/60 group-hover:text-[var(--color-accent)] transition-colors duration-500">
                    {p.index}
                  </span>
                  <span className="text-white/60 opacity-0 group-hover:opacity-100 group-hover:text-white transition-all duration-500 transform group-hover:translate-x-0 -translate-x-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                  </span>
                </div>
                
                <div className="transform transition-transform duration-700 group-hover:-translate-y-2">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6 leading-[1.1]">
                    {p.name}
                  </h3>
                  <p className="text-lg md:text-xl text-white/50 max-w-md group-hover:text-white/90 transition-colors duration-500 font-light">
                    {p.result}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
