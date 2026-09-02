import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const PLANS = [
  {
    name: "Starter",
    description: "Perfect for emerging brands needing a professional digital presence with precision engineering.",
    price: "Custom",
    features: [
      "Custom Website Design",
      "Responsive Development",
      "Basic SEO Architecture",
      "Contact Integrations",
      "Analytics Setup",
      "1 Month Technical Support"
    ],
    buttonText: "Brief Us",
    popular: false
  },
  {
    name: "Growth",
    description: "For scaling businesses requiring advanced functionality, CMS integration, and performance optimization.",
    price: "Custom",
    features: [
      "Everything in Starter",
      "E-commerce / Web App Features",
      "Headless CMS Integration",
      "Advanced WebGL / Motion",
      "Sub-second Performance",
      "3 Months Technical Support"
    ],
    buttonText: "Brief Us",
    popular: true
  },
  {
    name: "Enterprise",
    description: "Complex ecosystems, custom backend infrastructure, and dedicated engineering teams.",
    price: "Custom",
    features: [
      "Everything in Growth",
      "AI Builder Integrations",
      "Custom Backend Systems",
      "Dedicated Project Manager",
      "SLA Guarantees",
      "Ongoing Retainer Options"
    ],
    buttonText: "Contact Engineering",
    popular: false
  }
];

export default function Pricing() {
  return (
    <div className="w-full bg-background text-primary font-sans min-h-screen overflow-x-hidden relative">
      <SEO 
        title="Pricing — GRAVIT"
        description="Transparent pricing for our digital services, from starter websites to enterprise ecosystems."
        path="/pricing"
      />
      
      {/* HERO SECTION */}
      <section className="relative z-10 pt-48 pb-20 px-6 md:px-12 w-full max-w-7xl mx-auto border-b border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-secondary mb-8 inline-flex items-center gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-white" />
            03 / Engagement
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-heading font-medium tracking-tight leading-[0.9] text-primary max-w-6xl">
            Absolute clarity.
          </h1>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 mt-12 pt-12 border-t border-white/10">
          <div className="md:w-2/3">
            <p className="text-xl md:text-2xl text-secondary leading-relaxed font-light">
              We price based on complexity, timeline, and measurable value. No hidden fees. No surprises. Just pure engineering output.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING GRID */}
      <section className="relative z-10 py-24 px-6 md:px-12 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col p-10 md:p-12 rounded-[2rem] border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-white/20 bg-white/5' 
                  : 'border-white/5 bg-transparent'
              } glass-panel`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-background px-4 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest border border-primary">
                  Most Selected
                </div>
              )}
              
              <h3 className="text-3xl font-heading font-medium tracking-tight text-primary mb-4">{plan.name}</h3>
              <p className="text-secondary font-light text-sm mb-10 min-h-[60px] leading-relaxed">{plan.description}</p>
              
              <div className="mb-10 pb-10 border-b border-white/10">
                <span className="text-5xl font-heading font-medium tracking-tight text-primary">{plan.price}</span>
              </div>
              
              <div className="flex flex-col gap-6 flex-grow mb-12">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-primary shrink-0 opacity-50" />
                    <span className="text-sm font-light text-secondary">{feature}</span>
                  </div>
                ))}
              </div>

              <a 
                href="https://cal.com/gravitstudio/project-call" target="_blank" rel="noopener noreferrer"
                className={`w-full py-5 rounded-full text-center text-xs font-bold uppercase tracking-widest transition-all duration-500 ${
                  plan.popular
                    ? 'bg-primary text-background hover:bg-white/90'
                    : 'bg-white/5 border border-white/10 text-primary hover:bg-white/10'
                }`}
              >
                {plan.buttonText}
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative z-10 py-12 px-6 md:px-12 w-full max-w-7xl mx-auto mb-32">
        <div className="glass-panel p-16 md:p-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-12 group">
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out" />
          <div className="relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-secondary block mb-6 bg-white/5 border border-white/10 px-4 py-2 rounded-full w-fit">
              Custom Requirements
            </span>
            <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight leading-[0.9]">
              Need something<br />different?
            </h2>
          </div>
          <div className="relative z-10">
            <a
              href="https://cal.com/gravitstudio/project-call" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-transparent border border-white/20 text-primary px-10 py-5 text-sm font-medium rounded-full hover:bg-white/5 transition-all duration-500"
            >
              Initiate Project →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
