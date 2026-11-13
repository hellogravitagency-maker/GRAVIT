import { Palette, Code2, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const facts = [
  { icon: Palette, title: 'Design intelligence', text: 'Brand identities and UI systems that turn visitors into customers.' },
  { icon: Code2, title: 'Built for scale', text: 'High-performance architecture and AI-driven platforms.' },
  { icon: TrendingUp, title: 'Performance & growth', text: 'Audits, analytics and search strategy that drive revenue.' },
];

// Summary band after the What We Build tiles — deliberately light, not another card grid.
export default function Capabilities() {
  return (
    <section className="w-full bg-background pt-4 md:pt-6 pb-12 md:pb-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="gsap-stagger grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 border-t border-border-subtle pt-8 md:pt-12">
          {facts.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex flex-col">
              <Icon size={28} strokeWidth={1.5} className="text-accent mb-5" />
              <h3 className="text-xl md:text-2xl font-semibold tracking-[-0.03em] text-primary">{title}</h3>
              <p className="mt-2 text-base md:text-[17px] text-secondary leading-relaxed tracking-[-0.015em]">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link to="/services" className="group inline-flex items-center gap-1 text-[17px] font-medium text-accent hover:underline underline-offset-4">
            View all capabilities
            <span className="transition-transform group-hover:translate-x-0.5">›</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
