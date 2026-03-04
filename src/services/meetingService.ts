import { db } from '../config/firebase';
import { collection, doc, getDoc, getDocs, query, where, addDoc, updateDoc } from 'firebase/firestore';
import type { Meeting, MeetingRequest, MeetingFeedback } from '../types/meeting';
import { generateId } from '../utils/helpers';

const MEETINGS_COLLECTION = 'meetings';

export const createMeeting = async (request: MeetingRequest, mentorName: string, menteeName: string, menteeId: string): Promise<string> => {
  try {
    const meetingData: Omit<Meeting, 'id'> = {
      title: request.topic, description: request.message, mentorId: request.mentorId, mentorName, menteeId, menteeName,
      type: request.type, status: 'scheduled', scheduledAt: `${request.preferredDate}T${request.preferredTime}`,
      duration: 60, roomId: generateId('room'), agenda: [request.topic], createdAt: new Date().toISOString(),
    };
    const docRef = await addDoc(collection(db, MEETINGS_COLLECTION), meetingData);
    return docRef.id;
  } catch (error) { console.error('Error creating meeting:', error); throw error; }
};

export const getUserMeetings = async (userId: string): Promise<Meeting[]> => {
  try {
    const q1 = query(collection(db, MEETINGS_COLLECTION), where('menteeId', '==', userId));
    const snap = await getDocs(q1);
    return snap.docs.map(d => ({ id: d.id, ...d.data() } as Meeting));
  } catch (error) { console.error('Error fetching meetings:', error); return []; }
};

export const updateMeetingStatus = async (meetingId: string, status: Meeting['status']): Promise<void> => {
  try { await updateDoc(doc(db, MEETINGS_COLLECTION, meetingId), { status, updatedAt: new Date().toISOString() }); }
  catch (error) { console.error('Error updating meeting:', error); throw error; }
};

export const submitMeetingFeedback = async (meetingId: string, feedback: MeetingFeedback): Promise<void> => {
  try { await updateDoc(doc(db, MEETINGS_COLLECTION, meetingId), { feedback, status: 'completed', updatedAt: new Date().toISOString() }); }
  catch (error) { console.error('Error submitting feedback:', error); throw error; }
};

export const getMeetingById = async (meetingId: string): Promise<Meeting | null> => {
  try {
    const snap = await getDoc(doc(db, MEETINGS_COLLECTION, meetingId));
    if (snap.exists()) return { id: snap.id, ...snap.data() } as Meeting;
    return null;
  } catch (error) { console.error('Error fetching meeting:', error); return null; }
};
