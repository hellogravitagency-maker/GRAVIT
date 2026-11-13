import React, { useState } from 'react';
import { 
  Heart, Activity, Stethoscope, Calendar, Clock, ShieldCheck, UserCheck, 
  PhoneCall, CheckCircle2, Star, Search, ChevronRight, X, AlertCircle, FileText
} from 'lucide-react';
import ConceptFloatingNav from '../../components/concepts/ConceptFloatingNav';
import SEO from '../../components/SEO';

interface Doctor {
  id: string;
  name: string;
  role: string;
  department: string;
  credentials: string;
  rating: number;
  reviews: number;
  nextAvailable: string;
  image: string;
}

const DOCTORS: Doctor[] = [
  {
    id: 'doc-1',
    name: 'Dr. Elena Vance, MD',
    role: 'Chief of Interventional Cardiology',
    department: 'Cardiology',
    credentials: 'Johns Hopkins · Harvard Medical',
    rating: 4.98,
    reviews: 312,
    nextAvailable: 'Tomorrow, 09:30 AM',
    image: '/assets/concepts/healthcare/dr_elena_vance.webp'
  },
  {
    id: 'doc-2',
    name: 'Dr. Marcus Sterling, PhD, MD',
    role: 'Director of Precision Oncology',
    department: 'Oncology',
    credentials: 'Memorial Sloan Kettering · Stanford',
    rating: 4.95,
    reviews: 248,
    nextAvailable: 'Thursday, 02:00 PM',
    image: '/assets/concepts/healthcare/dr_marcus_sterling.webp'
  },
  {
    id: 'doc-3',
    name: 'Dr. Sarah Lin, MD',
    role: 'Lead Neurosurgeon & Spine Specialist',
    department: 'Neurology',
    credentials: 'Mayo Clinic · Oxford University',
    rating: 5.0,
    reviews: 420,
    nextAvailable: 'Friday, 11:15 AM',
    image: '/assets/concepts/healthcare/dr_sarah_lin.webp'
  },
  {
    id: 'doc-4',
    name: 'Dr. Julian Thorne, MD',
    role: 'Regenerative Medicine & Longevity',
    department: 'Longevity',
    credentials: 'UCSF Medical · Cambridge Genetics',
    rating: 4.92,
    reviews: 189,
    nextAvailable: 'Monday, 10:00 AM',
    image: '/assets/concepts/healthcare/dr_julian_thorne.webp'
  }
];

export default function HealthcareConcept() {
  const [selectedDept, setSelectedDept] = useState('All');
  const [activeDoctor, setActiveDoctor] = useState<Doctor | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', reason: '', date: '2026-11-15' });

  const departments = ['All', 'Cardiology', 'Oncology', 'Neurology', 'Longevity'];

  const filteredDoctors = selectedDept === 'All' 
    ? DOCTORS 
    : DOCTORS.filter((d) => d.department === selectedDept);

  return (
    <div className="min-h-screen bg-[#0A0E17] text-[#EEF2F6] font-sans antialiased selection:bg-[#00D4B2] selection:text-black">
      <SEO 
        title="AETHEL Health | Advanced Clinical Care & Medical Center" 
        description="Comprehensive healthcare platform connecting patients with world-class medical specialists, diagnostic clinics, and telehealth."
      />

      {/* ── Emergency & Triage Alert Banner ─────────────────── */}
      <div className="bg-[#00D4B2]/10 border-b border-[#00D4B2]/20 py-2 px-6 text-center text-xs text-[#00D4B2] font-medium flex items-center justify-center gap-2">
        <Activity size={14} className="animate-pulse" />
        <span>24/7 Urgent Care Dispatch & Emergency Triage: <strong>+1 (800) 492-CARE</strong></span>
      </div>

      {/* ── Top Medical Header ──────────────────────────────── */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0A0E17]/85 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-8">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-[#00A88F] to-[#00D4B2] text-black shadow-lg shadow-[#00D4B2]/20">
                <Heart size={18} className="fill-black stroke-black" />
              </span>
              <div>
                <span className="text-base font-bold tracking-tight text-white">AETHEL</span>
                <span className="ml-1 text-[10px] uppercase tracking-widest text-[#00D4B2] font-semibold">Clinic</span>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider text-white/70">
              <a href="#specialties" className="hover:text-white transition-colors">Specialties</a>
              <a href="#doctors" className="hover:text-white transition-colors">Physicians</a>
              <a href="#care-journey" className="hover:text-white transition-colors">Care Protocols</a>
              <a href="#telehealth" className="hover:text-white transition-colors">Telehealth</a>
              <a href="#accreditations" className="hover:text-white transition-colors">Accreditations</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#appointment"
              className="inline-flex items-center gap-2 rounded-full bg-[#00D4B2] px-5 py-2.5 text-xs font-semibold text-black hover:bg-[#00ebd0] active:scale-95 transition-all shadow-md shadow-[#00D4B2]/20"
            >
              <Calendar size={13} />
              <span>Book Appointment</span>
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero Section with Instant Booking ───────────────── */}
      <section id="top" className="relative w-full pt-16 pb-24 md:pt-28 md:pb-36 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
          <img 
            src="/assets/work/aethel_health_preview.webp" 
            alt="Medical Center" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-[#0A0E17]/85 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#00D4B2]/30 bg-[#00D4B2]/10 px-3 py-1 text-xs font-mono uppercase tracking-widest text-[#00D4B2] mb-6">
                <ShieldCheck size={13} />
                <span>JCI Accredited Academic Medical Center</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-light tracking-[-0.03em] leading-[1.08] text-white">
                Next-generation medicine, delivered with <span className="font-medium text-[#00D4B2]">uncompromising</span> care.
              </h1>
              <p className="mt-6 text-base sm:text-lg text-white/70 max-w-xl font-light leading-relaxed">
                Connect directly with board-certified attending specialists, access AI-augmented diagnostic telemetry, and schedule same-day virtual or in-clinic consultations.
              </p>

              {/* Verified Trust Metrics */}
              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-light text-white">99.8%</div>
                  <div className="text-[11px] uppercase tracking-wider text-white/50 mt-1">Diagnostic Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-light text-white">&lt; 15 min</div>
                  <div className="text-[11px] uppercase tracking-wider text-white/50 mt-1">Avg Patient Wait</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-light text-[#00D4B2]">48,000+</div>
                  <div className="text-[11px] uppercase tracking-wider text-white/50 mt-1">Annual Consults</div>
                </div>
              </div>
            </div>

            {/* Quick Consultation Scheduler Widget */}
            <div className="lg:col-span-5" id="appointment">
              <div className="rounded-3xl border border-white/15 bg-[#101624]/90 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Schedule Care</h3>
                    <p className="text-xs text-white/50 mt-0.5">In-Clinic or Telehealth Consult</p>
                  </div>
                  <span className="flex h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                {bookingConfirmed ? (
                  <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
                    <CheckCircle2 size={36} className="text-emerald-400 mx-auto mb-3" />
                    <h4 className="text-base font-semibold text-white">Appointment Scheduled!</h4>
                    <p className="text-xs text-white/70 mt-1.5">
                      Confirmation SMS sent to <strong>{formData.phone || '+1 (555) 234-5678'}</strong>. Dr. Vance has been notified.
                    </p>
                    <button
                      onClick={() => setBookingConfirmed(false)}
                      className="mt-5 rounded-xl border border-white/20 px-4 py-2 text-xs text-white/80 hover:text-white"
                    >
                      Book Another Slot
                    </button>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setBookingConfirmed(true); }} className="space-y-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/60 mb-1.5">Primary Specialty</label>
                      <select 
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-xs text-white focus:border-[#00D4B2] focus:outline-none"
                      >
                        <option value="Cardiology" className="bg-[#101624]">Cardiovascular & Heart Health</option>
                        <option value="Oncology" className="bg-[#101624]">Genomic Precision Oncology</option>
                        <option value="Neurology" className="bg-[#101624]">Neurological Sciences</option>
                        <option value="Longevity" className="bg-[#101624]">Cellular Longevity & Anti-Aging</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-white/60 mb-1.5">Preferred Date</label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-xs text-white focus:border-[#00D4B2] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-white/60 mb-1.5">Consultation Mode</label>
                        <select className="w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-xs text-white focus:border-[#00D4B2] focus:outline-none">
                          <option className="bg-[#101624]">In-Clinic Suite</option>
                          <option className="bg-[#101624]">HD Telehealth Video</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/60 mb-1.5">Patient Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Sarah Connor"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:border-[#00D4B2] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/60 mb-1.5">Mobile Phone</label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:border-[#00D4B2] focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 rounded-xl bg-[#00D4B2] py-3 text-xs font-semibold uppercase tracking-wider text-black hover:bg-[#00ebd0] transition-colors"
                    >
                      Confirm Priority Booking
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Care Specialties ─────────────────────────────────── */}
      <section id="specialties" className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#00D4B2] font-mono">Centres of Excellence</span>
            <h2 className="text-3xl sm:text-4xl font-light text-white mt-2">Comprehensive Clinical Specialties</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Cardiovascular Care',
              desc: 'Non-invasive catheterization, robotic cardiac surgery, and preventative cholesterol lipidomics.',
              icon: Heart,
              stat: '99.4% Survival Benchmark'
            },
            {
              title: 'Genomic Oncology',
              desc: 'Targeted liquid biopsies, immunotherapy infusions, and personalized tumor DNA sequencing.',
              icon: Activity,
              stat: 'Full Biomarker Profiling'
            },
            {
              title: 'Neurosciences',
              desc: 'Minimally invasive neurosurgery, cognitive optimization, and complex spine reconstruction.',
              icon: Stethoscope,
              stat: 'Mayo Protocol Guided'
            },
            {
              title: 'Cellular Longevity',
              desc: 'Epigenetic age clocks, NAD+ infusions, hyperbaric oxygen therapy, and metabolic resets.',
              icon: Clock,
              stat: 'Advanced Biomarkers'
            }
          ].map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-[#101624] p-6 hover:border-[#00D4B2]/50 transition-colors">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00D4B2]/10 text-[#00D4B2] mb-4">
                <s.icon size={20} />
              </span>
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-xs text-white/60 leading-relaxed">{s.desc}</p>
              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono text-[#00D4B2]">
                {s.stat}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Attending Doctors Directory ─────────────────────── */}
      <section id="doctors" className="py-24 border-t border-white/10 bg-[#0C111C]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#00D4B2] font-mono">Our Specialists</span>
              <h2 className="text-3xl sm:text-4xl font-light text-white mt-2">World-Class Attending Physicians</h2>
            </div>

            {/* Department Filter */}
            <div className="flex flex-wrap items-center gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                    selectedDept === dept
                      ? 'bg-[#00D4B2] text-black font-semibold'
                      : 'border border-white/10 bg-white/5 text-white/70 hover:text-white'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredDoctors.map((doc) => (
              <div
                key={doc.id}
                className="group rounded-2xl border border-white/10 bg-[#101624] overflow-hidden hover:border-[#00D4B2]/50 transition-all flex flex-col"
              >
                <div className="relative aspect-[4/3] bg-black overflow-hidden">
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 rounded-full bg-black/70 backdrop-blur px-2.5 py-0.5 text-[10px] font-mono text-[#00D4B2] border border-white/10">
                    ★ {doc.rating} ({doc.reviews})
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <div className="text-[11px] font-mono text-[#00D4B2] uppercase tracking-wider">{doc.department}</div>
                  <h3 className="text-base font-semibold text-white mt-1">{doc.name}</h3>
                  <p className="text-xs text-white/60 mt-0.5">{doc.role}</p>
                  <p className="text-[11px] text-white/40 mt-2">{doc.credentials}</p>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <Clock size={11} />
                      <span>{doc.nextAvailable}</span>
                    </span>
                  </div>

                  <button
                    onClick={() => setActiveDoctor(doc)}
                    className="mt-4 w-full rounded-xl bg-white/10 py-2.5 text-xs font-medium text-white hover:bg-[#00D4B2] hover:text-black transition-colors"
                  >
                    Select Physician
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Standalone Footer ───────────────────────────────── */}
      <footer className="border-t border-white/10 bg-[#07090F] py-14 px-6 text-white/50 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="flex h-6 w-6 items-center justify-center rounded bg-[#00D4B2] text-black font-semibold text-xs">
                <Heart size={12} className="fill-black" />
              </span>
              <span className="text-sm font-bold tracking-widest text-white">AETHEL MEDICAL CENTER</span>
            </div>
            <p className="max-w-sm text-white/40 leading-relaxed">
              JCI & HIPAA Certified Academic Medical Practice. 550 Medical Center Way, Boston, MA & Harley Street, London.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <div className="font-semibold text-white uppercase tracking-wider mb-3">Care Network</div>
              <ul className="space-y-1.5 text-white/60">
                <li>Cardiology Institute</li>
                <li>Oncology Pavilion</li>
                <li>Neuroscience Center</li>
                <li>Telehealth Direct</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-white uppercase tracking-wider mb-3">Patients</div>
              <ul className="space-y-1.5 text-white/60">
                <li>Patient Portal Login</li>
                <li>Insurance & Billing</li>
                <li>Medical Records Request</li>
                <li>Emergency Triage</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-white uppercase tracking-wider mb-3">Compliance</div>
              <ul className="space-y-1.5 text-white/60">
                <li>HIPAA Compliance</li>
                <li>JCI Gold Seal</li>
                <li>FDA Trials Registry</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40">
          <div>© {new Date().getFullYear()} AETHEL Health Systems. All rights reserved.</div>
          <div>Engineered as a GRAVIT Concept Prototype.</div>
        </div>
      </footer>

      {/* Doctor Modal */}
      {activeDoctor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-3xl border border-white/20 bg-[#101624] p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setActiveDoctor(null)}
              className="absolute top-5 right-5 p-2 rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-white"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <img src={activeDoctor.image} alt={activeDoctor.name} className="h-20 w-20 rounded-2xl object-cover" />
              <div>
                <span className="text-xs uppercase tracking-wider text-[#00D4B2] font-mono">{activeDoctor.department}</span>
                <h3 className="text-xl font-bold text-white">{activeDoctor.name}</h3>
                <p className="text-xs text-white/60">{activeDoctor.role}</p>
                <div className="text-[11px] text-[#00D4B2] mt-1">★ {activeDoctor.rating} Rating ({activeDoctor.reviews} verified patient reviews)</div>
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed border-t border-white/10 pt-4">
              Credentials: {activeDoctor.credentials}. Specializing in minimally invasive protocols, preventive intervention, and personalized patient care regimens.
            </p>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => {
                  alert(`Appointment request dispatched to ${activeDoctor.name}'s clinic calendar!`);
                  setActiveDoctor(null);
                }}
                className="flex-1 rounded-xl bg-[#00D4B2] py-3 text-xs font-semibold uppercase tracking-wider text-black hover:bg-[#00ebd0]"
              >
                Confirm Priority Booking
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating GRAVIT Return Pill */}
      <ConceptFloatingNav 
        conceptName="AETHEL Healthcare Platform" 
        category="Healthcare · Medical · Wellness"
        dribbbleUrl="https://dribbble.com/shots/27317779-HealthCare-Clinic-Medical-Center-Service-Based-Website"
      />
    </div>
  );
}
