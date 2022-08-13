import { createCookieSessionStorage } from "@remix-run/node";

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "firebase:auth",
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      secure: true,
      secrets: process.env.SECRET ? [process.env.SECRET] : [],
    },
  });

export { getSession, commitSession, destroySession };
