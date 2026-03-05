export type AssignmentStatus = 'pending' | 'submitted' | 'graded' | 'late' | 'resubmit';
export interface Assignment { id: string; courseId: string; title: string; description: string; dueDate: string; maxScore: number; attachments: string[]; }
export interface Submission { id: string; assignmentId: string; userId: string; content: string; attachments: string[]; submittedAt: string; status: AssignmentStatus; score?: number; feedback?: string; gradedAt?: string; }
