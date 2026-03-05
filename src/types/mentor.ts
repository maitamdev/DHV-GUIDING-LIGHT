export interface Mentor { id: number; name: string; avatar: string; title: string; bio: string; specializations: string[]; skills: string[]; rating: number; totalMentees: number; experience: number; availability: MentorAvailability[]; socialLinks: SocialLinks; }
export interface MentorAvailability { day: string; startTime: string; endTime: string; }
export interface SocialLinks { github?: string; linkedin?: string; twitter?: string; website?: string; }
export interface MentorMatch { mentor: Mentor; matchScore: number; matchReasons: string[]; }
export interface MentorReview { id: number; menteeId: string; menteeName: string; menteeAvatar: string; rating: number; comment: string; date: string; }
