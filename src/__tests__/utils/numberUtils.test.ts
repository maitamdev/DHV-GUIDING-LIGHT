import { describe, it, expect } from 'vitest';
import { randomBetween, percentage, roundTo, ordinal, range } from '../../utils/numberUtils';
describe('numberUtils', () => {
  describe('randomBetween', () => {
    it('returns number within range', () => { const n = randomBetween(1, 10); expect(n).toBeGreaterThanOrEqual(1); expect(n).toBeLessThanOrEqual(10); });
  });
  describe('percentage', () => {
    it('calculates percentage correctly', () => { expect(percentage(25, 100)).toBe(25); expect(percentage(1, 3)).toBe(33); });
    it('handles zero total', () => { expect(percentage(5, 0)).toBe(0); });
  });
  describe('roundTo', () => {
    it('rounds to specified decimals', () => { expect(roundTo(3.14159, 2)).toBe(3.14); expect(roundTo(2.5, 0)).toBe(3); });
  });
  describe('ordinal', () => {
    it('returns correct ordinal suffix', () => { expect(ordinal(1)).toBe('1st'); expect(ordinal(2)).toBe('2nd'); expect(ordinal(3)).toBe('3rd'); expect(ordinal(4)).toBe('4th'); expect(ordinal(11)).toBe('11th'); });
  });
  describe('range', () => {
    it('generates correct range', () => { expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]); expect(range(0, 10, 2)).toEqual([0, 2, 4, 6, 8, 10]); });
  });
});
