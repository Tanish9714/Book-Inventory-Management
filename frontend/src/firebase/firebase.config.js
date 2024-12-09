// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrwuPuGdFc8Vi5xCWS-wyKIXX_SnYF6qw",
  authDomain: "mern-book-inventory-909d8.firebaseapp.com",
  projectId: "mern-book-inventory-909d8",
  storageBucket: "mern-book-inventory-909d8.appspot.com",
  messagingSenderId: "467220276602",
  appId: "1:467220276602:web:31a7d32a7379545ee462c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;