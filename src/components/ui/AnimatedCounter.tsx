import React, { useState, useEffect } from 'react';
interface Props { value: number; duration?: number; className?: string; }
const AnimatedCounter: React.FC<Props> = ({ value, duration = 1500, className = '' }) => {
  const [display, setDisplay] = useState(0);
  useEffect(() => { let start = 0; const step = value / (duration / 16); const timer = setInterval(() => { start += step; if (start >= value) { setDisplay(value); clearInterval(timer); } else setDisplay(Math.floor(start)); }, 16); return () => clearInterval(timer); }, [value, duration]);
  return <span className={className}>{display.toLocaleString()}</span>;
};
export default AnimatedCounter;
