// Focus management utilities
export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  const selectors = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex=""-1""])';
  return Array.from(container.querySelectorAll(selectors));
}
export function saveFocus(): () => void {
  const activeElement = document.activeElement as HTMLElement | null;
  return () => activeElement?.focus();
}
export function moveFocus(direction: 'next' | 'prev'): void {
  const focusable = getFocusableElements(document.body);
  const currentIndex = focusable.indexOf(document.activeElement as HTMLElement);
  if (currentIndex === -1) return;
  const nextIndex = direction === 'next' ? (currentIndex + 1) % focusable.length : (currentIndex - 1 + focusable.length) % focusable.length;
  focusable[nextIndex]?.focus();
}
