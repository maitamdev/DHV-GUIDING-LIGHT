// Mentor-related type definitions - extracted from data/mentors.ts

import { ID } from './common';

export interface TimeSlot {
  day: string;
  time: string;
  available: boolean;
}

export interface WorkExperience {
  position: string;
  company: string;
  duration: string;
  achievements: string[];
}

export interface Achievement {
  title: string;
  year: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface MentorTestimonial {
  studentName: string;
  feedback: string;
  outcome: string;
}

export interface MentoringSupport {
  mode: string;
  maxMentees: number;
  availability: string;
  responsibilities: string[];
}

export interface Mentor {
  id: ID;
  name: string;
  title: string;
  specialty: string;
  image: string;
  rating: number;
  students: number;
  courses: number;
  experience: string;
  bio: string;
  company: string;
  skills: string[];
  softSkills?: string[];
  email: string;
  linkedin: string;
  github: string;
  website?: string;
  availability: TimeSlot[];
  workExperience?: WorkExperience[];
  achievements?: Achievement[];
  certifications?: Certification[];
  mentoringPhilosophy: string;
  mentoringAreas?: string[];
  mentoringSupport?: MentoringSupport;
  testimonials?: MentorTestimonial[];
}

export interface MenteeRequest {
  skills: string;
  interests: string;
  goals: string;
  experience: string;
  preferredFields: string;
}

export interface AIRecommendation {
  mentorId: number;
  mentor: Mentor;
  matchScore: number;
  reasoning: string;
  suggestedTopics: string[];
  learningPath: string[];
}

export interface AIResponse {
  analysis: string;
  recommendations: AIRecommendation[];
  careerAdvice: string;
  nextSteps: string[];
}
