import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnDkp_ixmeRPfBGvecGxuvwlKy_4tSQys",
  authDomain: "js-trivia-c6fbd.firebaseapp.com",
  projectId: "js-trivia-c6fbd",
  storageBucket: "js-trivia-c6fbd.appspot.com",
  messagingSenderId: "7498538767",
  appId: "1:7498538767:web:4ed26b90f539690be0e87a",
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export { db };
export default firebase;
