// Keyboard navigation helpers
export const KEYS = { ENTER: 'Enter', ESCAPE: 'Escape', ARROW_UP: 'ArrowUp', ARROW_DOWN: 'ArrowDown', TAB: 'Tab', SPACE: ' ' } as const;

export function isNavigationKey(key: string): boolean {
  return Object.values(KEYS).includes(key as typeof KEYS[keyof typeof KEYS]);
}

export function handleListNavigation(e: KeyboardEvent, items: HTMLElement[], currentIndex: number): number {
  if (e.key === KEYS.ARROW_DOWN) return Math.min(currentIndex + 1, items.length - 1);
  if (e.key === KEYS.ARROW_UP) return Math.max(currentIndex - 1, 0);
  return currentIndex;
}

