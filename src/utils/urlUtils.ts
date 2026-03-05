export function getQueryParams(url: string = window.location.href): Record<string, string> {
  const params: Record<string, string> = {};
  const searchParams = new URL(url).searchParams;
  searchParams.forEach((value, key) => { params[key] = value; });
  return params;
}
export function buildUrl(base: string, params: Record<string, string | number | boolean>): string {
  const url = new URL(base);
  Object.entries(params).forEach(([key, value]) => { if (value !== undefined && value !== null) url.searchParams.set(key, String(value)); });
  return url.toString();
}
export function isExternalUrl(url: string): boolean {
  try { return new URL(url).origin !== window.location.origin; } catch { return false; }
}
export function getPathSegments(path: string = window.location.pathname): string[] {
  return path.split('/').filter(Boolean);
}
