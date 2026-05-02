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
        {/* Left Content - Single Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group order-2 md:order-1"
        >
          <div className="relative z-10 rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-2xl transition-all duration-500 group-hover:border-cyan-glow/50 group-hover:shadow-[0_0_50px_rgba(0,229,255,0.2)] bg-[#111]">
            <img 
              src="https://img.sanishtech.com/u/e9deb26a46dac6ff92c5c3615afbd335.png" 
              alt={PERSONAL_INFO.name} 
              className="w-full aspect-[4/5] object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
              loading="lazy"
              onError={(e) => {
                // Fallback to a high-quality stock photo if the provided URL fails
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800";
              }}
            />
            {/* Inner Glow Overlay */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem]" />
          </div>
          
          {/* Decorative Elements - Refined */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-glow/10 rounded-full blur-[80px] -z-10 animate-pulse" />
          <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-accent-blue/10 rounded-full blur-[100px] -z-10" />
          
          {/* Animated Ring */}
          <div className="absolute inset-0 -m-4 border border-cyan-glow/20 rounded-[2.5rem] -z-10 group-hover:scale-110 transition-transform duration-700" />
        </motion.div>

        {/* Right Content - Text Content */}
        <div className="order-1 md:order-2">
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
      </div>
    </section>
  );
}
