// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpOCKRVyaAr_JIh0ZQ1SI1jNb4GQck2b4",
  authDomain: "jahan-production.firebaseapp.com",
  projectId: "jahan-production",
  storageBucket: "jahan-production.appspot.com",
  messagingSenderId: "752911826329",
  appId: "1:752911826329:web:ed57ccfb5abca389702708"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;