// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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



export function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function parseAuthError(error: any) {
  if (!error.code) {
    return "Unbekannter Fehler";
  }
  switch (error.code) {
    case "auth/invalid-email":
      return "Ungültige E-Mail-Adresse";
    case "auth/user-disabled":
      return "Benutzerkonto wurde deaktiviert";
    case "auth/user-not-found":
      return "Benutzerkonto nicht gefunden";
    case "auth/wrong-password":
      return "Falsches Passwort";
  }
  return "Unbekannter Fehler";
}

export default app;