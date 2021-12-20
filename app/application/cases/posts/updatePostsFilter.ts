import { useBlogStore } from "~/services/stores/blog";

export const useUpdatePostsFilter = () => {
  const { filter, setFilter } = useBlogStore(({ filter, setFilter }) => ({
    filter,
    setFilter,
  }));

  const extractTagName = (tag: string) => tag.replace("#", "");

  const updateFilter = (clickedTag?: string | null) => {
    if (!clickedTag) {
      return;
    }

    const tag = extractTagName(clickedTag);

    if (tag) {
      if (filter.includes(tag)) {
        setFilter(filter.filter((t) => t !== tag));
      } else {
        setFilter([...filter, tag]);
      }
    }
  };

  return { updateFilter, filter };
};
