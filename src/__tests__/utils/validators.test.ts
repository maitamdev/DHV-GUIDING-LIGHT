import { describe, it, expect } from 'vitest';
import { validateEmail, validatePassword, validatePhone, validateUrl } from '../../utils/validators';
describe('validators', () => {
  describe('validateEmail', () => {
    it('accepts valid emails', () => { expect(validateEmail('test@example.com')).toBe(true); expect(validateEmail('user.name@domain.co')).toBe(true); });
    it('rejects invalid emails', () => { expect(validateEmail('notanemail')).toBe(false); expect(validateEmail('@domain.com')).toBe(false); });
  });
  describe('validatePassword', () => {
    it('accepts strong passwords', () => { expect(validatePassword('StrongP@ss1')).toBe(true); });
    it('rejects weak passwords', () => { expect(validatePassword('123')).toBe(false); expect(validatePassword('')).toBe(false); });
  });
  describe('validateUrl', () => {
    it('accepts valid URLs', () => { expect(validateUrl('https://example.com')).toBe(true); });
    it('rejects invalid URLs', () => { expect(validateUrl('not-a-url')).toBe(false); });
  });
});
