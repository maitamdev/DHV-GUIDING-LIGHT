import { describe, it, expect } from 'vitest';
import { formatCurrency, formatNumber, formatPhoneNumber, formatDuration, truncateText } from '../../utils/formatters';
describe('formatters', () => {
  describe('formatCurrency', () => { it('formats currency', () => { const r = formatCurrency(1234.5); expect(r).toContain('1'); }); });
  describe('formatNumber', () => { it('formats large numbers', () => { expect(formatNumber(1500000)).toBe('1.5M'); expect(formatNumber(1500)).toBe('1.5K'); }); });
  describe('formatDuration', () => { it('formats seconds to duration', () => { expect(formatDuration(3661)).toBe('1h 1m'); }); });
  describe('truncateText', () => { it('truncates long text', () => { expect(truncateText('Hello World', 5)).toBe('Hello...'); }); it('keeps short text', () => { expect(truncateText('Hi', 10)).toBe('Hi'); }); });
});
