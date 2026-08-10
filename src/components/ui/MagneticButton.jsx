import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const MagneticButton = ({ children, className = '', onClick, href, variant = 'primary' }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.25, y: middleY * 0.25 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full overflow-hidden px-7 py-3.5 text-sm tracking-wide shadow-lg group";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-blue-500/25 hover:shadow-blue-500/40 hover:brightness-110",
    secondary:
      "bg-slate-900/80 text-slate-200 border border-slate-700/60 hover:border-cyan-500/60 hover:text-white backdrop-blur-md",
    outline:
      "bg-transparent text-slate-300 border border-slate-700 hover:border-violet-500 hover:text-white",
  };

  const Component = href ? 'a' : 'button';

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      <Component
        href={href}
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </Component>
    </motion.div>
  );
};
