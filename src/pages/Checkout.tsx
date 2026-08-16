import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { useCartStore } from '../store/cartStore';

export default function Checkout() {
  const { items, getTotal, clearCart } = useCartStore();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  // If cart is empty, redirect back to products
  React.useEffect(() => {
    if (items.length === 0 && !isProcessing) {
      navigate('/products');
    }
  }, [items, navigate, isProcessing]);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      // Keep showing processing state for a moment before redirect
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }, 1500);
  };

  if (isProcessing) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden z-[200]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-surface border-t-primary rounded-full animate-spin mx-auto mb-8"></div>
          <h2 className="text-3xl font-bold text-primary mb-2 tracking-tight uppercase">Processing</h2>
          <p className="text-secondary font-mono text-xs uppercase tracking-widest">Please do not close this window</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full bg-background text-primary min-h-screen relative z-[200] font-sans">
      <SEO 
        title="Checkout | GRAVIT®" 
        description="Secure checkout." 
        path="/checkout"
      />
      
      {/* Minimal Header */}
      <header className="border-b border-border bg-background">
        <div className="max-w-[1800px] mx-auto px-6 py-8 flex items-center justify-between">
          <Link to="/products" className="text-primary font-bold tracking-tight text-xl uppercase">
            GRAVIT® <span className="text-secondary font-light text-sm ml-2 tracking-normal lowercase">checkout</span>
          </Link>
          <Link to="/products" className="text-secondary hover:text-primary transition-colors text-xs font-mono uppercase tracking-widest">
            Cancel &rarr;
          </Link>
        </div>
      </header>

      <div className="max-w-[1800px] mx-auto px-6 md:px-8 lg:px-12 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 flex-col-reverse lg:flex-row">
          
          {/* Left: Payment Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handlePay} className="space-y-16">
              
              {/* Contact Info */}
              <section>
                <h2 className="text-3xl font-bold text-primary mb-8 tracking-tighter uppercase">Contact Information</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-primary font-mono text-xs uppercase tracking-widest block mb-4">Email Address</label>
                    <input required type="email" className="w-full bg-surface border border-border focus:border-primary text-primary px-6 py-4 outline-none transition-colors" />
                  </div>
                </div>
              </section>

              {/* Payment Method */}
              <section>
                <h2 className="text-3xl font-bold text-primary mb-8 tracking-tighter uppercase">Payment Details</h2>
                <div className="bg-surface border border-border p-8 space-y-8 relative overflow-hidden rounded-3xl">
                  {/* Stripe placeholder UI */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-primary font-mono text-xs uppercase tracking-widest block mb-4">Card Information</label>
                      <div className="flex bg-background border border-border focus-within:border-primary transition-colors">
                        <input required type="text" placeholder="Card number" className="flex-1 bg-transparent text-primary px-6 py-4 outline-none placeholder:text-secondary/50" />
                        <div className="flex border-l border-border">
                          <input required type="text" placeholder="MM/YY" className="w-24 bg-transparent text-primary px-6 py-4 outline-none border-r border-border text-center placeholder:text-secondary/50" />
                          <input required type="text" placeholder="CVC" className="w-20 bg-transparent text-primary px-6 py-4 outline-none text-center placeholder:text-secondary/50" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-primary font-mono text-xs uppercase tracking-widest block mb-4">Name on card</label>
                      <input required type="text" className="w-full bg-background border border-border focus:border-primary text-primary px-6 py-4 outline-none transition-colors" />
                    </div>
                  </div>
                </div>
              </section>

              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-background font-bold py-6 transition-colors text-sm uppercase tracking-widest flex items-center justify-center gap-3"
              >
                Pay ${getTotal().toFixed(2)}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </button>

            </form>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-5 lg:order-last order-first mb-12 lg:mb-0">
            <div className="bg-surface border border-border p-8 rounded-3xl sticky top-12">
              <h2 className="text-2xl font-bold text-primary mb-8 tracking-tighter uppercase">Order Summary</h2>
              
              <div className="space-y-6 mb-8">
                {items.map(item => (
                  <div key={item.id} className="flex justify-between gap-4">
                    <div className="flex gap-6 items-center">
                      <div className="w-16 h-16 bg-background border border-border rounded-xl flex items-center justify-center relative">
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-background text-xs font-bold rounded-full flex items-center justify-center font-mono">
                          {item.quantity}
                        </div>
                        <div className="w-6 h-6 border border-primary/30 rotate-45"></div>
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="text-primary font-bold text-base">{item.name}</span>
                        <span className="text-secondary font-mono text-xs uppercase tracking-widest mt-1">{item.category}</span>
                      </div>
                    </div>
                    <div className="text-primary font-bold text-lg pt-2">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-6 space-y-4">
                <div className="flex justify-between text-secondary text-sm font-light">
                  <span>Subtotal</span>
                  <span>${getTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-secondary text-sm font-light">
                  <span>Tax</span>
                  <span>Calculated at next step</span>
                </div>
              </div>

              <div className="border-t border-border mt-6 pt-8 flex justify-between items-center">
                <span className="text-primary font-bold uppercase tracking-widest">Total</span>
                <div className="text-right flex items-baseline gap-2">
                  <span className="text-secondary font-mono text-xs uppercase tracking-widest">USD</span>
                  <span className="text-primary font-bold text-3xl tracking-tighter">${getTotal().toFixed(2)}</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
