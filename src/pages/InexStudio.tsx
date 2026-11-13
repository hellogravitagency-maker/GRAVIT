import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  Film,
  PenTool,
  TrendingUp,
  Check,
  ChevronDown,
  Mail,
  MessageSquare,
  Phone,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
} from 'lucide-react';

interface ServiceItem {
  icon: string;
  lucideIcon: React.ReactNode;
  title: string;
  desc: string;
  tag: string;
}

const SERVICES: ServiceItem[] = [
  {
    icon: '🎬',
    lucideIcon: <Film className="w-5 h-5 text-[#E31E24]" />,
    title: 'Creative Production',
    desc: 'Brand films, product shoots and cinematic social content.',
    tag: 'Cinema & Video',
  },
  {
    icon: '✒️',
    lucideIcon: <PenTool className="w-5 h-5 text-[#E31E24]" />,
    title: 'Branding & Design',
    desc: 'Logos, identity and creatives that look the same everywhere.',
    tag: 'Identity & Systems',
  },
  {
    icon: '📈',
    lucideIcon: <TrendingUp className="w-5 h-5 text-[#E31E24]" />,
    title: 'Digital Marketing',
    desc: 'Social media, ads and campaigns tracked to real results.',
    tag: 'Growth & Ads',
  },
];

interface WorkItem {
  id: string;
  title: string;
  category: string;
  gradient: string;
  summary: string;
  deliverables: string[];
}

const WORK_ITEMS: WorkItem[] = [
  {
    id: 'w1',
    title: 'Product film',
    category: 'Creative Production',
    gradient: 'from-[#555555] via-[#222222] to-[#111111]',
    summary: 'Macro cinematic lighting, slow-motion captures, and bespoke sound design engineered for high-converting product launches.',
    deliverables: ['4K Master Commercial', '15s & 30s Social Cuts', 'Sound Mix & Foley'],
  },
  {
    id: 'w2',
    title: 'Automotive reel',
    category: 'Commercial Direction',
    gradient: 'from-[#6b4a1e] via-[#33220e] to-[#0a0a0c]',
    summary: 'Dynamic pursuit tracking, anamorphic optical character, and aggressive editorial pacing for luxury automotive showcases.',
    deliverables: ['Anamorphic Aspect Master', 'Color Grading (ACES)', 'Spatial Audio Master'],
  },
  {
    id: 'w3',
    title: 'Brand campaign',
    category: 'Identity & Campaign',
    gradient: 'from-[#b3151a] via-[#5c0a0d] to-[#2a0507]',
    summary: 'Full-funnel visual campaign spanning brand guidelines, social assets, outdoor digital displays, and performance marketing collateral.',
    deliverables: ['Brand Guidelines', 'Omni-channel Creative Suite', 'Ad Variations'],
  },
  {
    id: 'w4',
    title: 'Launch visuals',
    category: 'Motion & 3D Visuals',
    gradient: 'from-[#3a3d45] via-[#1c1e22] to-[#0a0a0c]',
    summary: 'High-impact keyframe renders, 3D product visuals, and dynamic motion graphics engineered for launch campaigns.',
    deliverables: ['Cinema Launch Visuals', 'Keyframe Animations', 'Motion Assets'],
  },
];

interface StepItem {
  num: string;
  title: string;
  desc: string;
}

const STEPS: StepItem[] = [
  {
    num: '01',
    title: 'Discover',
    desc: 'A free call to understand your goals and budget.',
  },
  {
    num: '02',
    title: 'Plan',
    desc: 'You get a written plan, timeline and fixed quote.',
  },
  {
    num: '03',
    title: 'Create',
    desc: 'We build it. You review drafts and give feedback.',
  },
  {
    num: '04',
    title: 'Deliver',
    desc: 'We launch, hand over files and keep supporting you.',
  },
];

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: 'How much does a project cost?',
    a: 'Every quote is written and fixed before we start, based on your goals. The first consultation is free.',
  },
  {
    q: 'How long does it take?',
    a: 'Most projects take 1–4 weeks. Your plan includes dates for every stage.',
  },
  {
    q: 'Can I request changes?',
    a: 'Yes. Each project includes review rounds so the result matches your vision.',
  },
  {
    q: 'Who owns the final work?',
    a: 'You do. We hand over all final files when the project is complete.',
  },
];

export default function InexStudio(): React.JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-[#050506] text-[#E5E7EB] font-sans selection:bg-[#E31E24] selection:text-white antialiased">
      <SEO
        title="INEX Studio — Create. Grow. Build."
        description="INEX Studio is a creative & digital studio: videos, branding, and marketing. One team that plans, builds and grows your brand."
      />

      {/* Top Banner connecting back to GRAVIT Studio */}
      <div className="bg-[#0e0f13] border-b border-[#22252c] px-4 py-1.5 text-xs text-[#8a8e98] flex items-center justify-between">
        <div className="max-w-[1080px] w-full mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E31E24] animate-pulse" />
            <span>INEX Studio — A GRAVIT Studio Venture</span>
          </div>
          <Link
            to="/"
            className="hover:text-white transition-colors flex items-center gap-1 font-mono text-[11px]"
          >
            ← Back to GRAVIT Studio
          </Link>
        </div>
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-[#050506]/90 backdrop-blur-md border-b border-[#22252c]">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <nav className="flex items-center justify-between gap-4 py-3.5" aria-label="Main Navigation">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4 rounded">
              <img
                src="/images/inex-logo.png"
                alt="INEX Studio"
                className="h-10 sm:h-11 w-auto object-contain"
                loading="eager"
                decoding="async"
              />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6 text-sm text-[#c3c6cd]">
              <a href="#services" className="hover:text-white transition-colors py-1">
                Services
              </a>
              <a href="#work" className="hover:text-white transition-colors py-1">
                Our Work
              </a>
              <a href="#process" className="hover:text-white transition-colors py-1">
                How we work
              </a>
              <a href="#faq" className="hover:text-white transition-colors py-1">
                FAQ
              </a>
            </div>

            {/* Header CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-bold bg-[#E31E24] text-white hover:bg-[#c8171d] transition-all duration-150 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 shadow-sm shadow-[#E31E24]/20 active:scale-[0.98]"
              >
                Get a free quote
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href="#contact"
                className="text-xs font-bold bg-[#E31E24] text-white px-3 py-1.5 rounded-md sm:hidden"
              >
                Quote
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#8a8e98] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0e0f13] border-b border-[#22252c] px-4 py-4 space-y-3">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm py-2 text-[#E5E7EB] hover:text-[#E31E24]"
            >
              Services
            </a>
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm py-2 text-[#E5E7EB] hover:text-[#E31E24]"
            >
              Our Work
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm py-2 text-[#E5E7EB] hover:text-[#E31E24]"
            >
              How we work
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm py-2 text-[#E5E7EB] hover:text-[#E31E24]"
            >
              FAQ
            </a>
            <div className="pt-2 border-t border-[#22252c] flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-lg text-sm font-bold bg-[#E31E24] text-white"
              >
                Get a free quote
              </a>
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2 text-xs text-[#8a8e98] hover:text-white"
              >
                ← Back to GRAVIT Studio
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        className="relative min-h-[560px] sm:min-h-[620px] flex items-end border-b border-[#22252c] overflow-hidden"
        style={{
          background: `linear-gradient(90deg, #050506 20%, rgba(5,5,6,0.7) 65%, rgba(5,5,6,0.3) 100%), linear-gradient(0deg, #050506 5%, rgba(5,5,6,0.4) 60%, transparent 100%), url(/images/inex-bg-1.jpg) center/cover no-repeat`,
        }}
      >
        <div className="max-w-[1080px] w-full mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-[620px]">
            {/* Tag */}
            <div className="text-[#E31E24] text-xs font-bold tracking-[2.5px] uppercase mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E31E24]" />
              CREATIVE &amp; DIGITAL STUDIO
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-[-1.5px] leading-[1.08] text-white my-3.5">
              Ideas into impact.{' '}
              <em className="text-[#E31E24] not-italic block sm:inline">Brands into growth.</em>
            </h1>

            {/* Lead */}
            <p className="text-[#c3c6cd] text-base sm:text-lg leading-relaxed mb-6 max-w-[560px]">
              Videos, branding, and marketing — one team that plans, builds and grows your business.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm sm:text-base font-bold bg-[#E31E24] text-white hover:bg-[#c8171d] transition-all duration-150 shadow-lg shadow-[#E31E24]/20 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 active:scale-[0.98]"
              >
                Start your project
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm sm:text-base font-bold border border-[#444444] text-[#E5E7EB] hover:border-white hover:text-white transition-all duration-150 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
              >
                See our work
              </a>
            </div>

            {/* Promises */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#8a8e98]">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#E31E24] flex-shrink-0" />
                Reply within 24 hours
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#E31E24] flex-shrink-0" />
                Clear pricing upfront
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#E31E24] flex-shrink-0" />
                Free first consultation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Bar (Metrics) */}
      <div className="bg-[#0e0f13] border-b border-[#22252c]">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6 py-6 sm:py-7">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-2">
              <b className="block text-2xl sm:text-4xl font-extrabold text-white leading-tight font-mono">
                3
              </b>
              <span className="text-xs sm:text-sm text-[#8a8e98] mt-1 block">In-house disciplines</span>
            </div>
            <div className="p-2">
              <b className="block text-2xl sm:text-4xl font-extrabold text-white leading-tight font-mono">
                1–4 wks
              </b>
              <span className="text-xs sm:text-sm text-[#8a8e98] mt-1 block">Average project sprint</span>
            </div>
            <div className="p-2">
              <b className="block text-2xl sm:text-4xl font-extrabold text-white leading-tight font-mono">
                100%
              </b>
              <span className="text-xs sm:text-sm text-[#8a8e98] mt-1 block">Master &amp; IP ownership</span>
            </div>
            <div className="p-2">
              <b className="block text-2xl sm:text-4xl font-extrabold text-white leading-tight font-mono">
                &lt;24h
              </b>
              <span className="text-xs sm:text-sm text-[#8a8e98] mt-1 block">Direct response time</span>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-14 sm:py-20">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-2.5">
            Everything your brand needs, in one place
          </h2>
          <p className="text-[#8a8e98] text-sm sm:text-base max-w-[560px] mb-8">
            Tell us your goal. We pick the right mix — creative production, branding, and digital marketing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SERVICES.map((s, idx) => (
              <div
                key={idx}
                className="bg-[#0e0f13] border border-[#22252c] rounded-xl p-6 hover:border-[#E31E24]/50 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-grid place-items-center w-11 h-11 rounded-lg bg-[#2a0709] border border-[#E31E24]/20 text-lg">
                      {s.icon}
                    </span>
                    <span className="text-[11px] font-mono text-[#8a8e98] uppercase tracking-wider">
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#E31E24] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#8a8e98] leading-relaxed">{s.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#22252c]/50 flex items-center justify-between text-xs text-[#8a8e98]">
                  <span className="font-mono">INEX · Core 0{idx + 1}</span>
                  <a
                    href="#contact"
                    className="text-[#E31E24] hover:underline flex items-center gap-1 font-medium"
                  >
                    Inquire <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section id="work" className="py-14 sm:py-20 bg-[#0e0f13] border-y border-[#22252c]">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-2.5">
                Proof, not promises
              </h2>
              <p className="text-[#8a8e98] text-sm sm:text-base max-w-[560px]">
                A few recent projects. Ask us for full case studies and results.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E31E24] hover:underline"
            >
              Request full portfolio deck <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {WORK_ITEMS.map((w) => (
              <div
                key={w.id}
                onClick={() => setSelectedWork(w)}
                className={`group relative aspect-[4/5] rounded-xl border border-[#22252c] p-4 flex flex-col justify-end bg-gradient-to-br ${w.gradient} cursor-pointer hover:border-[#E31E24] transition-all duration-200 overflow-hidden shadow-md`}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="relative z-10">
                  <span className="text-[10px] sm:text-xs font-mono text-[#E31E24] uppercase tracking-wider block mb-1">
                    {w.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:translate-x-0.5 transition-transform">
                    {w.title}
                  </h3>
                  <span className="text-[11px] text-[#c3c6cd] flex items-center gap-1 mt-1 opacity-80 group-hover:opacity-100">
                    View project <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Modal for work preview */}
          {selectedWork && (
            <div
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedWork(null)}
            >
              <div
                className="bg-[#0e0f13] border border-[#22252c] rounded-2xl max-w-lg w-full p-6 sm:p-8 relative text-left"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setSelectedWork(null)}
                  className="absolute top-4 right-4 text-[#8a8e98] hover:text-white p-2"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono text-[#E31E24] uppercase tracking-wider">
                  {selectedWork.category}
                </span>
                <h3 className="text-2xl font-black text-white mt-1 mb-3">
                  {selectedWork.title}
                </h3>
                <p className="text-sm text-[#c3c6cd] leading-relaxed mb-5">
                  {selectedWork.summary}
                </p>
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                    Scope &amp; Deliverables
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#8a8e98]">
                    {selectedWork.deliverables.map((d, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#E31E24]" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-3">
                  <a
                    href="#contact"
                    onClick={() => setSelectedWork(null)}
                    className="flex-1 py-2.5 text-center text-sm font-bold bg-[#E31E24] text-white rounded-lg hover:bg-[#c8171d]"
                  >
                    Start a similar project
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedWork(null)}
                    className="px-4 py-2.5 text-sm font-semibold border border-[#444] text-[#E5E7EB] rounded-lg hover:border-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* How We Work (Process) */}
      <section id="process" className="py-14 sm:py-20">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-2.5">
            You always know what happens next
          </h2>
          <p className="text-[#8a8e98] text-sm sm:text-base max-w-[560px] mb-8">
            No surprises. Four steps, with updates at every stage.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step) => (
              <div
                key={step.num}
                className="border-l-2 border-[#E31E24] pl-4 py-1 flex flex-col justify-start"
              >
                <span className="text-[#E31E24] text-xs font-bold font-mono tracking-wider mb-1 block">
                  Step {step.num}
                </span>
                <b className="text-base sm:text-lg text-white font-bold mb-1.5 block">
                  {step.title}
                </b>
                <span className="text-sm text-[#8a8e98] leading-relaxed">{step.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Quote Section */}
      <section className="py-14 sm:py-20 bg-[#0e0f13] border-y border-[#22252c]">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-8">
            Trusted by brands that dream big
          </h2>
          <blockquote className="bg-[#050506] border border-[#22252c] rounded-xl p-6 sm:p-8 relative">
            <div className="text-[#E31E24] text-3xl font-serif mb-2 leading-none">“</div>
            <q className="block text-lg sm:text-xl text-[#E5E7EB] font-medium leading-relaxed mb-5 italic">
              INEX Studio transformed our brand with stunning visuals and a strategic approach. The team’s creativity and professionalism are truly next level.
            </q>
            <div className="flex items-center gap-2 text-sm">
              <b className="text-white font-bold">Ravi Teja</b>
              <span className="text-[#8a8e98]">· Founder, Purple Store</span>
            </div>
          </blockquote>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-14 sm:py-20">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-8">
            Questions customers ask first
          </h2>

          <div className="divide-y divide-[#22252c] border-y border-[#22252c]">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="py-4 sm:py-5">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left flex items-center justify-between gap-4 font-semibold text-base sm:text-lg text-white hover:text-[#E31E24] transition-colors focus:outline-none"
                  aria-expanded={activeFaq === idx}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8a8e98] transition-transform duration-200 flex-shrink-0 ${
                      activeFaq === idx ? 'rotate-180 text-[#E31E24]' : ''
                    }`}
                  />
                </button>
                {activeFaq === idx && (
                  <p className="mt-3 text-sm sm:text-base text-[#8a8e98] leading-relaxed pr-8">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA Banner Section */}
      <section id="contact" className="py-14 sm:py-20">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <div
            className="border border-[#3a0c0f] rounded-2xl p-8 sm:p-12 relative overflow-hidden"
            style={{
              background: `linear-gradient(90deg, rgba(5,5,6,0.92) 0%, rgba(5,5,6,0.65) 100%), url(/images/inex-bg-2.jpg) center/cover no-repeat`,
            }}
          >
            <div className="max-w-[640px] relative z-10">
              <span className="text-[#E31E24] text-xs font-mono font-bold uppercase tracking-wider block mb-2">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
                Let’s build something extraordinary
              </h2>
              <p className="text-[#8a8e98] text-sm sm:text-base leading-relaxed mb-6">
                Have a project in mind? Send a message — a real person replies within 24 hours.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="mailto:hello@inexstudio.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold bg-[#E31E24] text-white hover:bg-[#c8171d] transition-colors shadow-lg shadow-[#E31E24]/20 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 active:scale-[0.98]"
                >
                  <Mail className="w-4 h-4" />
                  Email us
                </a>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold border border-[#444444] text-[#E5E7EB] hover:border-white hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href="tel:"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold border border-[#444444] text-[#E5E7EB] hover:border-white hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                >
                  <Phone className="w-4 h-4" />
                  Call us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#22252c] bg-[#050506] py-8">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#8a8e98]">
            <a href="#" className="flex items-center gap-2 focus-visible:outline-none" aria-label="INEX Studio home">
              <img
                src="/images/inex-logo.png"
                alt="INEX Studio"
                className="h-10 sm:h-12 w-auto object-contain"
                loading="lazy"
              />
            </a>

            <div className="flex items-center gap-4 text-sm font-medium text-[#c3c6cd]">
              <span>Create.</span>
              <span className="text-[#E31E24]">Grow.</span>
              <span>Build.</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <span>© 2026 INEX STUDIO. All rights reserved.</span>
              <span className="hidden sm:inline text-[#22252c]">|</span>
              <Link to="/" className="text-[#8a8e98] hover:text-white transition-colors">
                GRAVIT Studio
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
