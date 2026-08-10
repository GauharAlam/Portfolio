import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, Sparkles } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { educationData } from '../../data/portfolioData';

export const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#07070b]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" /> Academic Background
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight"
          >
            Education & <span className="text-gradient">Qualifications</span>
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <GlassCard className="h-full p-8 border-slate-800/80 hover:border-cyan-500/40 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-cyan-400">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> {edu.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-sm font-medium text-slate-300 mb-4">{edu.institution}</p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs sm:text-sm font-medium">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-emerald-400" /> {edu.score}
                  </span>
                  <span className="text-slate-500">{edu.status}</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
