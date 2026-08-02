import React from 'react';
import { Database, Lock, XCircle, CheckCircle, ArrowUpCircle, XSquare, Activity, User, Bot } from 'lucide-react';

export default function PipelineDiagram() {
  return (
    <div className="relative w-full aspect-[3/4] md:aspect-[4/3] max-w-4xl mx-auto bg-[#050505] border border-white/10 rounded-xl overflow-hidden font-mono text-xs select-none">
      
      {/* BACKGROUND GRID */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />

      {/* SVG CONNECTING LINES */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 800 600" preserveAspectRatio="none">
        
        {/* Main Vertical Timeline */}
        <line x1="400" y1="40" x2="400" y2="560" stroke="#333333" strokeWidth="2" strokeDasharray="4 4" />
        
        {/* LEFT BRANCH (Database) */}
        {/* Branch out */}
        <path d="M 400 160 L 250 160 Q 200 160 200 210" stroke="#333333" strokeWidth="2" fill="none" strokeDasharray="4 4" />
        <line x1="200" y1="210" x2="200" y2="350" stroke="#333333" strokeWidth="2" strokeDasharray="4 4" />
        {/* Fail line */}
        <line x1="200" y1="350" x2="200" y2="450" stroke="#ef4444" strokeWidth="2" />
        
        {/* RIGHT BRANCH (Auth) */}
        {/* Branch out */}
        <path d="M 400 100 L 550 100 Q 600 100 600 150" stroke="#333333" strokeWidth="2" fill="none" strokeDasharray="4 4" />
        <line x1="600" y1="150" x2="600" y2="300" stroke="#333333" strokeWidth="2" strokeDasharray="4 4" />
        {/* Success line */}
        <line x1="600" y1="300" x2="600" y2="420" stroke="#22c55e" strokeWidth="2" />
        {/* Merge back */}
        <path d="M 600 420 L 600 420 Q 600 470 550 470 L 400 470" stroke="#22c55e" strokeWidth="2" fill="none" />
        
        {/* DOTS */}
        {/* Main timeline dots */}
        <circle cx="400" cy="100" r="4" fill="#6ee7b7" />
        <circle cx="400" cy="160" r="4" fill="#6ee7b7" />
        <circle cx="400" cy="470" r="6" fill="none" stroke="#22c55e" strokeWidth="2" />
        <circle cx="400" cy="470" r="3" fill="#22c55e" />
        
      </svg>
      
      {/* HTML OVERLAY (Z-20) */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        
        {/* LIVE Production Badge */}
        <div className="absolute left-[50%] top-[6.66%] -translate-x-1/2 -translate-y-1/2 bg-[#000000] border border-white/20 text-white px-4 py-1.5 flex items-center gap-2 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.1)]">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="font-bold tracking-widest text-[10px]">LIVE PRODUCTION</span>
        </div>
        
        {/* Timestamps */}
        <div className="absolute left-[52%] top-[16.66%] -translate-y-1/2 text-[#525252]">09:45</div>
        <div className="absolute left-[52%] top-[26.66%] -translate-y-1/2 text-[#525252]">11:45</div>
        
        {/* ======================================================== */}
        {/* LEFT BRANCH HTML ELEMENTS (Database)                     */}
        {/* ======================================================== */}
        
        {/* Branch Node */}
        <div className="absolute left-[25%] top-[26.66%] -translate-x-1/2 -translate-y-1/2 bg-white text-black px-3 py-1.5 md:px-4 md:py-2 rounded-full font-bold flex items-center gap-2 border border-white/10 shadow-[0_10px_20px_rgba(0,0,0,0.5)] whitespace-nowrap">
          <Database size={14} />
          <span className="hidden md:inline">Database-v2</span>
          <span className="md:hidden">DB-v2</span>
        </div>
        
        {/* Commit / Action */}
        <div className="absolute left-[25%] top-[41.66%] -translate-x-1/2 -translate-y-1/2 bg-[#111] border border-white/10 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2 whitespace-nowrap">
          <Activity size={14} className="text-white/50" />
          <span className="text-white/70 hidden md:inline">Migration Script</span>
          <span className="text-white/70 md:hidden">Migrate</span>
        </div>
        
        {/* Test Failed */}
        <div className="absolute left-[25%] top-[58.33%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
          <div className="w-6 h-6 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center text-red-500">
            <XCircle size={14} />
          </div>
          <span className="text-red-500 font-bold mt-1 tracking-widest text-[8px] md:text-[10px] whitespace-nowrap">TEST FAILED</span>
        </div>
        
        {/* Close Branch */}
        <div className="absolute left-[25%] top-[75%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
          <div className="w-6 h-6 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-white/50">
            <XSquare size={14} />
          </div>
          <span className="text-white/50 font-bold mt-1 tracking-widest text-[8px] md:text-[10px] whitespace-nowrap">CLOSE BRANCH</span>
        </div>
        
        {/* ======================================================== */}
        {/* RIGHT BRANCH HTML ELEMENTS (Auth)                        */}
        {/* ======================================================== */}
        
        {/* Branch Node */}
        <div className="absolute left-[75%] top-[16.66%] -translate-x-1/2 -translate-y-1/2 bg-white text-black px-3 py-1.5 md:px-4 md:py-2 rounded-full font-bold flex items-center gap-2 border border-white/10 shadow-[0_10px_20px_rgba(0,0,0,0.5)] whitespace-nowrap">
          <Lock size={14} className="text-purple-600" />
          <span className="hidden md:inline">Auth-v2</span>
          <span className="md:hidden">Auth</span>
        </div>
        
        {/* Commit / Action */}
        <div className="absolute left-[75%] top-[33.33%] -translate-x-1/2 -translate-y-1/2 bg-[#111] border border-white/10 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2 whitespace-nowrap">
          <Activity size={14} className="text-white/50" />
          <span className="text-white/70 hidden md:inline">Update JWT Logic</span>
          <span className="text-white/70 md:hidden">JWT Logic</span>
        </div>
        
        {/* Test Passed */}
        <div className="absolute left-[75%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
          <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center text-green-500">
            <CheckCircle size={14} />
          </div>
          <span className="text-green-500 font-bold mt-1 tracking-widest text-[8px] md:text-[10px] whitespace-nowrap">TEST PASSED</span>
        </div>
        
        {/* Push to Prod */}
        <div className="absolute left-[75%] top-[70%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
          <div className="w-6 h-6 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-white/80">
            <ArrowUpCircle size={14} />
          </div>
          <span className="text-white/80 font-bold mt-1 tracking-widest text-[8px] md:text-[10px] whitespace-nowrap">PUSH TO PROD</span>
        </div>
        
        {/* ======================================================== */}
        {/* TOGGLE SWITCH (Bottom Center)                            */}
        {/* ======================================================== */}
        <div className="absolute left-[50%] top-[88%] -translate-x-1/2 -translate-y-1/2 flex items-center bg-[#050505] border border-white/10 rounded-full p-1 shadow-[0_0_20px_rgba(0,0,0,0.8)] pointer-events-auto cursor-pointer">
          <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-[#111] text-white/50 transition-colors">
            <User size={12} />
            <span className="hidden md:inline">HUMAN</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-green-500 text-black font-bold transition-colors">
            <Bot size={12} />
            <span className="hidden md:inline">AGENT</span>
            <span className="md:hidden">AI</span>
          </div>
        </div>
        
      </div>
    </div>
  );
}
