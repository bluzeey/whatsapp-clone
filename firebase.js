// Import the functions you need from the SDKs you need

import firebase from 'firebase';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa-gDWQ7s0aB5gPkVGzs0V105dy6c6BTY",
  authDomain: "whatsapp-clone-3b640.firebaseapp.com",
  projectId: "whatsapp-clone-3b640",
  storageBucket: "whatsapp-clone-3b640.appspot.com",
  messagingSenderId: "849543519665",
  appId: "1:849543519665:web:1332495733047af2d6b190"
};

// Initialize Firebase
const app =!firebase.apps.length? initializeApp(firebaseConfig):firebase.app();
const db=app.firestore();
const auth=app.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {db,auth,provider}