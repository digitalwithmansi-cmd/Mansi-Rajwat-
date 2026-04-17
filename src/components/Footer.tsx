/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PERSONAL_INFO, NAV_LINKS } from '../constants';
import { Instagram, Youtube, Send, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 bg-black border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 mb-16 max-w-4xl">
          {/* Logo & Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-bold gradient-text">MANSI.</h2>
            <p className="text-gray-400 font-medium leading-relaxed max-w-xs">
              Scaling brands with precision marketing and creative excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 glass rounded-xl text-gray-400 hover:text-white hover:bg-accent-blue/20 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 glass rounded-xl text-gray-400 hover:text-white hover:bg-red-500/20 transition-all">
                <Youtube size={20} />
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="p-3 glass rounded-xl text-gray-400 hover:text-white hover:bg-purple-500/20 transition-all">
                <Send size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="font-bold uppercase tracking-widest text-xs text-accent-yellow">Navigation</h4>
              <ul className="space-y-4">
                {NAV_LINKS.slice(0, 3).map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6 mt-10 md:mt-0">
               <h4 className="font-bold uppercase tracking-widest text-xs text-accent-yellow invisible md:visible">More</h4>
              <ul className="space-y-4">
                {NAV_LINKS.slice(3).map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
          >
            Back to Top <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-accent-blue/5 blur-[100px] -z-10" />
    </footer>
  );
}
