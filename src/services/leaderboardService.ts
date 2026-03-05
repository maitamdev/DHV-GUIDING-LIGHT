import { db } from '../config/firebase';
import { collection, getDocs, query, orderBy, limit as fbLimit } from 'firebase/firestore';
interface LeaderboardEntry { userId: string; name: string; avatar: string; points: number; coursesCompleted: number; rank?: number; }
export const getLeaderboard = async (boardLimit: number = 20): Promise<LeaderboardEntry[]> => {
  try {
    const q = query(collection(db, 'leaderboard'), orderBy('points', 'desc'), fbLimit(boardLimit));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((d, i) => ({ ...d.data(), userId: d.id, rank: i + 1 } as LeaderboardEntry));
  } catch (error) { console.error('Error:', error); return []; }
};
