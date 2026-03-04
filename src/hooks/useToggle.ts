import { useState, useCallback } from 'react';

/**
 * Boolean toggle hook with set/reset capabilities
 */
export function useToggle(initialValue: boolean = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => setValue((v) => !v), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return { value, toggle, setTrue, setFalse, setValue } as const;
}
