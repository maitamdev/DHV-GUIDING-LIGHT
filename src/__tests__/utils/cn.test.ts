import { describe, it, expect } from 'vitest';
import { cn } from '../../utils/cn';
describe('cn', () => {
  it('merges class names', () => { expect(cn('foo', 'bar')).toBe('foo bar'); });
  it('handles falsy values', () => { expect(cn('foo', false, null, undefined, 'bar')).toBe('foo bar'); });
  it('handles empty strings', () => { expect(cn('foo', '', 'bar')).toBe('foo bar'); });
  it('returns empty for no args', () => { expect(cn()).toBe(''); });
});
