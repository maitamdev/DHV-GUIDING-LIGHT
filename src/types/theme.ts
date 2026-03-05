export interface ThemeColors { primary: ColorScale; secondary: ColorScale; accent: ColorScale; success: string; warning: string; error: string; info: string; }
export interface ColorScale { 50: string; 100: string; 200: string; 300: string; 400: string; 500: string; 600: string; 700: string; 800: string; 900: string; }
export interface ThemeConfig { colors: ThemeColors; fonts: { heading: string; body: string; mono: string; }; borderRadius: Record<string, string>; shadows: Record<string, string>; spacing: Record<string, string>; }
export type ThemeMode = 'light' | 'dark' | 'system';
