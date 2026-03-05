export function matchMedia(query: string): boolean { return window.matchMedia(query).matches; }
export function prefersReducedMotion(): boolean { return matchMedia('(prefers-reduced-motion: reduce)'); }
export function prefersDarkMode(): boolean { return matchMedia('(prefers-color-scheme: dark)'); }
export function isHighDPI(): boolean { return window.devicePixelRatio > 1; }
export function getViewportSize(): { width: number; height: number } { return { width: window.innerWidth, height: window.innerHeight }; }
export function isPortrait(): boolean { return window.innerHeight > window.innerWidth; }
