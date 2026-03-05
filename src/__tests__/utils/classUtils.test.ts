import { describe, it, expect } from 'vitest';
import { conditionalClass, joinClasses, sizeClass } from '../../utils/classUtils';
describe('classUtils', () => {
  describe('conditionalClass', () => { it('returns trueClass when true', () => { expect(conditionalClass(true, 'active', 'inactive')).toBe('active'); }); it('returns falseClass when false', () => { expect(conditionalClass(false, 'active', 'inactive')).toBe('inactive'); }); });
  describe('joinClasses', () => { it('joins valid classes', () => { expect(joinClasses('foo', 'bar', false, null, 'baz')).toBe('foo bar baz'); }); });
  describe('sizeClass', () => { it('returns correct size', () => { const s = sizeClass('sm'); expect(s.text).toBe('text-sm'); }); });
});
