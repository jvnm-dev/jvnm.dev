import { redirect } from "remix";

export const definedOrRedirect: <T>(
  variable: T | undefined,
  url: string
) => asserts variable is T = (variable, url) => {
  if (typeof variable === "undefined") throw redirect(url);
};
