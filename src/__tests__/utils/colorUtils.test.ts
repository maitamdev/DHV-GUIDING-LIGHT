import { describe, it, expect } from 'vitest';
import { hexToRgb, rgbToHex, lighten, darken } from '../../utils/colorUtils';
describe('colorUtils', () => {
  describe('hexToRgb', () => { it('converts hex to rgb', () => { expect(hexToRgb('#ff0000')).toEqual({ r: 255, g: 0, b: 0 }); }); });
  describe('rgbToHex', () => { it('converts rgb to hex', () => { expect(rgbToHex(255, 0, 0)).toBe('#ff0000'); }); });
});
