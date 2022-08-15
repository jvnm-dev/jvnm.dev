import { createCookieSessionStorage } from "@remix-run/node";

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      path: "/",
      secrets: process.env.SECRET ? [process.env.SECRET] : [],
    },
  });

export { getSession, commitSession, destroySession };
