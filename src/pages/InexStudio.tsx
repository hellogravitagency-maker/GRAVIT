import React from 'react';
import SEO from '../components/SEO';

export default function InexStudio() {
  return (
    <div className="relative w-full h-screen h-[100dvh] bg-[#050508] overflow-hidden flex flex-col">
      <SEO 
        title="INEX Studio — Commercial Photography & Cinema Motion" 
        description="Official creative photography, commercial campaigns, and cinematic reels studio. Red, Silver & Black aesthetic powered by tactile studio visuals."
        path="/inex"
      />

      {/* Full-bleed immersive canvas (buttons above removed per user instruction) */}
      <div className="flex-1 w-full h-full relative">
        <iframe
          src="/inex/index.html"
          title="INEX Studio Production Showcase"
          className="w-full h-full border-0 absolute inset-0 bg-[#050508]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          loading="eager"
        />
      </div>
    </div>
  );
}
