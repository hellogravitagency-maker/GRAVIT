import { ReactNode, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const EASE = 'expo.out';

// Every route mounts inside this wrapper, so one GSAP layer covers the whole site.
export default function PageTransition({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add({ motion: '(prefers-reduced-motion: no-preference)', desktop: '(min-width: 768px)' }, (ctx) => {
      const { motion, desktop } = ctx.conditions!;
      if (!motion) return;
      const q = gsap.utils.selector(ref);

      // Page enter
      gsap.from(ref.current, { opacity: 0, duration: 0.8, ease: 'power2.out' });

      // Hero intro: masked char rise → gradient word → copy → product stage
      const hero = q('.hero')[0];
      if (hero) {
        const line = SplitText.create(q('.hero-line'), { type: 'chars', mask: 'chars' });
        const heroTl = gsap.timeline({ defaults: { ease: EASE, duration: 1.4 }, delay: 0.1 });
        const eyebrow = q('.hero-eyebrow');
        if (eyebrow.length) {
          heroTl.from(eyebrow, { opacity: 0, y: 16 });
        }
        heroTl
          .from(line.chars, { yPercent: 110, stagger: 0.022 }, eyebrow.length ? '<0.1' : 0)
          .from(q('.hero-word > span'), { yPercent: 105, duration: 1.6 }, '<0.35')
          .from(q('.hero-subtitle, .hero-ctas, .hero-stack'), { opacity: 0, y: 24, stagger: 0.1 }, '<0.3')
          .from(q('.hero-stage-inner'), { opacity: 0, y: 100, filter: 'blur(16px)', duration: 2, clearProps: 'filter' }, '<0.15');

        // Scroll: pin the hero, copy drifts up and fades while the stage grows to full size
        // ponytail: desktop only — pinning on touch scroll feels janky, mobile gets the plain stage
        if (desktop) {
          gsap.timeline({
            scrollTrigger: { trigger: hero, start: 'top top', end: '+=70%', scrub: true, pin: true },
          })
            .to(q('.hero-content'), { y: -120, opacity: 0, ease: 'none' }, 0)
            .fromTo(q('.hero-stage'), { scale: 0.84 }, { scale: 1, y: -140, ease: 'none' }, 0);
        }
      }

      // Section headings: masked line-rise
      q('h1.page-title, h2.display-editorial, h2.font-heading').forEach((h) => {
        // ponytail: skip headings framer-motion already animates (inline opacity) and gradient text (split breaks background-clip)
        const owner = h.closest('[style*="opacity"]');
        if ((owner && owner !== ref.current) || h.querySelector('.text-gradient-accent')) return;
        SplitText.create(h, {
          type: 'lines', mask: 'lines', autoSplit: true,
          onSplit: (self) => gsap.from(self.lines, {
            yPercent: 110, duration: 1.3, ease: EASE, stagger: 0.09,
            scrollTrigger: { trigger: h, start: 'top 88%', once: true },
          }),
        });
      });

      // Groups whose children fade up one after another
      q('.gsap-stagger').forEach((el) => {
        gsap.from(el.children, {
          y: 24, opacity: 0, duration: 1.2, ease: EASE, stagger: 0.08, clearProps: 'transform', // keeps CSS hover transforms working
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        });
      });

      // Images that settle from a slight zoom as they scroll through (wrap in overflow-hidden)
      q('.gsap-parallax').forEach((img) => {
        gsap.fromTo(img, { scale: 1.15 }, {
          scale: 1, ease: 'none',
          scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: true },
        });
      });

      // Panels that grow into place as they enter
      q('.gsap-zoom').forEach((el) => {
        gsap.fromTo(el, { scale: 0.9 }, {
          scale: 1, ease: 'none',
          scrollTrigger: { trigger: el, start: 'top bottom', end: 'top 35%', scrub: true },
        });
      });

      // Section components create their triggers before this parent effect runs, so the hero pin is made last.
      // Sort by page position so every trigger accounts for pins above it.
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    });
  }, { scope: ref });

  return <div ref={ref} className="w-full h-full">{children}</div>;
}
