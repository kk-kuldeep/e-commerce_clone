import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC4YKDDj6GA-OEwfW3mnE5Fh_um1ExUVcg",
  authDomain: "clone-b64f8.firebaseapp.com",
  projectId: "clone-b64f8",
  storageBucket: "clone-b64f8.appspot.com",
  messagingSenderId: "113737320336",
  appId: "1:113737320336:web:addcc9dc44417bbcee5515",
  measurementId: "G-35Q3XVSTC8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };