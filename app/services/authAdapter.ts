import { redirect, Response, TypedResponse } from "@remix-run/node";
import { signInWithCustomToken } from "firebase/auth";

import { auth } from "~/firebase.server";
import { getAuth } from "~/firebase";

import cache from "~/lib/cache";

import {
  getSession as getSessionCookie,
  commitSession as commitSessionCookie,
  destroySession as destroySessionCookie,
} from "~/services/cookies/auth";

const verifySession = async (request: Request) => {
  const session = await getSessionCookie(request.headers.get("Cookie"));

  if (session.data.session_token) {
    try {
      const result = await auth.verifySessionCookie(session.data.session_token);

      if (result.uid === process.env.BOSS_UID) {
        const customToken = await auth.createCustomToken(result.uid);
        await signInWithCustomToken(await getAuth(), customToken);

        return true;
      }
    } catch (e) {
      return false;
    }
  }

  return false;
};

const checkSession = async (request: Request) => {
  const session = await getSessionCookie(request.headers.get("Cookie"));
  const loggedIn = await verifySession(request);

  if (loggedIn) {
    return new Response(session.data.session_token, {
      status: 200,
    });
  }

  return redirect("/admin");
};

const commitSession = async (request: Request, user: any) => {
  if (user && user.uid === process.env.BOSS_UID) {
    const session = await getSessionCookie(request.headers.get("Cookie"));

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

    return redirect("/admin/dashboard/experiences", {
      headers: {
        "Set-Cookie": await commitSessionCookie(session, {
          expires: new Date(Date.now() + 60 * 60 * 24 * 5 * 1000),
        }),
      },
    });
  }
};

const destroySession = async (
  request: Request
): Promise<TypedResponse<never>> => {
  await (await getAuth()).signOut();

  cache().clear();

  return redirect("/", {
    headers: {
      "Set-Cookie": await destroySessionCookie(
        await getSessionCookie(request.headers.get("Cookie"))
      ),
    },
  });
};

export const useAuth = () => {
  return {
    checkSession,
    verifySession,
    commitSession,
    destroySession,
  };
};
