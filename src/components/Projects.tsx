/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
            My <span className="text-cyan-glow">Work</span>
          </h2>
          <p className="text-lg text-gray-400 font-medium">
            Real Projects & Live Website Showcase
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-purple-500 mx-auto mt-6 rounded-full blur-[1px] shadow-[0_0_10px_rgba(0,102,255,0.5)]" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-[#111111] rounded-[18px] border border-white/5 overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(0,102,255,0.15)] hover:border-accent-blue/30 transition-all duration-500"
            >
              {/* Category Badge */}
              <div className="absolute top-6 left-6 z-20">
                <span className="px-4 py-1.5 glass rounded-full text-xs font-bold text-accent-yellow border border-accent-yellow/30 tracking-wider uppercase">
                  {(project as any).category}
                </span>
              </div>

              {/* Website Preview */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img 
                  src={(project as any).image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                {/* Overlay Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/20 to-transparent transition-opacity duration-500 group-hover:opacity-40" />
              </div>

              {/* Card Content */}
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-accent-blue transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8 line-clamp-3">
                  {project.description}
                </p>
                
                <motion.a
                  href={(project as any).link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent-yellow text-black font-extrabold rounded-full shadow-[0_4px_15px_rgba(255,214,0,0.3)] hover:shadow-[0_0_25px_rgba(255,214,0,0.6)] transition-all duration-300"
                >
                  View Live Website <ExternalLink size={18} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/4 right-[10%] w-96 h-96 bg-accent-blue/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-[10%] w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />
      </div>
    </section>
  );
}
