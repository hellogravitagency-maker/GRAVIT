import React, { useState } from 'react';
import { 
  Monitor, Sparkles, TrendingUp, Paintbrush, Code, Database, 
  ArrowRight, CheckCircle2, Shield, Zap, Layers, Server, 
  Cpu, Award, ExternalLink, SlidersHorizontal, Check, ShoppingBag
} from 'lucide-react';
import SEO from '@/components/SEO';
import PageIntro from '@/components/ui/PageIntro';
import CtaPanel from '@/components/CtaPanel';

interface ServicePillar {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: typeof Monitor;
  deliverables: string[];
  techStack: string[];
  slaMetric: string;
  slaLabel: string;
}

const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'web-platforms',
    number: '01',
    title: 'High-Performance Web & Brand Flagships',
    tagline: 'Architectural aesthetics with extreme velocity.',
    description: 'We engineer bespoke digital experiences that captivate discerning audiences. From luxury architectural sanctuaries to global consumer brands, every pixel is deliberate, responsive, and blazing fast.',
    icon: Monitor,
    deliverables: [
      'Bespoke fluid motion & physical spring animations',
      'Optical typography with size-specific tracking',
      'Sub-100ms global Time-to-First-Byte (TTFB)',
      'Lighthouse 98+ guaranteed on mobile and desktop',
      'Headless CMS & structured content schema'
    ],
    techStack: ['React 19', 'Tailwind v4', 'Framer Motion', 'Vite', 'Cloudflare Edge'],
    slaMetric: '< 100ms',
    slaLabel: 'Edge TTFB Latency'
  },
  {
    id: 'saas-workstations',
    number: '02',
    title: 'B2B SaaS Workstations & Telemetry',
    tagline: 'Enterprise-grade cloud workstations.',
    description: 'Mission-critical telemetry interfaces engineered for complex data visualization. We turn high-density telemetry streams into intuitive, actionable workstations with sub-second responsiveness.',
    icon: Database,
    deliverables: [
      'Interactive area throughput charts & live stream monitors',
      'Low-latency WebSocket connections for real-time telemetry',
      'Role-based access control (RBAC) & multi-tenant isolation',
      'Synthetic load testing & JSON payload inspection',
      'Zero-latency optimistic UI state updates'
    ],
    techStack: ['React 19', 'TypeScript', 'Supabase PostgreSQL', 'WebSockets', 'Tailwind v4'],
    slaMetric: '99.99%',
    slaLabel: 'Uptime Availability'
  },
  {
    id: 'ecommerce-retail',
    number: '03',
    title: 'Modern E-Commerce & Retail Systems',
    tagline: 'Fluid commerce engineered for conversion.',
    description: 'Scandinavian minimalist and avant-garde street couture storefronts designed to maximize average order value. Seamless cart drawers, instant search filtering, and global localized checkout.',
    icon: ShoppingBag,
    deliverables: [
      'Interactive sliding cart & bag drawers with zero reload',
      'Material & size filtering with instant URL sync',
      'Multi-currency automatic geo-localization',
      'Stripe & Shopify headless checkout integration',
      'Real-time inventory synchronization'
    ],
    techStack: ['React 19', 'Shopify / Stripe API', 'Zustand', 'Tailwind v4', 'Motion'],
    slaMetric: '+38%',
    slaLabel: 'Avg Checkout Velocity'
  },
  {
    id: 'ai-automation',
    number: '04',
    title: 'Autonomous AI Multi-Agent & Workflows',
    tagline: 'Durable intelligence deployed into core ops.',
    description: 'We build production multi-agent systems and deterministic workflow pipelines that eliminate manual toil. From automated CRM enrichment to intelligent support routing and self-healing jobs.',
    icon: Cpu,
    deliverables: [
      'Stateful multi-agent swarms with deterministic guardrails',
      'Durable workflow pipelines engineered with n8n & LangGraph',
      'Vector semantic search & domain-specific RAG integration',
      'Automatic lead qualification, enrichment, and CRM sync',
      'Human-in-the-loop validation and audit logging'
    ],
    techStack: ['OpenAI GPT-4o', 'LangGraph', 'n8n', 'Python / Node.js', 'Redis'],
    slaMetric: '0 Failures',
    slaLabel: 'Unhandled Exception Rate'
  },
  {
    id: 'clinical-health',
    number: '05',
    title: 'Healthcare & Regulated Telehealth Platforms',
    tagline: 'Clinical precision with patient-first ease.',
    description: 'Academic medical center platforms and telehealth triage systems engineered for safety, compliance, and intuitive booking. Verified doctor directories with same-day calendar scheduling.',
    icon: Shield,
    deliverables: [
      'Attending physician directories with verified credentialing',
      'Same-day appointment booking with calendar synchronization',
      'Instant digital video triage routing & intake forms',
      'Full HIPAA/GDPR architectural privacy safeguards',
      'Sub-second search across clinical specialties'
    ],
    techStack: ['React 19', 'Next-Gen Encryption', 'Tailwind v4', 'Supabase', 'Edge API'],
    slaMetric: '100%',
    slaLabel: 'Compliance Architecture'
  },
  {
    id: 'design-systems',
    number: '06',
    title: 'Design Systems & Atomic Component Libraries',
    tagline: 'Token-driven consistency that scales effortlessly.',
    description: 'We architect living design systems that bridge Figma and production code. Tokenized color, typography, spacing, and accessible components that empower teams to ship 4x faster with absolute consistency.',
    icon: Paintbrush,
    deliverables: [
      'Atomic component architecture (buttons, inputs, modals, cards)',
      'Design token hierarchy declared at :root for instant theming',
      'Strict WCAG 2.2 AA accessibility and full screen reader testing',
      'Figma Variables sync and automated token compilation',
      'Interactive Storybook documentation and living style guides'
    ],
    techStack: ['CSS Variables', 'Tailwind v4', 'Radix Primitives', 'Storybook', 'TypeScript'],
    slaMetric: '100%',
    slaLabel: 'WCAG 2.2 AA Compliant'
  }
];

const ENGINEERING_STANDARDS = [
  {
    title: '100% Type-Safe TypeScript',
    description: 'Every interface, payload, and function is strictly typed. Zero any, zero unhandled runtime regressions.'
  },
  {
    title: 'Edge-First Global Delivery',
    description: 'Static assets and serverless compute distributed across 300+ global edge nodes for <50ms response times worldwide.'
  },
  {
    title: 'Lighthouse 98+ Guaranteed',
    description: 'We audit Core Web Vitals (LCP, INP, CLS) throughout development to guarantee green performance scores.'
  },
  {
    title: 'Complete IP & Code Ownership',
    description: 'You own 100% of the repository, design assets, and infrastructure from day one. Zero vendor lock-in.'
  }
];

export default function Services() {
  const [activePillar, setActivePillar] = useState<string>('web-platforms');

  return (
    <div className="w-full bg-background text-primary">
      <SEO 
        title="Engineering Services & Architecture | GRAVIT"
        description="Comprehensive digital engineering: Web Platforms, SaaS Workstations, AI Automations, and Design Systems."
        path="/services"
      />

      {/* Page Intro */}
      <PageIntro
        eyebrow="Capabilities & Architecture"
        title="Engineering that drives conversion."
        subtitle="Design, distributed engineering, and autonomous workflows tailored for high-growth ventures and global enterprises."
      />

      {/* ── Main Pillars Grid ──────────────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 pb-20 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {SERVICE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-surface/70 hover:bg-surface hover:border-accent/40 p-8 sm:p-9 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
              >
                <div>
                  {/* Top Row: Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
                      {pillar.number} / 06
                    </span>
                    <div className="h-10 w-10 rounded-2xl bg-surface-hover border border-border flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-colors">
                      <Icon size={20} strokeWidth={1.75} />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-primary group-hover:text-accent transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-accent uppercase tracking-wider font-medium">
                    {pillar.tagline}
                  </p>

                  <p className="mt-3 text-sm text-secondary leading-relaxed font-normal">
                    {pillar.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="mt-6 pt-5 border-t border-border">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted block mb-3 font-semibold">
                      Key Deliverables
                    </span>
                    <ul className="space-y-2 text-xs text-secondary">
                      {pillar.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Footer: SLA Metric & Tech Stack */}
                <div className="mt-8 pt-5 border-t border-border flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-primary block">
                      {pillar.slaMetric}
                    </span>
                    <span className="text-[10px] font-mono text-muted uppercase tracking-wider">
                      {pillar.slaLabel}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 flex-wrap justify-end max-w-[60%]">
                    {pillar.techStack.slice(0, 3).map((tech) => (
                      <span 
                        key={tech} 
                        className="text-[9px] font-mono px-2 py-0.5 rounded bg-surface-hover border border-border-subtle text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Engineering Standards Banner ───────────────────── */}
      <section className="border-y border-border bg-surface/40 py-16 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              The Engineering Floor
            </span>
            <h3 className="text-2xl sm:text-4xl font-semibold tracking-[-0.03em] text-primary mt-1">
              Uncompromising Technical Standards
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENGINEERING_STANDARDS.map((std, i) => (
              <div key={std.title} className="p-6 rounded-2xl bg-surface/80 border border-border">
                <div className="font-mono text-xs text-accent font-bold mb-2">0{i + 1}</div>
                <h4 className="text-base font-semibold text-primary tracking-tight">{std.title}</h4>
                <p className="mt-1.5 text-xs text-secondary leading-relaxed">{std.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Panel ─────────────────────────────────────── */}
      <CtaPanel />
    </div>
  );
}
