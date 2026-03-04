import { create } from 'zustand';

interface UIStore {
  isSidebarOpen: boolean; isSearchOpen: boolean; isNotificationOpen: boolean;
  toggleSidebar: () => void; toggleSearch: () => void; toggleNotification: () => void;
  closeAll: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isSidebarOpen: false, isSearchOpen: false, isNotificationOpen: false,
  toggleSidebar: () => set(s => ({ isSidebarOpen: !s.isSidebarOpen, isSearchOpen: false, isNotificationOpen: false })),
  toggleSearch: () => set(s => ({ isSearchOpen: !s.isSearchOpen, isSidebarOpen: false, isNotificationOpen: false })),
  toggleNotification: () => set(s => ({ isNotificationOpen: !s.isNotificationOpen, isSidebarOpen: false, isSearchOpen: false })),
  closeAll: () => set({ isSidebarOpen: false, isSearchOpen: false, isNotificationOpen: false }),
}));
