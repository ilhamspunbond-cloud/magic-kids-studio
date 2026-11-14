// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDskLbpkVrWIZu_yK2Fq5o6B8mxyKSE2Zs",
  authDomain: "magic-kids-studio.firebaseapp.com",
  databaseURL: "https://magic-kids-studio-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "magic-kids-studio",
  storageBucket: "magic-kids-studio.firebasestorage.app",
  messagingSenderId: "131401419576",
  appId: "1:131401419576:web:30778bd5a2ad00ef398fcd",
  measurementId: "G-2LQLMHV1F7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
