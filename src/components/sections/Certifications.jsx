import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Trophy, Sparkles } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { accomplishmentsData } from '../../data/portfolioData';

const iconComponents = {
  Award: Award,
  CheckCircle2: CheckCircle2,
  Trophy: Trophy,
};

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" /> Recognition
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight"
          >
            Accomplishments & <span className="text-gradient">Certifications</span>
          </motion.h2>
        </div>

        {/* Accomplishments Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accomplishmentsData.map((item, idx) => {
            const Icon = iconComponents[item.icon] || Award;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                <GlassCard className="h-full flex flex-col justify-between p-8 border-slate-800/80 hover:border-amber-500/40">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/40 px-2.5 py-1 rounded-full border border-amber-800/40 inline-block mb-3">
                      {item.type}
                    </span>

                    <h3 className="text-xl font-display font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm font-medium text-cyan-400 mb-4">{item.issuer}</p>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
