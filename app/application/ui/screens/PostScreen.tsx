import { TagList } from "~/application/ui/components/blog/TagList";
import { Container } from "~/application/ui/components/common/Container";
import { useVisitor } from "~/application/cases/visitors/useVisitors";
import { Typography } from "~/application/ui/components/common/Typography";

import { Post } from "~/domain/post";

import { formatDate } from "~/lib/date";

interface IOwnProps {
  post: Post;
}

export const PostScreen = ({ post }: IOwnProps) => {
  useVisitor();

  return (
    <Container>
      <div className="bg-white shadow-lg dark:bg-slate-900 dark:text-slate-100 dark:shadow-indigo-500/50 rounded-lg">
        <img
          className="w-full cover rounded-lg"
          src={post.cover_image}
          alt={post.title}
        />
        <div className="p-6 content rounded-lg">
          <Typography variant="title" level={1} className="text-6xl">
            {post.title}
          </Typography>
          <Typography
            variant="title"
            level={3}
            className="mt-2 text-gray-400 font-normal"
          >
            Published on {formatDate(post.published_at)} by {post.user.name}
          </Typography>

          <TagList posts={[post]} filterable={false} className="mb-4 mt-4" />

          <Typography className="mt-2 mb-2">
            You can also read this article on{" "}
            <a
              href={`https://dev.to/jvnm_dev/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500"
            >
              dev.to
            </a>
            .
          </Typography>

          <div
            className="text-lg"
            dangerouslySetInnerHTML={{ __html: post.body_html ?? "" }}
          />
        </div>
      </div>
    </Container>
  );
};
