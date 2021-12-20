import { redirect } from "remix";

export function definedOrRedirect<T>(
  variable: T | undefined,
  url: string
): asserts variable is T {
  if (typeof variable === "undefined") throw redirect(url);
}
