import { useEffect } from 'react';
import { APP_CONFIG } from '../constants/config';

/**
 * Set the document title dynamically
 */
export function usePageTitle(title: string, includeAppName: boolean = true): void {
  useEffect(() => {
    const fullTitle = includeAppName ? `${title} | ${APP_CONFIG.name}` : title;
    document.title = fullTitle;

    return () => {
      document.title = APP_CONFIG.name;
    };
  }, [title, includeAppName]);
}
