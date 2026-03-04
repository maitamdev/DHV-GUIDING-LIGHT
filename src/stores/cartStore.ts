import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem } from '../types/cart';

interface CartStore {
  items: CartItem[]; addItem: (item: CartItem) => void; removeItem: (courseId: string | number) => void;
  clearCart: () => void; isInCart: (courseId: string | number) => boolean;
  totalItems: number; subtotal: number; total: number;
}

export const useCartStore = create<CartStore>()(persist((set, get) => ({
  items: [], totalItems: 0, subtotal: 0, total: 0,
  addItem: (item) => set(state => {
    if (state.items.find(i => i.courseId === item.courseId)) return state;
    const items = [...state.items, item]; const subtotal = items.reduce((s, i) => s + (i.discountPrice || i.price), 0);
    return { items, totalItems: items.length, subtotal, total: subtotal };
  }),
  removeItem: (courseId) => set(state => {
    const items = state.items.filter(i => i.courseId !== courseId); const subtotal = items.reduce((s, i) => s + (i.discountPrice || i.price), 0);
    return { items, totalItems: items.length, subtotal, total: subtotal };
  }),
  clearCart: () => set({ items: [], totalItems: 0, subtotal: 0, total: 0 }),
  isInCart: (courseId) => get().items.some(i => i.courseId === courseId),
}), { name: 'dhv-cart' }));
