import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const PRODUCTS = [
  {
    name: 'Digital Storefront',
    price: '$99/mo',
    color: 'bg-lime-400',
    features: ['Unlimited Products', '0% Transaction Fee', 'Custom Domain', '24/7 Support'],
  },
  {
    name: 'Enterprise Commerce',
    price: '$299/mo',
    color: 'bg-fuchsia-400',
    features: ['Headless API', 'Multi-currency', 'Advanced Analytics', 'Dedicated Success Manager'],
  },
  {
    name: 'Creator Merch',
    price: '$49/mo',
    color: 'bg-cyan-400',
    features: ['Print on Demand', 'Social Integrations', 'Basic Analytics', 'Standard Support'],
  }
];

export default function Ecommerce() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <div className="w-full bg-[#f4f4f0] text-black min-h-screen overflow-x-hidden font-sans selection:bg-black selection:text-white pb-32">
      <SEO 
        title="E-Commerce Solutions — GRAVIT" 
        description="Build high-converting online stores with our neo-brutalist commerce engine." 
        path="/ecommerce" 
      />

      {/* MARQUEE TOP */}
      <div className="w-full bg-black text-white py-3 overflow-hidden border-b-4 border-black mt-[72px]">
        <motion.div 
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="whitespace-nowrap flex font-mono text-sm uppercase font-bold"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-4 tracking-widest">
              SELL ANYTHING • ANYWHERE • ZERO LIMITS • 
            </span>
          ))}
        </motion.div>
      </div>

      {/* HERO SECTION */}
      <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-24 md:pt-32 md:pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-10"
          >
            <div className="inline-block bg-yellow-400 border-4 border-black px-4 py-2 font-bold uppercase tracking-widest text-sm mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Commerce Engine v2.0
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-8">
              Sell With <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-blue-500 stroke-black" style={{ WebkitTextStroke: '3px black' }}>
                Attitude.
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-medium border-l-8 border-black pl-6 py-2 mb-10 max-w-lg">
              Launch brutal, blazing-fast storefronts that convert browsers into buyers. No generic templates allowed.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="https://cal.com/gravitstudio/project-call" target="_blank" rel="noopener noreferrer">
                <motion.button 
                  whileHover={{ translateX: -4, translateY: -4, boxShadow: "12px 12px 0px 0px rgba(0,0,0,1)" }}
                  whileTap={{ translateX: 0, translateY: 0, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
                  className="bg-lime-400 border-4 border-black px-10 py-5 text-xl font-black uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  Start Selling
                </motion.button>
              </a>
              <Link to="/pricing">
                <motion.button 
                  whileHover={{ translateX: -4, translateY: -4, boxShadow: "12px 12px 0px 0px rgba(0,0,0,1)" }}
                  whileTap={{ translateX: 0, translateY: 0, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
                  className="bg-white border-4 border-black px-10 py-5 text-xl font-black uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  View Pricing
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            style={{ y: y1 }}
            className="relative h-[400px] md:h-[600px] w-full"
          >
            {/* Decorative Brutalist Elements */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 right-0 w-32 h-32 bg-blue-500 border-4 border-black rounded-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-20 flex items-center justify-center"
            >
              <span className="font-black text-4xl text-white">99%</span>
            </motion.div>
            
            <div className="absolute inset-4 bg-fuchsia-400 border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] z-10 overflow-hidden group">
              <div className="absolute inset-0 bg-[url('/assets/work/cyberpunk_ecommerce_1788030750391.jpg')] bg-cover bg-center mix-blend-luminosity opacity-50 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500"></div>
              <div className="absolute bottom-0 w-full bg-black text-white p-4 font-mono text-lg font-bold flex justify-between border-t-4 border-black">
                <span>NEW ARRIVALS</span>
                <span>[SHOP NOW]</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SCROLLING MARQUEE MIDDLE */}
      <div className="w-full bg-yellow-400 text-black py-6 overflow-hidden border-y-4 border-black transform -rotate-2 scale-105 my-20">
        <motion.div 
          animate={{ x: [-1035, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="whitespace-nowrap flex font-black text-4xl md:text-6xl uppercase"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-8">
              CONVERT MORE • SELL FASTER • 
            </span>
          ))}
        </motion.div>
      </div>

      {/* PRICING / PLANS */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">Pick Your Poison.</h2>
          <p className="text-xl font-medium max-w-2xl mx-auto">No hidden fees. No BS. Just the tools you need to dominate your market.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {PRODUCTS.map((prod, i) => (
            <motion.div 
              key={prod.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className={`${prod.color} border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col h-full`}
            >
              <h3 className="text-3xl font-black uppercase mb-2">{prod.name}</h3>
              <div className="text-5xl font-black mb-8 pb-8 border-b-4 border-black">{prod.price}</div>
              <ul className="flex-1 space-y-4 mb-10">
                {prod.features.map((feat, j) => (
                  <li key={j} className="flex items-center text-lg font-bold">
                    <span className="w-6 h-6 mr-4 bg-black rounded-full flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-black text-white font-black text-xl py-4 uppercase hover:bg-white hover:text-black border-4 border-black transition-colors">
                Select Plan
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-32">
        <motion.div 
          style={{ y: y2 }}
          className="bg-blue-500 border-4 border-black p-12 md:p-24 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 2px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          
          <div className="relative z-10">
            <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8" style={{ WebkitTextStroke: '2px black' }}>
              Ready To Disrupt?
            </h2>
            <a href="https://cal.com/gravitstudio/project-call" target="_blank" rel="noopener noreferrer">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 border-4 border-black px-12 py-6 text-2xl font-black uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-shadow"
              >
                Let's Build It
              </motion.button>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
