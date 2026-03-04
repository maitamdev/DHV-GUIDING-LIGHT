// Notification type definitions

import { ID, Timestamps } from './common';

export type NotificationType = 'info' | 'success' | 'warning' | 'error';
export type NotificationCategory = 'course' | 'meeting' | 'assignment' | 'system' | 'social';

export interface Notification extends Timestamps {
  id: ID;
  userId: ID;
  title: string;
  message: string;
  type: NotificationType;
  category: NotificationCategory;
  isRead: boolean;
  actionUrl?: string;
  actionLabel?: string;
  metadata?: Record<string, unknown>;
  expiresAt?: Date | string;
}

export interface NotificationGroup {
  date: string;
  notifications: Notification[];
}

export interface NotificationSettings {
  enabled: boolean;
  sound: boolean;
  desktop: boolean;
  email: boolean;
  categories: Record<NotificationCategory, boolean>;
}
