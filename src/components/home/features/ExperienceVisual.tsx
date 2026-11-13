import React, { useState } from 'react';
import { motion, MotionValue, useTransform } from 'motion/react';
import { Globe, Lock, Monitor, Smartphone, ArrowUpRight } from 'lucide-react';

interface ExperienceVisualProps {
  isActive: boolean;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export default function ExperienceVisual({ isActive, mouseX, mouseY }: ExperienceVisualProps) {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');

  const frameX = useTransform(mouseX, [0, 1], [-4, 4]);
  const frameY = useTransform(mouseY, [0, 1], [-4, 4]);

  return (
    <div className="relative w-full h-full min-h-[340px] md:min-h-[380px] flex flex-col justify-between overflow-hidden rounded-2xl bg-surface/90 border border-border-subtle p-4 sm:p-5 select-none transition-colors duration-300">
      
      {/* Top Header / View Controller */}
      <div className="relative z-20 flex items-center justify-between border-b border-border-subtle pb-3">
        <div className="flex items-center gap-2">
          <Globe size={13} className="text-primary" />
          <span className="font-mono text-xs font-semibold text-primary">
            Digital Experience Flagship
          </span>
        </div>

        {/* Device Switcher */}
        <div className="flex items-center p-0.5 rounded-lg bg-surface border border-border-subtle font-mono text-[10px]">
          <button
            onClick={() => setDeviceMode('desktop')}
            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md transition-all cursor-pointer ${
              deviceMode === 'desktop'
                ? 'bg-surface-hover text-primary font-bold shadow-sm'
                : 'text-muted hover:text-secondary'
            }`}
          >
            <Monitor size={11} />
            <span className="hidden sm:inline">Desktop</span>
          </button>
          <button
            onClick={() => setDeviceMode('mobile')}
            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md transition-all cursor-pointer ${
              deviceMode === 'mobile'
                ? 'bg-surface-hover text-primary font-bold shadow-sm'
                : 'text-muted hover:text-secondary'
            }`}
          >
            <Smartphone size={11} />
            <span className="hidden sm:inline">Mobile</span>
          </button>
        </div>
      </div>

      {/* Center Content: Browser Window with Real Case Study Preview */}
      <motion.div
        style={{ x: frameX, y: frameY }}
        className="relative z-10 flex-1 my-3 flex items-center justify-center overflow-hidden"
      >
        <div
          className={`transition-all duration-300 ease-out flex flex-col rounded-xl border border-border bg-surface shadow-sm overflow-hidden ${
            deviceMode === 'desktop'
              ? 'w-full max-w-lg aspect-[16/10] sm:aspect-[16/9]'
              : 'w-[220px] aspect-[9/15] py-1'
          }`}
        >
          {/* Browser Chrome */}
          <div className="h-7 border-b border-border-subtle px-3 flex items-center justify-between bg-surface-hover/50">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-border" />
              <span className="w-2 h-2 rounded-full bg-border" />
              <span className="w-2 h-2 rounded-full bg-border" />
            </div>

            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-surface border border-border-subtle font-mono text-[9px] text-secondary">
              <Lock size={9} className="text-emerald-500" />
              <span>gravit.agency/work/velora</span>
            </div>

            <span className="w-3" />
          </div>

          {/* Browser Interior: Clean Editorial Layout */}
          <div className="flex-1 p-3.5 sm:p-5 flex flex-col justify-between bg-background">
            <div>
              <span className="inline-block font-mono text-[8.5px] uppercase tracking-wider text-[#FF6A39] font-bold px-2 py-0.5 rounded bg-[#FF6A39]/10 border border-[#FF6A39]/20 mb-2">
                Featured Case Study
              </span>
              <h4 className="font-serif italic text-lg sm:text-2xl font-medium tracking-tight text-primary leading-tight">
                VÉLORA — Style Moves With You.
              </h4>
              <p className="text-[11px] sm:text-xs text-secondary leading-relaxed mt-1.5 max-w-sm">
                Luxury apparel e-commerce engineered with fluid transitions and custom checkout architecture.
              </p>
            </div>

            {/* Architecture Tags */}
            <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-border-subtle/50 font-mono text-[8.5px] uppercase text-muted">
              <span className="px-2 py-0.5 rounded bg-surface border border-border-subtle">
                React 19
              </span>
              <span className="px-2 py-0.5 rounded bg-surface border border-border-subtle">
                Tailwind CSS
              </span>
              <span className="px-2 py-0.5 rounded bg-surface border border-border-subtle">
                Framer Motion
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Detail Row */}
      <div className="relative z-20 mt-1 p-2.5 sm:p-3 border border-border-subtle bg-surface-hover/70 backdrop-blur rounded-xl flex items-center justify-between text-xs">
        <span className="font-mono text-[10px] text-secondary">
          Editorial Design · Fluid Motion · Responsive Engineering
        </span>
        <span className="font-mono text-[10px] text-primary font-medium flex items-center gap-1">
          Production Ready
        </span>
      </div>

    </div>
  );
}
