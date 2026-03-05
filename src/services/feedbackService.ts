import { db } from '../config/firebase';
import { collection, addDoc, getDocs, query, orderBy, limit as fbLimit } from 'firebase/firestore';
interface Feedback { id?: string; userId: string; rating: number; message: string; page: string; createdAt: string; }
export const submitFeedback = async (userId: string, rating: number, message: string, page: string): Promise<void> => {
  await addDoc(collection(db, 'feedback'), { userId, rating, message, page, createdAt: new Date().toISOString() });
};
export const getFeedback = async (feedbackLimit: number = 50): Promise<Feedback[]> => {
  const q = query(collection(db, 'feedback'), orderBy('createdAt', 'desc'), fbLimit(feedbackLimit));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Feedback));
};
