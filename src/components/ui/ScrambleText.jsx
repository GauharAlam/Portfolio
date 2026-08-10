import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const ScrambleText = ({ text, className = '', scrambleOnHover = true }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const chars = '!<>-_\\/[]{}—=+*^?#01';

  const triggerScramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);

    let frame = 0;
    const totalFrames = text.length * 2.5;

    const interval = setInterval(() => {
      frame++;
      let newText = '';

      for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
          newText += ' ';
          continue;
        }

        if (i < frame / 2.5) {
          newText += text[i];
        } else {
          newText += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      setDisplayText(newText);

      if (frame >= totalFrames) {
        clearInterval(interval);
        setDisplayText(text);
        setIsScrambling(false);
      }
    }, 30);
  };

  useEffect(() => {
    triggerScramble();
  }, [text]);

  return (
    <motion.span
      onMouseEnter={scrambleOnHover ? triggerScramble : undefined}
      className={`inline-block font-mono cursor-default ${className}`}
    >
      {displayText}
    </motion.span>
  );
};
