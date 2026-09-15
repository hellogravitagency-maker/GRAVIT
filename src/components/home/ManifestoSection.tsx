import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ManifestoSection() {
  const manifestoRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const manifestoWords = gsap.utils.toArray('.manifesto-word');
    if (manifestoWords.length > 0 && manifestoRef.current) {
      gsap.fromTo(
        manifestoWords,
        { color: "var(--app-text-secondary)" },
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
    }
  }, { scope: manifestoRef });

  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="section-editorial">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-secondary mb-12">Our Philosophy</p>
        <div ref={manifestoRef} className="text-3xl md:text-5xl lg:text-6xl display-editorial leading-[1.15] max-w-5xl" aria-hidden="true">
          {("We reject the generic. Every pixel, every line of code, every interaction is engineered with precision to create digital experiences that refuse to be ignored.").split(" ").map((word, i) => (
            <span key={i} className="manifesto-word inline-block mr-[0.25em]">{word}</span>
          ))}
        </div>
        <p className="sr-only">We reject the generic. Every pixel, every line of code, every interaction is engineered with precision to create digital experiences that refuse to be ignored.</p>
      </div>
    </section>
  );
}
