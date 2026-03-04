import { useCallback } from 'react';

/**
 * Scroll to top of page with smooth animation
 */
export function useScrollToTop() {
  const scrollToTop = useCallback((behavior: ScrollBehavior = 'smooth') => {
    window.scrollTo({ top: 0, behavior });
  }, []);

  return scrollToTop;
}
