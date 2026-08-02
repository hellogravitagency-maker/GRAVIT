import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { GlowingEffect } from './ui/glowing-effect';
import SpecularButton from './SpecularButton';
import { cn } from '../lib/utils';
import SEO from './SEO';


const pricingTiers = [
  {
    name: "Starter / Standard",
    subtitle: "Static & Brochure Sites",
    price: "₹20k",
    description: "Ideal for portfolios, single-service businesses, and event landing pages. (Typical range: ₹20K–₹45K)",
    features: [
      "Up to 6 custom-designed pages",
      "Fully responsive, mobile-first layout",
      "Lightweight GSAP micro-animations",
      "Fundamental on-page SEO setup",
      "Lightning-fast performance optimization",
      "Contact form with email integration",
      "2 rounds of design revisions",
      "Delivery: 1–2 weeks from content handoff"
    ],
    buttonText: "Request Quote",
    span: "col-span-1 md:col-span-12 lg:col-span-4",
    isPrimary: false
  },
  {
    name: "Professional / Dynamic",
    subtitle: "CMS & Educational Sites",
    price: "₹30k",
    description: "Perfect for schools, clinics, and brands needing self-editable content. (Typical range: ₹30K–₹80K)",
    features: [
      "Up to 15 pages with custom CMS / Admin panel",
      "Blog/news, advanced galleries, and multi-step forms",
      "Scalable database architecture (Supabase/PostgreSQL)",
      "Premium UI/UX with interactive micro-animations",
      "Automated email workflows and notifications",
      "Advanced on-page SEO & analytics integration",
      "3 rounds of design revisions included",
      "3 months of priority post-launch support",
      "Delivery: 3–6 weeks from content handoff"
    ],
    buttonText: "Request Quote",
    span: "col-span-1 md:col-span-12 lg:col-span-4",
    isPrimary: true
  },
  {
    name: "Premium / Custom",
    subtitle: "Cinematic 3D & WebGL",
    price: "₹80k",
    description: "For flagship brand sites and bespoke digital experiences. (Starts at ₹80K, scalable)",
    features: [
      "Custom WebGL, Three.js / R3F scenes & GLSL Shaders",
      "Complex Full-stack web apps or bespoke E-commerce",
      "Cinematic scroll sequences and physics interactions",
      "Strict performance budgeting across all devices",
      "Dedicated project manager and milestones",
      "Continuous deployment pipeline & rigorous QA",
      "3–6 months dedicated engineering support",
      "Delivery: 6–12+ weeks based on scope"
    ],
    buttonText: "Request Quote",
    span: "col-span-1 md:col-span-12 lg:col-span-4",
    isPrimary: false
  }
];

// Interactive Pricing Card Component
const PricingCard = ({ tier, index }: { tier: any, index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={cn(
        "group relative h-full",
        tier.span
      )}
    >
      <SEO title="Pricing & Engagement Models" description="Transparent pricing for our digital services, retainers, and enterprise solutions." />
      <div
        className={cn(
          "h-full flex flex-col rounded-[24px] border transition-colors duration-500 relative",
          "bg-[#050505] border-white/10 hover:border-white/30"
        )}
      >
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative z-10 flex flex-col h-full pointer-events-none p-8">
          <div className="mb-8 border-b border-white/10 pb-8 flex flex-col justify-between gap-4">
            <div>
              {tier.subtitle && <div className="text-white text-xs font-bold tracking-widest uppercase mb-3">{tier.subtitle}</div>}
              <h3 className={cn(
                "font-bold mb-3 tracking-tight",
                tier.isPrimary ? "text-3xl text-white" : "text-2xl text-white"
              )}>
                {tier.name}
              </h3>
              <p className={cn(
                "text-white/60 font-light leading-relaxed",
                tier.isPrimary ? "text-sm" : "text-sm"
              )}>
                {tier.description}
              </p>
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <span className="text-white/40 text-[10px] font-mono uppercase tracking-widest">Starting at</span>
              <div className="flex items-baseline gap-2">
                <span className={cn(
                  "font-bold tracking-tighter text-white",
                  tier.isPrimary ? "text-5xl text-white" : "text-4xl"
                )}>
                  {tier.price}
                </span>
                <span className="text-white/40 text-xl font-light tracking-tighter">+</span>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-3 mb-10">
            {tier.features.map((feature: string, idx: number) => (
              <div key={idx} className="flex items-start gap-3 text-white/80">
                <svg className={cn("w-4 h-4 mt-0.5 shrink-0", tier.isPrimary ? "text-white" : "text-white/40")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs md:text-sm font-light leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-6 pointer-events-auto w-full border-t border-white/5">
            <SpecularButton
              size="lg"
              radius={999}
              tint="#ffffff"
              tintOpacity={tier.isPrimary ? 0.05 : 0}
              textColor="#ffffff"
              lineColor={tier.isPrimary ? "#ffffff" : "#ffffff"}
              baseColor={tier.isPrimary ? "#1a1a1a" : "#111"}
              className="w-full font-bold uppercase tracking-widest text-xs py-4"
              onClick={() => navigate('/contact')}
            >
              {tier.buttonText}
            </SpecularButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'amc' | 'mmc'>('amc');
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-full overflow-x-clip bg-transparent text-white font-sans pt-20">
      {/* PRICING SECTION APPENDED */}
      <section id="pricing" className="pt-32 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 grid-flow-dense gap-4 md:gap-6">
          {pricingTiers.map((tier, i) => (
            <PricingCard key={tier.name} tier={tier} index={i} />
          ))}
        </div>
      </section>

            {/* ADD-ONS AND MAINTENANCE */}
      <section className="px-4 md:px-8 max-w-[1400px] mx-auto pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-4 font-['Outfit',sans-serif]">Expand Your Build</h2>
          <p className="text-white/50 text-lg max-w-2xl font-light">Powerful integrations and premium additions, priced transparently.</p>
        </motion.div>

        <div className="flex flex-col border-t border-white/10">
          {[
            { name: "Extra page beyond package", price: "₹2,500 – ₹4,000 / page", desc: "Seamlessly integrated." },
            { name: "Custom logo design", price: "₹6,000 – ₹15,000", desc: "Brand identity from scratch." },
            { name: "Professional copywriting", price: "₹1,500 – ₹3,000 / page", desc: "Conversion-focused." },
            { name: "On-site photography (half-day)", price: "₹6,000 – ₹15,000", desc: "High-end visual assets." },
            { name: "Parent/Student login portal", price: "₹30,000 – ₹65,000", desc: "Secure access environments." },
            { name: "Online fee payment gateway", price: "₹15,000 – ₹35,000", desc: "Seamless transactions." },
            { name: "Custom 3D/animated hero (Three.js)", price: "₹25,000 – ₹60,000", desc: "Cinematic first impressions." },
            { name: "Alumni portal / registration module", price: "₹12,000 – ₹25,000", desc: "Community management." },
            { name: "Blog / magazine CMS section", price: "₹10,000 – ₹18,000", desc: "Content at scale." },
            { name: "Multi-language (e.g., Telugu + EN)", price: "₹10,000 – ₹22,000", desc: "Reach every audience." }
          ].map((addon, idx) => (
            <motion.div 
              key={addon.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.03 }}
              className="group flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 border-b border-white/10 hover:bg-white/[0.02] transition-colors gap-4 px-4 md:px-6 -mx-4 md:-mx-6 rounded-2xl"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 lg:gap-16 w-full md:w-3/4">
                <h3 className="text-white font-bold tracking-tight text-lg md:text-xl w-full md:w-[45%]">{addon.name}</h3>
                <p className="text-white/50 text-sm md:text-base font-light">{addon.desc}</p>
              </div>
              <div className="font-mono text-[var(--color-accent)] font-semibold text-sm tracking-widest shrink-0 mt-2 md:mt-0">
                {addon.price}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MAINTENANCE (AMC / MMC) & OUT OF SCOPE */}
      <section className="px-4 md:px-8 max-w-[1400px] mx-auto pb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-4 font-['Outfit',sans-serif]">Maintenance Contracts</h2>
            <p className="text-white/50 text-lg max-w-2xl font-light">Keep your digital asset secure, fast, and up-to-date.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center bg-white/5 p-1 rounded-full border border-white/10 shrink-0 self-start md:self-end"
          >
            <button 
              onClick={() => setBillingCycle('mmc')}
              className={cn("px-6 py-2.5 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300", billingCycle === 'mmc' ? "bg-white text-black" : "text-white/50 hover:text-white")}
            >
              MMC (Monthly)
            </button>
            <button 
              onClick={() => setBillingCycle('amc')}
              className={cn("px-6 py-2.5 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300", billingCycle === 'amc' ? "bg-white text-black" : "text-white/50 hover:text-white")}
            >
              AMC (Annual)
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { tier: "Basic", priceAMC: "₹15,000", priceMMC: "₹1,500", desc: "Security patches, monthly backups, uptime monitoring, up to 1 hr/month content edits, 3-business-day response.", color: "text-white", glow: "group-hover:via-white/50" },
            { tier: "Standard", priceAMC: "₹28,000", priceMMC: "₹2,800", desc: "Weekly backups, up to 3 hrs/month edits, 24-hour response on critical issues.", color: "text-[var(--color-accent)]", glow: "group-hover:via-[var(--color-accent)]/80" },
            { tier: "Premium", priceAMC: "₹48,000", priceMMC: "₹4,800", desc: "Daily backups, up to 6 hrs/month edits, SEO health checks, same-day critical response, priority WhatsApp support.", color: "text-white", glow: "group-hover:via-purple-400/80" }
          ].map((plan, idx) => (
            <motion.div 
              key={plan.tier}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[rgba(255,255,255,0.02)] backdrop-blur-2xl border border-white/10 hover:border-white/30 hover:bg-[rgba(255,255,255,0.04)] rounded-3xl p-8 lg:p-10 relative overflow-hidden group transition-all duration-500 shadow-[0_0_30px_transparent] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-700 ${plan.glow}`}></div>
              <h3 className={`text-xl font-bold tracking-widest uppercase mb-4 ${plan.color}`}>{plan.tier}</h3>
              <div className="flex items-baseline gap-2 mb-6 border-b border-white/10 pb-6">
                <span className="text-4xl lg:text-5xl font-extrabold tracking-tighter text-white">
                  {billingCycle === 'amc' ? plan.priceAMC : plan.priceMMC}
                </span>
                <span className="text-white/40 text-sm font-mono tracking-widest uppercase">
                  / {billingCycle === 'amc' ? 'year' : 'mo'}
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed font-light">{plan.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-8 backdrop-blur-md"
        >
          <div>
            <h3 className="text-white font-bold tracking-tight mb-2 text-xl font-['Outfit',sans-serif]">Change Requests / Out-of-Scope</h3>
            <p className="text-white/50 text-sm font-light">Additions beyond the project scope are billed hourly or by the day.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="bg-black/50 px-6 py-4 rounded-2xl border border-white/5">
              <span className="block text-white/40 text-[10px] uppercase tracking-widest mb-1">Hourly Rate</span>
              <span className="text-white font-mono font-medium">₹1,000 – ₹1,500</span>
            </div>
            <div className="bg-black/50 px-6 py-4 rounded-2xl border border-white/5">
              <span className="block text-white/40 text-[10px] uppercase tracking-widest mb-1">Day Rate (Large Chunks)</span>
              <span className="text-white font-mono font-medium">₹6,000 – ₹8,000</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PAYMENT TERMS & COSTS */}
      <section className="px-4 md:px-8 max-w-[1400px] mx-auto pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-[3rem] p-10 md:p-14 backdrop-blur-xl"
          >
            <h2 className="text-3xl font-bold tracking-tighter mb-10 pb-6 border-b border-white/10 font-['Outfit',sans-serif]">Payment Terms</h2>
            <ul className="space-y-8 text-white/70 font-light">
              <li className="flex items-start gap-5">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 text-xs text-white font-mono">1</div>
                <div>
                  <strong className="text-white font-bold block mb-2 text-lg">Standard / Static Projects</strong> 
                  <span className="text-white/60 leading-relaxed">50% advance to begin work, 50% before final handover / domain transfer.</span>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="w-8 h-8 rounded-full bg-[#ffffff]/10 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono">2</div>
                <div>
                  <strong className="text-white font-bold block mb-2 text-lg">Custom / Complex Projects</strong> 
                  <span className="text-white/60 leading-relaxed">40% advance to begin, 30% at midpoint milestone, 30% on completion before go-live.</span>
                </div>
              </li>
              <li className="pt-8 mt-4 border-t border-white/10 text-sm leading-relaxed text-white/50">
                Advance payments reserve project time and are non-refundable once work has started.
              </li>
              <li className="text-xs text-white/30 leading-relaxed">
                GRAVIT is an unregistered sole proprietorship operating under the GST registration threshold; invoices are standard non-GST invoices.
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0a0a0a] border border-white/10 rounded-[3rem] p-10 md:p-14 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[120px] rounded-full pointer-events-none"></div>
            <h2 className="text-3xl font-bold tracking-tighter mb-3 text-[#ffffff] font-['Outfit',sans-serif]">Third-Party Costs</h2>
            <p className="text-white/50 text-sm mb-10 pb-6 border-b border-white/10">Billed at actuals without GRAVIT markup.</p>
            
            <div className="space-y-6 text-white/80 font-light">
              <div className="flex justify-between items-center group">
                <span className="font-medium text-lg">Domain (.in/.com)</span>
                <span className="font-mono text-white/40 group-hover:text-[#ffffff] transition-colors">₹700 – ₹1,500 / yr</span>
              </div>
              <div className="w-full h-[1px] bg-white/5"></div>
              <div className="flex justify-between items-center group">
                <span className="font-medium text-lg">Hosting (Shared/Business)</span>
                <span className="font-mono text-white/40 group-hover:text-[#ffffff] transition-colors">₹4,000 – ₹10,000 / yr</span>
              </div>
              <div className="w-full h-[1px] bg-white/5"></div>
              <div className="flex justify-between items-center group">
                <span className="font-medium text-lg">SSL Certificate</span>
                <span className="font-mono text-white/40 group-hover:text-[#ffffff] transition-colors">Free – ₹3,000 / yr</span>
              </div>
              <div className="w-full h-[1px] bg-white/5"></div>
              <div className="flex justify-between items-center group">
                <span className="font-medium text-lg">Payment Gateway</span>
                <span className="font-mono text-white/40 group-hover:text-[#ffffff] transition-colors">~2% per txn</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQS */}
      <section className="px-4 md:px-8 max-w-[1400px] mx-auto pb-48">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 font-['Outfit',sans-serif]">Frequently Asked Questions</h2>
          <p className="text-white/50 text-lg font-light max-w-2xl mx-auto">Clear answers to common inquiries.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { q: "Do these prices include hosting?", a: "No — hosting and domain are billed separately at actual cost, or you can manage your own accounts and we'll advise on setup." },
            { q: "What counts as a 'revision round'?", a: "One consolidated set of feedback, delivered together — not ongoing back-and-forth. Extra rounds are billed per the add-ons above." },
            { q: "What if my project doesn't fit neatly into a tier?", a: "Most don't — the tiers are a starting point. Every project gets a scoped written quote before work begins." },
            { q: "Do you offer ongoing support after launch?", a: "Yes, via the Annual Maintenance Contract, or ad hoc at an hourly rate we'll quote at the time." },
            { q: "How do payments work?", a: "See Payment Terms above — advance to start, milestone or completion payments after. Full detail in our Terms & Conditions." }
          ].map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-[rgba(255,255,255,0.02)] border border-white/5 rounded-[2.5rem] p-10 hover:bg-white/5 hover:border-white/20 transition-all duration-500 group ${idx === 4 ? 'md:col-span-2' : ''}`}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 opacity-50 group-hover:opacity-100 group-hover:text-[#ffffff] transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight mb-4 text-white group-hover:text-[#ffffff] transition-colors">{faq.q}</h3>
                  <p className="text-white/60 font-light leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
