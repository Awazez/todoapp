// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVZ1xYLkA65aMfsQa3WK-rUyxqZzD3Vdk",
  authDomain: "project-emlh-corp.firebaseapp.com",
  projectId: "project-emlh-corp",
  storageBucket: "project-emlh-corp.appspot.com",
  messagingSenderId: "369051032094",
  appId: "1:369051032094:web:84135190022e0f61e8ec0f",
  measurementId: "G-SEKHREZ2X5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db};