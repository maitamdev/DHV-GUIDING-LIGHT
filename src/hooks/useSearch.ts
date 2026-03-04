import { useState, useMemo } from 'react';
import { useDebounce } from './useDebounce';

interface UseSearchResult<T> {
  query: string;
  setQuery: (query: string) => void;
  results: T[];
  isSearching: boolean;
  clearSearch: () => void;
}

/**
 * Client-side search hook with debouncing
 */
export function useSearch<T>(
  data: T[],
  searchFields: (keyof T)[],
  debounceMs: number = 300
): UseSearchResult<T> {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, debounceMs);
  const isSearching = query !== debouncedQuery;

  const results = useMemo(() => {
    if (!debouncedQuery.trim()) return data;

    const lowerQuery = debouncedQuery.toLowerCase();
    return data.filter((item) =>
      searchFields.some((field) => {
        const value = item[field];
        if (typeof value === 'string') {
          return value.toLowerCase().includes(lowerQuery);
        }
        if (Array.isArray(value)) {
          return value.some(
            (v) => typeof v === 'string' && v.toLowerCase().includes(lowerQuery)
          );
        }
        return false;
      })
    );
  }, [data, searchFields, debouncedQuery]);

  const clearSearch = () => setQuery('');

  return { query, setQuery, results, isSearching, clearSearch };
}
