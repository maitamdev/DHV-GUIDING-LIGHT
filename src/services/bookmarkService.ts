import { db } from '../config/firebase';
import { collection, getDocs, query, where, addDoc, deleteDoc, doc } from 'firebase/firestore';
interface Bookmark { id: string; userId: string; itemId: string; itemType: 'course' | 'blog' | 'resource'; title: string; thumbnail: string; createdAt: string; }
export const getUserBookmarks = async (userId: string): Promise<Bookmark[]> => {
  try {
    const q = query(collection(db, 'bookmarks'), where('userId', '==', userId));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Bookmark));
  } catch (error) { console.error('Error:', error); return []; }
};
export const addBookmark = async (userId: string, itemId: string, itemType: Bookmark['itemType'], title: string, thumbnail: string): Promise<void> => {
  await addDoc(collection(db, 'bookmarks'), { userId, itemId, itemType, title, thumbnail, createdAt: new Date().toISOString() });
};
export const removeBookmark = async (bookmarkId: string): Promise<void> => {
  await deleteDoc(doc(db, 'bookmarks', bookmarkId));
};
