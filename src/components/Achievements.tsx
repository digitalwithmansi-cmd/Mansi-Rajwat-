/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ACHIEVEMENTS } from '../constants';
import { Trophy, Star } from 'lucide-react';

export default function Achievements() {
  return (
    <section className="py-24 relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent-blue/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="p-4 bg-accent-yellow/10 rounded-full w-fit mx-auto mb-6 text-accent-yellow">
            <Trophy size={32} />
          </div>
          <h2 className="text-4xl font-display font-bold mb-4">Key Achievements</h2>
          <div className="w-20 h-1 bg-accent-yellow mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {ACHIEVEMENTS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-card p-10 rounded-[2.5rem] relative group"
            >
              <div className="absolute top-6 right-6 text-accent-yellow opacity-20 group-hover:opacity-100 transition-opacity">
                <Star size={24} fill="currentColor" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-accent-yellow transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed italic">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
