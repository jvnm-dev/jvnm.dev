import { SetState } from "zustand";

export interface IPrepareStoreParams<T extends object> {
  defaultValue: Omit<T, "reset" | "update">;
}

export interface ICommonStore {
  update: Function;
  reset: () => void;
}

export const prepareStore =
  <T extends object>({ defaultValue }: IPrepareStoreParams<T>) =>
  (set: SetState<T>) => ({
    ...defaultValue,
    update: (data: Partial<T>) => {
      set((state) => ({
        ...state,
        ...data,
      }));
    },
    reset: () => set(defaultValue),
  });

export const getPersistedStore = (storeName: string) => {
  const persistedStore = localStorage.getItem(storeName);

  if (persistedStore) {
    const parsedStore = JSON.parse(persistedStore);

    return parsedStore?.state;
  }
};
