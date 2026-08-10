import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Sparkles } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { experienceData } from '../../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#07070b]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" /> Career Journey
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight"
          >
            Professional <span className="text-gradient">Experience</span>
          </motion.h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-12">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative pl-8 sm:pl-10 group"
            >
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0a0a0f] border-2 border-cyan-400 group-hover:scale-125 transition-transform" />

              {/* Date Badge on Desktop */}
              <div className="hidden sm:block absolute -left-36 top-1 text-xs font-mono font-medium text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/40 text-center w-28">
                {exp.period}
              </div>

              {/* Card Container */}
              <GlassCard className="p-6 border-slate-800/80 hover:border-cyan-500/40">
                <div className="sm:hidden text-xs font-mono font-medium text-cyan-400 mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> {exp.period}
                </div>

                <div className="flex items-center justify-between gap-4 mb-2 flex-wrap">
                  <h3 className="text-xl font-display font-bold text-white">{exp.role}</h3>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                    {exp.type}
                  </span>
                </div>

                <div className="text-sm font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" /> {exp.company}
                </div>

                <p className="text-sm text-slate-300 mb-4">{exp.description}</p>

                <div className="space-y-2 pt-3 border-t border-slate-800/80">
                  {exp.achievements.map((item, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
