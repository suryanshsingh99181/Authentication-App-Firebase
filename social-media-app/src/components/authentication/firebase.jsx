// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZkRTrO5HxRinRETCpNgwKAMow8CpH4HM",
  authDomain: "social-media-app-2015a.firebaseapp.com",
  projectId: "social-media-app-2015a",
  storageBucket: "social-media-app-2015a.firebasestorage.app",
  messagingSenderId: "522185216841",
  appId: "1:522185216841:web:5dc520b8c639cfefe40098",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);

export default app;
