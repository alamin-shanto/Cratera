// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdIbTOeEwbKnvpYcPUsgHneIwo3NeRyZ0",
  authDomain: "cratera-395d4.firebaseapp.com",
  projectId: "cratera-395d4",
  storageBucket: "cratera-395d4.firebasestorage.app",
  messagingSenderId: "1016830678438",
  appId: "1:1016830678438:web:3bbd4006818df27a9d2b67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;