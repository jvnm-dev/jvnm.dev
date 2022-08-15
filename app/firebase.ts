import {
  FirebaseApp,
  getApp as getFirebaseApp,
  getApps,
  initializeApp,
} from "firebase/app";
import {
  getAuth as getFirebaseAuth,
  inMemoryPersistence,
  setPersistence,
} from "firebase/auth";

import { getFirestore as getFirebaseFirestore } from "firebase/firestore";

export const getApp = () => {
  let app: FirebaseApp;

  if (getApps().length === 0) {
    app = initializeApp({
      apiKey: "AIzaSyCWqRy_mfGNqY7d74F68xtUN_rMFwNuTVY",
      authDomain: "jvnm-dev.firebaseapp.com",
      projectId: "jvnm-dev",
      storageBucket: "jvnm-dev.appspot.com",
      messagingSenderId: "226586771735",
      appId: "1:226586771735:web:51d2515b38163fa036b752",
      measurementId: "G-GE5WQVG58R",
    });
  } else {
    app = getFirebaseApp();
  }

  return app;
};

export const getFirestore = () => {
  return getFirebaseFirestore(getApp());
};

export const getAuth = async () => {
  const auth = getFirebaseAuth(getApp());
  await setPersistence(auth, inMemoryPersistence);

  return auth;
};
