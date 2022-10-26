// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB1i9NzndWhgI6rqy-SXQSG7H5ApwEqFc",
  authDomain: "router-firebase-assignme-bfdca.firebaseapp.com",
  projectId: "router-firebase-assignme-bfdca",
  storageBucket: "router-firebase-assignme-bfdca.appspot.com",
  messagingSenderId: "337489381607",
  appId: "1:337489381607:web:f4604314e7f2949ef2ba42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default (app);