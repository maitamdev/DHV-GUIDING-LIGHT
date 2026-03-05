import { create } from 'zustand';
interface CourseFilters { category: string; difficulty: string; priceRange: [number, number]; rating: number; sortBy: 'popular' | 'newest' | 'price-low' | 'price-high' | 'rating'; }
interface CourseState { filters: CourseFilters; viewMode: 'grid' | 'list'; setFilter: <K extends keyof CourseFilters>(key: K, value: CourseFilters[K]) => void; resetFilters: () => void; setViewMode: (mode: 'grid' | 'list') => void; }
const defaultFilters: CourseFilters = { category: 'all', difficulty: 'all', priceRange: [0, 100], rating: 0, sortBy: 'popular' };
export const useCourseStore = create<CourseState>((set) => ({
  filters: defaultFilters, viewMode: 'grid',
  setFilter: (key, value) => set(state => ({ filters: { ...state.filters, [key]: value } })),
  resetFilters: () => set({ filters: defaultFilters }),
  setViewMode: (viewMode) => set({ viewMode }),
}));
