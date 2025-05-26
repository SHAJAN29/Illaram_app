"use client";
import React, { useEffect, useRef, useState } from "react";

const Counter = ({ target = 1000, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          animateCount();
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const animateCount = () => {
    const start = 0;
    const end = target;
    const increment = end / (duration / 16); // 16ms ~ 60fps
    let current = start;

    const step = () => {
      current += increment;
      if (current < end) {
        setCount(Math.floor(current));
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    step();
  };

  return (
    <div ref={ref} className="text-4xl font-extrabold text-[#97c25f]">
      {count}+{/* The + is optional for style */}
    </div>
  );
};

export default Counter;
