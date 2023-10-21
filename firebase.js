// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUIkClHP7DYf1yO8b6_z6EfpD3CQ6s97s",
  authDomain: "yourdrobe-fd89a.firebaseapp.com",
  projectId: "yourdrobe-fd89a",
  storageBucket: "yourdrobe-fd89a.appspot.com",
  messagingSenderId: "877224895321",
  appId: "1:877224895321:web:7495f1e2f054a871fea248",
  measurementId: "G-XNQ53VKLPP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);