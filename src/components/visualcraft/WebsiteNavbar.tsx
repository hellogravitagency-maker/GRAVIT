import React from 'react';
import { motion } from 'motion/react';
import { DesignSystemState } from './types';
import { getArchetypeClasses } from './designData';
import { ShoppingCart, User, Menu, Search } from 'lucide-react';

interface WebsiteNavbarProps {
  state: DesignSystemState;
}

export function WebsiteNavbar({ state }: WebsiteNavbarProps) {
  const styles = getArchetypeClasses(state.archetype, state.colorTheme);

  const getNavLinks = () => {
    switch (state.websiteType) {
      case 'ecommerce': return ['Shop', 'Collections', 'About', 'Contact'];
      case 'education': return ['Programs', 'Admissions', 'Campus Life', 'Alumni'];
      case 'portfolio': return ['Work', 'Services', 'Studio', 'Contact'];
      case 'startup':
      default:
        return ['Features', 'Pricing', 'Docs', 'Blog'];
    }
  };

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`w-full flex items-center justify-between p-6 ${styles.card} rounded-none border-t-0 border-l-0 border-r-0`}
      style={{ backgroundColor: state.archetype === 'swiss' || state.archetype === 'retro-terminal' ? 'transparent' : undefined }}
    >
      <div className={`text-xl font-bold uppercase tracking-widest ${state.typography.displayClass}`}>
        {state.websiteType}Logo
      </div>

      <div className={`hidden md:flex gap-8 ${state.typography.bodyClass}`}>
        {getNavLinks().map(link => (
          <a key={link} href="#" className="hover:opacity-70 transition-opacity">
            {link}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        {state.websiteType === 'ecommerce' && (
          <>
            <Search className="w-5 h-5 cursor-pointer hover:opacity-70" />
            <ShoppingCart className="w-5 h-5 cursor-pointer hover:opacity-70" />
            <User className="w-5 h-5 cursor-pointer hover:opacity-70 hidden md:block" />
          </>
        )}
        {(state.websiteType === 'startup' || state.websiteType === 'education') && (
          <button className={`${styles.button} px-4 py-2 text-sm`}>
            {state.websiteType === 'education' ? 'Apply Now' : 'Sign Up'}
          </button>
        )}
        <Menu className="w-6 h-6 md:hidden cursor-pointer" />
      </div>
    </motion.nav>
  );
}
