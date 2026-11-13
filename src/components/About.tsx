import { Code, Component, Layout, Camera, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import PageIntro from './ui/PageIntro';
import CtaPanel from './CtaPanel';

const PRINCIPLES = [
  { title: 'Designed, not decorated.', desc: 'We believe in extreme legibility. Every pixel must serve a purpose. We strip away unnecessary visual noise in favor of strict grids, high-contrast typography, and deliberate interactions.', icon: Component },
  { title: 'Engineering discipline.', desc: 'Design is useless if the system fails under load. We maintain a zero-tolerance policy for technical debt. Our architectures prioritize type safety, relational integrity, and absolute performance.', icon: Code },
  { title: 'Platform Thinking.', desc: "We don't just build brochures. We build digital operating systems. From CRM pipelines to automated workflows, we architect the full lifecycle of your digital product.", icon: Layout },
];

export default function About() {
  return (
    <div className="w-full bg-background text-primary">
      <SEO 
 title="The Studio | GRAVIT®" 
 description="We are a premium digital product studio operating at the intersection of rigorous engineering and minimal design." 
 path="/about"
 />
      <PageIntro eyebrow="About" title="A small studio with high standards." subtitle={'We operate on a simple premise: too many beautiful interfaces are built on fragile architecture, and too many robust systems are painful to use. We exist to bridge that gap.'} />

      <section className="max-w-[1400px] mx-auto px-4 md:px-10 lg:px-16 pb-24 md:pb-40">
        <div className="text-center mb-14 md:mb-20">
          <h2 className="display-editorial text-4xl md:text-6xl lg:text-7xl text-primary">What we believe.</h2>
        </div>
        <div className="gsap-stagger grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
          {PRINCIPLES.map(({ title, desc, icon: Icon }, i) => (
            <div key={title} className="bento-card !bg-surface-hover !border-transparent p-8 md:p-10 flex flex-col">
              <div className="flex items-center justify-between">
                <Icon size={32} strokeWidth={1.5} className="text-accent" />
                <span className="text-xs font-mono tracking-widest text-muted">0{i + 1}</span>
              </div>
              <h3 className="mt-12 text-2xl md:text-[28px] font-semibold tracking-[-0.03em] text-primary">{title}</h3>
              <p className="mt-3 text-base md:text-[17px] text-secondary leading-relaxed tracking-[-0.015em]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Creative Production & Photography Partner ── */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-10 lg:px-16 pb-24 md:pb-40">
        <div className="rounded-[32px] border border-white/10 bg-surface/60 p-8 sm:p-12 md:p-16 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#FF3333]/10 blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#FF3333]/30 bg-[#FF3333]/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-[#FF4D4D] mb-5">
                <Camera size={13} />
                <span>Creative Photography Partner</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-primary">
                INEX STUDIO × GRAVIT
              </h2>
              <p className="mt-4 text-base sm:text-lg text-secondary leading-relaxed max-w-xl">
                High-converting digital platforms need imagery with emotional gravity. We partner with <strong>INEX STUDIO</strong> to direct and shoot high-fidelity commercial photography, editorial lookbooks, and campaign cinematography for our clients.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono text-muted">
                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">Commercial Photography</span>
                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">Campaign Direction</span>
                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">Studio Stills</span>
                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">Creative Production</span>
              </div>

              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline underline-offset-4 group"
                >
                  <span>Commission a joint brand & digital engagement</span>
                  <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/15 overflow-hidden shadow-2xl bg-black">
                <img
                  src="/images/inex-studio.webp"
                  alt="INEX STUDIO Creative Production"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaPanel />
    </div>
  );
}
