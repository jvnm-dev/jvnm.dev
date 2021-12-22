import { Post } from "~/domain/post";

import { DEV_TO_API_ENDPOINTS, devToFetch } from "~/services/api";

export type PostQuery = {
  run: () => Promise<Post>;
};

type Params = {
  slug: string;
};

export const usePostQuery = ({ slug }: Params): PostQuery => {
  const fetchPost = async (): Promise<Post> => {
    const post = await devToFetch({
      endpoint: DEV_TO_API_ENDPOINTS.post(slug),
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
