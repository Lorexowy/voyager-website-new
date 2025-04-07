// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Replace with your app's Firebase project configuration
// Dane te otrzymasz po utworzeniu projektu w Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDVhmtXS4FsCO0Lh2QKkNVx40ZD2KBOdus",
  authDomain: "voyager-website-be34a.firebaseapp.com",
  projectId: "voyager-website-be34a",
  storageBucket: "voyager-website-be34a.firebasestorage.app",
  messagingSenderId: "1041159134894",
  appId: "1:1041159134894:web:298f3d425fd8dc9108973f",
  measurementId: "G-5MPPE57T88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;