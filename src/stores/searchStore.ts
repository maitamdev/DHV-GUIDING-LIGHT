import { create } from 'zustand';
interface SearchState { query: string; results: unknown[]; isSearching: boolean; recentSearches: string[]; setQuery: (query: string) => void; setResults: (results: unknown[]) => void; setIsSearching: (loading: boolean) => void; addRecentSearch: (query: string) => void; clearRecentSearches: () => void; }
export const useSearchStore = create<SearchState>((set) => ({
  query: '', results: [], isSearching: false, recentSearches: [],
  setQuery: (query) => set({ query }),
  setResults: (results) => set({ results, isSearching: false }),
  setIsSearching: (isSearching) => set({ isSearching }),
  addRecentSearch: (query) => set((state) => ({ recentSearches: [query, ...state.recentSearches.filter(q => q !== query)].slice(0, 10) })),
  clearRecentSearches: () => set({ recentSearches: [] }),
}));
