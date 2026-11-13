import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Camera, Film, Layers, Sparkles } from 'lucide-react';

const capabilities = [
  {
    index: '01',
    title: 'Commercial & Studio Stills',
    desc: 'Product, architectural, and automotive imagery engineered with tactile physical lighting.'
  },
  {
    index: '02',
    title: 'Editorial & Campaign Direction',
    desc: 'Narrative storytelling, high-fashion lookbooks, and complete visual brand identities.'
  },
  {
    index: '03',
    title: 'Creative Production & Motion',
    desc: 'End-to-end studio coordination, set design, casting, and master cinema retouching.'
  },
  {
    index: '04',
    title: 'Digital Asset Engineering',
    desc: 'Lossless next-gen AVIF/WebP assets calibrated for zero layout shift and sub-second delivery.'
  }
];

export default function CreativePartner() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#07070A] overflow-hidden border-t border-white/[0.08]">
      {/* Subtle laser red ambient gradient in deep obsidian */}
      <div 
        className="absolute top-1/2 -right-40 -translate-y-1/2 w-96 h-96 rounded-full bg-[#FF2A2A]/5 blur-[140px] pointer-events-none"
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 -left-40 w-80 h-80 rounded-full bg-white/[0.02] blur-[120px] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Partnership Narrative */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-mono tracking-wider text-white/70 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF2A2A] animate-pulse" />
              <span className="uppercase text-[11px] text-white/50">04b / Production Atelier</span>
              <span className="text-white/20">·</span>
              <span className="text-white font-medium">INEX STUDIO</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-semibold text-white leading-[1.08] tracking-[-0.03em]">
              Visual mastery meets{' '}
              <span className="font-serif italic font-normal text-white/90">software precision.</span>
            </h2>

            {/* Body */}
            <p className="mt-5 text-sm sm:text-base text-white/60 leading-relaxed max-w-xl font-light">
              Extraordinary digital experiences demand imagery of equal calibre. GRAVIT collaborates with{' '}
              <strong className="text-white font-medium">INEX STUDIO</strong>—a premier commercial production atelier—to deliver bespoke campaign visuals, editorial lookbooks, and high-impact brand stills engineered specifically for sub-second web delivery.
            </p>

            {/* 4 Capability Cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              {capabilities.map((item) => (
                <div 
                  key={item.title} 
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 hover:border-white/[0.18] hover:bg-white/[0.04] transition-all duration-300 group"
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-mono text-[11px] text-[#FF2A2A] font-semibold tracking-wider">
                      {item.index}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-white/20 group-hover:bg-[#FF2A2A] transition-colors" />
                  </div>
                  <h3 className="text-xs sm:text-[13px] font-semibold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[12px] text-white/50 mt-1 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Call To Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <Link
                to="/inex"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF2A2A] hover:bg-[#E01E1E] px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-[#FF2A2A]/20 active:scale-95 transition-all"
              >
                <span>Launch Live Studio Site</span>
                <ArrowUpRight size={15} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] px-6 py-3 text-xs sm:text-sm font-medium text-white/80 hover:text-white active:scale-95 transition-all"
              >
                <span>Commission Joint Project</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Apple-Level INEX STUDIO Showcase Card */}
          <div className="lg:col-span-6">
            <Link
              to="/inex"
              className="group block relative rounded-[28px] border border-white/[0.1] bg-[#0E0F15] p-3 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-white/[0.25] hover:shadow-[0_30px_70px_rgba(0,0,0,0.7)] transition-all duration-500 overflow-hidden hover:-translate-y-1"
            >
              
              {/* Media Canvas */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9.5] rounded-[22px] overflow-hidden bg-black border border-white/[0.08]">
                <img
                  src="/images/inex-studio.webp"
                  alt="INEX STUDIO — Commercial Photography & Cinema Motion"
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  loading="lazy"
                  decoding="async"
                />
                
                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Top Chrome: Single clean status badge & Apple action pill */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full bg-black/60 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-mono tracking-wider text-white border border-white/10">
                    <span className="h-2 w-2 rounded-full bg-[#FF2A2A] animate-pulse" />
                    <span>INEX STUDIO · COMMERCIAL ATELIER</span>
                  </span>

                  <span className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <div className="text-[11px] font-mono text-[#FF2A2A] uppercase tracking-wider font-semibold">
                      Live Experience
                    </div>
                    <div className="text-lg sm:text-xl font-semibold text-white tracking-tight mt-0.5">
                      Commercial Photography & Film
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-white/80 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 group-hover:bg-[#FF2A2A] group-hover:text-white group-hover:border-[#FF2A2A] transition-all">
                    <span>Enter Studio</span>
                    <ArrowUpRight size={12} />
                  </span>
                </div>
              </div>

              {/* Lower Studio Telemetry Rail */}
              <div className="mt-4 px-2 py-1 grid grid-cols-3 gap-2 border-t border-white/[0.06] pt-3 text-[11px] font-mono">
                <div>
                  <span className="block text-white/40 text-[10px] uppercase tracking-wider">Format</span>
                  <span className="text-white/80 font-medium">8K Medium</span>
                </div>
                <div>
                  <span className="block text-white/40 text-[10px] uppercase tracking-wider">Grade</span>
                  <span className="text-white/80 font-medium">ACES Cinema</span>
                </div>
                <div className="text-right sm:text-left">
                  <span className="block text-white/40 text-[10px] uppercase tracking-wider">Delivery</span>
                  <span className="text-white/80 font-medium">Lossless AVIF</span>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
