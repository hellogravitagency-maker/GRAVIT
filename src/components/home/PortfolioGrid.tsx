import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Real Estate Business",
    description: "A modern real estate platform designed to showcase properties with stunning visuals and seamless user experience.",
    tags: ["Real Estate", "Property", "UI/UX"],
    category: "Website",
    image: "/assets/work/creative_agency_portfolio_1788030783143.webp",
    link: "https://dribbble.com/shots/27317798-Real-Estate-Website-Landing-Page"
  },
  {
    id: 2,
    title: "Healthcare Platform",
    description: "Professional healthcare platform connecting patients with doctors, featuring appointment booking and medical resources.",
    tags: ["Healthcare", "Medical", "Wellness"],
    category: "App",
    image: "/assets/work/fintech_landing_page_1788030771863.webp",
    link: "https://dribbble.com/shots/27317779-HealthCare-Clinic-Medical-Center-Service-Based-Website"
  },
  {
    id: 3,
    title: "Hotel Business",
    description: "Elegant hospitality website showcasing luxury accommodations with booking system and virtual tours.",
    tags: ["Hotel", "Hospitality", "Booking"],
    category: "Website",
    image: "/assets/work/luxury_fashion_web_1788030762128.webp",
    link: "https://dribbble.com/shots/27317800-Luxury-Resort-Website-Landing-Page"
  },
  {
    id: 4,
    title: "Modern Furniture E-commerce",
    description: "Contemporary furniture e-commerce platform with 3D product views and interior design inspiration.",
    tags: ["Furniture", "E-commerce", "Interior"],
    category: "Website",
    image: "/assets/work/premium_web_architecture_1788031038602.webp",
    link: "https://dribbble.com/shots/27317658-E-commerce-Brand-Website-Landing-Page"
  },
  {
    id: 5,
    title: "Retail E-commerce",
    description: "Full-featured online shopping experience with advanced filtering, secure checkout, and mobile-first design.",
    tags: ["E-commerce", "Retail", "Shopping"],
    category: "App",
    image: "/assets/work/cyberpunk_ecommerce_1788030750391.webp",
    link: "https://dribbble.com/shots/26625180-UTSHA-New-E-commerce-Website-Project"
  },
  {
    id: 6,
    title: "B2B SaaS Dashboard",
    description: "Clean and conversion-focused landing page for B2B SaaS product with interactive demos and pricing.",
    tags: ["SaaS", "B2B", "Tech"],
    category: "App",
    image: "/assets/work/saas_dashboard_ui_1788030738800.webp",
    link: "https://dribbble.com/shots/26625291-Business-Dashboard-Web-App"
  }
];

const categories = ["All", "Website", "App"];

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    project => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background border-t border-black/5 dark:border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl lg:text-6xl display-editorial text-primary mb-6">
              Featured <span className="text-primary/40 italic">Work.</span>
            </h2>
            <p className="text-secondary text-sm md:text-base lg:text-lg leading-relaxed font-light">
              Explore our portfolio of successful projects across various industries, showcasing innovative design and powerful digital solutions.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1 p-1 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full backdrop-blur-md">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeCategory === category ? 'text-primary-foreground' : 'text-secondary hover:text-primary'
                }`}
              >
                {activeCategory === category && (
                  <motion.div 
                    layoutId="activePill"
                    className="absolute inset-0 bg-primary rounded-full z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.a
                layout
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative w-full h-[320px] md:h-[400px] rounded-3xl overflow-hidden border border-white/10 bg-[#050505]"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  
                  {/* Hover reveal section */}
                  <div className="translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <p className="text-white/70 text-sm font-light mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-xs text-white/80">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Always visible title */}
                  <div className="flex items-center justify-between mt-auto">
                    <h3 className="text-xl md:text-2xl text-white font-medium tracking-tight pr-4">
                      {project.title}
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out delay-100">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                  
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More Button */}
        <div className="flex justify-center">
          <button className="group inline-flex items-center gap-4 bg-transparent border border-black/20 dark:border-white/20 text-primary px-8 py-4 rounded-full font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            Show More Projects
            <ArrowUpRight size={16} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </button>
        </div>

      </div>
    </section>
  );
}
