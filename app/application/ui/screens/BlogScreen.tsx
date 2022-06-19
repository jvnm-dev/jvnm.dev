import { NoPost } from "~/application/ui/components/blog/NoPost";
import { TagList } from "~/application/ui/components/blog/TagList";
import { Jumbotron } from "~/application/ui/components/blog/Jumbotron";
import { Container } from "~/application/ui/components/common/Container";
import { Typography } from "~/application/ui/components/common/Typography";
import { PostThumbsGrid } from "~/application/ui/components/blog/PostThumbsGrid";

import { Post } from "~/domain/post";

interface IOwnProps {
  posts: Post[];
}

export const BlogScreen = ({ posts }: IOwnProps) => {
  const Posts = posts?.length ? <PostThumbsGrid posts={posts} /> : <NoPost />;

  return (
    <Container>
      <Jumbotron />
      <Typography
        variant="title"
        level={2}
        className="mb-4 dark:text-slate-100"
      >
        Latest Posts
      </Typography>
      <div className="flex mb-4 items-center">
        <Typography
          variant="title"
          level={3}
          className="font-normal dark:text-slate-100"
        >
          Filters
        </Typography>
        <TagList posts={posts} className="ml-4" />
      </div>

      {Posts}
    </Container>
  );
};
