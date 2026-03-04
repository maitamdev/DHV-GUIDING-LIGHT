import { describe, it, expect } from 'vitest';
import { validateEmail, validatePassword, validatePasswordMatch, validateRequired, validateUrl, validatePhone } from '../../utils/validators';

describe('validateEmail', () => {
  it('accepts valid email', () => { expect(validateEmail('test@example.com').isValid).toBe(true); });
  it('rejects empty email', () => { expect(validateEmail('').isValid).toBe(false); });
  it('rejects invalid format', () => { expect(validateEmail('invalid').isValid).toBe(false); });
  it('rejects missing domain', () => { expect(validateEmail('test@').isValid).toBe(false); });
});

describe('validatePassword', () => {
  it('accepts strong password', () => { expect(validatePassword('MyPass123').isValid).toBe(true); });
  it('rejects short password', () => { expect(validatePassword('short').isValid).toBe(false); });
  it('rejects no uppercase', () => { expect(validatePassword('nouppercas1').isValid).toBe(false); });
  it('rejects no number', () => { expect(validatePassword('NoNumberHere').isValid).toBe(false); });
});

describe('validatePasswordMatch', () => {
  it('accepts matching passwords', () => { expect(validatePasswordMatch('pass123', 'pass123').isValid).toBe(true); });
  it('rejects non-matching passwords', () => { expect(validatePasswordMatch('pass123', 'pass456').isValid).toBe(false); });
});

describe('validateRequired', () => {
  it('accepts non-empty value', () => { expect(validateRequired('hello').isValid).toBe(true); });
  it('rejects empty value', () => { expect(validateRequired('').isValid).toBe(false); });
  it('rejects whitespace only', () => { expect(validateRequired('   ').isValid).toBe(false); });
});

describe('validateUrl', () => {
  it('accepts valid URL', () => { expect(validateUrl('https://example.com').isValid).toBe(true); });
  it('accepts empty (optional)', () => { expect(validateUrl('').isValid).toBe(true); });
});

describe('validatePhone', () => {
  it('accepts valid phone', () => { expect(validatePhone('+84 123 456 7890').isValid).toBe(true); });
  it('accepts empty (optional)', () => { expect(validatePhone('').isValid).toBe(true); });
});
