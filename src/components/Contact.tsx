/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../constants';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto" />
          <p className="mt-8 text-gray-400 max-w-2xl mx-auto font-medium">
            Ready to scale your brand? Let's discuss your next digital marketing campaign.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-8 glass-card rounded-3xl group">
                <div className="p-4 glass rounded-2xl text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-all mb-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-1">Our Location</h4>
                  <p className="text-xl font-bold">{PERSONAL_INFO.location}</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center text-center p-8 glass-card rounded-3xl group">
                <div className="p-4 glass rounded-2xl text-accent-yellow group-hover:bg-accent-yellow group-hover:text-black transition-all mb-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-1">Call Me</h4>
                  <p className="text-xl font-bold">{PERSONAL_INFO.phone}</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center p-8 glass-card rounded-3xl group">
                <div className="p-4 glass rounded-2xl text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all mb-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-1">Email Me</h4>
                  <p className="text-xl font-bold break-all">{PERSONAL_INFO.email}</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-10 rounded-[2.5rem] text-center max-w-2xl mx-auto">
              <h4 className="text-2xl font-display font-bold mb-6">Available for Collaboration</h4>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-2 h-2 bg-accent-blue rounded-full" /> 
                  <span className="font-medium">Full-time Roles</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-2 h-2 bg-accent-blue rounded-full" /> 
                  <span className="font-medium">Freelance Projects</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-2 h-2 bg-accent-blue rounded-full" /> 
                  <span className="font-medium">Digital Consulting</span>
                </div>
              </div>
              <motion.a
                href={`mailto:${PERSONAL_INFO.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-accent-blue to-purple-600 text-white font-bold rounded-2xl hover:shadow-[0_0_30px_rgba(0,102,255,0.4)] transition-all group"
              >
                Let's Talk <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
