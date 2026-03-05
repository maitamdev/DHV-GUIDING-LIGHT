import { describe, it, expect } from 'vitest';
import { capitalize, truncate, slugify, camelToKebab, removeAccents } from '../../utils/stringUtils';
describe('stringUtils', () => {
  describe('capitalize', () => {
    it('capitalizes first letter', () => { expect(capitalize('hello')).toBe('Hello'); expect(capitalize('')).toBe(''); });
  });
  describe('truncate', () => {
    it('truncates long strings', () => { expect(truncate('Hello World', 5)).toBe('He...'); });
    it('does not truncate short strings', () => { expect(truncate('Hi', 10)).toBe('Hi'); });
  });
  describe('slugify', () => {
    it('creates URL-safe slug', () => { expect(slugify('Hello World')).toBe('hello-world'); });
  });
  describe('camelToKebab', () => {
    it('converts camelCase to kebab-case', () => { expect(camelToKebab('backgroundColor')).toBe('background-color'); });
  });
});
