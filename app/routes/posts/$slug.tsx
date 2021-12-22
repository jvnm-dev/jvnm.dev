import {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
  useCatch,
  useLoaderData,
} from "remix";

import { usePostQuery } from "~/services/queries/post";

import { definedOrRedirect } from "~/application/remix/http";
import { componentCss, link } from "~/application/remix/styling";
import { PostScreen } from "~/application/ui/screens/PostScreen";

import { Post } from "~/domain/post";

import stylesUrl from "~/styles/post.css";
import highlightStylesUrl from "~/styles/highlight.css";

export const links: LinksFunction = componentCss(
  link(stylesUrl),
  link(highlightStylesUrl)
);

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params;
  definedOrRedirect(slug, "/");
  return usePostQuery({ slug }).run();
};

export const meta: MetaFunction = ({ data }) => {
  const post: Post = data;

  return {
    title: `${post?.title} - Jason Van Malder`,
    description: post?.description,
  };
};

const Post = () => {
  const post = useLoaderData<Post>();

  return <PostScreen post={post} />;
};

export default Post;
