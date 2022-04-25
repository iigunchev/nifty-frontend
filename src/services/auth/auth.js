import { initializeApp } from 'firebase/app';

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail
} from 'firebase/auth';
import { useEffect, useState } from 'react';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

initializeApp(firebaseConfig);

export const auth = getAuth();

export function signInWithGoogle() {
  const GoogleProvider = new GoogleAuthProvider();

  return signInWithPopup(auth, GoogleProvider);
}

export function signInEmailAndPassword(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function signUpEmailAndPassword(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function sendResetEmail(email) {
  return sendPasswordResetEmail(auth, email);
}

export function logOut() {
  return signOut(auth);
}

export function getCurrentUserToken() {
  if (!auth.currentUser) {
    return null;
  }

  return auth.currentUser.getIdToken();
}

export function getCurrentUserEmail() {
  if (!auth.currentUser) {
    return null;
  }

  return auth.currentUser.email;
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  }, []);
  return currentUser;
}
