import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const WEBSITE_LINKS = [
  { label: 'Websites', href: '/services/web-development' },
  { label: 'Website Templates', href: '/features' },
  { label: 'AI Website Builder', href: '/features' },
  { label: 'Design Intelligence', href: '/features' },
  { label: 'Ecommerce', href: '/services/ecommerce' },
  { label: 'Portfolios', href: '/features' },
  { label: 'Blogs', href: '/features' },
  { label: 'Analytics', href: '/features' },
];

const BUSINESS_LINKS = [
  { label: 'Industry Solutions', href: '/solutions' },
  { label: 'Online Stores', href: '/services/ecommerce' },
  { label: 'Invoicing', href: '/features#acuity-scheduling' },
  { label: 'Scheduling', href: '/features#acuity-scheduling' },
  { label: 'Limited Releases', href: '/features#commerce' },
  { label: 'Content & Memberships', href: '/features#content-memberships' },
  { label: 'Donations', href: '/features#commerce' },
  { label: 'Financial Solutions', href: '/features#financial-solutions' },
  { label: 'Marketing', href: '/features#marketing' },
];

const MARKETING_LINKS = [
  { label: 'Email Campaigns', href: '/features#marketing' },
  { label: 'SEO Tools', href: '/features#marketing' },
  { label: 'AI Visibility', href: '/features#marketing' },
  { label: 'Free Tools', href: '/resources' },
];

const TOOLS_LINKS = [
  { label: 'Domain Search', href: '/features#domains' },
  { label: 'Domain Transfer', href: '/features#domains' },
  { label: 'Business Email', href: '/features#domains' },
  { label: 'View All Features', href: '/features' },
];

const AUDIENCE_LINKS = [
  { 
    title: 'For scaling businesses', 
    label: 'GRAVIT Enterprise', 
    desc: 'Our most advanced features, lowest processing rates, and priority support', 
    href: '/solutions/enterprise' 
  },
  { 
    title: 'For Freelancers and Agencies', 
    label: 'GRAVIT for Pros', 
    desc: 'Powerful enough for pros, easy enough for clients', 
    href: '/solutions/agencies' 
  },
  { 
    title: 'Circle', 
    label: 'The Partner Program', 
    desc: 'The partner program for freelancers and agencies', 
    href: '/solutions/professional-services' 
  }
];

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const [activePreview, setActivePreview] = useState<string | null>(null);

  // Prevent scrolling when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-background text-primary overflow-y-auto"
        >
          {/* Header */}
          <header className="flex px-6 md:px-8 lg:px-12 py-6 items-center justify-between text-sm sticky top-0 bg-background/90 backdrop-blur-md z-10 border-b border-border/50">
            <Link 
              to="/" 
              onClick={onClose}
              className="text-primary font-sans font-bold tracking-tight text-xl hover:text-accent transition-colors"
            >
              GRAVIT®
            </Link>
            <button 
              onClick={onClose}
              className="text-primary font-mono tracking-widest text-xs font-medium hover:text-accent transition-colors flex items-center gap-2 px-4 py-2 border border-primary/20 hover:border-accent"
            >
              CLOSE <span>✕</span>
            </button>
          </header>

          <div className="px-6 md:px-8 lg:px-12 py-12 lg:py-20 min-h-[calc(100vh-80px)] flex flex-col justify-between max-w-[2000px] mx-auto">
            
            {/* Top Section: Main Navigation Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
              
              {/* Column 1: Website */}
              <div className="flex flex-col gap-6">
                <h3 className="text-secondary font-mono text-xs tracking-widest uppercase mb-2">Website</h3>
                <ul className="flex flex-col gap-4">
                  {WEBSITE_LINKS.map((item) => (
                    <li key={item.label}>
                      <Link 
                        to={item.href}
                        onClick={onClose}
                        onMouseEnter={() => setActivePreview(item.label)}
                        onMouseLeave={() => setActivePreview(null)}
                        className="text-xl md:text-2xl lg:text-3xl font-sans font-medium tracking-tight hover:text-accent transition-colors block"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: Business */}
              <div className="flex flex-col gap-6">
                <h3 className="text-secondary font-mono text-xs tracking-widest uppercase mb-2">Business</h3>
                <ul className="flex flex-col gap-4">
                  {BUSINESS_LINKS.map((item) => (
                    <li key={item.label}>
                      <Link 
                        to={item.href}
                        onClick={onClose}
                        onMouseEnter={() => setActivePreview(item.label)}
                        onMouseLeave={() => setActivePreview(null)}
                        className="text-xl md:text-2xl lg:text-3xl font-sans font-medium tracking-tight hover:text-accent transition-colors block"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Marketing Tools */}
              <div className="flex flex-col gap-6">
                <h3 className="text-secondary font-mono text-xs tracking-widest uppercase mb-2">Marketing Tools</h3>
                <ul className="flex flex-col gap-4">
                  {MARKETING_LINKS.map((item) => (
                    <li key={item.label}>
                      <Link 
                        to={item.href}
                        onClick={onClose}
                        onMouseEnter={() => setActivePreview(item.label)}
                        onMouseLeave={() => setActivePreview(null)}
                        className="text-xl md:text-2xl lg:text-3xl font-sans font-medium tracking-tight hover:text-accent transition-colors block"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <h3 className="text-secondary font-mono text-xs tracking-widest uppercase mb-6">Company</h3>
                  <ul className="flex flex-col gap-3">
                    <li><Link to="/about" onClick={onClose} className="text-base font-medium hover:text-accent transition-colors">About GRAVIT</Link></li>
                    <li><Link to="/process" onClick={onClose} className="text-base font-medium hover:text-accent transition-colors">Process</Link></li>
                    <li><Link to="/careers" onClick={onClose} className="text-base font-medium hover:text-accent transition-colors">Careers</Link></li>
                    <li><Link to="/contact" onClick={onClose} className="text-base font-medium hover:text-accent transition-colors">Contact</Link></li>
                  </ul>
                </div>
              </div>

              {/* Column 4: Business Tools */}
              <div className="flex flex-col gap-6">
                <h3 className="text-secondary font-mono text-xs tracking-widest uppercase mb-2">Business Tools</h3>
                <ul className="flex flex-col gap-4">
                  {TOOLS_LINKS.map((item) => (
                    <li key={item.label}>
                      <Link 
                        to={item.href}
                        onClick={onClose}
                        onMouseEnter={() => setActivePreview(item.label)}
                        onMouseLeave={() => setActivePreview(null)}
                        className={`text-xl md:text-2xl lg:text-3xl font-sans font-medium tracking-tight hover:text-accent transition-colors block ${item.label === 'View All Features' ? 'mt-4 underline underline-offset-8 decoration-accent' : ''}`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                
                {/* Meta Contact Block */}
                <div className="mt-auto pt-12">
                  <div className="flex flex-col gap-6">
                    <div>
                      <h4 className="text-secondary font-mono text-xs tracking-widest uppercase mb-2">Inquiries</h4>
                      <a href="mailto:hello@gravit.agency" className="font-medium text-base hover:text-accent transition-colors underline underline-offset-4">hello@gravit.agency</a>
                    </div>
                    <div>
                      <h4 className="text-secondary font-mono text-xs tracking-widest uppercase mb-2">Social</h4>
                      <div className="flex gap-4">
                        <a href="#" className="font-medium text-sm hover:text-accent transition-colors">X (Twitter)</a>
                        <a href="#" className="font-medium text-sm hover:text-accent transition-colors">LinkedIn</a>
                        <a href="#" className="font-medium text-sm hover:text-accent transition-colors">Instagram</a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Section: Audience Segments */}
            <div className="border-t border-border pt-12 lg:pt-16 mt-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {AUDIENCE_LINKS.map((audience, idx) => (
                  <Link 
                    key={idx}
                    to={audience.href}
                    onClick={onClose}
                    className="group border border-border/50 p-6 md:p-8 hover:bg-primary/5 hover:border-primary transition-all duration-300"
                  >
                    <p className="font-mono text-xs text-secondary tracking-widest uppercase mb-4">
                      {audience.title}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-sans font-medium tracking-tight mb-3 group-hover:text-accent transition-colors flex items-center justify-between">
                      {audience.label}
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                        →
                      </span>
                    </h3>
                    <p className="text-sm text-secondary leading-relaxed">
                      {audience.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
