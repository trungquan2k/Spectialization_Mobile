
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);