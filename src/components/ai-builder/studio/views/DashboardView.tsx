import React from 'react';
import { motion } from 'motion/react';

export function DashboardView() {
  return (
    <div className="p-10 max-w-5xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-bold uppercase tracking-widest mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Projects Dashboard</h1>
        <p className="text-[#999] mb-12">Build better websites. Move faster.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Project Card */}
          <div className="bg-[#111] border border-[#222] p-6 hover:border-[#333] transition-colors rounded-sm flex flex-col justify-between group cursor-pointer relative overflow-hidden">
             <div className="absolute top-0 right-0 p-3">
                <span className="text-[10px] font-mono bg-[#5B4BFF]/10 text-[#5B4BFF] px-2 py-1 uppercase tracking-widest">Active</span>
             </div>
             
             <div>
                <div className="text-xs text-[#666] font-mono mb-2 uppercase tracking-widest">Website Redesign</div>
                <h2 className="text-2xl font-bold text-white mb-6">Little Scholars Academy</h2>
             </div>
             
             <div className="space-y-4">
                <div className="flex justify-between text-xs text-[#999] font-mono">
                  <span>Phase: Design</span>
                  <span>72%</span>
                </div>
                <div className="w-full h-1 bg-[#222] rounded-full overflow-hidden">
                  <div className="h-full bg-[#5B4BFF] w-[72%]" />
                </div>
                
                <div className="pt-4 border-t border-[#222] flex justify-between items-center text-xs text-[#666]">
                  <span>Last active: 2 hours ago</span>
                  <div className="flex -space-x-2">
                     <div className="w-6 h-6 rounded-full bg-[#333] border-2 border-[#111] z-20" />
                     <div className="w-6 h-6 rounded-full bg-[#444] border-2 border-[#111] z-10" />
                     <div className="w-6 h-6 rounded-full bg-[#5B4BFF] border-2 border-[#111] flex items-center justify-center text-white z-0">AI</div>
                  </div>
                </div>
             </div>
          </div>

          {/* New Project Card */}
          <div className="bg-[#0a0a0a] border border-dashed border-[#333] p-6 hover:border-[#5B4BFF]/50 hover:bg-[#5B4BFF]/5 transition-colors rounded-sm flex flex-col items-center justify-center cursor-pointer min-h-[240px]">
             <div className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center mb-4 text-[#666]">
               +
             </div>
             <div className="text-sm font-bold text-[#999] uppercase tracking-widest">New Project</div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
