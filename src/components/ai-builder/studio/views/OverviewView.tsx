import React from 'react';
import { motion } from 'motion/react';

export function OverviewView() {
  const phases = ['Discovery', 'Strategy', 'Design', 'Development', 'Review', 'Launch'];
  const activePhase = 2; // Design

  return (
    <div className="p-10 max-w-5xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        
        <div className="flex justify-between items-start mb-12 border-b border-[#222] pb-6">
          <div>
            <h1 className="text-5xl font-bold uppercase tracking-widest mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Little Scholars Academy</h1>
            <p className="text-[#999] font-mono text-sm">Premium Kindergarten Website</p>
          </div>
          <div className="flex gap-3">
             <button className="text-xs font-mono border border-[#333] px-4 py-2 hover:bg-[#222] transition-colors rounded-sm">Preview</button>
             <button className="text-xs font-mono border border-[#333] px-4 py-2 hover:bg-[#222] transition-colors rounded-sm">Share</button>
             <button className="text-xs font-mono bg-white text-black px-4 py-2 hover:bg-gray-200 transition-colors rounded-sm">Client Portal</button>
          </div>
        </div>

        {/* Lifecycle */}
        <div className="mb-16">
          <div className="flex justify-between items-center relative">
            <div className="absolute left-0 top-1/2 w-full h-px bg-[#222] -z-10" />
            {phases.map((phase, i) => (
              <div key={phase} className="flex flex-col items-center gap-3 bg-[#111] px-2">
                <div className={`w-3 h-3 rounded-full border-2 ${i === activePhase ? 'border-[#5B4BFF] bg-[#5B4BFF]' : i < activePhase ? 'border-[#666] bg-[#666]' : 'border-[#333] bg-[#111]'}`} />
                <span className={`text-[10px] font-mono uppercase tracking-widest ${i === activePhase ? 'text-white' : 'text-[#666]'}`}>{phase}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div>
            <h3 className="text-xs font-bold font-mono uppercase tracking-widest text-[#666] mb-4">Project Summary</h3>
            <ul className="space-y-4 text-sm text-[#ccc]">
              <li className="flex gap-4 border-b border-[#222] pb-2"><span className="text-[#666] w-32">Objective</span> <span>Elevate brand perception and increase enrollment inquiries.</span></li>
              <li className="flex gap-4 border-b border-[#222] pb-2"><span className="text-[#666] w-32">Target Audience</span> <span>High-income parents in the metro area.</span></li>
              <li className="flex gap-4 border-b border-[#222] pb-2"><span className="text-[#666] w-32">Brand Positioning</span> <span>Premium, nurturing, future-focused.</span></li>
              <li className="flex gap-4 border-b border-[#222] pb-2"><span className="text-[#666] w-32">Required Pages</span> <span>Home, Programs, Campus, Faculty, Contact.</span></li>
            </ul>
          </div>

          <div>
             <h3 className="text-xs font-bold font-mono uppercase tracking-widest text-[#5B4BFF] mb-4 flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-[#5B4BFF] animate-pulse" /> AI Project Brief
             </h3>
             <div className="bg-[#0a0a0a] border border-[#222] p-5 text-sm text-[#999] leading-relaxed rounded-sm font-mono text-xs">
                {'>'} Initializing analysis...<br/><br/>
                The Little Scholars Academy project requires a sophisticated visual approach that balances "premium education" with "nurturing care." <br/><br/>
                RECOMMENDATION: Utilize a soft but structured Swiss layout. Implement high-quality photography with generous whitespace to communicate luxury.<br/><br/>
                PRIORITY: The 'Book a Tour' CTA must be omnipresent but elegant.
             </div>
          </div>

        </div>

      </motion.div>
    </div>
  );
}
