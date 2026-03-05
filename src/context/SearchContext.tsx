import React, { createContext, useContext, useState, useCallback } from 'react';
interface SearchCtx { query: string; isOpen: boolean; setQuery: (q: string) => void; openSearch: () => void; closeSearch: () => void; toggleSearch: () => void; }
const Ctx = createContext<SearchCtx | undefined>(undefined);
export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const openSearch = useCallback(() => setIsOpen(true), []);
  const closeSearch = useCallback(() => { setIsOpen(false); setQuery(''); }, []);
  const toggleSearch = useCallback(() => setIsOpen(p => !p), []);
  return <Ctx.Provider value={{ query, isOpen, setQuery, openSearch, closeSearch, toggleSearch }}>{children}</Ctx.Provider>;
};
export const useSearch = () => { const ctx = useContext(Ctx); if (!ctx) throw new Error('useSearch must be used within SearchProvider'); return ctx; };
