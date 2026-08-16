import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ARTICLES = [
  { num: '01', category: 'Engineering', title: 'Why Your Site\'s Core Web Vitals Are Lying to You', date: 'Aug 2026', read: '8 min' },
  { num: '02', category: 'Design', title: 'The Case Against the Hero Image', date: 'Jul 2026', read: '6 min' },
  { num: '03', category: 'Business', title: 'What $15,000 Buys You in a Web Agency in 2026', date: 'Jun 2026', read: '10 min' },
  { num: '04', category: 'Engineering', title: 'React Server Components Are Not Optional Anymore', date: 'May 2026', read: '12 min' },
  { num: '05', category: 'Design', title: 'Typography Is the Design', date: 'Apr 2026', read: '5 min' },
];

const CATEGORIES = ['All', 'Engineering', 'Design', 'Business', 'Systems'];

export default function Blog() {
  return (
    <div className="w-full bg-transparent text-primary font-sans min-h-screen overflow-x-hidden">
      <SEO title="Journal — GRAVIT" description="Field notes from the studio. Engineering, design, and the business of building digital products." path="/blog" />

      {/* MASTHEAD — newspaper front page */}
      <section className="px-6 md:px-12 pt-36 pb-0 w-full max-w-[1800px] mx-auto">
        <div className="border-b-4 border-primary pb-6 mb-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-6"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-secondary">GRAVIT Journal</span>
            <span className="font-mono text-xs text-secondary">Est. 2024 · Vol. III</span>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3rem,10vw,13rem)] font-bold tracking-tighter uppercase leading-[0.82]"
            >
              JOURNAL
            </motion.h1>
          </div>
        </div>

        {/* Column header row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-12 gap-6 border-b border-border py-4"
        >
          <span className="col-span-1 font-mono text-xs uppercase tracking-widest text-secondary">#</span>
          <span className="col-span-2 font-mono text-xs uppercase tracking-widest text-secondary">Topic</span>
          <span className="col-span-5 font-mono text-xs uppercase tracking-widest text-secondary">Title</span>
          <span className="col-span-2 font-mono text-xs uppercase tracking-widest text-secondary hidden md:block">Date</span>
          <span className="col-span-2 font-mono text-xs uppercase tracking-widest text-secondary hidden md:block text-right">Read</span>
        </motion.div>
      </section>

      {/* CATEGORY FILTERS */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="px-6 md:px-12 w-full max-w-[1800px] mx-auto pt-4 pb-0"
      >
        <div className="flex gap-4 flex-wrap">
          {CATEGORIES.map((c) => (
            <button key={c} className="font-mono text-xs uppercase tracking-widest text-secondary hover:text-primary transition-colors pb-1 border-b border-transparent hover:border-primary">
              {c}
            </button>
          ))}
        </div>
      </motion.section>

      {/* ARTICLE LIST */}
      <section className="px-6 md:px-12 w-full max-w-[1800px] mx-auto">
        {ARTICLES.map((article, i) => (
          <motion.div
            key={article.num}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              to={`/resources/${article.num}`}
              className="group grid grid-cols-12 gap-6 items-center border-b border-border py-8 hover:bg-primary/[0.02] transition-colors -mx-6 md:-mx-12 px-6 md:px-12"
            >
              <span className="col-span-1 font-mono text-xs text-secondary group-hover:text-primary transition-colors">{article.num}</span>
              <span className="col-span-2 font-mono text-xs uppercase tracking-widest text-secondary">{article.category}</span>
              <h2 className="col-span-8 md:col-span-5 text-xl md:text-2xl font-bold tracking-tight group-hover:text-accent transition-colors leading-snug">
                {article.title}
              </h2>
              <span className="col-span-2 font-mono text-xs text-secondary hidden md:block">{article.date}</span>
              <div className="col-span-2 flex items-center justify-end gap-2 hidden md:flex">
                <span className="font-mono text-xs text-secondary">{article.read}</span>
                <span className="text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">→</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="border-t-4 border-primary mt-16 px-6 md:px-12 py-24 w-full max-w-[1800px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-[0.9]">SUBSCRIBE TO<br />THE JOURNAL</h2>
          <p className="text-secondary mt-4">Bi-monthly field notes. No newsletter theatre.</p>
        </div>
        <Link to="/contact" className="bg-primary text-background px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors flex-shrink-0">
          Subscribe →
        </Link>
      </section>
    </div>
  );
}
