// Design system color constants

export const COLORS = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  secondary: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
  },
  brand: {
    navy: '#001A66',
    accent: '#00FF99',
    dark: '#0b004b',
    orange: '#f69050',
  },
  semantic: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },
  neutral: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
} as const;

export const GRADIENTS = {
  primary: 'linear-gradient(135deg, #3b82f6, #6366f1)',
  secondary: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
  brand: 'linear-gradient(135deg, #001A66, #0b004b)',
  success: 'linear-gradient(135deg, #10b981, #059669)',
  sunset: 'linear-gradient(135deg, #f59e0b, #ef4444)',
  ocean: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
} as const;
