// User-related type definitions

import { Timestamps } from './common';

export type UserRole = 'student' | 'instructor' | 'employer' | 'admin';

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  role: UserRole;
  bio?: string;
  phone?: string;
  location?: string;
  website?: string;
  socialLinks?: SocialLinks;
}

export interface UserData extends UserProfile, Timestamps {
  purchasedCourses: string[];
  completedCourses: string[];
  bookmarkedCourses: string[];
  enrolledAt?: Date | string;
  lastLoginAt?: Date | string;
  isVerified: boolean;
  preferences: UserPreferences;
}

export interface UserPreferences {
  language: string;
  notifications: NotificationPreferences;
  theme: 'light' | 'dark' | 'system';
  emailUpdates: boolean;
}

export interface NotificationPreferences {
  email: boolean;
  push: boolean;
  courseUpdates: boolean;
  promotions: boolean;
  mentorMessages: boolean;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  portfolio?: string;
}

export interface AuthCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface SignupData extends AuthCredentials {
  displayName: string;
  role: UserRole;
  agreeToTerms: boolean;
}
