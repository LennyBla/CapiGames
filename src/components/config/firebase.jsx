// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGRq_PDjgEs8TDfBNAIhDSNSiKZCE1Kjk",
  authDomain: "capigame-a377e.firebaseapp.com",
  projectId: "capigame-a377e",
  storageBucket: "capigame-a377e.appspot.com",
  messagingSenderId: "320833421187",
  appId: "1:320833421187:web:2ae6809b4c9232c74640b6",
  measurementId: "G-XKN8F47FC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth()

export {auth}
export default app