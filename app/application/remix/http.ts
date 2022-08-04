import { redirect } from "@remix-run/node";

export const definedOrRedirect: <T>(
  variable: T | undefined,
  url: string
) => asserts variable is T = (variable, url) => {
  if (typeof variable === "undefined") throw redirect(url);
};
