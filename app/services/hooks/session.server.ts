import { auth } from "firebase-admin";
import { redirect, Response } from "@remix-run/node";
import { commitSession, getSession } from "~/services/cookies/auth";

export const useSessionChecker = async (request: Request) => {
  const session = await getSession(request.headers.get("Cookie"));

  if (session.data.access_token) {
    try {
      const result = await auth().verifyIdToken(session.data.access_token);

      if (result.uid === process.env.BOSS_UID) {
        return new Response(session.data.access_token, {
          status: 200,
        });
      }
    } catch (e) {
      redirect("/admin");
    }
  }

  return redirect("/admin");
};

export const useSessionCommitter = async (request: Request, user: any) => {
  if (user && user.uid === process.env.BOSS_UID) {
    const session = await getSession(request.headers.get("Cookie"));
    session.set("access_token", user.stsTokenManager.accessToken);

    return redirect("/admin/dashboard", {
      headers: {
        "Set-Cookie": await commitSession(session, {
          expires: new Date(Date.now() + 60 * 60 * 24),
        }),
      },
    });
  }

  return {};
};
