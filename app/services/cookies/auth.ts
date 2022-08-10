import { createCookieSessionStorage } from "@remix-run/node";

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "firebase:auth",
      expires: new Date(Date.now() + 60 * 60 * 24),
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      secure: true,
    },
  });

export { getSession, commitSession, destroySession };
