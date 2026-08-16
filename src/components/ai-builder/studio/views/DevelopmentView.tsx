import React from 'react';
import { motion } from 'motion/react';
import { Folder, FileCode2, Code } from 'lucide-react';

export function DevelopmentView() {
  return (
    <div className="h-full w-full flex">
      {/* File Tree */}
      <div className="w-64 border-r border-[#222] bg-[#050505] flex flex-col flex-shrink-0">
        <div className="p-4 border-b border-[#222] text-xs font-mono font-bold text-white uppercase tracking-widest">Project Files</div>
        <div className="flex-1 overflow-auto p-4 space-y-2 text-sm text-[#999] font-mono">
           <div className="flex items-center gap-2 text-white"><Folder className="w-4 h-4 text-[#5B4BFF]" /> src</div>
           <div className="flex items-center gap-2 ml-4"><Folder className="w-4 h-4" /> components</div>
           <div className="flex items-center gap-2 ml-8 text-[#ccc]"><FileCode2 className="w-4 h-4 text-[#5B4BFF]" /> HeroSection.tsx</div>
           <div className="flex items-center gap-2 ml-8"><FileCode2 className="w-4 h-4" /> ProgramCard.tsx</div>
           <div className="flex items-center gap-2 ml-8"><FileCode2 className="w-4 h-4" /> Footer.tsx</div>
           <div className="flex items-center gap-2 ml-4"><Folder className="w-4 h-4" /> pages</div>
           <div className="flex items-center gap-2 ml-8"><FileCode2 className="w-4 h-4" /> index.tsx</div>
        </div>
      </div>

      {/* Editor */}
      <div className="flex-1 flex flex-col bg-[#111]">
        <div className="h-10 border-b border-[#222] flex items-center px-4 gap-4 bg-[#0a0a0a]">
           <div className="text-xs font-mono text-[#5B4BFF] border-b border-[#5B4BFF] h-full flex items-center px-2">HeroSection.tsx</div>
           <div className="text-xs font-mono text-[#666]">index.tsx</div>
        </div>
        <div className="flex-1 p-6 font-mono text-sm leading-loose overflow-auto">
          <pre className="text-[#ccc]">
{`import React from 'react';
import { motion } from 'framer-motion';

export function HeroSection({ headline, subheadline }) {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center bg-white px-8 md:px-24">
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-6xl md:text-8xl font-bold font-heading text-neutral-900 max-w-4xl leading-none"
      >
        {headline}
      </motion.h1>
      
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="mt-8 text-xl text-neutral-600 max-w-2xl"
      >
        {subheadline}
      </motion.p>
    </section>
  );
}`}
          </pre>
        </div>
      </div>
    </div>
  );
}
