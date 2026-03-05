import { describe, it, expect } from 'vitest';
import { formatDate, isToday, daysBetween, getRelativeTime } from '../../utils/dateUtils';
describe('dateUtils', () => {
  describe('formatDate', () => {
    it('formats date string', () => { const result = formatDate('2025-01-15'); expect(result).toBeTruthy(); expect(typeof result).toBe('string'); });
  });
  describe('isToday', () => {
    it('returns true for today', () => { expect(isToday(new Date())).toBe(true); });
    it('returns false for yesterday', () => { const d = new Date(); d.setDate(d.getDate() - 1); expect(isToday(d)).toBe(false); });
  });
  describe('daysBetween', () => {
    it('calculates days between dates', () => { const d1 = new Date('2025-01-01'); const d2 = new Date('2025-01-10'); expect(daysBetween(d1, d2)).toBe(9); });
  });
  describe('getRelativeTime', () => {
    it('returns relative time string', () => { const result = getRelativeTime(new Date()); expect(typeof result).toBe('string'); });
  });
});
