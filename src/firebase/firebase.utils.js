import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBYLv9g7wL5UDIzxGIX93mNqZDlY9f_wiQ",
  authDomain: "crwn-db-c9a1a.firebaseapp.com",
  projectId: "crwn-db-c9a1a",
  storageBucket: "crwn-db-c9a1a.appspot.com",
  messagingSenderId: "252243940149",
  appId: "1:252243940149:web:58702f344601e2844bf27c",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
