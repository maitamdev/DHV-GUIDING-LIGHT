import React, { createContext, useContext, useState, useCallback } from 'react';
type ToastType = 'success' | 'error' | 'warning' | 'info';
interface Toast { id: string; type: ToastType; message: string; duration?: number; }
interface ToastContext { toasts: Toast[]; addToast: (type: ToastType, message: string, duration?: number) => void; removeToast: (id: string) => void; }
const Ctx = createContext<ToastContext | undefined>(undefined);
export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const addToast = useCallback((type: ToastType, message: string, duration = 5000) => {
    const id = Date.now().toString(36) + Math.random().toString(36).slice(2);
    setToasts(prev => [...prev, { id, type, message, duration }]);
    if (duration > 0) setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), duration);
  }, []);
  const removeToast = useCallback((id: string) => setToasts(prev => prev.filter(t => t.id !== id)), []);
  return <Ctx.Provider value={{ toasts, addToast, removeToast }}>{children}</Ctx.Provider>;
};
export const useToast = () => { const ctx = useContext(Ctx); if (!ctx) throw new Error('useToast must be used within ToastProvider'); return ctx; };
