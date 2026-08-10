import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CursorFollower = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.1 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target;
      const isInteractive =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.onclick !== null ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.glass-panel-hover') ||
        target.getAttribute('role') === 'button';

      setIsPointer(Boolean(isInteractive));
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Fluid Magnetic Ring */}
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 rounded-full border-2 border-cyan-400/60 pointer-events-none z-50 mix-blend-screen shadow-lg shadow-cyan-500/20"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isPointer ? 2.2 : 1,
          borderColor: isPointer ? '#38bdf8' : 'rgba(56, 189, 248, 0.5)',
          backgroundColor: isPointer ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
        }}
        transition={{ type: 'spring', stiffness: 450, damping: 25 }}
      />

      {/* Inner Pinpoint Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 pointer-events-none z-50 shadow-md shadow-cyan-400"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
};
