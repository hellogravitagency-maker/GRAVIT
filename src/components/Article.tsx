import { motion } from 'motion/react';
import { Link, useParams } from 'react-router-dom';
import React from 'react';
import SEO from './SEO';

// Placeholder article content
const getArticleData = (id: string) => {
  return {
    id,
    title: 'Engineering for Scale: Our Approach to Modern Web Architecture',
    category: 'Engineering',
    date: 'Oct 24, 2023',
    readTime: '6 min read',
    author: {
      name: 'Elena Rodriguez',
      role: 'Head of Engineering'
    },
    content: `
      <p class="lead">Building a digital product that looks beautiful is only half the battle. The true test of an engineering team lies in building architecture that can scale gracefully under pressure, maintain sub-second load times, and provide a seamless developer experience as the codebase grows.</p>
      
      <h2>The Monolith Dilemma</h2>
      <p>For years, the industry standard was the monolithic application. Everything lived in one place: the database, the backend logic, the frontend templates. While this makes getting started incredibly easy, it creates massive bottlenecks as a company scales.</p>
      
      <p>When the marketing team wants to update copy, they need an engineer to deploy the whole app. When traffic spikes during a sale, the entire monolith needs to be scaled up, wasting resources on systems that aren't actually under load.</p>
      
      <blockquote>
        <p>We don't build websites; we engineer systems. A system must be modular, resilient, and inherently scalable.</p>
      </blockquote>
      
      <h2>Decoupling the Stack</h2>
      <p>At GRAVIT, we strictly adhere to decoupled architectures. By separating the frontend presentation layer from the backend logic and content management, we unlock several key advantages:</p>
      
      <ul>
        <li><strong>Security:</strong> The attack surface is drastically reduced when your frontend is decoupled.</li>
        <li><strong>Performance:</strong> Static generation and edge caching become trivial to implement.</li>
        <li><strong>Velocity:</strong> Frontend and backend teams can work completely independently.</li>
      </ul>
      
      <h2>Our Core Technology Choices</h2>
      <p>While we are technology agnostic and choose the right tool for the job, our default stack for modern web applications revolves around a few key players:</p>
      
      <p><strong>React & Next.js:</strong> Component-based architecture allows us to build robust design systems that ensure absolute visual consistency. Next.js provides the server-side rendering capabilities necessary for perfect SEO and initial load performance.</p>
      
      <p><strong>Headless CMS:</strong> Whether it's Sanity, Contentful, or a custom solution, treating content as raw data accessed via an API gives our clients the power to update their platforms without touching code.</p>
      
      <p>The future of the web isn't monolithic. It's composable, distributed, and incredibly fast. That's exactly what we build.</p>
    `
  };
};

export default function Article() {
  const { id } = useParams<{ id: string }>();
  const article = getArticleData(id as string);

  return (
    <div className="w-full flex flex-col bg-transparent min-h-screen pt-32 pb-24">
      <SEO 
        title={`${article.title} | GRAVIT Insights`} 
        description="GRAVIT Engineering & Strategy Insights." 
        path={`/insights/${id}`}
      />
      
      <article className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        {/* Top Nav */}
        <div className="mb-16">
          <Link to="/insights" className="text-muted hover:text-white transition-colors font-mono text-xs uppercase tracking-widest">
            &larr; Back to Insights
          </Link>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="text-accent text-xs font-mono uppercase">{article.category}</span>
            <span className="text-muted text-xs font-mono">•</span>
            <span className="text-muted text-xs font-mono">{article.date}</span>
            <span className="text-muted text-xs font-mono">•</span>
            <span className="text-muted text-xs font-mono">{article.readTime}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white font-sans leading-tight mb-12">
            {article.title}
          </h1>
          
          <div className="flex items-center justify-center gap-4 border-t border-b border-border-subtle py-6">
            <div className="w-10 h-10 rounded-full bg-surface border border-border-subtle flex items-center justify-center font-mono text-xs text-secondary">
              {article.author.name.charAt(0)}
            </div>
            <div className="text-left">
              <div className="text-white font-sans font-medium">{article.author.name}</div>
              <div className="text-muted font-mono text-xs">{article.author.role}</div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          {/* Prose styling using arbitrary variants since typography plugin isn't installed */}
          <div 
            className="[&>p]:text-secondary [&>p]:leading-relaxed [&>p]:mb-6 [&>p]:text-lg
                       [&>h2]:text-white [&>h2]:font-bold [&>h2]:text-2xl [&>h2]:mt-12 [&>h2]:mb-6 [&>h2]:font-sans
                       [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:text-secondary [&>ul>li]:mb-2 [&>ul>li>strong]:text-white
                       [&>blockquote]:border-l-4 [&>blockquote]:border-accent [&>blockquote]:bg-surface [&>blockquote]:p-6 [&>blockquote]:mb-8 [&>blockquote>p]:text-white [&>blockquote>p]:font-medium [&>blockquote>p]:text-xl [&>blockquote>p]:mb-0
                       [&>p.lead]:text-xl [&>p.lead]:text-white [&>p.lead]:font-medium [&>p.lead]:mb-10
                       [&>p>strong]:text-white [&>p>strong]:font-bold"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </motion.div>

        {/* Share / Footer */}
        <div className="max-w-3xl mx-auto mt-24 pt-8 border-t border-border-subtle flex justify-between items-center">
          <span className="text-muted font-mono text-xs uppercase tracking-widest">Share this article</span>
          <div className="flex gap-4">
            <button className="text-secondary hover:text-white transition-colors font-mono text-xs">Twitter</button>
            <button className="text-secondary hover:text-white transition-colors font-mono text-xs">LinkedIn</button>
            <button className="text-secondary hover:text-white transition-colors font-mono text-xs">Copy Link</button>
          </div>
        </div>
      </article>
    </div>
  );
}
