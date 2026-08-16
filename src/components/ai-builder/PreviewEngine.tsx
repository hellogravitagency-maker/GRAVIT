import React from 'react';
import { motion } from 'motion/react';
import { AIBuilderState } from './types';
import { Sparkles, ArrowRight, Menu } from 'lucide-react';

interface PreviewEngineProps {
  state: AIBuilderState;
  onReset?: () => void;
  onDeploy?: () => void;
  isEditorMode?: boolean;
}

export function PreviewEngine({ state, onReset, onDeploy, isEditorMode = false }: PreviewEngineProps) {
  // Derive styles based on selections
  
  // 1. Color Palette
  let bg = '#ffffff';
  let text = '#000000';
  let accent = '#000000';
  let secondaryBg = '#f5f5f5';
  
  if (state.palette === 'neon') {
    bg = '#050505';
    text = '#ffffff';
    accent = '#00ffcc';
    secondaryBg = '#1a1a1a';
  } else if (state.palette === 'earth') {
    bg = '#f4f0eb';
    text = '#2c241b';
    accent = '#5c4d3c';
    secondaryBg = '#e8e1d7';
  } else if (state.palette === 'pastel') {
    bg = '#fdfbf7';
    text = '#4a4a4a';
    accent = '#b5c6e8';
    secondaryBg = '#f4e8e1';
  } else if (state.palette === 'monochrome') {
    bg = '#ffffff';
    text = '#111111';
    accent = '#555555';
    secondaryBg = '#f0f0f0';
  }

  // 2. Typography
  let fontClass = 'font-sans';
  if (state.font === 'elegant') fontClass = 'font-serif';
  if (state.font === 'tech') fontClass = 'font-mono tracking-tight';

  // 3. Layout / Aesthetic
  let isBrutalist = state.style === 'brutalist';
  let isPlayful = state.style === 'playful';
  let isSwiss = state.style === 'swiss';
  let isMinimal = state.style === 'minimal';

  const containerClass = `w-full h-full relative overflow-hidden transition-colors duration-1000 ${fontClass}`;
  const borderClass = isBrutalist ? 'border-4 border-black' : isSwiss ? 'border border-current opacity-20' : '';
  const roundedClass = isPlayful ? 'rounded-3xl' : isBrutalist ? 'rounded-none' : 'rounded-sm';
  const shadowClass = isBrutalist ? 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' : isPlayful ? 'shadow-xl shadow-black/5' : 'shadow-2xl shadow-black/10';

  // Dynamic Content based on active page
  let headline = 'Shaping Digital Realities';
  let subheadline = 'We build experiences that defy expectations.';
  
  const currentPage = state.pages?.find(p => p.id === state.currentPageId);
  if (currentPage) {
    headline = currentPage.headline;
    subheadline = currentPage.subheadline;
  } else {
    if (state.type === 'ecommerce') {
      headline = 'Elevate Your Commerce';
      subheadline = 'Next-generation storefronts designed for conversion and aesthetic superiority.';
    } else if (state.type === 'saas') {
      headline = 'Software That Scales';
      subheadline = 'Powerful, intuitive platforms built on bleeding-edge infrastructure.';
    } else if (state.type === 'portfolio') {
      headline = 'Selected Works';
      subheadline = 'An archive of design systems, spatial computing, and digital art.';
    }
  }

  return (
    <div className="flex flex-col h-full w-full relative z-10">
      
      {/* Browser Mockup Wrapper */}
      <motion.div 
        initial={!isEditorMode ? { opacity: 0, scale: 0.95, y: 20 } : false}
        animate={!isEditorMode ? { opacity: 1, scale: 1, y: 0 } : false}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full flex-1 bg-[#f5f5f5] rounded-xl border border-border overflow-hidden flex flex-col shadow-2xl relative ${!isEditorMode ? 'max-h-[70vh]' : ''}`}
      >
        {/* Fake Browser Chrome */}
        <div className="h-10 border-b border-border bg-white flex items-center px-4 gap-2 flex-shrink-0">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
          <div className="mx-auto bg-gray-100 text-gray-400 text-xs font-mono px-4 py-1 rounded-sm w-1/3 text-center truncate">
            {state.type}.generated.ai
          </div>
        </div>

        {/* Generated Site Content */}
        <div 
          className={containerClass}
          style={{ backgroundColor: bg, color: text }}
        >
          {/* Header */}
          <header className={`flex justify-between items-center p-6 md:p-8 ${isSwiss ? 'border-b border-current opacity-80' : ''}`}>
            <div className={`text-xl font-bold ${isBrutalist ? 'uppercase border-2 border-current px-2' : ''}`}>
              Brand.
            </div>
            <nav className="hidden md:flex gap-8 text-sm font-medium opacity-70">
              <span>Work</span>
              <span>About</span>
              <span>Services</span>
              <span>Contact</span>
            </nav>
            <Menu className="w-6 h-6 md:hidden" />
          </header>

          {/* Hero Section */}
          <main className="flex flex-col items-center justify-center h-[calc(100%-80px)] px-6 text-center">
            
            {isMinimal && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                className="w-16 h-16 rounded-full bg-current opacity-10 mb-8"
              />
            )}

            <motion.h1 
              initial={!isEditorMode ? { y: 20, opacity: 0 } : false}
              animate={!isEditorMode ? { y: 0, opacity: 1 } : false}
              transition={{ delay: 0.6, duration: 0.8 }}
              className={`text-4xl md:text-7xl mb-6 ${isBrutalist ? 'uppercase font-black tracking-tighter' : isSwiss ? 'tracking-tight' : ''} ${state.font === 'elegant' ? 'italic' : 'font-bold'} ${isEditorMode ? 'hover:outline hover:outline-2 hover:outline-blue-500 cursor-text rounded-sm px-2' : ''}`}
              style={{ lineHeight: 0.9 }}
            >
              {headline}
            </motion.h1>

            <motion.p
              initial={!isEditorMode ? { y: 20, opacity: 0 } : false}
              animate={!isEditorMode ? { y: 0, opacity: 1 } : false}
              transition={{ delay: 0.8, duration: 0.8 }}
              className={`max-w-xl mx-auto text-lg md:text-xl opacity-70 mb-10 ${isBrutalist ? 'font-mono text-sm uppercase' : ''} ${isEditorMode ? 'hover:outline hover:outline-2 hover:outline-blue-500 cursor-text rounded-sm px-2' : ''}`}
            >
              {subheadline}
            </motion.p>

            <motion.button
              initial={!isEditorMode ? { y: 20, opacity: 0 } : false}
              animate={!isEditorMode ? { y: 0, opacity: 1 } : false}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 1, duration: 0.8 }}
              className={`flex items-center gap-2 px-8 py-4 font-semibold transition-all ${roundedClass} ${borderClass} ${shadowClass}`}
              style={{ 
                backgroundColor: isBrutalist ? accent : text, 
                color: isBrutalist ? '#000' : bg,
                ...(isPlayful ? { backgroundColor: accent, color: '#000' } : {})
              }}
            >
              Explore {state.type} <ArrowRight className="w-4 h-4" />
            </motion.button>
          </main>

          {/* Decorative Elements */}
          {isBrutalist && (
             <div className="absolute top-0 right-0 p-4 border-l-4 border-b-4 border-black bg-yellow-300 text-black font-mono text-xs font-bold rotate-12 origin-top-right z-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
               BETA V1
             </div>
          )}
          {isPlayful && (
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
              className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none"
              style={{ backgroundColor: accent }}
            />
          )}
        </div>
      </motion.div>

      {/* Action Bar (Hidden in Editor Mode) */}
      {!isEditorMode && (
        <div className="mt-8 flex justify-between items-center bg-background border border-border p-4 rounded-full shadow-lg">
          <div className="flex items-center gap-3 px-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-mono text-secondary">Generated in 4.2s</span>
          </div>
          <div className="flex gap-2">
            <button onClick={onReset} className="px-4 py-2 text-sm font-mono text-secondary hover:text-primary transition-colors">
              Reset
            </button>
            <button onClick={onDeploy} className="bg-primary text-background px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors">
              Open Editor
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
