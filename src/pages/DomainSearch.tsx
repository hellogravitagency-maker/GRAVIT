import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Search, ChevronRight, Globe, Shield, Zap } from 'lucide-react';
import SEO from '../components/SEO';

const TLDS = [
  { extension: '.com', price: '$9.99/yr', popular: true },
  { extension: '.io', price: '$39.99/yr', popular: true },
  { extension: '.ai', price: '$69.99/yr', popular: true },
  { extension: '.dev', price: '$14.99/yr', popular: false },
  { extension: '.tech', price: '$4.99/yr', popular: false },
  { extension: '.app', price: '$14.99/yr', popular: false },
];

export default function DomainSearch() {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<{ ext: string, available: boolean }[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    
    setIsSearching(true);
    // Mock search delay
    setTimeout(() => {
      setResults(TLDS.map(tld => ({
        ext: tld.extension,
        // Mock availability logic
        available: Math.random() > 0.3
      })));
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="w-full bg-[#050505] text-[#00ff41] min-h-screen overflow-x-hidden font-mono selection:bg-[#00ff41] selection:text-black pb-32">
      <SEO 
        title="Domain Search — GRAVIT" 
        description="Secure your digital identity on the grid." 
        path="/domain-search" 
      />

      {/* Grid Background overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{ backgroundImage: 'linear-gradient(#00ff41 1px, transparent 1px), linear-gradient(90deg, #00ff41 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      ></div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 pt-32">
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 border border-[#00ff41]/30 bg-[#00ff41]/5 px-4 py-2 rounded mb-8 text-sm">
            <span className="w-2 h-2 rounded-full bg-[#00ff41] animate-pulse" />
            SECURE_CONNECTION_ESTABLISHED
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white uppercase" style={{ textShadow: '0 0 20px rgba(0, 255, 65, 0.3)' }}>
            Find Your <span className="text-[#00ff41]">Vector</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Initialize search protocol to claim your node on the global network.
          </p>
        </motion.div>

        {/* SEARCH BAR */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          <form onSubmit={handleSearch} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00ff41] to-cyan-400 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex items-center bg-black border border-[#00ff41]/50 rounded-lg overflow-hidden">
              <div className="pl-6 text-[#00ff41]/50">
                <Search className="w-6 h-6" />
              </div>
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                placeholder="Enter target designation (e.g. startup)"
                className="w-full bg-transparent text-white text-xl md:text-2xl px-6 py-6 outline-none placeholder:text-white/20"
              />
              <button 
                type="submit" 
                disabled={isSearching}
                className="bg-[#00ff41]/10 hover:bg-[#00ff41] hover:text-black border-l border-[#00ff41]/50 px-8 py-6 text-lg font-bold uppercase transition-all flex items-center gap-2 h-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSearching ? 'Scanning...' : 'Execute'}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </form>

          {/* SEARCH RESULTS */}
          {results.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-8 bg-black/80 border border-[#00ff41]/30 rounded-lg overflow-hidden backdrop-blur-md"
            >
              <div className="p-4 border-b border-[#00ff41]/30 bg-[#00ff41]/5 text-sm uppercase tracking-widest text-white/50">
                Search Results for: <span className="text-[#00ff41] font-bold">{query}</span>
              </div>
              <div className="divide-y divide-[#00ff41]/10">
                {results.map((result, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={result.ext} 
                    className="p-6 flex items-center justify-between hover:bg-[#00ff41]/5 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-white">{query}<span className="text-[#00ff41]">{result.ext}</span></span>
                      {result.available ? (
                        <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 px-3 py-1 rounded text-xs uppercase">Available</span>
                      ) : (
                        <span className="bg-red-500/20 text-red-400 border border-red-500/50 px-3 py-1 rounded text-xs uppercase">Taken</span>
                      )}
                    </div>
                    {result.available ? (
                      <div className="flex items-center gap-6">
                        <span className="text-xl text-white/80">{TLDS.find(t => t.extension === result.ext)?.price}</span>
                        <button className="bg-[#00ff41] text-black px-6 py-2 rounded font-bold hover:bg-white transition-colors">
                          Add
                        </button>
                      </div>
                    ) : (
                      <button className="text-white/40 hover:text-white underline text-sm">
                        View WHOIS
                      </button>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {[
            { icon: Shield, title: 'Encrypted Privacy', desc: 'Free WHOIS protection obscures your data from scrapers and bots.' },
            { icon: Zap, title: 'Instant Resolution', desc: 'Global Anycast DNS infrastructure ensures sub-millisecond routing.' },
            { icon: Globe, title: 'Decentralized', desc: 'Web3 ready. Easily link traditional domains to blockchain wallets.' }
          ].map((feat, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              key={i}
              className="border border-[#00ff41]/20 bg-black p-8 rounded-lg hover:border-[#00ff41]/60 transition-colors group"
            >
              <feat.icon className="w-10 h-10 text-[#00ff41] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
              <p className="text-white/60 leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* TLD PRICING TABLE */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="border border-[#00ff41]/30 bg-black rounded-lg overflow-hidden"
        >
          <div className="p-6 border-b border-[#00ff41]/30 bg-[#00ff41]/5 flex justify-between items-center">
            <h2 className="text-xl font-bold text-white uppercase">Extension Registry</h2>
            <span className="text-xs text-white/50 uppercase">Base Pricing</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#00ff41]/30 p-px">
            {TLDS.map(tld => (
              <div key={tld.extension} className="bg-black p-6 flex flex-col items-center justify-center text-center gap-2 hover:bg-[#00ff41]/5 transition-colors cursor-pointer">
                <span className="text-3xl font-bold text-white">{tld.extension}</span>
                <span className="text-[#00ff41]">{tld.price}</span>
                {tld.popular && <span className="text-[10px] bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded uppercase mt-2 border border-cyan-500/30">Popular</span>}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
