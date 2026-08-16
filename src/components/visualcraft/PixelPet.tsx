import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PixelWardrobe } from './types';

interface PixelPetProps {
  wardrobe: PixelWardrobe;
}

const RESPONSES = [
  "Ah, oui oui! Pixel the artist-designer!",
  "Make it pop!",
  "Needs more whitespace...",
  "Are we sure about this color?",
  "Perfection takes time.",
  "That looks totally inevitable."
];

export function PixelPet({ wardrobe }: PixelPetProps) {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatText, setChatText] = useState("");

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const handleInteract = () => {
    const randomMsg = RESPONSES[Math.floor(Math.random() * RESPONSES.length)];
    setChatText(randomMsg);
    setChatOpen(true);
    setTimeout(() => setChatOpen(false), 3000);
  };

  if (!mounted) return null;

  return createPortal(
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-center select-none">
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="mb-4 bg-white text-black px-4 py-2 rounded-2xl shadow-lg border border-neutral-200 text-sm font-medium relative max-w-[200px] text-center"
          >
            {chatText}
            {/* Speech bubble tail */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-neutral-200 transform rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative cursor-pointer group"
        onClick={handleInteract}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Shadow */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-2 bg-black/20 blur-md rounded-[100%]" />

        {/* Body */}
        <div 
          className="w-20 h-20 rounded-3xl shadow-xl flex items-center justify-center relative overflow-hidden transition-all duration-500"
          style={{ background: wardrobe.bodyGradient }}
        >
          {/* Eyes */}
          <div className="flex gap-3 relative z-10 -mt-2">
            <div className="w-2.5 h-3.5 bg-white rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-black rounded-full animate-bounce" />
            </div>
            <div className="w-2.5 h-3.5 bg-white rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-black rounded-full animate-bounce" />
            </div>
          </div>

          {/* Blush */}
          <div className="absolute top-10 left-3 w-3 h-2 bg-red-400/50 blur-[2px] rounded-full" />
          <div className="absolute top-10 right-3 w-3 h-2 bg-red-400/50 blur-[2px] rounded-full" />

          {/* Mouth */}
          <div className="absolute top-11 left-1/2 -translate-x-1/2 w-2 h-1.5 bg-black/80 rounded-b-full" />

          {/* Accessories */}
          {wardrobe.accessory === 'glasses' && (
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-14 h-4 border-2 border-black rounded-sm flex items-center justify-between px-1 z-20">
               <div className="w-4 h-full bg-blue-400/30" />
               <div className="w-2 h-0.5 bg-black" />
               <div className="w-4 h-full bg-blue-400/30" />
            </div>
          )}
          {wardrobe.accessory === 'beret' && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-red-600 rounded-t-full rounded-b-md transform -rotate-12 z-20">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-800 rounded-full" />
            </div>
          )}
          {wardrobe.accessory === 'crown' && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-3xl z-20 select-none">
              👑
            </div>
          )}
          {wardrobe.accessory === 'bowtie' && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-4 bg-rose-500 rounded-sm z-20 flex items-center justify-center">
              <div className="w-2 h-2 bg-rose-800 rounded-full" />
            </div>
          )}
          {wardrobe.accessory === 'mustache' && (
            <div className="absolute top-10 left-1/2 -translate-x-1/2 text-2xl z-20 select-none">
              🥸
            </div>
          )}
        </div>
      </motion.div>
    </div>,
    document.body
  );
}
