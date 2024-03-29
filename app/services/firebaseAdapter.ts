import {
  doc,
  onSnapshot,
  collection,
  getDocs,
  addDoc,
  getDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

import cache from "~/lib/cache";

import { getFirestore } from "~/firebase";

const getCollection = async <T>(name: string): Promise<T[]> => {
  const firestore = getFirestore();

  if (!firestore) {
    console.error("Firestore is not initialized");
    return [];
  }

  const cachedData = cache().get<T[]>(name);

  if (cachedData) {
    return cachedData;
  }

  const querySnapshot = await getDocs(collection(firestore, name));

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

const listenToCollection = async <T>(
  name: string,
  callback: (data: T[]) => void
): Promise<() => void> => {
  const firestore = getFirestore();

  if (!firestore) {
    console.error("Firestore is not initialized");
    return () => {};
  }

  return onSnapshot(collection(firestore, name), (querySnapshot) => {
    const data = querySnapshot.docs.map((doc) => {
      const id = doc.id;
      const data = doc.data();

      return {
        id: id,
        ...data,
      } as T;
    });

    callback(data);
  });
};

const addDocument = async <T>(name: string, data: T): Promise<T> => {
  const firestore = getFirestore();

  if (!firestore) {
    console.error("Firestore is not initialized");
  }

  await addDoc(collection(firestore, name), data as Record<string, any>);

  cache().deleteEntry(name);

  return data;
};

const updateDocument = async <T>(
  name: string,
  id: string,
  data: T
): Promise<T> => {
  const firestore = getFirestore();

  if (!firestore) {
    console.error("Firestore is not initialized");
  }

  await updateDoc(doc(firestore, name, id), data as Record<string, any>);

  cache().deleteEntry(name);

  return data;
};

const getDocument = async <T>(collection: string, id: string): Promise<T> => {
  const firestore = getFirestore();

  if (!firestore) {
    console.error("Firestore is not initialized");
  }

  const cachedData = cache().getChildById<T>(collection, id);

  if (cachedData) {
    return cachedData;
  }

  const document = await getDoc(doc(firestore, collection, id));

  const data = {
    ...document.data(),
    id: document.id,
  } as T;

  return data;
};

const deleteDocument = async (
  collection: string,
  id: string
): Promise<void> => {
  const firestore = getFirestore();

  if (!firestore) {
    console.error("Firestore is not initialized");
  }

  await deleteDoc(doc(firestore, collection, id));

  cache().deleteChildById(collection, id);

  return;
};

export {
  getCollection,
  listenToCollection,
  addDocument,
  getDocument,
  deleteDocument,
  updateDocument,
};
