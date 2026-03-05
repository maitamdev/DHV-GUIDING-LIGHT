import React, { createContext, useContext, useState, useCallback } from 'react';
interface ModalState { isOpen: boolean; component: React.ReactNode | null; }
interface ModalContext { openModal: (component: React.ReactNode) => void; closeModal: () => void; isOpen: boolean; }
const Ctx = createContext<ModalContext | undefined>(undefined);
export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<ModalState>({ isOpen: false, component: null });
  const openModal = useCallback((component: React.ReactNode) => setState({ isOpen: true, component }), []);
  const closeModal = useCallback(() => setState({ isOpen: false, component: null }), []);
  return (
    <Ctx.Provider value={{ openModal, closeModal, isOpen: state.isOpen }}>
      {children}
      {state.isOpen && <div className='fixed inset-0 z-[100] flex items-center justify-center bg-black/50'>{state.component}</div>}
    </Ctx.Provider>
  );
};
export const useModal = () => { const ctx = useContext(Ctx); if (!ctx) throw new Error('useModal must be used within ModalProvider'); return ctx; };
