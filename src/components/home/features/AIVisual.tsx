import React, { useState, useEffect } from 'react';
import { motion, MotionValue, useTransform, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Sparkles, 
  Database, 
  Send, 
  Check, 
  Play,
  RotateCw,
  GitBranch,
  Layers,
  Cpu,
  ShieldCheck,
  Workflow,
  CheckCircle2,
  Lock,
  Server,
  UserCheck
} from 'lucide-react';

interface AIVisualProps {
  isActive: boolean;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

type TabType = 'motion' | 'tools' | 'patterns';

interface ToolItem {
  id: string;
  name: string;
  role: string;
  badge: string;
  description: string;
  metrics: string;
  tech: string;
}

const TOOLS: ToolItem[] = [
  {
    id: 'langgraph',
    name: 'LangGraph',
    role: 'Multi-Agent State Orchestrator',
    badge: 'Agent Core',
    description: 'Code-first stateful multi-agent workflows with cyclic loops, memory persistence, and supervisor routing.',
    metrics: 'Cyclic Graph Reasoning',
    tech: 'Python / TypeScript · LangChain',
  },
  {
    id: 'temporal',
    name: 'Temporal.io',
    role: 'Durable Execution Engine',
    badge: 'Reliability',
    description: 'Guarantees execution survives LLM rate limits, network blips, and server reboots with zero state loss.',
    metrics: '100% Guaranteed Delivery',
    tech: 'Distributed State Machine',
  },
  {
    id: 'n8n',
    name: 'n8n Enterprise',
    role: 'Integration & SaaS Fabric',
    badge: 'API Hub',
    description: 'Low-latency workflow glue connecting AI agents to 1,000+ enterprise endpoints, CRMs, and databases.',
    metrics: '1,000+ Pre-built Integrations',
    tech: 'Self-Hosted VPC / Cloud',
  },
  {
    id: 'pgvector',
    name: 'pgvector / Supabase',
    role: 'Hybrid Retrieval Engine',
    badge: 'RAG Store',
    description: 'High-performance vector storage combining semantic embeddings with sparse BM25 keyword matching.',
    metrics: 'Sub-10ms Vector Search',
    tech: 'PostgreSQL · HNSW Indexing',
  },
];

interface PatternItem {
  id: string;
  name: string;
  icon: React.ElementType;
  tag: string;
  summary: string;
  implementation: string;
}

const PATTERNS: PatternItem[] = [
  {
    id: 'supervisor',
    name: 'Supervisor-Worker Pattern',
    icon: Workflow,
    tag: 'Orchestration',
    summary: 'A central planner evaluates incoming tasks and delegates to specialized sub-agents with strict bounds.',
    implementation: 'Built with LangGraph cyclic state graphs; prevents context pollution and improves tool accuracy.',
  },
  {
    id: 'guardrails',
    name: 'Deterministic Guardrails',
    icon: ShieldCheck,
    tag: 'Reliability',
    summary: 'Wraps non-deterministic model outputs in strict Zod/Pydantic schemas before executing API writes.',
    implementation: 'Runtime schema enforcement + PII scrubbing; zero unvalidated code or query execution.',
  },
  {
    id: 'hitl',
    name: 'Human-in-the-Loop (HITL)',
    icon: UserCheck,
    tag: 'Governance',
    summary: 'Serializes state and pauses execution on high-stakes actions (contracts, payments, outbound bulk emails).',
    implementation: 'Slack & dashboard approval gates with instant resume on sign-off.',
  },
  {
    id: 'checkpointing',
    name: 'Durable State Checkpoints',
    icon: Database,
    tag: 'Fault Tolerance',
    summary: 'Persists execution state at every node transition, enabling replayability and graceful retries.',
    implementation: 'Temporal activity checkpoints + PostgreSQL WAL replication for audit compliance.',
  },
];

export default function AIVisual({ isActive, mouseX, mouseY }: AIVisualProps) {
  const [activeTab, setActiveTab] = useState<TabType>('motion');
  const [cycle, setCycle] = useState(0);
  const [activeStage, setActiveStage] = useState<number>(0); // 0: Webhook Ingest, 1: AI Supervisor, 2: Guardrails, 3: CRM/Slack Dispatch
  const [selectedTool, setSelectedTool] = useState<ToolItem>(TOOLS[0]);
  const [selectedPattern, setSelectedPattern] = useState<PatternItem>(PATTERNS[0]);

  // Spring Parallax
  const uiX = useTransform(mouseX, [0, 1], [-4, 4]);
  const uiY = useTransform(mouseY, [0, 1], [-4, 4]);

  // Kinetic Motion Cycle
  useEffect(() => {
    if (!isActive || activeTab !== 'motion') return;

    let t1: NodeJS.Timeout;
    let t2: NodeJS.Timeout;
    let t3: NodeJS.Timeout;

    const runMotion = () => {
      setActiveStage(0); // Webhook trigger
      t1 = setTimeout(() => setActiveStage(1), 850); // AI Supervisor
      t2 = setTimeout(() => setActiveStage(2), 1750); // Guardrails
      t3 = setTimeout(() => setActiveStage(3), 2600); // CRM & Slack
    };

    runMotion();
    const interval = setInterval(() => {
      setCycle((c) => c + 1);
      runMotion();
    }, 4400);

    return () => {
      clearInterval(interval);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isActive, activeTab]);

  const replayFlow = () => {
    setActiveStage(0);
    setTimeout(() => setActiveStage(1), 850);
    setTimeout(() => setActiveStage(2), 1750);
    setTimeout(() => setActiveStage(3), 2600);
  };

  return (
    <div className="relative w-full h-full min-h-[350px] md:min-h-[390px] flex flex-col justify-between overflow-hidden rounded-2xl bg-surface/90 border border-border-subtle p-4 sm:p-5 select-none transition-colors duration-300">
      
      {/* ── Top Header / Tab Switcher ───────────────────────────────── */}
      <div className="relative z-20 flex flex-wrap items-center justify-between gap-2 border-b border-border-subtle pb-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping motion-reduce:hidden" />
            <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-mono text-xs font-semibold text-primary">
            Autonomous Pipeline Architecture
          </span>
        </div>

        {/* 3 Interactive Mode Tabs */}
        <div className="flex items-center p-0.5 rounded-lg bg-surface border border-border-subtle font-mono text-[10.5px]">
          <button
            onClick={() => setActiveTab('motion')}
            className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
              activeTab === 'motion'
                ? 'bg-surface-hover text-primary font-bold shadow-sm'
                : 'text-muted hover:text-secondary'
            }`}
          >
            Live Flow
          </button>
          <button
            onClick={() => setActiveTab('tools')}
            className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
              activeTab === 'tools'
                ? 'bg-surface-hover text-primary font-bold shadow-sm'
                : 'text-muted hover:text-secondary'
            }`}
          >
            Tools & Stack
          </button>
          <button
            onClick={() => setActiveTab('patterns')}
            className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
              activeTab === 'patterns'
                ? 'bg-surface-hover text-primary font-bold shadow-sm'
                : 'text-muted hover:text-secondary'
            }`}
          >
            Patterns
          </button>
        </div>
      </div>

      {/* ── Main Interactive Content Area ──────────────────────────── */}
      <motion.div
        style={{ x: uiX, y: uiY }}
        className="relative z-10 w-full flex-1 my-3 flex flex-col justify-center"
      >
        <AnimatePresence mode="wait">
          
          {/* ── TAB 1: KINETIC MOTION FLOW ─────────────────────────── */}
          {activeTab === 'motion' && (
            <motion.div
              key="tab-motion"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="relative w-full h-[220px] sm:h-[240px]"
            >
              {/* SVG Conduits connecting nodes */}
              <svg 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none" 
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
              >
                {/* Path 1: Ingest (12, 50) -> Supervisor (38, 50) */}
                <path
                  d="M 12 50 L 38 50"
                  fill="none"
                  className={activeStage >= 0 ? 'stroke-primary/50' : 'stroke-border'}
                  strokeWidth="1.5"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="4 4"
                />

                {/* Path 2: Supervisor (38, 50) -> Guardrail (64, 50) */}
                <path
                  d="M 38 50 L 64 50"
                  fill="none"
                  className={activeStage >= 1 ? 'stroke-primary/50' : 'stroke-border'}
                  strokeWidth="1.5"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="4 4"
                />

                {/* Path 3A: Guardrail (64, 50) -> CRM Sync (88, 28) */}
                <path
                  d="M 64 50 C 76 50, 76 28, 88 28"
                  fill="none"
                  className={activeStage >= 2 ? 'stroke-primary/50' : 'stroke-border'}
                  strokeWidth="1.5"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="4 4"
                />

                {/* Path 3B: Guardrail (64, 50) -> Slack Dispatch (88, 72) */}
                <path
                  d="M 64 50 C 76 50, 76 72, 88 72"
                  fill="none"
                  className={activeStage >= 2 ? 'stroke-primary/50' : 'stroke-border'}
                  strokeWidth="1.5"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="4 4"
                />

                {/* Flowing Packets */}
                {isActive && (
                  <>
                    {/* Packet 1: Ingest -> Supervisor */}
                    <motion.circle
                      key={`pkt1-${cycle}`}
                      r="3.5"
                      fill="#FF6A39"
                      vectorEffect="non-scaling-stroke"
                      initial={{ cx: 12, cy: 50, opacity: 0 }}
                      animate={{
                        cx: [12, 25, 38],
                        cy: [50, 50, 50],
                        opacity: [0, 1, 1, 0],
                      }}
                      transition={{ duration: 0.85, ease: 'easeInOut' }}
                    />

                    {/* Packet 2: Supervisor -> Guardrail */}
                    <motion.circle
                      key={`pkt2-${cycle}`}
                      r="3.5"
                      fill="#FF6A39"
                      vectorEffect="non-scaling-stroke"
                      initial={{ cx: 38, cy: 50, opacity: 0 }}
                      animate={{
                        cx: [38, 51, 64],
                        cy: [50, 50, 50],
                        opacity: [0, 1, 1, 0],
                      }}
                      transition={{ duration: 0.9, delay: 0.85, ease: 'easeInOut' }}
                    />

                    {/* Packet 3A: Guardrail -> CRM */}
                    <motion.circle
                      key={`pkt3a-${cycle}`}
                      r="2.8"
                      fill="#FF6A39"
                      vectorEffect="non-scaling-stroke"
                      initial={{ cx: 64, cy: 50, opacity: 0 }}
                      animate={{
                        cx: [64, 76, 88],
                        cy: [50, 36, 28],
                        opacity: [0, 1, 1, 0],
                      }}
                      transition={{ duration: 0.85, delay: 1.75, ease: 'easeInOut' }}
                    />

                    {/* Packet 3B: Guardrail -> Slack */}
                    <motion.circle
                      key={`pkt3b-${cycle}`}
                      r="2.8"
                      fill="#FF6A39"
                      vectorEffect="non-scaling-stroke"
                      initial={{ cx: 64, cy: 50, opacity: 0 }}
                      animate={{
                        cx: [64, 76, 88],
                        cy: [50, 64, 72],
                        opacity: [0, 1, 1, 0],
                      }}
                      transition={{ duration: 0.85, delay: 1.75, ease: 'easeInOut' }}
                    />
                  </>
                )}
              </svg>

              {/* Node 1: Ingest (Webhook) */}
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                style={{ left: '12%', top: '50%' }}
              >
                <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                  activeStage === 0
                    ? 'border-[#FF6A39] bg-surface text-[#FF6A39] scale-105 shadow-sm'
                    : 'border-border bg-surface text-secondary'
                }`}>
                  <Zap size={16} />
                </div>
                <div className="mt-1 text-center">
                  <span className="block font-mono text-[8.5px] uppercase tracking-wider font-semibold text-primary whitespace-nowrap">
                    Ingest
                  </span>
                  <span className="font-mono text-[7.5px] text-muted">Webhook</span>
                </div>
              </div>

              {/* Node 2: Supervisor (LangGraph) */}
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                style={{ left: '38%', top: '50%' }}
              >
                {activeStage === 1 && (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0.8 }}
                    animate={{ scale: 1.35, opacity: 0 }}
                    transition={{ duration: 0.85 }}
                    className="absolute inset-0 rounded-2xl border border-[#FF6A39] pointer-events-none"
                  />
                )}
                <div className={`w-12 h-12 sm:w-13 sm:h-13 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 ${
                  activeStage === 1
                    ? 'border-[#FF6A39] bg-surface text-[#FF6A39] scale-105 shadow-sm'
                    : 'border-border bg-surface text-primary'
                }`}>
                  <Sparkles size={20} className={activeStage === 1 ? 'text-[#FF6A39]' : 'text-primary'} />
                </div>
                <div className="mt-1 text-center">
                  <span className="block font-mono text-[9px] uppercase tracking-wider font-bold text-primary whitespace-nowrap">
                    Supervisor
                  </span>
                  <span className="font-mono text-[7.5px] text-[#FF6A39]">LangGraph</span>
                </div>
              </div>

              {/* Node 3: Guardrail (Zod Schema) */}
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                style={{ left: '64%', top: '50%' }}
              >
                <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                  activeStage === 2
                    ? 'border-[#FF6A39] bg-surface text-[#FF6A39] scale-105 shadow-sm'
                    : 'border-border bg-surface text-secondary'
                }`}>
                  <ShieldCheck size={16} />
                </div>
                <div className="mt-1 text-center">
                  <span className="block font-mono text-[8.5px] uppercase tracking-wider font-semibold text-primary whitespace-nowrap">
                    Guardrails
                  </span>
                  <span className="font-mono text-[7.5px] text-muted">Schema Validation</span>
                </div>
              </div>

              {/* Node 4A: CRM Sync (Temporal / HubSpot) */}
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                style={{ left: '88%', top: '28%' }}
              >
                <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                  activeStage >= 3
                    ? 'border-emerald-500 bg-surface text-emerald-500 scale-105 shadow-sm'
                    : 'border-border bg-surface text-secondary'
                }`}>
                  <Database size={16} />
                </div>
                <div className="mt-1 text-center">
                  <span className="block font-mono text-[8.5px] uppercase tracking-wider font-semibold text-primary whitespace-nowrap">
                    HubSpot CRM
                  </span>
                  <span className="font-mono text-[7.5px] text-muted">Temporal Sync</span>
                </div>
              </div>

              {/* Node 4B: Slack Alert (n8n Dispatch) */}
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                style={{ left: '88%', top: '72%' }}
              >
                <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                  activeStage >= 3
                    ? 'border-emerald-500 bg-surface text-emerald-500 scale-105 shadow-sm'
                    : 'border-border bg-surface text-secondary'
                }`}>
                  <Send size={16} />
                </div>
                <div className="mt-1 text-center">
                  <span className="block font-mono text-[8.5px] uppercase tracking-wider font-semibold text-primary whitespace-nowrap">
                    Slack #sales
                  </span>
                  <span className="font-mono text-[7.5px] text-muted">n8n Webhook</span>
                </div>
              </div>

            </motion.div>
          )}

          {/* ── TAB 2: TOOLS & STACK ─────────────────────────────────── */}
          {activeTab === 'tools' && (
            <motion.div
              key="tab-tools"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col gap-2.5 py-1"
            >
              <div className="grid grid-cols-2 gap-2">
                {TOOLS.map((tool) => {
                  const isSelected = selectedTool.id === tool.id;
                  return (
                    <div
                      key={tool.id}
                      onClick={() => setSelectedTool(tool)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? 'border-[#FF6A39] bg-surface-hover/90 shadow-sm'
                          : 'border-border bg-surface hover:border-border'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-xs sm:text-sm text-primary">
                          {tool.name}
                        </span>
                        <span className="font-mono text-[8.5px] uppercase font-bold text-[#FF6A39] px-1.5 py-0.5 rounded bg-[#FF6A39]/10 border border-[#FF6A39]/20">
                          {tool.badge}
                        </span>
                      </div>
                      <div className="font-mono text-[9px] text-muted truncate">
                        {tool.role}
                      </div>
                      <p className="text-[10px] sm:text-[11px] text-secondary line-clamp-2 mt-1">
                        {tool.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* ── TAB 3: TECHNIQUES & PATTERNS ─────────────────────────── */}
          {activeTab === 'patterns' && (
            <motion.div
              key="tab-patterns"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col gap-2 py-1"
            >
              <div className="grid grid-cols-2 gap-2">
                {PATTERNS.map((pat) => {
                  const isSelected = selectedPattern.id === pat.id;
                  const Icon = pat.icon;
                  return (
                    <div
                      key={pat.id}
                      onClick={() => setSelectedPattern(pat)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? 'border-[#FF6A39] bg-surface-hover/90 shadow-sm'
                          : 'border-border bg-surface hover:border-border'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Icon size={14} className={isSelected ? 'text-[#FF6A39]' : 'text-primary'} />
                        <span className="font-semibold text-xs sm:text-[13px] text-primary truncate">
                          {pat.name}
                        </span>
                      </div>
                      <p className="text-[10px] sm:text-[11px] text-secondary line-clamp-2">
                        {pat.summary}
                      </p>
                      <div className="mt-1 font-mono text-[8.5px] text-muted truncate">
                        {pat.tag} · {pat.implementation}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </motion.div>

      {/* ── Bottom Telemetry & Replay Action ────────────────────────── */}
      <div className="relative z-20 mt-1 p-2.5 sm:p-3 border border-border-subtle bg-surface-hover/70 backdrop-blur rounded-xl flex items-center justify-between text-xs">
        {activeTab === 'motion' && (
          <>
            <div className="flex items-center gap-2 min-w-0">
              <span className="shrink-0 font-mono text-[9px] uppercase font-bold text-[#FF6A39] px-1.5 py-0.5 rounded bg-[#FF6A39]/10 border border-[#FF6A39]/20">
                {activeStage === 0 && 'Stage 1'}
                {activeStage === 1 && 'Stage 2'}
                {activeStage === 2 && 'Stage 3'}
                {activeStage === 3 && 'Stage 4'}
              </span>
              <span className="font-mono text-[11px] text-secondary truncate">
                {activeStage === 0 && 'Webhook event parsed: POST /api/inbound/lead'}
                {activeStage === 1 && 'LangGraph supervisor extracts intent & routes task'}
                {activeStage === 2 && 'Deterministic Zod schema verified · 0 policy violations'}
                {activeStage === 3 && 'Temporal workflow: HubSpot updated & Slack channel pinged'}
              </span>
            </div>
            <button
              onClick={replayFlow}
              className="inline-flex items-center gap-1 font-mono text-[10px] text-secondary hover:text-[#FF6A39] transition-colors cursor-pointer shrink-0 ml-2"
            >
              <RotateCw size={11} /> Replay
            </button>
          </>
        )}

        {activeTab === 'tools' && (
          <>
            <div className="flex items-center gap-2 min-w-0">
              <span className="shrink-0 font-mono text-[9px] uppercase font-bold text-[#FF6A39] px-1.5 py-0.5 rounded bg-[#FF6A39]/10 border border-[#FF6A39]/20">
                {selectedTool.name}
              </span>
              <span className="text-[11px] text-secondary truncate">
                {selectedTool.metrics} · {selectedTool.tech}
              </span>
            </div>
            <span className="font-mono text-[10px] text-emerald-400 font-medium shrink-0 flex items-center gap-1">
              <CheckCircle2 size={11} /> Production Ready
            </span>
          </>
        )}

        {activeTab === 'patterns' && (
          <>
            <div className="flex items-center gap-2 min-w-0">
              <span className="shrink-0 font-mono text-[9px] uppercase font-bold text-[#FF6A39] px-1.5 py-0.5 rounded bg-[#FF6A39]/10 border border-[#FF6A39]/20">
                {selectedPattern.tag}
              </span>
              <span className="text-[11px] text-secondary truncate">
                {selectedPattern.implementation}
              </span>
            </div>
            <span className="font-mono text-[10px] text-emerald-400 font-medium shrink-0 flex items-center gap-1">
              <CheckCircle2 size={11} /> Verified
            </span>
          </>
        )}
      </div>

    </div>
  );
}
