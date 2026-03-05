import { describe, it, expect } from 'vitest';
import { deepClone, deepEqual, flattenObject, mergeDeep } from '../../utils/objectUtils';
describe('objectUtils', () => {
  describe('deepClone', () => { it('creates deep copy', () => { const obj = { a: { b: 1 } }; const clone = deepClone(obj); clone.a.b = 2; expect(obj.a.b).toBe(1); }); });
  describe('deepEqual', () => { it('compares objects', () => { expect(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true); expect(deepEqual({ a: 1 }, { a: 2 })).toBe(false); }); });
  describe('flattenObject', () => { it('flattens nested objects', () => { expect(flattenObject({ a: { b: { c: 1 } } })).toEqual({ 'a.b.c': 1 }); }); });
  describe('mergeDeep', () => { it('deep merges objects', () => { const result = mergeDeep({ a: { b: 1, c: 2 } }, { a: { b: 3 } }); expect(result).toEqual({ a: { b: 3, c: 2 } }); }); });
});
