//NOT USABLE TILL NOW
//NOT USABLE TILL NOW
//NOT USABLE TILL NOW

import firebase from "firebase/app";
import "firebase/auth";
import { auth, google, facebookk } from "../../Firebase";
/* eslint-disable no-debugger, no-console */
// SIGN UP USING EMAIL + PASSWORD

export function signUp(email, password) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
      console.log(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
      console.log(error.message);
    });
}

export function sign_In(email, password) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
      console.log(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.message);
    });
}

export const sign_In = (e) => {
  e.preventDefault();
  auth
    .signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((user) => {
      console.log(user);
    })
    .catch((err) => {
      console.log(err);
    });
};
export function signOut() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
}
