import dayjs from "dayjs";
import classNames from "classnames";
import { Link } from "remix";
import { FaArrowRight } from "react-icons/fa";

import { Post } from "~/domain/post";

import { Typography } from "~/application/ui/components/common/Typography";

import { firstLetterUpperCase } from "~/lib/string";

interface IOwnProps {
  className?: string;
  post: Post;
}

export const PostThumb = ({ className, post }: IOwnProps) => {
  const linkClasses = [
    className,
    "postThumb",
    "hoverableButton",
    "flex",
    "flex-col",
    "justify-between",
    "cursor-pointer",
    "bg-white",
    "p-6",
    "shadow-lg",
    "rounded-xl",
    "hover:border-indigo-500 border-transparent border-2",
    "transition ease-in-out duration-1000",
    "select-none",
    "dark:bg-slate-900 dark:text-slate-100 dark:shadow-indigo-500/50",
  ];

  return (
    <Link
      to={`/posts/${post.slug}`}
      className={classNames(...linkClasses)}
      prefetch="intent"
    >
      <img src={post.cover_image} alt="" className="cover rounded-xl w-full" />
      <div className="flex justify-between items-center">
        <h2 className="mt-4 font-semibold">
          {firstLetterUpperCase(post.title)}
        </h2>
        <div className="mt-4 details flex w-max rounded-lg text-xs">
          {dayjs(post.published_at).format("MMM DD, YYYY")} —{" "}
          {post.reading_time_minutes} min read
        </div>
      </div>

      <Typography className="description mt-4">{post.description}</Typography>

      <div className="footer flex justify-between">
        <img
          src={post.user.profile_image_90}
          alt={post.user.username}
          className="author w-10 h-10 rounded-full"
        />
        <span className="button px-2 py-2">
          Read more <FaArrowRight className="arrow ml-2" />
        </span>
      </div>
    </Link>
  );
};
