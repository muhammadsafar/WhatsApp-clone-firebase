// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCNiLe78ieRuoZmY3pnVbPVMon1EpBlI4",
  authDomain: "whats-app-clone-67f99.firebaseapp.com",
  projectId: "whats-app-clone-67f99",
  storageBucket: "whats-app-clone-67f99.appspot.com",
  messagingSenderId: "869592037168",
  appId: "1:869592037168:web:cc3853fb48d25466b33af5",
  measurementId: "G-83DBH5KKRG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
