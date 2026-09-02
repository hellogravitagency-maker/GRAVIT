import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const PRODUCTS_LINKS = [
  { label: 'Websites', href: '/websites' },
  { label: 'Website Templates', href: '/templates' },
  { label: 'AI Website Builder', href: '/ai-builder' },
  { label: 'Design Intelligence', href: '/design-intelligence' },
  { label: 'Ecommerce', href: '/ecommerce' },
  { label: 'Portfolios', href: '/portfolios' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Analytics', href: '/analytics' },
];

const BUSINESS_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Online Stores', href: '/ecommerce' },
  { label: 'Invoicing', href: '/invoicing' },
  { label: 'Scheduling', href: '/scheduling' },
  { label: 'Limited Releases', href: '/ecommerce' },
  { label: 'Content & Memberships', href: '/blogs' },
  { label: 'Donations', href: '/donations' },
  { label: 'Financial Solutions', href: '/financial-solutions' },
];

const BUSINESS_TOOLS_LINKS = [
  { label: 'Domain Search', href: '/domain-search' },
  { label: 'Domain Transfer', href: '/domain-search' },
  { label: 'Business Email', href: '/business-email' },
];

const MARKETING_LINKS = [
  { label: 'Marketing Tools', href: '/marketing-tools' },
  { label: 'Email Campaigns', href: '/marketing-tools' },
  { label: 'SEO Tools', href: '/seo' },
  { label: 'AI Visibility', href: '/seo' },
  { label: 'Free Tools', href: '/marketing-tools' },
];

const SOLUTIONS_LINKS = [
  { label: 'Creative Services', href: '/services' },
  { label: 'Professional Services', href: '/services' },
  { label: 'Education & Training', href: '/services' },
  { label: 'Beauty', href: '/services' },
  { label: 'Sports & Fitness', href: '/services' },
  { label: 'Health & Wellness', href: '/services' },
  { label: 'Home Services', href: '/services' },
  { label: 'Events & Experiences', href: '/services' },
  { label: 'Charities & Nonprofits', href: '/services' },
  { label: 'Personal', href: '/services' },
];

const EXPLORE_LINKS = [
  { label: 'Photographers', href: '/portfolios' },
  { label: 'Graphic Designers', href: '/portfolios' },
  { label: 'Artists', href: '/portfolios' },
  { label: 'Interior Designers', href: '/portfolios' },
  { label: 'Architects', href: '/portfolios' },
  { label: 'Fashion & Apparel', href: '/portfolios' },
  { label: 'Logo Design', href: '/logo-design' },
  { label: 'Poster Design', href: '/poster-design' },
];

const RESOURCES_LINKS = [
  { label: 'Help Center', href: '/help' },
  { label: 'Forum', href: '/forum' },
  { label: 'Webinars', href: '/webinars' },
  { label: 'Blog', href: '/blog' },
  { label: 'Hire an Expert', href: '/contact' },
  { label: 'Showcase', href: '/showcase' },
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
              className="text-primary font-mono tracking-widest text-xs font-medium hover:text-accent transition-colors flex items-center gap-2 px-4 py-2 border border-primary/20 hover:border-accent rounded-full"
            >
              CLOSE <span>✕</span>
            </button>
          </header>

          <div className="px-6 md:px-8 lg:px-12 py-12 lg:py-20 min-h-[calc(100vh-80px)] max-w-[2000px] mx-auto flex flex-col">
            
            {/* Top Section: Main Navigation Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 flex-1">
              
              {/* Column 1: Products */}
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-primary font-bold text-lg mb-4">Products</h3>
                  <h4 className="text-secondary font-mono text-xs tracking-widest uppercase mb-2">Website</h4>
                  <ul className="flex flex-col gap-2">
                    {PRODUCTS_LINKS.map((item) => (
                      <li key={item.label}>
                        <Link 
                          to={item.href}
                          onClick={onClose}
                          onMouseEnter={() => setActivePreview(item.label)}
                          onMouseLeave={() => setActivePreview(null)}
                          className="text-base font-sans tracking-tight hover:text-accent transition-colors block text-secondary hover:text-primary"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Column 2: Business */}
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-primary font-bold text-lg mb-4 opacity-0 hidden lg:block">Business</h3>
                  <h4 className="text-secondary font-mono text-xs tracking-widest uppercase mb-2">Business</h4>
                  <ul className="flex flex-col gap-2">
                    {BUSINESS_LINKS.map((item) => (
                      <li key={item.label}>
                        <Link 
                          to={item.href}
                          onClick={onClose}
                          onMouseEnter={() => setActivePreview(item.label)}
                          onMouseLeave={() => setActivePreview(null)}
                          className="text-base font-sans tracking-tight hover:text-accent transition-colors block text-secondary hover:text-primary"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-secondary font-mono text-xs tracking-widest uppercase mb-2">Business Tools</h4>
                  <ul className="flex flex-col gap-2">
                    {BUSINESS_TOOLS_LINKS.map((item) => (
                      <li key={item.label}>
                        <Link 
                          to={item.href}
                          onClick={onClose}
                          onMouseEnter={() => setActivePreview(item.label)}
                          onMouseLeave={() => setActivePreview(null)}
                          className="text-base font-sans tracking-tight hover:text-accent transition-colors block text-secondary hover:text-primary"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Column 3: Marketing & Solutions */}
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-primary font-bold text-lg mb-4 opacity-0 hidden lg:block">Marketing</h3>
                  <h4 className="text-secondary font-mono text-xs tracking-widest uppercase mb-2">Marketing</h4>
                  <ul className="flex flex-col gap-2">
                    {MARKETING_LINKS.map((item) => (
                      <li key={item.label}>
                        <Link 
                          to={item.href}
                          onClick={onClose}
                          onMouseEnter={() => setActivePreview(item.label)}
                          onMouseLeave={() => setActivePreview(null)}
                          className="text-base font-sans tracking-tight hover:text-accent transition-colors block text-secondary hover:text-primary"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-secondary font-mono text-xs tracking-widest uppercase mb-2">Solutions</h4>
                  <ul className="flex flex-col gap-2">
                    {SOLUTIONS_LINKS.map((item) => (
                      <li key={item.label}>
                        <Link 
                          to={item.href}
                          onClick={onClose}
                          onMouseEnter={() => setActivePreview(item.label)}
                          onMouseLeave={() => setActivePreview(null)}
                          className="text-base font-sans tracking-tight hover:text-accent transition-colors block text-secondary hover:text-primary"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Column 4: Explore & Resources */}
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-primary font-bold text-lg mb-4 opacity-0 hidden lg:block">Resources</h3>
                  <h4 className="text-secondary font-mono text-xs tracking-widest uppercase mb-2">Explore</h4>
                  <ul className="flex flex-col gap-2">
                    {EXPLORE_LINKS.map((item) => (
                      <li key={item.label}>
                        <Link 
                          to={item.href}
                          onClick={onClose}
                          onMouseEnter={() => setActivePreview(item.label)}
                          onMouseLeave={() => setActivePreview(null)}
                          className="text-base font-sans tracking-tight hover:text-accent transition-colors block text-secondary hover:text-primary"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-secondary font-mono text-xs tracking-widest uppercase mb-2">Resources</h4>
                  <ul className="flex flex-col gap-2">
                    {RESOURCES_LINKS.map((item) => (
                      <li key={item.label}>
                        <Link 
                          to={item.href}
                          onClick={onClose}
                          onMouseEnter={() => setActivePreview(item.label)}
                          onMouseLeave={() => setActivePreview(null)}
                          className="text-base font-sans tracking-tight hover:text-accent transition-colors block text-secondary hover:text-primary"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
