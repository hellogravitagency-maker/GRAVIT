import React from 'react';
import { motion } from 'motion/react';

export function AuditView() {
  return (
    <div className="p-10 max-w-5xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        
        <div className="flex justify-between items-center mb-10 border-b border-[#222] pb-6">
          <h1 className="text-4xl font-bold uppercase tracking-widest" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>AI Quality Control</h1>
          <button className="text-[10px] font-mono bg-[#5B4BFF] text-white px-4 py-2 rounded-sm uppercase tracking-widest font-bold">
            Run Audit
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
           <div className="col-span-1 bg-[#111] border border-[#222] p-8 text-center flex flex-col items-center justify-center rounded-sm">
              <div className="text-xs font-mono uppercase tracking-widest text-[#666] mb-4">Project Quality</div>
              <div className="text-6xl font-bold text-white mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>94</div>
              <div className="text-[10px] font-mono text-[#5B4BFF]">OUT OF 100</div>
           </div>
           
           <div className="col-span-2 space-y-4">
              <div className="flex justify-between items-center text-sm font-mono border-b border-[#222] pb-3">
                 <span className="text-[#ccc]">Performance</span>
                 <span className="text-green-500 font-bold">96</span>
              </div>
              <div className="flex justify-between items-center text-sm font-mono border-b border-[#222] pb-3">
                 <span className="text-[#ccc]">Accessibility</span>
                 <span className="text-yellow-500 font-bold">91</span>
              </div>
              <div className="flex justify-between items-center text-sm font-mono border-b border-[#222] pb-3">
                 <span className="text-[#ccc]">SEO</span>
                 <span className="text-green-500 font-bold">95</span>
              </div>
              <div className="flex justify-between items-center text-sm font-mono border-b border-[#222] pb-3">
                 <span className="text-[#ccc]">Responsive Design</span>
                 <span className="text-green-500 font-bold">98</span>
              </div>
              <div className="flex justify-between items-center text-sm font-mono border-b border-[#222] pb-3">
                 <span className="text-[#ccc]">Visual Consistency</span>
                 <span className="text-green-500 font-bold">93</span>
              </div>
           </div>
        </div>

        <div>
           <h3 className="text-xs font-mono uppercase tracking-widest text-[#666] mb-4">Actionable Findings</h3>
           <div className="bg-[#0a0a0a] border border-yellow-500/20 p-5 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500" />
              <div className="flex justify-between items-start">
                 <div>
                    <div className="text-xs font-mono text-yellow-500 mb-1">Accessibility - 2 issues found</div>
                    <div className="text-sm text-white mb-2">Button contrast is below recommended level on Home Hero.</div>
                 </div>
                 <button className="text-[10px] font-mono bg-[#222] hover:bg-[#333] text-white px-3 py-1.5 transition-colors rounded-sm">Fix with AI</button>
              </div>
           </div>
        </div>

      </motion.div>
    </div>
  );
}
