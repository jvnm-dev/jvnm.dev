import { getAuth } from "firebase/auth";
import { getApp, getApps, initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, addDoc } from "firebase/firestore";

import cache from "~/lib/cache";

if (getApps().length === 0) {
  initializeApp({
    apiKey: "AIzaSyCWqRy_mfGNqY7d74F68xtUN_rMFwNuTVY",
    authDomain: "jvnm-dev.firebaseapp.com",
    projectId: "jvnm-dev",
  });
}

const auth = getAuth(getApp());
const db = getFirestore(getApp());

const getCollection = async <T>(name: string): Promise<T[]> => {
  const cachedData = cache().get<T[]>(name);

  if (cachedData) {
    return cachedData;
  }

  const querySnapshot = await getDocs(collection(db, name));

  const data = querySnapshot.docs.map((doc) => {
    const id = doc.id;
    const data = doc.data();

    return {
      id: id,
      ...data,
    } as T;
  });

  cache().set<T[]>(name, data);

  return data;
};

const addDocument = async <T>(name: string, data: T): Promise<T> => {
  await addDoc(collection(db, name), data as Record<string, any>);

  cache().deleteEntry(name);

  return data;
};

export { auth, db, getCollection, addDocument };
