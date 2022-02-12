// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq4r-ithqjDHFVnqYNopx9-LNOhsq74HE",
  authDomain: "beliski.firebaseapp.com",
  projectId: "beliski",
  storageBucket: "beliski.appspot.com",
  messagingSenderId: "58167365956",
  appId: "1:58167365956:web:7cd45984b3b521340f0711",
  measurementId: "G-WSTJVDV9ZZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
