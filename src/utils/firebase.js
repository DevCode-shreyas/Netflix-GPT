// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8m5Zj23IY8uKnR1M7VOpoIj3KH68opvk",
  authDomain: "netflix-gpt-cf8ba.firebaseapp.com",
  projectId: "netflix-gpt-cf8ba",
  storageBucket: "netflix-gpt-cf8ba.appspot.com",
  messagingSenderId: "254396247939",
  appId: "1:254396247939:web:157a5f17db44736a8e50b6",
  measurementId: "G-6SSZM2JB8Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export const auth = getAuth();
