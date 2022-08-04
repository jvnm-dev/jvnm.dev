import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firebase = initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
});

export const firestore = getFirestore(firebase);

export const getCollection = async <T>(key: string): Promise<T[]> => {
  const querySnapshot = await getDocs(collection(firestore, key));
  return querySnapshot.docs.map((doc) => doc.data() as T);
};
