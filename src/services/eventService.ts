import { db } from '../config/firebase';
import { collection, getDocs, query, where, orderBy, limit as fbLimit } from 'firebase/firestore';
interface AppEvent { id: string; title: string; description: string; date: string; time: string; location: string; type: 'workshop' | 'webinar' | 'hackathon' | 'meetup'; thumbnail: string; maxAttendees: number; currentAttendees: number; }
export const getUpcomingEvents = async (eventLimit: number = 10): Promise<AppEvent[]> => {
  try {
    const q = query(collection(db, 'events'), where('date', '>=', new Date().toISOString()), orderBy('date'), fbLimit(eventLimit));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(d => ({ id: d.id, ...d.data() } as AppEvent));
  } catch (error) { console.error('Error fetching events:', error); return []; }
};
export const getPastEvents = async (): Promise<AppEvent[]> => {
  try {
    const q = query(collection(db, 'events'), where('date', '<', new Date().toISOString()), orderBy('date', 'desc'), fbLimit(20));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(d => ({ id: d.id, ...d.data() } as AppEvent));
  } catch (error) { console.error('Error:', error); return []; }
};
