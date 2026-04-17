/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../constants';
import { User, Briefcase, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-3xl"
          >
            <p className="text-xl text-gray-300 leading-relaxed italic mb-8">
              "{PERSONAL_INFO.about}"
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-accent-blue/10 rounded-xl text-accent-blue">
                  <GraduationCap />
                </div>
                <div>
                  <h4 className="font-bold text-lg">M.Com Graduate</h4>
                  <p className="text-gray-400">Advanced background in commerce and analytics.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-purple-500/10 rounded-xl text-purple-500">
                  <Briefcase />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Digital Marketing Expert</h4>
                  <p className="text-gray-400">Specializing in ROI-driven marketing strategies.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-display font-bold">Driving results through <span className="text-accent-yellow">digital excellence</span>.</h3>
            <p className="text-gray-400 leading-loose">
              My journey in digital marketing is fueled by a passion for connecting brands with their ideal audiences. With a strong foundation in commerce and marketing, I combine analytical thinking with creative execution to build campaigns that not only look good but perform exceptionally.
            </p>
            <p className="text-gray-400 leading-loose">
              Whether it's managing high-spend Meta Ads or crafting content that resonates on social media, my goal is always the same: **sustainable growth and measurable impact**.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
