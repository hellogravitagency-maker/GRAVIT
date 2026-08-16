import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutDashboard, CheckSquare, Target, Map, Layout, Code2, ClipboardCheck, Rocket, MessageSquare, Plus, ArrowLeft } from 'lucide-react';
import { AIBuilderState } from '../types';

import { DashboardView } from './views/DashboardView';
import { OverviewView } from './views/OverviewView';
import { StrategyView } from './views/StrategyView';
import { DesignView } from './views/DesignView';
import { PreviewView } from './views/PreviewView';
import { DevelopmentView } from './views/DevelopmentView';
import { AuditView } from './views/AuditView';
import { LaunchView } from './views/LaunchView';
import { SitemapView } from './views/SitemapView';

export type StudioTab = 'dashboard' | 'overview' | 'strategy' | 'sitemap' | 'design' | 'preview' | 'development' | 'audit' | 'launch';
export type UserRole = 'internal' | 'client';

interface StudioShellProps {
  state: AIBuilderState;
  setState: (s: AIBuilderState) => void;
  onExit: () => void;
}

export function StudioShell({ state, setState, onExit }: StudioShellProps) {
  const [activeTab, setActiveTab] = useState<StudioTab>('dashboard');
  const [role, setRole] = useState<UserRole>('internal');
  const [aiInput, setAiInput] = useState('');

  const navigation = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, internalOnly: false },
    { id: 'overview', label: 'Overview', icon: CheckSquare, internalOnly: false },
    { id: 'strategy', label: 'Strategy', icon: Target, internalOnly: false },
    { id: 'sitemap', label: 'Sitemap', icon: Map, internalOnly: false },
    { id: 'design', label: 'Design System', icon: Palette, internalOnly: false },
    { id: 'preview', label: 'Live Preview', icon: Layout, internalOnly: false },
    { id: 'development', label: 'Development', icon: Code2, internalOnly: true },
    { id: 'audit', label: 'AI Audit', icon: ClipboardCheck, internalOnly: true },
    { id: 'launch', label: 'Launch', icon: Rocket, internalOnly: false },
  ];

  // Client mode filters out internal tabs
  const visibleNav = navigation.filter(n => role === 'internal' || !n.internalOnly);

  const renderActiveView = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardView />;
      case 'overview': return <OverviewView />;
      case 'strategy': return <StrategyView />;
      case 'sitemap': return <SitemapView />;
      case 'design': return <DesignView />;
      case 'preview': return <PreviewView state={state} />;
      case 'development': return <DevelopmentView />;
      case 'audit': return <AuditView />;
      case 'launch': return <LaunchView />;
      default: return <div className="p-8">Work in progress</div>;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0a] text-[#f5f5f2] flex flex-col overflow-hidden" style={{ fontFamily: '"Inter", sans-serif' }}>
      
      {/* Top Application Bar */}
      <header className="h-14 border-b border-[#222222] flex items-center justify-between px-6 bg-[#0a0a0a] flex-shrink-0">
        <div className="flex items-center gap-6">
          <button onClick={onExit} className="text-[#999999] hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="font-bold tracking-tight text-lg" style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.05em' }}>
            GRAVIT AI STUDIO
          </div>
          <div className="h-4 w-px bg-[#333333]" />
          <div className="text-sm font-medium text-[#999999]">
            Project: <span className="text-white ml-2">Little Scholars Academy</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="bg-[#111111] p-1 rounded-sm border border-[#222222] flex text-xs font-mono font-medium">
            <button 
              onClick={() => setRole('internal')}
              className={`px-3 py-1 rounded-sm transition-colors ${role === 'internal' ? 'bg-[#222] text-white' : 'text-[#666] hover:text-[#999]'}`}
            >
              Agency
            </button>
            <button 
              onClick={() => setRole('client')}
              className={`px-3 py-1 rounded-sm transition-colors ${role === 'client' ? 'bg-[#222] text-white' : 'text-[#666] hover:text-[#999]'}`}
            >
              Client
            </button>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#222222] border border-[#333333] flex items-center justify-center text-xs font-bold text-[#5B4BFF]">
            {role === 'internal' ? 'GR' : 'CL'}
          </div>
        </div>
      </header>

      {/* Main 3-Column Layout */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Sidebar (Navigation) */}
        <aside className="w-64 border-r border-[#222222] bg-[#0A0A0A] flex flex-col flex-shrink-0">
          <div className="flex-1 overflow-y-auto py-6">
            <nav className="space-y-1 px-3">
              {visibleNav.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as StudioTab)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-sm text-sm transition-all ${
                    activeTab === item.id 
                      ? 'bg-[#111111] text-white border-l-2 border-[#5B4BFF] font-medium' 
                      : 'text-[#999999] hover:bg-[#111111] hover:text-white border-l-2 border-transparent'
                  }`}
                >
                  <item.icon className={`w-4 h-4 ${activeTab === item.id ? 'text-[#5B4BFF]' : 'opacity-70'}`} />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
          
          <div className="p-6 border-t border-[#222222]">
             <div className="flex items-center justify-between text-xs text-[#666666] font-mono">
                <span>System Status</span>
                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/> Online</span>
             </div>
          </div>
        </aside>

        {/* Central Workspace */}
        <main className="flex-1 bg-[#111111] relative overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              {renderActiveView()}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Right Sidebar (AI / Context) */}
        {role === 'internal' && (
          <aside className="w-80 border-l border-[#222222] bg-[#0A0A0A] flex flex-col flex-shrink-0">
            <div className="p-5 border-b border-[#222222]">
              <h2 className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#5B4BFF]" /> AI Assistant
              </h2>
            </div>
            
            <div className="flex-1 p-5 overflow-y-auto text-sm text-[#999999] space-y-6">
              <div className="space-y-2">
                <div className="font-mono text-xs text-white uppercase tracking-wider mb-2 border-b border-[#222] pb-2">Recent Activity</div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5B4BFF] mt-1.5" />
                  <p>AI generated homepage structure.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#333333] mt-1.5" />
                  <p>Designer approved hero section.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#333333] mt-1.5" />
                  <p>Client requested copy changes.</p>
                </div>
              </div>

              <div className="p-4 bg-[#111] border border-[#222] rounded-sm">
                 <div className="text-xs font-mono text-white mb-2">AI BUILD AGENT</div>
                 <div className="space-y-2 text-xs">
                    <div className="flex justify-between"><span>Analyzing project</span><span className="text-green-500">✓</span></div>
                    <div className="flex justify-between"><span>Reviewing components</span><span className="text-green-500">✓</span></div>
                    <div className="flex justify-between"><span>Generating recommendations</span><span className="text-[#5B4BFF] animate-pulse">●</span></div>
                    <div className="flex justify-between text-[#666]"><span>Preparing changes</span><span>○</span></div>
                 </div>
              </div>
            </div>

            <div className="p-5 border-t border-[#222222]">
              <div className="text-xs font-bold text-white mb-2 font-mono">What should we work on?</div>
              <div className="flex flex-wrap gap-2 mb-4">
                <button className="text-[10px] bg-[#111] border border-[#222] hover:border-[#5B4BFF] px-2 py-1 rounded-sm text-[#ccc] transition-colors">Improve hero</button>
                <button className="text-[10px] bg-[#111] border border-[#222] hover:border-[#5B4BFF] px-2 py-1 rounded-sm text-[#ccc] transition-colors">SEO metadata</button>
              </div>
              <input 
                type="text" 
                placeholder="Ask GRAVIT AI..." 
                className="w-full bg-[#111] border border-[#333] px-3 py-2 text-sm rounded-sm focus:outline-none focus:border-[#5B4BFF] transition-colors text-white"
              />
            </div>
          </aside>
        )}

      </div>
    </div>
  );
}

// Ensure Sparkles is imported if not above
import { Sparkles, Palette } from 'lucide-react';
