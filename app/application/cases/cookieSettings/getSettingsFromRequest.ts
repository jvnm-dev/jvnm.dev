import { CookieSettings } from "~/domain/cookieSettings";
import { userPreferences } from "~/services/cookies/userPreferences";

export const useGetSettingsFromRequest = () => {
  const getSettingsFromRequest = async (
    request: Request
  ): Promise<CookieSettings> => {
    const cookieHeader = request.headers.get("Cookie");
    return (await userPreferences.parse(cookieHeader)) || {};
  };

  return { getSettingsFromRequest };
};
