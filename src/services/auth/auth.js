import { initializeApp } from 'firebase/app';

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  deleteUser,
  updateEmail,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
  signInWithRedirect
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

export function signInWithGoogle(isMobile) {
  const GoogleProvider = new GoogleAuthProvider();
  return isMobile
    ? signInWithRedirect(auth, GoogleProvider)
    : signInWithPopup(auth, GoogleProvider);
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
//* GET INFO CURRENT USER

export function getCurrentUserProviderId() {
  if (!auth.currentUser) {
    return null;
  }
  // returns provider (google, password, etc)
  return auth.currentUser.providerData[0].providerId;
}

export function getCurrentUserToken() {
  if (!auth.currentUser) {
    return null;
  }

  return auth.currentUser.getIdToken();
}

export function getCurrentUserFullName() {
  if (!auth.currentUser) {
    return null;
  }

  return auth.currentUser.displayName;
}
//* GET INFO CURRENT USER

//* EDIT INFO USER
export async function reauthenticate(password) {
  try {
    const cred = EmailAuthProvider.credential(auth.currentUser.email, password);
    return reauthenticateWithCredential(auth.currentUser, cred);
  } catch (error) {
    throw Error('Failed fetching resources to API');
  }
}

export function changeCurrentUserEmail(newEmail) {
  if (!auth.currentUser) {
    return null;
  }
  return updateEmail(auth.currentUser, newEmail);
}

//* EDIT INFO USER

export async function deleteCurrentUser() {
  try {
    await deleteUser(auth.currentUser);
  } catch (e) {
    throw Error(e.message);
  }
}
//* Change User Password

export async function changePassword(user, password) {
  try {
    await updatePassword(user, password);
  } catch (e) {
    throw Error(e.message);
  }
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
