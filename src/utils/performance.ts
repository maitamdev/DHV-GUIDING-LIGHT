export function measureTime<T>(fn: () => T, label: string = 'Operation'): T {
  const start = performance.now();
  const result = fn();
  const duration = performance.now() - start;
  console.log(label + ' took ' + duration.toFixed(2) + 'ms');
  return result;
}
export function memoize<T extends (...args: unknown[]) => unknown>(fn: T): T {
  const cache = new Map();
  return ((...args: unknown[]) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
}
export function lazy<T>(factory: () => T): () => T {
  let instance: T | undefined;
  return () => { if (instance === undefined) instance = factory(); return instance; };
}
