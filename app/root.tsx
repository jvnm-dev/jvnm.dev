import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "remix";
import type { LinksFunction } from "remix";

import { Header } from "./application/ui/components/common/Header";
import { Container } from "./application/ui/components/common/Container";

import tailwindStylesUrl from "~/styles/tailwind.css";
import backgroundStylesUrl from "~/styles/background.css";
import globalStylesUrl from "~/styles/global.css";
import darkStylesUrl from "~/styles/dark.css";
import { Typography } from "./application/ui/components/common/Typography";

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesUrl },
    { rel: "stylesheet", href: backgroundStylesUrl },
    { rel: "stylesheet", href: globalStylesUrl },
    {
      rel: "stylesheet",
      href: darkStylesUrl,
      media: "(prefers-color-scheme: dark)",
    },
  ];
};

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <Typography>{error.message}</Typography>
          <hr />
          <Typography>
            Hey, developer, you should replace this with what you want your
            users to see.
          </Typography>
        </div>
      </Layout>
    </Document>
  );
}

export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <Typography>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </Typography>
      );
      break;
    case 404:
      message = (
        <Typography>
          Oops! Looks like you tried to visit a page that does not exist.
        </Typography>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  );
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="background">
      <Header />

      <main>{children}</main>

      <footer>
        <Container>
          <h2>
            All rights reserved © Jason Van Malder {new Date().getFullYear()}
          </h2>
        </Container>
      </footer>
    </div>
  );
}
