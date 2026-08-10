import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CursorFollower = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hide custom cursor on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target;
      const isInteractive =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.onclick !== null ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button';

      setIsPointer(isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-400/50 pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isPointer ? 1.8 : 1,
          borderColor: isPointer ? '#38bdf8' : 'rgba(56, 189, 248, 0.4)',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 28, mass: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 pointer-events-none z-50"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 50 }}
      />
    </>
  );
};
