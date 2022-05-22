import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAiSwC0SZzNQ9bTzv31N9LYQTLZAXuw05g",
  authDomain: "iproject-7769e.firebaseapp.com",
  projectId: "iproject-7769e",
  storageBucket: "iproject-7769e.appspot.com",
  messagingSenderId: "795899018122",
  appId: "1:795899018122:web:e6b55f70dc5ca3c995a673",
  measurementId: "G-DX9KLJY01G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
