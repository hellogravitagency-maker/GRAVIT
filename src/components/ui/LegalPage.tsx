import { ReactNode } from 'react';

interface LegalPageProps {
  title: string;
  lastUpdated?: string;
  children: ReactNode;
}

export default function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-black text-white selection:bg-[#FF6A39] selection:text-white">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 border-b border-white/10 pb-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 font-heading">{title}</h1>
          {lastUpdated && (
            <p className="text-[#6E7BFF] font-mono text-sm uppercase tracking-wider">
              Last updated: {lastUpdated}
            </p>
          )}
        </header>
        <div className="space-y-8 text-white/80 text-lg leading-relaxed font-body">
          {children}
        </div>
      </div>
    </div>
  );
}
