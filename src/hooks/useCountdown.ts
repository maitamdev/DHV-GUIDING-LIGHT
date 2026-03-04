import { useState, useEffect, useCallback, useRef } from 'react';

interface CountdownResult {
  timeLeft: number;
  isRunning: boolean;
  isFinished: boolean;
  start: () => void;
  pause: () => void;
  reset: () => void;
  formatted: { days: number; hours: number; minutes: number; seconds: number };
}

/**
 * Countdown timer hook
 */
export function useCountdown(initialSeconds: number): CountdownResult {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const start = useCallback(() => setIsRunning(true), []);
  const pause = useCallback(() => setIsRunning(false), []);
  const reset = useCallback(() => {
    setIsRunning(false);
    setTimeLeft(initialSeconds);
  }, [initialSeconds]);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearTimer();
    }

    return clearTimer;
  }, [isRunning, timeLeft, clearTimer]);

  const days = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft % 86400) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return {
    timeLeft,
    isRunning,
    isFinished: timeLeft === 0,
    start,
    pause,
    reset,
    formatted: { days, hours, minutes, seconds },
  };
}
