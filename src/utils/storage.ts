// LocalStorage helper utilities with type safety

/**
 * Get a value from localStorage with type safety
 */
export function getFromStorage<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(key);
    if (item === null) return defaultValue;
    return JSON.parse(item) as T;
  } catch (error) {
    console.warn(`Error reading localStorage key "${key}":`, error);
    return defaultValue;
  }
}

/**
 * Set a value in localStorage
 */
export function setToStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Error writing localStorage key "${key}":`, error);
  }
}

/**
 * Remove a value from localStorage
 */
export function removeFromStorage(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.warn(`Error removing localStorage key "${key}":`, error);
  }
}

/**
 * Clear all localStorage
 */
export function clearStorage(): void {
  try {
    localStorage.clear();
  } catch (error) {
    console.warn('Error clearing localStorage:', error);
  }
}

/**
 * Check if a key exists in localStorage
 */
export function hasStorageKey(key: string): boolean {
  try {
    return localStorage.getItem(key) !== null;
  } catch {
    return false;
  }
}

// Storage keys enum for type safety
export const STORAGE_KEYS = {
  DARK_MODE: 'darkMode',
  AUTH_TOKEN: 'authToken',
  USER_PREFERENCES: 'userPreferences',
  CART_ITEMS: 'cartItems',
  SEARCH_HISTORY: 'searchHistory',
  RECENT_COURSES: 'recentCourses',
  LANGUAGE: 'language',
  ONBOARDING_COMPLETED: 'onboardingCompleted',
} as const;
