import React, { useEffect, useState, useRef } from 'react';

export const AnimatedCounter = ({ value, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = parseInt(value, 10);
    if (start === end) return;

    const incrementTime = (duration / end);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, Math.max(incrementTime, 30));

    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  return (
    <span ref={ref} className="font-display font-extrabold text-4xl sm:text-5xl text-gradient">
      {count}{suffix}
    </span>
  );
};
