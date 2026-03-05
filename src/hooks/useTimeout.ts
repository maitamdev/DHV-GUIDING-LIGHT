import { useEffect, useRef, useCallback } from 'react';
export function useTimeout(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => { savedCallback.current = callback; }, [callback]);
  const clear = useCallback(() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);
  useEffect(() => {
    if (delay === null) return;
    timeoutRef.current = setTimeout(() => savedCallback.current(), delay);
    return clear;
  }, [delay, clear]);
  return { clear };
}
