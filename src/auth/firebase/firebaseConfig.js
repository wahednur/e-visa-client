// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0EwFa41EZaBGvOgW0BxShlGmPDngpKAU",
  authDomain: "assignment-10-9af81.firebaseapp.com",
  projectId: "assignment-10-9af81",
  storageBucket: "assignment-10-9af81.firebasestorage.app",
  messagingSenderId: "509677823838",
  appId: "1:509677823838:web:e8ce1dea02151fcb5291cf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
