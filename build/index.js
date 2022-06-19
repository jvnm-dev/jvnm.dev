var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return node.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return node.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/home/jaz/projects/jvnm.dev-web/app/root.tsx
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
init_react();
var import_remix6 = __toESM(require_remix());
var import_classnames3 = __toESM(require("classnames"));

// app/application/ui/components/common/Header.tsx
init_react();
var import_remix3 = __toESM(require_remix());

// app/application/ui/components/common/Container.tsx
init_react();
var import_classnames = __toESM(require("classnames"));
var Container = ({ children, className }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: (0, import_classnames.default)("app container mx-auto px-20", className)
  }, children);
};

// app/application/cases/cookieSettings/getSettingsFromRequest.ts
init_react();

// app/services/cookies/userPreferences.ts
init_react();
var import_remix2 = __toESM(require_remix());
var userPreferences = (0, import_remix2.createCookie)("userPreferences", {
  httpOnly: true,
  secure: true,
  sameSite: true,
  maxAge: 60 * 60 * 24 * 365 * 100
});

// app/application/cases/cookieSettings/getSettingsFromRequest.ts
var useGetSettingsFromRequest = () => {
  const getSettingsFromRequest = async (request) => {
    const cookieHeader = request.headers.get("Cookie");
    return await userPreferences.parse(cookieHeader) || {};
  };
  return { getSettingsFromRequest };
};

// app/application/ui/components/common/Header.tsx
var Header = () => {
  const onThemeSwitchClick = () => {
  };
  return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement("header", {
    className: "app-header"
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/",
    prefetch: "intent",
    className: "navLink"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "logo"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-slate-700 dark:text-slate-100"
  }, "Jason"), " ", /* @__PURE__ */ React.createElement("span", {
    className: "text--primary"
  }, "Van Malder"))), /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/",
    prefetch: "intent",
    className: "navLink select-none"
  }, "Blog")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/about",
    prefetch: "intent",
    className: "navLink select-none"
  }, "About")))), /* @__PURE__ */ React.createElement("div", null)));
};

// app/application/ui/components/common/Footer.tsx
init_react();
var import_fa = require("react-icons/fa");
var Footer = () => {
  return /* @__PURE__ */ React.createElement("footer", {
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
};

// app/application/ui/components/common/Typography.tsx
init_react();
var import_classnames2 = __toESM(require("classnames"));
var Typography = ({
  variant = "text",
  className,
  style,
  level,
  children
}) => {
  const textSizeDefined = (className == null ? void 0 : className.includes("text-md")) || (className == null ? void 0 : className.includes("text-lg")) || (className == null ? void 0 : className.includes("text-xl")) || (className == null ? void 0 : className.includes("text-2xl")) || (className == null ? void 0 : className.includes("text-3xl")) || (className == null ? void 0 : className.includes("text-4xl")) || (className == null ? void 0 : className.includes("text-5xl")) || (className == null ? void 0 : className.includes("text-6xl")) || (className == null ? void 0 : className.includes("text-7xl")) || (className == null ? void 0 : className.includes("text-8xl")) || (className == null ? void 0 : className.includes("text-9xl"));
  const fontWeightDefined = className == null ? void 0 : className.includes("font-");
  const isTitle = ["title", "subtitle"].includes(variant);
  const isText = ["text"].includes(variant);
  const classes = (0, import_classnames2.default)({
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
    if (level === 1) {
      return /* @__PURE__ */ React.createElement("h1", {
        className: classes,
        style
      }, children);
    }
    if (level === 2) {
      return /* @__PURE__ */ React.createElement("h2", {
        className: classes,
        style
      }, children);
    }
    if (level === 3) {
      return /* @__PURE__ */ React.createElement("h3", {
        className: classes,
        style
      }, children);
    }
    if (level === 4) {
      return /* @__PURE__ */ React.createElement("h4", {
        className: classes,
        style
      }, children);
    }
    if (level === 5) {
      return /* @__PURE__ */ React.createElement("h5", {
        className: classes,
        style
      }, children);
    }
    if (level === 6) {
      return /* @__PURE__ */ React.createElement("h6", {
        className: classes,
        style
      }, children);
    }
  }
  return /* @__PURE__ */ React.createElement("p", {
    className: classes,
    style
  }, children);
};

// app/application/cases/cookieSettings/setSettingsAndRedirect.ts
init_react();
var import_remix4 = __toESM(require_remix());
var useSetSettingsAndRedirect = () => {
  const setSettingsAndRedirect = async (request) => {
    var _a;
    const cookieHeader = request.headers.get("Cookie");
    const bodyParams = await request.formData();
    const destination = ((_a = bodyParams.get("destination")) == null ? void 0 : _a.toString()) ?? "/";
    let cookie = await userPreferences.parse(cookieHeader) || {};
    cookie = __spreadProps(__spreadValues({}, cookie), {
      darkModeEnabled: bodyParams.get("darkModeEnabled") === "true"
    });
    return (0, import_remix4.redirect)(destination, {
      headers: {
        "Set-Cookie": await userPreferences.serialize(cookie)
      }
    });
  };
  return { setSettingsAndRedirect };
};

// app/services/hooks/theme-provider.tsx
init_react();
var import_react = require("react");
var ThemeContext = (0, import_react.createContext)(void 0);
function ThemeProvider({ children }) {
  const [theme, setTheme] = (0, import_react.useState)("light" /* LIGHT */);
  return /* @__PURE__ */ React.createElement(ThemeContext.Provider, {
    value: [theme, setTheme]
  }, children);
}

// app/application/cases/visitors/useVisitors.ts
init_react();
var import_react2 = require("react");
var import_remix5 = __toESM(require_remix());

// app/lib/function.ts
init_react();
var throttle = (fn, wait = 300) => {
  let inThrottle, lastFn, lastTime;
  return function() {
    const context = this, args = arguments;
    if (!inThrottle) {
      fn.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(() => {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};

// app/lib/visitor.ts
init_react();

// app/lib/string.ts
init_react();
var firstLetterUpperCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// app/lib/visitor.ts
var getVisitorName = (visitor) => {
  return visitor.name.split("_").map(firstLetterUpperCase).join(" ");
};

// app/application/cases/visitors/useVisitors.ts
var useVisitor = () => {
  const [me, setMe] = (0, import_react2.useState)({
    id: "",
    x: 0,
    y: 0,
    location: ""
  });
  const [socket, setSocket] = (0, import_react2.useState)();
  const location = (0, import_remix5.useLocation)();
  const updateMouse = (0, import_react2.useCallback)((visitor) => {
    var _a, _b, _c, _d;
    if (!((_a = visitor.id) == null ? void 0 : _a.length))
      return;
    if (visitor.x > document.documentElement.clientWidth + document.documentElement.scrollWidth)
      visitor.x = document.documentElement.clientWidth + document.documentElement.scrollWidth;
    if (visitor.y > document.documentElement.clientHeight + document.documentElement.scrollHeight)
      visitor.y = document.documentElement.clientHeight + document.documentElement.scrollHeight;
    const getMouse = () => document.getElementById(`mouse-${visitor.id}`);
    if (visitor.location !== window.location.pathname) {
      (_b = getMouse()) == null ? void 0 : _b.remove();
    }
    if (!getMouse() && (socket == null ? void 0 : socket.id) && visitor.id !== socket.id && visitor.location === window.location.pathname) {
      const newMouse = document.createElement("object");
      newMouse.type = "image/svg+xml";
      newMouse.data = "/images/cursor.svg";
      newMouse.id = `mouse-${visitor.id}`;
      newMouse.style.height = "20px";
      newMouse.style.width = "20px";
      newMouse.style.position = "absolute";
      newMouse.style.left = `${visitor.x}px`;
      newMouse.style.top = `${visitor.y}px`;
      newMouse.style.zIndex = "9999";
      newMouse.dataset["name"] = getVisitorName(visitor);
      newMouse.addEventListener("mouseenter", (e) => {
        const tag = document.createElement("div");
        tag.id = "tag";
        tag.innerHTML = newMouse.dataset["name"] ?? "Unknown";
        tag.style.position = "absolute";
        tag.style.zIndex = "99999";
        tag.style.backgroundColor = "rgba(0,0,0,0.5)";
        tag.style.color = "white";
        tag.style.padding = "10px";
        tag.style.borderRadius = "5px";
        tag.style.fontSize = "20px";
        tag.style.fontWeight = "bold";
        tag.style.textAlign = "center";
        tag.style.left = `${(e.clientX ?? 0) + 10}px`;
        tag.style.top = `${(e.clientY ?? 0) + 10}px`;
        document.body.appendChild(tag);
      });
      newMouse.addEventListener("mouseleave", () => {
        var _a2;
        (_a2 = document.getElementById("tag")) == null ? void 0 : _a2.remove();
      });
      document.body.appendChild(newMouse);
    }
    const mouse = getMouse();
    if (mouse) {
      const mouseAnimation = (mouse2, x, y, duration) => {
        const start = performance.now();
        const startX = mouse2.offsetLeft;
        const startY = mouse2.offsetTop;
        const distanceX = x - startX;
        const distanceY = y - startY;
        const move = (timestamp) => {
          const progress = timestamp - start;
          const percent = progress / duration;
          mouse2.style.left = `${startX + distanceX * percent}px`;
          mouse2.style.top = `${startY + distanceY * percent}px`;
          if (progress < duration) {
            window.requestAnimationFrame(move);
          }
        };
        window.requestAnimationFrame(move);
      };
      mouseAnimation(mouse, visitor.x - 4, visitor.y - 4, 400);
      (_d = (_c = mouse.getSVGDocument()) == null ? void 0 : _c.querySelector("#cursor")) == null ? void 0 : _d.setAttribute("fill", visitor.color);
    }
  }, [me, socket]);
  const setMeThrottled = throttle(setMe, 500);
  const update = (socketToUpdate, payload) => {
    socketToUpdate == null ? void 0 : socketToUpdate.emit("update", payload);
  };
  (0, import_react2.useEffect)(() => {
  }, []);
  (0, import_react2.useEffect)(() => {
    update(socket, me);
  }, [socket, me]);
  (0, import_react2.useEffect)(() => {
    setMe((prev) => __spreadProps(__spreadValues({}, prev), {
      location: window.location.pathname
    }));
  }, [location]);
  (0, import_react2.useEffect)(() => {
    if (socket) {
      socket.on("joined", (payload) => {
        if (socket.id !== payload.id) {
          setMeThrottled((prev) => __spreadProps(__spreadValues({}, prev), {
            id: payload.id,
            color: payload.color,
            name: payload.name
          }));
          console.info(`[Visitor ${getVisitorName(payload)}] joined`, payload);
          updateMouse(payload);
        }
      });
      socket.on("update", (payload) => {
        if (socket.id !== payload.id) {
          console.info(`[Visitor ${getVisitorName(payload)}] updated`, payload);
          updateMouse(payload);
        }
      });
      socket.on("leaved", (payload) => {
        const mouse = document.getElementById(`mouse-${payload.id}`);
        if (mouse) {
          console.info(`[Visitor ${getVisitorName(payload)}] leaved`, payload);
          document.body.removeChild(mouse);
        }
      });
      document.addEventListener("mousemove", (e) => {
        const data = {
          id: socket.id,
          x: e.pageX,
          y: e.pageY
        };
        setMeThrottled((prev) => __spreadValues(__spreadValues({}, prev), data));
      });
      window.addEventListener("beforeunload", function() {
        socket == null ? void 0 : socket.disconnect();
      });
    }
  }, [socket]);
};

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-KK5M6ZK5.css";

// app/styles/global.css
var global_default = "/build/_assets/global-TC3CIVYE.css";

// route:/home/jaz/projects/jvnm.dev-web/app/root.tsx
var links = () => {
  return [
    {
      rel: "preload",
      href: "/images/background.svg",
      as: "image",
      type: "image/svg+xml"
    },
    { rel: "stylesheet", href: tailwind_default },
    { rel: "stylesheet", href: global_default }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement(ThemeProvider, null, /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_remix6.Outlet, null))));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement("h1", null, "There was an error"), /* @__PURE__ */ React.createElement(Typography, null, error.message), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(Typography, null, "Please contact me by", " ", /* @__PURE__ */ React.createElement("a", {
    href: "mailto:jasonvanmalder@gmail.com"
  }, "email")))));
}
function CatchBoundary() {
  let caught = (0, import_remix6.useCatch)();
  let message;
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
  const { getSettingsFromRequest } = useGetSettingsFromRequest();
  return getSettingsFromRequest(request);
};
var action = async ({ request }) => {
  const { setSettingsAndRedirect } = useSetSettingsAndRedirect();
  return setSettingsAndRedirect(request);
};
var Document = ({
  children,
  title
}) => {
  const { state } = (0, import_remix6.useTransition)();
  useVisitor();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: (0, import_classnames3.default)({})
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(import_remix6.Meta, null), /* @__PURE__ */ React.createElement(import_remix6.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: (0, import_classnames3.default)("bg-slate-100 dark:bg-slate-900")
  }, /* @__PURE__ */ React.createElement("div", {
    className: (0, import_classnames3.default)("loading-bar", {
      active: state === "loading"
    })
  }), children, /* @__PURE__ */ React.createElement(import_remix6.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix6.Scripts, null), /* @__PURE__ */ React.createElement(import_remix6.LiveReload, null)));
};
var Layout = ({ children }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "background"
  }, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("main", null, children), /* @__PURE__ */ React.createElement(Footer, null));
};

// route:/home/jaz/projects/jvnm.dev-web/app/routes/posts/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => slug_default,
  links: () => links2,
  loader: () => loader2,
  meta: () => meta
});
init_react();
var import_remix8 = __toESM(require_remix());

// app/services/queries/post.ts
init_react();

// app/services/api.ts
init_react();
var import_graphql_request = require("graphql-request");
var API_URL = "http://127.0.0.1:8080/";
var DEV_TO_API_URL = "https://dev.to/api";
var devToFetch = ({ endpoint }) => {
  var _a;
  return fetch(`${DEV_TO_API_URL}${endpoint}`, {
    headers: {
      api_key: (_a = process == null ? void 0 : process.env) == null ? void 0 : _a.DEV_TO_API_KEY
    }
  });
};
var DEV_TO_API_ENDPOINTS = {
  posts: "/articles/me/published",
  post: (slug) => `/articles/jvnm_dev/${slug}`
};
var useAPIClient = () => {
  return new import_graphql_request.GraphQLClient(`${API_URL}graphql`);
};

// app/services/queries/post.ts
var usePostQuery = ({ slug }) => {
  const fetchPost = async () => {
    const post = await devToFetch({
      endpoint: DEV_TO_API_ENDPOINTS.post(slug)
    });
    if (!post.ok) {
      throw new Error(`Failed to fetch post: ${post.statusText} (${post.status})`);
    }
    return post.json();
  };
  return {
    run: async () => fetchPost()
  };
};

// app/application/remix/http.ts
init_react();
var import_remix7 = __toESM(require_remix());
var definedOrRedirect = (variable, url) => {
  if (typeof variable === "undefined")
    throw (0, import_remix7.redirect)(url);
};

// app/application/remix/styling.ts
init_react();
var link = (href) => ({
  rel: "stylesheet",
  href
});
var componentCss = (...descriptors) => () => descriptors;

// app/application/ui/screens/PostScreen.tsx
init_react();

// app/application/ui/components/blog/TagList.tsx
init_react();
var import_classnames5 = __toESM(require("classnames"));

// app/domain/post.ts
init_react();
var getPostTags = (post) => {
  const tags = post.tag_list;
  return Array.isArray(tags) ? tags : tags.split(", ") ?? [];
};
var getPostsTags = (posts) => {
  return (posts == null ? void 0 : posts.flatMap(getPostTags)) ?? [];
};

// app/application/ui/components/blog/Tag.tsx
init_react();
var import_react3 = __toESM(require("react"));
var import_color_hash = __toESM(require("color-hash"));
var import_classnames4 = __toESM(require("classnames"));
var Tag = ({ isActive, value, hoverable, onClick }) => {
  const colorHash = new import_color_hash.default({ hue: { min: 90, max: 270 } });
  const style = {
    borderColor: colorHash.hex(value),
    "--tag-bg-color": colorHash.hex(value)
  };
  return /* @__PURE__ */ import_react3.default.createElement("span", {
    className: (0, import_classnames4.default)("tag flex items-center justify-center select-none px-2 py-[2px] border-2 rounded-xl mr-2 mb-2 shadow-lg font-semibold dark:text-slate-100", {
      active: isActive,
      "cursor-pointer": hoverable,
      hoverable
    }),
    style,
    onClick
  }, /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "mr-1 tag-hashtag",
    style: {
      color: colorHash.hex(value)
    }
  }, "#"), value);
};

// app/application/cases/posts/updatePostsFilter.ts
init_react();

// app/services/stores/blog.ts
init_react();
var import_zustand = __toESM(require("zustand"));
var import_middleware = require("zustand/middleware");

// app/services/stores/common.ts
init_react();
var prepareStore = ({ defaultValue: defaultValue2 }) => (set) => __spreadProps(__spreadValues({}, defaultValue2), {
  update: (data) => {
    set((state) => __spreadValues(__spreadValues({}, state), data));
  },
  reset: () => set(defaultValue2)
});

// app/services/stores/blog.ts
var defaultValue = {
  filter: []
};
var name = "jvnm.dev-blog";
var store = prepareStore({ defaultValue });
var useBlogStore = (0, import_zustand.default)((0, import_middleware.devtools)(store, {
  name
}));

// app/application/cases/posts/updatePostsFilter.ts
var useUpdatePostsFilter = () => {
  const { filter, update: updateBlogStore } = useBlogStore(({ filter: filter2, update }) => ({
    filter: filter2,
    update
  }));
  const extractTagName = (tag) => tag.replace("#", "");
  const updateFilter = (clickedTag) => {
    if (!clickedTag) {
      return;
    }
    const tag = extractTagName(clickedTag);
    if (tag) {
      if (filter.includes(tag)) {
        updateBlogStore({
          filter: filter.filter((t) => t !== tag)
        });
      } else {
        updateBlogStore({
          filter: [...filter, tag]
        });
      }
    }
  };
  return { updateFilter, filter };
};

// app/application/ui/components/blog/TagList.tsx
var TagList = ({ posts, className, filterable = true }) => {
  const tags = getPostsTags(posts);
  const { updateFilter, filter } = useUpdatePostsFilter();
  const handleTagClick = (event) => updateFilter(event.currentTarget.textContent);
  return /* @__PURE__ */ React.createElement("div", {
    className: (0, import_classnames5.default)(className, "font-semibold flex flex-wrap")
  }, tags == null ? void 0 : tags.map((value) => {
    const isActive = filter.includes(value);
    return /* @__PURE__ */ React.createElement(Tag, {
      key: value,
      value,
      isActive,
      onClick: handleTagClick,
      hoverable: filterable
    });
  }));
};

// app/lib/date.ts
init_react();
var import_dayjs = __toESM(require("dayjs"));
var formatDate = (date) => !date || date === "Now" ? "Now" : (0, import_dayjs.default)(date).format("MMM DD, YYYY");

// app/application/ui/screens/PostScreen.tsx
var PostScreen = ({ post }) => {
  return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement("div", {
    className: "bg-white shadow-lg dark:bg-slate-900 dark:text-slate-100 dark:shadow-indigo-500/50 rounded-lg"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-full cover rounded-lg",
    src: post.cover_image,
    alt: post.title
  }), /* @__PURE__ */ React.createElement("div", {
    className: "p-6 content rounded-lg"
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "title",
    level: 1,
    className: "text-6xl"
  }, post.title), /* @__PURE__ */ React.createElement(Typography, {
    variant: "title",
    level: 3,
    className: "mt-2 text-gray-400 font-normal"
  }, "Published on ", formatDate(post.published_at), " by ", post.user.name), /* @__PURE__ */ React.createElement(TagList, {
    posts: [post],
    filterable: false,
    className: "mb-4 mt-4"
  }), /* @__PURE__ */ React.createElement(Typography, {
    className: "mt-2 mb-2"
  }, "You can also read this article on", " ", /* @__PURE__ */ React.createElement("a", {
    href: `https://dev.to/jvnm_dev/${post.slug}`,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-indigo-500"
  }, "dev.to"), "."), /* @__PURE__ */ React.createElement("div", {
    className: "text-lg",
    dangerouslySetInnerHTML: { __html: post.body_html ?? "" }
  }))));
};

// app/styles/post.css
var post_default = "/build/_assets/post-O6P5QH53.css";

// app/styles/highlight.css
var highlight_default = "/build/_assets/highlight-3A6XOHO6.css";

// route:/home/jaz/projects/jvnm.dev-web/app/routes/posts/$slug.tsx
var links2 = componentCss(link(post_default), link(highlight_default));
var loader2 = async ({ params }) => {
  const { slug } = params;
  definedOrRedirect(slug, "/");
  return usePostQuery({ slug }).run();
};
var meta = ({ data }) => {
  const post = data;
  return {
    title: `${post == null ? void 0 : post.title} - Jason Van Malder`,
    description: post == null ? void 0 : post.description
  };
};
var Post2 = () => {
  const post = (0, import_remix8.useLoaderData)();
  return /* @__PURE__ */ React.createElement(PostScreen, {
    post
  });
};
var slug_default = Post2;

// route:/home/jaz/projects/jvnm.dev-web/app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => about_default,
  loader: () => loader3,
  meta: () => meta2
});
init_react();
var import_remix9 = __toESM(require_remix());

// app/application/ui/screens/AboutScreen.tsx
init_react();

// app/application/ui/components/about/Jumbotron.tsx
init_react();
var import_react_responsive = require("react-responsive");
var Jumbotron = () => {
  const isLargeDevice = (0, import_react_responsive.useMediaQuery)({ minWidth: 1280 });
  const shouldShowImage = (0, import_react_responsive.useMediaQuery)({ minWidth: 1025 });
  return /* @__PURE__ */ React.createElement("div", {
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
    style: { width: isLargeDevice ? 550 : 400 }
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
init_react();
var import_fa2 = require("react-icons/fa");
var ProjectsList = ({ developments }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 xl:grid-cols-2 gap-4"
  }, developments.map((development) => {
    return /* @__PURE__ */ React.createElement("div", {
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
    }, /* @__PURE__ */ React.createElement(import_fa2.FaCode, null)))))));
  }));
};

// app/application/ui/components/about/ExperiencesList.tsx
init_react();
var import_fa3 = require("react-icons/fa");
var ExperiencesList = ({ experiences }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-4"
  }, experiences.map((experience) => /* @__PURE__ */ React.createElement("a", {
    key: experience.id,
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
};

// app/application/ui/screens/AboutScreen.tsx
var AboutScreen = ({ experiences, developments }) => {
  return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Jumbotron, null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Typography, {
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
};

// app/services/queries/experiences.ts
init_react();

// app/services/graphql/schemas/experiences.ts
init_react();
var import_graphql_request2 = require("graphql-request");
var GET_EXPERIENCES = import_graphql_request2.gql`
  {
    experiences {
      id
      image
      place
      dateFrom
      dateTo
      role
      url
      isExtiaConsulting
      journey {
        id
      }
    }
  }
`;

// app/services/queries/experiences.ts
var useExperiencesQuery = () => {
  const fetchExperiences = async () => {
    const { experiences } = await useAPIClient().request(GET_EXPERIENCES);
    return experiences;
  };
  return {
    run: async () => fetchExperiences()
  };
};

// app/services/queries/developments.ts
init_react();

// app/services/graphql/schemas/developments.ts
init_react();
var import_graphql_request3 = require("graphql-request");
var GET_DEVELOPMENTS = import_graphql_request3.gql`
  {
    developments {
      id
      name
      description
      image
      sourceCodeUrl
      demoUrl
    }
  }
`;

// app/services/queries/developments.ts
var useDevelopmentsQuery = () => {
  const fetchDevelopments = async () => {
    const { developments } = await useAPIClient().request(GET_DEVELOPMENTS);
    return developments;
  };
  return {
    run: async () => fetchDevelopments()
  };
};

// app/application/cases/experiences/getSortedExperiences.ts
init_react();
var useGetSortedExperiences = () => {
  const getSortedExperiences = (experiences) => {
    if (!(experiences == null ? void 0 : experiences.length)) {
      return [];
    }
    return experiences.sort((a, b) => {
      return Number(b.id) - Number(a.id);
    });
  };
  return { getSortedExperiences };
};

// route:/home/jaz/projects/jvnm.dev-web/app/routes/about.tsx
var meta2 = () => ({
  title: "Jason Van Malder",
  description: "A blog about web development, React, and more."
});
var loader3 = async () => ({
  experiences: await useExperiencesQuery().run(),
  developments: await useDevelopmentsQuery().run()
});
var About = () => {
  const { getSortedExperiences } = useGetSortedExperiences();
  const { experiences, developments } = (0, import_remix9.useLoaderData)();
  const sortedExperiences = getSortedExperiences(experiences);
  return /* @__PURE__ */ React.createElement(AboutScreen, {
    experiences: sortedExperiences,
    developments
  });
};
var about_default = About;

// route:/home/jaz/projects/jvnm.dev-web/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default,
  loader: () => loader4,
  meta: () => meta3
});
init_react();
var import_remix11 = __toESM(require_remix());

// app/services/queries/posts.ts
init_react();
var usePostsQuery = () => {
  const fetchPosts = async () => {
    const posts = await devToFetch({
      endpoint: DEV_TO_API_ENDPOINTS.posts
    });
    if (!posts.ok) {
      throw new Error(`Failed to fetch posts: ${posts.statusText} (${posts.status})`);
    }
    return posts.json();
  };
  return {
    run: async () => fetchPosts()
  };
};

// app/application/ui/screens/BlogScreen.tsx
init_react();

// app/application/ui/components/blog/NoPost.tsx
init_react();
var NoPost = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-center items-center mt-16"
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "title",
    level: 3,
    className: "mb-8 dark:text-slate-100"
  }, "No posts"), /* @__PURE__ */ React.createElement("img", {
    src: "/images/empty.svg",
    alt: "empty"
  }));
};

// app/application/ui/components/blog/Jumbotron.tsx
init_react();
var import_react_responsive2 = require("react-responsive");
var Jumbotron2 = () => {
  const shouldShowImage = (0, import_react_responsive2.useMediaQuery)({ minWidth: 1025 });
  return /* @__PURE__ */ React.createElement("div", {
    className: "grid gap-4 grid-cols-1 lg:grid-cols-2 my-20"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-center"
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "title",
    level: 1,
    className: "font-bold dark:text-slate-100 text-7xl xl:text-8xl"
  }, "Welcome to my blog!"), /* @__PURE__ */ React.createElement(Typography, {
    variant: "title",
    level: 2,
    className: "mt-8 dark:text-slate-100",
    style: { width: 500 }
  }, "Learn and stay tuned about web development, React, and more."), /* @__PURE__ */ React.createElement(Typography, {
    variant: "title",
    level: 1,
    className: "mt-8 text-indigo-300"
  }, "Find my latests posts below.")), shouldShowImage && /* @__PURE__ */ React.createElement("div", {
    className: "justify-center items-center hidden",
    style: {
      display: shouldShowImage ? "flex" : "none"
    }
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/blog.svg",
    alt: "welcome",
    className: "h-96"
  })));
};

// app/application/ui/components/blog/PostThumbsGrid.tsx
init_react();

// app/application/ui/components/blog/PostThumb.tsx
init_react();
var import_dayjs2 = __toESM(require("dayjs"));
var import_classnames6 = __toESM(require("classnames"));
var import_remix10 = __toESM(require_remix());
var import_fa4 = require("react-icons/fa");
var PostThumb = ({ className, post }) => {
  const linkClasses = [
    className,
    "postThumb",
    "hoverableButton",
    "flex",
    "flex-col",
    "justify-between",
    "cursor-pointer",
    "bg-white",
    "p-6",
    "shadow-lg",
    "rounded-xl",
    "hover:border-indigo-500 border-transparent border-2",
    "transition ease-in-out duration-1000",
    "select-none",
    "dark:bg-slate-900 dark:text-slate-100 dark:shadow-indigo-500/50"
  ];
  return /* @__PURE__ */ React.createElement(import_remix10.Link, {
    to: `/posts/${post.slug}`,
    className: (0, import_classnames6.default)(...linkClasses),
    prefetch: "intent"
  }, /* @__PURE__ */ React.createElement("img", {
    src: post.cover_image,
    alt: "",
    className: "cover rounded-xl w-full"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between items-center"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "mt-4 font-semibold"
  }, firstLetterUpperCase(post.title)), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 details flex w-max rounded-lg text-xs"
  }, (0, import_dayjs2.default)(post.published_at).format("MMM DD, YYYY"), " \u2014", " ", post.reading_time_minutes, " min read")), /* @__PURE__ */ React.createElement(Typography, {
    className: "description mt-4"
  }, post.description), /* @__PURE__ */ React.createElement("div", {
    className: "footer flex justify-between"
  }, /* @__PURE__ */ React.createElement("img", {
    src: post.user.profile_image_90,
    alt: post.user.username,
    className: "author w-10 h-10 rounded-full"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "button px-2 py-2"
  }, "Read more ", /* @__PURE__ */ React.createElement(import_fa4.FaArrowRight, {
    className: "arrow ml-2"
  }))));
};

// app/application/ui/components/blog/PostThumbsGrid.tsx
var PostThumbsGrid = ({ posts }) => {
  var _a;
  return /* @__PURE__ */ React.createElement("div", {
    className: "grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
  }, (_a = [...posts]) == null ? void 0 : _a.map((post) => /* @__PURE__ */ React.createElement(PostThumb, {
    key: `post-${post.id}-${post.title}`,
    post
  })));
};

// app/application/ui/screens/BlogScreen.tsx
var BlogScreen = ({ posts }) => {
  const Posts = (posts == null ? void 0 : posts.length) ? /* @__PURE__ */ React.createElement(PostThumbsGrid, {
    posts
  }) : /* @__PURE__ */ React.createElement(NoPost, null);
  return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Jumbotron2, null), /* @__PURE__ */ React.createElement(Typography, {
    variant: "title",
    level: 2,
    className: "mb-4 dark:text-slate-100"
  }, "Latest Posts"), /* @__PURE__ */ React.createElement("div", {
    className: "flex mb-4 items-center"
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "title",
    level: 3,
    className: "font-normal dark:text-slate-100"
  }, "Filters"), /* @__PURE__ */ React.createElement(TagList, {
    posts,
    className: "ml-4"
  })), Posts);
};

// app/application/cases/posts/getFilteredPosts.ts
init_react();
var useGetFilteredPosts = () => {
  const { filter } = useBlogStore(({ filter: filter2 }) => ({
    filter: filter2
  }));
  const getFilteredPosts = (posts) => {
    if (!(filter == null ? void 0 : filter.length) && (posts == null ? void 0 : posts.length)) {
      return posts;
    }
    return (posts == null ? void 0 : posts.filter((post) => {
      const postTags = getPostTags(post);
      return filter.every((tag) => postTags.includes(tag));
    })) ?? [];
  };
  return { getFilteredPosts };
};

// route:/home/jaz/projects/jvnm.dev-web/app/routes/index.tsx
var meta3 = () => ({
  title: "Jason Van Malder",
  description: "A blog about web development, React, and more."
});
var loader4 = async () => usePostsQuery().run();
var Index = () => {
  const { getFilteredPosts } = useGetFilteredPosts();
  const posts = (0, import_remix11.useLoaderData)();
  const filteredPost = getFilteredPosts(posts);
  return /* @__PURE__ */ React.createElement(BlogScreen, {
    posts: filteredPost
  });
};
var routes_default = Index;

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "c929586e", "entry": { "module": "/build/entry.client-LSKF77AT.js", "imports": ["/build/_shared/chunk-VLAIHFUW.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-NK7IFIXO.js", "imports": ["/build/_shared/chunk-WO4SYSXH.js", "/build/_shared/chunk-KNQC2NRO.js", "/build/_shared/chunk-2LAJHPB6.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/about-MUKWFAR4.js", "imports": ["/build/_shared/chunk-C3ZKNRUB.js", "/build/_shared/chunk-CME2V3QE.js", "/build/_shared/chunk-PZ75QARJ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-A3GAUGJU.js", "imports": ["/build/_shared/chunk-NO7OMRWX.js", "/build/_shared/chunk-CME2V3QE.js", "/build/_shared/chunk-PZ75QARJ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/$slug": { "id": "routes/posts/$slug", "parentId": "root", "path": "posts/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/$slug-Z7USNJTJ.js", "imports": ["/build/_shared/chunk-C3ZKNRUB.js", "/build/_shared/chunk-NO7OMRWX.js", "/build/_shared/chunk-PZ75QARJ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-C929586E.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/posts/$slug": {
    id: "routes/posts/$slug",
    parentId: "root",
    path: "posts/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=index.js.map
