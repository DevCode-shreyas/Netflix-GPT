// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjkv0cSOiAHDVdWDb61gVQM2Z5IGusL0c",
  authDomain: "netflixgpt-3a94d.firebaseapp.com",
  projectId: "netflixgpt-3a94d",
  storageBucket: "netflixgpt-3a94d.appspot.com",
  messagingSenderId: "460960983031",
  appId: "1:460960983031:web:e4d22644488e9a0d7270f2",
  measurementId: "G-T98CNL9VTY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
