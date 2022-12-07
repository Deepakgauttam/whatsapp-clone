import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC7WiRAPg2TP2PKgWypaLqtNkeF82LGe-o",
  authDomain: "whatsapp-new-clone-b5cdc.firebaseapp.com",
  projectId: "whatsapp-new-clone-b5cdc",
  storageBucket: "whatsapp-new-clone-b5cdc.appspot.com",
  messagingSenderId: "808035760384",
  appId: "1:808035760384:web:01bd011d82701a25cd5be5",
};
// Initialize Firebase
//this special line of code connects everything
const firebaseapp = firebase.initializeApp(firebaseConfig);

// this is for database connection
const db = firebaseapp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
