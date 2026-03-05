import { useEffect } from 'react';
export function useLockBodyScroll(locked: boolean = true) {
  useEffect(() => {
    if (!locked) return;
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) document.body.style.paddingRight = scrollbarWidth + 'px';
    return () => { document.body.style.overflow = originalOverflow; document.body.style.paddingRight = originalPaddingRight; };
  }, [locked]);
}
