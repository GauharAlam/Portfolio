import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { aboutData, statsData } from '../../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" /> About Me
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight"
          >
            Engineering <span className="text-gradient">Modern & Intelligent</span> Systems
          </motion.h2>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col"
          >
            <GlassCard className="h-full flex flex-col justify-between" hoverEffect={false}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-cyan-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-white">
                      Guru Tegh Bahadur Institute of Technology
                    </h3>
                    <p className="text-sm text-cyan-400">B.Tech CSE (2022–2026) • GPA 7.63</p>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed text-base mb-6">
                  {aboutData.bio}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                  {aboutData.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Quick Info & Focus Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <GlassCard hoverEffect={false} className="flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
                  <Code className="w-5 h-5" />
                </div>
                <h4 className="font-display font-semibold text-lg text-white">Core Expertise</h4>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Specialized in multi-tenant SaaS architecture, LLM agent integration (OpenAI/Anthropic), fast asynchronous queues, and mobile-responsive React interfaces.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-medium">MERN Stack</span>
                <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-medium">Next.js 15</span>
                <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-medium">PostgreSQL & MongoDB</span>
                <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-medium">LLM & RAG Pipelines</span>
              </div>
            </GlassCard>

            <GlassCard hoverEffect={false} className="bg-gradient-to-r from-blue-950/40 via-purple-950/40 to-slate-900/40">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-1">Status</div>
                  <div className="text-sm font-semibold text-emerald-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Open for Full-Time & Freelance
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-1">Location</div>
                  <div className="text-sm font-medium text-slate-200">Delhi, India</div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Animated Stat Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
            >
              <GlassCard className="text-center py-8">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <div className="text-sm font-medium text-slate-400 mt-2">{stat.label}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
