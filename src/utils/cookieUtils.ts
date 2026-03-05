export function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}
export function setCookie(name: string, value: string, days: number = 30): void {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/; SameSite=Lax';
}
export function deleteCookie(name: string): void { setCookie(name, '', -1); }
export function getAllCookies(): Record<string, string> {
  const cookies: Record<string, string> = {};
  document.cookie.split('; ').forEach(c => { const [key, val] = c.split('='); if (key) cookies[key] = decodeURIComponent(val || ''); });
  return cookies;
}
