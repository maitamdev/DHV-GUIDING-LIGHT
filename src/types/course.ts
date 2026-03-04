// Course-related type definitions

import { ID, Timestamps } from './common';

export type CourseLevel = 'beginner' | 'intermediate' | 'advanced' | 'all-levels';
export type CourseStatus = 'draft' | 'published' | 'archived';

export interface Course extends Timestamps {
  id: ID;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  thumbnail: string;
  previewVideo?: string;
  price: number;
  discountPrice?: number;
  currency: string;
  instructorId: ID;
  instructorName: string;
  instructorAvatar: string;
  category: CourseCategory;
  subcategory?: string;
  tags: string[];
  level: CourseLevel;
  language: string;
  duration: number; // in hours
  totalLessons: number;
  totalStudents: number;
  rating: number;
  totalReviews: number;
  status: CourseStatus;
  requirements: string[];
  learningOutcomes: string[];
  syllabus: CourseSyllabus[];
  isFeatured: boolean;
  isBestseller: boolean;
}

export interface CourseCategory {
  id: ID;
  name: string;
  slug: string;
  icon?: string;
  description?: string;
  courseCount?: number;
}

export interface CourseSyllabus {
  id: ID;
  title: string;
  lessons: CourseLesson[];
  duration: number;
  order: number;
}

export interface CourseLesson {
  id: ID;
  title: string;
  type: 'video' | 'article' | 'quiz' | 'assignment';
  duration: number;
  isPreview: boolean;
  isCompleted?: boolean;
  order: number;
}

export interface CourseReview {
  id: ID;
  userId: ID;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  createdAt: Date | string;
  helpful: number;
}

export interface CourseProgress {
  courseId: ID;
  userId: ID;
  completedLessons: ID[];
  lastAccessedLesson: ID;
  progressPercentage: number;
  startedAt: Date | string;
  completedAt?: Date | string;
}

export interface CourseFilter {
  category?: string;
  level?: CourseLevel;
  priceRange?: [number, number];
  rating?: number;
  duration?: string;
  search?: string;
  sortBy?: 'popular' | 'newest' | 'price-low' | 'price-high' | 'rating';
}
