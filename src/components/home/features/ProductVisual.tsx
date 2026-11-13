import React, { useState } from 'react';
import { motion, MotionValue, useTransform } from 'motion/react';
import { Terminal, Check, Code, GitCommit, ArrowUpRight } from 'lucide-react';

interface ProductVisualProps {
  isActive: boolean;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export default function ProductVisual({ isActive, mouseX, mouseY }: ProductVisualProps) {
  const [activeTab, setActiveTab] = useState<'code' | 'deploy'>('code');

  const uiX = useTransform(mouseX, [0, 1], [-4, 4]);
  const uiY = useTransform(mouseY, [0, 1], [-4, 4]);

  return (
    <div className="relative w-full h-full min-h-[340px] md:min-h-[380px] flex flex-col justify-between overflow-hidden rounded-2xl bg-surface/90 border border-border-subtle p-4 sm:p-5 select-none transition-colors duration-300">
      
      {/* Top Header / File Info */}
      <div className="relative z-20 flex items-center justify-between border-b border-border-subtle pb-3">
        <div className="flex items-center gap-2">
          <Code size={13} className="text-primary" />
          <span className="font-mono text-xs font-semibold text-primary">
            api/checkout/route.ts
          </span>
        </div>

        {/* View Switcher */}
        <div className="flex items-center p-0.5 rounded-lg bg-surface border border-border-subtle font-mono text-[10px]">
          <button
            onClick={() => setActiveTab('code')}
            className={`px-2 py-0.5 rounded-md transition-all cursor-pointer ${
              activeTab === 'code'
                ? 'bg-surface-hover text-primary font-bold shadow-sm'
                : 'text-muted hover:text-secondary'
            }`}
          >
            TypeScript
          </button>
          <button
            onClick={() => setActiveTab('deploy')}
            className={`px-2 py-0.5 rounded-md transition-all cursor-pointer ${
              activeTab === 'deploy'
                ? 'bg-surface-hover text-primary font-bold shadow-sm'
                : 'text-muted hover:text-secondary'
            }`}
          >
            Deploy
          </button>
        </div>
      </div>

      {/* Center Content: Code Specimen or Deploy Status */}
      <motion.div
        style={{ x: uiX, y: uiY }}
        className="relative z-10 flex-1 my-3 flex flex-col justify-center overflow-hidden"
      >
        {activeTab === 'code' ? (
          <div className="rounded-xl border border-border-subtle bg-surface p-3 sm:p-3.5 font-mono text-[10.5px] sm:text-[11.5px] leading-relaxed text-secondary overflow-x-auto">
            <div className="text-muted/60 select-none mb-1 text-[9px] border-b border-border-subtle/50 pb-1">
              Next.js 15 · Edge Runtime
            </div>
            <div>
              <span className="text-[#FF6A39]">export async function</span> <span className="text-primary font-semibold">POST</span>(req: <span className="text-primary">Request</span>) {'{'}
            </div>
            <div className="pl-3 text-secondary">
              <span className="text-[#FF6A39]">const</span> {'{ planId }'} = <span className="text-[#FF6A39]">await</span> req.json();
            </div>
            <div className="pl-3 text-secondary">
              <span className="text-[#FF6A39]">const</span> session = <span className="text-[#FF6A39]">await</span> stripe.checkout.create({'{'}
            </div>
            <div className="pl-6 text-muted">
              mode: <span className="text-emerald-400">'subscription'</span>,
            </div>
            <div className="pl-6 text-muted">
              {"line_items: [{ price: planId, quantity: 1 }],"}
            </div>
            <div className="pl-3 text-secondary">
              {'}'});
            </div>
            <div className="pl-3 text-secondary">
              <span className="text-[#FF6A39]">return</span> Response.json({'{'} url: session.url {'}'});
            </div>
            <div>{'}'}</div>
          </div>
        ) : (
          <div className="rounded-xl border border-border-subtle bg-surface p-3 sm:p-4 font-mono text-[11px] sm:text-xs flex flex-col gap-2">
            <div className="text-muted flex items-center gap-1.5 pb-2 border-b border-border-subtle">
              <GitCommit size={13} className="text-[#FF6A39]" />
              <span>commit main: feat(billing): stripe edge checkout</span>
            </div>
            <div className="flex items-center justify-between text-secondary">
              <span className="flex items-center gap-1.5">
                <Check size={12} className="text-emerald-400" /> Static analysis passed
              </span>
              <span className="text-muted">TypeScript 5.8</span>
            </div>
            <div className="flex items-center justify-between text-secondary">
              <span className="flex items-center gap-1.5">
                <Check size={12} className="text-emerald-400" /> Unit & integration tests
              </span>
              <span className="text-muted">142/142</span>
            </div>
            <div className="flex items-center justify-between text-primary font-medium pt-1 border-t border-border-subtle/50">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live on Production
              </span>
              <span className="text-muted text-[10px]">Vercel Edge</span>
            </div>
          </div>
        )}
      </motion.div>

      {/* Bottom Status Row */}
      <div className="relative z-20 mt-1 p-2.5 sm:p-3 border border-border-subtle bg-surface-hover/70 backdrop-blur rounded-xl flex items-center justify-between text-xs">
        <span className="font-mono text-[10px] text-secondary">
          TypeScript · Node.js · REST API
        </span>
        <span className="font-mono text-[10px] text-emerald-400 font-medium flex items-center gap-1">
          <Check size={11} /> Ready to Deploy
        </span>
      </div>

    </div>
  );
}
