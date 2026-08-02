import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import React, { lazy, Suspense, useState, useEffect } from 'react';

const FloatingPrism = lazy(() => import('./FloatingPrism'));
const Canvas = lazy(() => import('@react-three/fiber').then(m => ({ default: m.Canvas })));

export default function Hero() {
  const spring = { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const };

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden flex items-center pt-24 pb-24">
      {/* 3D Asset Background Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50 hidden md:block">
        <Suspense fallback={<div className="w-full h-full bg-[#050505]" />}>
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <FloatingPrism />
          </Canvas>
        </Suspense>
      </div>

      {/* Ghost Text Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-[0.03] blur-[4px] text-[20vw] font-bold uppercase tracking-[0.1em] pointer-events-none z-0 select-none whitespace-nowrap">
        GRAVIT
      </div>

      {/* UI Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 md:px-8 lg:px-16 text-center pointer-events-auto max-w-[1200px] mx-auto mt-20">
        
        {/* Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.1 }}
          className="flex gap-3 justify-center mb-10"
        >
          <div className="rounded-full border border-white/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.08em] text-white/70 bg-white/5 backdrop-blur-md">
            ✦ Based in Kurnool
          </div>
          <div className="rounded-full border border-white/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.08em] text-[#A1A1AA] bg-[#A1A1AA]/10 backdrop-blur-md">
            Accepting New Clients
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.2 }}
          className="w-full flex flex-col items-center"
        >
          <div className="text-[clamp(36px,5vw,72px)] leading-[1.05] font-bold tracking-tighter mb-8 text-white max-w-[900px] text-center">
            We build beautiful, fast websites that help your business grow.
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.3 }}
            className="text-[clamp(15px,1.8vw,18px)] text-[#F8F8F0]/45 max-w-[680px] mx-auto mb-12 font-normal leading-[1.65]"
          >
            GRAVIT is a web design studio combining strong coding with beautiful animations. We build websites that stand out.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-[0.98] hover:opacity-90 transition-all duration-200 ease-out w-full sm:w-auto relative z-20 inline-block min-h-[44px] min-w-[44px]">
              Start a Project
            </Link>
            <Link to="/work" className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/10 hover:scale-[0.98] transition-all duration-200 ease-out liquid-glass w-full sm:w-auto relative z-20 inline-block min-h-[44px] min-w-[44px]">
              View Our Work
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
    </section>
  );
}
