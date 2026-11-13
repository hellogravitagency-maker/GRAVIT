import React, { useState } from 'react';
import { 
  ShoppingBag, Search, SlidersHorizontal, Heart, ArrowRight, Check, X, 
  Trash2, Plus, Minus, Eye, Sparkles, Shield, RotateCcw, Truck
} from 'lucide-react';
import ConceptFloatingNav from '../../components/concepts/ConceptFloatingNav';
import SEO from '../../components/SEO';

interface Product {
  id: string;
  name: string;
  designer: string;
  price: number;
  category: 'Seating' | 'Tables' | 'Lighting' | 'Storage';
  material: string;
  image: string;
  tag?: string;
  description: string;
}

const PRODUCTS: Product[] = [
  {
    id: 'furn-1',
    name: 'Koto Lounge Chair in Bouclé',
    designer: 'Studio Ilse & Soren',
    price: 1850,
    category: 'Seating',
    material: 'Natural Oat Bouclé · Smoked Solid Oak',
    image: '/assets/concepts/furniture/koto_chair.webp',
    tag: 'Design Icon',
    description: 'Sculptural low-slung silhouette crafted with FSC-certified smoked oak and plush double-woven wool bouclé.'
  },
  {
    id: 'furn-2',
    name: 'Moku Travertine Dining Table',
    designer: 'Atelier Kvadrat',
    price: 3600,
    category: 'Tables',
    material: 'Honed Roman Travertine Stone',
    image: '/assets/concepts/furniture/moku_table.webp',
    tag: 'Limited Edition',
    description: 'Monumental monolithic dining table hand-finished in Tivoli travertine with softened bullnose edges.'
  },
  {
    id: 'furn-3',
    name: 'Arco Spun Brass Chandelier',
    designer: 'Studio Forma',
    price: 1250,
    category: 'Lighting',
    material: 'Hand-Rubbed Patinated Brass',
    image: '/assets/concepts/furniture/arco_chandelier.webp',
    tag: 'New Arrival',
    description: 'Kinetic pendant mobile balancing warm diffuse LED globes on slender counterweighted brass arms.'
  },
  {
    id: 'furn-4',
    name: 'Sora Minimal Credenza',
    designer: 'Jonas Bjerre',
    price: 2450,
    category: 'Storage',
    material: 'Quarter-Sawn Japanese Walnut',
    image: '/assets/concepts/furniture/sora_credenza.webp',
    description: 'Seamless fluted tambour doors with soft-close push mechanisms and brushed bronze recessed base.'
  },
  {
    id: 'furn-5',
    name: 'Nube Natural Linen Sofa',
    designer: 'Mette Hay Ateliers',
    price: 3200,
    category: 'Seating',
    material: 'Belgian Washed Linen · Feather Down',
    image: '/assets/concepts/furniture/linen_sofa.webp',
    description: 'Generously proportioned modular deep-seating sofa upholstered in breathable Belgian stonewashed flax linen.'
  },
  {
    id: 'furn-6',
    name: 'Vaso Sculptural Ceramic Urn',
    designer: 'Studio Forma',
    price: 540,
    category: 'Storage',
    material: 'Hand-Thrown Coarse Stoneware',
    image: '/assets/concepts/furniture/ceramic_urn.webp',
    description: 'Monumental handmade tactile vessel fired with volcanic slip glaze for dramatic architectural presence.'
  }
];

export default function FurnitureConcept() {
  const [filter, setFilter] = useState<string>('All');
  const [cart, setCart] = useState<{ product: Product; qty: number }[]>([
    { product: PRODUCTS[0], qty: 1 }
  ]);
  const [cartOpen, setCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter((p) => p.category === filter);

  const cartTotal = cart.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) => 
          item.product.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const updateQty = (id: string, delta: number) => {
    setCart((prev) => prev.map((item) => {
      if (item.product.id === id) {
        const newQty = item.qty + delta;
        return newQty > 0 ? { ...item, qty: newQty } : null;
      }
      return item;
    }).filter(Boolean) as { product: Product; qty: number }[]);
  };

  return (
    <div className="min-h-screen bg-[#111215] text-[#ECECF0] font-sans antialiased selection:bg-[#E27D60] selection:text-white">
      <SEO 
        title="ATELIER NORDIC | Architectural Living & Scandinavian Furniture" 
        description="Sculptural minimalist furniture, lighting, and interior objects designed for quiet permanence."
      />

      {/* ── Top Announcement Bar ────────────────────────────── */}
      <div className="bg-[#18191F] border-b border-white/5 py-2 px-6 text-center text-[11px] text-white/60 tracking-wider uppercase font-mono">
        Complimentary White Glove Delivery on Orders Over $2,500 · 30-Day In-Home Trial
      </div>

      {/* ── Main Navigation Bar ──────────────────────────────── */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#111215]/85 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-10">
            <a href="#top" className="flex items-center gap-2">
              <span className="text-lg font-light tracking-[0.25em] text-white uppercase">
                ATELIER <span className="font-semibold text-[#E27D60]">NORDIC</span>
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest text-white/70">
              <button onClick={() => setFilter('All')} className="hover:text-white transition-colors">Catalog</button>
              <button onClick={() => setFilter('Seating')} className="hover:text-white transition-colors">Seating</button>
              <button onClick={() => setFilter('Tables')} className="hover:text-white transition-colors">Tables</button>
              <button onClick={() => setFilter('Lighting')} className="hover:text-white transition-colors">Lighting</button>
              <a href="#craftsmanship" className="hover:text-white transition-colors">Craftsmanship</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white hover:bg-white/10 transition-colors"
            >
              <ShoppingBag size={14} className="text-[#E27D60]" />
              <span>Cart</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E27D60] text-white text-[10px] font-bold">
                {cartItemCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Hero Banner ─────────────────────────────────────── */}
      <section id="top" className="relative w-full pt-20 pb-32 md:pt-32 md:pb-44 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="/assets/work/atelier_nordic_preview.webp" 
            alt="Interior Living" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111215] via-[#111215]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#E27D60] font-mono">2026 Architectural Edition</span>
            <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mt-4 leading-[1.08]">
              Objects of <span className="font-serif italic text-[#E27D60]">quiet</span> permanence.
            </h1>
            <p className="mt-6 text-sm sm:text-base text-white/70 max-w-lg leading-relaxed font-light">
              Sculptural seating, hand-honed travertine tables, and patinated brass luminaires crafted with honest materials that age gracefully over lifetimes.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#catalog"
                className="inline-flex items-center gap-2 rounded-full bg-[#E27D60] px-7 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#eb886b] transition-all"
              >
                <span>Shop Collection</span>
                <ArrowRight size={13} />
              </a>
              <a
                href="#craftsmanship"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs uppercase tracking-wider text-white hover:bg-white/10 transition-colors"
              >
                <span>Design Philosophy</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Curated Catalog Grid ────────────────────────────── */}
      <section id="catalog" className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#E27D60] font-mono">Curated Furniture</span>
            <h2 className="text-3xl sm:text-4xl font-light text-white mt-2">The Permanent Collection</h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {['All', 'Seating', 'Tables', 'Lighting', 'Storage'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  filter === cat
                    ? 'bg-[#E27D60] text-white font-semibold'
                    : 'border border-white/10 bg-white/5 text-white/70 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((p) => (
            <article
              key={p.id}
              className="group rounded-2xl border border-white/10 bg-[#16171E] overflow-hidden hover:border-[#E27D60]/50 transition-all flex flex-col"
            >
              <div className="relative aspect-[4/3] bg-black overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {p.tag && (
                  <span className="absolute top-3 left-3 rounded-full bg-black/70 backdrop-blur px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-white border border-white/10">
                    {p.tag}
                  </span>
                )}
                <button
                  onClick={() => setQuickViewProduct(p)}
                  className="absolute bottom-3 right-3 rounded-full bg-black/80 backdrop-blur p-2.5 text-white/80 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  title="Quick View"
                >
                  <Eye size={15} />
                </button>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <span className="text-[11px] font-mono text-[#E27D60] uppercase">{p.designer}</span>
                <h3 className="text-lg font-medium text-white mt-1 group-hover:text-[#E27D60] transition-colors">{p.name}</h3>
                <p className="text-xs text-white/50 mt-1">{p.material}</p>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-base font-semibold text-white">${p.price.toLocaleString()}</span>
                  <button
                    onClick={() => addToCart(p)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 hover:bg-[#E27D60] px-4 py-2 text-xs font-semibold text-white transition-all active:scale-95"
                  >
                    <Plus size={13} />
                    <span>Add to Bag</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Craftsmanship Section ───────────────────────────── */}
      <section id="craftsmanship" className="py-24 border-t border-white/10 bg-[#14151C]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
            <Shield className="h-8 w-8 text-[#E27D60] mb-4" />
            <h3 className="text-base font-medium text-white mb-2">10-Year Structural Guarantee</h3>
            <p className="text-xs text-white/60 leading-relaxed">
              Every frame is precision joined with mortise-and-tenon solid wood joinery tested to withstand generational daily living.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
            <Truck className="h-8 w-8 text-[#E27D60] mb-4" />
            <h3 className="text-base font-medium text-white mb-2">White-Glove Placement</h3>
            <p className="text-xs text-white/60 leading-relaxed">
              Professional delivery to your chosen room, complete uncrating, precise assembly, and removal of all protective packaging.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
            <RotateCcw className="h-8 w-8 text-[#E27D60] mb-4" />
            <h3 className="text-base font-medium text-white mb-2">30-Day Living Room Trial</h3>
            <p className="text-xs text-white/60 leading-relaxed">
              Live with our pieces in your natural daylight. If they do not completely transform your spatial sanctuary, return them seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* ── Standalone Footer ───────────────────────────────── */}
      <footer className="border-t border-white/10 bg-[#0C0D10] py-14 px-6 text-white/50 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-bold tracking-widest text-white uppercase">ATELIER NORDIC</span>
            </div>
            <p className="max-w-sm text-white/40 leading-relaxed">
              Architectural Living & Furniture Atelier. Showrooms in Copenhagen, Milan, and SoHo NYC.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <div className="font-semibold text-white uppercase tracking-wider mb-3">Showrooms</div>
              <ul className="space-y-1.5 text-white/60">
                <li>Bredgade 28, Copenhagen</li>
                <li>Via Solferino, Milan</li>
                <li>Greene Street, SoHo NYC</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-white uppercase tracking-wider mb-3">Trade & Contract</div>
              <ul className="space-y-1.5 text-white/60">
                <li>Architect Trade Discount (20%)</li>
                <li>Bespoke Material Swatches</li>
                <li>3D CAD & Revit Files</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-white uppercase tracking-wider mb-3">Sustainability</div>
              <ul className="space-y-1.5 text-white/60">
                <li>FSC Certified Timber</li>
                <li>Low-VOC Finishes</li>
                <li>Zero-Plastic Packaging</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40">
          <div>© {new Date().getFullYear()} ATELIER NORDIC ApS. All rights reserved.</div>
          <div>Engineered as a GRAVIT Concept Prototype.</div>
        </div>
      </footer>

      {/* ── Live Functional Cart Slide-Over Drawer ───────────── */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm">
          <div className="w-full max-w-md bg-[#16171E] h-full flex flex-col border-l border-white/15 p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <ShoppingBag size={18} className="text-[#E27D60]" />
                <h3 className="text-base font-semibold text-white">Your Shopping Bag ({cartItemCount})</h3>
              </div>
              <button onClick={() => setCartOpen(false)} className="p-2 text-white/60 hover:text-white">
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-16 text-white/40 text-sm">Your bag is currently empty.</div>
              ) : (
                cart.map(({ product, qty }) => (
                  <div key={product.id} className="flex gap-4 p-3 rounded-xl border border-white/10 bg-white/[0.02]">
                    <img src={product.image} alt={product.name} className="h-16 w-16 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-semibold text-white truncate">{product.name}</h4>
                      <p className="text-[11px] text-white/50">{product.material}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-xs font-mono text-[#E27D60]">${(product.price * qty).toLocaleString()}</span>
                        <div className="flex items-center gap-2 border border-white/10 rounded-lg px-2 py-0.5">
                          <button onClick={() => updateQty(product.id, -1)} className="text-white/60 hover:text-white"><Minus size={11} /></button>
                          <span className="text-xs font-mono">{qty}</span>
                          <button onClick={() => updateQty(product.id, 1)} className="text-white/60 hover:text-white"><Plus size={11} /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex justify-between text-xs text-white/60">
                  <span>Subtotal</span>
                  <span className="font-mono text-white font-semibold">${cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs text-white/60">
                  <span>White Glove Delivery</span>
                  <span className="text-emerald-400 font-medium">Complimentary</span>
                </div>
                <button
                  onClick={() => {
                    alert(`Checkout initiated for $${cartTotal.toLocaleString()}! This is an interactive concept preview.`);
                  }}
                  className="w-full rounded-xl bg-[#E27D60] py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#eb886b]"
                >
                  Proceed to Secure Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-xl rounded-3xl border border-white/20 bg-[#16171E] p-6 shadow-2xl">
            <button onClick={() => setQuickViewProduct(null)} className="absolute top-4 right-4 p-2 text-white/60 hover:text-white">
              <X size={18} />
            </button>
            <div className="aspect-[16/10] w-full rounded-xl overflow-hidden mb-4">
              <img src={quickViewProduct.image} alt={quickViewProduct.name} className="w-full h-full object-cover" />
            </div>
            <span className="text-[11px] font-mono text-[#E27D60] uppercase">{quickViewProduct.designer}</span>
            <h3 className="text-xl font-medium text-white mt-1">{quickViewProduct.name}</h3>
            <p className="text-xs text-white/70 mt-2">{quickViewProduct.description}</p>
            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-lg font-semibold text-white">${quickViewProduct.price.toLocaleString()}</span>
              <button
                onClick={() => {
                  addToCart(quickViewProduct);
                  setQuickViewProduct(null);
                }}
                className="rounded-xl bg-[#E27D60] px-6 py-2.5 text-xs font-semibold uppercase text-white hover:bg-[#eb886b]"
              >
                Add to Bag
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating GRAVIT Return Pill */}
      <ConceptFloatingNav 
        conceptName="ATELIER NORDIC Furniture" 
        category="Furniture · E-commerce · Interior"
        dribbbleUrl="https://dribbble.com/shots/27317658-E-commerce-Brand-Website-Landing-Page"
      />
    </div>
  );
}
