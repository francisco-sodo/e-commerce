// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2bCfCgizZ4wUgb3lH9rBxqbWftG4s7Is",
  authDomain: "retro-toys.firebaseapp.com",
  projectId: "retro-toys",
  storageBucket: "retro-toys.appspot.com",
  messagingSenderId: "1090722439392",
  appId: "1:1090722439392:web:da1d38a47c232c606b7085"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);