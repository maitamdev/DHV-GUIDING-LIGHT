// Accessibility utility functions

export function getAriaLabel(element: string, action?: string): string {
  return action ? `${action} ${element}` : element;
}

export function trapFocus(container: HTMLElement): () => void {
  const focusableEls = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstEl = focusableEls[0] as HTMLElement;
  const lastEl = focusableEls[focusableEls.length - 1] as HTMLElement;

  const handler = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;
    if (e.shiftKey) {
      if (document.activeElement === firstEl) { lastEl.focus(); e.preventDefault(); }
    } else {
      if (document.activeElement === lastEl) { firstEl.focus(); e.preventDefault(); }
    }
  };

  container.addEventListener('keydown', handler);
  firstEl?.focus();
  return () => container.removeEventListener('keydown', handler);
}

export function announceToScreenReader(message: string): void {
  const el = document.createElement('div');
  el.setAttribute('role', 'status');
  el.setAttribute('aria-live', 'polite');
  el.className = 'sr-only';
  el.textContent = message;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1000);
}
