import { useBlogStore } from "~/services/stores/blog";

export const useUpdatePostsFilter = () => {
  const { filter, update: updateBlogStore } = useBlogStore(
    ({ filter, update }) => ({
      filter,
      update,
    })
  );

  const extractTagName = (tag: string) => tag.replace("#", "");

  const updateFilter = (clickedTag?: string | null) => {
    if (!clickedTag) {
      return;
    }

    const tag = extractTagName(clickedTag);

    if (tag) {
      if (filter.includes(tag)) {
        updateBlogStore({
          filter: filter.filter((t) => t !== tag),
        });
      } else {
        updateBlogStore({
          filter: [...filter, tag],
        });
      }
    }
  };

  return { updateFilter, filter };
};
