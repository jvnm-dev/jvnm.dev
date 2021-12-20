import { Post } from "~/domain/post/post";

import { API_ENDPOINTS, authorizedFetch } from "~/services/api";

export type PostsQuery = {
  run: () => Promise<Post[]>;
};

export const usePostsQuery = (): PostsQuery => {
  const fetchPosts = async (): Promise<Post[]> => {
    const posts = await authorizedFetch({
      endpoint: API_ENDPOINTS.posts,
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
