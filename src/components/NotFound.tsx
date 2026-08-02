import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import BlackHole from './BlackHole';

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#020202] text-white">
      {/* Background BlackHole Effect */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
        <BlackHole 
          particleCount={800}
          particleSize={12}
          trail={30}
          tilt={65}
          colors={['#6E7AFF', '#FF6938', '#ffffff']}
          orbitSpeed={0.8}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="text-[12px] md:text-sm font-mono tracking-[0.3em] text-[#ff6a00] uppercase block mb-4">
            [ ERROR 404 ]
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 drop-shadow-2xl">
            Lost in <span className="text-white/40">Space.</span>
          </h1>
          <p className="text-white/60 max-w-md mx-auto text-lg mb-12 font-body">
            The page you're looking for has been pulled into a singularity or never existed in this dimension.
          </p>
          
          <HoverBorderGradient 
            as={Link} 
            to="/" 
            containerClassName="mx-auto" 
            className="bg-[#050505] text-white flex items-center space-x-2 text-sm font-mono uppercase tracking-widest px-8 py-3 backdrop-blur-md"
          >
            <span>Return to Base</span>
          </HoverBorderGradient>
        </motion.div>
      </div>
      
      {/* Vignette Overlay for readability */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none z-0"></div>
    </div>
  );
}
