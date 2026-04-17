/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../constants';
import { MousePointer2, Send } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-blue/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-accent-yellow font-bold tracking-widest uppercase text-sm mb-4">
              Welcome to my portfolio
            </h2>
            <h1 className="text-5xl lg:text-7xl font-display font-extrabold leading-tight mb-6">
              Hi, I'm <span className="gradient-text">{PERSONAL_INFO.name}</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 font-medium mb-4 leading-relaxed">
              {PERSONAL_INFO.role}
            </p>
            <p className="text-lg text-gray-400 mb-10 max-w-lg leading-loose">
              {PERSONAL_INFO.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent-blue text-white font-bold rounded-full flex items-center gap-2 hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all"
              >
                View My Work <MousePointer2 size={18} />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-bold rounded-full flex items-center gap-2 transition-all"
              >
                Contact Me <Send size={18} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Single Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
              alt="Mansi Rajawat" 
              className="w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent-yellow/20 rounded-full blur-2xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent-blue/10 rounded-full blur-3xl -z-10" />
          
          <div className="absolute top-1/2 -right-4 w-24 h-24 border border-accent-blue/30 rounded-full animate-pulse -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
