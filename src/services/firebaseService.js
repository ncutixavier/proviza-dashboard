// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJaRnlDpfrMcDIrhQkdt08yUTk9x8XQYk",
  authDomain: "proviza-f3dd9.firebaseapp.com",
  projectId: "proviza-f3dd9",
  storageBucket: "proviza-f3dd9.appspot.com",
  messagingSenderId: "279433271101",
  appId: "1:279433271101:web:95598a4005e3d0e3085754",
  measurementId: "G-PRMH632BG8",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
export const db = getFirestore(firebase);
export default firebase;
