import React from 'react';
import { motion } from 'framer-motion';

export const GlassCard = ({ children, className = '', hoverEffect = true, onClick }) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, scale: 1.01 } : {}}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={onClick}
      className={`glass-panel rounded-2xl p-6 relative overflow-hidden ${
        hoverEffect ? 'glass-panel-hover cursor-pointer' : ''
      } ${className}`}
    >
      {/* Decorative gradient glow on card edge */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
