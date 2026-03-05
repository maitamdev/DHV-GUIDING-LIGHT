import React, { useState, useEffect, useRef } from 'react';
interface Props { end: number; duration?: number; prefix?: string; suffix?: string; className?: string; }
const CountUp: React.FC<Props> = ({ end, duration = 2000, prefix = '', suffix = '', className = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    const observer = new IntersectionObserver(entries => { if (entries[0].isIntersecting) { requestAnimationFrame(animate); observer.disconnect(); } });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);
  return <span ref={ref} className={className}>{prefix}{count.toLocaleString()}{suffix}</span>;
};
export default CountUp;
