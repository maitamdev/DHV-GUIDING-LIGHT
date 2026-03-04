import { useState, useEffect } from 'react';

/**
 * Detect when a specific key is pressed
 */
export function useKeyPress(targetKey: string): boolean {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === targetKey) setIsPressed(true);
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === targetKey) setIsPressed(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [targetKey]);

  return isPressed;
}

/**
 * Execute callback when a key combination is pressed
 */
export function useHotkey(keys: string, callback: () => void): void {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const parts = keys.toLowerCase().split('+');
      const key = parts[parts.length - 1];
      const requireCtrl = parts.includes('ctrl');
      const requireShift = parts.includes('shift');
      const requireAlt = parts.includes('alt');

      if (
        event.key.toLowerCase() === key &&
        event.ctrlKey === requireCtrl &&
        event.shiftKey === requireShift &&
        event.altKey === requireAlt
      ) {
        event.preventDefault();
        callback();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keys, callback]);
}
