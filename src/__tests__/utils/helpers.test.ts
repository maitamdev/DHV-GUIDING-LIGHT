import { describe, it, expect } from 'vitest';
import { generateId, isEmpty, capitalize, clamp, groupBy, pick, omit, deepClone } from '../../utils/helpers';

describe('generateId', () => {
  it('generates unique IDs', () => { expect(generateId()).not.toBe(generateId()); });
  it('uses prefix', () => { expect(generateId('test')).toMatch(/^test-/); });
});

describe('isEmpty', () => {
  it('null is empty', () => { expect(isEmpty(null)).toBe(true); });
  it('undefined is empty', () => { expect(isEmpty(undefined)).toBe(true); });
  it('empty string is empty', () => { expect(isEmpty('')).toBe(true); });
  it('empty array is empty', () => { expect(isEmpty([])).toBe(true); });
  it('empty object is empty', () => { expect(isEmpty({})).toBe(true); });
  it('non-empty string is not empty', () => { expect(isEmpty('hello')).toBe(false); });
});

describe('capitalize', () => {
  it('capitalizes first letter', () => { expect(capitalize('hello')).toBe('Hello'); });
  it('handles empty string', () => { expect(capitalize('')).toBe(''); });
});

describe('clamp', () => {
  it('clamps below min', () => { expect(clamp(-5, 0, 10)).toBe(0); });
  it('clamps above max', () => { expect(clamp(15, 0, 10)).toBe(10); });
  it('keeps in range', () => { expect(clamp(5, 0, 10)).toBe(5); });
});

describe('groupBy', () => {
  it('groups items by key', () => {
    const items = [{ type: 'a', v: 1 }, { type: 'b', v: 2 }, { type: 'a', v: 3 }];
    const result = groupBy(items, 'type');
    expect(result['a']).toHaveLength(2);
    expect(result['b']).toHaveLength(1);
  });
});

describe('pick', () => {
  it('picks keys', () => { expect(pick({ a: 1, b: 2, c: 3 }, ['a', 'c'])).toEqual({ a: 1, c: 3 }); });
});

describe('omit', () => {
  it('omits keys', () => { expect(omit({ a: 1, b: 2, c: 3 }, ['b'])).toEqual({ a: 1, c: 3 }); });
});

describe('deepClone', () => {
  it('creates deep copy', () => {
    const obj = { a: { b: 1 } };
    const clone = deepClone(obj);
    clone.a.b = 2;
    expect(obj.a.b).toBe(1);
  });
});
