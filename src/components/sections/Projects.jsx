import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, CheckCircle2, Zap, LayoutGrid } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { projectsData } from '../../data/portfolioData';
import { WappifyArchitectureDiagram } from '../ui/WappifyArchitectureDiagram';
import { ScrambleText } from '../ui/ScrambleText';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-3"
          >
            <LayoutGrid className="w-3.5 h-3.5" /> Interactive Bento Showcase
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight"
          >
            Featured <ScrambleText text="Engineering Projects" className="text-gradient" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            className="text-slate-400 max-w-xl mt-3 text-sm sm:text-base"
          >
            Click on any screenshot or live button to launch the full interactive production applications.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Wappify (Full Width 12-col Bento Card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-12"
          >
            <GlassCard className="p-8 sm:p-10 border border-emerald-500/30 hover:border-emerald-400/60 group" spotlight={true}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Content */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {projectsData[0].badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-amber-400" /> {projectsData[0].metrics}
                    </span>
                  </div>

                  <h3 className="text-3xl font-display font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {projectsData[0].title}
                  </h3>
                  <p className="text-sm font-medium text-slate-400 mb-4">{projectsData[0].subtitle}</p>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">{projectsData[0].description}</p>

                  {/* Architecture Flow Diagram */}
                  <WappifyArchitectureDiagram />

                  <div className="flex flex-wrap gap-2 my-4">
                    {projectsData[0].tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-2">
                    <a
                      href={projectsData[0].live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-semibold text-white bg-gradient-to-r from-emerald-600 to-cyan-600 hover:brightness-110 px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-500/20 transition-all hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                    <a
                      href={projectsData[0].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 px-5 py-2.5 rounded-xl transition-all hover:scale-105"
                    >
                      <Github className="w-4 h-4" /> GitHub Repo
                    </a>
                  </div>
                </div>

                {/* Right Interactive Live Screenshot Mockup */}
                <div className="lg:col-span-5 relative">
                  <a
                    href={projectsData[0].live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-2xl bg-slate-900 border border-slate-700/60 overflow-hidden shadow-2xl relative group/image hover:border-emerald-400/80 transition-all duration-300"
                  >
                    {/* Browser Bar */}
                    <div className="flex items-center justify-between bg-slate-950 px-4 py-2.5 border-b border-slate-800">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1 truncate max-w-[200px]">
                        {projectsData[0].live} <ExternalLink className="w-3 h-3 text-emerald-400" />
                      </span>
                    </div>

                    {/* Image Container with Hover Zoom Overlay */}
                    <div className="relative overflow-hidden aspect-[16/10] bg-slate-950">
                      <img
                        src={projectsData[0].image}
                        alt={projectsData[0].title}
                        className="w-full h-full object-cover object-top group-hover/image:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                        <span className="px-4 py-2 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-xl">
                          Launch Live Demo <ExternalLink className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>

              </div>
            </GlassCard>
          </motion.div>

          {/* Remaining Bento Grid Items */}
          {projectsData.slice(1).map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.15 }}
              className="lg:col-span-6 flex flex-col"
            >
              <GlassCard className="p-6 sm:p-8 h-full flex flex-col justify-between border border-slate-800/80 hover:border-cyan-500/40 group" spotlight={true}>
                <div>
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/20 text-cyan-400 border border-blue-500/30">
                      {project.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-amber-400" /> {project.metrics}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 mb-4">{project.subtitle}</p>

                  {/* Interactive Screenshot Image Link */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl mb-6 relative group/subimage hover:border-cyan-400/80 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between bg-slate-950 px-3 py-2 border-b border-slate-800">
                      <div className="flex gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                        <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                        <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1 truncate max-w-[180px]">
                        {project.live} <ExternalLink className="w-2.5 h-2.5 text-cyan-400" />
                      </span>
                    </div>
                    <div className="relative overflow-hidden aspect-[16/9] bg-slate-950">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover/subimage:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover/subimage:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                        <span className="px-3.5 py-1.5 rounded-full bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg">
                          Open Live Site <ExternalLink className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </a>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4">{project.description}</p>

                  <div className="space-y-2 mb-6">
                    {project.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 flex-wrap pt-4 border-t border-slate-800/80">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:brightness-110 px-4 py-2.5 rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:scale-105"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 px-4 py-2.5 rounded-xl transition-all hover:scale-105"
                    >
                      <Github className="w-3.5 h-3.5" /> GitHub Repo
                    </a>
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
