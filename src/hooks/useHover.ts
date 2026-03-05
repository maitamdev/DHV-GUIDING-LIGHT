import { useState, useRef, useEffect } from 'react';
export function useHover<T extends HTMLElement>(): [React.RefObject<T | null>, boolean] {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<T>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const handleEnter = () => setIsHovered(true);
    const handleLeave = () => setIsHovered(false);
    node.addEventListener('mouseenter', handleEnter);
    node.addEventListener('mouseleave', handleLeave);
    return () => { node.removeEventListener('mouseenter', handleEnter); node.removeEventListener('mouseleave', handleLeave); };
  }, []);
  return [ref, isHovered];
}
