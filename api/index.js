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
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key3 of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key3) && (copyDefault || key3 !== "default") && __defProp(target, key3, { get: () => module2[key3], enumerable: !(desc = __getOwnPropDesc(module2, key3)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// app/firebase-service-account.json
var require_firebase_service_account = __commonJS({
  "app/firebase-service-account.json"(exports, module2) {
    module2.exports = {
      type: "service_account",
      project_id: "jvnm-dev",
      client_email: "firebase-adminsdk-u04xd@jvnm-dev.iam.gserviceaccount.com",
      client_id: "117699038615477054389",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-u04xd%40jvnm-dev.iam.gserviceaccount.com"
    };
  }
});

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
var import_firebase_admin = __toESM(require("firebase-admin")), import_app = require("firebase/app"), import_server = require("react-dom/server"), import_react = require("@remix-run/react"), serviceAccount = require_firebase_service_account();
serviceAccount.private_key_id = process.env.FIREBASE_PRIVATE_KEY_ID;
serviceAccount.private_key = process.env.FIREBASE_PRIVATE_KEY;
(0, import_app.getApps)().length === 0 && import_firebase_admin.default.initializeApp({
  credential: import_firebase_admin.default.credential.cert(serviceAccount)
});
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
var import_react3 = require("@remix-run/react"), import_classnames3 = __toESM(require("classnames"));

// app/application/ui/components/common/Container.tsx
var import_classnames = __toESM(require("classnames")), Container = ({ children, className }) => /* @__PURE__ */ React.createElement("div", {
  className: (0, import_classnames.default)("app container mx-auto px-20", className)
}, children);

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

// app/services/cookies/userPreferences.ts
var import_node = require("@remix-run/node"), userPreferences = (0, import_node.createCookie)("userPreferences", {
  httpOnly: !0,
  secure: !0,
  sameSite: !0,
  maxAge: 60 * 60 * 24 * 365 * 100,
  secrets: process.env.SECRET ? [process.env.SECRET] : []
});

// app/application/cases/cookieSettings/getSettingsFromRequest.ts
var useGetSettingsFromRequest = () => ({ getSettingsFromRequest: async (request) => {
  let cookieHeader = request.headers.get("Cookie");
  return await userPreferences.parse(cookieHeader) || {};
} });

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
var import_react2 = require("react");
var ThemeContext = (0, import_react2.createContext)(void 0);
function ThemeProvider({ children }) {
  let [theme, setTheme] = (0, import_react2.useState)("light" /* LIGHT */);
  return /* @__PURE__ */ React.createElement(ThemeContext.Provider, {
    value: [theme, setTheme]
  }, children);
}

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-Q4Q47XO2.css";

// app/styles/global.css
var global_default = "/build/_assets/global-P6EFPTIT.css";

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
  return /* @__PURE__ */ React.createElement(ThemeProvider, null, /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_react3.Outlet, null))));
}
function ErrorBoundary({ error }) {
  return console.error(error), /* @__PURE__ */ React.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement("h1", null, "There was an error"), /* @__PURE__ */ React.createElement(Typography, null, error.message), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(Typography, null, "Please contact me by", " ", /* @__PURE__ */ React.createElement("a", {
    href: "mailto:jasonvanmalder@gmail.com"
  }, "email")))));
}
function CatchBoundary() {
  let caught = (0, import_react3.useCatch)(), message;
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
  let { state } = (0, import_react3.useTransition)();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: (0, import_classnames3.default)({})
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(import_react3.Meta, null), /* @__PURE__ */ React.createElement(import_react3.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: (0, import_classnames3.default)("bg-slate-100 dark:bg-slate-900")
  }, /* @__PURE__ */ React.createElement("div", {
    className: (0, import_classnames3.default)("loading-bar", {
      active: state === "loading"
    })
  }), children, /* @__PURE__ */ React.createElement(import_react3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react3.Scripts, null), /* @__PURE__ */ React.createElement(import_react3.LiveReload, null)));
}, Layout = ({ children }) => /* @__PURE__ */ React.createElement("div", {
  className: "background min-h-screen"
}, /* @__PURE__ */ React.createElement("main", null, children));

// app/routes/admin/dashboard/experiences/add.tsx
var add_exports = {};
__export(add_exports, {
  action: () => action2,
  default: () => add_default,
  loader: () => loader2,
  meta: () => meta
});
var import_fa = require("react-icons/fa"), import_react5 = require("@remix-run/react");

// app/services/queries/auth.ts
var import_node4 = require("@remix-run/node");

// app/services/api.ts
var import_auth = require("firebase/auth"), import_app2 = require("firebase/app"), import_firestore = require("firebase/firestore");

// app/lib/cache.ts
var Cache = class {
  constructor() {
    this.entries = /* @__PURE__ */ new Map();
    this.expirationEntries = /* @__PURE__ */ new Map();
  }
  get(key3) {
    if (this.expirationEntries.has(key3) && (this.expirationEntries.get(key3) ?? 0) < Date.now()) {
      this.deleteEntry(key3);
      return;
    }
    return this.entries.get(key3);
  }
  set(key3, value) {
    this.entries.set(key3, value), this.expirationEntries.set(key3, Date.now() + 1e3 * 60 * 15);
  }
  has(key3) {
    return this.entries.has(key3);
  }
  deleteEntry(key3) {
    this.entries.delete(key3);
  }
  clear() {
    this.entries.clear();
  }
}, cache_default = () => {
  let extendedGlobal = global;
  return extendedGlobal.cache || (extendedGlobal.cache = new Cache()), extendedGlobal.cache;
};

// app/services/api.ts
(0, import_app2.getApps)().length === 0 && (0, import_app2.initializeApp)({
  apiKey: "AIzaSyCWqRy_mfGNqY7d74F68xtUN_rMFwNuTVY",
  authDomain: "jvnm-dev.firebaseapp.com",
  projectId: "jvnm-dev",
  storageBucket: "jvnm-dev.appspot.com",
  messagingSenderId: "226586771735",
  appId: "1:226586771735:web:51d2515b38163fa036b752",
  measurementId: "G-GE5WQVG58R"
});
var auth = (0, import_auth.getAuth)((0, import_app2.getApp)()), db = (0, import_firestore.getFirestore)((0, import_app2.getApp)()), getCollection = async (name) => {
  let cachedData = cache_default().get(name);
  if (cachedData)
    return cachedData;
  let data = (await (0, import_firestore.getDocs)((0, import_firestore.collection)(db, name))).docs.map((doc) => {
    let id = doc.id, data2 = doc.data();
    return __spreadValues({
      id
    }, data2);
  });
  return cache_default().set(name, data), data;
}, addDocument = async (name, data) => (await (0, import_firestore.addDoc)((0, import_firestore.collection)(db, name), data), cache_default().deleteEntry(name), data);

// app/services/cookies/auth.ts
var import_node3 = require("@remix-run/node"), { getSession, commitSession, destroySession } = (0, import_node3.createCookieSessionStorage)({
  cookie: {
    name: "firebase:auth",
    httpOnly: !0,
    maxAge: 60 * 60 * 24,
    secure: !0,
    secrets: process.env.SECRET ? [process.env.SECRET] : []
  }
});

// app/services/queries/auth.ts
var useLogoutQuery = (request) => {
  let logout = async () => (await auth.signOut(), (0, import_node4.redirect)("/", {
    headers: {
      "Set-Cookie": await destroySession(await getSession(request.headers.get("Cookie")))
    }
  }));
  return {
    run: async () => logout()
  };
};

// app/services/hooks/session.server.ts
var import_firebase_admin2 = require("firebase-admin"), import_node5 = require("@remix-run/node");
var verifySession = async (request) => {
  let session = await getSession(request.headers.get("Cookie"));
  if (session.data.access_token)
    try {
      if ((await (0, import_firebase_admin2.auth)().verifySessionCookie(session.data.access_token)).uid === process.env.BOSS_UID)
        return !0;
    } catch {
      return !1;
    }
  return !1;
}, useSessionChecker = async (request) => {
  let session = await getSession(request.headers.get("Cookie"));
  return await verifySession(request) ? new import_node5.Response(session.data.access_token, {
    status: 200
  }) : (0, import_node5.redirect)("/admin");
}, useSessionCommitter = async (request, user) => {
  if (user && user.uid === process.env.BOSS_UID) {
    let session = await getSession(request.headers.get("Cookie")), token = await (0, import_firebase_admin2.auth)().createSessionCookie(user.stsTokenManager.accessToken, {
      expiresIn: 60 * 60 * 24 * 5 * 1e3
    });
    return session.set("access_token", token), (0, import_node5.redirect)("/admin/dashboard", {
      headers: {
        "Set-Cookie": await commitSession(session, {
          expires: new Date(Date.now() + 60 * 60 * 24)
        })
      }
    });
  }
  return {};
};

// app/services/queries/experiences.ts
var import_node6 = require("@remix-run/node");

// app/lib/form.ts
var serializeFormData = (formData) => Object.fromEntries(formData);

// app/services/queries/experiences.ts
var key = "experiences", useExperiencesQuery = () => {
  let fetchExperiences = async () => getCollection(key);
  return {
    run: async () => fetchExperiences()
  };
}, useAddExperienceQuery = () => {
  let addExperience = async (formData) => {
    formData.delete("action");
    let experience = serializeFormData(formData);
    return await addDocument(key, experience), (0, import_node6.redirect)("/admin/dashboard");
  };
  return {
    run: async (formData) => addExperience(formData)
  };
};

// app/application/ui/components/admin/Sider.tsx
var import_react4 = require("@remix-run/react"), EXPERIENCES_PATH = "/admin/dashboard", DEVELOPMENTS_PATH = "/admin/dashboard/developments", Sider = () => {
  let activeClassName = "text-blue-700 rounded bg-blue-50", notActiveClassName = "text-gray-500 rounded hover:bg-gray-50 hover:text-gray-700 ", pathname = (0, import_react4.useLocation)().pathname, isExperiencesActive = pathname === EXPERIENCES_PATH, isDevelopmentsActive = pathname === DEVELOPMENTS_PATH;
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-between w-16 h-screen bg-white border-r sticky top-0 left-0 z-10"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "inline-flex items-center justify-center w-16 h-16"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/favicon.ico",
    className: "block w-10 h-10 rounded-lg"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "border-t border-gray-100"
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "flex flex-col p-2"
  }, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react4.Link, {
    to: EXPERIENCES_PATH,
    className: `${isExperiencesActive ? activeClassName : notActiveClassName} flex justify-center px-2 py-1.5 relative group`
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "w-5 h-5 opacity-75",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  })), /* @__PURE__ */ React.createElement("span", {
    className: "absolute z-10 text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 -translate-x-96 rounded group-hover:translate-x-0"
  }, "Experiences"))), /* @__PURE__ */ React.createElement("li", {
    className: "mt-2"
  }, /* @__PURE__ */ React.createElement(import_react4.Link, {
    to: DEVELOPMENTS_PATH,
    className: `${isDevelopmentsActive ? activeClassName : notActiveClassName} flex justify-center px-2 py-1.5 relative group`
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "w-5 h-5 opacity-75",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
  })), /* @__PURE__ */ React.createElement("span", {
    className: "absolute z-10 text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 -translate-x-96 rounded group-hover:translate-x-0"
  }, "Developments"))))))), /* @__PURE__ */ React.createElement("div", {
    className: "sticky inset-x-0 bottom-0 p-2 bg-white border-t border-gray-100"
  }, /* @__PURE__ */ React.createElement(import_react4.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "action",
    value: "logout"
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "flex justify-center w-full px-2 py-1.5 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 group relative"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "w-5 h-5 opacity-75",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
  })), /* @__PURE__ */ React.createElement("span", {
    className: "absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100"
  }, "Logout")))));
}, Sider_default = Sider;

// app/lib/file.ts
var toBase64 = (file) => new Promise((resolve, reject) => {
  let reader = new FileReader();
  reader.readAsDataURL(file), reader.onload = () => {
    var _a;
    return resolve((_a = reader.result) == null ? void 0 : _a.toString());
  }, reader.onerror = (error) => reject(error);
});

// app/routes/admin/dashboard/experiences/add.tsx
var import_react6 = require("react"), meta = () => ({
  title: "Jason Van Malder",
  description: "25yo, software engineer and student by night."
});
async function action2({ request }) {
  let formData = await request.formData(), { run: logout } = useLogoutQuery(request), { run: addExperience } = useAddExperienceQuery();
  switch (formData.get("action")) {
    case "addExperience":
      return await addExperience(formData);
    case "logout":
      return await logout();
  }
}
async function loader2({ request }) {
  let session = await useSessionChecker(request);
  if (session.status === 302)
    return session;
  let experiences = await useExperiencesQuery().run();
  return { session, experiences };
}
var AddExperience = () => {
  let [file, setFile] = (0, import_react6.useState)("");
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement(Sider_default, null), /* @__PURE__ */ React.createElement("div", {
    className: "flex-1 p-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mb-6 flex justify-between"
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "title",
    level: 1,
    className: "font-bold"
  }, "Add a new experience")), /* @__PURE__ */ React.createElement(import_react5.Form, {
    method: "post",
    encType: "multipart/form-data",
    className: "w-1/2"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "action",
    value: "addExperience"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mb-6"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "place",
    className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
  }, "Place"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "place",
    name: "place",
    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    placeholder: "Google",
    required: !0
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-6"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "role",
    className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
  }, "Role"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "role",
    name: "role",
    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    placeholder: "Software Engineer",
    required: !0
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-6"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "url",
    className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
  }, "URL"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "url",
    name: "url",
    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    placeholder: "https://google.com",
    required: !0
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-6"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "dateFrom",
    className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
  }, "Start date"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "dateFrom",
    name: "dateFrom",
    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    placeholder: "Sep 2022",
    required: !0
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-6"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "dateTo",
    className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
  }, "End date"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "dateTo",
    name: "dateTo",
    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    placeholder: "Sep 2023",
    required: !0
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-6"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "image",
    className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
  }, "Image"), /* @__PURE__ */ React.createElement("input", {
    type: "file",
    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    placeholder: "Sep 2023",
    required: !0,
    onChange: async (e) => {
      var _a;
      let fileCandidate = (_a = e.target.files) == null ? void 0 : _a[0];
      if (fileCandidate) {
        let b64 = await toBase64(fileCandidate);
        setFile(b64 ?? "");
      }
    }
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    id: "image",
    name: "image",
    value: file
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-start mb-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center h-5"
  }, /* @__PURE__ */ React.createElement("input", {
    id: "isExtiaConsulting",
    name: "isExtiaConsulting",
    type: "checkbox",
    className: "w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
  })), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "isExtiaConsulting",
    className: "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
  }, "Extia consulting")), /* @__PURE__ */ React.createElement("button", {
    className: "hoverableButton"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", {
    className: "cursor-pointer button p-2"
  }, /* @__PURE__ */ React.createElement(import_fa.FaPaperPlane, {
    className: "mr-2"
  }), " Submit"))))));
}, add_default = AddExperience;

// app/routes/admin/dashboard/developments.tsx
var developments_exports = {};
__export(developments_exports, {
  action: () => action3,
  default: () => developments_default,
  loader: () => loader3,
  meta: () => meta2
});
var meta2 = () => ({
  title: "Jason Van Malder",
  description: "25yo, software engineer and student by night."
});
async function action3({ request }) {
  let formData = await request.formData(), { run: logout } = useLogoutQuery(request);
  switch (formData.get("action")) {
    case "logout":
      return await logout();
  }
}
async function loader3({ request }) {
  return useSessionChecker(request);
}
var AdminDevelopments = () => /* @__PURE__ */ React.createElement(Sider_default, null), developments_default = AdminDevelopments;

// app/routes/admin/dashboard/index.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  action: () => action4,
  default: () => dashboard_default,
  loader: () => loader4,
  meta: () => meta3
});
var import_fa2 = require("react-icons/fa"), import_react7 = require("@remix-run/react");

// app/lib/date.ts
var import_dayjs = __toESM(require("dayjs")), formatDate = (date) => !date || date === "Now" ? "Now" : (0, import_dayjs.default)(date).format("MMM YYYY");

// app/routes/admin/dashboard/index.tsx
var meta3 = () => ({
  title: "Jason Van Malder",
  description: "25yo, software engineer and student by night."
});
async function action4({ request }) {
  let formData = await request.formData(), { run: logout } = useLogoutQuery(request);
  switch (formData.get("action")) {
    case "logout":
      return await logout();
  }
}
async function loader4({ request }) {
  let session = await useSessionChecker(request);
  if (session.status === 302)
    return session;
  let experiences = await useExperiencesQuery().run();
  return { session, experiences };
}
var AdminDashboard = () => {
  let { experiences } = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement(Sider_default, null), /* @__PURE__ */ React.createElement("div", {
    className: "flex-1 p-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mb-6 flex justify-between align-middle"
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "title",
    level: 1,
    className: "font-bold"
  }, "Experiences"), /* @__PURE__ */ React.createElement(import_react7.Link, {
    to: "/admin/dashboard/experiences/add",
    className: "hoverableButton"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", {
    className: "cursor-pointer button p-2"
  }, /* @__PURE__ */ React.createElement(import_fa2.FaPlus, {
    className: "mr-2"
  }), " Add a new experience")))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 gap-1 w-full"
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
  }, "Edit")), experience.isExtiaConsulting && /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex-1 flex bottom-0 left-[50%] bg-gradient-to-br translate-x-[-50%] from-[#ED7003] to-[#EF7E02] rounded-tl-lg rounded-tr-lg text-sm pl-4 pr-4"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-white"
  }, "Extia consulting"))))))));
}, dashboard_default = AdminDashboard;

// app/routes/admin/index.tsx
var admin_exports = {};
__export(admin_exports, {
  action: () => action5,
  default: () => admin_default,
  loader: () => loader5,
  meta: () => meta4
});
var import_node7 = require("@remix-run/node"), import_auth7 = require("firebase/auth");
var import_react8 = require("@remix-run/react");
var meta4 = () => ({
  title: "Jason Van Malder",
  description: "25yo, software engineer and student by night."
});
async function loader5({ request }) {
  return await verifySession(request) ? (0, import_node7.redirect)("/admin/dashboard") : null;
}
async function action5({ request }) {
  let data = await request.formData(), user = JSON.parse(data.get("user"));
  return useSessionCommitter(request, user);
}
var Admin = () => {
  let submit = (0, import_react8.useSubmit)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-lg mx-auto"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl font-bold text-center text-indigo-600 sm:text-3xl"
  }, "Hello, boss."), /* @__PURE__ */ React.createElement("p", {
    className: "max-w-md mx-auto mt-4 text-center text-gray-500"
  }, "Please sign in to confirm your identity."), /* @__PURE__ */ React.createElement("div", {
    className: "bg-white p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
  }, /* @__PURE__ */ React.createElement("span", {
    onClick: async () => {
      let provider = new import_auth7.GoogleAuthProvider(), { user } = await (0, import_auth7.signInWithPopup)(auth, provider);
      if (user) {
        let formData = new FormData();
        formData.set("user", JSON.stringify(user)), submit(formData, { method: "post" });
      }
    },
    className: "block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg text-center cursor-pointer"
  }, "Sign in with Google"), /* @__PURE__ */ React.createElement("p", {
    className: "text-sm text-center text-gray-500"
  }, "You are not the boss? Then what are you doing here? \u{1F914}"))));
}, admin_default = Admin;

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default,
  loader: () => loader6,
  meta: () => meta5
});
var import_react11 = require("@remix-run/react");

// app/application/ui/components/common/Header.tsx
var import_react9 = require("@remix-run/react");
var Header = () => {
  let onThemeSwitchClick = () => {
  };
  return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement("header", {
    className: "app-header"
  }, /* @__PURE__ */ React.createElement(import_react9.Link, {
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
var import_fa3 = require("react-icons/fa");
var Footer = () => /* @__PURE__ */ React.createElement("footer", {
  className: "py-10"
}, /* @__PURE__ */ React.createElement(Container, {
  className: "flex flex-col justify-center items-center text-indigo-300"
}, /* @__PURE__ */ React.createElement("h2", null, "All rights reserved \xA9 Jason Van Malder ", new Date().getFullYear()), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
  href: "https://www.instagram.com/jvnm_dev/",
  rel: "noopener noreferrer",
  target: "_blank",
  className: "instagram navLink text-indigo-300"
}, /* @__PURE__ */ React.createElement(import_fa3.FaInstagram, null))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
  href: "https://twitter.com/jvnm_dev",
  rel: "noopener noreferrer",
  target: "_blank",
  className: "twitter navLink text-indigo-300"
}, /* @__PURE__ */ React.createElement(import_fa3.FaTwitter, null))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
  href: "https://github.com/jvnm-dev",
  rel: "noopener noreferrer",
  target: "_blank",
  className: "github navLink text-indigo-300"
}, /* @__PURE__ */ React.createElement(import_fa3.FaGithub, null))))));

// app/application/ui/components/about/Jumbotron.tsx
var import_react10 = require("react"), import_react_responsive = require("react-responsive");
var Jumbotron = () => {
  let isLargeDevice = (0, import_react_responsive.useMediaQuery)({ minWidth: 1280 }), shouldShowImage = (0, import_react_responsive.useMediaQuery)({ minWidth: 1025 }), [subtitleWidth, setSubtitleWidth] = (0, import_react10.useState)(0);
  return (0, import_react10.useEffect)(() => {
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
  }, "Haulogy"), ", a company that offers IT solutions both to Distribution Network Managers and energy suppliers."), /* @__PURE__ */ React.createElement(Typography, {
    variant: "title",
    level: 3,
    className: "mt-8 leading-8 text-gray-500 dark:text-slate-100",
    style: { width: subtitleWidth }
  }, "Also studying Computer Sciences at", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://web.umons.ac.be/fr/",
    className: "font-bold text-transparent bg-clip-text bg-gradient-to-br from-umons-red to-umons-red2",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "UMons"), ", to validate my skills and knowledge.")), shouldShowImage && /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/about.svg",
    alt: "about",
    style: { height: "90%" }
  })));
};

// app/application/ui/components/about/ProjectsList.tsx
var import_fa4 = require("react-icons/fa");
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
}, /* @__PURE__ */ React.createElement(import_fa4.FaEye, null)))), /* @__PURE__ */ React.createElement("a", {
  className: "h-full hoverableButton",
  href: development.sourceCodeUrl,
  target: "_blank",
  rel: "noopener noreferrer"
}, /* @__PURE__ */ React.createElement("div", {
  className: "h-full"
}, /* @__PURE__ */ React.createElement("span", {
  className: "cursor-pointer button px-4 h-full experience-button"
}, /* @__PURE__ */ React.createElement(import_fa4.FaCode, null)))))))));

// app/application/ui/components/about/ExperiencesList.tsx
var import_fa5 = require("react-icons/fa");
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
}, /* @__PURE__ */ React.createElement(import_fa5.FaArrowRight, null))), experience.isExtiaConsulting && /* @__PURE__ */ React.createElement("div", {
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
var import_react12 = require("react"), meta5 = () => ({
  title: "Jason Van Malder",
  description: "25yo, software engineer and student by night."
}), loader6 = async () => ({
  experiences: await useExperiencesQuery().run(),
  developments: await useDevelopmentsQuery().run()
}), About = () => {
  let { getSortedExperiences } = useGetSortedExperiences(), { experiences, developments } = (0, import_react11.useLoaderData)(), sortedExperiences = getSortedExperiences(experiences), [keys, setKeys] = (0, import_react12.useState)([]);
  return (0, import_react12.useEffect)(() => (window.onkeydown = (e) => {
    e.key.toLowerCase() === "t" || e.key.toLowerCase() === "e" || e.key.toLowerCase() === "k" ? setKeys([...keys, e.key.toLowerCase()]) : setKeys([]);
  }, () => {
    window.onkeydown = null, window.onkeyup = null;
  }), [keys, setKeys]), (0, import_react12.useEffect)(() => {
    let [first, second, third] = keys;
    first === "t" && second === "e" && third === "k" && (window.location.href = "/admin");
  }, [keys]), /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(AboutScreen, {
    experiences: sortedExperiences,
    developments
  }), /* @__PURE__ */ React.createElement(Footer, null));
}, routes_default = About;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "cf35d1d3", entry: { module: "/build/entry.client-HXNH7XNR.js", imports: ["/build/_shared/chunk-CWIXNHWE.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-CVHXYDX2.js", imports: ["/build/_shared/chunk-OMWX3INQ.js", "/build/_shared/chunk-5STQIBP4.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/admin/dashboard/developments": { id: "routes/admin/dashboard/developments", parentId: "root", path: "admin/dashboard/developments", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/dashboard/developments-NPJQRKI7.js", imports: ["/build/_shared/chunk-NUECXDAN.js", "/build/_shared/chunk-635PHEEE.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/dashboard/experiences/add": { id: "routes/admin/dashboard/experiences/add", parentId: "root", path: "admin/dashboard/experiences/add", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/dashboard/experiences/add-R3GTQIAT.js", imports: ["/build/_shared/chunk-NUECXDAN.js", "/build/_shared/chunk-635PHEEE.js", "/build/_shared/chunk-4PPG7YQR.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/dashboard/index": { id: "routes/admin/dashboard/index", parentId: "root", path: "admin/dashboard", index: !0, caseSensitive: void 0, module: "/build/routes/admin/dashboard/index-2CYK5MBX.js", imports: ["/build/_shared/chunk-NUECXDAN.js", "/build/_shared/chunk-635PHEEE.js", "/build/_shared/chunk-OYGQVULA.js", "/build/_shared/chunk-4PPG7YQR.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/index": { id: "routes/admin/index", parentId: "root", path: "admin", index: !0, caseSensitive: void 0, module: "/build/routes/admin/index-LWWCORUV.js", imports: ["/build/_shared/chunk-635PHEEE.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-EQOKFWFW.js", imports: ["/build/_shared/chunk-OYGQVULA.js", "/build/_shared/chunk-4PPG7YQR.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-CF35D1D3.js" };

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
  "routes/admin/dashboard/experiences/add": {
    id: "routes/admin/dashboard/experiences/add",
    parentId: "root",
    path: "admin/dashboard/experiences/add",
    index: void 0,
    caseSensitive: void 0,
    module: add_exports
  },
  "routes/admin/dashboard/developments": {
    id: "routes/admin/dashboard/developments",
    parentId: "root",
    path: "admin/dashboard/developments",
    index: void 0,
    caseSensitive: void 0,
    module: developments_exports
  },
  "routes/admin/dashboard/index": {
    id: "routes/admin/dashboard/index",
    parentId: "root",
    path: "admin/dashboard",
    index: !0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/admin/index": {
    id: "routes/admin/index",
    parentId: "root",
    path: "admin",
    index: !0,
    caseSensitive: void 0,
    module: admin_exports
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
