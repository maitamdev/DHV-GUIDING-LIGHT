// Performance monitoring utilities

export function measurePerformance(label: string): () => number {
  const start = performance.now();
  return () => {
    const duration = performance.now() - start;
    console.log(`[Perf] ${label}: ${duration.toFixed(2)}ms`);
    return duration;
  };
}

export function lazyLoadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

export function preloadRoute(importFn: () => Promise<unknown>): void {
  if ('requestIdleCallback' in window) {
    (window as unknown as { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(() => importFn());
  } else {
    setTimeout(importFn, 200);
  }
}
