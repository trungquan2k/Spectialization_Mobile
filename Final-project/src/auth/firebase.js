import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyApm_o0mEBH0ivvDqzQVh_KGNu_ag1OBzg",
  authDomain: "finalmobileapp-9cdb5.firebaseapp.com",
  projectId: "finalmobileapp-9cdb5",
  storageBucket: "finalmobileapp-9cdb5.appspot.com",
  messagingSenderId: "1037971182807",
  appId: "1:1037971182807:web:7c4c2d896c13ac58258c92",
  measurementId: "G-T19SLKC8JZ"
};


// Initialize Firebase

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };