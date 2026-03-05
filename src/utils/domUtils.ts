export function scrollToElement(selector: string, offset: number = 0): void {
  const el = document.querySelector(selector);
  if (el) { const top = el.getBoundingClientRect().top + window.scrollY - offset; window.scrollTo({ top, behavior: 'smooth' }); }
}
export function isElementInViewport(el: Element): boolean {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth;
}
export function focusFirstInput(container: Element): void {
  const input = container.querySelector<HTMLInputElement>('input, textarea, select');
  input?.focus();
}
export function getScrollPercentage(): number {
  const h = document.documentElement;
  return (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
}
