// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmk3gIXDkAXRh1lm6QQbWES26W5W7TGzA",
  authDomain: "ott-authentication.firebaseapp.com",
  projectId: "ott-authentication",
  storageBucket: "ott-authentication.appspot.com",
  messagingSenderId: "488633807625",
  appId: "1:488633807625:web:5571bc654e247c547799d8",
  measurementId: "G-S1VL6D8BDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-undef
// const analytics = firebase.analytics();git init
const auth = getAuth(app);

export { app, auth };