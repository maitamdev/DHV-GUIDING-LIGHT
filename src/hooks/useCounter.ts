import { useState, useCallback } from 'react';
interface Options { min?: number; max?: number; step?: number; }
export function useCounter(initial: number = 0, options: Options = {}) {
  const { min = -Infinity, max = Infinity, step = 1 } = options;
  const [count, setCount] = useState(Math.max(min, Math.min(max, initial)));
  const increment = useCallback(() => setCount(c => Math.min(c + step, max)), [step, max]);
  const decrement = useCallback(() => setCount(c => Math.max(c - step, min)), [step, min]);
  const reset = useCallback(() => setCount(initial), [initial]);
  const set = useCallback((val: number) => setCount(Math.max(min, Math.min(max, val))), [min, max]);
  return { count, increment, decrement, reset, set };
}
