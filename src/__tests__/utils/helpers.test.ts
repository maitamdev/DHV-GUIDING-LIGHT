import { describe, it, expect } from 'vitest';
import { generateId, clamp, sleep, isEmpty, pick, omit } from '../../utils/helpers';
describe('helpers', () => {
  describe('generateId', () => { it('generates unique ids', () => { const a = generateId(); const b = generateId(); expect(a).not.toBe(b); }); });
  describe('clamp', () => { it('clamps values', () => { expect(clamp(5, 0, 10)).toBe(5); expect(clamp(-1, 0, 10)).toBe(0); expect(clamp(15, 0, 10)).toBe(10); }); });
  describe('isEmpty', () => { it('checks empty values', () => { expect(isEmpty('')).toBe(true); expect(isEmpty([])).toBe(true); expect(isEmpty({})).toBe(true); expect(isEmpty('hello')).toBe(false); }); });
  describe('pick', () => { it('picks keys from object', () => { expect(pick({ a: 1, b: 2, c: 3 }, ['a', 'c'])).toEqual({ a: 1, c: 3 }); }); });
  describe('omit', () => { it('omits keys from object', () => { expect(omit({ a: 1, b: 2, c: 3 }, ['b'])).toEqual({ a: 1, c: 3 }); }); });
});
