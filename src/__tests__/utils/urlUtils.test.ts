import { describe, it, expect } from 'vitest';
import { buildUrl, getPathSegments } from '../../utils/urlUtils';
describe('urlUtils', () => {
  describe('buildUrl', () => { it('builds URL with params', () => { const url = buildUrl('https://example.com/api', { page: 1, limit: 10 }); expect(url).toContain('page=1'); expect(url).toContain('limit=10'); }); });
  describe('getPathSegments', () => { it('splits path', () => { expect(getPathSegments('/courses/react/lesson-1')).toEqual(['courses', 'react', 'lesson-1']); }); });
});
