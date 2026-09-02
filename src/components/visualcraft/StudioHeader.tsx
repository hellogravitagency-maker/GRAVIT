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
 <header className="h-16 bg-background border-b border-white/10 flex items-center justify-between px-6 text-primary shrink-0 z-50">
 
 {/* Left: Project Selector */}
 <div className="flex items-center gap-6">
 <div className="font-heading font-medium tracking-tight text-lg">
 VisualCraft Studio
 </div>
 <div className="h-4 w-px bg-white/10" />
 
 <div className="relative">
 <button 
 onClick={() => setProjectOpen(!projectOpen)}
 className="flex items-center gap-2 hover:bg-white/5 px-3 py-1.5 rounded-md transition-colors"
 >
 <span className="text-sm text-secondary">Project:</span>
 <span className="text-sm font-medium">Acme Corp Redesign</span>
 <ChevronDown className="w-4 h-4 text-secondary" />
 </button>

 {projectOpen && (
 <div className="absolute top-full left-0 mt-2 w-64 glass-panel rounded-xl shadow-xl py-2 z-50">
 <div className="px-4 py-2 text-xs font-medium text-secondary uppercase tracking-widest">Recent Projects</div>
 <button className="w-full text-left px-4 py-2 hover:bg-white/5 text-sm text-primary transition-colors">Acme Corp Redesign</button>
 <button className="w-full text-left px-4 py-2 hover:bg-white/5 text-sm text-secondary transition-colors">Global Tech Dashboard</button>
 <button className="w-full text-left px-4 py-2 hover:bg-white/5 text-sm text-secondary transition-colors">Education Portal</button>
 </div>
 )}
 </div>
 </div>

 {/* Center: AI Command Bar (Builder Mode) */}
 {role === 'builder' && (
 <div className="flex-1 max-w-xl px-8">
 <div className="relative group">
 <Sparkles className="w-4 h-4 text-secondary absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-primary transition-colors" />
 <input 
 type="text" 
 placeholder="Ask VisualCraft AI to generate a section, change colors, or rewrite copy..." 
 className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-12 pr-12 text-sm text-primary placeholder-secondary focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all"
 />
 <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-secondary font-mono bg-white/10 px-2 py-0.5 rounded border border-white/10">⌘K</div>
 </div>
 </div>
 )}

 {/* Right: Actions & Role Toggle */}
 <div className="flex items-center gap-4">
 
 {/* Viewport & Fullscreen Toggles */}
 <div className="flex items-center glass-panel rounded-full p-1">
 <button className="p-1.5 rounded-full bg-white/10 text-primary"><Monitor className="w-4 h-4" /></button>
 <button className="p-1.5 rounded-full text-secondary hover:text-primary hover:bg-white/5 transition-colors"><Smartphone className="w-4 h-4" /></button>
 <div className="w-px h-4 bg-white/10 mx-1" />
 <button 
 onClick={() => setIsFullscreen(!isFullscreen)} 
 className="p-1.5 rounded-full text-secondary hover:text-primary hover:bg-white/5 transition-colors"
 title="Toggle Full Screen Mode"
 >
 <Maximize className="w-4 h-4" />
 </button>
 </div>

 {/* Role Toggle */}
 <div className="flex items-center glass-panel rounded-full p-1 text-xs font-medium uppercase tracking-wider">
 <button 
 onClick={() => setRole('builder')}
 className={`px-4 py-1.5 rounded-full transition-all ${role === 'builder' ? 'bg-primary text-background' : 'text-secondary hover:text-primary hover:bg-white/5'}`}
 >
 Builder
 </button>
 <button 
 onClick={() => setRole('client')}
 className={`px-4 py-1.5 rounded-full transition-all flex items-center gap-2 ${role === 'client' ? 'bg-primary text-background' : 'text-secondary hover:text-primary hover:bg-white/5'}`}
 >
 <Users className="w-3 h-3" /> Client
 </button>
 </div>

 <button className="flex items-center gap-2 bg-primary text-background px-5 py-2 rounded-full text-sm font-medium hover:bg-white/90 transition-colors">
 <Save className="w-4 h-4" /> Save
 </button>
 </div>
 </header>
 );
}
