import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Closing call-to-action panel shared by Home, Work, Services and About; grows in via .gsap-zoom.
export default function CtaPanel() {
  return (
    <section className="gsap-zoom relative mx-3 md:mx-6 mb-6 rounded-[2rem] md:rounded-[2.5rem] py-24 md:py-40 bg-surface border border-border-subtle text-primary overflow-hidden">
      {/* ponytail: one CSS radial glow, no blur layers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(60% 55% at 50% 0%, color-mix(in srgb, var(--app-accent) 22%, transparent), transparent 70%)' }}
      />
      <div className="section-editorial relative z-10 flex flex-col items-center text-center">
        <p className="text-sm md:text-[17px] font-medium text-accent mb-6">Ready to build?</p>
        <h2 className="display-editorial text-4xl md:text-6xl lg:text-8xl text-primary max-w-4xl mb-8">
          Let's create something
          <br />
          extraordinary together.
        </h2>
        <p className="text-secondary text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
          We partner with ambitious teams to build digital products that set new standards. Tell us about your project.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-background px-8 py-4 rounded-full font-medium text-[15px] hover:opacity-85 active:scale-[0.97] transition"
          >
            Start a Project
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 border border-border text-primary px-8 py-4 rounded-full font-medium text-[15px] hover:border-secondary active:scale-[0.97] transition"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
