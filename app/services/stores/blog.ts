import { devtools } from "zustand/middleware";
import create, { GetState, SetState, StoreApi } from "zustand";

type BlogState = {
  filter: string[];
  setFilter: (filter: string[]) => void;
};

export const useBlogStore = create<
  BlogState,
  SetState<BlogState>,
  GetState<BlogState>,
  StoreApi<BlogState>
>(
  devtools((set) => ({
    filter: [],
    setFilter: (filter: string[]) => set((state) => ({ ...state, filter })),
  }))
);
