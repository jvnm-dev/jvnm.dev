import { Post } from "~/domain/post/post";

import { API_ENDPOINTS, authorizedFetch } from "~/services/api";

export type PostQuery = {
  run: () => Promise<Post>;
};

type Params = {
  slug: string;
};

export const usePostQuery = ({ slug }: Params): PostQuery => {
  const fetchPost = async (): Promise<Post> => {
    const post = await authorizedFetch({
      endpoint: API_ENDPOINTS.post(slug),
    });

    if (!post.ok) {
      throw new Error(
        `Failed to fetch post: ${post.statusText} (${post.status})`
      );
    }

    return post.json();
  };

  return {
    run: async (): Promise<Post> => fetchPost(),
  };
};
