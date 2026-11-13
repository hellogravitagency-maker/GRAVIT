import React from 'react';
import { Zap, Sparkles, Database, Send, Check, Bot } from 'lucide-react';
import type { CarouselItem } from '../framer/Infinite3DCarousel';

/* Hero "product windows": coded UI that shows what GRAVIT ships —
   automations, SaaS dashboards, production code, AI agents, fast sites.
   Card sizes follow the carousel: 260px (<640), 300px (sm), 340px (lg). */

const Row = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center justify-between text-[10px] sm:text-[11px]">
    <span className="text-white/50">{label}</span>
    <span className="font-mono text-white/90">
      {value} <span className="ml-1 text-[9px] text-emerald-400/90">GOOD</span>
    </span>
  </div>
);

/* ── 1. AI automation workflow ─────────────────────────────── */
const FLOW = [
  { Icon: Zap, tag: 'Trigger', label: 'New lead · Web form' },
  { Icon: Sparkles, tag: 'AI', label: 'Qualify & enrich · LLM' },
  { Icon: Database, tag: 'Action', label: 'Sync to CRM' },
  { Icon: Send, tag: 'Action', label: 'Notify sales · Slack' },
];

function AutomationFlow() {
  return (
    <div className="flex flex-col">
      {FLOW.map(({ Icon, tag, label }, i) => (
        <React.Fragment key={label}>
          <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-2.5 py-2">
            <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-lg ${tag === 'AI' ? 'bg-accent text-black' : 'bg-white/10 text-white'}`}>
              <Icon className="h-3.5 w-3.5" />
            </span>
            <div className="min-w-0">
              <div className="font-mono text-[9px] uppercase tracking-wider text-white/40">{tag}</div>
              <div className="truncate text-[11px] sm:text-xs font-medium text-white/90">{label}</div>
            </div>
            <Check className="ml-auto h-3.5 w-3.5 shrink-0 text-emerald-400/90" />
          </div>
          {i < FLOW.length - 1 && (
            <div className="relative mx-auto h-3 sm:h-4 w-px bg-white/15 overflow-visible">
              <span className="hc-anim hc-flow absolute -left-[2px] top-0 h-[5px] w-[5px] rounded-full bg-accent" style={{ animationDelay: `${i * 0.35}s` }} />
            </div>
          )}
        </React.Fragment>
      ))}
      <div className="mt-3 flex items-center gap-2 font-mono text-[10px] text-white/50">
        <span className="hc-anim hc-blink h-1.5 w-1.5 rounded-full bg-emerald-400" />
        Running · 1,284 runs · 0 errors
      </div>
    </div>
  );
}

/* ── 2. SaaS dashboard ─────────────────────────────────────── */
function SaasDashboard() {
  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-2">
        {[
          ['MRR', '$48.2k', '+12.4%'],
          ['Active users', '3,912', '+8.1%'],
        ].map(([k, v, d]) => (
          <div key={k} className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
            <div className="text-[10px] text-white/50">{k}</div>
            <div className="mt-0.5 text-base sm:text-lg font-semibold tracking-tight text-white">{v}</div>
            <div className="font-mono text-[9px] text-emerald-400/90">▲ {d}</div>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
        <div className="flex items-center justify-between text-[10px] text-white/50">
          <span>Revenue</span>
          <span className="font-mono">30D</span>
        </div>
        <svg viewBox="0 0 200 70" className="mt-2 h-16 sm:h-20 w-full" preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="hc-area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF6A39" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#FF6A39" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[17, 35, 52].map((y) => (
            <line key={y} x1="0" x2="200" y1={y} y2={y} stroke="white" strokeOpacity="0.06" />
          ))}
          <path d="M0 58 L20 52 L40 55 L60 44 L80 47 L100 36 L120 39 L140 27 L160 30 L180 18 L200 10 L200 70 L0 70 Z" fill="url(#hc-area)" />
          <path className="hc-anim hc-draw" d="M0 58 L20 52 L40 55 L60 44 L80 47 L100 36 L120 39 L140 27 L160 30 L180 18 L200 10" fill="none" stroke="#FF6A39" strokeWidth="2" vectorEffect="non-scaling-stroke" pathLength={1} />
        </svg>
      </div>
      <div className="flex items-end gap-1 h-8">
        {[40, 62, 48, 75, 58, 86, 70, 94, 80, 100].map((h, i) => (
          <span key={i} className="flex-1 rounded-sm bg-white/15" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}

/* ── 3. Code + deploy ──────────────────────────────────────── */
const K = ({ c }: { c: string }) => <span className="text-accent">{c}</span>;
const S = ({ c }: { c: string }) => <span className="text-emerald-300/90">{c}</span>;
const F = ({ c }: { c: string }) => <span className="text-sky-300/90">{c}</span>;

function CodeDeploy() {
  const lines: React.ReactNode[] = [
    <><K c="export async function" /> <F c="POST" />(req) {'{'}</>,
    <>  <K c="const" /> lead = <K c="await" /> req.<F c="json" />()</>,
    <>  <K c="const" /> score = <K c="await" /> ai.<F c="rank" />(lead)</>,
    <>  <K c="await" /> crm.<F c="upsert" />({'{'} ...lead, score {'}'})</>,
    <>  <K c="return" /> Response.<F c="json" />({'{'} ok: <S c="true" /> {'}'})</>,
    <>{'}'}</>,
  ];
  return (
    <div className="flex flex-col gap-2.5">
      <div className="rounded-xl border border-white/10 bg-white/[0.04] py-2 font-mono text-[8.5px] sm:text-[9.5px] lg:text-[10.5px] leading-[1.7] text-white/80 overflow-hidden">
        <div className="px-2.5 pb-1.5 mb-1.5 border-b border-white/10 text-[9px] text-white/40">api/leads/route.ts</div>
        {lines.map((l, i) => (
          <div key={i} className="flex whitespace-pre px-2.5">
            <span className="w-4 shrink-0 text-white/25 select-none">{i + 1}</span>
            <span>{l}</span>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-white/10 bg-black p-2.5 font-mono text-[9.5px] sm:text-[10.5px] leading-[1.8]">
        <div className="text-white/50">$ git push origin main</div>
        <div className="text-white/80"><span className="text-emerald-400">✓</span> Tests passed · 142/142</div>
        <div className="text-white/80"><span className="text-emerald-400">✓</span> Build complete · 38s</div>
        <div className="text-white">
          <span className="text-accent">▲</span> Live on production<span className="hc-anim hc-blink ml-0.5 inline-block h-3 w-1.5 translate-y-0.5 bg-white/80" />
        </div>
      </div>
    </div>
  );
}

/* ── 4. AI agent chat ──────────────────────────────────────── */
function AgentChat() {
  return (
    <div className="flex flex-col gap-2 text-[10.5px] sm:text-[11.5px] leading-snug">
      <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-white px-3 py-2 text-black">
        Can I move my demo to Friday?
      </div>
      <div className="flex items-start gap-2">
        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent text-black">
          <Bot className="h-3.5 w-3.5" />
        </span>
        <div className="flex flex-col gap-1.5">
          <div className="inline-flex w-fit items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 font-mono text-[9px] text-white/50">
            <Check className="h-3 w-3 text-emerald-400" /> calendar.reschedule() · 220ms
          </div>
          <div className="rounded-2xl rounded-tl-md border border-white/10 bg-white/[0.06] px-3 py-2 text-white/90">
            Done. You're booked for Fri, 3:00 PM and the invite is in your inbox.
          </div>
        </div>
      </div>
      <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-white px-3 py-2 text-black">
        Perfect, thanks!
      </div>
      <div className="flex items-center gap-2">
        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent text-black">
          <Bot className="h-3.5 w-3.5" />
        </span>
        <div className="flex gap-1 rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-2.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="hc-anim hc-dot h-1.5 w-1.5 rounded-full bg-white/70" style={{ animationDelay: `${i * 0.15}s` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── 5. Performance / Lighthouse ───────────────────────────── */
const Ring: React.FC<{ label: string }> = ({ label }) => {
  const r = 20;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative h-12 w-12 sm:h-14 sm:w-14">
        <svg viewBox="0 0 48 48" className="h-full w-full -rotate-90" aria-hidden>
          <circle cx="24" cy="24" r={r} fill="none" stroke="white" strokeOpacity="0.1" strokeWidth="3.5" />
          <circle className="hc-anim hc-ring" cx="24" cy="24" r={r} fill="none" stroke="#FF6A39" strokeWidth="3.5" strokeLinecap="round" strokeDasharray={c} style={{ ['--c' as string]: c }} />
        </svg>
        <span className="absolute inset-0 grid place-items-center font-mono text-xs sm:text-sm font-bold text-white">100</span>
      </div>
      <span className="text-[9px] sm:text-[10px] text-white/50 text-center leading-tight">{label}</span>
    </div>
  );
};

function Performance() {
  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-x-2 gap-y-2.5 rounded-xl border border-white/10 bg-white/[0.04] p-3">
        {['Performance', 'Accessibility', 'Best Practices', 'SEO'].map((l) => (
          <Ring key={l} label={l} />
        ))}
      </div>
      <div className="flex flex-col gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
        <Row label="Largest Contentful Paint" value="0.8s" />
        <Row label="Interaction to Next Paint" value="64ms" />
        <Row label="Cumulative Layout Shift" value="0.01" />
      </div>
    </div>
  );
}

/* ── 6. Real builds in a browser frame ─────────────────────── */
function SiteShot({ image, alt }: { image: string; alt: string }) {
  const src = (w: number) => encodeURI(image.replace('.webp', `-${w}w.webp`));
  return (
    <div className="hc-shot relative h-full w-full overflow-hidden rounded-xl border border-white/10">
      <img
        src={src(400)}
        srcSet={`${src(300)} 300w, ${src(400)} 400w, ${src(600)} 600w`}
        sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 320px"
        alt={alt}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="hc-anim hc-scroll h-full w-full object-cover object-top select-none pointer-events-none"
      />
    </div>
  );
}

export const HERO_ITEMS: CarouselItem[] = [
  { id: 'automation', category: 'AI Automation', title: 'Lead-to-CRM pipeline', link: '/services', content: <AutomationFlow /> },
  { id: 'saas', category: 'SaaS Product', title: 'Subscription analytics', link: '/services', content: <SaasDashboard /> },
  { id: 'velora', category: 'E-Commerce Engineering', title: 'VÉLORA luxury commerce', link: '/work', fill: true, content: <SiteShot image="/images/VÉLORA Style Moves With You.webp" alt="VÉLORA luxury e-commerce build" /> },
  { id: 'code', category: 'Full-stack Engineering', title: 'API to production in minutes', link: '/services', content: <CodeDeploy /> },
  { id: 'agent', category: 'AI Agents', title: 'Support agent with real actions', link: '/services', content: <AgentChat /> },
  { id: 'shadow', category: 'Web Development', title: 'Shadow Garden portfolio', link: '/work', fill: true, content: <SiteShot image="/images/Shadow Garden Portfolio Interface.webp" alt="Shadow Garden portfolio website build" /> },
  { id: 'vitals', category: 'Performance', title: 'Perfect Core Web Vitals', link: '/services', content: <Performance /> },
];
