import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { FEATURE_CATEGORIES, FEATURES } from '../data/features';

export default function FeatureIndex() {
  const [activeSection, setActiveSection] = useState<string>(FEATURE_CATEGORIES[0].id);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -80% 0px' // Trigger when section is in top 20% of viewport
      }
    );

    const sections = document.querySelectorAll('.feature-section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-transparent text-primary" ref={containerRef}>
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-50 origin-left" 
        style={{ scaleX }} 
      />

      {/* Header Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-[1800px] mx-auto border-b border-border">
        <div className="max-w-4xl">
          <p className="font-mono text-xs md:text-sm tracking-widest text-secondary uppercase mb-8">
            Platform Capabilities
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-sans font-medium tracking-tight mb-8">
            Feature Index.
          </h1>
          <p className="text-xl md:text-2xl font-mono text-secondary max-w-2xl leading-relaxed">
            A comprehensive catalog of the systems, tools, and capabilities that power the GRAVIT digital ecosystem.
          </p>
        </div>
      </section>

      {/* Main Content: Sticky Sidebar + Stacked Sections */}
      <section className="px-6 md:px-12 py-20 max-w-[1800px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* Sticky Sidebar */}
          <div className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-40 flex flex-col gap-1 max-h-[calc(100vh-160px)] overflow-y-auto pr-6 sidebar-scroll">
              <h3 className="font-mono text-xs tracking-widest text-secondary uppercase mb-6 px-4">
                Categories
              </h3>
              {FEATURE_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToSection(category.id)}
                  className={`text-left px-4 py-3 font-sans text-sm md:text-base tracking-tight transition-all duration-300 border-l-2 ${
                    activeSection === category.id 
                      ? 'border-primary text-primary font-medium bg-primary/5' 
                      : 'border-transparent text-secondary hover:text-primary hover:border-border'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Category Dropdown / Horizontal Scroll */}
          <div className="lg:hidden sticky top-20 z-40 bg-background/90 backdrop-blur-md py-4 -mx-6 px-6 border-b border-border w-screen flex overflow-x-auto gap-4 hide-scrollbar">
            {FEATURE_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToSection(category.id)}
                className={`whitespace-nowrap px-4 py-2 font-mono text-xs uppercase tracking-wider border rounded-full transition-colors ${
                  activeSection === category.id 
                    ? 'border-primary bg-primary text-background' 
                    : 'border-border text-secondary hover:border-primary hover:text-primary'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Content Sections */}
          <div className="lg:w-3/4 flex flex-col gap-32">
            {FEATURE_CATEGORIES.map((category) => {
              const categoryFeatures = FEATURES[category.id] || [];
              
              if (categoryFeatures.length === 0) return null;

              return (
                <div key={category.id} id={category.id} className="feature-section scroll-mt-40">
                  <div className="mb-12 border-b border-border pb-6 flex items-end justify-between">
                    <div>
                      <h2 className="text-3xl md:text-5xl font-sans font-medium tracking-tight">
                        {category.title}
                      </h2>
                    </div>
                    <span className="font-mono text-xs text-secondary hidden md:block">
                      {categoryFeatures.length} FEATURES
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    {categoryFeatures.map((feature, idx) => (
                      <div key={idx} className="group">
                        <h4 className="text-xl font-sans font-medium tracking-tight mb-4 flex items-start justify-between">
                          {feature.title}
                          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-accent mt-1" />
                        </h4>
                        <p className="text-secondary font-sans leading-relaxed text-sm md:text-base">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 md:px-12 bg-primary text-background">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-sans font-medium tracking-tight mb-8">
            Ready to deploy?
          </h2>
          <p className="text-xl font-sans text-secondary max-w-2xl mb-12">
            Build your digital product on the most robust ecosystem designed for modern businesses.
          </p>
          <a href="/contact" className="inline-flex items-center gap-4 bg-background text-primary px-8 py-4 font-mono text-sm tracking-widest uppercase hover:bg-accent hover:text-white transition-colors">
            Start a Project <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <style>{`
        .sidebar-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .sidebar-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .sidebar-scroll::-webkit-scrollbar-thumb {
          background: var(--color-border);
          border-radius: 4px;
        }
        .sidebar-scroll:hover::-webkit-scrollbar-thumb {
          background: var(--color-secondary);
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
