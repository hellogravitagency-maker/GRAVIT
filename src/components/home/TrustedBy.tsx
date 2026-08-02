import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const institutions = [
  "Little Stars Academy",
  "SSV School",
  "RUCE Campus",
  "Wonderkids Academy"
];

export default function TrustedBy() {
  const containerRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Quote entrance animation
      gsap.fromTo(quoteRef.current, 
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          ease: "expo.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );

      // List stagger entrance
      const items = gsap.utils.toArray('.trusted-item');
      gsap.fromTo(items,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 80%",
          }
        }
      );
      
      // Continuous scroll parallax effect
      items.forEach((item: any, i) => {
        // Alternating parallax direction for a dynamic feel
        const direction = i % 2 === 0 ? -25 : 25;
        gsap.to(item, {
          x: direction,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-white/20 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
        <div className="md:col-span-3">
          <span className="text-[10px] font-mono tracking-[0.2em] text-[#ff6a00] uppercase">[08. TRUSTED BY]</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
        <div ref={quoteRef} className="border-l-2 border-[#ff6a00] pl-6 md:pl-10 flex flex-col justify-center">
          <p className="text-2xl md:text-3xl lg:text-4xl italic leading-tight text-white/90 font-sans mb-8">
            "They didn't just build a website; they architected a digital campus that completely transformed how our students and faculty interact online. Absolute precision."
          </p>
          <p className="text-xs uppercase tracking-[0.15em] text-white/50 font-mono">
            — PRINCIPAL, [INSTITUTION NAME]
          </p>
        </div>

        <div ref={listRef} className="flex flex-col justify-center mt-12 lg:mt-0">
          {institutions.map((name, i) => (
            <div 
              key={name} 
              className="trusted-item border-t border-white/10 py-6 group hover:border-[#ff6a00]/50 transition-colors duration-500 cursor-default flex justify-between items-center"
            >
              <span className="font-mono text-sm md:text-base tracking-widest text-white/40 uppercase group-hover:text-white transition-colors duration-500">
                {name}
              </span>
              <span className="opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-[#ff6a00]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                  <path d="M7 17l9.2-9.2M17 17V7H7"/>
                </svg>
              </span>
            </div>
          ))}
          <div className="border-t border-white/10"></div>
        </div>
      </div>
    </section>
  );
}
