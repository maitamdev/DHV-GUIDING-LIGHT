import { create } from 'zustand';
import type { Notification } from '../types/notification';

interface NotificationStore {
  notifications: Notification[]; unreadCount: number;
  setNotifications: (notifications: Notification[]) => void;
  markAsRead: (id: string | number) => void; markAllAsRead: () => void;
  addNotification: (notification: Notification) => void;
  removeNotification: (id: string | number) => void;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [], unreadCount: 0,
  setNotifications: (notifications) => set({ notifications, unreadCount: notifications.filter(n => !n.read).length }),
  markAsRead: (id) => set(s => {
    const notifications = s.notifications.map(n => n.id === id ? { ...n, read: true } : n);
    return { notifications, unreadCount: notifications.filter(n => !n.read).length };
  }),
  markAllAsRead: () => set(s => ({ notifications: s.notifications.map(n => ({ ...n, read: true })), unreadCount: 0 })),
  addNotification: (notification) => set(s => ({ notifications: [notification, ...s.notifications], unreadCount: s.unreadCount + (notification.read ? 0 : 1) })),
  removeNotification: (id) => set(s => {
    const n = s.notifications.find(n => n.id === id);
    const notifications = s.notifications.filter(n => n.id !== id);
    return { notifications, unreadCount: s.unreadCount - (n && !n.read ? 1 : 0) };
  }),
}));
