// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5NOAuLJv5oTKxNGnB-jt4jOOVGqLUJFQ",
  authDomain: "fanatics-mern.firebaseapp.com",
  projectId: "fanatics-mern",
  storageBucket: "fanatics-mern.appspot.com",
  messagingSenderId: "931669687967",
  appId: "1:931669687967:web:6c3e30f1760f1551d4acaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;