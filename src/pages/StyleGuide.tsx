import React, { useState } from 'react';
import SEO from '@/components/SEO';
import {
  Button,
  Badge,
  Card,
  SectionHeading,
  Divider,
  Input,
  Textarea,
  Select,
  Container,
  ProjectCard,
  ServiceCard,
  ProductPreviewCard,
} from '@/components/ui';
import { Code2, Monitor, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function StyleGuide() {
  const [formData, setFormData] = useState({ name: '', email: '', service: '', details: '' });
  const [formError, setFormError] = useState(false);

  return (
    <div className="w-full bg-background text-primary py-24 sm:py-32">
      <SEO
        title="Design System & Style Guide | GRAVIT"
        description="Internal visual specification and component library for the GRAVIT engineering studio."
        noindex={true}
      />

      <Container size="xl">
        {/* Style Guide Header */}
        <div className="mb-16 border-b border-border-subtle pb-10">
          <Badge variant="ember" className="mb-4">Internal Specification · Phase 02</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold tracking-tight text-primary">
            GRAVIT Design Foundation
          </h1>
          <p className="mt-4 text-lg text-secondary max-w-3xl leading-relaxed">
            The design system for <strong className="text-primary">GRAVIT — Independent Digital Product Engineering Studio</strong>. Built on Apple clarity, Linear precision, Stripe structured narrative, and zero decorative noise.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono text-muted">
            <span className="px-2 py-1 bg-surface rounded border border-border-subtle">Palette: Space · Canvas · Nova · Ember</span>
            <span className="px-2 py-1 bg-surface rounded border border-border-subtle">Type: Geist · Instrument Serif · Space Mono</span>
            <span className="px-2 py-1 bg-surface rounded border border-border-subtle">Tailwind v4 CSS Tokens</span>
          </div>
        </div>

        {/* ── 01. Color System ─────────────────────────────────── */}
        <section className="mb-20">
          <SectionHeading
            eyebrow="01 / Foundation"
            title="Brand Palette &"
            serifWord="Surfaces"
            subtitle="Four primary tones. Ember is an intentional accent, never applied indiscriminately. Dark and light surfaces alternate with purpose."
            align="left"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Space */}
            <div className="rounded-2xl border border-white/10 bg-[#0A0A0F] text-[#F8F8F0] p-6 flex flex-col justify-between h-56 shadow-md">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#9E9EA8]">Deep Surface</span>
                <h3 className="text-2xl font-bold tracking-tight mt-1 text-white">Space</h3>
              </div>
              <div>
                <p className="font-mono text-sm text-[#FF6A39]">#0A0A0F</p>
                <p className="text-xs text-[#9E9EA8] mt-1">Deep ground, terminal contrast, dark mode foundation</p>
              </div>
            </div>

            {/* Canvas */}
            <div className="rounded-2xl border border-[#D0CEBE] bg-[#E9E8E1] text-[#0A0A0F] p-6 flex flex-col justify-between h-56 shadow-sm">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#57575E]">Warm Neutral</span>
                <h3 className="text-2xl font-bold tracking-tight mt-1 text-[#0A0A0F]">Canvas</h3>
              </div>
              <div>
                <p className="font-mono text-sm font-semibold text-[#0A0A0F]">#E9E8E1</p>
                <p className="text-xs text-[#57575E] mt-1">Editorial warmth, studio papers, secondary container</p>
              </div>
            </div>

            {/* Nova */}
            <div className="rounded-2xl border border-[#D8D6CC] bg-[#F8F8F0] text-[#0A0A0F] p-6 flex flex-col justify-between h-56 shadow-sm">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#57575E]">Light Ground</span>
                <h3 className="text-2xl font-bold tracking-tight mt-1 text-[#0A0A0F]">Nova</h3>
              </div>
              <div>
                <p className="font-mono text-sm font-semibold text-[#0A0A0F]">#F8F8F0</p>
                <p className="text-xs text-[#57575E] mt-1">Crisp off-white, light mode primary surface</p>
              </div>
            </div>

            {/* Ember */}
            <div className="rounded-2xl border border-transparent bg-[#FF6A39] text-white p-6 flex flex-col justify-between h-56 shadow-md shadow-[#FF6A39]/20">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-white/80">Active Accent</span>
                <h3 className="text-2xl font-bold tracking-tight mt-1 text-white">Ember</h3>
              </div>
              <div>
                <p className="font-mono text-sm font-semibold text-white">#FF6A39</p>
                <p className="text-xs text-white/90 mt-1">Precise focal points, CTAs, focus indicators, status pings</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 02. Surface Alternation ──────────────────────────── */}
        <section className="mb-20">
          <SectionHeading
            eyebrow="02 / Structure"
            title="Surface"
            serifWord="Alternation"
            subtitle="Sections alternate between Nova, Canvas, and Space surfaces to create editorial rhythm without decorative gimmickry."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="surface-nova p-8 rounded-2xl border border-border">
              <span className="font-mono text-xs uppercase tracking-wider text-muted">.surface-nova</span>
              <h4 className="text-xl font-heading font-semibold mt-2">Crisp Light Ground</h4>
              <p className="mt-2 text-sm text-secondary leading-relaxed">
                Default primary light mode surface. Clean, highly legible, calm.
              </p>
              <div className="mt-6 flex items-center gap-2">
                <Button size="sm" variant="primary">Action</Button>
                <Button size="sm" variant="outline">Secondary</Button>
              </div>
            </div>

            <div className="surface-canvas p-8 rounded-2xl border border-[#D0CEBE]">
              <span className="font-mono text-xs uppercase tracking-wider text-[#57575E]">.surface-canvas</span>
              <h4 className="text-xl font-heading font-semibold mt-2 text-[#0A0A0F]">Warm Studio Canvas</h4>
              <p className="mt-2 text-sm text-[#57575E] leading-relaxed">
                Warm tactile surface for capabilities, deep dives, and structured cards.
              </p>
              <div className="mt-6 flex items-center gap-2">
                <Button size="sm" variant="ember">Action</Button>
                <Button size="sm" variant="secondary">Secondary</Button>
              </div>
            </div>

            <div className="surface-space p-8 rounded-2xl border border-white/10">
              <span className="font-mono text-xs uppercase tracking-wider text-[#9E9EA8]">.surface-space</span>
              <h4 className="text-xl font-heading font-semibold mt-2 text-[#F8F8F0]">Deep Space Mode</h4>
              <p className="mt-2 text-sm text-[#9E9EA8] leading-relaxed">
                Technical dark surface for developer tools, code previews, and studio CTAs.
              </p>
              <div className="mt-6 flex items-center gap-2">
                <Button size="sm" variant="ember">Initiate</Button>
                <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">Explore</Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── 03. Typography System ────────────────────────────── */}
        <section className="mb-20">
          <SectionHeading
            eyebrow="03 / Typography"
            title="Editorial"
            serifWord="Discipline"
            subtitle="Geist/Inter as the clean workhorse, Instrument Serif for rare editorial resonance, Space Mono for precise metadata."
            align="left"
          />

          <Card variant="default" padding="lg" className="space-y-8">
            <div className="border-b border-border-subtle pb-6">
              <div className="flex items-center justify-between text-xs font-mono text-muted mb-2">
                <span>Display 1 · Geist / Inter</span>
                <span>clamp(2.5rem, 6vw, 4.5rem)</span>
              </div>
              <p className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold tracking-[-0.04em] text-primary">
                We build what others imagine.
              </p>
            </div>

            <div className="border-b border-border-subtle pb-6">
              <div className="flex items-center justify-between text-xs font-mono text-muted mb-2">
                <span>Display 2 with Serif Accent · Instrument Serif</span>
                <span>text-3xl to text-5xl</span>
              </div>
              <p className="text-3xl sm:text-4xl font-heading font-semibold tracking-[-0.03em] text-primary">
                Engineering at the intersection of <span className="font-serif italic text-[#FF6A39] font-normal">clarity</span> and precision.
              </p>
            </div>

            <div className="border-b border-border-subtle pb-6">
              <div className="flex items-center justify-between text-xs font-mono text-muted mb-2">
                <span>Body Copy · Geist / Inter</span>
                <span>text-base to text-lg</span>
              </div>
              <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-3xl">
                GRAVIT designs, engineers, and ships digital products for ambitious founders and enterprises. We write code with type safety, build interfaces with tactile precision, and eliminate unnecessary decoration.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs font-mono text-muted mb-2">
                <span>Technical Metadata · Space Mono</span>
                <span>text-xs to text-sm</span>
              </div>
              <div className="font-mono text-xs sm:text-sm text-muted uppercase tracking-widest space-y-1">
                <p>LATENCY: 0.4s · LCP: 99.8% · RUNTIME: REACT 19 + VITE</p>
                <p>STATUS: PRODUCTION DEPLOYED · REPOSITORY: AUDITED</p>
              </div>
            </div>
          </Card>
        </section>

        {/* ── 04. Buttons & Interactive States ─────────────────── */}
        <section className="mb-20">
          <SectionHeading
            eyebrow="04 / Components"
            title="Buttons &"
            serifWord="Actions"
            subtitle="Accessible tap targets, clear focus rings, purposeful hover states with no excessive scaling."
            align="left"
          />

          <Card variant="default" padding="lg" className="space-y-8">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-muted mb-4">Button Variants</h4>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="primary">Primary Action</Button>
                <Button variant="ember">Ember CTA</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Action</Button>
                <Button variant="ghost">Ghost Link</Button>
              </div>
            </div>

            <Divider />

            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-muted mb-4">Sizes & Icon Integration</h4>
              <div className="flex flex-wrap gap-4 items-center">
                <Button size="sm" variant="secondary">Small (32px)</Button>
                <Button size="md" variant="secondary">Medium (42px)</Button>
                <Button size="lg" variant="ember" rightIcon={<ArrowRight size={16} />}>
                  Large CTA (52px)
                </Button>
              </div>
            </div>

            <Divider />

            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-muted mb-4">States (Loading & Disabled)</h4>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="primary" isLoading>Processing</Button>
                <Button variant="secondary" disabled>Disabled State</Button>
                <Button variant="ember" disabled>Disabled Ember</Button>
              </div>
            </div>
          </Card>
        </section>

        {/* ── 05. Badges & Status Indicators ───────────────────── */}
        <section className="mb-20">
          <SectionHeading
            eyebrow="05 / Micro-UI"
            title="Badges &"
            serifWord="Indicators"
            subtitle="Status transparency for client engagements, studio-owned products, open-source code, and concept demos."
            align="left"
          />

          <Card variant="default" padding="lg">
            <div className="flex flex-wrap gap-3 items-center">
              <Badge variant="live" dot>Live Production</Badge>
              <Badge variant="beta" dot>Public Beta</Badge>
              <Badge variant="prototype">Interactive Prototype</Badge>
              <Badge variant="client">Client Project</Badge>
              <Badge variant="product">Studio Product</Badge>
              <Badge variant="opensource">Open Source</Badge>
              <Badge variant="ember">Ember Tag</Badge>
              <Badge variant="outline">Architecture</Badge>
              <Badge variant="default">General</Badge>
            </div>
          </Card>
        </section>

        {/* ── 06. Form Controls ────────────────────────────────── */}
        <section className="mb-20">
          <SectionHeading
            eyebrow="06 / Forms"
            title="Input Primitives &"
            serifWord="Validation"
            subtitle="High-contrast borders, visible labels, accessible helper text, and clear error announcements."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="default" padding="lg" className="space-y-5">
              <h4 className="font-mono text-xs uppercase tracking-wider text-muted">Standard Form Elements</h4>
              <Input
                label="Full Name"
                placeholder="Jane Doe"
                helperText="Enter your legal or preferred name"
                required
              />
              <Select
                label="Project Type"
                placeholder="Select project category"
                options={[
                  { value: 'web', label: 'Websites & Web Experiences' },
                  { value: 'app', label: 'Application Engineering' },
                  { value: 'saas', label: 'Software & SaaS Platform' },
                  { value: 'ai', label: 'AI & Automation Workflow' },
                ]}
                required
              />
              <Textarea
                label="Project Scope"
                placeholder="Briefly describe what you are looking to build..."
                rows={3}
              />
            </Card>

            <Card variant="default" padding="lg" className="space-y-5">
              <h4 className="font-mono text-xs uppercase tracking-wider text-muted">Error & Validation States</h4>
              <Input
                label="Corporate Email"
                placeholder="jane@company.com"
                value="invalid-email-address"
                error="Please enter a valid business email address"
                readOnly
              />
              <Select
                label="Timeline Requirement"
                options={[{ value: '', label: 'Select timeline' }]}
                error="Timeline selection is required for scheduling"
              />
              <Input
                label="Disabled Field"
                value="Standard studio SLA applies"
                disabled
              />
            </Card>
          </div>
        </section>

        {/* ── 07. Layout Patterns ──────────────────────────────── */}
        <section className="mb-20">
          <SectionHeading
            eyebrow="07 / Patterns"
            title="Standard Layout"
            serifWord="Modules"
            subtitle="Reusable cards for project showcases, capabilities, and studio-owned product launches."
            align="left"
          />

          <div className="space-y-12">
            {/* Pattern 1: ProjectCard */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-muted mb-4">Project Card Pattern</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard
                  title="SSVEMHS"
                  category="Web Portal"
                  description="Immersive educational portal featuring role-based dashboards, verified 99.9% uptime, and fluid interactions."
                  image="/images/SSVEMHS.webp"
                  ownership="client"
                  status="live"
                  technologies={['React 19', 'Tailwind', 'Supabase']}
                  to="/work"
                />
                <ProjectCard
                  title="Little Stars Academy"
                  category="Web Application"
                  description="High-performance admissions platform with automated notifications and lightweight responsive architecture."
                  image="/images/Little_Stars.webp"
                  ownership="client"
                  status="live"
                  technologies={['React', 'Tailwind v4', 'Framer Motion']}
                  to="/work"
                />
                <ProjectCard
                  title="Shadow Garden Interface"
                  category="Interactive Concept"
                  description="Experimental portfolio interaction prototype testing physics-based cursor boundaries and low-latency canvas rendering."
                  image="/images/Shadow Garden Portfolio Interface.webp"
                  ownership="concept"
                  status="prototype"
                  technologies={['HTML/Canvas', 'CSS Modules', 'Web Audio']}
                  href="https://dribbble.com"
                />
              </div>
            </div>

            {/* Pattern 2: ServiceCard */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-muted mb-4">Service Card Pattern</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ServiceCard
                  title="Websites & Web Experiences"
                  description="Flagship marketing sites, high-converting product landings, and performant web architecture."
                  icon={Monitor}
                  index="01"
                  to="/services"
                  deliverables={['Brand Flagship Sites', 'Performance Optimization', 'CMS & Custom Admin']}
                />
                <ServiceCard
                  title="Software & SaaS Development"
                  description="Multi-tenant platforms, data dashboards, customer portals, and mission-critical business software."
                  icon={Code2}
                  index="02"
                  to="/services"
                  deliverables={['SaaS Architecture', 'Realtime Dashboards', 'API & Database Integration']}
                />
                <ServiceCard
                  title="AI & Automation"
                  description="LLM integration, autonomous workflow pipelines, CRM sync, and operational efficiency tools."
                  icon={Sparkles}
                  index="03"
                  to="/services"
                  deliverables={['Agentic Workflows', 'Custom LLM Pipelines', 'Operational Automation']}
                />
              </div>
            </div>

            {/* Pattern 3: ProductPreviewCard */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-muted mb-4">Studio Product Preview Pattern</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProductPreviewCard
                  title="GRAVIT Flow"
                  tagline="Autonomous Pipeline Engine"
                  description="In-house workflow orchestrator that bridges webhooks, LLM reasoning, and database synchronizations with zero friction."
                  status="beta"
                  platform="Developer Platform"
                  to="/products"
                />
                <ProductPreviewCard
                  title="Studio Ledger"
                  tagline="Client Project Observability"
                  description="Transparent real-time delivery portal where clients track sprint velocity, architecture milestones, and production releases."
                  status="in-progress"
                  platform="SaaS Platform"
                  to="/products"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 08. Accessibility & Compliance Verification ──────── */}
        <section className="mb-10">
          <Card variant="canvas" padding="lg">
            <div className="flex items-start gap-4">
              <CheckCircle2 size={24} className="text-[#FF6A39] shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-heading font-semibold text-[#0A0A0F]">
                  Quality Gate: Design System Compliance
                </h4>
                <p className="mt-2 text-sm text-[#57575E] leading-relaxed">
                  Every component in this library satisfies the fixed GRAVIT brand guidelines:
                </p>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#0A0A0F]">
                  <li>✔ Space, Canvas, Nova & Ember tokens</li>
                  <li>✔ Contrast ratio &gt; 4.5:1 on text surfaces</li>
                  <li>✔ Accessible focus-visible rings with Ember accent</li>
                  <li>✔ Reduced-motion media query compatibility</li>
                  <li>✔ Zero decorative blur or gratuitous 3D meshes</li>
                  <li>✔ Clear distinction: Client vs. Product vs. Concept</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>
      </Container>
    </div>
  );
}
