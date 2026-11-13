import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Sparkles } from 'lucide-react';

interface ConceptFloatingNavProps {
  conceptName: string;
  category: string;
  dribbbleUrl?: string;
}

export default function ConceptFloatingNav({ conceptName, category, dribbbleUrl }: ConceptFloatingNavProps) {
  return (
    <aside aria-label="GRAVIT Concept Preview Navigation" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-xl">
      <div className="flex items-center justify-between gap-3 rounded-full border border-white/15 bg-[#0A0A0F]/90 px-4 py-2.5 shadow-2xl backdrop-blur-xl transition-all hover:border-white/25">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inset-0 rounded-full bg-[#FF6A39] opacity-75 animate-ping" />
            <span className="relative h-2 w-2 rounded-full bg-[#FF6A39]" />
          </span>
          <div className="truncate text-xs">
            <span className="text-white/50 hidden sm:inline">Concept: </span>
            <span className="font-medium text-white/95">{conceptName}</span>
            <span className="ml-1.5 hidden md:inline rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-white/60 font-mono">
              {category}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {dribbbleUrl && (
            <a
              href={dribbbleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              title="View original Dribbble concept"
            >
              <span>Shot</span>
              <ExternalLink size={10} />
            </a>
          )}
          <Link
            to="/#selected-work"
            className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white hover:bg-white/20 transition-colors"
          >
            <ArrowLeft size={12} />
            <span>GRAVIT</span>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1 rounded-full bg-[#FF6A39] px-3.5 py-1 text-xs font-semibold text-black hover:bg-[#ff7d52] active:scale-95 transition-all"
          >
            <Sparkles size={11} />
            <span>Build This</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
