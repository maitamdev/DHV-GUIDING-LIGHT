export type NotificationType = 'info' | 'success' | 'warning' | 'error' | 'mention' | 'assignment' | 'meeting';
export interface Notification { id: string; type: NotificationType; title: string; message: string; timestamp: string; read: boolean; link?: string; sender?: { name: string; avatar: string; }; }
export interface NotificationPreferences { email: boolean; push: boolean; inApp: boolean; digest: 'none' | 'daily' | 'weekly'; types: Record<NotificationType, boolean>; }
