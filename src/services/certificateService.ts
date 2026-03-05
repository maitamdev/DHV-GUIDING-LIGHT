import { db } from '../config/firebase';
import { collection, getDocs, query, where, addDoc } from 'firebase/firestore';
interface Certificate { id: string; userId: string; courseId: string; courseName: string; issueDate: string; certificateNumber: string; grade: number; }
export const getUserCertificates = async (userId: string): Promise<Certificate[]> => {
  try {
    const q = query(collection(db, 'certificates'), where('userId', '==', userId));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Certificate));
  } catch (error) { console.error('Error fetching certificates:', error); return []; }
};
export const issueCertificate = async (userId: string, courseId: string, courseName: string, grade: number): Promise<string> => {
  const certNumber = 'DHV-' + Date.now().toString(36).toUpperCase();
  const cert = { userId, courseId, courseName, issueDate: new Date().toISOString(), certificateNumber: certNumber, grade };
  const docRef = await addDoc(collection(db, 'certificates'), cert);
  return docRef.id;
};
