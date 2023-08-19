// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWj7Hr7RKco9E5Zd8sNKVJJ7kGHZFXlPs",
  authDomain: "koop-2023.firebaseapp.com",
  projectId: "koop-2023",
  storageBucket: "koop-2023.appspot.com",
  messagingSenderId: "739267162472",
  appId: "1:739267162472:web:207eef3178c7c536abe6dd",
  measurementId: "G-BME3V1GF4Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
