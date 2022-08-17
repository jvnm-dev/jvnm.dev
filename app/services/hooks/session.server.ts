import { redirect, Response } from "@remix-run/node";
import { signInWithCustomToken } from "firebase/auth";

import { auth } from "~/firebase.server";
import { getAuth } from "~/firebase";
import { commitSession, getSession } from "~/services/cookies/auth";

export const verifySession = async (request: Request) => {
  const session = await getSession(request.headers.get("Cookie"));

  if (session.data.session_token) {
    try {
      const result = await auth.verifySessionCookie(session.data.session_token);

      if (result.uid === process.env.BOSS_UID) {
        return true;
      }
    } catch (e) {
      return false;
    }
  }

  return false;
};

export const useSessionChecker = async (request: Request) => {
  const session = await getSession(request.headers.get("Cookie"));
  const loggedIn = await verifySession(request);

  if (loggedIn) {
    return new Response(session.data.session_token, {
      status: 200,
    });
  }

  return redirect("/admin");
};

export const useSessionCommitter = async (request: Request, user: any) => {
  if (user && user.uid === process.env.BOSS_UID) {
    const session = await getSession(request.headers.get("Cookie"));

    const token = user.stsTokenManager.accessToken;

    await auth.verifyIdToken(token);

    const jwt = await auth.createSessionCookie(
      user.stsTokenManager.accessToken,
      {
        expiresIn: 60 * 60 * 24 * 5 * 1000,
      }
    );

    const customToken = await auth.createCustomToken(user.uid);
    await signInWithCustomToken(await getAuth(), customToken);

    session.set("session_token", jwt);

    return redirect("/admin/dashboard", {
      headers: {
        "Set-Cookie": await commitSession(session, {
          expires: new Date(Date.now() + 60 * 60 * 24 * 5 * 1000),
        }),
      },
    });
  }

  return {};
};
