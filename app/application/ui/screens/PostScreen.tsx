import dayjs from "dayjs";

import { TagList } from "~/application/ui/components/blog/TagList";
import { Container } from "~/application/ui/components/common/Container";
import { Typography } from "~/application/ui/components/common/Typography";

import { Post } from "~/domain/post/post";

interface IOwnProps {
  post: Post;
}

export const PostScreen = ({ post }: IOwnProps) => {
  return (
    <Container>
      <img
        className="rounded-lg w-full shadow-lg cover"
        src={post.cover_image}
        alt={post.title}
      />
      <div className="bg-white shadow-lg rounded-xl p-6 content">
        <Typography variant="title" level={1} className="text-6xl">
          {post.title}
        </Typography>
        <Typography
          variant="title"
          level={3}
          className="mt-2 text-gray-400 font-normal"
        >
          Published on {dayjs(post.published_at).format("MMM DD, YYYY")} by{" "}
          {post.user.name}
        </Typography>

        <TagList posts={[post]} filterable={false} className="mb-4 mt-4" />

        <div
          className="text-lg"
          dangerouslySetInnerHTML={{ __html: post.body_html ?? "" }}
        />
      </div>
    </Container>
  );
};
