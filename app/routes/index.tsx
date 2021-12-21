import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData } from "remix";

import { Post } from "~/domain/post/post";

import { usePostsQuery } from "~/services/queries/posts";

import { HomeScreen } from "~/application/ui/screens/HomeScreen";
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

  return <HomeScreen posts={filteredPost} />;
};

export default Index;
