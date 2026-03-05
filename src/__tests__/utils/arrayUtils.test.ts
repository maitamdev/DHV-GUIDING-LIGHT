import { describe, it, expect } from 'vitest';
import { chunk, unique, groupBy, sortBy, flatten } from '../../utils/arrayUtils';
describe('arrayUtils', () => {
  describe('chunk', () => { it('chunks array into groups', () => { expect(chunk([1,2,3,4,5], 2)).toEqual([[1,2],[3,4],[5]]); }); });
  describe('unique', () => { it('removes duplicates', () => { expect(unique([1,2,2,3,3])).toEqual([1,2,3]); }); });
  describe('groupBy', () => { it('groups by key', () => { const result = groupBy([{ type: 'a', v: 1 }, { type: 'b', v: 2 }, { type: 'a', v: 3 }], 'type'); expect(Object.keys(result)).toEqual(['a', 'b']); }); });
  describe('sortBy', () => { it('sorts by key', () => { expect(sortBy([{ n: 3 }, { n: 1 }, { n: 2 }], 'n')).toEqual([{ n: 1 }, { n: 2 }, { n: 3 }]); }); });
});
