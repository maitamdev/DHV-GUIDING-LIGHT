// Simple in-memory cache with TTL
interface CacheEntry<T> { value: T; expiresAt: number; }
class SimpleCache {
  private cache = new Map<string, CacheEntry<unknown>>();
  set<T>(key: string, value: T, ttlMs: number = 300000): void {
    this.cache.set(key, { value, expiresAt: Date.now() + ttlMs });
  }
  get<T>(key: string): T | null {
    const entry = this.cache.get(key);
    if (!entry) return null;
    if (Date.now() > entry.expiresAt) { this.cache.delete(key); return null; }
    return entry.value as T;
  }
  has(key: string): boolean { return this.get(key) !== null; }
  delete(key: string): void { this.cache.delete(key); }
  clear(): void { this.cache.clear(); }
  size(): number { return this.cache.size; }
}
export const appCache = new SimpleCache();
