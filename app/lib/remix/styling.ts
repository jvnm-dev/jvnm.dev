// https://github.com/antoinechalifour/remix-playground/blob/master/app/application/remix/styling.ts

import type { LinkDescriptor, LinksFunction } from "@remix-run/node";

export const link = (href: string): LinkDescriptor => ({
  rel: "stylesheet",
  href,
});

export const componentCss =
  (...descriptors: LinkDescriptor[]): LinksFunction =>
  () =>
    descriptors;
