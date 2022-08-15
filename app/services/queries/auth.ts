import { redirect, TypedResponse } from "@remix-run/node";

import { auth } from "~/services/api";
import { destroySession, getSession } from "~/services/cookies/auth";

export type LogoutQuery = {
  run: () => Promise<TypedResponse<never>>;
};

export const useLogoutQuery = (request: Request): LogoutQuery => {
  const logout = async (): Promise<TypedResponse<never>> => {
    await auth.signOut();

    return redirect("/", {
      headers: {
        "Set-Cookie": await destroySession(
          await getSession(request.headers.get("Cookie"))
        ),
      },
    });
  };

  return {
    run: async (): Promise<TypedResponse<never>> => logout(),
  };
};
