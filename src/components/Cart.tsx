import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';

export default function Cart() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, getTotal } = useCartStore();
  const navigate = useNavigate();

  const handleCheckout = () => {
    closeCart();
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/80 z-[100] backdrop-blur-sm"
          />
          
          {/* Drawer */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-surface border-l border-border-subtle z-[110] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border-subtle">
              <h2 className="text-xl font-bold text-primary font-sans">Your Cart</h2>
              <button 
                onClick={closeCart}
                className="text-secondary hover:text-primary transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-16 h-16 rounded-full bg-surface-hover flex items-center justify-center text-muted mb-4 border border-border-subtle">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                  </div>
                  <p className="text-secondary mb-6 font-mono text-sm uppercase tracking-widest">Your cart is empty.</p>
                  <button 
                    onClick={closeCart}
                    className="text-primary border border-border-subtle px-6 py-2 rounded-none font-sans text-sm hover:border-accent hover:text-accent transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      {/* Abstract thumbnail */}
                      <div className="w-20 h-20 bg-background border border-border-subtle flex-shrink-0 flex items-center justify-center">
                        <div className="w-8 h-8 border border-accent/30 rotate-45"></div>
                      </div>
                      
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="text-primary font-sans font-medium text-sm leading-tight pr-4">{item.name}</h3>
                            <button onClick={() => removeItem(item.id)} className="text-muted hover:text-red-500 transition-colors">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                          </div>
                          <div className="text-primary text-sm font-sans mt-1">${item.price.toFixed(2)}</div>
                        </div>
                        
                        <div className="flex items-center gap-4 mt-3">
                          <div className="flex items-center border border-border-subtle bg-surface">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center text-secondary hover:text-primary transition-colors"
                            >-</button>
                            <span className="w-8 text-center text-primary text-sm font-mono">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center text-secondary hover:text-primary transition-colors"
                            >+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border-subtle p-6 bg-background">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-secondary font-sans">Subtotal</span>
                  <span className="text-primary font-bold font-sans text-xl">${getTotal().toFixed(2)}</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-primary text-background font-sans font-bold py-4 hover:bg-accent transition-colors rounded-none"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
