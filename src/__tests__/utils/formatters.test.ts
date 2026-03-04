import { describe, it, expect } from 'vitest';
import { formatCurrency, formatCompactNumber, formatDuration, truncateText, getInitials, slugify, formatRating } from '../../utils/formatters';

describe('formatCurrency', () => {
  it('formats USD currency', () => { expect(formatCurrency(100)).toBe('$100'); });
  it('formats with decimals', () => { expect(formatCurrency(99.99)).toBe('$99.99'); });
  it('formats zero', () => { expect(formatCurrency(0)).toBe('$0'); });
});

describe('formatCompactNumber', () => {
  it('formats thousands', () => { expect(formatCompactNumber(1500)).toBe('1.5K'); });
  it('formats millions', () => { expect(formatCompactNumber(2500000)).toBe('2.5M'); });
  it('keeps small numbers', () => { expect(formatCompactNumber(500)).toBe('500'); });
});

describe('formatDuration', () => {
  it('formats hours and minutes', () => { expect(formatDuration(2.5)).toBe('2h 30m'); });
  it('formats whole hours', () => { expect(formatDuration(3)).toBe('3h'); });
  it('formats less than an hour', () => { expect(formatDuration(0.5)).toBe('30m'); });
});

describe('truncateText', () => {
  it('truncates long text', () => { expect(truncateText('Hello World!', 5)).toBe('Hello...'); });
  it('keeps short text', () => { expect(truncateText('Hi', 5)).toBe('Hi'); });
});

describe('getInitials', () => {
  it('gets two letter initials', () => { expect(getInitials('John Doe')).toBe('JD'); });
  it('handles single name', () => { expect(getInitials('Alice')).toBe('A'); });
  it('limits to two chars', () => { expect(getInitials('John Michael Doe')).toBe('JM'); });
});

describe('slugify', () => {
  it('slugifies text', () => { expect(slugify('Hello World!')).toBe('hello-world'); });
  it('handles multiple spaces', () => { expect(slugify('  Hello  World  ')).toBe('hello-world'); });
});

describe('formatRating', () => {
  it('formats to one decimal', () => { expect(formatRating(4.567)).toBe('4.6'); });
  it('formats whole number', () => { expect(formatRating(5)).toBe('5.0'); });
});
