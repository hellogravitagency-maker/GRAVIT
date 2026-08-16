import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useParams } from 'react-router-dom';
import SEO from '../components/SEO';

interface SolutionRecord {
  title: string;
  subtitle: string;
  categoryTag: string;
  description: string;
  subcategories: string[];
  challenges: string[];
  capabilities: { title: string; desc: string }[];
  technologies: string[];
  kpi: { value: string; label: string };
  demoType: 'grid' | 'retainer' | 'cohort' | 'booking' | 'fitness' | 'intake' | 'quote' | 'tickets' | 'impact' | 'bio';
}

const solutionMap: Record<string, SolutionRecord> = {
  'creative-services': {
    title: 'Creative Services',
    subtitle: 'High-aesthetic digital platforms for design studios, photographers, and architects.',
    categoryTag: 'STUDIO & PORTFOLIO ARCHITECTURE',
    description: 'We construct zero-latency portfolio archives, client proofing portals, and high-contrast editorial platforms that highlight your work without template clutter.',
    subcategories: ['Photographers', 'Graphic Designers', 'Artists', 'Interior Designers', 'Architects', 'Fashion & Apparel'],
    challenges: [
      'Image compression destroying visual quality and color accuracy',
      'Generic CMS templates that look identical to competitors',
      'Cluttered project archives with slow page transitions',
      'Inability to gate client proofing galleries securely'
    ],
    capabilities: [
      { title: 'Full-Bleed Image Optimization', desc: 'WebP/AVIF auto-encoding with crisp sub-second CDN image delivery.' },
      { title: 'Client Proofing & Password Gates', desc: 'Secure high-resolution asset review portals for agency clients.' },
      { title: 'Bespoke Grid Compositions', desc: 'Masonry, horizontal scroll, and magazine-style typographic layouts.' }
    ],
    technologies: ['Next.js', 'Sanity.io', 'Framer Motion', 'Cloudflare Images', 'Tailwind CSS'],
    kpi: { value: '<0.5s', label: 'Avg Image Load Speed' },
    demoType: 'grid'
  },
  'professional-services': {
    title: 'Professional Services',
    subtitle: 'Authority-first platforms for law firms, consultancies, and financial advisors.',
    categoryTag: 'TRUST & COMPLIANCE ARCHITECTURE',
    description: 'Build immediate client trust with encrypted onboarding pipelines, milestone retainer billing, and secure client document portals.',
    subcategories: ['Consultants', 'Law Firms', 'Accounting', 'Financial Advisors', 'Real Estate', 'Recruiters'],
    challenges: [
      'Friction in initial client intake and NDA execution',
      'Unprofessional invoice links and payment delays',
      'Lack of secure, compliant client file exchange channels',
      'Outdated web presence failing to convey enterprise authority'
    ],
    capabilities: [
      { title: 'Automated Client Onboarding', desc: 'Digital intake questionnaires, NDA sign-offs, and retainer collection.' },
      { title: 'Encrypted Document Exchange', desc: 'Role-based access channels for sensitive client files and audit trails.' },
      { title: 'Milestone Retainer Invoicing', desc: 'Automated billing triggers connected to project deliverables.' }
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe Connect', 'DocuSign API'],
    kpi: { value: '4.2 Days', label: 'Avg Retainer Collection' },
    demoType: 'retainer'
  },
  'education-training': {
    title: 'Education & Training',
    subtitle: 'Scalable learning management engines for course creators and corporate academies.',
    categoryTag: 'LMS & COHORT ARCHITECTURE',
    description: 'Deliver friction-free learning with custom course portals, progressive module drip scheduling, and automated certificate issuance.',
    subcategories: ['Course Creators', 'Tutors', 'Corporate Trainers', 'Universities', 'Coaches', 'Language Schools'],
    challenges: [
      'High video bandwidth fees on third-party course platforms',
      'Low course completion rates due to uninspired UX',
      'Difficulties managing cohort-based live session schedules',
      'Lack of branded student progress dashboards'
    ],
    capabilities: [
      { title: 'HLS Adaptive Video Streaming', desc: 'Fast, secure video playback with zero buffering on global edge nodes.' },
      { title: 'Automated Drip Scheduling', desc: 'Unlock modules over days or weeks following student enrollment.' },
      { title: 'Cohort Session Integration', desc: 'Embedded Zoom/Cal.com links with automated calendar sync.' }
    ],
    technologies: ['Next.js', 'Mux Video', 'Supabase', 'Stripe Billing', 'Vercel Edge'],
    kpi: { value: '84%', label: 'Avg Course Completion' },
    demoType: 'cohort'
  },
  'beauty': {
    title: 'Beauty & Aesthetics',
    subtitle: 'High-conversion booking engines and commerce for salons, spas, and cosmetics.',
    categoryTag: 'AESTHETIC BOOKING & COMMERCE',
    description: 'Transform client booking with zero-friction appointment calendars, specialist selection, and automated SMS appointment reminders.',
    subcategories: ['Salons', 'Skincare Brands', 'Makeup Artists', 'Spas', 'Cosmetics', 'Barbershops'],
    challenges: [
      'High no-show rates on unconfirmed appointments',
      'Fragmented systems for booking services vs selling products',
      'Clunky mobile scheduling flows for client appointments',
      'Inability to collect pre-service deposit fees'
    ],
    capabilities: [
      { title: 'Specialist & Service Selector', desc: 'Choose staff member, service tier, and add-on treatments.' },
      { title: 'Automated SMS Reminders', desc: 'Reduce no-shows with two-way SMS confirmation loops.' },
      { title: 'Integrated Product Storefront', desc: 'Sell skincare products alongside service booking.' }
    ],
    technologies: ['React', 'Twilio API', 'Shopify Storefront API', 'Stripe', 'Tailwind'],
    kpi: { value: '-68%', label: 'No-Show Reduction' },
    demoType: 'booking'
  },
  'sports-fitness': {
    title: 'Sports & Fitness',
    subtitle: 'Membership systems, class booking, and digital workout platforms for fitness brands.',
    categoryTag: 'MEMBERSHIP & CLASS ARCHITECTURE',
    description: 'Keep your community engaged with real-time class spot reservations, recurring membership billing, and workout video streaming.',
    subcategories: ['Gyms', 'Personal Trainers', 'Yoga Studios', 'Sports Clubs', 'Athletic Brands', 'Martial Arts'],
    challenges: [
      'Overbooked classes caused by inaccurate real-time counts',
      'High member churn from failed monthly credit card payments',
      'Lack of integrated digital video workouts for remote members',
      'Slow mobile check-in processes at physical gym locations'
    ],
    capabilities: [
      { title: 'Real-Time Class Spot Reservation', desc: 'Live capacity counts with automated waitlist notifications.' },
      { title: 'Automated Dunning Rules', desc: 'Recover failed subscription payments with smart card retry logic.' },
      { title: 'Digital Video Library', desc: 'On-demand video workout streaming for remote members.' }
    ],
    technologies: ['React Native', 'Next.js', 'PostgreSQL', 'Stripe Subscriptions', 'Redis'],
    kpi: { value: '99.4%', label: 'Class Capacity Precision' },
    demoType: 'fitness'
  },
  'health-wellness': {
    title: 'Health & Wellness',
    subtitle: 'Secure, HIPAA-compliant digital infrastructure for medical practices and wellness.',
    categoryTag: 'HIPAA & WELLNESS ARCHITECTURE',
    description: 'Deploy compliant patient intake forms, telehealth scheduling, and secure consultation platforms designed for privacy and speed.',
    subcategories: ['Therapists', 'Nutritionists', 'Medical Clinics', 'Wellness Retreats', 'Mental Health', 'Alternative Medicine'],
    challenges: [
      'Complex regulatory and HIPAA compliance burdens',
      'Manual paper intake forms creating administrative bottlenecks',
      'Insecure patient communication and file sharing',
      'Poor mobile experience for telehealth consultations'
    ],
    capabilities: [
      { title: 'HIPAA-Compliant Form Intake', desc: 'Encrypted patient intake questionnaires with audit logging.' },
      { title: 'Telehealth Video Integration', desc: 'Browser-native WebRTC video rooms with end-to-end encryption.' },
      { title: 'Automated Recalls & Follow-ups', desc: 'Scheduled patient check-in prompts and wellness surveys.' }
    ],
    technologies: ['React', 'AWS HIPAA Stack', 'Daily.co WebRTC', 'PostgreSQL', 'TypeScript'],
    kpi: { value: '100%', label: 'HIPAA Audit Compliant' },
    demoType: 'intake'
  },
  'home-services': {
    title: 'Home Services',
    subtitle: 'High-converting lead generation and dispatch routing for local service contractors.',
    categoryTag: 'DISPATCH & LOCAL LEAD ENGINE',
    description: 'Dominate local search intent with instant project quote calculators, real-time service area mapping, and automated lead dispatch.',
    subcategories: ['Contractors', 'Landscaping', 'Cleaning Services', 'Plumbers', 'Electricians', 'HVAC'],
    challenges: [
      'Slow lead response times causing lost sales to competitors',
      'Unqualified phone calls wasting estimator field time',
      'Poor Google Local Pack map rankings',
      'Lack of instant online quote generation for homeowners'
    ],
    capabilities: [
      { title: 'Instant Online Quote Estimator', desc: 'Calculates project estimates based on square footage and options.' },
      { title: 'Local SEO Map Domination', desc: 'Optimized schema markup for multi-location service areas.' },
      { title: 'SMS Lead Dispatch', desc: 'Routes incoming emergency service leads directly to field technicians.' }
    ],
    technologies: ['Next.js', 'Google Maps API', 'Twilio', 'Tailwind', 'Vercel'],
    kpi: { value: '<2 min', label: 'Avg Lead Response Time' },
    demoType: 'quote'
  },
  'events-experiences': {
    title: 'Events & Experiences',
    subtitle: 'High-concurrency ticketing and attendee management for festivals, venues, and summits.',
    categoryTag: 'TICKETING & EVENT ARCHITECTURE',
    description: 'Handle explosive ticket drops with zero crash edge queues, digital QR pass issuance, and real-time attendee check-in scanners.',
    subcategories: ['Event Planners', 'Venues', 'Festivals', 'Tour Guides', 'Conferences', 'Pop-ups'],
    challenges: [
      'Server crashes during peak ticket sale launch minutes',
      'High ticketing fee commissions charged by legacy platforms',
      'Scalper bots buying out inventory before genuine fans',
      'Slow gate check-in lines causing attendee frustration'
    ],
    capabilities: [
      { title: 'High-Concurrency Ticket Queue', desc: 'Absorb thousands of checkout hits during drop launches.' },
      { title: 'Apple Wallet / QR Pass Generator', desc: 'Cryptographic digital passes scanned at venue gates.' },
      { title: 'Tiered VIP Pass Sales', desc: 'Early bird, general admission, and VIP package tiers.' }
    ],
    technologies: ['Next.js', 'Redis Queue', 'Stripe Connect', 'Apple Wallet API', 'Cloudflare'],
    kpi: { value: '50k/min', label: 'Concurrent Ticket Hits' },
    demoType: 'tickets'
  },
  'charities-nonprofits': {
    title: 'Charities & Nonprofits',
    subtitle: 'Zero-fee donation pipelines and transparent impact reporting for foundations.',
    categoryTag: 'DONATION & IMPACT PIPELINE',
    description: 'Maximize donor conversion with zero platform fee collection, automatic tax-deductible receipts, and real-time impact meters.',
    subcategories: ['Foundations', 'NGOs', 'Community Groups', 'Religious Organizations', 'Advocacy', 'Fundraisers'],
    challenges: [
      'High third-party platform fee commissions cutting into donor funds',
      'Friction in setting up monthly recurring donor subscriptions',
      'Lack of clear, visual impact metrics to show donor ROI',
      'Outdated tax receipt issuance workflows'
    ],
    capabilities: [
      { title: '0% Platform Fee Collection', desc: '100% of donor contributions reach your organizational bank account.' },
      { title: 'Instant 501(c)(3) Tax Receipts', desc: 'Automated PDF tax receipt generation sent via email.' },
      { title: 'Real-Time Impact Goal Bar', desc: 'Visual progress meters for active campaigns.' }
    ],
    technologies: ['React', 'Stripe Giving', 'Node.js', 'PostgreSQL', 'PDFKit'],
    kpi: { value: '100%', label: 'Funds To Mission' },
    demoType: 'impact'
  },
  'personal': {
    title: 'Personal Brand & Identity',
    subtitle: 'High-impact digital identities and micro-sites for authors, speakers, and public figures.',
    categoryTag: 'PERSONAL BRAND ARCHITECTURE',
    description: 'Elevate your personal authority with clean, editorial bio sites, press kit downloads, speaking inquiry forms, and media links.',
    subcategories: ['Influencers', 'Public Figures', 'Authors', 'Speakers', 'Job Seekers', 'Hobbyists'],
    challenges: [
      'Generic link-in-bio pages that feel cheap and unbranded',
      'Disorganized press kits causing missed media opportunities',
      'Slow inquiry response times for speaking engagements',
      'Inability to showcase published books, podcasts, and talks in one place'
    ],
    capabilities: [
      { title: 'Editorial Bio Architecture', desc: 'High-contrast typography showcasing career achievements.' },
      { title: 'Media & Press Kit Downloads', desc: 'High-resolution headshots, bio sheets, and media assets.' },
      { title: 'Speaking Inquiry Pipeline', desc: 'Structured booking forms for keynote speaking requests.' }
    ],
    technologies: ['Next.js', 'Framer Motion', 'Tailwind', 'Vercel', 'Sanity.io'],
    kpi: { value: '100/100', label: 'Brand Authority Score' },
    demoType: 'bio'
  }
};

const defaultRecord: SolutionRecord = {
  title: 'Industry Solution',
  subtitle: 'Engineered for your specific vertical.',
  categoryTag: 'VERTICAL ARCHITECTURE',
  description: 'Every industry demands custom digital infrastructure. We combine aesthetic precision with serious engineering to solve your market challenges.',
  subcategories: ['Startups', 'Enterprise', 'B2B Services', 'E-commerce', 'Platforms'],
  challenges: [
    'Legacy platforms slowing down innovation speed',
    'High customer acquisition costs',
    'Technical debt and scaling bottlenecks',
    'Poor conversion rates across touchpoints'
  ],
  capabilities: [
    { title: 'Bespoke Frontend Architecture', desc: 'Sub-second page loads engineered for conversion.' },
    { title: 'API & Microservice Integration', desc: 'Decoupled systems that adapt to your business needs.' },
    { title: 'Data & Analytics Visibility', desc: 'Real-time visibility into metrics that matter.' }
  ],
  technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
  kpi: { value: '<1.0s', label: 'Global Response SLA' },
  demoType: 'grid'
};

export default function SolutionDetail() {
  const { slug } = useParams<{ slug: string }>();
  const data = (slug && solutionMap[slug]) ? solutionMap[slug] : defaultRecord;

  // Interactive Demo Widget States
  const [gridStyle, setGridStyle] = useState('Masonry');
  const [retainerAmt, setRetainerAmt] = useState(15000);
  const [cohortWeek, setCohortWeek] = useState(1);
  const [selectedStylist, setSelectedStylist] = useState('Elena Vance (Master)');
  const [classSpots, setClassSpots] = useState(4);
  const [quoteSqft, setQuoteSqft] = useState(2500);
  const [ticketQty, setTicketQty] = useState(2);
  const [donatedTotal, setDonatedTotal] = useState(12500);

  return (
    <div className="w-full bg-transparent text-primary font-sans min-h-screen pt-36 pb-24 overflow-x-hidden">
      <SEO 
        title={`${data.title} Solutions | GRAVIT®`} 
        description={data.subtitle} 
        path={`/solutions/${slug}`}
      />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 w-full">
        {/* Breadcrumb */}
        <div className="mb-12">
          <Link to="/solutions" className="text-secondary hover:text-primary transition-colors font-mono text-xs uppercase tracking-widest flex items-center gap-2">
            ← Back to Industry Solutions
          </Link>
        </div>

        {/* Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-border pb-16 mb-20">
          <div className="lg:col-span-8">
            <span className="font-mono text-xs uppercase tracking-widest text-accent block mb-4">
              {data.categoryTag}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.88] mb-6">
              {data.title}
            </h1>
            <p className="text-xl md:text-2xl text-secondary leading-relaxed font-light mb-8 max-w-3xl">
              {data.subtitle}
            </p>
            <p className="text-base text-secondary/80 leading-relaxed max-w-2xl">
              {data.description}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-border pt-8 lg:pt-0 lg:pl-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-secondary block mb-4">
                Sub-Verticals We Serve
              </span>
              <div className="flex flex-wrap gap-2 mb-8">
                {data.subcategories.map((sub) => (
                  <span key={sub} className="px-3 py-1.5 bg-surface border border-border text-xs font-mono text-secondary">
                    {sub}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 border border-border bg-surface font-mono">
              <span className="text-[10px] text-secondary uppercase block mb-1">BENCHMARK PERFORMANCE</span>
              <div className="text-4xl font-bold text-accent mb-1">{data.kpi.value}</div>
              <span className="text-xs text-secondary">{data.kpi.label}</span>
            </div>
          </div>
        </div>

        {/* INDUSTRY INTERACTIVE WIDGET DEMO */}
        <section className="mb-24">
          <div className="flex items-center justify-between border-b border-border pb-4 mb-8 font-mono text-xs uppercase tracking-wider text-secondary">
            <span>Interactive {data.title} Architecture Simulator</span>
            <span className="text-accent">INTERACTIVE DEMO</span>
          </div>

          <div className="border border-border bg-surface p-8 md:p-12 font-mono">
            {data.demoType === 'grid' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs text-secondary uppercase">PORTFOLIO COMPOSITION LAYOUT:</span>
                  <div className="flex gap-2">
                    {['Masonry', 'Editorial', 'Full-Bleed'].map(style => (
                      <button
                        key={style}
                        onClick={() => setGridStyle(style)}
                        aria-pressed={gridStyle === style}
                        className={`px-3 py-1.5 text-xs transition-colors border ${gridStyle === style ? 'bg-primary text-background border-primary' : 'border-border text-secondary'}`}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>
                <div className={`grid gap-4 transition-all duration-500 ${gridStyle === 'Masonry' ? 'grid-cols-3' : gridStyle === 'Editorial' ? 'grid-cols-2' : 'grid-cols-1'}`}>
                  {[1, 2, 3].map(n => (
                    <div key={n} className="p-8 border border-border bg-background flex flex-col justify-between h-36">
                      <span className="text-xs text-secondary uppercase">PROJECT 0{n}</span>
                      <span className="text-sm font-bold uppercase">Architectural Archive — {gridStyle} Composition</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {data.demoType === 'retainer' && (
              <div>
                <span className="text-xs text-secondary uppercase block mb-4">MONTHLY CONSULTING RETAINER ESTIMATOR:</span>
                <input 
                  type="range" 
                  min="5000" 
                  max="50000" 
                  step="2500" 
                  value={retainerAmt} 
                  onChange={(e) => setRetainerAmt(parseInt(e.target.value))}
                  className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-accent mb-6"
                />
                <div className="flex justify-between items-center p-6 border border-border bg-background">
                  <span className="text-sm text-secondary uppercase">Monthly Retainer Amount:</span>
                  <span className="text-3xl font-bold text-accent">${retainerAmt.toLocaleString()} / mo</span>
                </div>
              </div>
            )}

            {data.demoType === 'cohort' && (
              <div>
                <span className="text-xs text-secondary uppercase block mb-4">COHORT CURRICULUM DRIP PREVIEW:</span>
                <div className="flex gap-2 mb-6">
                  {[1, 2, 3, 4].map(wk => (
                    <button 
                      key={wk} 
                      onClick={() => setCohortWeek(wk)}
                      aria-pressed={cohortWeek === wk}
                      className={`flex-1 py-3 text-xs border ${cohortWeek === wk ? 'bg-primary text-background border-primary' : 'border-border text-secondary'}`}
                    >
                      Week {wk}
                    </button>
                  ))}
                </div>
                <div className="p-6 border border-border bg-background">
                  <span className="text-xs text-accent uppercase block mb-1">MODULE UNLOCKED (WEEK {cohortWeek}):</span>
                  <div className="text-lg font-bold uppercase">Advanced System Design & Edge Architecture Part 0{cohortWeek}</div>
                </div>
              </div>
            )}

            {data.demoType === 'booking' && (
              <div>
                <span className="text-xs text-secondary uppercase block mb-4">AESTHETIC SERVICE BOOKING SELECTOR:</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Elena Vance (Master)', 'Julian Thorne (Senior)'].map(stylist => (
                    <button
                      key={stylist}
                      onClick={() => setSelectedStylist(stylist)}
                      aria-pressed={selectedStylist === stylist}
                      className={`p-4 text-left border text-xs ${selectedStylist === stylist ? 'border-accent bg-accent/10 text-accent font-bold' : 'border-border text-secondary'}`}
                    >
                      <span>SPECIALIST: {stylist}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {data.demoType === 'fitness' && (
              <div>
                <span className="text-xs text-secondary uppercase block mb-4">CLASS RESERVATION SPOT COUNTER:</span>
                <div className="flex items-center justify-between p-6 border border-border bg-background">
                  <span className="text-sm font-bold uppercase">HIIT Conditioning — 07:00 AM</span>
                  <div className="flex items-center gap-4">
                    <button onClick={() => setClassSpots(s => Math.max(1, s - 1))} className="px-3 py-1 border border-border">-</button>
                    <span className="text-accent font-bold">{classSpots} SPOTS REMAINING</span>
                    <button onClick={() => setClassSpots(s => s + 1)} className="px-3 py-1 border border-border">+</button>
                  </div>
                </div>
              </div>
            )}

            {data.demoType === 'quote' && (
              <div>
                <span className="text-xs text-secondary uppercase block mb-4">INSTANT PROJECT ESTIMATOR (SQUARE FEET):</span>
                <input 
                  type="range" 
                  min="500" 
                  max="10000" 
                  step="250" 
                  value={quoteSqft} 
                  onChange={(e) => setQuoteSqft(parseInt(e.target.value))}
                  className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-accent mb-6"
                />
                <div className="flex justify-between items-center p-6 border border-border bg-background">
                  <span className="text-sm text-secondary uppercase">PROPERTY AREA: {quoteSqft.toLocaleString()} SQFT</span>
                  <span className="text-2xl font-bold text-accent">ESTIMATE: ${(quoteSqft * 4.5).toLocaleString()}</span>
                </div>
              </div>
            )}

            {data.demoType === 'tickets' && (
              <div>
                <span className="text-xs text-secondary uppercase block mb-4">VIP PASS TICKET SELECTOR:</span>
                <div className="flex items-center justify-between p-6 border border-border bg-background">
                  <span className="text-sm font-bold uppercase">VIP PASS ($250 / pass)</span>
                  <div className="flex items-center gap-4">
                    <button onClick={() => setTicketQty(q => Math.max(1, q - 1))} className="px-3 py-1 border border-border">-</button>
                    <span className="text-accent font-bold">{ticketQty} TICKETS (${ticketQty * 250})</span>
                    <button onClick={() => setTicketQty(q => q + 1)} className="px-3 py-1 border border-border">+</button>
                  </div>
                </div>
              </div>
            )}

            {data.demoType === 'impact' && (
              <div>
                <span className="text-xs text-secondary uppercase block mb-4">DONATION IMPACT METER:</span>
                <div className="p-6 border border-border bg-background flex justify-between items-center">
                  <span className="text-sm text-secondary uppercase">TOTAL FUNDS TO MISSION:</span>
                  <span className="text-3xl font-bold text-accent">${donatedTotal.toLocaleString()}</span>
                </div>
              </div>
            )}

            {data.demoType === 'bio' && (
              <div>
                <span className="text-xs text-secondary uppercase block mb-4">EDITORIAL LINK-IN-BIO CARD PREVIEW:</span>
                <div className="p-6 border border-border bg-background flex justify-between items-center">
                  <div>
                    <div className="text-lg font-bold uppercase">MARCUS VANCE</div>
                    <div className="text-xs text-secondary">Author & Keynote Speaker</div>
                  </div>
                  <span className="px-4 py-2 bg-primary text-background text-xs uppercase font-bold">Press Kit →</span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="mb-24 border-t border-border pt-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase mb-12">
            CORE {data.title.toUpperCase()} CAPABILITIES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.capabilities.map((cap, i) => (
              <div key={cap.title} className="p-8 border border-border bg-background flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-secondary block mb-4">0{i + 1}</span>
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-3">{cap.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges Solved */}
        <section className="mb-24 border-t border-border pt-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase mb-12">
            INDUSTRY CHALLENGES WE SOLVE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.challenges.map((ch, i) => (
              <div key={i} className="p-6 border border-border bg-surface flex items-start gap-4 font-mono text-sm">
                <span className="text-accent font-bold">✓</span>
                <span className="text-secondary leading-relaxed">{ch}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Tech Stack */}
        <section className="mb-24 border-t border-border pt-16">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-bold uppercase tracking-tight font-mono">RECOMMENDED TECH STACK</h2>
            <span className="text-xs font-mono text-secondary">ENTERPRISE GRADE</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {data.technologies.map((tech) => (
              <span key={tech} className="px-5 py-3 bg-surface border border-border text-sm font-mono text-primary font-bold">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-surface p-12 md:p-16 text-center relative overflow-hidden">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase mb-6 relative z-10">
            ENGINEER YOUR {data.title.toUpperCase()} PLATFORM
          </h2>
          <p className="text-secondary text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Let's discuss how our tailored {data.title.toLowerCase()} architecture can elevate your brand and drive measurable growth.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-10 py-5 bg-primary text-background font-bold text-sm uppercase tracking-widest hover:bg-accent hover:text-background transition-colors relative z-10"
          >
            Start Industry Project →
          </Link>
        </section>
      </div>
    </div>
  );
}
