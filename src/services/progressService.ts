import { db } from '../config/firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
interface LessonProgress { lessonId: string; completed: boolean; completedAt?: string; score?: number; }
interface CourseProgressData { courseId: string; userId: string; lessons: LessonProgress[]; overallProgress: number; startedAt: string; lastAccessedAt: string; }
export const getCourseProgress = async (userId: string, courseId: string): Promise<CourseProgressData | null> => {
  const ref = doc(db, 'progress', userId + '_' + courseId);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() as CourseProgressData : null;
};
export const updateLessonProgress = async (userId: string, courseId: string, lessonId: string, completed: boolean, score?: number): Promise<void> => {
  const ref = doc(db, 'progress', userId + '_' + courseId);
  const snap = await getDoc(ref);
  if (snap.exists()) {
    const data = snap.data() as CourseProgressData;
    const lessons = data.lessons.map(l => l.lessonId === lessonId ? { ...l, completed, completedAt: new Date().toISOString(), score } : l);
    const completedCount = lessons.filter(l => l.completed).length;
    await updateDoc(ref, { lessons, overallProgress: Math.round((completedCount / lessons.length) * 100), lastAccessedAt: new Date().toISOString() });
  } else {
    await setDoc(ref, { courseId, userId, lessons: [{ lessonId, completed, completedAt: new Date().toISOString(), score }], overallProgress: 0, startedAt: new Date().toISOString(), lastAccessedAt: new Date().toISOString() });
  }
};
