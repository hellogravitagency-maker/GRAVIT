import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { solutionsData } from '../data/solutions';

export default function Solutions() {
  const [activeSection, setActiveSection] = useState<string>(solutionsData[0].id);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

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
        rootMargin: '-20% 0px -70% 0px',
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-transparent text-primary selection:bg-primary selection:text-background min-h-screen pt-32 pb-24 font-sans relative">
      <SEO 
        title="Solutions by Industry | GRAVIT®" 
        description="Tailored digital engineering solutions for Creative Services, Professional Services, Health, Beauty, and more." 
        path="/solutions"
      />
      
      {/* 01: HERO */}
      <section className="px-6 md:px-8 lg:px-12 w-full max-w-[1800px] mx-auto mb-16 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-border pb-12">
          <div className="md:col-span-12">
            <h1 className="text-5xl md:text-7xl lg:text-[140px] font-bold tracking-tighter uppercase leading-[0.85] mb-8">
              INDUSTRY<br />SOLUTIONS.
            </h1>
          </div>
          <div className="md:col-span-8 lg:col-span-6">
            <p className="text-xl md:text-2xl text-secondary leading-relaxed font-light">
              Different verticals demand different architectures. Explore how our engineering and design principles adapt to meet the specific requirements of your industry.
            </p>
          </div>
          <div className="md:col-span-4 lg:col-span-3 lg:col-start-10 flex flex-col justify-end">
            <div className="font-mono text-xs uppercase tracking-widest text-secondary border-t border-border pt-4">
              Explore
              <div className="mt-4 flex items-center justify-between font-sans font-bold">
                <span>{solutionsData.length} Verticals</span>
                <span>↓</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02: STICKY LAYOUT */}
      <section className="px-6 md:px-8 lg:px-12 w-full max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative items-start">
          
          {/* Left: Sticky Sidebar Navigation */}
          <div className="hidden lg:block lg:col-span-3 sticky top-32 max-h-[calc(100vh-8rem)] overflow-y-auto no-scrollbar pb-12">
            <div className="flex flex-col gap-1 pr-6 border-r border-border min-h-[50vh]">
              <h3 className="font-mono text-xs tracking-widest uppercase text-secondary mb-6 pb-4 border-b border-border">
                Solutions for
              </h3>
              {solutionsData.map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToSection(category.id)}
                  className={`text-left text-lg font-bold tracking-tight uppercase py-2 transition-all duration-300 flex items-center justify-between group ${
                    activeSection === category.id 
                      ? 'text-primary' 
                      : 'text-secondary hover:text-primary'
                  }`}
                >
                  <span>{category.name}</span>
                  <span className={`text-xs opacity-0 transform -translate-x-4 transition-all duration-300 ${activeSection === category.id ? 'opacity-100 translate-x-0' : 'group-hover:opacity-100 group-hover:translate-x-0'}`}>
                    →
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Content Sections */}
          <div className="lg:col-span-9 flex flex-col gap-24 lg:gap-32 lg:pl-12 pb-32">
            {solutionsData.map((category, index) => (
              <section 
                key={category.id} 
                id={category.id}
                ref={(el) => { sectionRefs.current[index] = el; }}
                className="scroll-mt-32 border-t border-border pt-12 lg:pt-0 lg:border-none"
              >
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter uppercase mb-6 leading-[0.9]">
                      {category.name}
                    </h2>
                    <p className="text-xl md:text-2xl text-secondary leading-relaxed font-light max-w-3xl">
                      {category.description}
                    </p>
                  </div>
                  <Link 
                    to={`/solutions/${category.id}`} 
                    className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-primary text-xs font-mono uppercase tracking-widest transition-colors flex-shrink-0"
                  >
                    View {category.name} Architecture →
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {category.subcategories.map((sub, i) => (
                    <Link 
                      key={i} 
                      to={`/solutions/${category.id}`}
                      className="border border-border p-6 md:p-8 hover:bg-primary/5 hover:border-primary transition-all duration-300 group flex flex-col justify-between aspect-[4/3] cursor-pointer"
                    >
                      <div className="font-mono text-[10px] text-secondary tracking-widest uppercase mb-4">
                        {String(i + 1).padStart(2, '0')} // Sector
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight uppercase group-hover:text-accent transition-colors">
                        {sub}
                      </h3>
                      <div className="mt-6 flex justify-end opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <span className="w-10 h-10 rounded-full border border-primary flex items-center justify-center text-primary group-hover:border-accent group-hover:text-accent">
                          →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>

        </div>
      </section>

      {/* 03: CTA */}
      <section className="py-24 md:py-32 px-6 md:px-8 lg:px-12 w-full max-w-[1800px] mx-auto mt-12 border-t border-border flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase leading-tight mb-8">
          DON'T SEE YOUR INDUSTRY?
        </h2>
        <p className="text-secondary max-w-2xl mb-12 text-lg">
          Our engineering principles apply universally. If you have a complex technical challenge, we can architect the solution.
        </p>
        <Link to="/contact" className="inline-flex items-center justify-center bg-primary text-background px-12 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-colors">
          DISCUSS YOUR PROJECT
        </Link>
      </section>
    </div>
  );
}
