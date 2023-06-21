import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpkAZwNZXjXwee7rduneBccAuam9cr8BM",
  authDomain: "clone-c9602.firebaseapp.com",
  projectId: "clone-c9602",
  storageBucket: "clone-c9602.appspot.com",
  messagingSenderId: "767452752420",
  appId: "1:767452752420:web:971985b365004d5a47c6b1",
  measurementId: "G-MG1VT11BSR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};