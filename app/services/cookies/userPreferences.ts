import { createCookie } from "remix";

export const userPreferences = createCookie("userPreferences", {
  httpOnly: true,
  secure: true,
  sameSite: true,
});
