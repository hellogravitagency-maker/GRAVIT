import { ReactNode } from 'react';

interface LegalPageProps {
  title: string;
  lastUpdated?: string;
  children: ReactNode;
}

export default function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-black text-white selection:bg-white selection:text-black">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 border-b border-white/20 pb-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 font-heading uppercase">{title}</h1>
          {lastUpdated && (
            <p className="text-white/60 font-mono text-xs uppercase tracking-widest">
              LAST UPDATED: {lastUpdated}
            </p>
          )}
        </header>
        <div className="space-y-12 text-white/80 text-base md:text-lg leading-relaxed font-body">
          {children}
        </div>
      </div>
    </div>
  );
}
