// Validation utility functions

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Validate email format
 */
export function validateEmail(email: string): ValidationResult {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.trim()) return { isValid: false, error: 'Email is required' };
  if (!emailRegex.test(email)) return { isValid: false, error: 'Invalid email format' };
  return { isValid: true };
}

/**
 * Validate password strength
 */
export function validatePassword(password: string): ValidationResult {
  if (!password) return { isValid: false, error: 'Password is required' };
  if (password.length < 8) return { isValid: false, error: 'Password must be at least 8 characters' };
  if (!/[A-Z]/.test(password)) return { isValid: false, error: 'Password must contain at least one uppercase letter' };
  if (!/[a-z]/.test(password)) return { isValid: false, error: 'Password must contain at least one lowercase letter' };
  if (!/[0-9]/.test(password)) return { isValid: false, error: 'Password must contain at least one number' };
  return { isValid: true };
}

/**
 * Validate password confirmation match
 */
export function validatePasswordMatch(password: string, confirmPassword: string): ValidationResult {
  if (password !== confirmPassword) return { isValid: false, error: 'Passwords do not match' };
  return { isValid: true };
}

/**
 * Validate required field
 */
export function validateRequired(value: string, fieldName: string = 'This field'): ValidationResult {
  if (!value.trim()) return { isValid: false, error: `${fieldName} is required` };
  return { isValid: true };
}

/**
 * Validate minimum length
 */
export function validateMinLength(value: string, min: number, fieldName: string = 'This field'): ValidationResult {
  if (value.length < min) return { isValid: false, error: `${fieldName} must be at least ${min} characters` };
  return { isValid: true };
}

/**
 * Validate maximum length
 */
export function validateMaxLength(value: string, max: number, fieldName: string = 'This field'): ValidationResult {
  if (value.length > max) return { isValid: false, error: `${fieldName} must be at most ${max} characters` };
  return { isValid: true };
}

/**
 * Validate URL format
 */
export function validateUrl(url: string): ValidationResult {
  if (!url.trim()) return { isValid: true }; // Optional field
  try {
    new URL(url.startsWith('http') ? url : `https://${url}`);
    return { isValid: true };
  } catch {
    return { isValid: false, error: 'Invalid URL format' };
  }
}

/**
 * Validate phone number format
 */
export function validatePhone(phone: string): ValidationResult {
  if (!phone.trim()) return { isValid: true }; // Optional field
  const phoneRegex = /^\+?[\d\s\-()]{10,15}$/;
  if (!phoneRegex.test(phone)) return { isValid: false, error: 'Invalid phone number format' };
  return { isValid: true };
}

/**
 * Run multiple validators on a value
 */
export function validateAll(value: string, validators: ((val: string) => ValidationResult)[]): ValidationResult {
  for (const validator of validators) {
    const result = validator(value);
    if (!result.isValid) return result;
  }
  return { isValid: true };
}
