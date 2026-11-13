import React, { useState } from 'react';
import { 
  Palmtree, Compass, Calendar, Users, Coffee, Sparkles, Utensils, 
  MapPin, ArrowRight, Star, X, Check, Clock, ChevronRight
} from 'lucide-react';
import ConceptFloatingNav from '../../components/concepts/ConceptFloatingNav';
import SEO from '../../components/SEO';

interface Suite {
  id: string;
  name: string;
  tier: string;
  pricePerNight: string;
  sqm: string;
  guests: number;
  view: string;
  image: string;
  features: string[];
}

const SUITES: Suite[] = [
  {
    id: 'suite-1',
    name: 'The Royal Cliff Villa',
    tier: 'Presidential Estate',
    pricePerNight: '$4,850',
    sqm: '480 m²',
    guests: 6,
    view: 'Panoramic Mediterranean Horizon',
    image: '/assets/concepts/hotel/royal_cliff_villa.webp',
    features: ['Private 25m Infinity Pool', '24/7 Dedicated Butler Desk', 'Direct Helipad Access', 'Subterranean Wine Cellar']
  },
  {
    id: 'suite-2',
    name: 'Alpine Panoramic Penthouse',
    tier: 'Signature Suite',
    pricePerNight: '$2,750',
    sqm: '290 m²',
    guests: 4,
    view: 'Snow-capped Dolomite Peaks',
    image: '/assets/concepts/hotel/alpine_penthouse.webp',
    features: ['Heated Cedar Onsen', 'Open Fireplace & Stone Hearth', 'Private Elevator', 'Sommelier Cellar Access']
  },
  {
    id: 'suite-3',
    name: 'Sanctuary Forest Pavilion',
    tier: 'Wellness Retreat',
    pricePerNight: '$1,650',
    sqm: '180 m²',
    guests: 2,
    view: 'Ancient Pine & Thermal Springs',
    image: '/assets/concepts/hotel/forest_pavilion.webp',
    features: ['Thermal Spring Plunge Tub', 'Private Yoga Deck', 'Aromatherapy Rain Shower', 'Organic In-Suite Dining']
  }
];

export default function HotelConcept() {
  const [selectedSuite, setSelectedSuite] = useState<Suite | null>(null);
  const [checkIn, setCheckIn] = useState('2026-12-10');
  const [checkOut, setCheckOut] = useState('2026-12-15');
  const [guestCount, setGuestCount] = useState(2);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0C10] text-[#EFEFEF] font-sans antialiased selection:bg-[#D4AF37] selection:text-black">
      <SEO 
        title="VÉLORA Grand Resort & Spa | Luxury Sanctuary" 
        description="Escape to an architectural haven of peace and gastronomy nestled between alpine peaks and the Mediterranean."
      />

      {/* ── Top Hotel Navigation Bar ─────────────────────────── */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0B0C10]/85 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-8">
            <a href="#top" className="flex items-center gap-2 group">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#D4AF37] text-black font-serif font-bold text-sm">
                V
              </span>
              <div className="flex flex-col">
                <span className="text-base font-serif tracking-[0.2em] text-white">VÉLORA</span>
                <span className="text-[8px] uppercase tracking-[0.3em] text-[#D4AF37]">Grand Resort & Spa</span>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest text-white/70">
              <a href="#suites" className="hover:text-white transition-colors">Suites & Villas</a>
              <a href="#dining" className="hover:text-white transition-colors">Gastronomy</a>
              <a href="#wellness" className="hover:text-white transition-colors">Thermal Spa</a>
              <a href="#experiences" className="hover:text-white transition-colors">Curated Journeys</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#booking-bar"
              className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37] bg-[#D4AF37]/10 px-5 py-2 text-xs font-serif font-semibold tracking-wider text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all"
            >
              <Calendar size={13} />
              <span>Reserve Stay</span>
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero Section ────────────────────────────────────── */}
      <section id="top" className="relative w-full pt-20 pb-36 md:pt-36 md:pb-48 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0 opacity-35">
          <img 
            src="/assets/work/velora_resort_preview.webp" 
            alt="VÉLORA Resort" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-[#0B0C10]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3 py-1 text-xs font-serif uppercase tracking-widest text-[#D4AF37] mb-6">
            <Star size={11} className="fill-[#D4AF37]" />
            <span>Relais & Châteaux Member · 5-Star Superior</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Where silence meets <span className="italic text-[#D4AF37]">extraordinary</span> stillness.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
            Perched between private coastal cliffs and ancient stone pines, VÉLORA offers an unhurried retreat for the world's most discerning travelers.
          </p>

          {/* Floating Live Booking Engine */}
          <div id="booking-bar" className="mt-14 max-w-4xl mx-auto rounded-2xl border border-white/15 bg-white/[0.05] p-3 sm:p-5 backdrop-blur-2xl shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              <div className="text-left rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5">
                <span className="block text-[10px] font-mono uppercase tracking-wider text-white/50">Arrival</span>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-transparent text-xs text-white focus:outline-none cursor-pointer mt-1 font-mono"
                />
              </div>

              <div className="text-left rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5">
                <span className="block text-[10px] font-mono uppercase tracking-wider text-white/50">Departure</span>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-transparent text-xs text-white focus:outline-none cursor-pointer mt-1 font-mono"
                />
              </div>

              <div className="text-left rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5">
                <span className="block text-[10px] font-mono uppercase tracking-wider text-white/50">Guests</span>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full bg-transparent text-xs text-white focus:outline-none cursor-pointer mt-1"
                >
                  <option value={1} className="bg-[#12131A]">1 Adult (Solo Retreat)</option>
                  <option value={2} className="bg-[#12131A]">2 Adults (Couples Stay)</option>
                  <option value={4} className="bg-[#12131A]">4 Guests (Family Suite)</option>
                  <option value={6} className="bg-[#12131A]">6+ Guests (Private Villa)</option>
                </select>
              </div>

              <a
                href="#suites"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#D4AF37] px-6 py-2.5 text-xs font-serif font-semibold uppercase tracking-wider text-black hover:bg-[#e6c148] transition-colors"
              >
                <span>Check Suites</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Accommodations & Suites Showcase ─────────────────── */}
      <section id="suites" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-serif">Sanctuaries of Rest</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-white mt-3">Signature Suites & Villas</h2>
          <p className="text-white/60 text-xs sm:text-sm mt-4">
            Framed with floor-to-ceiling glass, native limestone, and private thermal baths overlooking the horizon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SUITES.map((suite) => (
            <article
              key={suite.id}
              className="group rounded-2xl border border-white/10 bg-[#12131A] overflow-hidden hover:border-[#D4AF37]/50 transition-all flex flex-col"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-black">
                <img
                  src={suite.image}
                  alt={suite.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3">
                  <span className="rounded-full bg-black/70 backdrop-blur px-3 py-1 text-[10px] font-serif uppercase tracking-wider text-[#D4AF37] border border-white/10">
                    {suite.tier}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="rounded-lg bg-black/80 backdrop-blur px-3 py-1 text-sm font-serif font-medium text-white">
                    {suite.pricePerNight} <span className="text-[10px] text-white/50">/ night</span>
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-serif text-white group-hover:text-[#D4AF37] transition-colors">{suite.name}</h3>
                <p className="text-xs text-white/50 mt-1">{suite.view}</p>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
                  <span>{suite.sqm} Living Space</span>
                  <span>Up to {suite.guests} Guests</span>
                </div>

                <ul className="mt-4 space-y-1.5 text-xs text-white/70">
                  {suite.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2">
                      <Check size={12} className="text-[#D4AF37] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedSuite(suite)}
                  className="mt-6 w-full rounded-xl border border-white/15 bg-white/5 py-2.5 text-xs font-serif font-semibold uppercase tracking-wider text-white hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all"
                >
                  Reserve Suite
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Gastronomy & Thermal Wellness ────────────────────── */}
      <section id="dining" className="py-24 border-t border-white/10 bg-[#0E0F14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-serif">Three-Star Gastronomy</span>
              <h2 className="text-3xl sm:text-5xl font-serif font-light text-white mt-3">L'Étoile Michelin Experience</h2>
              <p className="text-xs sm:text-sm text-white/70 mt-5 leading-relaxed">
                Led by Chef Aurélien Moreau, our flagship restaurant honors biodynamic Mediterranean seafood, estate-grown olive oils, and rare vintages curated from private cellars.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => alert('Table requested at L\'Étoile for your upcoming stay!')}
                  className="rounded-xl bg-[#D4AF37] px-6 py-3 text-xs font-serif font-semibold uppercase tracking-wider text-black hover:bg-[#e6c148]"
                >
                  Request Table Reservation
                </button>
                <div className="flex items-center gap-2 text-xs text-white/50">
                  <Star size={13} className="text-[#D4AF37] fill-[#D4AF37]" />
                  <span>3 Michelin Stars · Michelin Guide 2026</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 overflow-hidden aspect-[4/3]">
              <img src="/assets/concepts/hotel/michelin_dining.webp" alt="Gastronomy" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Standalone Footer ───────────────────────────────── */}
      <footer className="border-t border-white/10 bg-[#08090C] py-14 px-6 text-white/50 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="flex h-6 w-6 items-center justify-center rounded bg-[#D4AF37] text-black font-serif font-semibold text-xs">V</span>
              <span className="text-sm font-serif font-bold tracking-widest text-white">VÉLORA GRAND RESORT</span>
            </div>
            <p className="max-w-sm text-white/40 leading-relaxed font-light">
              Sentier des Falaises, 06290 Èze-sur-Mer, Côte d'Azur & Engadin Alpine Valley, Switzerland.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <div className="font-serif font-semibold text-white uppercase tracking-wider mb-3">Concierge</div>
              <ul className="space-y-1.5 text-white/60">
                <li>Private Yacht Charters</li>
                <li>Helicopter Transfers</li>
                <li>Wine Cellar Inquiries</li>
                <li>Thermal Spa Menu</li>
              </ul>
            </div>
            <div>
              <div className="font-serif font-semibold text-white uppercase tracking-wider mb-3">Hospitality</div>
              <ul className="space-y-1.5 text-white/60">
                <li>Relais & Châteaux</li>
                <li>Virtuoso Travel Network</li>
                <li>Private Jet Alliances</li>
              </ul>
            </div>
            <div>
              <div className="font-serif font-semibold text-white uppercase tracking-wider mb-3">Legal</div>
              <ul className="space-y-1.5 text-white/60">
                <li>Booking Terms & Cancellation</li>
                <li>Guest Privacy Guarantee</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40">
          <div>© {new Date().getFullYear()} VÉLORA Luxury Resorts S.A. All rights reserved.</div>
          <div>Engineered as a GRAVIT Concept Prototype.</div>
        </div>
      </footer>

      {/* Reservation Modal */}
      {selectedSuite && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-3xl border border-white/20 bg-[#12131A] p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setSelectedSuite(null)}
              className="absolute top-5 right-5 p-2 rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-white"
            >
              <X size={18} />
            </button>

            <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-serif">{selectedSuite.tier}</span>
            <h3 className="text-2xl font-serif text-white mt-1">{selectedSuite.name}</h3>
            <p className="text-xs text-white/50">{selectedSuite.view} · {selectedSuite.sqm}</p>

            <div className="mt-4 p-4 rounded-xl border border-white/10 bg-white/[0.03] flex justify-between items-center text-xs text-white">
              <div>
                <span className="text-white/40 block">Dates Selected</span>
                <span>{checkIn} to {checkOut} (5 Nights)</span>
              </div>
              <div className="text-right">
                <span className="text-white/40 block">Nightly Rate</span>
                <span className="font-semibold text-[#D4AF37]">{selectedSuite.pricePerNight}</span>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => {
                  alert(`Reservation request confirmed for ${selectedSuite.name}! Our Chief Concierge has received your dossier.`);
                  setSelectedSuite(null);
                }}
                className="flex-1 rounded-xl bg-[#D4AF37] py-3 text-xs font-serif font-semibold uppercase tracking-wider text-black hover:bg-[#e6c148]"
              >
                Confirm Priority Reservation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating GRAVIT Return Pill */}
      <ConceptFloatingNav 
        conceptName="VÉLORA Resort & Hospitality" 
        category="Hotel · Hospitality · Booking"
        dribbbleUrl="https://dribbble.com/shots/27317800-Luxury-Resort-Website-Landing-Page"
      />
    </div>
  );
}
