// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA9C3DvgFTnfd9bnmFxMAcH5BfclgDZp4",
  authDomain: "react-blog-61b55.firebaseapp.com",
  projectId: "react-blog-61b55",
  storageBucket: "react-blog-61b55.firebasestorage.app",
  messagingSenderId: "51561233203",
  appId: "1:51561233203:web:847fcd711de53969a31c46",
  measurementId: "G-ZHGMTQ941N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);