import classNames from "classnames";
import { LoaderFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { FaMoon, FaSun } from "react-icons/fa";

import { Theme, useTheme } from "~/services/hooks/theme-provider";

import { Container } from "~/application/ui/components/common/Container";
import { useGetSettingsFromRequest } from "~/application/cases/cookieSettings/getSettingsFromRequest";

export const loader: LoaderFunction = async ({ request }) => {
  const { getSettingsFromRequest } = useGetSettingsFromRequest();
  return getSettingsFromRequest(request);
};

export const Header = () => {
  // const [theme, setTheme] = useTheme();

  const onThemeSwitchClick = () => {
    // setTheme((previousTheme: Theme | null) => {
    //   if (previousTheme === Theme.LIGHT) {
    //     return Theme.DARK;
    //   }
    //   return Theme.LIGHT;
    // });
  };

  return (
    <Container>
      <header className="app-header">
        <Link to="/" prefetch="intent" className="navLink">
          <span className="logo">
            <span className="text-slate-700 dark:text-slate-100">Jason</span>{" "}
            <span className="text--primary">Van Malder</span>
          </span>
        </Link>

        {/* <nav>
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
        </nav> */}
        <div></div>
        {/* <button
          className={classNames(
            "cursor-pointer flex items-center align-center p-2 rounded-full hover:scale-125 transition duration-300 select-none",
            {
              "bg-slate-800 text-white": theme === Theme.LIGHT,
              "bg-slate-100": theme === Theme.DARK,
            }
          )}
          type="submit"
          onClick={onThemeSwitchClick}
        >
          {theme === Theme.DARK ? <FaSun /> : <FaMoon />}
        </button> */}
      </header>
    </Container>
  );
};
