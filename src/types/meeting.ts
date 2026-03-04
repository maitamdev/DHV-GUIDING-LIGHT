// Meeting-related type definitions

import { ID, Timestamps } from './common';

export type MeetingStatus = 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
export type MeetingType = 'one-on-one' | 'group' | 'workshop';

export interface Meeting extends Timestamps {
  id: ID;
  title: string;
  description: string;
  mentorId: ID;
  mentorName: string;
  menteeId: ID;
  menteeName: string;
  type: MeetingType;
  status: MeetingStatus;
  scheduledAt: Date | string;
  duration: number; // in minutes
  meetingLink?: string;
  roomId: string;
  notes?: string;
  feedback?: MeetingFeedback;
  agenda: string[];
  recordingUrl?: string;
}

export interface MeetingFeedback {
  rating: number;
  comment: string;
  improvements?: string;
  wouldRecommend: boolean;
  submittedAt: Date | string;
}

export interface MeetingSlot {
  id: ID;
  mentorId: ID;
  date: string;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
  isBooked: boolean;
}

export interface MeetingRequest {
  mentorId: ID;
  topic: string;
  message: string;
  preferredDate: string;
  preferredTime: string;
  type: MeetingType;
}
