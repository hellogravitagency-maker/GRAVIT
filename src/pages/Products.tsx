import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useCartStore } from '../store/cartStore';
import { PageHero, SectionLayout, PremiumCard } from '../components/ui/LayoutElements';

// Mock product data
export const products = [
  {
    id: 'premium-web-template',
    name: 'GRAVIT Next.js Boilerplate',
    category: 'Code Templates',
    description: 'Our internal production-ready Next.js boilerplate complete with Tailwind CSS, Supabase auth, and Stripe integration.',
    price: 149.00,
    features: ['Next.js 14 App Router', 'Zustand State', 'Supabase Auth', 'Framer Motion'],
  },
  {
    id: 'design-system-ui-kit',
    name: 'GRAVIT UI Kit (Figma)',
    category: 'Design Assets',
    description: 'The exact Figma design system we use for our premium clients. Includes 500+ components and variables.',
    price: 89.00,
    features: ['Auto Layout 5.0', 'Dark/Light Modes', 'Responsive Components', 'Typography Scales'],
  },
  {
    id: 'engineering-consultation',
    name: 'Architecture Review',
    category: 'Services',
    description: 'A 90-minute technical deep dive with our Head of Engineering to audit your current stack and provide a scaling roadmap.',
    price: 499.00,
    features: ['Codebase Audit', 'Performance Review', 'Scaling Roadmap', 'Recording Included'],
  }
];

export default function Products() {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="w-full bg-transparent text-primary min-h-screen font-sans">
      <SEO 
        title="Store | GRAVIT®" 
        description="Premium digital products, templates, and consulting packages for modern engineering teams." 
        path="/products"
      />
      
      <PageHero 
        title={<>DIGITAL<br />ASSETS.</>}
        subtitle="01 / Store"
        className="border-b border-border"
      />

      <SectionLayout>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <PremiumCard
              key={product.id}
              title={product.name}
              description={product.description}
              number={`0${i + 1}`}
            >
              <div className="flex flex-col gap-6 pt-6 border-t border-border">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-secondary mb-3 block">Includes</span>
                  <ul className="flex flex-col gap-2">
                    {product.features.map(f => (
                      <li key={f} className="text-sm font-light text-secondary flex items-center gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full"></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <span className="text-2xl font-bold font-mono tracking-tighter">
                    ${product.price.toFixed(2)}
                  </span>
                  
                  <button 
                    onClick={() => addItem(product)}
                    className="inline-flex items-center justify-center bg-primary text-background px-6 py-3 text-xs font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </PremiumCard>
          ))}
        </div>
      </SectionLayout>

    </div>
  );
}
