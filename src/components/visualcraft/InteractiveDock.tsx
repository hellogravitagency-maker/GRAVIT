import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Palette, Type, Layout, AppWindow, Shirt, X, Globe } from 'lucide-react';
import { DesignSystemState, DesignArchetype, ColorTheme, TypographyPair, SpacingScale, PixelWardrobe, WebsiteType } from './types';
import { THEMES, TYPOGRAPHY } from './designData';

interface InteractiveDockProps {
  state: DesignSystemState;
  onUpdate: (newState: Partial<DesignSystemState>) => void;
  onExitFullscreen?: () => void;
}

type MenuType = 'archetype' | 'layout' | 'colors' | 'typography' | 'spacing' | 'wardrobe' | null;

const ARCHETYPES: DesignArchetype[] = ['swiss', 'brutalist', 'neo-tokyo', 'glassmorphism', 'retro-terminal', 'scandinavian', 'cyberpunk', 'neumorphism', 'corporate'];
const WEBSITETYPES: WebsiteType[] = ['startup', 'ecommerce', 'education', 'portfolio', 'agency', 'dashboard', 'blog'];
const SPACINGS: SpacingScale[] = ['condensed', 'balanced', 'spacious'];
const WARDROBE_ACCESSORIES: PixelWardrobe['accessory'][] = ['none', 'glasses', 'beret', 'crown', 'bowtie', 'mustache'];
const WARDROBE_GRADIENTS = [
  'linear-gradient(135deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)',
  'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
  'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
  'linear-gradient(to right, #434343 0%, black 100%)',
  'linear-gradient(to right, #f83600 0%, #f9d423 100%)',
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
];

export function InteractiveDock({ state, onUpdate, onExitFullscreen }: InteractiveDockProps) {
  const [activeMenu, setActiveMenu] = useState<MenuType>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const toggleMenu = (menu: MenuType) => {
    setActiveMenu(prev => prev === menu ? null : menu);
  };

  const popoverVariants = {
    hidden: { opacity: 0, x: 20, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: 20, scale: 0.95 }
  };

  if (!mounted) return null;

  return createPortal(
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] flex items-center">
      {/* Popovers */}
      <AnimatePresence mode="wait">
        {activeMenu && (
          <motion.div
            key={activeMenu}
            variants={popoverVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute right-20 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl p-6 w-72 text-white overflow-hidden"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg capitalize">{activeMenu}</h3>
              <button onClick={() => setActiveMenu(null)} className="text-neutral-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex flex-col gap-3 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar" data-lenis-prevent="true">
              {activeMenu === 'archetype' && ARCHETYPES.map(arch => (
                <button
                  key={arch}
                  onClick={() => onUpdate({ archetype: arch })}
                  className={`p-3 rounded-xl text-left transition-all ${state.archetype === arch ? 'bg-white text-black font-medium' : 'bg-neutral-800 hover:bg-neutral-700'}`}
                >
                  {arch.replace('-', ' ')}
                </button>
              ))}

              {activeMenu === 'layout' && WEBSITETYPES.map(type => (
                <button
                  key={type}
                  onClick={() => onUpdate({ websiteType: type })}
                  className={`p-3 rounded-xl text-left transition-all ${state.websiteType === type ? 'bg-white text-black font-medium' : 'bg-neutral-800 hover:bg-neutral-700'}`}
                >
                  <span className="capitalize">{type}</span>
                </button>
              ))}

              {activeMenu === 'colors' && THEMES.map(theme => (
                <button
                  key={theme.id}
                  onClick={() => onUpdate({ colorTheme: theme })}
                  className={`flex items-center gap-3 p-3 rounded-xl text-left transition-all ${state.colorTheme.id === theme.id ? 'bg-white text-black font-medium' : 'bg-neutral-800 hover:bg-neutral-700'}`}
                >
                  <div className="w-6 h-6 rounded-full border border-neutral-600 flex overflow-hidden">
                    <div className="w-1/2 h-full" style={{ backgroundColor: theme.primary }} />
                    <div className="w-1/2 h-full" style={{ backgroundColor: theme.accent }} />
                  </div>
                  {theme.name}
                </button>
              ))}

              {activeMenu === 'typography' && TYPOGRAPHY.map(typo => (
                <button
                  key={typo.id}
                  onClick={() => onUpdate({ typography: typo })}
                  className={`p-3 rounded-xl text-left transition-all ${state.typography.id === typo.id ? 'bg-white text-black font-medium' : 'bg-neutral-800 hover:bg-neutral-700'}`}
                >
                  <span className={typo.displayClass}>{typo.name}</span>
                </button>
              ))}

              {activeMenu === 'spacing' && SPACINGS.map(space => (
                <button
                  key={space}
                  onClick={() => onUpdate({ spacing: space })}
                  className={`p-3 rounded-xl text-left transition-all ${state.spacing === space ? 'bg-white text-black font-medium' : 'bg-neutral-800 hover:bg-neutral-700'}`}
                >
                  <span className="capitalize">{space}</span>
                </button>
              ))}

              {activeMenu === 'wardrobe' && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs text-neutral-400 uppercase tracking-widest font-bold mb-3 block">Pixel Gradient</span>
                    <div className="flex flex-wrap gap-2">
                      {WARDROBE_GRADIENTS.map((grad, i) => (
                        <button
                          key={i}
                          onClick={() => onUpdate({ pixelWardrobe: { ...state.pixelWardrobe, bodyGradient: grad } })}
                          className={`w-10 h-10 rounded-full transition-transform ${state.pixelWardrobe.bodyGradient === grad ? 'scale-110 ring-2 ring-white ring-offset-2 ring-offset-neutral-900' : 'hover:scale-105'}`}
                          style={{ background: grad }}
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 uppercase tracking-widest font-bold mb-3 block">Accessory</span>
                    <div className="grid grid-cols-2 gap-2">
                      {WARDROBE_ACCESSORIES.map(acc => (
                        <button
                          key={acc}
                          onClick={() => onUpdate({ pixelWardrobe: { ...state.pixelWardrobe, accessory: acc } })}
                          className={`p-2 rounded-lg text-sm text-center transition-all ${state.pixelWardrobe.accessory === acc ? 'bg-white text-black font-medium' : 'bg-neutral-800 hover:bg-neutral-700'}`}
                        >
                          <span className="capitalize">{acc}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The Dock */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="bg-black/80 backdrop-blur-xl border border-white/10 p-2 rounded-full shadow-2xl flex flex-col gap-2"
      >
        <DockButton icon={<Globe className="w-5 h-5" />} tooltip="Type" active={activeMenu === 'layout'} onClick={() => toggleMenu('layout')} />
        <DockButton icon={<AppWindow className="w-5 h-5" />} tooltip="Archetype" active={activeMenu === 'archetype'} onClick={() => toggleMenu('archetype')} />
        <DockButton icon={<Palette className="w-5 h-5" />} tooltip="Colors" active={activeMenu === 'colors'} onClick={() => toggleMenu('colors')} />
        <DockButton icon={<Type className="w-5 h-5" />} tooltip="Typography" active={activeMenu === 'typography'} onClick={() => toggleMenu('typography')} />
        <DockButton icon={<Layout className="w-5 h-5" />} tooltip="Spacing" active={activeMenu === 'spacing'} onClick={() => toggleMenu('spacing')} />
        <div className="w-full h-px bg-white/10 my-1" />
        <DockButton icon={<Shirt className="w-5 h-5" />} tooltip="Wardrobe" active={activeMenu === 'wardrobe'} onClick={() => toggleMenu('wardrobe')} />
        {onExitFullscreen && (
          <>
            <div className="w-full h-px bg-white/10 my-1" />
            <DockButton icon={<X className="w-5 h-5" />} tooltip="Exit Full Screen" active={false} onClick={onExitFullscreen} />
          </>
        )}
      </motion.div>
    </div>,
    document.body
  );
}

function DockButton({ icon, tooltip, active, onClick }: { icon: React.ReactNode, tooltip: string, active: boolean, onClick: () => void }) {
  return (
    <div className="relative group">
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`w-12 h-12 flex items-center justify-center rounded-full transition-colors ${active ? 'bg-white text-black' : 'text-neutral-400 hover:bg-white/10 hover:text-white'}`}
      >
        {icon}
      </motion.button>
      
      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-neutral-800 text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        {tooltip}
      </div>
    </div>
  );
}
