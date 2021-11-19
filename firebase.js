import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyCa-gDWQ7s0aB5gPkVGzs0V105dy6c6BTY",
  authDomain: "whatsapp-clone-3b640.firebaseapp.com",
  projectId: "whatsapp-clone-3b640",
  storageBucket: "whatsapp-clone-3b640.appspot.com",
  messagingSenderId: "849543519665",
  appId: "1:849543519665:web:1332495733047af2d6b190"
};

const app =!firebase.apps.length ? firebase.initializeApp(firebaseConfig): firebase.app();
const db=app.firestore();
const auth=app.auth();
const provider= new firebase.auth.GoogleAuthProvider();
export {db, auth, provider}