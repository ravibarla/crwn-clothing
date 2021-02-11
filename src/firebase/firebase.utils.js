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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth; //property we want to store to create actual document
    const createAt = new Date(); //when we made the document
    try {
      await userRef.set({
        //set is the create method
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
