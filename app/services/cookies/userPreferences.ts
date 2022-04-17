import { createCookie } from "remix";

export const userPreferences = createCookie("userPreferences", {
  httpOnly: true,
  secure: true,
  sameSite: true,
  maxAge: 60 * 60 * 24 * 365 * 100,
});
