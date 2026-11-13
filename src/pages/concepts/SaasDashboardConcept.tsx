import React, { useState, useEffect } from 'react';
import { 
  BarChart3, Activity, Server, Zap, Shield, Globe, Terminal, 
  RefreshCw, CheckCircle2, AlertTriangle, Play, ChevronDown, 
  ExternalLink, Code, Layers, Users, Key, Settings
} from 'lucide-react';
import ConceptFloatingNav from '../../components/concepts/ConceptFloatingNav';
import SEO from '../../components/SEO';

interface ApiEvent {
  id: string;
  endpoint: string;
  method: 'GET' | 'POST' | 'PUT';
  status: 200 | 201 | 429 | 500;
  latency: string;
  timestamp: string;
  ip: string;
}

const INITIAL_EVENTS: ApiEvent[] = [
  { id: 'ev-1', endpoint: '/v2/telemetry/ingest', method: 'POST', status: 201, latency: '12ms', timestamp: 'Just now', ip: '198.51.100.42' },
  { id: 'ev-2', endpoint: '/v1/models/generate', method: 'POST', status: 200, latency: '184ms', timestamp: '2s ago', ip: '203.0.113.19' },
  { id: 'ev-3', endpoint: '/v2/billing/usage', method: 'GET', status: 200, latency: '8ms', timestamp: '4s ago', ip: '192.0.2.88' },
  { id: 'ev-4', endpoint: '/v1/auth/verify', method: 'POST', status: 200, latency: '14ms', timestamp: '7s ago', ip: '198.51.100.12' },
  { id: 'ev-5', endpoint: '/v2/clusters/scale', method: 'POST', status: 200, latency: '42ms', timestamp: '11s ago', ip: '203.0.113.5' },
  { id: 'ev-6', endpoint: '/v2/stream/sync', method: 'GET', status: 200, latency: '19ms', timestamp: '14s ago', ip: '192.0.2.14' }
];

export default function SaasDashboardConcept() {
  const [timeframe, setTimeframe] = useState<'24H' | '7D' | '30D'>('7D');
  const [activeTab, setActiveTab] = useState<'overview' | 'telemetry' | 'pipelines' | 'apikeys'>('overview');
  const [events, setEvents] = useState<ApiEvent[]>(INITIAL_EVENTS);
  const [isSimulating, setIsSimulating] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<ApiEvent | null>(null);

  const triggerSyntheticLoad = () => {
    setIsSimulating(true);
    const newEvent: ApiEvent = {
      id: `ev-${Date.now()}`,
      endpoint: '/v2/telemetry/ingest',
      method: 'POST',
      status: Math.random() > 0.9 ? 429 : 201,
      latency: `${Math.floor(Math.random() * 25 + 8)}ms`,
      timestamp: 'Just now',
      ip: `198.51.${Math.floor(Math.random() * 200)}.${Math.floor(Math.random() * 200)}`
    };
    setEvents((prev) => [newEvent, ...prev.slice(0, 7)]);
    setTimeout(() => setIsSimulating(false), 600);
  };

  return (
    <div className="min-h-screen bg-[#090A0F] text-[#ECEFF5] font-sans antialiased selection:bg-[#6366F1] selection:text-white">
      <SEO 
        title="STRATA Analytics | Cloud Telemetry & Revenue Infrastructure" 
        description="Unified enterprise observability, real-time query telemetry, and API rate-governance dashboard."
      />

      {/* ── Top Workspace Header ─────────────────────────────── */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#090A0F]/90 backdrop-blur-xl">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6366F1] text-white font-bold text-sm shadow-md shadow-[#6366F1]/30">
                S
              </span>
              <span className="font-bold text-white tracking-wider text-sm">STRATA</span>
              <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-mono text-white/60">CLOUD v4.2</span>
            </div>

            <div className="hidden sm:flex items-center gap-2 border-l border-white/10 pl-6 text-xs text-white/60">
              <span>Workspace:</span>
              <span className="font-medium text-white flex items-center gap-1">
                Acme Global Enterprise <ChevronDown size={12} className="text-white/40" />
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="hidden md:flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>US-EAST-1 · 14ms latency</span>
            </div>

            <button
              onClick={triggerSyntheticLoad}
              disabled={isSimulating}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#6366F1] px-3.5 py-1.5 text-xs font-medium text-white hover:bg-[#5254db] transition-colors"
            >
              <Play size={11} className={isSimulating ? 'animate-spin' : ''} />
              <span>Simulate Query</span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Dashboard Layout (Sidebar + Main Grid) ────────────── */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-56 shrink-0 border-r border-white/10 bg-[#0C0E14] hidden lg:block min-h-[calc(100vh-57px)] p-4 text-xs">
          <div className="text-[10px] uppercase tracking-wider text-white/40 font-mono mb-2 px-2">Telemetrics</div>
          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all ${
                activeTab === 'overview' ? 'bg-[#6366F1] text-white font-medium' : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <BarChart3 size={15} />
              <span>Overview</span>
            </button>
            <button
              onClick={() => setActiveTab('telemetry')}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all ${
                activeTab === 'telemetry' ? 'bg-[#6366F1] text-white font-medium' : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <Activity size={15} />
              <span>Live Ingest</span>
            </button>
            <button
              onClick={() => setActiveTab('pipelines')}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all ${
                activeTab === 'pipelines' ? 'bg-[#6366F1] text-white font-medium' : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <Layers size={15} />
              <span>Pipelines</span>
            </button>
            <button
              onClick={() => setActiveTab('apikeys')}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all ${
                activeTab === 'apikeys' ? 'bg-[#6366F1] text-white font-medium' : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <Key size={15} />
              <span>API Credentials</span>
            </button>
          </nav>

          <div className="mt-8 text-[10px] uppercase tracking-wider text-white/40 font-mono mb-2 px-2">Infrastructure</div>
          <div className="space-y-2 px-2">
            <div className="p-2.5 rounded-xl border border-white/10 bg-white/[0.02]">
              <div className="flex justify-between text-[11px] text-white/60">
                <span>Cluster Health</span>
                <span className="text-emerald-400 font-mono">100%</span>
              </div>
              <div className="mt-1.5 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-400 w-full" />
              </div>
            </div>
            <div className="p-2.5 rounded-xl border border-white/10 bg-white/[0.02]">
              <div className="flex justify-between text-[11px] text-white/60">
                <span>Memory Quota</span>
                <span className="text-white/90 font-mono">38.4 / 64 GB</span>
              </div>
              <div className="mt-1.5 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#6366F1] w-[60%]" />
              </div>
            </div>
          </div>
        </aside>

        {/* Main Dashboard Canvas */}
        <main className="flex-1 p-6 md:p-8 max-w-7xl">
          {/* Key Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="p-5 rounded-2xl border border-white/10 bg-[#10121A]">
              <div className="flex items-center justify-between text-xs text-white/50">
                <span>Total Ingest Volume</span>
                <Zap size={14} className="text-[#6366F1]" />
              </div>
              <div className="text-2xl font-bold text-white mt-2 font-mono">48.24M</div>
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 mt-2 font-mono">
                <span>▲ +18.4%</span>
                <span className="text-white/40">vs last 7d</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-white/10 bg-[#10121A]">
              <div className="flex items-center justify-between text-xs text-white/50">
                <span>P-99 Service Latency</span>
                <Activity size={14} className="text-emerald-400" />
              </div>
              <div className="text-2xl font-bold text-white mt-2 font-mono">14.2 ms</div>
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 mt-2 font-mono">
                <span>▼ -3.1 ms</span>
                <span className="text-white/40">optimized</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-white/10 bg-[#10121A]">
              <div className="flex items-center justify-between text-xs text-white/50">
                <span>Active Compute Nodes</span>
                <Server size={14} className="text-indigo-400" />
              </div>
              <div className="text-2xl font-bold text-white mt-2 font-mono">128 / 128</div>
              <div className="flex items-center gap-1.5 text-[11px] text-white/50 mt-2 font-mono">
                <span>4 Multi-Regions Active</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-white/10 bg-[#10121A]">
              <div className="flex items-center justify-between text-xs text-white/50">
                <span>Platform SLA Uptime</span>
                <Shield size={14} className="text-emerald-400" />
              </div>
              <div className="text-2xl font-bold text-white mt-2 font-mono">99.998%</div>
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 mt-2 font-mono">
                <span>Zero Outages in 180D</span>
              </div>
            </div>
          </div>

          {/* Interactive Chart Section */}
          <div className="p-6 rounded-2xl border border-white/10 bg-[#10121A] mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-base font-semibold text-white">Global Telemetry Flow & Events Throughput</h3>
                <p className="text-xs text-white/50 mt-0.5">Real-time edge ingestion rates sampled at 1-second intervals</p>
              </div>

              <div className="flex items-center gap-1 border border-white/10 rounded-xl p-1 bg-white/5">
                {(['24H', '7D', '30D'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTimeframe(t)}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                      timeframe === t ? 'bg-[#6366F1] text-white font-medium' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* SVG Area Chart */}
            <div className="h-52 w-full">
              <svg viewBox="0 0 1000 240" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366F1" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Horizontal Grid lines */}
                {[40, 90, 140, 190].map((y) => (
                  <line key={y} x1="0" y1={y} x2="1000" y2={y} stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                ))}
                {/* Chart Area */}
                <path
                  d="M0,200 C150,180 200,90 350,110 C500,130 550,50 700,70 C850,90 900,30 1000,40 L1000,240 L0,240 Z"
                  fill="url(#chartGradient)"
                />
                {/* Chart Line */}
                <path
                  d="M0,200 C150,180 200,90 350,110 C500,130 550,50 700,70 C850,90 900,30 1000,40"
                  fill="none"
                  stroke="#6366F1"
                  strokeWidth="3"
                />
                {/* Highlight Point */}
                <circle cx="700" cy="70" r="5" fill="#6366F1" stroke="#FFFFFF" strokeWidth="2" />
              </svg>
            </div>

            <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-white/40 border-t border-white/5 pt-3">
              <span>Nov 05 (00:00 UTC)</span>
              <span>Nov 08 (12:00 UTC)</span>
              <span>Nov 12 (Live Stream)</span>
            </div>
          </div>

          {/* Live Ingestion Log Table */}
          <div className="p-6 rounded-2xl border border-white/10 bg-[#10121A]">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-semibold text-white">Live Ingestion Stream</h3>
                <p className="text-xs text-white/50">Click any row to inspect HTTP payload envelope</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-white/60">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Streaming live</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-white/40 font-mono uppercase text-[10px]">
                    <th className="pb-3">Method</th>
                    <th className="pb-3">Endpoint</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3">Latency</th>
                    <th className="pb-3">Origin IP</th>
                    <th className="pb-3 text-right">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-mono">
                  {events.map((ev) => (
                    <tr
                      key={ev.id}
                      onClick={() => setSelectedEvent(ev)}
                      className="hover:bg-white/[0.03] transition-colors cursor-pointer group"
                    >
                      <td className="py-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          ev.method === 'POST' ? 'bg-indigo-500/20 text-indigo-300' : 'bg-emerald-500/20 text-emerald-300'
                        }`}>
                          {ev.method}
                        </span>
                      </td>
                      <td className="py-3 font-medium text-white group-hover:text-[#6366F1] transition-colors">
                        {ev.endpoint}
                      </td>
                      <td className="py-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] ${
                          ev.status === 200 || ev.status === 201 
                            ? 'bg-emerald-500/10 text-emerald-400' 
                            : 'bg-amber-500/10 text-amber-400'
                        }`}>
                          {ev.status}
                        </span>
                      </td>
                      <td className="py-3 text-white/70">{ev.latency}</td>
                      <td className="py-3 text-white/50">{ev.ip}</td>
                      <td className="py-3 text-right text-white/40">{ev.timestamp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* JSON Payload Inspector Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-2xl border border-white/15 bg-[#12141D] p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2">
                <Terminal size={16} className="text-[#6366F1]" />
                <h4 className="text-sm font-mono font-semibold text-white">Event Telemetry Envelope</h4>
              </div>
              <button onClick={() => setSelectedEvent(null)} className="text-white/60 hover:text-white">✕</button>
            </div>

            <pre className="p-4 rounded-xl bg-black/60 border border-white/10 text-xs font-mono text-emerald-400 overflow-x-auto leading-relaxed">
{JSON.stringify({
  id: selectedEvent.id,
  endpoint: selectedEvent.endpoint,
  method: selectedEvent.method,
  status: selectedEvent.status,
  latency_ms: selectedEvent.latency,
  caller_ip: selectedEvent.ip,
  edge_node: "us-east-1a-prod",
  tls_version: "TLS 1.3",
  headers: {
    "content-type": "application/json",
    "x-rate-limit-remaining": "4891"
  }
}, null, 2)}
            </pre>

            <button
              onClick={() => setSelectedEvent(null)}
              className="mt-5 w-full rounded-xl bg-[#6366F1] py-2.5 text-xs font-medium text-white hover:bg-[#5254db]"
            >
              Close Inspector
            </button>
          </div>
        </div>
      )}

      {/* Floating GRAVIT Return Pill */}
      <ConceptFloatingNav 
        conceptName="STRATA SaaS Telemetry Dashboard" 
        category="SaaS · B2B · Tech"
        dribbbleUrl="https://dribbble.com/shots/26625291-Business-Dashboard-Web-App"
      />
    </div>
  );
}
