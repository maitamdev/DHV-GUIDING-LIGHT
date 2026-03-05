import { useState, useEffect, useRef } from 'react';
export function useThrottle<T>(value: T, interval: number = 500): T {
  const [throttled, setThrottled] = useState<T>(value);
  const lastExecuted = useRef<number>(Date.now());
  useEffect(() => {
    const now = Date.now();
    if (now >= lastExecuted.current + interval) {
      lastExecuted.current = now;
      setThrottled(value);
    } else {
      const timerId = setTimeout(() => {
        lastExecuted.current = Date.now();
        setThrottled(value);
      }, interval);
      return () => clearTimeout(timerId);
    }
  }, [value, interval]);
  return throttled;
}
