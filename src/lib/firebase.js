import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "first-project-a78c7.firebaseapp.com",
  projectId: "first-project-a78c7",
  storageBucket: "first-project-a78c7.firebasestorage.app",
  messagingSenderId: "267277341039",
  appId: "1:267277341039:web:df128e7b2c573f7f1e189a",
  measurementId: "G-784NNNCT7Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
