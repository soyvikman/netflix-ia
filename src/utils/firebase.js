// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYqyy-B-RB7cefoDPfWhi-IZ1I2m1rtCs",
  authDomain: "netflix-ia.firebaseapp.com",
  projectId: "netflix-ia",
  storageBucket: "netflix-ia.appspot.com",
  messagingSenderId: "148140405742",
  appId: "1:148140405742:web:421df976040c0156aa14ff",
  measurementId: "G-2DS93293J7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
