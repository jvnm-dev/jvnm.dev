import { createCookie } from "@remix-run/node";

export const userPreferences = createCookie("userPreferences", {
  httpOnly: true,
  secure: true,
  sameSite: true,
  maxAge: 60 * 60 * 24 * 365 * 100,
  secrets: process.env.SECRET ? [process.env.SECRET] : [],
});
