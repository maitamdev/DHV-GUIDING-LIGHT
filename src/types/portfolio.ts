// Portfolio-related type definitions

import { ID, Timestamps } from './common';

export interface Portfolio extends Timestamps {
  userId: ID;
  name: string;
  title: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  website: string;
  profileImage: string;
  stats: PortfolioStats;
  completedCourses: CompletedCourse[];
  projects: Project[];
  skills: Skill[];
  certificates: Certificate[];
}

export interface PortfolioStats {
  coursesCompleted: number;
  projectsBuilt: number;
  certificatesEarned: number;
  totalHours: number;
  skillsMastered: number;
}

export interface CompletedCourse {
  id: ID;
  title: string;
  completedDate: string;
  grade: number;
  certificate: string;
}

export interface Project {
  id: ID;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubLink: string;
  liveLink: string | null;
  completedDate: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Certificate {
  id: ID;
  title: string;
  issueDate: string;
  credentialId: string;
  image: string;
}
