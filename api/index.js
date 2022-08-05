var __create = Object.create;
var __defProp = Object.defineProperty, __defProps = Object.defineProperties, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropDescs = Object.getOwnPropertyDescriptors, __getOwnPropNames = Object.getOwnPropertyNames, __getOwnPropSymbols = Object.getOwnPropertySymbols, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key3, value) => key3 in obj ? __defProp(obj, key3, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key3] = value, __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b))
      __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  return a;
}, __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b)), __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key3 of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key3) && (copyDefault || key3 !== "default") && __defProp(target, key3, { get: () => module2[key3], enumerable: !(desc = __getOwnPropDesc(module2, key3)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});

// node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_react = require("@remix-run/react");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  Document: () => Document,
  ErrorBoundary: () => ErrorBoundary,
  Layout: () => Layout,
  action: () => action,
  default: () => App,
  links: () => links,
  loader: () => loader
});
var import_react4 = require("@remix-run/react"), import_classnames3 = __toESM(require("classnames"));

// app/application/ui/components/common/Header.tsx
var import_react2 = require("@remix-run/react");

// app/application/ui/components/common/Container.tsx
var import_classnames = __toESM(require("classnames")), Container = ({ children, className }) => /* @__PURE__ */ React.createElement("div", {
  className: (0, import_classnames.default)("app container mx-auto px-20", className)
}, children);

// app/services/cookies/userPreferences.ts
var import_node = require("@remix-run/node"), userPreferences = (0, import_node.createCookie)("userPreferences", {
  httpOnly: !0,
  secure: !0,
  sameSite: !0,
  maxAge: 60 * 60 * 24 * 365 * 100
});

// app/application/cases/cookieSettings/getSettingsFromRequest.ts
var useGetSettingsFromRequest = () => ({ getSettingsFromRequest: async (request) => {
  let cookieHeader = request.headers.get("Cookie");
  return await userPreferences.parse(cookieHeader) || {};
} });

// app/application/ui/components/common/Header.tsx
var Header = () => {
  let onThemeSwitchClick = () => {
  };
  return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement("header", {
    className: "app-header"
  }, /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: "/",
    prefetch: "intent",
    className: "navLink"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "logo"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-slate-700 dark:text-slate-100"
  }, "Jason"), " ", /* @__PURE__ */ React.createElement("span", {
    className: "text--primary"
  }, "Van Malder"))), /* @__PURE__ */ React.createElement("div", null)));
};

// app/application/ui/components/common/Footer.tsx
var import_fa = require("react-icons/fa");
var Footer = () => /* @__PURE__ */ React.createElement("footer", {
  className: "py-10"
}, /* @__PURE__ */ React.createElement(Container, {
  className: "flex flex-col justify-center items-center text-indigo-300"
}, /* @__PURE__ */ React.createElement("h2", null, "All rights reserved \xA9 Jason Van Malder ", new Date().getFullYear()), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
  href: "https://www.instagram.com/jvnm_dev/",
  rel: "noopener noreferrer",
  target: "_blank",
  className: "instagram navLink text-indigo-300"
}, /* @__PURE__ */ React.createElement(import_fa.FaInstagram, null))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
  href: "https://twitter.com/jvnm_dev",
  rel: "noopener noreferrer",
  target: "_blank",
  className: "twitter navLink text-indigo-300"
}, /* @__PURE__ */ React.createElement(import_fa.FaTwitter, null))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
  href: "https://github.com/jvnm-dev",
  rel: "noopener noreferrer",
  target: "_blank",
  className: "github navLink text-indigo-300"
}, /* @__PURE__ */ React.createElement(import_fa.FaGithub, null))))));

// app/application/ui/components/common/Typography.tsx
var import_classnames2 = __toESM(require("classnames")), Typography = ({
  variant = "text",
  className,
  style,
  level,
  children
}) => {
  let textSizeDefined = (className == null ? void 0 : className.includes("text-md")) || (className == null ? void 0 : className.includes("text-lg")) || (className == null ? void 0 : className.includes("text-xl")) || (className == null ? void 0 : className.includes("text-2xl")) || (className == null ? void 0 : className.includes("text-3xl")) || (className == null ? void 0 : className.includes("text-4xl")) || (className == null ? void 0 : className.includes("text-5xl")) || (className == null ? void 0 : className.includes("text-6xl")) || (className == null ? void 0 : className.includes("text-7xl")) || (className == null ? void 0 : className.includes("text-8xl")) || (className == null ? void 0 : className.includes("text-9xl")), fontWeightDefined = className == null ? void 0 : className.includes("font-"), isTitle = ["title", "subtitle"].includes(variant), isText = ["text"].includes(variant), classes = (0, import_classnames2.default)({
    "sm:text-2xl lg:text-3xl xl:text-4xl": isTitle && level === 1 && !textSizeDefined,
    "sm:text-xl lg:text-2xl xl:text-3xl": isTitle && level === 2 && !textSizeDefined,
    "sm:text-lg lg:text-xl xl:text-2xl": isTitle && level === 3 && !textSizeDefined,
    "sm:text-md lg:text-lg xl:text-xl": isTitle && level === 4 && !textSizeDefined,
    "sm:text-sm lg:text-md xl:text-lg": isTitle && level === 5 && !textSizeDefined,
    "sm:text-xs lg:text-sm xl:text-md": (isTitle && level === 6 || isText) && !textSizeDefined,
    "font-semibold": ["semibold"].includes(variant) && !fontWeightDefined,
    "font-bold": ["bold"].includes(variant) && !fontWeightDefined
  }, className);
  if (["title", "subtitle"].includes(variant)) {
    if (level === 1)
      return /* @__PURE__ */ React.createElement("h1", {
        className: classes,
        style
      }, children);
    if (level === 2)
      return /* @__PURE__ */ React.createElement("h2", {
        className: classes,
        style
      }, children);
    if (level === 3)
      return /* @__PURE__ */ React.createElement("h3", {
        className: classes,
        style
      }, children);
    if (level === 4)
      return /* @__PURE__ */ React.createElement("h4", {
        className: classes,
        style
      }, children);
    if (level === 5)
      return /* @__PURE__ */ React.createElement("h5", {
        className: classes,
        style
      }, children);
    if (level === 6)
      return /* @__PURE__ */ React.createElement("h6", {
        className: classes,
        style
      }, children);
  }
  return /* @__PURE__ */ React.createElement("p", {
    className: classes,
    style
  }, children);
};

// app/application/cases/cookieSettings/setSettingsAndRedirect.ts
var import_node2 = require("@remix-run/node");
var useSetSettingsAndRedirect = () => ({ setSettingsAndRedirect: async (request) => {
  var _a;
  let cookieHeader = request.headers.get("Cookie"), bodyParams = await request.formData(), destination = ((_a = bodyParams.get("destination")) == null ? void 0 : _a.toString()) ?? "/", cookie = await userPreferences.parse(cookieHeader) || {};
  return cookie = __spreadProps(__spreadValues({}, cookie), {
    darkModeEnabled: bodyParams.get("darkModeEnabled") === "true"
  }), (0, import_node2.redirect)(destination, {
    headers: {
      "Set-Cookie": await userPreferences.serialize(cookie)
    }
  });
} });

// app/services/hooks/theme-provider.tsx
var import_react3 = require("react");
var ThemeContext = (0, import_react3.createContext)(void 0);
function ThemeProvider({ children }) {
  let [theme, setTheme] = (0, import_react3.useState)("light" /* LIGHT */);
  return /* @__PURE__ */ React.createElement(ThemeContext.Provider, {
    value: [theme, setTheme]
  }, children);
}

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-KK5M6ZK5.css";

// app/styles/global.css
var global_default = "/build/_assets/global-TC3CIVYE.css";

// app/root.tsx
var links = () => [
  {
    rel: "preload",
    href: "/images/background.svg",
    as: "image",
    type: "image/svg+xml"
  },
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: global_default }
];
function App() {
  return /* @__PURE__ */ React.createElement(ThemeProvider, null, /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_react4.Outlet, null))));
}
function ErrorBoundary({ error }) {
  return console.error(error), /* @__PURE__ */ React.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement("h1", null, "There was an error"), /* @__PURE__ */ React.createElement(Typography, null, error.message), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(Typography, null, "Please contact me by", " ", /* @__PURE__ */ React.createElement("a", {
    href: "mailto:jasonvanmalder@gmail.com"
  }, "email")))));
}
function CatchBoundary() {
  let caught = (0, import_react4.useCatch)(), message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React.createElement(Typography, null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ React.createElement(Typography, null, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("h1", null, caught.status, ": ", caught.statusText), message));
}
var loader = async ({ request }) => {
  let { getSettingsFromRequest } = useGetSettingsFromRequest();
  return getSettingsFromRequest(request);
}, action = async ({ request }) => {
  let { setSettingsAndRedirect } = useSetSettingsAndRedirect();
  return setSettingsAndRedirect(request);
}, Document = ({
  children,
  title
}) => {
  let { state } = (0, import_react4.useTransition)();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: (0, import_classnames3.default)({})
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(import_react4.Meta, null), /* @__PURE__ */ React.createElement(import_react4.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: (0, import_classnames3.default)("bg-slate-100 dark:bg-slate-900")
  }, /* @__PURE__ */ React.createElement("div", {
    className: (0, import_classnames3.default)("loading-bar", {
      active: state === "loading"
    })
  }), children, /* @__PURE__ */ React.createElement(import_react4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react4.Scripts, null), /* @__PURE__ */ React.createElement(import_react4.LiveReload, null)));
}, Layout = ({ children }) => /* @__PURE__ */ React.createElement("div", {
  className: "background"
}, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("main", null, children), /* @__PURE__ */ React.createElement(Footer, null));

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default,
  loader: () => loader2,
  meta: () => meta
});
var import_react6 = require("@remix-run/react");

// app/application/ui/components/about/Jumbotron.tsx
var import_react5 = require("react"), import_react_responsive = require("react-responsive");
var Jumbotron = () => {
  let isLargeDevice = (0, import_react_responsive.useMediaQuery)({ minWidth: 1280 }), shouldShowImage = (0, import_react_responsive.useMediaQuery)({ minWidth: 1025 }), [subtitleWidth, setSubtitleWidth] = (0, import_react5.useState)(0);
  return (0, import_react5.useEffect)(() => {
    setSubtitleWidth(isLargeDevice ? 550 : 450);
  }, [isLargeDevice]), /* @__PURE__ */ React.createElement("div", {
    className: "grid gap-4 grid-cols-1 lg:grid-cols-2 my-20"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-center"
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "title",
    level: 1,
    className: "font-bold dark:text-slate-100 text-8xl xl:text-9xl"
  }, "Software Engineer"), /* @__PURE__ */ React.createElement(Typography, {
    variant: "title",
    level: 3,
    className: "mt-8 leading-8 text-gray-500 dark:text-slate-100",
    style: { width: subtitleWidth }
  }, "In consultancy at", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://www.haulogy.net/",
    className: "font-bold text-transparent bg-clip-text bg-gradient-to-br from-haulogy-blue via-haulogy-purple to-haulogy-orange",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Haulogy"), ", a company that offers IT solutions both to Distribution Network Managers and energy suppliers.")), shouldShowImage && /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/about.svg",
    alt: "about",
    className: "h-96"
  })));
};

// app/application/ui/components/about/ProjectsList.tsx
var import_fa2 = require("react-icons/fa");
var ProjectsList = ({ developments }) => /* @__PURE__ */ React.createElement("div", {
  className: "grid grid-cols-1 xl:grid-cols-2 gap-4"
}, developments.map((development) => /* @__PURE__ */ React.createElement("div", {
  key: `${development.name}`,
  className: "mb-4 bg-white bg-opacity-50 rounded-lg shadow-lg hover:bg-opacity-100 transition ease-in-out duration-500 dark:bg-slate-900 dark:text-slate-100 dark:shadow-indigo-500/25"
}, /* @__PURE__ */ React.createElement("div", {
  className: "flex items-center h-full"
}, /* @__PURE__ */ React.createElement("img", {
  src: development.image,
  alt: development.name,
  className: "h-32 lg:h-48 rounded-l-lg shadow-md"
}), /* @__PURE__ */ React.createElement("div", {
  className: "m-4"
}, /* @__PURE__ */ React.createElement(Typography, {
  variant: "title",
  level: 3,
  className: "font-normal mb-4"
}, development.name), /* @__PURE__ */ React.createElement(Typography, {
  variant: "title",
  level: 6,
  className: "font-normal"
}, development.description)), /* @__PURE__ */ React.createElement("div", {
  className: "flex-1 flex flex-col justify-end h-full"
}, /* @__PURE__ */ React.createElement("a", {
  className: "h-full hoverableButton",
  href: development.demoUrl,
  target: "_blank",
  rel: "noopener noreferrer"
}, /* @__PURE__ */ React.createElement("div", {
  className: "h-full"
}, /* @__PURE__ */ React.createElement("span", {
  className: "cursor-pointer button px-4 h-full experience-button"
}, /* @__PURE__ */ React.createElement(import_fa2.FaEye, null)))), /* @__PURE__ */ React.createElement("a", {
  className: "h-full hoverableButton",
  href: development.sourceCodeUrl,
  target: "_blank",
  rel: "noopener noreferrer"
}, /* @__PURE__ */ React.createElement("div", {
  className: "h-full"
}, /* @__PURE__ */ React.createElement("span", {
  className: "cursor-pointer button px-4 h-full experience-button"
}, /* @__PURE__ */ React.createElement(import_fa2.FaCode, null)))))))));

// app/application/ui/components/about/ExperiencesList.tsx
var import_fa3 = require("react-icons/fa");

// app/lib/date.ts
var import_dayjs = __toESM(require("dayjs")), formatDate = (date) => !date || date === "Now" ? "Now" : (0, import_dayjs.default)(date).format("MMM YYYY");

// app/application/ui/components/about/ExperiencesList.tsx
var ExperiencesList = ({ experiences }) => /* @__PURE__ */ React.createElement("div", {
  className: "grid grid-cols-1 lg:grid-cols-2 gap-4"
}, experiences.map((experience) => /* @__PURE__ */ React.createElement("a", {
  key: `${experience.place}`,
  href: experience.url,
  target: "_blank",
  rel: "noopener noreferrer",
  className: "relative mb-4 bg-white bg-opacity-50 rounded-lg shadow-lg hover:bg-opacity-100 transition ease-in-out duration-500 hoverableButton cursor-pointer dark:bg-slate-900 dark:text-slate-100 dark:shadow-indigo-500/25"
}, /* @__PURE__ */ React.createElement("div", {
  className: "flex items-center h-full"
}, /* @__PURE__ */ React.createElement("img", {
  src: experience.image,
  alt: experience.place,
  className: "h-16 rounded-lg shadow-md m-4 dark:shadow-indigo-500/25"
}), /* @__PURE__ */ React.createElement("div", {
  className: "m-4 ml-0"
}, /* @__PURE__ */ React.createElement(Typography, {
  variant: "title",
  level: 3,
  className: "font-normal"
}, experience.role), /* @__PURE__ */ React.createElement(Typography, null, formatDate(experience.dateFrom), " -", " ", formatDate(experience.dateTo))), /* @__PURE__ */ React.createElement("div", {
  className: "flex-1 flex justify-end h-full"
}, /* @__PURE__ */ React.createElement("span", {
  className: "cursor-pointer button px-4 h-full rounded-r-lg experience-button"
}, /* @__PURE__ */ React.createElement(import_fa3.FaArrowRight, null))), experience.isExtiaConsulting && /* @__PURE__ */ React.createElement("div", {
  className: "absolute flex-1 flex bottom-0 left-[50%] bg-gradient-to-br translate-x-[-50%] from-[#ED7003] to-[#EF7E02] rounded-tl-lg rounded-tr-lg text-sm pl-4 pr-4"
}, /* @__PURE__ */ React.createElement("span", {
  className: "text-white"
}, "Extia consulting"))))));

// app/application/ui/screens/AboutScreen.tsx
var AboutScreen = ({ experiences, developments }) => /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Jumbotron, null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Typography, {
  variant: "title",
  level: 2,
  className: "mb-8 text-6xl dark:text-slate-100"
}, "Career"), /* @__PURE__ */ React.createElement(ExperiencesList, {
  experiences
})), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Typography, {
  variant: "title",
  level: 2,
  className: "mt-16 mb-8 text-6xl dark:text-slate-100"
}, "Projects"), /* @__PURE__ */ React.createElement(ProjectsList, {
  developments
})));

// app/services/api.ts
var import_app = require("firebase/app"), import_firestore = require("firebase/firestore"), firebase = (0, import_app.initializeApp)({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID
}), firestore = (0, import_firestore.getFirestore)(firebase), getCollection = async (key3) => (await (0, import_firestore.getDocs)((0, import_firestore.collection)(firestore, key3))).docs.map((doc) => doc.data());

// app/services/queries/experiences.ts
var key = "experiences", useExperiencesQuery = () => {
  let fetchExperiences = async () => getCollection(key);
  return {
    run: async () => fetchExperiences()
  };
};

// app/services/queries/developments.ts
var key2 = "developments", useDevelopmentsQuery = () => {
  let fetchDevelopments = async () => getCollection(key2);
  return {
    run: async () => fetchDevelopments()
  };
};

// app/application/cases/experiences/getSortedExperiences.ts
var import_dayjs2 = __toESM(require("dayjs")), useGetSortedExperiences = () => ({ getSortedExperiences: (experiences) => (experiences == null ? void 0 : experiences.length) ? experiences.sort((a, b) => (0, import_dayjs2.default)(b.dateFrom).diff((0, import_dayjs2.default)(a.dateFrom))) : [] });

// app/routes/index.tsx
var meta = () => ({
  title: "Jason Van Malder",
  description: "A blog about web development, React, and more."
}), loader2 = async () => ({
  experiences: await useExperiencesQuery().run(),
  developments: await useDevelopmentsQuery().run()
}), About = () => {
  let { getSortedExperiences } = useGetSortedExperiences(), { experiences, developments } = (0, import_react6.useLoaderData)(), sortedExperiences = getSortedExperiences(experiences);
  return /* @__PURE__ */ React.createElement(AboutScreen, {
    experiences: sortedExperiences,
    developments
  });
}, routes_default = About;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "b3e851e6", entry: { module: "/build/entry.client-OCUUYPZT.js", imports: ["/build/_shared/chunk-HTGVWHPS.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-TXNWNTVM.js", imports: ["/build/_shared/chunk-S53VHVCM.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-QTCELMEU.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-B3E851E6.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
