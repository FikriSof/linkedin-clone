import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5wqeEnsI2KZRJZdgCJZ3UeP5Sz-LFonQ",
  authDomain: "linkedin-clone-ae14f.firebaseapp.com",
  projectId: "linkedin-clone-ae14f",
  storageBucket: "linkedin-clone-ae14f.appspot.com",
  messagingSenderId: "337119922003",
  appId: "1:337119922003:web:573f5f032b7dac67a683a6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
