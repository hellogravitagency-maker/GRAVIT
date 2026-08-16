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
      <div className="w-80 bg-[#0a0a0a] border-l border-neutral-800 flex flex-col shrink-0 text-white p-6">
        <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-6">Feedback Activity</h3>
        <div className="space-y-4">
           <div className="bg-neutral-900 p-4 rounded-md border border-neutral-800">
             <div className="flex justify-between items-start mb-2">
               <span className="text-xs font-bold text-accent">Pin 1 - Hero Section</span>
               <span className="text-[10px] text-neutral-500">Just now</span>
             </div>
             <p className="text-sm text-neutral-300">Can we make the headline text slightly larger on mobile?</p>
           </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-80 bg-[#0a0a0a] border-l border-neutral-800 flex flex-col shrink-0 text-white">
      
      {/* Tabs */}
      <div className="flex border-b border-neutral-800">
        <button 
          onClick={() => setActiveTab('design')}
          className={`flex-1 py-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors ${activeTab === 'design' ? 'text-white border-b-2 border-accent' : 'text-neutral-500 hover:text-white'}`}
        >
          <Paintbrush className="w-4 h-4" /> Global
        </button>
        <button 
          onClick={() => setActiveTab('properties')}
          className={`flex-1 py-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors ${activeTab === 'properties' ? 'text-white border-b-2 border-accent' : 'text-neutral-500 hover:text-white'}`}
        >
          <Settings className="w-4 h-4" /> Props
        </button>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-5 space-y-8">
        
        {activeTab === 'design' && (
          <div className="space-y-1">
            {/* Layout Engine */}
            <div className="border border-neutral-800 rounded-lg overflow-hidden bg-neutral-900/30">
              <button 
                onClick={() => setExpandedSection(expandedSection === 'layout' ? null : 'layout')}
                className="w-full flex items-center justify-between p-4 hover:bg-neutral-900/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Layout className="w-4 h-4 text-neutral-400" />
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-300">Layout Engine</span>
                </div>
                <span className="text-xs text-neutral-500 capitalize">{state.websiteType}</span>
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
                          className={`p-2 rounded-md text-xs font-medium capitalize text-center transition-all ${state.websiteType === type ? 'bg-accent text-black shadow-sm' : 'bg-[#0a0a0a] border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600'}`}
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
            <div className="border border-neutral-800 rounded-lg overflow-hidden bg-neutral-900/30">
              <button 
                onClick={() => setExpandedSection(expandedSection === 'archetype' ? null : 'archetype')}
                className="w-full flex items-center justify-between p-4 hover:bg-neutral-900/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Wand2 className="w-4 h-4 text-neutral-400" />
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-300">Archetype</span>
                </div>
                <span className="text-xs text-neutral-500 capitalize">{state.archetype.replace('-', ' ')}</span>
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
                          className={`p-2 rounded-md text-xs font-medium capitalize text-center transition-all ${state.archetype === arch ? 'bg-white text-black shadow-sm' : 'bg-[#0a0a0a] border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600'}`}
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
            <div className="border border-neutral-800 rounded-lg overflow-hidden bg-neutral-900/30">
              <button 
                onClick={() => setExpandedSection(expandedSection === 'color' ? null : 'color')}
                className="w-full flex items-center justify-between p-4 hover:bg-neutral-900/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Palette className="w-4 h-4 text-neutral-400" />
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-300">Color Theme</span>
                </div>
                <div className="flex w-4 h-4 rounded-full overflow-hidden shrink-0 border border-neutral-700">
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
                          className={`w-full flex items-center gap-3 p-2 rounded-md transition-colors ${state.colorTheme.id === theme.id ? 'bg-neutral-800 border border-neutral-600' : 'bg-[#0a0a0a] hover:bg-neutral-900 border border-transparent'}`}
                        >
                          <div className="flex w-6 h-6 rounded-full overflow-hidden shrink-0 border border-neutral-700">
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
            <div className="border border-neutral-800 rounded-lg overflow-hidden bg-neutral-900/30">
              <button 
                onClick={() => setExpandedSection(expandedSection === 'typography' ? null : 'typography')}
                className="w-full flex items-center justify-between p-4 hover:bg-neutral-900/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Type className="w-4 h-4 text-neutral-400" />
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-300">Typography</span>
                </div>
                <span className="text-xs text-neutral-500">{state.typography.name}</span>
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
                          className={`w-full text-left p-3 rounded-md transition-colors ${state.typography.id === font.id ? 'bg-neutral-800 border border-neutral-600' : 'bg-[#0a0a0a] border border-neutral-800 hover:border-neutral-600'}`}
                        >
                          <div className={`text-lg mb-1 truncate ${font.displayClass}`}>Aa</div>
                          <div className="text-xs text-neutral-400">{font.name}</div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Spacing */}
            <div className="border border-neutral-800 rounded-lg p-4 bg-neutral-900/30">
              <div className="flex justify-between items-center mb-3">
                 <span className="text-xs font-bold uppercase tracking-widest text-neutral-300">Spacing Scale</span>
              </div>
              <div className="flex bg-[#0a0a0a] p-1 rounded-md border border-neutral-800">
                {SPACINGS.map(space => (
                  <button
                    key={space}
                    onClick={() => onUpdate({ spacing: space })}
                    className={`flex-1 py-1.5 text-xs font-medium rounded transition-colors capitalize ${state.spacing === space ? 'bg-neutral-700 text-white shadow' : 'text-neutral-500 hover:text-white'}`}
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
             <Settings className="w-12 h-12 text-neutral-800 mb-4" />
             <p className="text-sm text-neutral-400">Select an element on the canvas to edit its properties.</p>
          </div>
        )}

      </div>
    </div>
  );
}
