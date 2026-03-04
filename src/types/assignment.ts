// Assignment-related type definitions

import { ID, Timestamps } from './common';

export type AssignmentStatus = 'pending' | 'submitted' | 'graded' | 'returned';
export type AssignmentType = 'homework' | 'project' | 'quiz' | 'exam';

export interface Assignment extends Timestamps {
  id: ID;
  title: string;
  description: string;
  courseId: ID;
  courseName: string;
  type: AssignmentType;
  dueDate: Date | string;
  maxScore: number;
  attachments: Attachment[];
  instructions: string;
  status: AssignmentStatus;
}

export interface AssignmentSubmission extends Timestamps {
  id: ID;
  assignmentId: ID;
  studentId: ID;
  studentName: string;
  content: string;
  attachments: Attachment[];
  score?: number;
  feedback?: string;
  submittedAt: Date | string;
  gradedAt?: Date | string;
  gradedBy?: ID;
  status: AssignmentStatus;
}

export interface Attachment {
  id: ID;
  name: string;
  url: string;
  type: string;
  size: number;
}

export interface HomeworkReminder {
  id: ID;
  assignmentId: ID;
  title: string;
  dueDate: Date | string;
  courseName: string;
  isCompleted: boolean;
  priority: 'low' | 'medium' | 'high';
}
