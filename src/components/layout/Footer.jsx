import React from 'react';
import { Github, Linkedin, Mail, Phone, Heart, Twitter } from 'lucide-react';
import { personalDetails } from '../../data/portfolioData';

export const Footer = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-[#07070b] py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#" className="font-display font-bold text-xl text-white tracking-tight">
              Gauhar<span className="text-cyan-400">.</span>
            </a>
            <p className="text-xs text-slate-400 mt-1 max-w-sm">
              Full Stack Developer & GenAI Engineer building high-impact software.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <a
              href={personalDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-500/50 hover:bg-slate-800 transition-all"
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-slate-800 transition-all"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalDetails.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-sky-500/50 hover:bg-slate-800 transition-all"
              title="X (Twitter) Profile"
              aria-label="X (Twitter)"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={personalDetails.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 hover:border-amber-500/50 hover:bg-slate-800 transition-all text-xs font-mono font-semibold"
              title="LeetCode Profile"
            >
              LeetCode
            </a>
            <a
              href={personalDetails.gfg}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 hover:border-emerald-500/50 hover:bg-slate-800 transition-all text-xs font-mono font-semibold"
              title="GeeksforGeeks Profile"
            >
              GFG
            </a>
            <a
              href={`mailto:${personalDetails.email}`}
              className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-violet-500/50 hover:bg-slate-800 transition-all"
              title="Email"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-8 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Gauhar Alam. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React 18, Node & <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> a lot of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};
