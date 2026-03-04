// Blog-related type definitions

import { ID, Timestamps } from './common';

export interface BlogPost extends Timestamps {
  id: ID;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: BlogAuthor;
  category: string;
  tags: string[];
  readingTime: number;
  views: number;
  likes: number;
  comments: BlogComment[];
  isPublished: boolean;
  publishedAt?: Date | string;
}

export interface BlogAuthor {
  id: ID;
  name: string;
  avatar: string;
  bio?: string;
  role?: string;
}

export interface BlogComment {
  id: ID;
  userId: ID;
  userName: string;
  userAvatar: string;
  content: string;
  createdAt: Date | string;
  likes: number;
  replies?: BlogComment[];
}

export interface BlogCategory {
  id: ID;
  name: string;
  slug: string;
  description?: string;
  postCount: number;
}

export interface BlogFilter {
  category?: string;
  tag?: string;
  search?: string;
  sortBy?: 'newest' | 'popular' | 'trending';
  page?: number;
  limit?: number;
}
