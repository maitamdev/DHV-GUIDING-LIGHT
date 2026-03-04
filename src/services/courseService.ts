import { db } from '../config/firebase';
import { collection, doc, getDoc, getDocs, query, where, orderBy, limit, addDoc, updateDoc, increment } from 'firebase/firestore';
import type { Course, CourseFilter, CourseReview } from '../types/course';

const COURSES_COLLECTION = 'courses';
const REVIEWS_COLLECTION = 'reviews';

export const getCourses = async (filter?: CourseFilter): Promise<Course[]> => {
  try {
    let q = query(collection(db, COURSES_COLLECTION));
    if (filter?.category) q = query(q, where('category.slug', '==', filter.category));
    if (filter?.level) q = query(q, where('level', '==', filter.level));
    if (filter?.rating) q = query(q, where('rating', '>=', filter.rating));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Course));
  } catch (error) { console.error('Error fetching courses:', error); return []; }
};

export const getCourseById = async (courseId: string): Promise<Course | null> => {
  try {
    const docRef = doc(db, COURSES_COLLECTION, courseId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) return { id: docSnap.id, ...docSnap.data() } as Course;
    return null;
  } catch (error) { console.error('Error fetching course:', error); return null; }
};

export const getPopularCourses = async (count: number = 6): Promise<Course[]> => {
  try {
    const q = query(collection(db, COURSES_COLLECTION), orderBy('totalStudents', 'desc'), limit(count));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Course));
  } catch (error) { console.error('Error fetching popular courses:', error); return []; }
};

export const addCourseReview = async (courseId: string, review: Omit<CourseReview, 'id'>): Promise<void> => {
  try {
    await addDoc(collection(db, REVIEWS_COLLECTION), { ...review, courseId, createdAt: new Date().toISOString() });
    await updateDoc(doc(db, COURSES_COLLECTION, courseId), { totalReviews: increment(1) });
  } catch (error) { console.error('Error adding review:', error); throw error; }
};

export const searchCourses = async (searchQuery: string): Promise<Course[]> => {
  try {
    const snapshot = await getDocs(collection(db, COURSES_COLLECTION));
    const courses = snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Course));
    const lowerQuery = searchQuery.toLowerCase();
    return courses.filter(c => c.title.toLowerCase().includes(lowerQuery) || c.description.toLowerCase().includes(lowerQuery) || c.tags.some(t => t.toLowerCase().includes(lowerQuery)));
  } catch (error) { console.error('Error searching courses:', error); return []; }
};
