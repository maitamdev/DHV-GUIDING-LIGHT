import { describe, it, expect } from 'vitest';
import { memoize, lazy } from '../../utils/performance';
describe('performance', () => {
  describe('memoize', () => {
    it('caches results', () => { let calls = 0; const fn = memoize((x: unknown) => { calls++; return x; }); fn(1); fn(1); expect(calls).toBe(1); });
    it('recomputes for new args', () => { let calls = 0; const fn = memoize((_x: unknown) => { calls++; return calls; }); fn(1); fn(2); expect(calls).toBe(2); });
  });
  describe('lazy', () => { it('creates lazily', () => { let created = false; const get = lazy(() => { created = true; return 42; }); expect(created).toBe(false); expect(get()).toBe(42); expect(created).toBe(true); }); });
});
