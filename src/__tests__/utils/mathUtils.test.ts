import { describe, it, expect } from 'vitest';
import { lerp, average, median, standardDeviation, fibonacci } from '../../utils/mathUtils';
describe('mathUtils', () => {
  describe('lerp', () => { it('interpolates correctly', () => { expect(lerp(0, 10, 0.5)).toBe(5); expect(lerp(0, 100, 0.25)).toBe(25); }); });
  describe('average', () => { it('calculates average', () => { expect(average([1, 2, 3, 4, 5])).toBe(3); expect(average([])).toBe(0); }); });
  describe('median', () => { it('calculates median', () => { expect(median([1, 3, 5])).toBe(3); expect(median([1, 2, 3, 4])).toBe(2.5); }); });
  describe('fibonacci', () => { it('generates fibonacci', () => { expect(fibonacci(6)).toEqual([0, 1, 1, 2, 3, 5]); }); });
});
