import React from 'react';
import { motion } from 'motion/react';
import { Link, useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { useCartStore } from '../store/cartStore';
import { products } from './Products';
import { PageHero, SectionLayout } from '../components/ui/LayoutElements';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find(p => p.id === slug);
  const addItem = useCartStore((state) => state.addItem);

  if (!product) {
    return (
      <div className="w-full bg-transparent text-primary min-h-screen font-sans">
        <PageHero 
          title="NOT FOUND." 
          subtitle="404 / Error" 
          className="border-b border-border"
        />
        <SectionLayout>
          <Link to="/products" className="inline-flex items-center justify-center bg-primary text-background px-10 py-5 text-sm font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform">
            Return to Store &rarr;
          </Link>
        </SectionLayout>
      </div>
    );
  }

  return (
    <div className="w-full bg-transparent text-primary min-h-screen font-sans">
      <SEO 
        title={`${product.name} | GRAVIT®`} 
        description={product.description} 
        path={`/products/${slug}`}
      />
      
      <PageHero 
        title={product.name}
        subtitle={`01 / ${product.category}`}
        className="border-b border-border"
      />

      <SectionLayout>
        <div className="mb-12">
          <Link to="/products" className="text-secondary hover:text-primary transition-colors font-mono text-xs uppercase tracking-widest">
            &larr; Back to Store
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left: Sticky Gallery */}
          <div className="lg:col-span-7">
            <div className="sticky top-32">
              <div className="aspect-[4/3] bg-surface rounded-3xl border border-border relative overflow-hidden flex items-center justify-center">
                {/* Abstract product visual large */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="w-48 h-48 border border-primary/20 rotate-45 flex items-center justify-center"
                >
                  <div className="w-24 h-24 bg-primary/5 border border-primary/30 animate-[pulse_4s_ease-in-out_infinite]"></div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="lg:col-span-5 pt-8 flex flex-col gap-12">
            <div>
              <div className="text-5xl font-mono font-bold tracking-tighter mb-8 pb-8 border-b border-border">
                ${product.price.toFixed(2)}
              </div>
              
              <p className="text-secondary text-xl font-light leading-relaxed mb-12">
                {product.description}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-secondary mb-6 border-b border-border pb-4">
                What's included
              </h3>
              <ul className="flex flex-col gap-4">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-primary font-light">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-4"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 border-t border-border">
              <button 
                onClick={() => addItem(product)}
                className="w-full inline-flex items-center justify-center bg-primary text-background px-10 py-6 text-sm font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform"
              >
                Add to Cart
              </button>
              
              <div className="mt-6 flex items-center justify-center gap-2 text-secondary text-xs uppercase tracking-widest font-mono">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Secure Checkout via Stripe
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
}
