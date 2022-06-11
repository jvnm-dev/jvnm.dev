import { GraphQLClient } from "graphql-request";

interface IFetchParams {
  endpoint: string;
}

export const API_URL = "http://172.20.128.2:8080/";
export const DEV_TO_API_URL = "https://dev.to/api";

export const devToFetch = ({ endpoint }: IFetchParams) => {
  return fetch(`${DEV_TO_API_URL}${endpoint}`, {
    headers: {
      api_key: process?.env?.DEV_TO_API_KEY!,
    },
  });
};

export const DEV_TO_API_ENDPOINTS = {
  posts: "/articles/me/published",
  post: (slug: string) => `/articles/jvnm_dev/${slug}`,
};

export const useAPIClient = () => {
  return new GraphQLClient(`${API_URL}graphql`);
};
