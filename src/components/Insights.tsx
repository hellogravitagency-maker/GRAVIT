import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import SEO from './SEO';

// Placeholder blog data
const articles = [
  {
    id: 'engineering-for-scale',
    title: 'Engineering for Scale: Our Approach to Next.js',
    excerpt: 'How we build high-performance web applications that can handle millions of users without breaking a sweat.',
    category: 'Engineering',
    date: 'Oct 24, 2023',
    readTime: '6 min read'
  },
  {
    id: 'future-of-headless',
    title: 'The Future of Headless Commerce',
    excerpt: 'Why decoupled architectures are winning in e-commerce and how to transition your legacy stack.',
    category: 'Strategy',
    date: 'Oct 12, 2023',
    readTime: '8 min read'
  },
  {
    id: 'design-systems-roi',
    title: 'Measuring the ROI of Design Systems',
    excerpt: 'A framework for understanding how consistent UI components impact both engineering velocity and user conversion.',
    category: 'Design',
    date: 'Sep 28, 2023',
    readTime: '5 min read'
  },
  {
    id: 'migration-strategies',
    title: 'Safe Migration Strategies for Legacy Apps',
    excerpt: 'Our battle-tested playbook for moving from monolithic systems to modern React-based architectures.',
    category: 'Engineering',
    date: 'Sep 15, 2023',
    readTime: '10 min read'
  }
];

const categories = ['All', 'Engineering', 'Strategy', 'Design'];

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredArticles = activeCategory === 'All' 
    ? articles 
    : articles.filter(a => a.category === activeCategory);

  const featuredArticle = articles[0];

  return (
    <div className="w-full flex flex-col bg-transparent min-h-screen pt-32 pb-24">
      <SEO 
        title="Insights & Engineering Blog | GRAVIT" 
        description="Thoughts on software engineering, digital product design, and business strategy." 
        path="/insights"
      />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <span className="text-accent text-xs font-mono uppercase tracking-widest block mb-6">Resources</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white font-sans leading-tight mb-6">
            Insights & Engineering.
          </h1>
          <p className="text-secondary text-lg leading-relaxed">
            Our latest thinking on software architecture, premium digital design, and strategies for scaling modern tech businesses.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-24">
          <Link 
            to={`/insights/${featuredArticle.id}`}
            className="group block relative overflow-hidden bg-surface border border-border-subtle hover:border-accent transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="aspect-video md:aspect-auto bg-[#1a1a1a] border-b md:border-b-0 md:border-r border-border-subtle relative overflow-hidden">
                {/* Abstract visualization for featured article */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 border border-white/10 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                    <div className="w-24 h-24 border border-accent/30 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-accent text-xs font-mono uppercase">{featuredArticle.category}</span>
                  <span className="text-muted text-xs font-mono">•</span>
                  <span className="text-muted text-xs font-mono">{featuredArticle.date}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white font-sans mb-4 group-hover:text-accent transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-secondary text-lg leading-relaxed mb-8">
                  {featuredArticle.excerpt}
                </p>
                <div className="mt-auto">
                  <span className="text-white font-sans font-medium text-sm border-b border-white pb-1 group-hover:border-accent group-hover:text-accent transition-colors">
                    Read Article &rarr;
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-border-subtle pb-6">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-colors ${
                activeCategory === category 
                  ? 'bg-white text-black' 
                  : 'bg-surface text-secondary hover:text-white border border-border-subtle'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.slice(1).map((article, index) => (
            <motion.div 
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                to={`/insights/${article.id}`}
                className="block h-full p-8 bg-surface border border-border-subtle hover:border-accent transition-colors group flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-accent text-xs font-mono uppercase">{article.category}</span>
                  <span className="text-muted text-xs font-mono">•</span>
                  <span className="text-muted text-xs font-mono">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white font-sans mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed mb-8 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="mt-auto pt-4 border-t border-border-subtle flex justify-between items-center">
                  <span className="text-muted text-xs font-mono">{article.date}</span>
                  <span className="text-white text-sm font-sans group-hover:text-accent transition-colors">&rarr;</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
