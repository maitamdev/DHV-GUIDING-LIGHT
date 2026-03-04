// Environment variable validation
export function validateEnv(): void {
  const required = ['VITE_FIREBASE_API_KEY', 'VITE_FIREBASE_AUTH_DOMAIN', 'VITE_FIREBASE_PROJECT_ID'];
  const missing = required.filter(key => !import.meta.env[key]);
  if (missing.length > 0) { console.warn('Missing env vars:', missing.join(', ')); }
}

