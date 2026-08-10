import React, { useState, useEffect } from 'react';

export const TextScramble = ({ words = [], scrambleSpeed = 40, delayBetween = 2500 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const chars = '!<>-_\\/[]{}—=+*^?#________';

  useEffect(() => {
    if (!words.length) return;

    let frame = 0;
    let timeoutId;
    const targetWord = words[currentWordIndex];
    const totalFrames = targetWord.length * 2;

    const interval = setInterval(() => {
      frame++;
      let newText = '';

      for (let i = 0; i < targetWord.length; i++) {
        if (i < frame / 2) {
          newText += targetWord[i];
        } else {
          newText += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      setDisplayText(newText);

      if (frame >= totalFrames) {
        clearInterval(interval);
        setDisplayText(targetWord);
        timeoutId = setTimeout(() => {
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, delayBetween);
      }
    }, scrambleSpeed);

    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
    };
  }, [currentWordIndex, words, scrambleSpeed, delayBetween]);

  return (
    <span className="font-display font-bold text-gradient inline-block min-w-[280px]">
      {displayText}
      <span className="animate-pulse text-cyan-400">|</span>
    </span>
  );
};
