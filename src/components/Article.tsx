import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import PageTransition from './PageTransition';
import SmoothScroll from './SmoothScroll';
import SEO from './SEO';


export const articlesData: Record<string, any> = {
  "react-server-components": {
    title: "Why React Server Components Change Everything.",
    category: "ENGINEERING",
    date: "JUL 2026",
    content: "Server components are fundamentally shifting how we think about rendering and data fetching in React. By moving the component execution entirely to the server, we eliminate client-side JavaScript bloat and reduce waterfalls. This isn't just an incremental update; it's a structural revolution in web architecture.",
    img: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop"
  },
  "death-6-line-hero": {
    title: "The Death of the 6-Line Hero.",
    category: "DESIGN",
    date: "JUN 2026",
    content: "For years, SaaS websites have relied on the predictable '6-line hero' formula: eyebrow text, bold H1, subtext, two buttons, and a dashboard mockup. As users develop blindness to this layout, brutalism and editorial design are stepping in to restore personality and differentiation.",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
  },
  "zero-latency-webgl": {
    title: "Building Zero-Latency Video Players in WebGL.",
    category: "CASE STUDY",
    date: "MAY 2026",
    content: "Standard HTML5 video players often struggle with frame-perfect synchronization when tied to scroll events. By decoding video frames directly into WebGL textures, we bypassed DOM repaints entirely, achieving buttery smooth 60fps playback tied directly to the user's scroll wheel.",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
  },
  "typography-interface": {
    title: "Typography as Interface: Beyond Inter.",
    category: "DESIGN",
    date: "APR 2026",
    content: "When you strip away gradients, shadows, and borders, typography becomes the interface. We explore how variable fonts and aggressive letter-spacing can create a visual hierarchy so strong that traditional UI components become unnecessary.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
  },
  "vercel-to-aws": {
    title: "Migrating from Vercel to AWS Bare Metal.",
    category: "INFRASTRUCTURE",
    date: "MAR 2026",
    content: "Vercel offers unparalleled developer experience, but at a certain scale, the abstraction tax becomes too high. This is a deep dive into how we migrated a high-traffic e-commerce platform to AWS bare metal, cutting costs by 80% while maintaining sub-50ms TTFB.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
  }
};

export default function Article() {
  const { id } = useParams<{ id: string }>();
  const article = id ? articlesData[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white font-['Outfit',sans-serif]">
      <SEO title={`${article.title} | The Lab`} description={`Read about ${article.title} by Gravit Agency`} image={article.img} />
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link to="/work" className="text-[var(--color-accent)] hover:underline">Return to Work</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-24 font-['Outfit',sans-serif]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <Link to="/work" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 uppercase tracking-widest text-xs font-bold">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Work
          </Link>
          
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[var(--color-accent)] font-bold tracking-[0.2em] uppercase text-xs">
              {article.category}
            </span>
            <span className="w-1 h-1 bg-white/20 rounded-full"></span>
            <span className="text-white/40 tracking-[0.2em] uppercase text-xs">
              {article.date}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-12">
            {article.title}
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full aspect-[21/9] bg-[#111] mb-16 overflow-hidden rounded-[2rem] border border-white/10 will-change-transform"
        >
          <img src={article.img} alt={article.title} loading="lazy" decoding="async" className="w-full h-full object-cover grayscale opacity-80" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="prose prose-invert prose-lg md:prose-xl max-w-3xl font-light text-white/70 leading-relaxed"
        >
          <p className="text-2xl text-white/90 leading-tight mb-8">
            {article.content}
          </p>
          <p>
            This is a placeholder for the full article content. In a production environment, this would be fetched from a CMS like Sanity or Contentful. The brutalist design language continues here with stark contrast, large typography, and zero decorative noise. 
          </p>
          <div className="my-12 p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md">
            <h3 className="text-xl font-bold text-white mb-4 tracking-tight">Key Takeaways</h3>
            <ul className="list-disc list-inside space-y-2 marker:text-[var(--color-accent)] text-base">
              <li>Simplify architecture by removing unnecessary abstractions.</li>
              <li>Prioritize raw performance over developer convenience where it matters.</li>
              <li>Use aggressive visual contrast to guide the user's eye.</li>
            </ul>
          </div>
          <p>
            End of transmission.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
