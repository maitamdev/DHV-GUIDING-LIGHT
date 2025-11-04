import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration for DHV GUIDING LIGHT
const firebaseConfig = {
  apiKey: "AIzaSyDbiCs5aSh49RKBD0NHwQrtQ9IQrQ3giY8",
  authDomain: "dhv-guiding-light.firebaseapp.com",
  projectId: "dhv-guiding-light",
  storageBucket: "dhv-guiding-light.firebasestorage.app",
  messagingSenderId: "23265012315",
  appId: "1:23265012315:web:6825768246ee4f3bb26d7e",
  measurementId: "G-65C1XLNKFW"
};

// Initialize Firebase - Prevent duplicate app error
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
