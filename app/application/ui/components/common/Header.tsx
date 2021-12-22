import { useEffect } from "react";
import classNames from "classnames";
import { Form, Link, LoaderFunction, useLoaderData, useLocation } from "remix";
import { FaMoon, FaSun } from "react-icons/fa";

import { Container } from "~/application/ui/components/common/Container";

import { userPreferences } from "~/services/cookies/userPreferences";

export const loader: LoaderFunction = async ({ request }) => {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = (await userPreferences.parse(cookieHeader)) || {};

  return { darkModeEnabled: cookie.darkModeEnabled };
};

export const Header = () => {
  const { darkModeEnabled } = useLoaderData();
  const location = useLocation();

  return (
    <Container>
      <header className="app-header">
        <Link to="/" prefetch="intent" className="navLink">
          <span className="logo">
            <span className="text-slate-700 dark:text-slate-100">Jason</span>{" "}
            <span className="text--primary">Van Malder</span>
          </span>
        </Link>

        <nav>
          <ul>
            <li>
              <Link to="/" prefetch="intent" className="navLink select-none">
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                prefetch="intent"
                className="navLink select-none"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
        <Form method="post">
          <input
            type="hidden"
            name="darkModeEnabled"
            value={String(!darkModeEnabled)}
          />
          <input type="hidden" name="destination" value={location.pathname} />
          <button
            className={classNames(
              "cursor-pointer flex items-center align-center p-2 rounded-full hover:scale-125 transition duration-300 select-none",
              {
                "bg-slate-800 text-white": !darkModeEnabled,
                "bg-slate-100": darkModeEnabled,
              }
            )}
            type="submit"
          >
            {darkModeEnabled ? <FaSun /> : <FaMoon />}
          </button>
        </Form>
      </header>
    </Container>
  );
};
