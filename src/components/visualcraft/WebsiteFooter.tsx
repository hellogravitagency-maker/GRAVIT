import React from 'react';
import { DesignSystemState } from './types';
import { getArchetypeClasses } from './designData';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

interface WebsiteFooterProps {
  state: DesignSystemState;
}

export function WebsiteFooter({ state }: WebsiteFooterProps) {
  const styles = getArchetypeClasses(state.archetype, state.colorTheme);

  return (
    <footer className={`w-full mt-24 border-t ${styles.card} rounded-none border-b-0 border-l-0 border-r-0 p-12 md:p-24`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <div className={`text-2xl font-bold uppercase tracking-widest mb-6 ${state.typography.displayClass}`}>
            {state.websiteType}Logo
          </div>
          <p className={`opacity-70 mb-8 max-w-xs ${state.typography.bodyClass}`}>
            Designing and engineering digital systems that adapt to your every need.
          </p>
          <div className="flex gap-4 opacity-70">
            <Twitter className="w-5 h-5 cursor-pointer hover:opacity-100" />
            <Github className="w-5 h-5 cursor-pointer hover:opacity-100" />
            <Linkedin className="w-5 h-5 cursor-pointer hover:opacity-100" />
            <Instagram className="w-5 h-5 cursor-pointer hover:opacity-100" />
          </div>
        </div>

        <div>
          <h4 className={`font-bold mb-6 ${state.typography.displayClass}`}>Product</h4>
          <ul className={`space-y-3 opacity-70 ${state.typography.bodyClass}`}>
            <li><a href="#" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">Integrations</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">Changelog</a></li>
          </ul>
        </div>

        <div>
          <h4 className={`font-bold mb-6 ${state.typography.displayClass}`}>Company</h4>
          <ul className={`space-y-3 opacity-70 ${state.typography.bodyClass}`}>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className={`font-bold mb-6 ${state.typography.displayClass}`}>Legal</h4>
          <ul className={`space-y-3 opacity-70 ${state.typography.bodyClass}`}>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className={`mt-24 pt-8 border-t border-current/20 text-center opacity-50 ${state.typography.bodyClass} text-sm`}>
        © 2026 VisualCraft Systems. All rights reserved.
      </div>
    </footer>
  );
}
