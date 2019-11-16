import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAs2Vsdk2pJnXDAEIB_SFF6HMFLqcm3ldQ",
  authDomain: "junction-a588b.firebaseapp.com",
  databaseURL: "https://junction-a588b.firebaseio.com",
  projectId: "junction-a588b",
  storageBucket: "junction-a588b.appspot.com",
  messagingSenderId: "584444003769",
  appId: "1:584444003769:web:99ed9066c2933b6430e268"
};

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const firestore = firebase.firestore();

export default firebase;
