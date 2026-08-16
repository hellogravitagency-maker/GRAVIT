import React, { useState } from 'react';
import { motion } from 'motion/react';
import { DesignSystemState, WebsiteType } from './types';
import { Sparkles, Monitor, Smartphone, Maximize, Save, User, Users, ChevronDown } from 'lucide-react';

interface StudioHeaderProps {
  state: DesignSystemState;
  onUpdate: (newState: Partial<DesignSystemState>) => void;
  role: 'builder' | 'client';
  setRole: (role: 'builder' | 'client') => void;
  isFullscreen: boolean;
  setIsFullscreen: (val: boolean) => void;
}

export function StudioHeader({ state, onUpdate, role, setRole, isFullscreen, setIsFullscreen }: StudioHeaderProps) {
  const [projectOpen, setProjectOpen] = useState(false);

  return (
    <header className="h-16 bg-[#0a0a0a] border-b border-neutral-800 flex items-center justify-between px-6 text-white shrink-0 z-50">
      
      {/* Left: Project Selector */}
      <div className="flex items-center gap-6">
        <div className="font-bold tracking-widest text-lg font-mono">
          VISUALCRAFT STUDIO
        </div>
        <div className="h-4 w-px bg-neutral-800" />
        
        <div className="relative">
          <button 
            onClick={() => setProjectOpen(!projectOpen)}
            className="flex items-center gap-2 hover:bg-neutral-900 px-3 py-1.5 rounded-md transition-colors"
          >
            <span className="text-sm text-neutral-400">Project:</span>
            <span className="text-sm font-medium">Acme Corp Redesign</span>
            <ChevronDown className="w-4 h-4 text-neutral-500" />
          </button>

          {projectOpen && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-neutral-900 border border-neutral-800 rounded-md shadow-xl py-2 z-50">
              <div className="px-3 py-1 text-xs font-bold text-neutral-500 uppercase tracking-wider">Recent Projects</div>
              <button className="w-full text-left px-4 py-2 hover:bg-neutral-800 text-sm">Acme Corp Redesign</button>
              <button className="w-full text-left px-4 py-2 hover:bg-neutral-800 text-sm text-neutral-400">Global Tech Dashboard</button>
              <button className="w-full text-left px-4 py-2 hover:bg-neutral-800 text-sm text-neutral-400">Education Portal</button>
            </div>
          )}
        </div>
      </div>

      {/* Center: AI Command Bar (Builder Mode) */}
      {role === 'builder' && (
        <div className="flex-1 max-w-xl px-8">
          <div className="relative group">
            <Sparkles className="w-4 h-4 text-accent absolute left-3 top-1/2 -translate-y-1/2 group-focus-within:text-white transition-colors" />
            <input 
              type="text" 
              placeholder="Ask VisualCraft AI to generate a section, change colors, or rewrite copy..." 
              className="w-full bg-neutral-900 border border-neutral-800 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-neutral-600 focus:bg-black transition-all"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-500 font-mono">⌘K</div>
          </div>
        </div>
      )}

      {/* Right: Actions & Role Toggle */}
      <div className="flex items-center gap-4">
        
        {/* Viewport & Fullscreen Toggles */}
        <div className="flex items-center bg-neutral-900 rounded-md border border-neutral-800 p-0.5">
          <button className="p-1.5 rounded bg-neutral-800 text-white"><Monitor className="w-4 h-4" /></button>
          <button className="p-1.5 rounded text-neutral-500 hover:text-white"><Smartphone className="w-4 h-4" /></button>
          <div className="w-px h-4 bg-neutral-800 mx-1" />
          <button 
            onClick={() => setIsFullscreen(!isFullscreen)} 
            className="p-1.5 rounded text-neutral-500 hover:text-white transition-colors"
            title="Toggle Full Screen Mode"
          >
            <Maximize className="w-4 h-4" />
          </button>
        </div>

        {/* Role Toggle */}
        <div className="flex items-center bg-neutral-900 rounded-md border border-neutral-800 p-0.5 font-mono text-xs font-bold uppercase">
          <button 
            onClick={() => setRole('builder')}
            className={`px-3 py-1.5 rounded transition-all ${role === 'builder' ? 'bg-accent text-black shadow-sm' : 'text-neutral-500 hover:text-white'}`}
          >
            Builder
          </button>
          <button 
            onClick={() => setRole('client')}
            className={`px-3 py-1.5 rounded transition-all flex items-center gap-1 ${role === 'client' ? 'bg-white text-black shadow-sm' : 'text-neutral-500 hover:text-white'}`}
          >
            <Users className="w-3 h-3" /> Client
          </button>
        </div>

        <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md text-sm font-bold hover:bg-neutral-200 transition-colors">
          <Save className="w-4 h-4" /> Save
        </button>
      </div>
    </header>
  );
}
