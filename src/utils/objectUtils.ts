export function deepClone<T>(obj: T): T { return JSON.parse(JSON.stringify(obj)); }
export function deepEqual(a: unknown, b: unknown): boolean { return JSON.stringify(a) === JSON.stringify(b); }
export function flattenObject(obj: Record<string, unknown>, prefix = ''): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? prefix + '.' + key : key;
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) Object.assign(result, flattenObject(value as Record<string, unknown>, newKey));
    else result[newKey] = value;
  }
  return result;
}
export function mergeDeep<T extends Record<string, unknown>>(target: T, ...sources: Partial<T>[]): T {
  const result = { ...target };
  for (const source of sources) {
    for (const key of Object.keys(source)) {
      const sv = source[key as keyof T], tv = result[key as keyof T];
      if (sv && typeof sv === 'object' && !Array.isArray(sv) && tv && typeof tv === 'object') (result as Record<string, unknown>)[key] = mergeDeep(tv as Record<string, unknown>, sv as Record<string, unknown>);
      else (result as Record<string, unknown>)[key] = sv;
    }
  }
  return result;
}
