import {
  ActionFunction,
  Links,
  LiveReload,
  LoaderFunction,
  Meta,
  Outlet,
  redirect,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
  useTransition,
} from "remix";
import type { LinksFunction } from "remix";
import classNames from "classnames";

import { Header } from "~/application/ui/components/common/Header";
import { Footer } from "~/application/ui/components/common/Footer";
import { Container } from "~/application/ui/components/common/Container";
import { Typography } from "~/application/ui/components/common/Typography";

import { userPreferences } from "~/services/cookies/userPreferences";

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
        <Container>
          <h1>There was an error</h1>
          <Typography>{error.message}</Typography>
          <hr />
          <Typography>
            Hey, developer, you should replace this with what you want your
            users to see.
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
  const cookieHeader = request.headers.get("Cookie");
  const cookie = (await userPreferences.parse(cookieHeader)) || {};

  return { darkModeEnabled: cookie.darkModeEnabled };
};

export const action: ActionFunction = async ({ request }) => {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = (await userPreferences.parse(cookieHeader)) || {};
  const bodyParams = await request.formData();

  cookie.darkModeEnabled = Boolean(
    bodyParams.get("darkModeEnabled") === "true"
  );

  return redirect(bodyParams.get("destination")?.toString() ?? "/", {
    headers: {
      "Set-Cookie": await userPreferences.serialize(cookie),
    },
  });
};

export const Document = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  const { darkModeEnabled } = useLoaderData();
  const { state } = useTransition();

  return (
    <html
      lang="en"
      className={classNames({
        dark: darkModeEnabled,
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
    <div className="background">
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
};
