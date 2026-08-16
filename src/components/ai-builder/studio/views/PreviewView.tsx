import React from 'react';
import { motion } from 'motion/react';
import { PreviewEngine } from '../../PreviewEngine';
import { AIBuilderState } from '../../types';
import { Maximize2, Monitor, Tablet, Smartphone } from 'lucide-react';

export function PreviewView({ state }: { state: AIBuilderState }) {
  return (
    <div className="h-full w-full flex flex-col">
       <div className="h-12 border-b border-[#222] flex items-center justify-between px-6 bg-[#0a0a0a] flex-shrink-0">
          <div className="flex items-center gap-4">
             <button className="text-[#ccc] hover:text-white"><Monitor className="w-4 h-4" /></button>
             <button className="text-[#666] hover:text-white"><Tablet className="w-4 h-4" /></button>
             <button className="text-[#666] hover:text-white"><Smartphone className="w-4 h-4" /></button>
          </div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-[#666]">
            Interactive Canvas
          </div>
          <button className="text-[#666] hover:text-white"><Maximize2 className="w-4 h-4" /></button>
       </div>

       <div className="flex-1 overflow-auto p-4 md:p-12 flex items-center justify-center bg-[#050505]">
          <div className="w-full max-w-6xl h-full shadow-2xl border border-[#222]">
             {/* Reusing our dynamic preview engine */}
             <PreviewEngine state={state} isEditorMode={true} />
          </div>
       </div>
    </div>
  );
}
