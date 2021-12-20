interface IAuthorizedFetchParams {
  endpoint: string;
}

export const API_URL = "https://dev.to/api";

export const authorizedFetch = ({ endpoint }: IAuthorizedFetchParams) => {
  return fetch(`${API_URL}${endpoint}`, {
    headers: {
      api_key: process.env.DEV_TO_API_KEY!,
    },
  });
};

export const API_ENDPOINTS = {
  posts: "/articles/me/published",
  post: (slug: string) => `/articles/jvnm_dev/${slug}`,
};
