import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
const storage = getStorage();
export const uploadFile = async (path: string, file: File): Promise<string> => {
  try { const storageRef = ref(storage, path); await uploadBytes(storageRef, file); return getDownloadURL(storageRef); }
  catch (error) { console.error('Upload error:', error); throw error; }
};
export const deleteFile = async (path: string): Promise<void> => {
  try { await deleteObject(ref(storage, path)); }
  catch (error) { console.error('Delete error:', error); throw error; }
};
export const getFileUrl = async (path: string): Promise<string> => { return getDownloadURL(ref(storage, path)); };
