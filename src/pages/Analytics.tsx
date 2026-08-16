import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimationFrame } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const METRICS = [
  { label: 'Sessions', val: 847293, suffix: '', bar: 0.91 },
  { label: 'Conversion Rate', val: 4.7, suffix: '%', bar: 0.47 },
  { label: 'Revenue', val: 184200, suffix: '', bar: 0.72, prefix: '$' },
  { label: 'Avg. Session', val: 3.4, suffix: 'min', bar: 0.34 },
  { label: 'Bounce Rate', val: 22, suffix: '%', bar: 0.22, inverse: true },
  { label: 'Pages/Session', val: 5.8, suffix: '', bar: 0.58 },
];

const FEATURES = [
  { title: 'Real-Time Dashboards', body: 'Live visitor counts, conversion funnels, and revenue attribution — all in one view.' },
  { title: 'Heatmap Integration', body: 'See exactly where users click, scroll, and abandon — built into your GRAVIT dashboard.' },
  { title: 'A/B Test Analytics', body: 'Statistical significance reporting for every variant. Know when a winner is real.' },
  { title: 'SEO Visibility Scores', body: 'Keyword rank tracking, Core Web Vitals, and crawl health — one panel, no connectors.' },
];

function AnimatedBar({ val, prefix, suffix, bar, inverse, label }: typeof METRICS[0] & { label: string }) {
  const [displayed, setDisplayed] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let start = 0;
    const end = val;
    const duration = 1200;
    const step = (end / duration) * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setDisplayed(end); clearInterval(timer); }
      else setDisplayed(start);
    }, 16);
    return () => clearInterval(timer);
  }, [val]);

  const display = val % 1 !== 0 ? displayed.toFixed(1) : Math.floor(displayed).toLocaleString();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col gap-3 border-b border-border pb-8"
    >
      <div className="flex items-end justify-between">
        <span className="font-mono text-xs uppercase tracking-widest text-secondary">{label}</span>
        <span className="text-2xl font-bold tracking-tight tabular-nums">
          {prefix}{display}{suffix && <span className="text-base font-normal text-secondary ml-1">{suffix}</span>}
        </span>
      </div>
      <div className="h-1 bg-border w-full">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${bar * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className={`h-full ${inverse ? 'bg-accent/60' : 'bg-primary'}`}
        />
      </div>
    </motion.div>
  );
}

export default function Analytics() {
  return (
    <div className="w-full bg-transparent text-primary font-sans min-h-screen overflow-x-hidden">
      <SEO title="Analytics — GRAVIT" description="Your website data, made actionable. Real-time dashboards built into every GRAVIT platform." path="/analytics" />

      {/* HERO — data dashboard aesthetic */}
      <section className="min-h-screen flex flex-col px-6 md:px-12 pt-36 pb-16 w-full max-w-[1800px] mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-xs uppercase tracking-widest text-secondary mb-10 block"
        >
          GRAVIT Analytics · Live Dashboard
        </motion.span>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,9.5vw,11rem)] font-bold tracking-tighter uppercase leading-[0.85]"
          >
            DATA THAT<br />DECIDES.
          </motion.h1>
        </div>

        {/* Simulated live graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-16 border border-border p-6"
        >
          {/* Graph header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-secondary">Live · Visitor Sessions</span>
            </div>
            <span className="font-mono text-xs text-secondary">Last 30 days</span>
          </div>
          {/* Bar chart */}
          <div className="flex items-end gap-1 h-24">
            {Array.from({ length: 30 }).map((_, i) => {
              const height = 20 + Math.abs(Math.sin(i * 0.8) * 60 + Math.cos(i * 0.3) * 20);
              return (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ delay: 0.8 + i * 0.025, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex-1 ${i === 29 ? 'bg-accent' : 'bg-primary/20'} hover:bg-primary/40 transition-colors cursor-default`}
                  title={`Day ${i + 1}`}
                />
              );
            })}
          </div>
          {/* X axis */}
          <div className="flex justify-between mt-3">
            <span className="font-mono text-[10px] text-secondary">Jul 15</span>
            <span className="font-mono text-[10px] text-secondary">Aug 14</span>
          </div>
        </motion.div>
      </section>

      {/* METRICS GRID */}
      <section className="border-t border-border px-6 md:px-12 py-24 w-full max-w-[1800px] mx-auto">
        <div className="flex items-end justify-between border-b border-border pb-12 mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">KEY METRICS</h2>
          <span className="font-mono text-xs uppercase tracking-widest text-secondary hidden md:block">Sample Data</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-16 gap-y-8">
          {METRICS.map(m => (
            <AnimatedBar key={m.label} {...m} />
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-t border-border px-6 md:px-12 py-24 w-full max-w-[1800px] mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9] border-b border-border pb-12 mb-0">
          WHAT'S BUILT IN
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px border-l border-border">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              className="border-b border-r border-border p-10 group hover:bg-primary/[0.02] transition-colors"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-secondary block mb-5">0{i + 1}</span>
              <h3 className="text-xl font-bold tracking-tight uppercase mb-4 group-hover:text-accent transition-colors">{f.title}</h3>
              <p className="text-secondary leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border px-6 md:px-12 py-32 w-full max-w-[1800px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">
          SEE YOUR SITE<br />CLEARLY.
        </h2>
        <Link to="/contact" className="bg-primary text-background px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors flex-shrink-0">
          Request a Demo →
        </Link>
      </section>
    </div>
  );
}
