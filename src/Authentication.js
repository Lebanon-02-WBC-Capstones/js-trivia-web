import firebase from "firebase/app";
import "firebase/auth";

// Signs-in Friendly Chat.
export function signIn() {
  // Sign into Firebase using popup auth & Google as the identity provider.
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
}

// Signs-out of Friendly Chat.
export function signOut() {
  // Sign out of Firebase.
  firebase.auth().signOut();
}

// Initiate Firebase Auth.
export function initFirebaseAuth() {
  // Listen to auth state changes.
  firebase.auth().onAuthStateChanged(authStateObserver);
}

// Returns the signed-in user's profile pic URL.
export function getProfilePicUrl() {
  return (
    firebase.auth().currentUser.photoURL || "/images/profile_placeholder.png"
  );
}

// Returns the signed-in user's display name.
export function getUserName() {
  return firebase.auth().currentUser.displayName;
}

// Returns true if a user is signed-in.
export function isUserSignedIn() {
  return !!firebase.auth().currentUser;
}
