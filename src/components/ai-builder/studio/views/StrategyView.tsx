import React from 'react';
import { motion } from 'motion/react';

export function StrategyView() {
  const sections = [
    { title: 'Business Overview', content: 'A premium early childhood education center focusing on STEM and creative arts.' },
    { title: 'Target Audience', content: 'Upper-middle-class parents (28-45) seeking advanced early education.' },
    { title: 'Goals', content: '1. Increase tour bookings by 40%.\n2. Establish digital authority.\n3. Streamline application process.' },
    { title: 'Brand Positioning', content: 'We are not just a daycare; we are the foundation of your child\'s future.' },
  ];

  return (
    <div className="p-10 max-w-5xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold uppercase tracking-widest" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Strategy Workspace</h1>
          <div className="flex gap-2">
            <button className="text-[10px] font-mono border border-[#333] px-3 py-1 hover:bg-[#222] transition-colors rounded-sm text-[#999]">Regenerate</button>
            <button className="text-[10px] font-mono bg-[#5B4BFF] text-white px-3 py-1 transition-colors rounded-sm">Approve All</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map(s => (
            <div key={s.title} className="group relative">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#666] mb-3 flex justify-between">
                {s.title}
                <span className="opacity-0 group-hover:opacity-100 text-[#5B4BFF] cursor-pointer transition-opacity">Edit</span>
              </h3>
              <div className="bg-[#0a0a0a] border border-[#222] p-5 rounded-sm text-sm text-[#ccc] leading-relaxed whitespace-pre-wrap hover:border-[#444] transition-colors cursor-text">
                {s.content}
              </div>
            </div>
          ))}
        </div>

      </motion.div>
    </div>
  );
}
