// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG7OlH-SelRdCBDAnRHRzVAX3BZj6foLw",
  authDomain: "weather-937a3.firebaseapp.com",
  projectId: "weather-937a3",
  storageBucket: "weather-937a3.firebasestorage.app",
  messagingSenderId: "17479388326",
  appId: "1:17479388326:web:388dc890af7a3044d1b867",
  measurementId: "G-FXKLXH2WV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Firebase Initialized Successfully");
