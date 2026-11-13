import React, { useState } from 'react';
import { 
  Building2, MapPin, Bed, Bath, Maximize2, Search, SlidersHorizontal, 
  ArrowRight, Phone, Mail, Calendar, Compass, Shield, Award, Check, X, ChevronRight
} from 'lucide-react';
import ConceptFloatingNav from '../../components/concepts/ConceptFloatingNav';
import SEO from '../../components/SEO';

interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  tag: string;
  status: 'Available' | 'Under Offer' | 'Exclusive';
  image: string;
  category: 'Villa' | 'Penthouse' | 'Historic' | 'Waterfront';
  description: string;
}

const PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    title: 'The Bel-Air Glass Pavilion',
    location: 'Bel Air, Los Angeles, CA',
    price: '$24,800,000',
    beds: 6,
    baths: 8,
    sqft: '11,400 sq ft',
    tag: 'Architectural Trophy',
    status: 'Exclusive',
    category: 'Villa',
    image: '/assets/concepts/realestate/bel_air_pavilion.webp',
    description: 'Designed by Olson Kundig, featuring cantilevered glass terraces, 75ft zero-edge travertine pool, and panoramic canyon-to-ocean vistas.'
  },
  {
    id: 'prop-2',
    title: 'Tribeca Cast-Iron Penthouse',
    location: 'Franklin Street, Tribeca, NYC',
    price: '$18,500,000',
    beds: 4,
    baths: 4.5,
    sqft: '6,200 sq ft',
    tag: 'Historic Restoration',
    status: 'Available',
    category: 'Penthouse',
    image: '/assets/concepts/realestate/tribeca_penthouse.webp',
    description: 'Direct keyed elevator access, 22-foot vaulted brick ceilings, private landscaped rooftop terrace with heated plunge pool and outdoor kitchen.'
  },
  {
    id: 'prop-3',
    title: 'Red Mountain Alpine Sanctuary',
    location: 'Aspen, Colorado',
    price: '$32,000,000',
    beds: 7,
    baths: 9,
    sqft: '12,800 sq ft',
    tag: 'Ski-in / Ski-out',
    status: 'Available',
    category: 'Villa',
    image: '/assets/concepts/realestate/alpine_sanctuary.webp',
    description: 'Seamless ski access to Aspen Mountain, geothermal radiant heating throughout, private wellness spa, subterranean wine vault holding 2,400 bottles.'
  },
  {
    id: 'prop-4',
    title: 'Biscayne Bay Waterfront Villa',
    location: 'Venetian Islands, Miami, FL',
    price: '$21,900,000',
    beds: 5,
    baths: 6,
    sqft: '8,900 sq ft',
    tag: 'Deepwater Yacht Dock',
    status: 'Under Offer',
    category: 'Waterfront',
    image: '/assets/concepts/realestate/biscayne_waterfront.webp',
    description: '100 feet of prime bay frontage accommodating up to 90ft yachts. Natural coral stone finishes, dual master suites, and bespoke Boffi kitchen.'
  },
  {
    id: 'prop-5',
    title: 'Mayfair Heritage Townhouse',
    location: 'Grosvenor Square, London, UK',
    price: '£19,750,000',
    beds: 5,
    baths: 6,
    sqft: '7,400 sq ft',
    tag: 'Grade II Listed',
    status: 'Exclusive',
    category: 'Historic',
    image: '/assets/concepts/realestate/mayfair_townhouse.webp',
    description: 'Georgian grandeur painstakingly restored with contemporary acoustic isolation, subterranean passenger lift, cinema room, and private garage.'
  },
  {
    id: 'prop-6',
    title: 'The Sky Horizon Sky-Villa',
    location: 'Minato-ku, Tokyo, Japan',
    price: '¥3,800,000,000',
    beds: 3,
    baths: 3.5,
    sqft: '4,800 sq ft',
    tag: 'Unobstructed Fuji Views',
    status: 'Available',
    category: 'Penthouse',
    image: '/assets/concepts/realestate/tokyo_sky_villa.webp',
    description: 'Perched on the 48th floor overlooking Tokyo Tower and Mount Fuji. Custom Hinoki soaking tubs, Tatami tea pavilion, and 24/7 concierge service.'
  }
];

export default function RealEstateConcept() {
  const [filter, setFilter] = useState<string>('All');
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [inquirySent, setInquirySent] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredProperties = PROPERTIES.filter((p) => {
    const matchesFilter = filter === 'All' || p.category === filter;
    const matchesSearch = searchLocation === '' || 
      p.location.toLowerCase().includes(searchLocation.toLowerCase()) ||
      p.title.toLowerCase().includes(searchLocation.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0C0D12] text-[#F3F3F6] font-sans antialiased selection:bg-[#C9A96E] selection:text-black">
      <SEO 
        title="AURA Real Estate | Luxury Architectural Residences" 
        description="Curated collection of world-class architectural sanctuaries, penthouses, and private estates."
      />

      {/* ── Top Navigation Bar ───────────────────────────────── */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0C0D12]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-8">
            <a href="#top" className="flex items-center gap-2 group">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C9A96E] text-black font-semibold text-sm tracking-wider">
                A
              </span>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-[0.18em] text-white">AURA</span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#C9A96E]">Estates</span>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider text-white/70">
              <a href="#properties" className="hover:text-white transition-colors">Residences</a>
              <a href="#developments" className="hover:text-white transition-colors">Developments</a>
              <a href="#private-client" className="hover:text-white transition-colors">Private Advisory</a>
              <a href="#journal" className="hover:text-white transition-colors">Journal</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[#C9A96E]/40 bg-[#C9A96E]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#C9A96E] hover:bg-[#C9A96E] hover:text-black transition-all"
            >
              <Calendar size={13} />
              <span>Schedule Viewing</span>
            </a>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-white/10 text-white/80"
              aria-label="Toggle Navigation"
            >
              <SlidersHorizontal size={18} />
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#0C0D12] px-6 py-4 flex flex-col gap-3 text-sm">
            <a href="#properties" onClick={() => setMobileMenuOpen(false)} className="text-white/80 hover:text-white py-1">Residences</a>
            <a href="#developments" onClick={() => setMobileMenuOpen(false)} className="text-white/80 hover:text-white py-1">Developments</a>
            <a href="#private-client" onClick={() => setMobileMenuOpen(false)} className="text-white/80 hover:text-white py-1">Private Advisory</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-[#C9A96E] font-medium py-1">Schedule Viewing</a>
          </div>
        )}
      </header>

      {/* ── Hero Section ────────────────────────────────────── */}
      <section id="top" className="relative w-full pt-20 pb-28 md:pt-32 md:pb-40 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="/assets/work/aura_estates_preview.webp" 
            alt="Luxury Architecture" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D12] via-[#0C0D12]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A96E]/30 bg-[#C9A96E]/10 px-3 py-1 text-xs font-mono uppercase tracking-widest text-[#C9A96E] mb-6">
              <Compass size={12} />
              <span>Curated Prime Architecture</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.03em] leading-[1.05] text-white">
              Sanctuaries for the <span className="italic font-serif text-[#C9A96E]">discerning</span> few.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-xl font-light leading-relaxed">
              Discreet brokerage of architecturally significant residences, alpine estates, and private waterfront compounds across the globe.
            </p>
          </div>

          {/* Quick Search & Filter Bar */}
          <div className="mt-12 rounded-2xl border border-white/15 bg-white/[0.04] p-3 sm:p-4 backdrop-blur-2xl max-w-4xl shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3">
                <MapPin size={16} className="text-[#C9A96E] shrink-0" />
                <input
                  type="text"
                  placeholder="Location (e.g. Aspen, Bel Air, Mayfair)"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full bg-transparent text-sm text-white placeholder-white/40 focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3">
                <Building2 size={16} className="text-[#C9A96E] shrink-0" />
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="w-full bg-transparent text-sm text-white focus:outline-none cursor-pointer"
                >
                  <option value="All" className="bg-[#12131A] text-white">All Classifications</option>
                  <option value="Villa" className="bg-[#12131A] text-white">Architectural Villas</option>
                  <option value="Penthouse" className="bg-[#12131A] text-white">Sky Penthouses</option>
                  <option value="Historic" className="bg-[#12131A] text-white">Historic Estates</option>
                  <option value="Waterfront" className="bg-[#12131A] text-white">Prime Waterfront</option>
                </select>
              </div>

              <a
                href="#properties"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#C9A96E] px-6 py-3 text-sm font-semibold text-black hover:bg-[#d6b77c] transition-colors"
              >
                <Search size={16} />
                <span>Explore ({filteredProperties.length})</span>
              </a>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-8 max-w-4xl">
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white">$2.4B+</div>
              <div className="text-xs uppercase tracking-wider text-white/50 mt-1">Transacted Volume</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white">100%</div>
              <div className="text-xs uppercase tracking-wider text-white/50 mt-1">Discreet & Off-Market</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white">14 Global</div>
              <div className="text-xs uppercase tracking-wider text-white/50 mt-1">Brokerage Desks</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-[#C9A96E]">98.4%</div>
              <div className="text-xs uppercase tracking-wider text-white/50 mt-1">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Residences Grid ────────────────────────── */}
      <section id="properties" className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-mono mb-2">Curated Portfolio</p>
            <h2 className="text-3xl sm:text-4xl font-light text-white">Active Global Residences</h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {['All', 'Villa', 'Penthouse', 'Historic', 'Waterfront'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  filter === cat
                    ? 'bg-[#C9A96E] text-black'
                    : 'border border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((p) => (
            <article
              key={p.id}
              className="group rounded-2xl border border-white/10 bg-[#12131A] overflow-hidden hover:border-[#C9A96E]/50 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="rounded-full bg-black/70 backdrop-blur-md px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-white border border-white/10">
                    {p.tag}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                    p.status === 'Exclusive' ? 'bg-[#C9A96E] text-black' :
                    p.status === 'Under Offer' ? 'bg-amber-500/80 text-black' : 'bg-emerald-500/80 text-black'
                  }`}>
                    {p.status}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="rounded-lg bg-black/80 backdrop-blur px-3 py-1 text-sm font-semibold text-[#C9A96E]">
                    {p.price}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-1.5 text-xs text-white/50 mb-2">
                  <MapPin size={13} className="text-[#C9A96E]" />
                  <span>{p.location}</span>
                </div>
                <h3 className="text-xl font-medium text-white group-hover:text-[#C9A96E] transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs text-white/60 line-clamp-2 leading-relaxed">
                  {p.description}
                </p>

                <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-xs text-white/70">
                  <div className="flex items-center gap-1.5">
                    <Bed size={14} className="text-[#C9A96E]" />
                    <span>{p.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Bath size={14} className="text-[#C9A96E]" />
                    <span>{p.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Maximize2 size={14} className="text-[#C9A96E]" />
                    <span>{p.sqft}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProperty(p)}
                  className="mt-6 w-full flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#C9A96E] hover:text-black hover:border-[#C9A96E] transition-all"
                >
                  <span>Inquire Residence</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Architecture & Advisory Standards ───────────────── */}
      <section id="developments" className="py-24 border-t border-white/10 bg-[#0E0F16]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-mono">The AURA Standard</span>
            <h2 className="text-3xl sm:text-5xl font-light text-white mt-3">Architectural Integrity</h2>
            <p className="text-white/60 text-sm mt-4">
              Every home in our portfolio must meet rigorous criteria for spatial poetry, engineering permanence, and historical or aesthetic rarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
              <Shield className="h-8 w-8 text-[#C9A96E] mb-5" />
              <h3 className="text-lg font-medium text-white mb-2">Discreet Off-Market Desks</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Over 60% of our ultra-high-net-worth real estate transactions occur privately without public MLS indexing or press exposure.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
              <Award className="h-8 w-8 text-[#C9A96E] mb-5" />
              <h3 className="text-lg font-medium text-white mb-2">Curated Architectural Provenance</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                We represent masterworks by Pritzker Prize laureates and visionary contemporary design ateliers including Kundig, Pawson, and Ando.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
              <Compass className="h-8 w-8 text-[#C9A96E] mb-5" />
              <h3 className="text-lg font-medium text-white mb-2">Private Family Office Advisory</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Comprehensive advisory spanning sovereign cross-border acquisitions, bespoke structural audits, and luxury estate governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact / Viewing Request Form ──────────────────── */}
      <section id="contact" className="py-24 max-w-5xl mx-auto px-6">
        <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#13151F] to-[#0D0E14] p-8 sm:p-14">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-mono">Private Appointment</span>
            <h2 className="text-3xl sm:text-4xl font-light text-white mt-3">Schedule a Private Viewing</h2>
            <p className="text-xs sm:text-sm text-white/60 mt-3 leading-relaxed">
              Connect with our senior managing partners to arrange confidential walkthroughs or discuss discreet portfolio sales.
            </p>
          </div>

          {inquirySent ? (
            <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 flex items-center gap-4 text-emerald-300">
              <Check className="h-6 w-6 shrink-0" />
              <div>
                <h4 className="font-semibold text-sm">Appointment Request Confirmed</h4>
                <p className="text-xs text-emerald-300/80 mt-1">Our managing desk will contact you via encrypted channel within 2 hours.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setInquirySent(true); }} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-white/60 mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Lord / Lady / Dr / Mr / Ms..."
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#C9A96E] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-white/60 mb-2">Private Email</label>
                <input
                  type="email"
                  required
                  placeholder="client@familyoffice.com"
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#C9A96E] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-white/60 mb-2">Direct Phone / Signal</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#C9A96E] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-white/60 mb-2">Target Property or Location</label>
                <input
                  type="text"
                  placeholder="e.g. Bel-Air Glass Pavilion, Aspen"
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#C9A96E] focus:outline-none"
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#C9A96E] px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-black hover:bg-[#d4b578] transition-all"
                >
                  <span>Transmit Confidential Inquiry</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ── Standalone Footer ───────────────────────────────── */}
      <footer className="border-t border-white/10 bg-[#090A0E] py-14 px-6 text-white/50 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="flex h-6 w-6 items-center justify-center rounded bg-[#C9A96E] text-black font-semibold text-xs">A</span>
              <span className="text-sm font-bold tracking-widest text-white">AURA ESTATES</span>
            </div>
            <p className="max-w-sm text-white/40 leading-relaxed">
              Global Luxury Architectural Brokerage & Sovereign Estate Advisory. Licensed brokerage in NY, CA, CO, FL & UK.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <div className="font-semibold text-white uppercase tracking-wider mb-3">Prime Hubs</div>
              <ul className="space-y-1.5 text-white/60">
                <li>Bel Air · Beverly Hills</li>
                <li>Franklin St · Tribeca</li>
                <li>Red Mountain · Aspen</li>
                <li>Mayfair · London</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-white uppercase tracking-wider mb-3">Advisory</div>
              <ul className="space-y-1.5 text-white/60">
                <li>Discreet Sales</li>
                <li>Acquisitions</li>
                <li>Valuation Models</li>
                <li>Tax Structuring</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-white uppercase tracking-wider mb-3">Legal</div>
              <ul className="space-y-1.5 text-white/60">
                <li>Equal Housing Opportunity</li>
                <li>Client Confidentiality</li>
                <li>Terms of Agency</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40">
          <div>© {new Date().getFullYear()} AURA Estates International. All rights reserved.</div>
          <div>Designed & Engineered as a GRAVIT Concept Prototype.</div>
        </div>
      </footer>

      {/* ── Interactive Property Modal / Drawer ─────────────── */}
      {selectedProperty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl rounded-3xl border border-white/20 bg-[#12131C] p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl">
            <button
              onClick={() => setSelectedProperty(null)}
              className="absolute top-5 right-5 p-2 rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-white"
            >
              <X size={18} />
            </button>

            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6">
              <img src={selectedProperty.image} alt={selectedProperty.title} className="w-full h-full object-cover" />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#C9A96E] font-mono">{selectedProperty.tag}</span>
                <h3 className="text-2xl font-light text-white mt-1">{selectedProperty.title}</h3>
                <p className="text-xs text-white/50 flex items-center gap-1 mt-1">
                  <MapPin size={12} className="text-[#C9A96E]" />
                  <span>{selectedProperty.location}</span>
                </p>
              </div>
              <div className="text-2xl font-semibold text-[#C9A96E]">{selectedProperty.price}</div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-white/10 pt-4">
              {selectedProperty.description}
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-b border-white/10 py-4 text-xs text-white/80">
              <div>
                <span className="text-white/40 block">Beds</span>
                <span className="font-medium text-white">{selectedProperty.beds} Suites</span>
              </div>
              <div>
                <span className="text-white/40 block">Baths</span>
                <span className="font-medium text-white">{selectedProperty.baths} Bathrooms</span>
              </div>
              <div>
                <span className="text-white/40 block">Area</span>
                <span className="font-medium text-white">{selectedProperty.sqft}</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  alert(`Private viewing booked for ${selectedProperty.title}! Our managing partner will reach out immediately.`);
                  setSelectedProperty(null);
                }}
                className="w-full sm:flex-1 rounded-xl bg-[#C9A96E] py-3 text-xs font-semibold uppercase tracking-wider text-black hover:bg-[#d6b77c]"
              >
                Confirm Private Walkthrough
              </button>
              <button
                onClick={() => setSelectedProperty(null)}
                className="w-full sm:w-auto rounded-xl border border-white/15 px-6 py-3 text-xs uppercase text-white/70 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating GRAVIT Return Pill */}
      <ConceptFloatingNav 
        conceptName="AURA Real Estate Platform" 
        category="Real Estate · Property · UI/UX"
        dribbbleUrl="https://dribbble.com/shots/27317798-Real-Estate-Website-Landing-Page"
      />
    </div>
  );
}
