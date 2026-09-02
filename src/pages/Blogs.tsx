import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const POSTS = [
  {
    title: "The Architecture of Tomorrow",
    excerpt: "How generative systems are reshaping the foundations of digital spaces.",
    category: "Design",
    date: "Oct 24",
    image: "/images/editorial_post_1.jpg"
  },
  {
    title: "Minimalism in Code",
    excerpt: "Stripping away the excess to find true performance and clarity in modern web development.",
    category: "Engineering",
    date: "Oct 22",
    image: "/images/editorial_post_2.jpg"
  },
  {
    title: "The Death of the Dashboard",
    excerpt: "Why the grid layout is failing us, and what interface paradigms will replace it.",
    category: "UX/UI",
    date: "Oct 18",
    image: "/images/editorial_post_3.jpg"
  }
];

export default function Blogs() {
  return (
    <div className="w-full bg-[#f4f1ea] text-[#2c2a26] min-h-screen overflow-x-hidden selection:bg-[#2c2a26] selection:text-[#f4f1ea] pb-32">
      <SEO 
        title="Journal — GRAVIT" 
        description="Thoughts on design, engineering, and the future of the web." 
        path="/blogs" 
      />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-32">
        
        {/* EDITORIAL HEADER */}
        <header className="border-b border-[#2c2a26]/20 pb-12 mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-[#2c2a26]/60 mb-6 block">
              The GRAVIT Journal
            </span>
            <h1 className="text-6xl md:text-8xl font-serif tracking-tight text-[#1a1917] mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              Essays on <br className="hidden md:block"/> Form & Function
            </h1>
            <p className="font-sans text-lg text-[#2c2a26]/70 max-w-xl mx-auto">
              Curated perspectives on digital architecture, generative design, and the aesthetics of modern engineering.
            </p>
          </motion.div>
        </header>

        {/* FEATURED ARTICLE (ASYMMETRICAL LAYOUT) */}
        <section className="mb-24">
          <div className="flex justify-between items-center border-b border-[#2c2a26]/20 pb-4 mb-8">
            <h2 className="font-sans text-xs tracking-widest uppercase text-[#2c2a26]/60">Featured Issue</h2>
            <span className="font-serif italic text-sm text-[#2c2a26]/60">Vol. IV</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="lg:col-span-7 relative h-[50vh] md:h-[70vh] w-full overflow-hidden"
            >
              <img 
                src="/images/editorial_hero.jpg" 
                alt="Featured architecture"
                className="absolute inset-0 w-full h-full object-cover sepia-[0.3] hover:sepia-0 hover:scale-105 transition-all duration-1000"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-5 flex flex-col justify-center"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="font-sans text-xs tracking-widest uppercase text-[#2c2a26]/60 bg-[#2c2a26]/5 px-3 py-1">Theory</span>
                <span className="font-serif italic text-sm text-[#2c2a26]/60">Oct 28</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-serif text-[#1a1917] leading-tight mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Beyond the Pixel: Spatial Interfaces
              </h3>
              <p className="font-sans text-lg text-[#2c2a26]/70 leading-relaxed mb-8">
                As screens multiply and boundaries dissolve, our reliance on flat rectangular constraints is increasingly archaic. A look into how spatial design is rewriting the rules of interaction.
              </p>
              <a href="#" className="font-sans text-sm tracking-widest uppercase font-bold flex items-center gap-2 group w-fit">
                Read Essay
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* RECENT ARTICLES (MASONRY-ISH GRID) */}
        <section>
          <div className="flex justify-between items-center border-b border-[#2c2a26]/20 pb-4 mb-12">
            <h2 className="font-sans text-xs tracking-widest uppercase text-[#2c2a26]/60">Recent Entries</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {POSTS.map((post, i) => (
              <motion.article 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                key={i} 
                className="group cursor-pointer flex flex-col"
              >
                <div className="relative h-64 w-full mb-6 overflow-hidden">
                  <div className="absolute inset-0 bg-[#2c2a26]/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-sans text-xs tracking-widest uppercase text-[#2c2a26]/60">{post.category}</span>
                  <span className="w-1 h-1 rounded-full bg-[#2c2a26]/30"></span>
                  <span className="font-serif italic text-sm text-[#2c2a26]/60">{post.date}</span>
                </div>
                <h4 className="text-2xl font-serif text-[#1a1917] mb-3 leading-snug group-hover:text-blue-700 transition-colors" style={{ fontFamily: 'Georgia, serif' }}>
                  {post.title}
                </h4>
                <p className="font-sans text-[#2c2a26]/70 leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>
                <span className="font-sans text-xs tracking-widest uppercase font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read <ArrowRight className="w-3 h-3" />
                </span>
              </motion.article>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
