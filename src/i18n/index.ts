import { en } from './en';
import { vi } from './vi';
export type Language = 'en' | 'vi';
export type TranslationKey = string;
const translations = { en, vi };
export function t(key: string, lang: Language = 'en'): string {
  const keys = key.split('.');
  let result: unknown = translations[lang];
  for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
      result = (result as Record<string, unknown>)[k];
    } else { return key; }
  }
  return typeof result === 'string' ? result : key;
}
export { en, vi };
