import React, { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";

// Morphing SVG text filter approach — same technique as MagicUI's MorphingText
interface MorphingTextProps {
  texts: string[];
  className?: string;
}

const morphTime = 1.2;
const cooldownTime = 0.8;

export function MorphingText({ texts, className }: MorphingTextProps) {
  const text1Ref = useRef<SVGTextElement>(null);
  const text2Ref = useRef<SVGTextElement>(null);
  const [textIndex, setTextIndex] = useState(0);
  const morphRef = useRef(0);
  const cooldownRef = useRef(cooldownTime);
  const timeRef = useRef<number | null>(null);
  const animFrameRef = useRef<number | null>(null);

  const setMorph = (fraction: number) => {
    const t1 = text1Ref.current;
    const t2 = text2Ref.current;
    if (!t1 || !t2) return;

    t2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    t2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    const invertFraction = 1 - fraction;
    t1.style.filter = `blur(${Math.min(8 / invertFraction - 8, 100)}px)`;
    t1.style.opacity = `${Math.pow(invertFraction, 0.4) * 100}%`;
  };

  const doCooldown = () => {
    morphRef.current = 0;
    const t1 = text1Ref.current;
    const t2 = text2Ref.current;
    if (!t1 || !t2) return;

    t2.style.filter = "";
    t2.style.opacity = "100%";
    t1.style.filter = "";
    t1.style.opacity = "0%";
  };

  useEffect(() => {
    const animate = (time: number) => {
      animFrameRef.current = requestAnimationFrame(animate);

      const dt = timeRef.current !== null ? (time - timeRef.current) / 1000 : 0;
      timeRef.current = time;

      const t1 = text1Ref.current;
      const t2 = text2Ref.current;
      if (!t1 || !t2) return;

      let morph = morphRef.current;
      let cooldown = cooldownRef.current;

      cooldown -= dt;
      if (cooldown <= 0) {
        if (morph === 0) {
          // start of morph
          setTextIndex((prev) => {
            const next = (prev + 1) % texts.length;
            t1.textContent = texts[prev];
            t2.textContent = texts[next];
            return next;
          });
        }
        morph += dt;
        if (morph >= morphTime) {
          cooldownRef.current = cooldownTime;
          morphRef.current = 0;
          doCooldown();
          return;
        }
        morphRef.current = morph;
        setMorph(morph / morphTime);
      } else {
        cooldownRef.current = cooldown;
      }
    };

    // Initialize
    if (text1Ref.current) text1Ref.current.textContent = texts[texts.length - 1];
    if (text2Ref.current) text2Ref.current.textContent = texts[0];
    if (text2Ref.current) text2Ref.current.style.opacity = "100%";
    if (text1Ref.current) text1Ref.current.style.opacity = "0%";

    animFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [texts]);

  return (
    <div className={cn("relative flex h-20 w-full items-center justify-center", className)}>
      <div className="relative flex items-center justify-center">
        <span
          ref={text1Ref as any}
          className="absolute text-5xl md:text-7xl font-black uppercase tracking-tighter text-white whitespace-nowrap"
          style={{ opacity: "0%" }}
        />
        <span
          ref={text2Ref as any}
          className="absolute text-5xl md:text-7xl font-black uppercase tracking-tighter text-white whitespace-nowrap"
          style={{ opacity: "100%" }}
        />
        {/* Invisible spacer to reserve height */}
        <span
          className="invisible text-5xl md:text-7xl font-black uppercase tracking-tighter whitespace-nowrap px-4"
          aria-hidden
        >
          PLACEHOLDER
        </span>
      </div>
    </div>
  );
}
