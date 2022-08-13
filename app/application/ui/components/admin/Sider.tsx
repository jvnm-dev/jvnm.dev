import { Form, Link, useLocation } from "@remix-run/react";

const EXPERIENCES_PATH = "/admin/dashboard";
const DEVELOPMENTS_PATH = "/admin/dashboard/developments";

const Sider = () => {
  const activeClassName = "text-blue-700 rounded bg-blue-50";
  const notActiveClassName =
    "text-gray-500 rounded hover:bg-gray-50 hover:text-gray-700 ";

  const location = useLocation();
  const pathname = location.pathname;

  const isExperiencesActive = pathname === EXPERIENCES_PATH;
  const isDevelopmentsActive = pathname === DEVELOPMENTS_PATH;

  return (
    <div className="flex flex-col justify-between w-16 h-screen bg-white border-r sticky top-0 left-0 z-10">
      <div>
        <div className="inline-flex items-center justify-center w-16 h-16">
          <img src="/favicon.ico" className="block w-10 h-10 rounded-lg" />
        </div>

        <div className="border-t border-gray-100">
          <nav className="flex flex-col p-2">
            <ul>
              <li>
                <Link
                  to={EXPERIENCES_PATH}
                  className={`${
                    isExperiencesActive ? activeClassName : notActiveClassName
                  } flex justify-center px-2 py-1.5 relative group`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                  <span className="absolute z-10 text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 -translate-x-96 rounded group-hover:translate-x-0">
                    Experiences
                  </span>
                </Link>
              </li>

              <li className="mt-2">
                <Link
                  to={DEVELOPMENTS_PATH}
                  className={`${
                    isDevelopmentsActive ? activeClassName : notActiveClassName
                  } flex justify-center px-2 py-1.5 relative group`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>

                  <span className="absolute z-10 text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 -translate-x-96 rounded group-hover:translate-x-0">
                    Developments
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="sticky inset-x-0 bottom-0 p-2 bg-white border-t border-gray-100">
        <Form method="post">
          <input type="hidden" name="action" value="logout" />

          <button
            type="submit"
            className="flex justify-center w-full px-2 py-1.5 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 group relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>

            <span className="absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100">
              Logout
            </span>
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Sider;
