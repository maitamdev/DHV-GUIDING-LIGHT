import React, { createContext, useContext, useState, useCallback } from 'react';
interface SidebarContext { isOpen: boolean; toggle: () => void; open: () => void; close: () => void; }
const Ctx = createContext<SidebarContext | undefined>(undefined);
export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useCallback(() => setIsOpen(p => !p), []);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  return <Ctx.Provider value={{ isOpen, toggle, open, close }}>{children}</Ctx.Provider>;
};
export const useSidebar = () => { const ctx = useContext(Ctx); if (!ctx) throw new Error('useSidebar must be used within SidebarProvider'); return ctx; };
