// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK8u0c1cSg4sI92arl5bfQ-z1ruAa8Kss",
  authDomain: "rpg-6fb.firebaseapp.com",
  projectId: "rpg-6fb",
  storageBucket: "rpg-6fb.appspot.com",
  messagingSenderId: "361294805019",
  appId: "1:361294805019:web:38846566c66fb25d59e0be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
