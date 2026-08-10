import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, CheckCircle2, Zap } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { projectsData } from '../../data/portfolioData';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" /> Featured Work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight"
          >
            Production Projects & <span className="text-gradient">Platforms</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-xl mt-3 text-sm sm:text-base"
          >
            Multi-tenant SaaS products, AI-driven developer platforms, and full-stack client web applications.
          </motion.p>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <GlassCard className="p-8 sm:p-10 border border-slate-800/80 hover:border-cyan-500/40 group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Text Column */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      {/* Badge & Metrics */}
                      <div className="flex items-center gap-3 mb-4 flex-wrap">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/20 text-cyan-400 border border-blue-500/30">
                          {project.badge}
                        </span>
                        <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                          <Zap className="w-3.5 h-3.5 text-amber-400" /> {project.metrics}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-slate-400 mb-4">{project.subtitle}</p>

                      <p className="text-slate-300 text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Key Highlights Bullet points */}
                      <div className="space-y-2.5 mb-6">
                        {project.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Tags */}
                    <div className="pt-6 border-t border-slate-800/80">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 px-4 py-2.5 rounded-xl transition-all"
                        >
                          <Github className="w-4 h-4" /> Source Code
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 px-4 py-2.5 rounded-xl shadow-lg shadow-blue-500/20 transition-all"
                        >
                          <ExternalLink className="w-4 h-4" /> Live Demo
                        </a>
                      </div>
                    </div>

                  </div>

                  {/* Right Graphic Mockup Column */}
                  <div className="lg:col-span-5 relative">
                    <div className="w-full h-72 sm:h-80 rounded-2xl bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 p-6 border border-slate-700/50 flex flex-col justify-between overflow-hidden shadow-2xl relative group-hover:scale-[1.02] transition-transform duration-500">
                      
                      {/* Decorative Mockup Browser Bar */}
                      <div className="flex items-center justify-between border-b border-slate-700/60 pb-3 mb-4">
                        <div className="flex gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                          <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                        </div>
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                          {project.id}.app
                        </span>
                      </div>

                      {/* Mockup Central Visual */}
                      <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${project.accentColor} p-0.5 mb-3 shadow-xl`}>
                          <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-white font-display font-bold text-2xl">
                            {project.title.charAt(0)}
                          </div>
                        </div>
                        <h4 className="font-display font-semibold text-white text-lg">{project.title}</h4>
                        <p className="text-xs text-slate-400 mt-1">{project.metrics}</p>
                      </div>

                      {/* Bottom glowing line */}
                      <div className={`h-1 w-full bg-gradient-to-r ${project.accentColor} rounded-full mt-4`} />
                    </div>
                  </div>

                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
