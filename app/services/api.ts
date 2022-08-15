import { collection, getDocs, addDoc } from "firebase/firestore";

import cache from "~/lib/cache";
import { getAuth, getFirestore } from "~/firebase";

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

const addDocument = async <T>(name: string, data: T): Promise<T> => {
  const firestore = getFirestore();

  if (!firestore) {
    console.error("Firestore is not initialized");
  }

  await addDoc(collection(firestore, name), data as Record<string, any>);

  cache().deleteEntry(name);

  return data;
};

export { getCollection, addDocument };
