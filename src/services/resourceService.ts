import { db } from '../config/firebase';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
interface Resource { id: string; title: string; description: string; type: 'pdf' | 'video' | 'article' | 'tool'; url: string; category: string; tags: string[]; downloads: number; }
export const getResources = async (category?: string): Promise<Resource[]> => {
  try {
    let q = query(collection(db, 'resources'), orderBy('downloads', 'desc'));
    if (category) q = query(collection(db, 'resources'), where('category', '==', category), orderBy('downloads', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Resource));
  } catch (error) { console.error('Error:', error); return []; }
};
