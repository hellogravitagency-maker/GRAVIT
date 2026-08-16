import React from 'react';
import { motion } from 'motion/react';
import { Check, Star, Zap, Shield, Rocket, ShoppingBag, BookOpen, PenTool, ArrowRight, PlayCircle } from 'lucide-react';
import { DesignSystemState } from './types';
import { getArchetypeClasses } from './designData';
import { WebsiteNavbar } from './WebsiteNavbar';
import { WebsiteFooter } from './WebsiteFooter';

interface LiveSandboxProps {
  state: DesignSystemState;
}

export function LiveSandbox({ state }: LiveSandboxProps) {
  const styles = getArchetypeClasses(state.archetype, state.colorTheme);
  
  const spacingClass = 
    state.spacing === 'condensed' ? 'gap-4 p-4' : 
    state.spacing === 'spacious' ? 'gap-12 p-12' : 
    'gap-8 p-8';

  const sectionPadding = 
    state.spacing === 'condensed' ? 'py-12' : 
    state.spacing === 'spacious' ? 'py-32' : 
    'py-24';

  const renderStartup = () => (
    <>
      {/* HERO SECTION */}
      <section className={`flex flex-col items-center justify-center text-center ${sectionPadding} min-h-[70vh]`}>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className={`inline-block mb-6 ${styles.badge}`}
          style={state.archetype === 'swiss' || state.archetype === 'glassmorphism' || state.archetype === 'scandinavian' ? undefined : { 
            color: state.archetype === 'brutalist' ? 'black' : state.colorTheme.text, 
          }}
        >
          Introducing VisualCraft 2.0
        </motion.div>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`text-5xl md:text-7xl mb-6 max-w-4xl ${state.typography.displayClass}`}
        >
          Design Systems. <br />
          <span style={{ color: state.colorTheme.accent }}>Built for the future.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={`text-lg md:text-xl max-w-2xl opacity-80 mb-10 ${state.typography.bodyClass}`}
        >
          Dynamically switch archetypes, colors, and typography. Experience the true power of programmatic design components instantly.
        </motion.p>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <button className={`px-8 py-4 ${styles.button} ${state.typography.bodyClass}`}>
            Get Started Free
          </button>
          <button 
            className={`px-8 py-4 ${styles.button} ${state.typography.bodyClass}`}
            style={{ backgroundColor: 'transparent', color: state.colorTheme.text, borderColor: state.colorTheme.text }}
          >
            Read Documentation
          </button>
        </motion.div>
      </section>

      {/* FEATURES BENTO GRID */}
      <section className={`${sectionPadding}`}>
        <div className={`${styles.sectionHeader} ${state.typography.displayClass}`}>
          Features & Capabilities
        </div>
        
        <div className={`grid grid-cols-1 md:grid-cols-3 ${spacingClass}`}>
          <div className={`md:col-span-2 ${styles.card} ${spacingClass} flex flex-col justify-between min-h-[300px]`}>
            <div className="w-12 h-12 flex items-center justify-center rounded-full mb-6" style={{ backgroundColor: state.colorTheme.accent + '20', color: state.colorTheme.accent }}>
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h3 className={`text-2xl mb-2 ${state.typography.displayClass}`}>Lightning Fast Execution</h3>
              <p className={`opacity-80 ${state.typography.bodyClass}`}>Compile and render your UI components at the edge. No more waiting.</p>
            </div>
          </div>
          <div className={`md:col-span-1 ${styles.card} ${spacingClass} flex flex-col justify-between min-h-[300px]`}>
             <div className="w-12 h-12 flex items-center justify-center rounded-full mb-6" style={{ backgroundColor: state.colorTheme.primary + '20', color: state.colorTheme.accent }}>
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h3 className={`text-2xl mb-2 ${state.typography.displayClass}`}>Enterprise Secure</h3>
              <p className={`opacity-80 ${state.typography.bodyClass}`}>SOC2 compliant infrastructure built directly into your workflow.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* PRICING TABLE */}
      <section className={`${sectionPadding}`}>
         <div className={`${styles.sectionHeader} ${state.typography.displayClass}`}>
          Simple Pricing
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 ${spacingClass}`}>
          <div className={`${styles.card} ${spacingClass} flex flex-col`}>
            <h3 className={`text-3xl mb-2 ${state.typography.displayClass}`}>Hobby</h3>
            <div className="mb-6"><span className={`text-5xl font-bold ${state.typography.displayClass}`}>$0</span></div>
            <ul className={`space-y-4 mb-10 flex-1 ${state.typography.bodyClass}`}>
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /><span className="opacity-80">Up to 3 projects</span></li>
            </ul>
            <button className={`w-full py-4 ${styles.button} ${state.typography.bodyClass}`} style={{ backgroundColor: 'transparent', color: state.colorTheme.text, borderColor: state.colorTheme.text }}>Start Free</button>
          </div>
          <div className={`${styles.card} ${spacingClass} flex flex-col relative overflow-hidden`}>
            <div className="absolute top-0 right-0 bg-accent text-black px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-bl-lg">Most Popular</div>
            <h3 className={`text-3xl mb-2 ${state.typography.displayClass}`}>Pro</h3>
            <div className="mb-6"><span className={`text-5xl font-bold ${state.typography.displayClass}`}>$49</span></div>
            <ul className={`space-y-4 mb-10 flex-1 ${state.typography.bodyClass}`}>
              <li className="flex items-center gap-3"><Check className="w-5 h-5" style={{ color: state.colorTheme.accent }} /><span className="opacity-80">Unlimited projects</span></li>
            </ul>
            <button className={`w-full py-4 ${styles.button} ${state.typography.bodyClass}`}>Upgrade to Pro</button>
          </div>
        </div>
      </section>
    </>
  );

  const renderEcommerce = () => (
    <>
      <section className={`flex flex-col md:flex-row items-center justify-between ${sectionPadding} min-h-[60vh] gap-12`}>
        <div className="flex-1">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className={`text-5xl md:text-7xl mb-6 ${state.typography.displayClass}`}>
            New Season. <br /><span style={{ color: state.colorTheme.accent }}>New Arrivals.</span>
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className={`text-xl opacity-80 mb-8 ${state.typography.bodyClass}`}>
            Discover our latest collection of premium digital artifacts.
          </motion.p>
          <motion.button initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className={`px-10 py-4 flex items-center gap-2 ${styles.button} ${state.typography.bodyClass}`}>
            <ShoppingBag className="w-5 h-5" /> Shop Now
          </motion.button>
        </div>
        <div className="flex-1 w-full relative">
          <div className={`w-full aspect-[4/3] rounded-2xl bg-gradient-to-tr from-[${state.colorTheme.primary}] to-[${state.colorTheme.secondary}] opacity-80 blur-2xl absolute inset-0`} />
          <div className={`w-full aspect-[4/3] relative z-10 flex items-center justify-center text-6xl ${styles.card}`}>
            🛍️
          </div>
        </div>
      </section>

      <section className={`${sectionPadding}`}>
        <div className="flex justify-between items-end mb-8 border-b border-current pb-4">
          <h2 className={`text-3xl ${state.typography.displayClass}`}>Trending Products</h2>
          <a href="#" className={`flex items-center gap-1 hover:opacity-70 ${state.typography.bodyClass}`}>View All <ArrowRight className="w-4 h-4" /></a>
        </div>
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ${spacingClass}`}>
          {[1,2,3,4].map(i => (
            <div key={i} className={`flex flex-col group`}>
              <div className={`w-full aspect-square mb-4 flex items-center justify-center text-4xl relative overflow-hidden ${styles.card}`}>
                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm z-20">
                   <button className={`${styles.button} px-4 py-2 text-sm`}>Quick Add</button>
                 </div>
                 {i === 1 ? '👟' : i === 2 ? '👕' : i === 3 ? '🎒' : '🧢'}
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className={`font-bold ${state.typography.displayClass}`}>Product {i}</h3>
                  <p className={`text-sm opacity-60 ${state.typography.bodyClass}`}>Category</p>
                </div>
                <span className={`font-medium ${state.typography.bodyClass}`}>${i}9.99</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );

  const renderEducation = () => (
    <>
      <section className={`flex flex-col items-center justify-center text-center ${sectionPadding} min-h-[70vh] bg-gradient-to-b from-transparent to-[${state.colorTheme.secondary}]/10`}>
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className={`w-20 h-20 mb-8 rounded-full flex items-center justify-center mx-auto text-3xl`} style={{ backgroundColor: state.colorTheme.accent + '20', color: state.colorTheme.accent }}>
          <BookOpen className="w-10 h-10" />
        </motion.div>
        <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className={`text-5xl md:text-7xl mb-6 max-w-4xl ${state.typography.displayClass}`}>
          Master The Future of <br />Digital Creation.
        </motion.h1>
        <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className={`text-xl max-w-2xl opacity-80 mb-10 ${state.typography.bodyClass}`}>
          Join over 10,000 students learning cutting-edge design systems, frontend engineering, and AI integration.
        </motion.p>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="flex gap-4">
          <button className={`px-8 py-4 ${styles.button} ${state.typography.bodyClass}`}>View Programs</button>
          <button className={`px-8 py-4 flex items-center gap-2 ${styles.button} ${state.typography.bodyClass}`} style={{ backgroundColor: 'transparent', color: state.colorTheme.text, borderColor: state.colorTheme.text }}>
            <PlayCircle className="w-5 h-5" /> Watch Trailer
          </button>
        </motion.div>
      </section>

      <section className={`${sectionPadding}`}>
        <div className={`text-center mb-16`}>
          <h2 className={`text-4xl mb-4 ${state.typography.displayClass}`}>Popular Courses</h2>
          <p className={`opacity-70 max-w-xl mx-auto ${state.typography.bodyClass}`}>Learn from industry leaders with hands-on projects and real-world scenarios.</p>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-3 ${spacingClass}`}>
          {['Advanced React Patterns', 'Design System Architecture', 'AI-Driven Development'].map((course, i) => (
            <div key={course} className={`${styles.card} ${spacingClass} flex flex-col`}>
               <div className={`w-full h-48 mb-6 flex items-center justify-center text-4xl`} style={{ backgroundColor: state.colorTheme.canvas, filter: 'brightness(0.9)' }}>
                 {i === 0 ? '⚛️' : i === 1 ? '🎨' : '🤖'}
               </div>
               <div className={`text-xs font-bold uppercase tracking-widest mb-2`} style={{ color: state.colorTheme.accent }}>8 Weeks • Intermediate</div>
               <h3 className={`text-2xl mb-4 ${state.typography.displayClass}`}>{course}</h3>
               <p className={`opacity-70 mb-8 flex-1 ${state.typography.bodyClass}`}>Master the core concepts and advanced techniques needed to excel in modern web development.</p>
               <button className={`w-full py-3 ${styles.button} ${state.typography.bodyClass}`} style={{ backgroundColor: 'transparent', color: state.colorTheme.text, borderColor: state.colorTheme.text }}>Enroll Now</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );

  const renderPortfolio = () => (
    <>
      <section className={`flex flex-col items-start justify-center ${sectionPadding} min-h-[60vh] max-w-4xl`}>
        <motion.h1 initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className={`text-6xl md:text-8xl mb-8 ${state.typography.displayClass}`}>
          Hello. I'm a <br />Digital <span style={{ color: state.colorTheme.accent }} className="italic font-light">Craftsman</span>.
        </motion.h1>
        <motion.p initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className={`text-2xl opacity-80 mb-12 ${state.typography.bodyClass}`}>
          Specializing in premium brand identities, immersive web experiences, and scalable design systems.
        </motion.p>
        <motion.button initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} className={`px-10 py-4 flex items-center gap-2 ${styles.button} ${state.typography.bodyClass}`}>
          <PenTool className="w-5 h-5" /> Let's Talk
        </motion.button>
      </section>

      <section className={`${sectionPadding}`}>
        <div className={`grid grid-cols-1 md:grid-cols-2 ${spacingClass}`}>
          {[1,2,3,4].map(i => (
            <div key={i} className={`group cursor-pointer ${i % 2 === 0 ? 'md:mt-24' : ''}`}>
              <div className={`w-full aspect-[4/5] relative overflow-hidden ${styles.card} mb-6 flex items-center justify-center text-6xl`}>
                <div className={`absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center`}>
                  <span className={`${styles.badge} bg-white text-black border-none`}>View Project</span>
                </div>
                {i === 1 ? '📱' : i === 2 ? '💻' : i === 3 ? '🎮' : '🎧'}
              </div>
              <h3 className={`text-3xl mb-2 ${state.typography.displayClass}`}>Project Alpha {i}</h3>
              <p className={`opacity-60 uppercase tracking-widest text-sm ${state.typography.bodyClass}`}>Web Design / Development</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`w-full min-h-screen transition-all duration-700 ease-in-out`}
      style={{ 
        backgroundColor: state.colorTheme.canvas,
        color: state.colorTheme.text,
      }}
    >
      <WebsiteNavbar state={state} />
      
      <main className="max-w-6xl mx-auto px-6 w-full flex flex-col">
        {state.websiteType === 'ecommerce' && renderEcommerce()}
        {state.websiteType === 'education' && renderEducation()}
        {state.websiteType === 'portfolio' && renderPortfolio()}
        {state.websiteType === 'startup' && renderStartup()}
      </main>

      <WebsiteFooter state={state} />
    </motion.div>
  );
}
