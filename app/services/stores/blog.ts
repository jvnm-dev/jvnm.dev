import create from "zustand";
import { devtools } from "zustand/middleware";

import { ICommonStore, prepareStore } from "~/services/stores/common";

type BlogState = ICommonStore & {
  filter: string[];
};

const defaultValue = {
  filter: [],
};

const name = "jvnm.dev-blog";
const store = prepareStore<BlogState>({ defaultValue });

export const useBlogStore = create<BlogState>(
  devtools(store, {
    name,
  })
);
