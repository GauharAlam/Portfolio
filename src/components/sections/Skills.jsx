import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Terminal, Cpu, FileCode, Atom, Layers, FileJson, Palette, Layout, Globe,
  Server, Workflow, Shield, Zap, Network, Database, Table, HardDrive, Binary,
  Sparkles, Link, BrainCircuit, MessageSquareCode, Cloud, UploadCloud, GitBranch,
  Send, Key
} from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { skillsGrouped, personalDetails } from '../../data/portfolioData';

const iconMap = {
  Code2, Terminal, Cpu, FileCode, Atom, Layers, FileJson, Palette, Layout, Globe,
  Server, Workflow, Shield, Zap, Network, Database, Table, HardDrive, Binary,
  Sparkles, Link, BrainCircuit, MessageSquareCode, Cloud, UploadCloud, GitBranch,
  Send, Key
};

export const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', ...skillsGrouped.map((g) => g.category)];

  const filteredGroups = activeFilter === 'All'
    ? skillsGrouped
    : skillsGrouped.filter((g) => g.category === activeFilter);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#07070b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold uppercase tracking-widest mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" /> Technical Arsenal
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight"
          >
            Skills & <span className="text-gradient">Technologies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            className="text-slate-400 max-w-xl mt-3 text-sm sm:text-base"
          >
            Full-stack proficiency spanning languages, frontend frameworks, backend APIs, databases, GenAI pipelines, and DevOps.
          </motion.p>

          {/* Interactive Skill Category Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2 mt-8 bg-slate-900/60 p-2 rounded-2xl border border-slate-800/80 backdrop-blur-md"
          >
            {categories.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`relative px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-300 ${
                    isActive ? 'text-white font-semibold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillTab"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl -z-10 shadow-md shadow-blue-500/20"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {category}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Skills Group Grid with AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredGroups.map((group) => (
              <motion.div
                key={group.category}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              >
                <GlassCard className="h-full flex flex-col justify-between" hoverEffect={true} spotlight={true}>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-white mb-6 pb-3 border-b border-slate-800 flex items-center justify-between">
                      <span>{group.category}</span>
                      <span className="text-xs text-cyan-400 font-mono bg-cyan-950/40 px-2.5 py-1 rounded-full border border-cyan-800/40">
                        {group.skills.length} Stack items
                      </span>
                    </h3>

                    <div className="space-y-4">
                      {group.skills.map((skill) => {
                        const IconComponent = iconMap[skill.icon] || Code2;
                        return (
                          <div key={skill.name} className="group">
                            <div className="flex items-center justify-between text-xs font-medium mb-1.5">
                              <span className="text-slate-200 flex items-center gap-2 group-hover:text-cyan-400 transition-colors">
                                <IconComponent className="w-4 h-4 text-cyan-400/80 shrink-0" />
                                {skill.name}
                              </span>
                              <span className="text-slate-500 font-mono">{skill.level}%</span>
                            </div>
                            <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* DSA Badge Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-12 p-6 rounded-2xl glass-panel border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-display font-extrabold text-xl shrink-0">
              200+
            </div>
            <div>
              <h4 className="font-display font-semibold text-white text-base">200+ DSA Problems Solved</h4>
              <p className="text-xs text-slate-400 mt-0.5">LeetCode & GeeksforGeeks problem solving in C++ and Python.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
            <a
              href={personalDetails.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors"
            >
              LeetCode Profile ↗
            </a>
            <a
              href={personalDetails.gfg}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors"
            >
              GFG Profile ↗
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
