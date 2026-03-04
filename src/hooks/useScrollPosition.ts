import { useState, useEffect } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
  direction: 'up' | 'down' | 'none';
  isAtTop: boolean;
  isAtBottom: boolean;
}

/**
 * Track window scroll position and direction
 */
export function useScrollPosition(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
    direction: 'none',
    isAtTop: true,
    isAtBottom: false,
  });

  useEffect(() => {
    let previousY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const direction = currentY > previousY ? 'down' : currentY < previousY ? 'up' : 'none';
      const isAtBottom =
        window.innerHeight + currentY >= document.documentElement.scrollHeight - 10;

      setScrollPosition({
        x: window.scrollX,
        y: currentY,
        direction,
        isAtTop: currentY <= 0,
        isAtBottom,
      });

      previousY = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
}
