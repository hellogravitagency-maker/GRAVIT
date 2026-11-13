import React, { useRef } from 'react';
import { useInView, useMotionValue, useSpring, MotionValue } from 'motion/react';
import ExperienceVisual from './features/ExperienceVisual';
import ProductVisual from './features/ProductVisual';
import AIVisual from './features/AIVisual';
import SystemsVisual from './features/SystemsVisual';

const features = [
  {
    id: "experience",
    number: "01 / 04",
    tag: "Experience",
    title: "Digital Experiences",
    description: "High-performance websites and digital experiences engineered around clarity, speed, and conversion.",
  },
  {
    id: "product",
    number: "02 / 04",
    tag: "Engineering",
    title: "Product Engineering",
    description: "From early concepts to production-ready platforms, we turn ambitious ideas into scalable digital products.",
  },
  {
    id: "ai",
    number: "03 / 04",
    tag: "Multi-Agent & Workflow",
    title: "AI & Automation",
    description: "Stateful multi-agent systems, durable workflows, and deterministic guardrails engineered with LangGraph, Temporal, and n8n.",
  },
  {
    id: "systems",
    number: "04 / 04",
    tag: "Scale",
    title: "Digital Systems",
    description: "Design systems and token architectures that keep complex digital ecosystems coherent, accessible, and fast.",
  }
];

const VISUALS = { experience: ExperienceVisual, product: ProductVisual, ai: AIVisual, systems: SystemsVisual };
// Bento rhythm on desktop: wide (2 cols) / narrow (1 col), wide (2 cols) / narrow (1 col)
const SPANS = ['lg:col-span-2', 'lg:col-span-1', 'lg:col-span-2', 'lg:col-span-1'];

function Tile({ feature, span, mouseX, mouseY }: {
  key?: string;
  feature: typeof features[number]; 
  span: string; 
  mouseX: MotionValue<number>; 
  mouseY: MotionValue<number>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isActive = useInView(ref, { amount: 0.25 });
  const Visual = VISUALS[feature.id as keyof typeof VISUALS];

  return (
    <div 
      ref={ref} 
      className={`group relative flex flex-col rounded-2xl border border-border/80 bg-surface/50 hover:bg-surface/80 hover:border-border transition-all duration-300 backdrop-blur-sm overflow-hidden ${span}`}
    >
      <div className="p-6 sm:p-8 md:p-10 pb-0">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs tracking-widest text-[#FF6A39] font-bold">
            {feature.number}
          </span>
          <span className="font-mono text-[9px] uppercase tracking-wider text-muted px-2.5 py-0.5 rounded-full bg-surface border border-border-subtle">
            {feature.tag}
          </span>
        </div>
        <h3 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.035em] text-primary">
          {feature.title}
        </h3>
        <p className="mt-2 text-sm sm:text-base text-secondary leading-relaxed max-w-lg tracking-[-0.015em]">
          {feature.description}
        </p>
      </div>

      <div className="relative flex-1 min-h-[300px] sm:min-h-[320px] md:min-h-[360px] p-4 sm:p-6 md:p-8 flex items-center justify-center">
        <Visual isActive={isActive} mouseX={mouseX} mouseY={mouseY} />
      </div>
    </div>
  );
}

export default function MotionFeatureCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0.5);
  const rawY = useMotionValue(0.5);
  const mouseX = useSpring(rawX, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(rawY, { stiffness: 150, damping: 20 });

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const r = sectionRef.current.getBoundingClientRect();
    rawX.set(Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)));
    rawY.set(Math.max(0, Math.min(1, (e.clientY - r.top) / r.height)));
  };

  return (
    <section ref={sectionRef} onMouseMove={onMove} className="pt-12 md:pt-16 pb-10 md:pb-14 w-full bg-background text-primary">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-14 px-2">
          <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-[#FF6A39] font-medium px-3.5 py-1 rounded-full bg-[#FF6A39]/10 border border-[#FF6A39]/20 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF6A39]" />
            What We Build
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-semibold tracking-[-0.04em] text-primary leading-[1.05]">
            Digital systems engineered <br className="hidden sm:inline" />
            to move businesses <span className="font-serif italic font-normal text-secondary">forward.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-secondary leading-relaxed tracking-[-0.015em] max-w-2xl mx-auto">
            Websites, products and autonomous platforms. Design, engineering and emerging technology unified in one team.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {features.map((f, i) => (
            <Tile key={f.id} feature={f} span={SPANS[i]} mouseX={mouseX} mouseY={mouseY} />
          ))}
        </div>

      </div>
    </section>
  );
}
