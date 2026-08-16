import React from 'react';
import { motion } from 'motion/react';

export function LaunchView() {
  return (
    <div className="p-10 max-w-4xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        
        <div className="mb-12">
          <h1 className="text-5xl font-bold uppercase tracking-widest mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Production Readiness</h1>
          <p className="text-[#999] font-mono text-sm max-w-md mx-auto">All systems nominal. The project is verified and ready for deployment to the edge network.</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-16 text-left max-w-2xl mx-auto">
           {[
             { label: 'Domain Configuration', status: '✓ Verified' },
             { label: 'SSL Certificate', status: '✓ Provisioned' },
             { label: 'SEO Metadata', status: '✓ Optimized' },
             { label: 'Analytics Injection', status: '✓ Connected' },
             { label: 'Form Endpoints', status: '✓ Active' },
             { label: 'Performance Audit', status: '✓ 94/100' },
           ].map(item => (
             <div key={item.label} className="bg-[#111] border border-[#222] p-4 rounded-sm flex justify-between items-center">
                <span className="text-sm text-[#ccc]">{item.label}</span>
                <span className="text-xs font-mono text-[#5B4BFF]">{item.status}</span>
             </div>
           ))}
        </div>

        <div className="max-w-md mx-auto">
           <button className="w-full bg-[#5B4BFF] hover:bg-[#4A3BE0] text-white py-6 text-xl uppercase tracking-widest font-bold rounded-sm transition-all shadow-[0_0_40px_rgba(91,75,255,0.3)] hover:shadow-[0_0_60px_rgba(91,75,255,0.5)]" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              Launch Website
           </button>
           <div className="mt-6 text-xs text-[#666] font-mono">
              Will deploy to: <span className="text-white">littlescholars.com</span>
           </div>
        </div>

      </motion.div>
    </div>
  );
}
