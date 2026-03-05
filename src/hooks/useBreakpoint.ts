import { useState, useEffect } from 'react';
import { BREAKPOINTS } from '../constants/breakpoints';
type BreakpointKey = keyof typeof BREAKPOINTS;
export function useBreakpoint(): BreakpointKey {
  const [breakpoint, setBreakpoint] = useState<BreakpointKey>('sm');
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= BREAKPOINTS['2xl']) setBreakpoint('2xl');
      else if (w >= BREAKPOINTS.xl) setBreakpoint('xl');
      else if (w >= BREAKPOINTS.lg) setBreakpoint('lg');
      else if (w >= BREAKPOINTS.md) setBreakpoint('md');
      else setBreakpoint('sm');
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return breakpoint;
}
