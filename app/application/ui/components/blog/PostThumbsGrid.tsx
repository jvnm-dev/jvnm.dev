import { Post } from "~/domain/post";

import { PostThumb } from "~/application/ui/components/blog/PostThumb";

interface IOwnProps {
  posts: Post[];
}

export const PostThumbsGrid = ({ posts }: IOwnProps) => {
  return (
    <div className="grid gap-4 grid-cols-3">
      {posts?.map((post) => (
        <PostThumb key={`post-${post.id}-${post.title}`} post={post} />
      ))}
    </div>
  );
};
