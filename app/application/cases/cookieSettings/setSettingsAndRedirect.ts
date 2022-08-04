import { redirect } from "@remix-run/node";

import { CookieSettings } from "~/domain/cookieSettings";

import { userPreferences } from "~/services/cookies/userPreferences";

export const useSetSettingsAndRedirect = () => {
  const setSettingsAndRedirect = async (request: Request) => {
    const cookieHeader = request.headers.get("Cookie");
    const bodyParams = await request.formData();
    const destination = bodyParams.get("destination")?.toString() ?? "/";

    let cookie: CookieSettings =
      (await userPreferences.parse(cookieHeader)) || {};

    cookie = {
      ...cookie,
      darkModeEnabled: bodyParams.get("darkModeEnabled") === "true",
    };

    return redirect(destination, {
      headers: {
        "Set-Cookie": await userPreferences.serialize(cookie),
      },
    });
  };

  return { setSettingsAndRedirect };
};
