import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const GlassCard = ({ children, className = '', hoverEffect = true, onClick, spotlight = true }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!spotlight) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -6, scale: 1.015, boxShadow: '0 20px 40px -15px rgba(59, 130, 246, 0.25)' } : {}}
      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`glass-panel rounded-2xl p-6 relative overflow-hidden transition-colors duration-300 ${
        hoverEffect ? 'cursor-pointer hover:border-cyan-500/40 hover:bg-slate-900/90' : ''
      } ${className}`}
    >
      {/* Interactive Cursor Spotlight Glow Effect */}
      {spotlight && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.15), rgba(139, 92, 246, 0.05) 40%, transparent 80%)`,
          }}
        />
      )}

      {/* Decorative gradient glow on card corner */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
