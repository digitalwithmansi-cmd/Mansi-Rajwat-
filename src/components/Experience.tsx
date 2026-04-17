/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { EXPERIENCE } from '../constants';

function ExperienceCard({ exp, index }: { exp: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax movement: moves up slightly faster/slower than scroll
  const yRange = index % 2 === 0 ? [50, -50] : [100, -100];
  const y = useTransform(scrollYProgress, [0, 1], yRange);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  return (
    <motion.div 
      ref={ref}
      style={{ y, opacity, scale }}
      className={`relative flex flex-col md:flex-row gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Dot on line */}
      <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-background border-4 border-accent-blue rounded-full transform -translate-x-[11px] md:-translate-x-1/2 shadow-[0_0_15px_rgba(0,102,255,0.5)] z-10" />

      {/* Content Card */}
      <div className={`w-full md:w-1/2 pl-10 md:px-10 ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
        <div className="glass-card p-8 rounded-3xl hover:border-accent-blue/50 group transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_rgba(0,102,255,0.1)]">
          <span className="text-accent-yellow font-bold text-sm bg-accent-yellow/10 px-3 py-1 rounded-full mb-4 inline-block">
            {exp.duration}
          </span>
          <h3 className="text-2xl font-display font-bold mb-1 group-hover:text-accent-blue transition-colors">
            {exp.role}
          </h3>
          <p className="text-lg text-gray-300 font-medium mb-4">{exp.company}</p>
          <p className="text-gray-400 leading-relaxed italic">
            {exp.description}
          </p>
        </div>
      </div>
      {/* Spacer for empty side */}
      <div className="hidden md:block md:w-1/2" />
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Professional <span className="text-cyan-glow">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-glow mx-auto rounded-full blur-[1px] shadow-[0_0_10px_#00E5FF]" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-blue via-purple-500 to-transparent transform md:-translate-x-1/2" />

          <div className="space-y-4 md:space-y-0">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="md:py-12">
                <ExperienceCard exp={exp} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-accent-blue/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[120px]" />
      </div>
    </section>
  );
}
