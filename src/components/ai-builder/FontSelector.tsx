import React from 'react';
import { motion } from 'motion/react';
import { FontPairing } from './types';
import { Type } from 'lucide-react';

interface FontSelectorProps {
  value: FontPairing | null;
  onChange: (value: FontPairing) => void;
  onNext: () => void;
  onBack: () => void;
}

export function FontSelector({ value, onChange, onNext, onBack }: FontSelectorProps) {
  const options: { id: FontPairing; label: string; desc: string; sampleStyle: React.CSSProperties }[] = [
    { id: 'modern', label: 'Modern Sans', desc: 'Clean, legible, and objective.', sampleStyle: { fontFamily: 'sans-serif', fontWeight: 700 } },
    { id: 'elegant', label: 'Elegant Serif', desc: 'Sophisticated, classic, and editorial.', sampleStyle: { fontFamily: 'serif', fontWeight: 400 } },
    { id: 'tech', label: 'Technical Mono', desc: 'Systematic, code-like, and raw.', sampleStyle: { fontFamily: 'monospace', fontWeight: 500 } },
  ];

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-4">Typography</h2>
        <p className="text-secondary font-mono text-sm mb-12">Select a typographic system that aligns with your brand.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              <div className="flex justify-center items-center h-24 bg-primary/5 rounded-sm overflow-hidden border border-border/50">
                <span className="text-4xl" style={opt.sampleStyle}>Aa</span>
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
          Generate →
        </button>
      </div>
    </div>
  );
}
