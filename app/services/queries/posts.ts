import { Post } from "~/domain/post";

import { DEV_TO_API_ENDPOINTS, devToFetch } from "~/services/api";

export type PostsQuery = {
  run: () => Promise<Post[]>;
};

export const usePostsQuery = (): PostsQuery => {
  const fetchPosts = async (): Promise<Post[]> => {
    const posts = await devToFetch({
      endpoint: DEV_TO_API_ENDPOINTS.posts,
    });

    if (!posts.ok) {
      throw new Error(
        `Failed to fetch posts: ${posts.statusText} (${posts.status})`
      );
    }

    return posts.json();
  };

  return {
    run: async (): Promise<Post[]> => fetchPosts(),
  };
};
