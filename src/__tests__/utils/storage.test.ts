import { describe, it, expect, beforeEach } from 'vitest';
import { setItem, getItem, removeItem } from '../../utils/storage';
describe('storage', () => {
  beforeEach(() => { localStorage.clear(); });
  it('sets and gets item', () => { setItem('key', { foo: 'bar' }); expect(getItem('key')).toEqual({ foo: 'bar' }); });
  it('returns null for missing key', () => { expect(getItem('nonexistent')).toBeNull(); });
  it('removes item', () => { setItem('key', 'value'); removeItem('key'); expect(getItem('key')).toBeNull(); });
});
