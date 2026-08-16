import React, { useState } from 'react';
import { motion } from 'motion/react';
import { LayoutTemplate, Type, Image, Square, MousePointer2, Plus, GripVertical } from 'lucide-react';
import { DesignSystemState } from './types';

interface LeftSidebarProps {
  state: DesignSystemState;
  role: 'builder' | 'client';
}

export function LeftSidebar({ state, role }: LeftSidebarProps) {
  const [activeTab, setActiveTab] = useState<'add' | 'layers'>('add');

  if (role === 'client') {
    return (
      <div className="w-64 bg-[#0a0a0a] border-r border-neutral-800 flex flex-col shrink-0 text-white p-6">
        <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-6">Client Review</h3>
        <p className="text-sm text-neutral-400 leading-relaxed mb-6">
          Welcome to the GRAVIT AI Studio. Review the current design iteration, test interactivity, and drop pins on the canvas to leave feedback for the engineering team.
        </p>
        <button className="w-full bg-accent text-black font-bold py-3 rounded-md hover:opacity-90 transition-opacity">
          Add Comment Pin
        </button>
      </div>
    );
  }

  const COMPONENT_CATEGORIES = [
    {
      name: 'Sections',
      icon: <LayoutTemplate className="w-4 h-4" />,
      items: ['Hero Section', 'Feature Bento', 'Pricing Table', 'Testimonials', 'Footer']
    },
    {
      name: 'Typography',
      icon: <Type className="w-4 h-4" />,
      items: ['Heading 1', 'Heading 2', 'Paragraph', 'Blockquote']
    },
    {
      name: 'Media',
      icon: <Image className="w-4 h-4" />,
      items: ['Image Frame', 'Video Player', 'Icon Wrapper']
    },
    {
      name: 'Elements',
      icon: <Square className="w-4 h-4" />,
      items: ['Button', 'Card', 'Badge', 'Divider']
    }
  ];

  return (
    <div className="w-64 bg-[#0a0a0a] border-r border-neutral-800 flex flex-col shrink-0 text-white">
      
      {/* Tabs */}
      <div className="flex border-b border-neutral-800">
        <button 
          onClick={() => setActiveTab('add')}
          className={`flex-1 py-3 text-xs font-bold uppercase tracking-widest transition-colors ${activeTab === 'add' ? 'text-white border-b-2 border-accent' : 'text-neutral-500 hover:text-white'}`}
        >
          Add
        </button>
        <button 
          onClick={() => setActiveTab('layers')}
          className={`flex-1 py-3 text-xs font-bold uppercase tracking-widest transition-colors ${activeTab === 'layers' ? 'text-white border-b-2 border-accent' : 'text-neutral-500 hover:text-white'}`}
        >
          Layers
        </button>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-4">
        {activeTab === 'add' && (
          <div className="space-y-6">
            {COMPONENT_CATEGORIES.map(category => (
              <div key={category.name}>
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3">
                  {category.icon} {category.name}
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {category.items.map(item => (
                    <div 
                      key={item} 
                      className="bg-neutral-900 border border-neutral-800 hover:border-accent p-3 rounded-md cursor-grab active:cursor-grabbing flex flex-col items-center justify-center text-center gap-2 transition-colors group"
                    >
                      <Plus className="w-4 h-4 text-neutral-600 group-hover:text-accent transition-colors" />
                      <span className="text-[10px] text-neutral-400 group-hover:text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'layers' && (
          <div className="space-y-1">
            <div className="text-xs font-mono text-neutral-500 mb-4 px-2">Page Structure</div>
            {['Website Navbar', 'Hero Section', 'Features Bento Grid', 'Pricing Table', 'Website Footer'].map((layer, i) => (
              <div key={i} className="flex items-center justify-between p-2 hover:bg-neutral-900 rounded-md cursor-pointer group">
                <div className="flex items-center gap-2">
                  <GripVertical className="w-3 h-3 text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-sm text-neutral-300 group-hover:text-white">{layer}</span>
                </div>
                <MousePointer2 className="w-3 h-3 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
