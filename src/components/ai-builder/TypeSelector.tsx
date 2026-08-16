import React from 'react';
import { motion } from 'motion/react';
import { WebsiteType } from './types';
import { ShoppingCart, Briefcase, Building2, Cloud } from 'lucide-react';

interface TypeSelectorProps {
  value: WebsiteType | null;
  onChange: (value: WebsiteType) => void;
  onNext: () => void;
}

export function TypeSelector({ value, onChange, onNext }: TypeSelectorProps) {
  const options: { id: WebsiteType; label: string; icon: React.ReactNode; desc: string }[] = [
    { id: 'ecommerce', label: 'E-Commerce', icon: <ShoppingCart className="w-6 h-6" />, desc: 'Digital storefronts and catalogs' },
    { id: 'portfolio', label: 'Portfolio', icon: <Briefcase className="w-6 h-6" />, desc: 'Creative showcases and case studies' },
    { id: 'agency', label: 'Agency', icon: <Building2 className="w-6 h-6" />, desc: 'Service businesses and studios' },
    { id: 'saas', label: 'SaaS', icon: <Cloud className="w-6 h-6" />, desc: 'Software and tech platforms' },
  ];

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-4">Website Type</h2>
        <p className="text-secondary font-mono text-sm mb-12">Select the primary function of your digital experience.</p>
        
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

      <div className="mt-12 flex justify-end">
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
