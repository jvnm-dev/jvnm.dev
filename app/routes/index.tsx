import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData } from "remix";

import { Post } from "~/domain/post";

import { usePostsQuery } from "~/services/queries/posts";

import { BlogScreen } from "~/application/ui/screens/BlogScreen";
import { useGetFilteredPosts } from "~/application/cases/posts/getFilteredPosts";

export let meta: MetaFunction = () => ({
  title: "Jason Van Malder",
  description: "A blog about web development, React, and more.",
});

export let loader: LoaderFunction = async () => usePostsQuery().run();

const Index = () => {
  const { getFilteredPosts } = useGetFilteredPosts();
  const posts = useLoaderData<Post[]>();
  const filteredPost = getFilteredPosts(posts);

  return <BlogScreen posts={filteredPost} />;
};

export default Index;
