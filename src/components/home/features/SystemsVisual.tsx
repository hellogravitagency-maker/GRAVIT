import React, { useState } from 'react';
import { motion, MotionValue, useTransform } from 'motion/react';
import { Layers, Copy, Check } from 'lucide-react';

interface SystemsVisualProps {
  isActive: boolean;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

interface ColorToken {
  name: string;
  variable: string;
  hex: string;
  usage: string;
}

const TOKENS: ColorToken[] = [
  { name: 'Space', variable: '--gravit-space', hex: '#0A0A0F', usage: 'Dark ground' },
  { name: 'Ember', variable: '--gravit-ember', hex: '#FF6A39', usage: 'Focal accent' },
  { name: 'Canvas', variable: '--gravit-canvas', hex: '#E9E8E1', usage: 'Warm editorial' },
  { name: 'Nova', variable: '--gravit-nova', hex: '#F8F8F0', usage: 'Light surface' },
];

export default function SystemsVisual({ isActive, mouseX, mouseY }: SystemsVisualProps) {
  const [selectedToken, setSelectedToken] = useState<ColorToken>(TOKENS[1]);
  const [copied, setCopied] = useState(false);

  const uiX = useTransform(mouseX, [0, 1], [-4, 4]);
  const uiY = useTransform(mouseY, [0, 1], [-4, 4]);

  const copyToken = (val: string) => {
    navigator.clipboard?.writeText(val);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative w-full h-full min-h-[340px] md:min-h-[380px] flex flex-col justify-between overflow-hidden rounded-2xl bg-surface/90 border border-border-subtle p-4 sm:p-5 select-none transition-colors duration-300">
      
      {/* Top Header */}
      <div className="relative z-20 flex items-center justify-between border-b border-border-subtle pb-3">
        <div className="flex items-center gap-2">
          <Layers size={13} className="text-[#FF6A39]" />
          <span className="font-mono text-xs font-semibold text-primary">
            Design Tokens & Primitives
          </span>
        </div>
        <span className="font-mono text-[10px] text-muted px-2 py-0.5 rounded bg-surface border border-border-subtle">
          Design System
        </span>
      </div>

      {/* Center Specimen Area */}
      <motion.div
        style={{ x: uiX, y: uiY }}
        className="relative z-10 flex-1 my-3 flex flex-col justify-center gap-3"
      >
        {/* Color Tokens Row */}
        <div>
          <div className="flex items-center justify-between mb-1.5 font-mono text-[9px] uppercase tracking-wider text-muted">
            <span>Color Tokens</span>
            <span>Click to copy</span>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {TOKENS.map((token) => {
              const isSelected = selectedToken.variable === token.variable;
              return (
                <div
                  key={token.variable}
                  onClick={() => {
                    setSelectedToken(token);
                    copyToken(token.variable);
                  }}
                  className={`flex flex-col items-center p-2 rounded-xl border cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? 'border-[#FF6A39] bg-surface-hover/90 shadow-sm'
                      : 'border-border-subtle bg-surface hover:border-border'
                  }`}
                >
                  <div
                    className="w-full h-7 rounded-lg border border-black/10 dark:border-white/10 shadow-inner"
                    style={{ backgroundColor: token.hex }}
                  />
                  <span className="mt-1.5 font-mono text-[9px] font-semibold text-primary">
                    {token.name}
                  </span>
                  <span className="font-mono text-[8px] text-muted">
                    {token.hex}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Typography Scale Specimen */}
        <div className="p-3 rounded-xl border border-border-subtle bg-surface flex flex-col gap-1.5">
          <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-wider text-muted border-b border-border-subtle/50 pb-1">
            <span>Typography System</span>
            <span>Scale</span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="font-sans text-sm font-semibold text-primary">Geist Sans</span>
            <span className="font-mono text-[9px] text-muted">Primary UI</span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="font-serif italic text-base text-primary">Instrument Serif</span>
            <span className="font-mono text-[9px] text-muted">Editorial Accent</span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-xs text-primary font-medium">Space Mono</span>
            <span className="font-mono text-[9px] text-muted">Technical Meta</span>
          </div>
        </div>
      </motion.div>

      {/* Bottom Token Detail Bar */}
      <div className="relative z-20 mt-1 p-2.5 sm:p-3 border border-border-subtle bg-surface-hover/70 backdrop-blur rounded-xl flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[9.5px] font-bold text-[#FF6A39] px-1.5 py-0.5 rounded bg-[#FF6A39]/10 border border-[#FF6A39]/20">
            {selectedToken.variable}
          </span>
          <span className="font-mono text-[10px] text-secondary">
            {selectedToken.hex} · {selectedToken.usage}
          </span>
        </div>

        <button
          onClick={() => copyToken(selectedToken.variable)}
          className="inline-flex items-center gap-1 font-mono text-[9px] text-muted hover:text-primary transition-colors cursor-pointer"
        >
          {copied ? <Check size={11} className="text-emerald-500" /> : <Copy size={11} />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>

    </div>
  );
}
