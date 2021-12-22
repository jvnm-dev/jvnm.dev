import { getPostTags, Post } from "~/domain/post";

import { useBlogStore } from "~/services/stores/blog";

export const useGetFilteredPosts = () => {
  const { filter } = useBlogStore(({ filter }) => ({
    filter,
  }));

  const getFilteredPosts = (posts: Post[]) => {
    if (!filter?.length && posts?.length) {
      return posts;
    }

    return (
      posts?.filter((post) => {
        const postTags = getPostTags(post);
        return filter.every((tag) => postTags.includes(tag));
      }) ?? []
    );
  };

  return { getFilteredPosts };
};
