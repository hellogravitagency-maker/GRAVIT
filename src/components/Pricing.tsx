import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-black text-white selection:bg-[#FF6A39] selection:text-white">
      <div className="max-w-6xl mx-auto">
        <header className="mb-20 text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 font-heading">Pricing</h1>
          <p className="text-xl text-white/70 max-w-2xl font-body">
            Fixed pricing, no surprises. Every project starts with a scoped quote — these are the tiers that quote comes from.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {/* Tier 1 */}
          <div className="border border-white/10 rounded-2xl p-8 bg-white/5 hover:border-white/20 transition-colors flex flex-col">
            <div className="mb-8">
              <h3 className="text-[#6E7BFF] font-mono text-sm uppercase tracking-wider mb-2">Static / Brochure Sites</h3>
              <div className="text-3xl font-bold font-heading mb-2">Starting at ₹25,000</div>
              <div className="text-white/50 text-sm font-mono">(typical range ₹25K–₹60K)</div>
            </div>
            
            <ul className="space-y-4 text-white/80 font-body flex-grow mb-8">
              <li className="flex items-start gap-3">
                <span className="text-[#FF6A39] mt-1">✦</span>
                <span>Up to 6 custom-designed pages (Home, About, Services, Portfolio, Contact, +1)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF6A39] mt-1">✦</span>
                <span>Fully responsive, hand-built layout — no page-builder templates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF6A39] mt-1">✦</span>
                <span>Lightweight GSAP scroll-reveal animations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF6A39] mt-1">✦</span>
                <span>On-page SEO basics: meta tags, sitemap, OG images</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF6A39] mt-1">✦</span>
                <span>Contact form wired to email</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF6A39] mt-1">✦</span>
                <span>2 rounds of revisions included</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF6A39] mt-1">✦</span>
                <span>Delivery: 1–2 weeks from content handoff</span>
              </li>
            </ul>
            <div className="pt-6 border-t border-white/10">
              <p className="text-sm text-white/60 font-body">
                <strong className="text-white">Best for:</strong> portfolios, single-service businesses, event/landing pages
              </p>
            </div>
          </div>

          {/* Tier 2 */}
          <div className="border border-[#FF6A39]/30 rounded-2xl p-8 bg-gradient-to-b from-[#FF6A39]/10 to-transparent relative flex flex-col">
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#FF6A39] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Most Popular
            </div>
            <div className="mb-8">
              <h3 className="text-[#FF6A39] font-mono text-sm uppercase tracking-wider mb-2">Dynamic / CMS Sites</h3>
              <div className="text-3xl font-bold font-heading mb-2">Starting at ₹85,000</div>
              <div className="text-white/50 text-sm font-mono">(typical range ₹85K–₹2.5L)</div>
            </div>
            
            <ul className="space-y-4 text-white/80 font-body flex-grow mb-8">
              <li className="flex items-start gap-3">
                <span className="text-[#FF6A39] mt-1">✦</span>
                <span>Up to 15 pages/routes with a CMS or admin panel — client can edit content without a developer</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF6A39] mt-1">✦</span>
                <span>Blog/news section, image galleries, multi-step forms with backend storage</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF6A39] mt-1">✦</span>
                <span>Database-backed where needed (schools, growing businesses, multi-branch services)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF6A39] mt-1">✦</span>
                <span>On-page SEO + basic analytics setup</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF6A39] mt-1">✦</span>
                <span>3 rounds of revisions included</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF6A39] mt-1">✦</span>
                <span>3 months of post-launch support included</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF6A39] mt-1">✦</span>
                <span>Delivery: 3–6 weeks from content handoff</span>
              </li>
            </ul>
            <div className="pt-6 border-t border-white/10">
              <p className="text-sm text-white/60 font-body">
                <strong className="text-white">Best for:</strong> schools, clinics, multi-service brands — anything needing self-editable content
              </p>
            </div>
          </div>

          {/* Tier 3 */}
          <div className="border border-white/10 rounded-2xl p-8 bg-white/5 hover:border-white/20 transition-colors flex flex-col">
            <div className="mb-8">
              <h3 className="text-[#6E7BFF] font-mono text-sm uppercase tracking-wider mb-2">Custom / Cinematic 3D</h3>
              <div className="text-3xl font-bold font-heading mb-2">Custom Quote</div>
              <div className="text-white/50 text-sm font-mono">(starts at ₹2.5L, typical ₹2.5L–₹10L+)</div>
            </div>
            
            <ul className="space-y-4 text-white/80 font-body flex-grow mb-8">
              <li className="flex items-start gap-3">
                <span className="text-[#FF6A39] mt-1">✦</span>
                <span>Custom Three.js / React Three Fiber scenes, GLSL shaders, GSAP-driven scrollmation sequences</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF6A39] mt-1">✦</span>
                <span>Full-stack web applications, e-commerce builds, or SaaS front-ends</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF6A39] mt-1">✦</span>
                <span>Performance budgeting across device tiers, cross-browser/cross-device QA</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF6A39] mt-1">✦</span>
                <span>Dedicated project milestones and check-ins</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF6A39] mt-1">✦</span>
                <span>3–6 months of post-launch support included</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF6A39] mt-1">✦</span>
                <span>Delivery: 6–12+ weeks depending on scope</span>
              </li>
            </ul>
            <div className="pt-6 border-t border-white/10">
              <p className="text-sm text-white/60 font-body">
                <strong className="text-white">Best for:</strong> flagship brand sites, product launches — anything where the site itself is the differentiator
              </p>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          
          <div>
            <h2 className="text-2xl font-bold font-heading mb-8 pb-4 border-b border-white/10">Add-Ons (All Tiers)</h2>
            <ul className="space-y-6 text-white/80 font-body">
              <li>
                <strong className="text-white block mb-1">Annual Maintenance Contract (AMC):</strong>
                15% of project cost per year — content updates, security patches, uptime checks
              </li>
              <li>
                <strong className="text-white block mb-1">Extra revision round:</strong>
                ₹3,000 (Tier 1) / ₹6,000 (Tier 2) / quoted per round (Tier 3)
              </li>
              <li>
                <strong className="text-white block mb-1">Domain + hosting setup assistance:</strong>
                At actual cost + ₹2,000 service fee (or client manages their own accounts — GRAVIT can advise either way)
              </li>
              <li>
                <strong className="text-white block mb-1">Rush delivery (compressed timeline):</strong>
                +25% of project fee
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold font-heading mb-8 pb-4 border-b border-white/10">Payment Terms</h2>
            <ul className="space-y-6 text-white/80 font-body">
              <li>
                <strong className="text-[#FF6A39]">Tier 1 (Static):</strong> 50% advance to begin work, 50% before final handover / domain transfer
              </li>
              <li>
                <strong className="text-[#FF6A39]">Tier 2 & 3 (Dynamic/Custom):</strong> 40% advance to begin, 30% at the midpoint milestone (design/dev review), 30% on completion before go-live
              </li>
              <li>
                Advance payments reserve project time and are non-refundable once work has started — see the <Link to="/refund-policy" className="text-white underline hover:text-[#FF6A39]">Refund & Cancellation Policy</Link> for the full breakdown
              </li>
              <li>
                Payment via bank transfer (NEFT/IMPS) or UPI, or another method agreed in writing at kickoff
              </li>
              <li className="text-sm text-white/50 border-t border-white/10 pt-4 mt-4">
                GRAVIT is presently an unregistered sole proprietorship operating under the GST registration threshold (₹20 lakh/year for services); invoices are issued as standard non-GST invoices.
              </li>
            </ul>
          </div>

        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h4 className="text-lg font-bold font-heading mb-2">Do these prices include hosting?</h4>
              <p className="text-white/70 font-body">No — hosting and domain are billed separately at actual cost, or you can manage your own accounts and we'll advise on setup.</p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h4 className="text-lg font-bold font-heading mb-2">What counts as a "revision round"?</h4>
              <p className="text-white/70 font-body">One consolidated set of feedback, delivered together — not ongoing back-and-forth. Extra rounds are billed per the add-ons above.</p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h4 className="text-lg font-bold font-heading mb-2">What if my project doesn't fit neatly into a tier?</h4>
              <p className="text-white/70 font-body">Most don't — the tiers are a starting point. Every project gets a scoped written quote before work begins.</p>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h4 className="text-lg font-bold font-heading mb-2">Do you offer ongoing support after launch?</h4>
              <p className="text-white/70 font-body">Yes, via the Annual Maintenance Contract, or ad hoc at an hourly rate we'll quote at the time.</p>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h4 className="text-lg font-bold font-heading mb-2">How do payments work?</h4>
              <p className="text-white/70 font-body">See Payment Terms above — advance to start, milestone or completion payments after. Full detail in our <Link to="/terms" className="text-[#FF6A39] hover:underline">Terms & Conditions</Link>.</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center pb-12">
          <Link to="/contact" className="inline-block bg-[#FF6A39] text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform">
            Request a Quote
          </Link>
        </div>

      </div>
    </div>
  );
}
