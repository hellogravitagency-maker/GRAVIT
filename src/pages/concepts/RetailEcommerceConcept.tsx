import React, { useState } from 'react';
import { 
  ShoppingBag, Search, ArrowRight, Check, X, Plus, Minus, Flame, 
  RotateCcw, Sparkles, SlidersHorizontal, ChevronRight, Eye
} from 'lucide-react';
import ConceptFloatingNav from '../../components/concepts/ConceptFloatingNav';
import SEO from '../../components/SEO';

interface Item {
  id: string;
  name: string;
  category: 'Outerwear' | 'Tailoring' | 'Knitwear' | 'Footwear';
  price: number;
  sizes: string[];
  color: string;
  image: string;
  badge?: string;
  description: string;
}

const ITEMS: Item[] = [
  {
    id: 'utsha-1',
    name: 'Oversized Melton Wool Cocoon Coat',
    category: 'Outerwear',
    price: 680,
    sizes: ['S', 'M', 'L'],
    color: 'Onyx Black',
    image: '/assets/concepts/retail/wool_coat.webp',
    badge: 'Runway Piece',
    description: 'Constructed from 850gsm Portuguese Melton wool with dropped shoulders, horn button closures, and raw-edge cuffs.'
  },
  {
    id: 'utsha-2',
    name: 'Deconstructed Sculptural Blazer',
    category: 'Tailoring',
    price: 490,
    sizes: ['46', '48', '50', '52'],
    color: 'Ashen Chalk',
    image: '/assets/concepts/retail/sculptural_blazer.webp',
    badge: 'Drop Exclusive',
    description: 'Double-breasted architectural jacket with detachable harness strap and darted waist articulation.'
  },
  {
    id: 'utsha-3',
    name: 'Monolith Lug-Sole Leather Derby',
    category: 'Footwear',
    price: 420,
    sizes: ['40', '41', '42', '43', '44'],
    color: 'Glazed Black Boxcalf',
    image: '/assets/concepts/retail/leather_derby.webp',
    badge: 'Low Stock',
    description: 'Hand-lasted Italian boxcalf leather mounted on an exaggerated Vibram extralight lug sole.'
  },
  {
    id: 'utsha-4',
    name: 'Heavyweight Bouclé Knit Turtleneck',
    category: 'Knitwear',
    price: 340,
    sizes: ['S', 'M', 'L', 'XL'],
    color: 'Chalk White',
    image: '/assets/concepts/retail/boucle_turtleneck.webp',
    description: 'Chunky 5-gauge Peruvian alpaca and virgin wool blend offering supreme warmth with a relaxed draped silhouette.'
  },
  {
    id: 'utsha-5',
    name: 'Technical Cargo Flared Trousers',
    category: 'Tailoring',
    price: 310,
    sizes: ['28', '30', '32', '34'],
    color: 'Mineral Slate',
    image: '/assets/concepts/retail/cargo_pant.webp',
    description: 'Water-repellent Japanese memory twill featuring articulated knee gussets and magnetic Fidlock pocket closures.'
  },
  {
    id: 'utsha-6',
    name: 'Modular Hardware Leather Crossbody',
    category: 'Tailoring',
    price: 480,
    sizes: ['ONE SIZE'],
    color: 'Matte Obsidian',
    image: '/assets/concepts/retail/sling_bag.webp',
    badge: 'Archive Reissue',
    description: 'Sculpted calfskin crossbody with anodized titanium modular clips and quick-release magnetic Fidlock buckle.'
  }
];

export default function RetailEcommerceConcept() {
  const [filter, setFilter] = useState('All');
  const [cart, setCart] = useState<{ item: Item; size: string; qty: number }[]>([
    { item: ITEMS[0], size: 'M', qty: 1 }
  ]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<Record<string, string>>({
    'utsha-1': 'M',
    'utsha-2': '48',
    'utsha-3': '42',
    'utsha-4': 'L',
    'utsha-5': '32',
    'utsha-6': 'L'
  });

  const filteredItems = filter === 'All' 
    ? ITEMS 
    : ITEMS.filter((item) => item.category === filter);

  const cartTotal = cart.reduce((sum, entry) => sum + entry.item.price * entry.qty, 0);
  const cartItemCount = cart.reduce((sum, entry) => sum + entry.qty, 0);

  const addToBag = (item: Item) => {
    const size = selectedSize[item.id] || item.sizes[0];
    setCart((prev) => {
      const existing = prev.find((e) => e.item.id === item.id && e.size === size);
      if (existing) {
        return prev.map((e) => 
          e.item.id === item.id && e.size === size ? { ...e, qty: e.qty + 1 } : e
        );
      }
      return [...prev, { item, size, qty: 1 }];
    });
    setCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#070709] text-[#F0F0F2] font-sans antialiased selection:bg-[#D4FF00] selection:text-black">
      <SEO 
        title="UTSHA STUDIOS | Avant-Garde Fashion & Metropolis Edition" 
        description="Contemporary luxury fashion atelier. High-fashion silhouettes, Japanese textiles, and archival tailoring."
      />

      {/* ── Kinetic Marquee Ticker ───────────────────────────── */}
      <div className="bg-[#D4FF00] text-black py-2 px-4 text-xs font-mono font-bold tracking-widest uppercase overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-pulse">
          ⚡ COLLECTION 04 / METROPOLIS NOW LIVE · COMPLIMENTARY EXPRESS SHIPPING WORLDWIDE OVER $250 · ARCHIVE REISSUES IN LIMITED RUNS · ⚡ COLLECTION 04 / METROPOLIS NOW LIVE
        </div>
      </div>

      {/* ── Header ─────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#070709]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-10">
            <a href="#top" className="flex items-center gap-2">
              <span className="text-xl font-black tracking-[0.2em] text-white">
                UTSHA<span className="text-[#D4FF00]">.</span>
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-xs uppercase font-mono tracking-widest text-white/70">
              <button onClick={() => setFilter('All')} className="hover:text-[#D4FF00] transition-colors">All Drop</button>
              <button onClick={() => setFilter('Outerwear')} className="hover:text-[#D4FF00] transition-colors">Outerwear</button>
              <button onClick={() => setFilter('Tailoring')} className="hover:text-[#D4FF00] transition-colors">Tailoring</button>
              <button onClick={() => setFilter('Knitwear')} className="hover:text-[#D4FF00] transition-colors">Knitwear</button>
              <button onClick={() => setFilter('Footwear')} className="hover:text-[#D4FF00] transition-colors">Footwear</button>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-mono text-white hover:border-[#D4FF00] transition-colors"
            >
              <ShoppingBag size={14} className="text-[#D4FF00]" />
              <span>BAG</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#D4FF00] text-black text-[10px] font-bold">
                {cartItemCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Hero Runway Banner ───────────────────────────────── */}
      <section id="top" className="relative w-full pt-20 pb-28 md:pt-32 md:pb-40 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="/assets/work/utsha_studios_preview.webp" 
            alt="UTSHA Editorial" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/75 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4FF00]/40 bg-[#D4FF00]/10 px-3 py-1 text-xs font-mono uppercase tracking-widest text-[#D4FF00] mb-6">
              <Flame size={12} />
              <span>Autumn / Winter Metropolis 2026</span>
            </div>
            <h1 className="text-4xl sm:text-7xl font-black tracking-[-0.04em] uppercase text-white leading-[0.95]">
              Deconstructed <span className="text-[#D4FF00]">Architectural</span> Form.
            </h1>
            <p className="mt-6 text-sm sm:text-base text-white/70 max-w-xl font-light leading-relaxed">
              Precision tailored in small batches between Porto and Okayama. Exaggerated proportions, bonded raw-edge wool, and utilitarian tech hardware.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="#catalog"
                className="inline-flex items-center gap-2 rounded-full bg-[#D4FF00] px-7 py-3 text-xs font-mono font-bold uppercase tracking-wider text-black hover:bg-[#e0ff33] transition-all"
              >
                <span>Shop Collection (06)</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Catalog Grid ────────────────────────────────────── */}
      <section id="catalog" className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4FF00] font-mono">Metropolis Drop</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-1">Available Silhouettes</h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {['All', 'Outerwear', 'Tailoring', 'Knitwear', 'Footwear'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-mono transition-all ${
                  filter === cat
                    ? 'bg-[#D4FF00] text-black font-bold'
                    : 'border border-white/10 bg-white/5 text-white/70 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group rounded-2xl border border-white/10 bg-[#101015] overflow-hidden hover:border-[#D4FF00]/50 transition-all flex flex-col"
            >
              <div className="relative aspect-[3/4] bg-black overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {item.badge && (
                  <span className="absolute top-3 left-3 rounded-full bg-black/80 backdrop-blur px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-[#D4FF00] border border-white/10">
                    {item.badge}
                  </span>
                )}
                <div className="absolute bottom-3 right-3">
                  <span className="rounded-lg bg-black/85 backdrop-blur px-3 py-1 text-sm font-mono font-bold text-white">
                    ${item.price}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <span className="text-[11px] font-mono text-white/50 uppercase">{item.category} · {item.color}</span>
                <h3 className="text-base font-bold text-white mt-1 group-hover:text-[#D4FF00] transition-colors">{item.name}</h3>
                <p className="text-xs text-white/60 mt-1.5 line-clamp-2 leading-relaxed">{item.description}</p>

                {/* Size Selector */}
                <div className="mt-4 pt-3 border-t border-white/10">
                  <span className="text-[10px] font-mono uppercase text-white/40 block mb-2">Select Size:</span>
                  <div className="flex gap-2">
                    {item.sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize({ ...selectedSize, [item.id]: s })}
                        className={`h-7 w-9 rounded border text-xs font-mono transition-all ${
                          (selectedSize[item.id] || item.sizes[0]) === s
                            ? 'border-[#D4FF00] bg-[#D4FF00] text-black font-bold'
                            : 'border-white/15 bg-white/5 text-white/70 hover:border-white/40'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => addToBag(item)}
                  className="mt-6 w-full rounded-xl bg-white/10 hover:bg-[#D4FF00] hover:text-black py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-white transition-all active:scale-95"
                >
                  Add To Bag
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Standalone Footer ───────────────────────────────── */}
      <footer className="border-t border-white/10 bg-[#040405] py-14 px-6 text-white/50 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg font-black tracking-widest text-white">UTSHA STUDIOS</span>
            </div>
            <p className="max-w-sm text-white/40 leading-relaxed font-mono text-[11px]">
              Metropolis Editions · Flagship studios in Harajuku Tokyo, Le Marais Paris, SoHo NYC.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 font-mono text-[11px]">
            <div>
              <div className="font-bold text-white uppercase tracking-wider mb-3">Client Care</div>
              <ul className="space-y-1.5 text-white/60">
                <li>Global Shipping & Duties</li>
                <li>Archive Returns (14 Days)</li>
                <li>Garment Care Instructions</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-white uppercase tracking-wider mb-3">Ethos</div>
              <ul className="space-y-1.5 text-white/60">
                <li>Zero-Plastic Packaging</li>
                <li>Portuguese Mills</li>
                <li>Okayama Indigo Wash</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-white uppercase tracking-wider mb-3">Legal</div>
              <ul className="space-y-1.5 text-white/60">
                <li>Terms & Drops</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40 font-mono">
          <div>© {new Date().getFullYear()} UTSHA STUDIOS S.A. All rights reserved.</div>
          <div>Engineered as a GRAVIT Concept Prototype.</div>
        </div>
      </footer>

      {/* Bag Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm">
          <div className="w-full max-w-md bg-[#0F0F14] h-full flex flex-col border-l border-white/15 p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 font-mono">
                <ShoppingBag size={18} className="text-[#D4FF00]" />
                <h3 className="text-sm font-bold text-white uppercase">Shopping Bag ({cartItemCount})</h3>
              </div>
              <button onClick={() => setCartOpen(false)} className="p-2 text-white/60 hover:text-white">
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {cart.map(({ item, size, qty }) => (
                <div key={`${item.id}-${size}`} className="flex gap-4 p-3 rounded-xl border border-white/10 bg-white/[0.02]">
                  <img src={item.image} alt={item.name} className="h-16 w-16 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-white truncate">{item.name}</h4>
                    <p className="text-[11px] font-mono text-[#D4FF00]">Size: {size}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-white">${item.price * qty}</span>
                      <span className="text-xs font-mono text-white/60">Qty: {qty}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3 font-mono">
              <div className="flex justify-between text-xs text-white/60">
                <span>Subtotal</span>
                <span className="text-white font-bold">${cartTotal}</span>
              </div>
              <div className="flex justify-between text-xs text-white/60">
                <span>Global Express Duties</span>
                <span className="text-emerald-400">Included</span>
              </div>
              <button
                onClick={() => alert(`Checkout confirmed for $${cartTotal}! UTSHA concept prototype.`)}
                className="w-full rounded-xl bg-[#D4FF00] py-3 text-xs font-mono font-bold uppercase tracking-wider text-black hover:bg-[#e0ff33]"
              >
                Checkout With Stripe
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating GRAVIT Return Pill */}
      <ConceptFloatingNav 
        conceptName="UTSHA Retail E-commerce" 
        category="E-commerce · Retail · Shopping"
        dribbbleUrl="https://dribbble.com/shots/26625180-UTSHA-New-E-commerce-Website-Project"
      />
    </div>
  );
}
