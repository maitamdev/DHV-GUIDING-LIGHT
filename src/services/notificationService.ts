import { db } from '../config/firebase';
import { collection, doc, getDocs, query, where, orderBy, updateDoc, writeBatch, addDoc } from 'firebase/firestore';
import type { Notification } from '../types/notification';

const NOTIFICATIONS_COLLECTION = 'notifications';

export const getUserNotifications = async (userId: string): Promise<Notification[]> => {
  try {
    const q = query(collection(db, NOTIFICATIONS_COLLECTION), where('userId', '==', userId), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Notification));
  } catch (error) { console.error('Error fetching notifications:', error); return []; }
};

export const markAsRead = async (notificationId: string): Promise<void> => {
  try { await updateDoc(doc(db, NOTIFICATIONS_COLLECTION, notificationId), { isRead: true }); }
  catch (error) { console.error('Error marking read:', error); throw error; }
};

export const markAllAsRead = async (userId: string): Promise<void> => {
  try {
    const q = query(collection(db, NOTIFICATIONS_COLLECTION), where('userId', '==', userId), where('isRead', '==', false));
    const snapshot = await getDocs(q);
    const batch = writeBatch(db);
    snapshot.docs.forEach(d => batch.update(d.ref, { isRead: true }));
    await batch.commit();
  } catch (error) { console.error('Error marking all read:', error); throw error; }
};

export const createNotification = async (notification: Omit<Notification, 'id' | 'createdAt'>): Promise<void> => {
  try { await addDoc(collection(db, NOTIFICATIONS_COLLECTION), { ...notification, createdAt: new Date().toISOString() }); }
  catch (error) { console.error('Error creating notification:', error); throw error; }
};

export const getUnreadCount = async (userId: string): Promise<number> => {
  try {
    const q = query(collection(db, NOTIFICATIONS_COLLECTION), where('userId', '==', userId), where('isRead', '==', false));
    const snapshot = await getDocs(q);
    return snapshot.size;
  } catch (error) { console.error('Error counting unread:', error); return 0; }
};
