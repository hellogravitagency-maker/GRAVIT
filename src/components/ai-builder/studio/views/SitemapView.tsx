import React from 'react';
import { motion } from 'motion/react';

export function SitemapView() {
  return (
    <div className="p-10 max-w-5xl mx-auto w-full h-full flex flex-col">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex-1 flex flex-col">
        
        <div className="flex justify-between items-center mb-12 border-b border-[#222] pb-6">
          <h1 className="text-4xl font-bold uppercase tracking-widest" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Site Architecture</h1>
          <button className="text-[10px] font-mono border border-[#333] px-3 py-1.5 hover:bg-[#222] transition-colors rounded-sm text-white flex items-center gap-2">
            + Add Page
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center font-mono text-sm text-[#ccc] overflow-auto">
          <pre className="p-8 bg-[#0a0a0a] border border-[#222] rounded-sm leading-[2.5]">
{`                     HOME
                       │
          ┌────────────┼────────────┐
          │            │            │
        ABOUT       PROGRAMS      CAMPUS
          │                         │
        TEAM                    GALLERY
                       │
                    CONTACT`}
          </pre>
        </div>
        
        <div className="mt-8 text-center text-xs text-[#666] font-mono">
           Hover over nodes to Edit, Rename, or Generate Content via AI.
        </div>
      </motion.div>
    </div>
  );
}
