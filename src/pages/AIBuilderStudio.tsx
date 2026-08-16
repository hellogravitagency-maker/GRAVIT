import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { DesignSystemState } from '../components/visualcraft/types';
import { THEMES, TYPOGRAPHY } from '../components/visualcraft/designData';
import { LiveSandbox } from '../components/visualcraft/LiveSandbox';
import { StudioHeader } from '../components/visualcraft/StudioHeader';
import { RightSidebar } from '../components/visualcraft/RightSidebar';
import { CanvasEditor } from '../components/visualcraft/CanvasEditor';
import { InteractiveDock } from '../components/visualcraft/InteractiveDock';

const DEFAULT_STATE: DesignSystemState = {
  archetype: 'swiss',
  websiteType: 'startup',
  colorTheme: THEMES[0],
  typography: TYPOGRAPHY[0],
  spacing: 'balanced',
  pixelWardrobe: {
    bodyGradient: 'linear-gradient(135deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)',
    accessory: 'none'
  }
};

export default function AIBuilder() {
  const [state, setState] = useState<DesignSystemState>(() => {
    const saved = localStorage.getItem('visualCraftState');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse saved state", e);
      }
    }
    return DEFAULT_STATE;
  });

  const [role, setRole] = useState<'builder' | 'client'>('builder');
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    localStorage.setItem('visualCraftState', JSON.stringify(state));
  }, [state]);

  const handleUpdateState = (newState: Partial<DesignSystemState>) => {
    setState(prev => ({ ...prev, ...newState }));
  };

  return (
    <div className="w-full h-screen bg-black font-sans flex flex-col overflow-hidden text-white" data-lenis-prevent="true">
      <SEO title="VisualCraft Studio — GRAVIT" description="GRAVIT AI Design System Sandbox" path="/ai-builder" />

      {/* Top Navigation Bar - Hidden in Fullscreen */}
      {!isFullscreen && (
        <StudioHeader 
          state={state} 
          onUpdate={handleUpdateState} 
          role={role}
          setRole={setRole}
          isFullscreen={isFullscreen}
          setIsFullscreen={setIsFullscreen}
        />
      )}

      <div className="flex flex-1 overflow-hidden relative">
        {/* Center: Infinite Canvas */}
        <CanvasEditor role={role}>
          <LiveSandbox state={state} />
        </CanvasEditor>

        {/* Right Panel: Properties / Design System - Hidden in Fullscreen */}
        {!isFullscreen && (
          <RightSidebar 
            state={state} 
            onUpdate={handleUpdateState} 
            role={role}
          />
        )}
      </div>

      {/* Floating Dock - Only in Fullscreen */}
      {isFullscreen && (
        <InteractiveDock 
          state={state} 
          onUpdate={handleUpdateState} 
          onExitFullscreen={() => setIsFullscreen(false)} 
        />
      )}
    </div>
  );
}
