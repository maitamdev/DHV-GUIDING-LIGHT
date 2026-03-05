export type EventType = 'workshop' | 'webinar' | 'hackathon' | 'meetup' | 'conference';
export interface AppEvent { id: string; title: string; description: string; date: string; startTime: string; endTime: string; location: string; isOnline: boolean; type: EventType; thumbnail: string; organizer: string; maxAttendees: number; currentAttendees: number; tags: string[]; registrationUrl?: string; }
export interface EventRegistration { userId: string; eventId: string; registeredAt: string; status: 'confirmed' | 'waitlisted' | 'cancelled'; }
