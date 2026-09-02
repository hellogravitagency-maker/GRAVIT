import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Settings, Palette, Type, Layout, Wand2, Paintbrush } from 'lucide-react';
import { DesignSystemState, DesignArchetype, ColorTheme, TypographyPair, SpacingScale, WebsiteType } from './types';
import { THEMES, TYPOGRAPHY } from './designData';

interface RightSidebarProps {
 state: DesignSystemState;
 onUpdate: (newState: Partial<DesignSystemState>) => void;
 role: 'builder' | 'client';
}

const ARCHETYPES: DesignArchetype[] = ['swiss', 'brutalist', 'neo-tokyo', 'glassmorphism', 'retro-terminal', 'scandinavian', 'cyberpunk', 'neumorphism', 'corporate'];
const WEBSITETYPES: WebsiteType[] = ['startup', 'ecommerce', 'education', 'portfolio', 'agency', 'dashboard', 'blog'];
const SPACINGS: SpacingScale[] = ['condensed', 'balanced', 'spacious'];

export function RightSidebar({ state, onUpdate, role }: RightSidebarProps) {
 const [activeTab, setActiveTab] = useState<'design' | 'properties'>('design');
 const [expandedSection, setExpandedSection] = useState<string | null>('layout');

 if (role === 'client') {
 return (
 <div className="w-80 bg-background border-l border-white/10 flex flex-col shrink-0 text-primary p-6">
 <h3 className="text-xs font-medium uppercase tracking-widest text-secondary mb-6">Feedback Activity</h3>
 <div className="space-y-4">
 <div className="glass-panel p-4 rounded-xl border border-white/10">
 <div className="flex justify-between items-start mb-2">
 <span className="text-xs font-medium text-primary">Pin 1 - Hero Section</span>
 <span className="text-[10px] text-secondary">Just now</span>
 </div>
 <p className="text-sm text-secondary">Can we make the headline text slightly larger on mobile?</p>
 </div>
 </div>
 </div>
 );
 }

 return (
 <div className="w-80 bg-background border-l border-white/10 flex flex-col shrink-0 text-primary">
 
 {/* Tabs */}
 <div className="flex border-b border-white/10">
 <button 
 onClick={() => setActiveTab('design')}
 className={`flex-1 py-4 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-widest transition-colors ${activeTab === 'design' ? 'text-primary border-b-2 border-primary' : 'text-secondary hover:text-primary'}`}
 >
 <Paintbrush className="w-4 h-4" /> Global
 </button>
 <button 
 onClick={() => setActiveTab('properties')}
 className={`flex-1 py-4 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-widest transition-colors ${activeTab === 'properties' ? 'text-primary border-b-2 border-primary' : 'text-secondary hover:text-primary'}`}
 >
 <Settings className="w-4 h-4" /> Props
 </button>
 </div>

 <div className="flex-1 overflow-y-auto custom-scrollbar p-5 space-y-6">
 
 {activeTab === 'design' && (
 <div className="space-y-4">
 {/* Layout Engine */}
 <div className="glass-panel rounded-xl overflow-hidden border border-white/10">
 <button 
 onClick={() => setExpandedSection(expandedSection === 'layout' ? null : 'layout')}
 className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
 >
 <div className="flex items-center gap-3">
 <Layout className="w-4 h-4 text-secondary" />
 <span className="text-xs font-medium uppercase tracking-widest text-primary">Layout Engine</span>
 </div>
 <span className="text-xs text-secondary capitalize">{state.websiteType}</span>
 </button>
 
 <AnimatePresence>
 {expandedSection === 'layout' && (
 <motion.div 
 initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
 className="overflow-hidden"
 >
 <div className="p-4 pt-0 grid grid-cols-2 gap-2">
 {WEBSITETYPES.map(type => (
 <button
 key={type}
 onClick={() => onUpdate({ websiteType: type })}
 className={`p-2 rounded-lg text-xs font-medium capitalize text-center transition-all ${state.websiteType === type ? 'bg-primary text-background shadow-sm' : 'bg-background border border-white/10 text-secondary hover:text-primary hover:border-white/20'}`}
 >
 {type}
 </button>
 ))}
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>

 {/* Archetype */}
 <div className="glass-panel rounded-xl overflow-hidden border border-white/10">
 <button 
 onClick={() => setExpandedSection(expandedSection === 'archetype' ? null : 'archetype')}
 className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
 >
 <div className="flex items-center gap-3">
 <Wand2 className="w-4 h-4 text-secondary" />
 <span className="text-xs font-medium uppercase tracking-widest text-primary">Archetype</span>
 </div>
 <span className="text-xs text-secondary capitalize">{state.archetype.replace('-', ' ')}</span>
 </button>
 
 <AnimatePresence>
 {expandedSection === 'archetype' && (
 <motion.div 
 initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
 className="overflow-hidden"
 >
 <div className="p-4 pt-0 grid grid-cols-2 gap-2">
 {ARCHETYPES.map(arch => (
 <button
 key={arch}
 onClick={() => onUpdate({ archetype: arch })}
 className={`p-2 rounded-lg text-xs font-medium capitalize text-center transition-all ${state.archetype === arch ? 'bg-primary text-background shadow-sm' : 'bg-background border border-white/10 text-secondary hover:text-primary hover:border-white/20'}`}
 >
 {arch.replace('-', ' ')}
 </button>
 ))}
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>

 {/* Color Theme */}
 <div className="glass-panel rounded-xl overflow-hidden border border-white/10">
 <button 
 onClick={() => setExpandedSection(expandedSection === 'color' ? null : 'color')}
 className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
 >
 <div className="flex items-center gap-3">
 <Palette className="w-4 h-4 text-secondary" />
 <span className="text-xs font-medium uppercase tracking-widest text-primary">Color Theme</span>
 </div>
 <div className="flex w-4 h-4 rounded-full overflow-hidden shrink-0 border border-white/20">
 <div className="flex-1 h-full" style={{ background: state.colorTheme.primary }} />
 <div className="flex-1 h-full" style={{ background: state.colorTheme.accent }} />
 </div>
 </button>
 
 <AnimatePresence>
 {expandedSection === 'color' && (
 <motion.div 
 initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
 className="overflow-hidden"
 >
 <div className="p-4 pt-0 space-y-2">
 {THEMES.map(theme => (
 <button
 key={theme.id}
 onClick={() => onUpdate({ colorTheme: theme })}
 className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${state.colorTheme.id === theme.id ? 'bg-white/10 border border-white/20' : 'bg-background hover:bg-white/5 border border-transparent'}`}
 >
 <div className="flex w-6 h-6 rounded-full overflow-hidden shrink-0 border border-white/20">
 <div className="flex-1 h-full" style={{ background: theme.primary }} />
 <div className="flex-1 h-full" style={{ background: theme.accent }} />
 </div>
 <span className="text-sm font-medium">{theme.name}</span>
 </button>
 ))}
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>

 {/* Typography */}
 <div className="glass-panel rounded-xl overflow-hidden border border-white/10">
 <button 
 onClick={() => setExpandedSection(expandedSection === 'typography' ? null : 'typography')}
 className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
 >
 <div className="flex items-center gap-3">
 <Type className="w-4 h-4 text-secondary" />
 <span className="text-xs font-medium uppercase tracking-widest text-primary">Typography</span>
 </div>
 <span className="text-xs text-secondary">{state.typography.name}</span>
 </button>
 
 <AnimatePresence>
 {expandedSection === 'typography' && (
 <motion.div 
 initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
 className="overflow-hidden"
 >
 <div className="p-4 pt-0 space-y-2">
 {TYPOGRAPHY.map(font => (
 <button
 key={font.id}
 onClick={() => onUpdate({ typography: font })}
 className={`w-full text-left p-3 rounded-lg transition-colors ${state.typography.id === font.id ? 'bg-white/10 border border-white/20' : 'bg-background border border-white/10 hover:border-white/20'}`}
 >
 <div className={`text-lg mb-1 truncate ${font.displayClass}`}>Aa</div>
 <div className="text-xs text-secondary">{font.name}</div>
 </button>
 ))}
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>

 {/* Spacing */}
 <div className="glass-panel rounded-xl p-4 border border-white/10">
 <div className="flex justify-between items-center mb-3">
 <span className="text-xs font-medium uppercase tracking-widest text-primary">Spacing Scale</span>
 </div>
 <div className="flex bg-background p-1 rounded-lg border border-white/10">
 {SPACINGS.map(space => (
 <button
 key={space}
 onClick={() => onUpdate({ spacing: space })}
 className={`flex-1 py-2 text-xs font-medium rounded-md transition-colors capitalize ${state.spacing === space ? 'bg-white/20 text-primary shadow' : 'text-secondary hover:text-primary'}`}
 >
 {space}
 </button>
 ))}
 </div>
 </div>

 </div>
 )}

 {activeTab === 'properties' && (
 <div className="flex flex-col items-center justify-center h-full text-center px-4">
 <Settings className="w-12 h-12 text-white/10 mb-4" />
 <p className="text-sm text-secondary">Select an element on the canvas to edit its properties.</p>
 </div>
 )}

 </div>
 </div>
 );
}
