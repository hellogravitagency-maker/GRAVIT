import React from 'react';
import { motion } from 'motion/react';
import { AestheticStyle } from './types';
import { Grid, Box, Circle, Hexagon } from 'lucide-react';

interface StyleSelectorProps {
  value: AestheticStyle | null;
  onChange: (value: AestheticStyle) => void;
  onNext: () => void;
  onBack: () => void;
}

export function StyleSelector({ value, onChange, onNext, onBack }: StyleSelectorProps) {
  const options: { id: AestheticStyle; label: string; icon: React.ReactNode; desc: string }[] = [
    { id: 'swiss', label: 'Swiss Editorial', icon: <Grid className="w-6 h-6" />, desc: 'Grid-based, highly structured, typographic focus' },
    { id: 'brutalist', label: 'Neo-Brutalist', icon: <Box className="w-6 h-6" />, desc: 'Raw, high-contrast, exposed structure' },
    { id: 'minimal', label: 'Minimalist', icon: <Circle className="w-6 h-6" />, desc: 'Clean, spacious, essential elements only' },
    { id: 'playful', label: 'Soft / Playful', icon: <Hexagon className="w-6 h-6" />, desc: 'Rounded, colorful, dynamic interactions' },
  ];

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-4">Aesthetic</h2>
        <p className="text-secondary font-mono text-sm mb-12">Select the visual direction and layout philosophy.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {options.map((opt) => (
            <motion.button
              key={opt.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onChange(opt.id)}
              className={`text-left p-6 border transition-colors flex flex-col gap-4 ${
                value === opt.id 
                  ? 'border-primary bg-primary/5' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <div className={value === opt.id ? 'text-primary' : 'text-secondary'}>
                {opt.icon}
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
