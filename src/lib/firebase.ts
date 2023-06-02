// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { get } from "http";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmTSB0gslIsLX3BPO4YWJrDkpcdvwNSm8",
  authDomain: "pinte-mieten.firebaseapp.com",
  projectId: "pinte-mieten",
  storageBucket: "pinte-mieten.appspot.com",
  messagingSenderId: "535602354297",
  appId: "1:535602354297:web:d4ec3bb9d253804d509ca8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

export default app;