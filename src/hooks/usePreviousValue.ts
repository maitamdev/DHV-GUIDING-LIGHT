import { useRef, useEffect } from 'react';

/**
 * Get the previous value of a state or prop
 */
export function usePreviousValue<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
