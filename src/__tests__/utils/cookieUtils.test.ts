import { describe, it, expect, beforeEach } from 'vitest';
import { getCookie, setCookie, deleteCookie, getAllCookies } from '../../utils/cookieUtils';
describe('cookieUtils', () => {
  beforeEach(() => { Object.defineProperty(document, 'cookie', { value: '', writable: true }); });
  it('getCookie returns null for missing cookies', () => { expect(getCookie('nonexistent')).toBeNull(); });
  it('getAllCookies returns object', () => { expect(typeof getAllCookies()).toBe('object'); });
});
