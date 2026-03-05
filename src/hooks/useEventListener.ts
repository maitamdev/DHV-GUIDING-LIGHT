import { useEffect, useRef } from 'react';
export function useEventListener<K extends keyof WindowEventMap>(
  eventName: K, handler: (event: WindowEventMap[K]) => void, element?: HTMLElement | Window | null
) {
  const savedHandler = useRef(handler);
  useEffect(() => { savedHandler.current = handler; }, [handler]);
  useEffect(() => {
    const target = element ?? window;
    const listener = (event: Event) => savedHandler.current(event as WindowEventMap[K]);
    target.addEventListener(eventName, listener);
    return () => target.removeEventListener(eventName, listener);
  }, [eventName, element]);
}
