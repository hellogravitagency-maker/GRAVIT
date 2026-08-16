import { motion } from 'motion/react';
import React from 'react';
import SEO from './SEO';

const openRoles = [
  {
    title: 'Senior React/Next.js Engineer',
    department: 'Engineering',
    location: 'Remote (US/EU)',
    type: 'Full-time'
  },
  {
    title: 'Digital Product Designer',
    department: 'Design',
    location: 'Remote (Global)',
    type: 'Full-time'
  },
  {
    title: 'Technical Project Manager',
    department: 'Operations',
    location: 'Remote (US)',
    type: 'Full-time'
  }
];

const benefits = [
  {
    title: 'Remote-First',
    desc: 'Work from anywhere. We care about output, not hours spent at a desk.'
  },
  {
    title: 'Top-Tier Equipment',
    desc: 'Whatever hardware you need to do your best work, on us.'
  },
  {
    title: 'Continuous Learning',
    desc: 'Annual stipend for courses, conferences, and books.'
  },
  {
    title: 'Health & Wellness',
    desc: 'Comprehensive medical, dental, and mental health coverage.'
  }
];

export default function Careers() {
  return (
    <div className="w-full flex flex-col bg-transparent min-h-screen pt-32 pb-24">
      <SEO 
        title="Careers | GRAVIT" 
        description="Join our team of engineers and designers building premium digital products." 
        path="/careers"
      />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        {/* Header */}
        <div className="mb-24 max-w-4xl">
          <span className="text-accent text-xs font-mono uppercase tracking-widest block mb-6">Careers</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white font-sans leading-tight mb-8">
            Build the future of the web.
          </h1>
          <p className="text-secondary text-xl leading-relaxed max-w-2xl">
            We're a remote-first studio looking for elite engineers and designers who care deeply about their craft and sweat the technical details.
          </p>
        </div>

        {/* Open Roles */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold text-white mb-12 font-sans border-b border-border-subtle pb-6">Open Positions</h2>
          <div className="flex flex-col">
            {openRoles.map((role, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group border-b border-border-subtle py-8 flex flex-col md:flex-row md:items-center justify-between hover:bg-surface/50 transition-colors cursor-pointer px-4 -mx-4"
              >
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-sans group-hover:text-accent transition-colors">{role.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-secondary">
                    <span className="font-mono text-xs uppercase">{role.department}</span>
                    <span>•</span>
                    <span>{role.location}</span>
                    <span>•</span>
                    <span>{role.type}</span>
                  </div>
                </div>
                <div>
                  <button className="text-white border border-border-subtle px-6 py-2 rounded-full font-sans text-sm hover:border-accent hover:text-accent transition-colors">
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-12 font-sans border-b border-border-subtle pb-6">Working at GRAVIT</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-surface p-8 border border-border-subtle">
                <h3 className="text-white font-bold font-sans text-lg mb-3">{benefit.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
