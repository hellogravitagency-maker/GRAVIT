import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const POSTS = [
  {
    title: "The Architecture of Scale: Next.js in 2026",
    excerpt: "How we engineer enterprise platforms to handle 10M+ daily requests with sub-second latency.",
    category: "Engineering",
    date: "Aug 24, 2026",
    readTime: "5 min",
    image: "/images/blog_post_1.jpg"
  },
  {
    title: "Beyond the Grid: Motion as a UI Primitive",
    excerpt: "Why static interfaces are failing, and how fluid motion logic drives higher conversion rates.",
    category: "Design",
    date: "Aug 12, 2026",
    readTime: "8 min",
    image: "/images/ecommerce_hero.jpg"
  },
  {
    title: "AI Integration Strategies for B2B",
    excerpt: "Moving past the novelty of LLMs to actual business process automation and revenue generation.",
    category: "Strategy",
    date: "Jul 28, 2026",
    readTime: "6 min",
    image: "/images/financial_hero.jpg"
  },
  {
    title: "The Death of the Traditional Template",
    excerpt: "Why custom engineering systems are replacing off-the-shelf themes for serious operators.",
    category: "Industry",
    date: "Jul 15, 2026",
    readTime: "10 min",
    image: "/images/webinars_hero.jpg"
  }
];

export default function Blog() {
  return (
    <div className="w-full bg-background text-primary font-sans min-h-screen overflow-x-hidden relative">
      <SEO 
        title="Insights — GRAVIT"
        description="Thoughts, frameworks, and deep dives on engineering and digital product design."
        path="/blog"
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
            04 / Knowledge
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-heading font-medium tracking-tight leading-[0.9] text-primary max-w-6xl">
            Engineering Insights.
          </h1>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 mt-12 pt-12 border-t border-white/10">
          <div className="md:w-2/3">
            <p className="text-xl md:text-2xl text-secondary leading-relaxed font-light">
              Frameworks, mental models, and technical deep-dives on architecting the next generation of the web.
            </p>
          </div>
        </div>
      </section>

      {/* EDITORIAL GRID */}
      <section className="relative z-10 py-24 px-6 md:px-12 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {POSTS.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-3xl mb-8 bg-black/20 border border-white/5">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10 pointer-events-none" />
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out mix-blend-lighten"
                />
              </div>
              
              <div className="flex items-center gap-4 text-xs font-mono text-secondary mb-5 uppercase tracking-widest">
                <span className="bg-white/5 px-3 py-1 rounded-full border border-white/10 text-primary">{post.category}</span>
                <span>{post.date}</span>
                <span className="opacity-50">•</span>
                <span>{post.readTime}</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-heading font-medium text-primary mb-4 tracking-tight leading-[1.1] group-hover:text-white/80 transition-colors">
                {post.title}
              </h2>
              
              <p className="text-secondary font-light text-base leading-relaxed mb-8 flex-grow">
                {post.excerpt}
              </p>
              
              <div className="flex items-center text-xs font-bold uppercase tracking-widest text-primary opacity-60 group-hover:opacity-100 transition-opacity border-b border-white/10 pb-4">
                Read Publication
                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform duration-500" />
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative z-10 py-12 px-6 md:px-12 w-full max-w-7xl mx-auto mb-32">
        <div className="glass-panel p-16 md:p-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-12 group">
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out" />
          <div className="relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-secondary block mb-6 bg-white/5 border border-white/10 px-4 py-2 rounded-full w-fit">
              Newsletter
            </span>
            <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight leading-[0.9]">
              Receive the <br />dispatch.
            </h2>
          </div>
          <div className="relative z-10 w-full md:w-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Email address"
              className="bg-transparent border border-white/20 text-primary px-8 py-5 text-sm font-medium rounded-full focus:outline-none focus:border-primary transition-colors min-w-[300px]"
            />
            <button
              className="inline-flex items-center justify-center bg-primary text-background px-10 py-5 text-sm font-medium rounded-full hover:bg-white/90 transition-all duration-500 whitespace-nowrap"
            >
              Subscribe →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
