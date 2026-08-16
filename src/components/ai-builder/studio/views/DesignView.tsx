import React from 'react';
import { motion } from 'motion/react';

export function DesignView() {
  return (
    <div className="p-10 max-w-5xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        
        <div className="flex justify-between items-center mb-10 border-b border-[#222] pb-6">
          <h1 className="text-4xl font-bold uppercase tracking-widest" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Design Intelligence</h1>
          <button className="text-[10px] font-mono bg-white text-black px-4 py-2 hover:bg-gray-200 transition-colors rounded-sm uppercase tracking-widest font-bold">
            Apply to Project
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          <div className="col-span-4">
             <h3 className="text-xs font-mono uppercase tracking-widest text-[#666] mb-4">Visual Direction</h3>
             <ul className="space-y-2 text-sm text-[#ccc]">
               <li className="bg-[#111] border border-[#222] px-3 py-2 rounded-sm">Luxury Editorial</li>
               <li className="bg-[#111] border border-[#222] px-3 py-2 rounded-sm">Modern</li>
               <li className="bg-[#111] border border-[#222] px-3 py-2 rounded-sm">Warm & Trustworthy</li>
               <li className="bg-[#111] border border-[#222] px-3 py-2 rounded-sm">Minimal</li>
             </ul>
          </div>

          <div className="col-span-8 space-y-10">
             
             <div>
               <h3 className="text-xs font-mono uppercase tracking-widest text-[#666] mb-4">Color System</h3>
               <div className="flex gap-4">
                 <div>
                    <div className="w-16 h-16 rounded-sm bg-[#faf9f6] border border-[#222]" />
                    <div className="text-[10px] font-mono mt-2 text-[#999]">#FAF9F6</div>
                 </div>
                 <div>
                    <div className="w-16 h-16 rounded-sm bg-[#1a1a1a] border border-[#222]" />
                    <div className="text-[10px] font-mono mt-2 text-[#999]">#1A1A1A</div>
                 </div>
                 <div>
                    <div className="w-16 h-16 rounded-sm bg-[#c7b49a] border border-[#222]" />
                    <div className="text-[10px] font-mono mt-2 text-[#999]">#C7B49A</div>
                 </div>
               </div>
             </div>

             <div>
               <h3 className="text-xs font-mono uppercase tracking-widest text-[#666] mb-4">Typography</h3>
               <div className="bg-[#0a0a0a] border border-[#222] p-6 rounded-sm">
                  <div className="text-4xl mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>BEBAS NEUE / DISPLAY</div>
                  <div className="text-lg text-[#ccc] mb-4">Inter / Primary Body Copy. Clear, legible, and objective.</div>
                  <div className="text-xs text-[#999] font-mono uppercase tracking-widest">Space Mono / Metadata & Technical</div>
               </div>
             </div>

             <div>
               <h3 className="text-xs font-mono uppercase tracking-widest text-[#666] mb-4">Components</h3>
               <div className="flex gap-4">
                  <button className="bg-[#1a1a1a] text-white border border-[#333] px-6 py-3 text-sm">Primary Button</button>
                  <button className="bg-transparent text-[#1a1a1a] border border-[#1a1a1a] bg-white px-6 py-3 text-sm">Secondary Button</button>
               </div>
             </div>

          </div>

        </div>

      </motion.div>
    </div>
  );
}
