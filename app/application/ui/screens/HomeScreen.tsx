import { NoPost } from "~/application/ui/components/blog/NoPost";
import { TagList } from "~/application/ui/components/blog/TagList";
import { Container } from "~/application/ui/components/common/Container";
import { Typography } from "~/application/ui/components/common/Typography";
import { PostThumbsGrid } from "~/application/ui/components/blog/PostThumbsGrid";

import { Post } from "~/domain/post/post";

interface IOwnProps {
  posts: Post[];
}

export const HomeScreen = ({ posts }: IOwnProps) => {
  const Posts = posts?.length ? <PostThumbsGrid posts={posts} /> : <NoPost />;

  return (
    <Container>
      <div className="grid gap-4 grid-cols-2 my-20">
        <div className="flex flex-col justify-center">
          <Typography variant="title" level={1}>
            Welcome to my blog!
          </Typography>
          <Typography
            variant="title"
            level={2}
            className="mt-8"
            style={{ width: 500 }}
          >
            Learn and stay tuned about web development, React, and more.
          </Typography>
          <Typography
            variant="title"
            level={2}
            className="mt-8 text-indigo-300"
          >
            Find my latests posts below.
          </Typography>
        </div>
        <div className="flex justify-center items-center">
          <img src="/images/blog.svg" alt="welcome" style={{ width: 500 }} />
        </div>
      </div>
      <Typography variant="title" level={2} className="mb-4">
        Lastest Posts
      </Typography>
      <div className="flex mb-4 items-center">
        <Typography variant="title" level={3} className="font-normal">
          Filters
        </Typography>
        <TagList posts={posts} className="ml-4" />
      </div>

      {Posts}
    </Container>
  );
};
