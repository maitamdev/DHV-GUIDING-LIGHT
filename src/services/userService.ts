import { db } from '../config/firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import type { UserData, UserPreferences } from '../types/user';

const USERS_COLLECTION = 'users';

export const getUserById = async (userId: string): Promise<UserData | null> => {
  try {
    const docSnap = await getDoc(doc(db, USERS_COLLECTION, userId));
    if (docSnap.exists()) return docSnap.data() as UserData;
    return null;
  } catch (error) { console.error('Error fetching user:', error); return null; }
};

export const updateUserProfile = async (userId: string, data: Partial<UserData>): Promise<void> => {
  try { await updateDoc(doc(db, USERS_COLLECTION, userId), { ...data, updatedAt: new Date().toISOString() }); }
  catch (error) { console.error('Error updating user:', error); throw error; }
};

export const updateUserPreferences = async (userId: string, preferences: UserPreferences): Promise<void> => {
  try { await updateDoc(doc(db, USERS_COLLECTION, userId), { preferences, updatedAt: new Date().toISOString() }); }
  catch (error) { console.error('Error updating preferences:', error); throw error; }
};

export const createUserProfile = async (userId: string, data: Omit<UserData, 'createdAt' | 'updatedAt'>): Promise<void> => {
  try { await setDoc(doc(db, USERS_COLLECTION, userId), { ...data, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }); }
  catch (error) { console.error('Error creating user:', error); throw error; }
};

export const addBookmark = async (userId: string, courseId: string): Promise<void> => {
  try {
    const user = await getUserById(userId);
    if (!user) return;
    const bookmarks = [...(user.bookmarkedCourses || [])];
    if (!bookmarks.includes(courseId)) { bookmarks.push(courseId); await updateDoc(doc(db, USERS_COLLECTION, userId), { bookmarkedCourses: bookmarks }); }
  } catch (error) { console.error('Error adding bookmark:', error); throw error; }
};

export const removeBookmark = async (userId: string, courseId: string): Promise<void> => {
  try {
    const user = await getUserById(userId);
    if (!user) return;
    const bookmarks = (user.bookmarkedCourses || []).filter(id => id !== courseId);
    await updateDoc(doc(db, USERS_COLLECTION, userId), { bookmarkedCourses: bookmarks });
  } catch (error) { console.error('Error removing bookmark:', error); throw error; }
};
