import type {
  ActionFunction,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useTransition,
} from "@remix-run/react";
import classNames from "classnames";

import { Container } from "~/application/ui/components/common/Container";
import { Typography } from "~/application/ui/components/common/Typography";
import { useGetSettingsFromRequest } from "~/application/cases/cookieSettings/getSettingsFromRequest";
import { useSetSettingsAndRedirect } from "~/application/cases/cookieSettings/setSettingsAndRedirect";

import { ThemeProvider } from "~/services/hooks/theme-provider";

import tailwindStylesUrl from "~/styles/tailwind.css";
import globalStylesUrl from "~/styles/global.css";

export let links: LinksFunction = () => {
  return [
    {
      rel: "preload",
      href: "/images/background.svg",
      as: "image",
      type: "image/svg+xml",
    },
    { rel: "stylesheet", href: tailwindStylesUrl },
    { rel: "stylesheet", href: globalStylesUrl },
  ];
};

export default function App() {
  return (
    <ThemeProvider>
      <Document>
        <Layout>
          <Outlet />
        </Layout>
      </Document>
    </ThemeProvider>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return (
    <Document title="Error!">
      <Layout>
        <Container>
          <h1>There was an error</h1>
          <Typography>{error.message}</Typography>
          <hr />
          <Typography>
            Please contact me by{" "}
            <a href="mailto:jasonvanmalder@gmail.com">email</a>
          </Typography>
        </Container>
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

export const loader: LoaderFunction = async ({ request }) => {
  const { getSettingsFromRequest } = useGetSettingsFromRequest();
  return getSettingsFromRequest(request);
};

export const action: ActionFunction = async ({ request }) => {
  const { setSettingsAndRedirect } = useSetSettingsAndRedirect();
  return setSettingsAndRedirect(request);
};

export const Document = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  // const [theme] = useTheme();
  const { state } = useTransition();

  return (
    <html
      lang="en"
      className={classNames({
        // dark: theme === Theme.DARK,
      })}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body className={classNames("bg-slate-100 dark:bg-slate-900")}>
        <div
          className={classNames("loading-bar", {
            active: state === "loading",
          })}
        />
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="background min-h-screen">
      <main>{children}</main>
    </div>
  );
};
