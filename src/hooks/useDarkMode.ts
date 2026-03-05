import { useDarkMode as useDarkModeContext } from '../context/DarkModeContext';
export { useDarkModeContext as useDarkMode };
export function useDarkClass(lightClass: string, darkClass: string): string {
  const { isDarkMode } = useDarkModeContext();
  return isDarkMode ? darkClass : lightClass;
}
