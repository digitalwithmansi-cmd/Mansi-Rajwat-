/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Share2, 
  Target, 
  Magnet, 
  PenTool, 
  Box, 
  Table, 
  Wallet, 
  Compass 
} from 'lucide-react';

const CORE_SKILLS = [
  { title: "Social Media Management", icon: Share2 },
  { title: "Meta Ads (Facebook/Insta)", icon: Target },
  { title: "Lead Generation", icon: Magnet },
  { title: "Content Creation", icon: PenTool },
  { title: "Amazon Seller Central", icon: Box },
  { title: "Excel & Tally", icon: Table },
  { title: "Accounting & Finance", icon: Wallet },
  { title: "Strategic Marketing", icon: Compass },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Core <span className="text-cyan-glow">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-glow mx-auto rounded-full blur-[1px] shadow-[0_0_10px_#00E5FF]" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CORE_SKILLS.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-cyan-glow/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative h-full p-8 bg-[#111111] border border-white/5 rounded-2xl group-hover:border-cyan-glow/30 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_25px_rgba(0,229,255,0.15)]">
                  {/* Icon */}
                  <div className="mb-6 p-4 w-fit rounded-2xl bg-cyan-glow/10 text-cyan-glow shadow-[0_0_15px_rgba(0,229,255,0.1)] group-hover:shadow-[0_0_25px_rgba(0,229,255,0.3)] transition-all duration-300">
                    <div className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-glow to-purple-500">
                      <Icon 
                        size={32} 
                        strokeWidth={1.5}
                        fill="url(#skill-gradient)"
                        className="transition-all duration-500 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                      />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-glow transition-colors duration-300">
                    {skill.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* SVG Definitions for Gradients */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="skill-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
        </defs>
      </svg>

      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-glow/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-[120px]" />
      </div>
    </section>
  );
}
