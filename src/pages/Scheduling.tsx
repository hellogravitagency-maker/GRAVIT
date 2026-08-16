import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const DAYS = ['MON 18', 'TUE 19', 'WED 20', 'THU 21', 'FRI 22'];
const SLOTS = ['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'];

const FEATURES = [
  { num: '01', title: 'Real-Time 2-Way Calendar Sync', desc: 'Instant bidirectional synchronization with Google Calendar, Outlook, and Apple iCal to prevent double-booking.' },
  { num: '02', title: 'Automated Buffer Protection', desc: 'Custom pre-meeting prep windows and post-meeting digest buffers so your team never burn out.' },
  { num: '03', title: 'Custom Intake Questionnaires', desc: 'Gather mandatory client context, project briefs, or asset uploads before a session is confirmed.' },
  { num: '04', title: 'Integrated Deposit Collection', desc: 'Require partial or full consultation fee deposits via Stripe at the moment of booking.' },
];

export default function Scheduling() {
  const [selectedDay, setSelectedDay] = useState('WED 20');
  const [selectedSlot, setSelectedSlot] = useState('02:00 PM');
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="w-full bg-transparent text-primary font-sans min-h-screen overflow-x-hidden">
      <SEO 
        title="Automated Scheduling & Appointments — GRAVIT" 
        description="Frictionless appointment booking, calendar sync, and client intake workflows." 
        path="/scheduling" 
      />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex flex-col justify-between px-6 md:px-12 pt-36 pb-16 w-full max-w-[1800px] mx-auto">
        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-secondary"
          >
            <span>Time Engineering</span>
            <span className="text-border">•</span>
            <span className="text-accent">CHRONO ARCHITECTURE</span>
          </motion.div>

          <div className="overflow-hidden">
            {['ZERO-FRICTION', 'SCHEDULING.', 'TIME,', 'SYNCHRONIZED.'].map((line, i) => (
              <div key={line} className="overflow-hidden">
                <motion.div
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.85, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[clamp(2.8rem,8.5vw,10.5rem)] font-bold tracking-tighter uppercase leading-[0.85]"
                >
                  {line}
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="border-t border-border pt-10 mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-end"
        >
          <p className="md:col-span-7 text-xl text-secondary leading-relaxed max-w-2xl">
            Transform client acquisition with intelligent scheduling pipelines. Convert interest into confirmed sessions without back-and-forth emails.
          </p>
          <div className="md:col-span-5 flex md:justify-end">
            <Link to="/contact" className="bg-primary text-background px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors">
              Deploy Scheduling Engine →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* INTERACTIVE BOOKING SIMULATOR */}
      <section className="px-6 md:px-12 py-16 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="flex items-center justify-between border-b border-border pb-6 mb-8 font-mono text-xs uppercase tracking-wider text-secondary">
          <span>Interactive Booking Engine Preview</span>
          <span className="text-accent">TIMEZONE: UTC-5 (EST)</span>
        </div>

        <div className="border border-border bg-surface p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Day Selector */}
            <div className="md:col-span-6">
              <span className="text-xs font-mono uppercase text-secondary block mb-4">1. Select Date</span>
              <div className="grid grid-cols-5 gap-2">
                {DAYS.map((day) => (
                  <button
                    key={day}
                    onClick={() => { setSelectedDay(day); setConfirmed(false); }}
                    className={`py-4 text-center font-mono text-xs uppercase border transition-colors ${
                      selectedDay === day 
                        ? 'bg-primary text-background border-primary font-bold' 
                        : 'border-border text-secondary hover:border-primary'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>

              <span className="text-xs font-mono uppercase text-secondary block mt-8 mb-4">2. Select Slot ({selectedDay})</span>
              <div className="grid grid-cols-2 gap-3">
                {SLOTS.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => { setSelectedSlot(slot); setConfirmed(false); }}
                    className={`py-3 text-center font-mono text-xs uppercase border transition-colors ${
                      selectedSlot === slot 
                        ? 'border-accent bg-accent/10 text-accent font-bold' 
                        : 'border-border text-secondary hover:border-primary'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Confirmation Box */}
            <div className="md:col-span-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-border pt-6 md:pt-0 md:pl-8">
              <div>
                <span className="text-xs font-mono uppercase text-secondary block mb-4">3. Session Summary</span>
                <div className="border border-border p-6 bg-background mb-6 font-mono">
                  <div className="text-xs text-secondary mb-1">SERVICE:</div>
                  <div className="text-lg font-bold mb-4">Technical Strategy Session (45m)</div>
                  <div className="text-xs text-secondary mb-1">SCHEDULED FOR:</div>
                  <div className="text-sm text-accent font-bold">{selectedDay} @ {selectedSlot}</div>
                </div>
              </div>

              {confirmed ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-accent/10 border border-accent text-accent font-mono text-xs uppercase text-center">
                  ✓ Calendar invite dispatched to client & host
                </motion.div>
              ) : (
                <button
                  onClick={() => setConfirmed(true)}
                  className="w-full bg-primary text-background py-4 text-xs font-mono uppercase tracking-widest hover:bg-accent transition-colors"
                >
                  Confirm Reservation →
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="px-6 md:px-12 py-32 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="flex items-end justify-between border-b border-border pb-12 mb-0">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">SCHEDULING ENGINE</h2>
          <span className="font-mono text-xs uppercase tracking-widest text-secondary hidden md:block">04 Features</span>
        </div>
        {FEATURES.map((feat) => (
          <div key={feat.num} className="grid grid-cols-12 gap-6 items-start border-b border-border py-12 group hover:bg-primary/[0.02] transition-colors">
            <span className="col-span-1 text-xs font-mono text-secondary pt-1">{feat.num}</span>
            <h3 className="col-span-4 text-2xl font-bold tracking-tight uppercase group-hover:text-accent transition-colors">{feat.title}</h3>
            <p className="col-span-7 text-secondary text-base leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="border-t border-border px-6 md:px-12 py-32 w-full max-w-[1800px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">NEVER MISS A<br />QUALIFIED CLIENT</h2>
        </div>
        <Link to="/contact" className="bg-primary text-background px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors flex-shrink-0">
          Integrate Scheduling →
        </Link>
      </section>
    </div>
  );
}
