export const BREAKPOINTS = { sm: 640, md: 768, lg: 1024, xl: 1280, '2xl': 1536 } as const;
export type Breakpoint = keyof typeof BREAKPOINTS;
export const MEDIA_QUERIES = {
  sm: '(min-width: 640px)', md: '(min-width: 768px)',
  lg: '(min-width: 1024px)', xl: '(min-width: 1280px)',
  mobile: '(max-width: 767px)', tablet: '(min-width: 768px) and (max-width: 1023px)',
  desktop: '(min-width: 1024px)', darkMode: '(prefers-color-scheme: dark)',
  reducedMotion: '(prefers-reduced-motion: reduce)',
} as const;
