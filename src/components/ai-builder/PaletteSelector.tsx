import React from 'react';
import { motion } from 'motion/react';
import { ColorPalette } from './types';

interface PaletteSelectorProps {
  value: ColorPalette | null;
  onChange: (value: ColorPalette) => void;
  onNext: () => void;
  onBack: () => void;
}

export function PaletteSelector({ value, onChange, onNext, onBack }: PaletteSelectorProps) {
  const options: { id: ColorPalette; label: string; desc: string; colors: string[] }[] = [
    { id: 'monochrome', label: 'Monochrome', desc: 'High contrast black, white, and greys.', colors: ['#000000', '#333333', '#999999', '#ffffff'] },
    { id: 'neon', label: 'Neon Cyber', desc: 'Dark background with vibrant, glowing accents.', colors: ['#050505', '#1a1a1a', '#00ffcc', '#ff00ff'] },
    { id: 'earth', label: 'Earth Tones', desc: 'Warm, organic, and grounded natural colors.', colors: ['#2c241b', '#5c4d3c', '#8a7968', '#d6cfc7'] },
    { id: 'pastel', label: 'Soft Pastel', desc: 'Light, approachable, and calming hues.', colors: ['#fdfbf7', '#f4e8e1', '#b5c6e8', '#d8b4e2'] },
  ];

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-4">Color Palette</h2>
        <p className="text-secondary font-mono text-sm mb-12">Select the chromatic theme for your project.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {options.map((opt) => (
            <motion.button
              key={opt.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onChange(opt.id)}
              className={`text-left p-6 border transition-colors flex flex-col gap-6 ${
                value === opt.id 
                  ? 'border-primary bg-primary/5' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <div className="flex w-full h-12 rounded-sm overflow-hidden border border-border/50">
                {opt.colors.map((c, i) => (
                  <div key={i} className="flex-1 h-full" style={{ backgroundColor: c }} />
                ))}
              </div>
              <div>
                <h3 className="font-bold text-lg uppercase tracking-tight mb-1">{opt.label}</h3>
                <p className="text-sm text-secondary">{opt.desc}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="mt-12 flex justify-between items-center">
        <button
          onClick={onBack}
          className="text-secondary hover:text-primary text-sm font-mono uppercase tracking-widest transition-colors"
        >
          ← Back
        </button>
        <button
          onClick={onNext}
          disabled={!value}
          className="bg-primary text-background px-8 py-3 text-sm font-bold uppercase tracking-widest disabled:opacity-50 transition-opacity"
        >
          Next Step →
        </button>
      </div>
    </div>
  );
}
