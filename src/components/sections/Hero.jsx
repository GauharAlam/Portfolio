import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Send, Github, Linkedin, Mail, Phone, Sparkles, Twitter, Code2, Globe } from 'lucide-react';
import { ParticleHeroCanvas } from '../canvas/ParticleHeroCanvas';
import { TextScramble } from '../ui/TextScramble';
import { MagneticButton } from '../ui/MagneticButton';
import { personalDetails } from '../../data/portfolioData';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-grid-pattern">
      {/* 3D Particle Hero Canvas */}
      <ParticleHeroCanvas />

      {/* Ambient Radial Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md mb-8 shadow-inner"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-medium text-slate-300">Available for Opportunities & Client Work</span>
        </motion.div>

        {/* Main Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white mb-6"
        >
          Hi, I'm <span className="text-gradient">Gauhar Alam</span>
        </motion.h1>

        {/* Dynamic Title / Scramble Roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-slate-300 mb-6 flex items-center justify-center gap-3 flex-wrap"
        >
          <span>I'm a</span>
          <TextScramble words={personalDetails.roles} />
        </motion.div>

        {/* Bio One-Liner */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10 font-normal"
        >
          {personalDetails.oneLiner}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <MagneticButton href="#projects" variant="primary">
            View Projects <ArrowRight className="w-4 h-4" />
          </MagneticButton>

          <MagneticButton href={personalDetails.resumeUrl} variant="secondary">
            <FileText className="w-4 h-4 text-cyan-400" /> Download Resume
          </MagneticButton>

          <MagneticButton href="#contact" variant="outline">
            <Send className="w-4 h-4" /> Get in Touch
          </MagneticButton>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex items-center gap-4 sm:gap-6 text-slate-400 flex-wrap justify-center"
        >
          <a
            href={personalDetails.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors p-2 hover:bg-slate-900 rounded-full flex items-center gap-1.5 text-xs font-medium"
            title="GitHub"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personalDetails.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors p-2 hover:bg-slate-900 rounded-full flex items-center gap-1.5 text-xs font-medium"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={personalDetails.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors p-2 hover:bg-slate-900 rounded-full flex items-center gap-1.5 text-xs font-medium"
            title="X (Twitter)"
            aria-label="X (Twitter)"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href={personalDetails.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors p-2 hover:bg-slate-900 rounded-full flex items-center gap-1 text-xs font-semibold font-mono"
            title="LeetCode"
            aria-label="LeetCode"
          >
            <Code2 className="w-5 h-5" />
          </a>
          <a
            href={personalDetails.gfg}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors p-2 hover:bg-slate-900 rounded-full flex items-center gap-1 text-xs font-semibold font-mono"
            title="GeeksforGeeks"
            aria-label="GeeksforGeeks"
          >
            <Globe className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalDetails.email}`}
            className="hover:text-violet-400 transition-colors p-2 hover:bg-slate-900 rounded-full"
            title="Email"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href={`tel:${personalDetails.phone}`}
            className="hover:text-emerald-400 transition-colors p-2 hover:bg-slate-900 rounded-full"
            title="Phone"
            aria-label="Phone"
          >
            <Phone className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
