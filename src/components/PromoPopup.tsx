import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { X, Sparkles } from 'lucide-react';

export default function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Show popup after a short delay on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleAction = () => {
    handleClose();
    navigate('/pricing');
  };

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="fixed bottom-6 right-6 z-[9999] max-w-sm w-[calc(100%-3rem)] md:w-96"
        >
          <div className="relative p-6 rounded-2xl bg-[#0a0a0a] border border-white/20 shadow-2xl overflow-hidden group">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ff6a00]/20 to-transparent opacity-50"></div>
            
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-10"
              aria-label="Close"
            >
              <X size={16} />
            </button>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2 text-[#ff6a00]">
                <Sparkles size={16} />
                <span className="text-xs font-mono uppercase tracking-widest font-bold">Limited Time Offer</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2 font-['Space_Grotesk'] leading-tight">
                50% OFF All Plans
              </h3>
              
              <p className="text-white/70 text-sm mb-5 leading-relaxed">
                Transform your digital presence. Claim our exclusive discount on all development and design packages.
              </p>
              
              <button
                onClick={handleAction}
                className="w-full relative px-6 py-3 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-lg overflow-hidden group/btn"
              >
                <div className="absolute inset-0 bg-[#ff6a00] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300">
                  Claim Offer
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
