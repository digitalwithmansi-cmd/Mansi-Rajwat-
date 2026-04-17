/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
            My <span className="text-cyan-glow">Work</span>
          </h2>
          <p className="text-lg text-gray-400 font-medium">
            Real Projects & Live Website Showcase
          </p>
          <div className="w-24 h-1 bg-cyan-glow mx-auto mt-6 rounded-full blur-[1px] shadow-[0_0_10px_#00E5FF]" />
        </motion.div>

        {/* Projects Grid - More compact */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-[#151515] rounded-[24px] border border-white/5 overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgba(0,229,255,0.1)] hover:border-cyan-glow/30 transition-all duration-500"
            >
              {/* Category Badge - Sleeker */}
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 bg-white/5 backdrop-blur-md rounded-lg text-[10px] font-bold text-cyan-glow border border-cyan-glow/20 tracking-widest uppercase">
                  {(project as any).category}
                </span>
              </div>

              {/* Website Preview - Compact Height */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={(project as any).image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent opacity-60" />
              </div>

              {/* Card Content - Compact padding */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-display font-bold mb-3 text-white group-hover:text-cyan-glow transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>
                
                <motion.a
                  href={(project as any).link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#1A1A1A] hover:bg-cyan-glow text-gray-300 hover:text-black font-bold rounded-xl border border-white/10 hover:border-transparent transition-all duration-300"
                >
                  View Live Website <ExternalLink size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/4 right-[5%] w-72 h-72 bg-cyan-glow/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-[5%] w-72 h-72 bg-accent-blue/5 rounded-full blur-[100px]" />
      </div>
    </section>
  );
}
