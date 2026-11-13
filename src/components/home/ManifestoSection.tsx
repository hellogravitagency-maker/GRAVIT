import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const TEXT = 'We reject the generic. Every pixel, every line of code, every interaction is engineered with precision to create digital experiences that refuse to be ignored.';

export default function ManifestoSection() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add({ motion: '(prefers-reduced-motion: no-preference)', desktop: '(min-width: 768px)' }, (ctx) => {
      const { motion, desktop } = ctx.conditions!;
      if (!motion) return; // words stay fully lit
      gsap.fromTo('.manifesto-word', { color: 'var(--app-border)' }, {
        color: 'var(--app-text-primary)', stagger: 0.1, ease: 'none',
        // ponytail: pin on desktop only, same rule as the hero; mobile scrubs as it scrolls past
        scrollTrigger: desktop
          ? { trigger: ref.current, start: 'top top', end: '+=120%', scrub: true, pin: true }
          : { trigger: ref.current, start: 'top 75%', end: 'bottom 60%', scrub: true },
      });
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 py-24 bg-background text-center">
      <p className="text-sm md:text-[17px] font-medium text-accent mb-8">Our philosophy</p>
      <p className="max-w-5xl text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.045em] leading-[1.08] text-primary" aria-label={TEXT}>
        {TEXT.split(' ').map((word, i) => (
          <span key={i} aria-hidden="true" className="manifesto-word inline-block mr-[0.25em]">{word}</span>
        ))}
      </p>
    </section>
  );
}
