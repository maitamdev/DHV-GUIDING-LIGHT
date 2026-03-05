import { describe, it, expect } from 'vitest';
import { easeInOut, smoothStep } from '../../utils/animationUtils';
describe('animationUtils', () => {
  describe('easeInOut', () => { it('returns 0 at start', () => { expect(easeInOut(0)).toBe(0); }); it('returns 1 at end', () => { expect(easeInOut(1)).toBeCloseTo(1); }); it('returns ~0.5 at midpoint', () => { expect(easeInOut(0.5)).toBeCloseTo(0.5); }); });
  describe('smoothStep', () => { it('returns 0 below edge0', () => { expect(smoothStep(0, 1, -0.5)).toBe(0); }); it('returns 1 above edge1', () => { expect(smoothStep(0, 1, 1.5)).toBe(1); }); });
});
