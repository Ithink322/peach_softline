import { version, unref, inject, defineComponent, ref, h, resolveComponent, useSSRContext, createApp, effectScope, shallowReactive, reactive, getCurrentScope, computed, mergeProps, provide, onErrorCaptured, onServerPrefetch, createVNode, resolveDynamicComponent, hasInjectionContext, toRef, defineAsyncComponent, getCurrentInstance, isReadonly, isRef, isShallow, isReactive, toRaw, withCtx, createTextVNode } from 'file://C:/Users/user/Desktop/program/web_projects/test-exercises/peach_softline/peach_softline/node_modules/vue/index.mjs';
import { $fetch } from 'file://C:/Users/user/Desktop/program/web_projects/test-exercises/peach_softline/peach_softline/node_modules/ofetch/dist/node.mjs';
import { b as baseURL, p as publicAssetsURL } from '../_/renderer.mjs';
import { createHooks } from 'file://C:/Users/user/Desktop/program/web_projects/test-exercises/peach_softline/peach_softline/node_modules/hookable/dist/index.mjs';
import { getContext } from 'file://C:/Users/user/Desktop/program/web_projects/test-exercises/peach_softline/peach_softline/node_modules/unctx/dist/index.mjs';
import { createError as createError$1, sanitizeStatusCode } from 'file://C:/Users/user/Desktop/program/web_projects/test-exercises/peach_softline/peach_softline/node_modules/h3/dist/index.mjs';
import { parseQuery, hasProtocol, joinURL, isScriptProtocol, withQuery, isEqual, withTrailingSlash, withoutTrailingSlash, stringifyParsedURL, stringifyQuery } from 'file://C:/Users/user/Desktop/program/web_projects/test-exercises/peach_softline/peach_softline/node_modules/ufo/dist/index.mjs';
import { getActiveHead, CapoPlugin } from 'file://C:/Users/user/Desktop/program/web_projects/test-exercises/peach_softline/peach_softline/node_modules/unhead/dist/index.mjs';
import { defineHeadPlugin } from 'file://C:/Users/user/Desktop/program/web_projects/test-exercises/peach_softline/peach_softline/node_modules/@unhead/shared/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file://C:/Users/user/Desktop/program/web_projects/test-exercises/peach_softline/peach_softline/node_modules/radix3/dist/index.mjs';
import { defu } from 'file://C:/Users/user/Desktop/program/web_projects/test-exercises/peach_softline/peach_softline/node_modules/defu/dist/defu.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderSuspense, ssrRenderComponent, ssrRenderVNode } from 'file://C:/Users/user/Desktop/program/web_projects/test-exercises/peach_softline/peach_softline/node_modules/vue/server-renderer/index.mjs';
import 'file://C:/Users/user/Desktop/program/web_projects/test-exercises/peach_softline/peach_softline/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/user/Desktop/program/web_projects/test-exercises/peach_softline/peach_softline/node_modules/devalue/index.js';
import 'file://C:/Users/user/Desktop/program/web_projects/test-exercises/peach_softline/peach_softline/node_modules/@unhead/ssr/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/user/Desktop/program/web_projects/test-exercises/peach_softline/peach_softline/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/user/Desktop/program/web_projects/test-exercises/peach_softline/peach_softline/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/user/Desktop/program/web_projects/test-exercises/peach_softline/peach_softline/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/user/Desktop/program/web_projects/test-exercises/peach_softline/peach_softline/node_modules/scule/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/user/Desktop/program/web_projects/test-exercises/peach_softline/peach_softline/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/user/Desktop/program/web_projects/test-exercises/peach_softline/peach_softline/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/user/Desktop/program/web_projects/test-exercises/peach_softline/peach_softline/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/user/Desktop/program/web_projects/test-exercises/peach_softline/peach_softline/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/user/Desktop/program/web_projects/test-exercises/peach_softline/peach_softline/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://C:/Users/user/Desktop/program/web_projects/test-exercises/peach_softline/peach_softline/node_modules/unstorage/drivers/fs-lite.mjs';

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
const nuxtLinkDefaults = { "componentName": "NuxtLink", "prefetch": true, "prefetchOn": { "visibility": true } };
const appId = "nuxt-app";
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  var _a;
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.14.159";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...((_a = options.ssrContext) == null ? void 0 : _a.payload) || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin) {
  if (plugin.hooks) {
    nuxtApp.hooks.addHooks(plugin.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a, _b, _c, _d;
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin) {
    var _a2;
    const unresolvedPluginsForThisPlugin = ((_a2 = plugin.dependsOn) == null ? void 0 : _a2.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.includes(name))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin).then(async () => {
        if (plugin._name) {
          resolvedPlugins.push(plugin._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin._name)) {
              dependsOn.delete(plugin._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin of plugins2) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin);
  }
  for (const plugin of plugins2) {
    if (((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) && ((_d = plugin.env) == null ? void 0 : _d.islands) === false) {
      continue;
    }
    await executePlugin(plugin);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin) {
  if (typeof plugin === "function") {
    return plugin;
  }
  const _name = plugin._name || plugin.name;
  delete plugin.name;
  return Object.assign(plugin.setup || (() => {
  }), plugin, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || getNuxtAppCtx(id).tryUse();
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const URL_QUOTE_RE = /"/g;
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = (options == null ? void 0 : options.external) || isExternalHost;
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(URL_QUOTE_RE, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = useNuxtApp();
    const error2 = useError();
    if (false) ;
    error2.value = error2.value || nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
version[0] === "3";
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2) {
  if (ref2 instanceof Promise || ref2 instanceof Date || ref2 instanceof RegExp)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r));
  if (typeof root === "object") {
    const resolved = {};
    for (const k in root) {
      if (!Object.prototype.hasOwnProperty.call(root, k)) {
        continue;
      }
      if (k === "titleTemplate" || k[0] === "o" && k[1] === "n") {
        resolved[k] = unref(root[k]);
        continue;
      }
      resolved[k] = resolveUnrefHeadInput(root[k]);
    }
    return resolved;
  }
  return root;
}
defineHeadPlugin({
  hooks: {
    "entries:resolve": (ctx) => {
      for (const entry2 of ctx.entries)
        entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
    }
  }
});
const headSymbol = "usehead";
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey$1 = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global[globalKey$1] = handler;
}
function injectHead() {
  if (globalKey$1 in _global) {
    return _global[globalKey$1]();
  }
  const head = inject(headSymbol);
  if (!head && "prerender" !== "production")
    console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results.");
  return head || getActiveHead();
}
[CapoPlugin({ track: true })];
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => useNuxtApp().vueApp._context.provides.usehead
    );
    nuxtApp.vueApp.use(head);
  }
});
async function getRouteRules(url) {
  {
    const _routeRulesMatcher = toRouteMatcher(
      createRouter({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(url).reverse());
  }
}
function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
_globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  manifest_45route_45rule
];
function getRouteFromPath(fullPath) {
  if (typeof fullPath === "object") {
    fullPath = stringifyParsedURL({
      pathname: fullPath.path || "",
      search: stringifyQuery(fullPath.query || {}),
      hash: fullPath.hash || ""
    });
  }
  const url = new URL(fullPath.toString(), "http://localhost");
  return {
    path: url.pathname,
    fullPath,
    query: parseQuery(url.search),
    hash: url.hash,
    // stub properties for compat with vue-router
    params: {},
    name: void 0,
    matched: [],
    redirectedFrom: void 0,
    meta: {},
    href: fullPath
  };
}
const router_CaKIoANnI2 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  setup(nuxtApp) {
    const initialURL = nuxtApp.ssrContext.url;
    const routes = [];
    const hooks = {
      "navigate:before": [],
      "resolve:before": [],
      "navigate:after": [],
      "error": []
    };
    const registerHook = (hook, guard) => {
      hooks[hook].push(guard);
      return () => hooks[hook].splice(hooks[hook].indexOf(guard), 1);
    };
    (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const route = reactive(getRouteFromPath(initialURL));
    async function handleNavigation(url, replace) {
      try {
        const to = getRouteFromPath(url);
        for (const middleware of hooks["navigate:before"]) {
          const result = await middleware(to, route);
          if (result === false || result instanceof Error) {
            return;
          }
          if (typeof result === "string" && result.length) {
            return handleNavigation(result, true);
          }
        }
        for (const handler of hooks["resolve:before"]) {
          await handler(to, route);
        }
        Object.assign(route, to);
        if (false) ;
        for (const middleware of hooks["navigate:after"]) {
          await middleware(to, route);
        }
      } catch (err) {
        for (const handler of hooks.error) {
          await handler(err);
        }
      }
    }
    const currentRoute = computed(() => route);
    const router = {
      currentRoute,
      isReady: () => Promise.resolve(),
      // These options provide a similar API to vue-router but have no effect
      options: {},
      install: () => Promise.resolve(),
      // Navigation
      push: (url) => handleNavigation(url),
      replace: (url) => handleNavigation(url),
      back: () => (void 0).history.go(-1),
      go: (delta) => (void 0).history.go(delta),
      forward: () => (void 0).history.go(1),
      // Guards
      beforeResolve: (guard) => registerHook("resolve:before", guard),
      beforeEach: (guard) => registerHook("navigate:before", guard),
      afterEach: (guard) => registerHook("navigate:after", guard),
      onError: (handler) => registerHook("error", handler),
      // Routes
      resolve: getRouteFromPath,
      addRoute: (parentName, route2) => {
        routes.push(route2);
      },
      getRoutes: () => routes,
      hasRoute: (name) => routes.some((route2) => route2.name === name),
      removeRoute: (name) => {
        const index = routes.findIndex((route2) => route2.name === name);
        if (index !== -1) {
          routes.splice(index, 1);
        }
      }
    };
    nuxtApp.vueApp.component("RouterLink", defineComponent({
      functional: true,
      props: {
        to: {
          type: String,
          required: true
        },
        custom: Boolean,
        replace: Boolean,
        // Not implemented
        activeClass: String,
        exactActiveClass: String,
        ariaCurrentValue: String
      },
      setup: (props, { slots }) => {
        const navigate = () => handleNavigation(props.to, props.replace);
        return () => {
          var _a;
          const route2 = router.resolve(props.to);
          return props.custom ? (_a = slots.default) == null ? void 0 : _a.call(slots, { href: props.to, navigate, route: route2 }) : h("a", { href: props.to, onClick: (e) => {
            e.preventDefault();
            return navigate();
          } }, slots);
        };
      }
    }));
    nuxtApp._route = route;
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    const initialLayout = nuxtApp.payload.state._layout;
    nuxtApp.hooks.hookOnce("app:created", async () => {
      router.beforeEach(async (to, from) => {
        var _a;
        to.meta = reactive(to.meta || {});
        if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
          to.meta.layout = initialLayout;
        }
        nuxtApp._processingMiddleware = true;
        if (!((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext)) {
          const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
          {
            const routeRules = await nuxtApp.runWithContext(() => getRouteRules(to.path));
            if (routeRules.appMiddleware) {
              for (const key in routeRules.appMiddleware) {
                const guard = nuxtApp._middleware.named[key];
                if (!guard) {
                  return;
                }
                if (routeRules.appMiddleware[key]) {
                  middlewareEntries.add(guard);
                } else {
                  middlewareEntries.delete(guard);
                }
              }
            }
          }
          for (const middleware of middlewareEntries) {
            const result = await nuxtApp.runWithContext(() => middleware(to, from));
            {
              if (result === false || result instanceof Error) {
                const error = result || createError$1({
                  statusCode: 404,
                  statusMessage: `Page Not Found: ${initialURL}`,
                  data: {
                    path: initialURL
                  }
                });
                delete nuxtApp._processingMiddleware;
                return nuxtApp.runWithContext(() => showError(error));
              }
            }
            if (result === true) {
              continue;
            }
            if (result || result === false) {
              return result;
            }
          }
        }
      });
      router.afterEach(() => {
        delete nuxtApp._processingMiddleware;
      });
      await router.replace(initialURL);
      if (!isEqual(route.fullPath, initialURL)) {
        await nuxtApp.runWithContext(() => navigateTo(route.fullPath));
      }
    });
    return {
      provide: {
        route,
        router
      }
    };
  }
});
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_eJ33V7gbc6 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
const plugins = [
  unhead_KgADcZ0jPj,
  router_CaKIoANnI2,
  revive_payload_server_eJ33V7gbc6,
  components_plugin_KR1HBZs4kY
];
async function preloadRouteComponents(to, router = useRouter()) {
  {
    return;
  }
}
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  function resolveTrailingSlashBehavior(to, resolve) {
    if (!to || options.trailingSlash !== "append" && options.trailingSlash !== "remove") {
      return to;
    }
    if (typeof to === "string") {
      return applyTrailingSlashBehavior(to, options.trailingSlash);
    }
    const path = "path" in to && to.path !== void 0 ? to.path : resolve(to).path;
    const resolvedPath = {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: applyTrailingSlashBehavior(path, options.trailingSlash)
    };
    return resolvedPath;
  }
  function useNuxtLink(props) {
    const router = useRouter();
    const config = /* @__PURE__ */ useRuntimeConfig();
    const hasTarget = computed(() => !!props.target && props.target !== "_self");
    const isAbsoluteUrl = computed(() => {
      const path = props.to || props.href || "";
      return typeof path === "string" && hasProtocol(path, { acceptRelative: true });
    });
    const builtinRouterLink = resolveComponent("RouterLink");
    const useBuiltinLink = builtinRouterLink && typeof builtinRouterLink !== "string" ? builtinRouterLink.useLink : void 0;
    const isExternal = computed(() => {
      if (props.external) {
        return true;
      }
      const path = props.to || props.href || "";
      if (typeof path === "object") {
        return false;
      }
      return path === "" || isAbsoluteUrl.value;
    });
    const to = computed(() => {
      const path = props.to || props.href || "";
      if (isExternal.value) {
        return path;
      }
      return resolveTrailingSlashBehavior(path, router.resolve);
    });
    const link = isExternal.value ? void 0 : useBuiltinLink == null ? void 0 : useBuiltinLink({ ...props, to });
    const href = computed(() => {
      var _a;
      if (!to.value || isAbsoluteUrl.value) {
        return to.value;
      }
      if (isExternal.value) {
        const path = typeof to.value === "object" && "path" in to.value ? resolveRouteObject(to.value) : to.value;
        const href2 = typeof path === "object" ? router.resolve(path).href : path;
        return resolveTrailingSlashBehavior(
          href2,
          router.resolve
          /* will not be called */
        );
      }
      if (typeof to.value === "object") {
        return ((_a = router.resolve(to.value)) == null ? void 0 : _a.href) ?? null;
      }
      return resolveTrailingSlashBehavior(
        joinURL(config.app.baseURL, to.value),
        router.resolve
        /* will not be called */
      );
    });
    return {
      to,
      hasTarget,
      isAbsoluteUrl,
      isExternal,
      //
      href,
      isActive: (link == null ? void 0 : link.isActive) ?? computed(() => to.value === router.currentRoute.value.path),
      isExactActive: (link == null ? void 0 : link.isExactActive) ?? computed(() => to.value === router.currentRoute.value.path),
      route: (link == null ? void 0 : link.route) ?? computed(() => router.resolve(to.value)),
      async navigate() {
        await navigateTo(href.value, { replace: props.replace, external: isExternal.value || hasTarget.value });
      }
    };
  }
  return defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetchOn: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    useLink: useNuxtLink,
    setup(props, { slots }) {
      const router = useRouter();
      const { to, href, navigate, isExternal, hasTarget, isAbsoluteUrl } = useNuxtLink(props);
      const prefetched = ref(false);
      const el = void 0;
      const elRef = void 0;
      function shouldPrefetch(mode) {
        var _a, _b;
        return !prefetched.value && (typeof props.prefetchOn === "string" ? props.prefetchOn === mode : ((_a = props.prefetchOn) == null ? void 0 : _a[mode]) ?? ((_b = options.prefetchOn) == null ? void 0 : _b[mode])) && (props.prefetch ?? options.prefetch) !== false && props.noPrefetch !== true && props.target !== "_blank" && !isSlowConnection();
      }
      async function prefetch(nuxtApp = useNuxtApp()) {
        if (prefetched.value) {
          return;
        }
        prefetched.value = true;
        const path = typeof to.value === "string" ? to.value : isExternal.value ? resolveRouteObject(to.value) : router.resolve(to.value).fullPath;
        const normalizedPath = isExternal.value ? new URL(path, (void 0).location.href).href : path;
        await Promise.all([
          nuxtApp.hooks.callHook("link:prefetch", normalizedPath).catch(() => {
          }),
          !isExternal.value && !hasTarget.value && preloadRouteComponents(to.value, router).catch(() => {
          })
        ]);
      }
      return () => {
        var _a;
        if (!isExternal.value && !hasTarget.value) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            if (shouldPrefetch("interaction")) {
              routerLinkProps.onPointerenter = prefetch.bind(null, void 0);
              routerLinkProps.onFocus = prefetch.bind(null, void 0);
            }
            if (prefetched.value) {
              routerLinkProps.class = props.prefetchedClass || options.prefetchedClass;
            }
            routerLinkProps.rel = props.rel || void 0;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const target = props.target || null;
        const rel = firstNonUndefined(
          // converts `""` to `null` to prevent the attribute from being added as empty (`rel=""`)
          props.noRel ? "" : props.rel,
          options.externalRelAttribute,
          /*
          * A fallback rel of `noopener noreferrer` is applied for external links or links that open in a new tab.
          * This solves a reverse tabnapping security flaw in browsers pre-2021 as well as improving privacy.
          */
          isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : ""
        ) || null;
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href: href.value,
            navigate,
            prefetch,
            get route() {
              if (!href.value) {
                return void 0;
              }
              const url = new URL(href.value, "http://localhost");
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href: href.value
              };
            },
            rel,
            target,
            isExternal: isExternal.value || hasTarget.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href: href.value || null, rel, target }, (_a = slots.default) == null ? void 0 : _a.call(slots));
      };
    }
  });
}
const __nuxt_component_0$1 = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
  const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
  const hasProtocolDifferentFromHttp = hasProtocol(to) && !to.startsWith("http");
  if (hasProtocolDifferentFromHttp) {
    return to;
  }
  return normalizeFn(to, true);
}
function isSlowConnection() {
  {
    return;
  }
}
const _imports_0$5 = publicAssetsURL("/imgs/logo.png");
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$9 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))} data-v-225f484b><img${ssrRenderAttr("src", _imports_0$5)} alt="" class="header__logo" data-v-225f484b><ul class="header__list" data-v-225f484b><li data-v-225f484b>`);
  _push(ssrRenderComponent(_component_NuxtLink, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Облачные решения`);
      } else {
        return [
          createTextVNode("Облачные решения")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-225f484b>`);
  _push(ssrRenderComponent(_component_NuxtLink, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Кибербезопасность`);
      } else {
        return [
          createTextVNode("Кибербезопасность")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-225f484b>`);
  _push(ssrRenderComponent(_component_NuxtLink, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Импортозамещение`);
      } else {
        return [
          createTextVNode("Импортозамещение")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-225f484b>`);
  _push(ssrRenderComponent(_component_NuxtLink, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Цифровая трансформация`);
      } else {
        return [
          createTextVNode("Цифровая трансформация")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Header.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-225f484b"]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "info" }, _attrs))} data-v-098d08b2><h1 class="info__title" data-v-098d08b2>Softline</h1><p class="info__text" data-v-098d08b2> Ведущий поставщик IT-решений и сервисов.* Мы предлагаем комплексные IT-решения, облака, программное и аппаратное обеспечение, решения по цифровой трансформации и кибербезопасности, а также широкий спектр IT-услуг. </p><div class="info__body" data-v-098d08b2><div class="info__content" data-v-098d08b2><span class="info__title info__title--big" data-v-098d08b2>&gt; 30 лет</span><span class="info__text" data-v-098d08b2>на IT-рынке</span></div><div class="info__content" data-v-098d08b2><span class="info__title info__title--big" data-v-098d08b2>4600</span><span class="info__text" data-v-098d08b2>сотрудников в России</span></div><div class="info__content" data-v-098d08b2><span class="info__title info__title--big" data-v-098d08b2>25</span><span class="info__text" data-v-098d08b2>городов России</span></div><div class="info__content info__content--mg-left" data-v-098d08b2><span class="info__title info__title--big" data-v-098d08b2>2000 +</span><span class="info__text" data-v-098d08b2>разработчиков</span></div><div class="info__content" data-v-098d08b2><span class="info__title info__title--big" data-v-098d08b2>3000 +</span><span class="info__text info__text--al-centered" data-v-098d08b2>сотрудников ежегодно<br data-v-098d08b2> проходят оценку и обучение </span></div></div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Info.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-098d08b2"]]);
const _imports_0$4 = publicAssetsURL("/imgs/arrow-down.svg");
const _imports_1$3 = publicAssetsURL("/imgs/triangle.svg");
const _sfc_main$7 = {
  __name: "Nav",
  __ssrInlineRender: true,
  setup(__props) {
    const isVisible = ref(false);
    const isBodyVisible = ref(true);
    const isDropdownActive = ref(false);
    const isDropdownActiveFrom1440px = ref(false);
    const isDropdownHiddenOnLargeScreens = ref(false);
    const activeBtn = ref("Все");
    const currentMap = ref("/imgs/map-all.svg");
    const regions = [
      { name: "Все", map: "/imgs/map-all.svg" },
      { name: "Москва", map: "/imgs/map-moscow.svg" },
      { name: "Центр", map: "/imgs/map-center.svg" },
      { name: "Северо-Запад", map: "/imgs/map-northwest.svg" },
      { name: "Юг", map: "/imgs/map-south.svg" },
      { name: "Волга", map: "/imgs/map-volga.svg" },
      { name: "Урал", map: "/imgs/map-ural.svg" },
      { name: "Сибирь", map: "/imgs/map-siberia.svg" },
      { name: "Дальний Восток", map: "/imgs/map-fareast.svg" }
    ];
    const activeListIndex = ref(null);
    const windowWidth = ref(0);
    const shouldApplyOpacity = computed(() => {
      return isDropdownActiveFrom1440px.value && windowWidth.value >= 1440;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(isVisible)) {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-1253aa43><nav class="container-nav" data-v-1253aa43><div class="nav" data-v-1253aa43><button class="nav__content-btn" data-v-1253aa43> Офисы Softline <img${ssrRenderAttr("src", _imports_0$4)} alt="" class="nav__arrow" data-v-1253aa43></button>`);
        if (unref(isBodyVisible)) {
          _push(`<div class="${ssrRenderClass([{ "nav__body--opacity": unref(shouldApplyOpacity) }, "nav__body"])}" data-v-1253aa43><!--[-->`);
          ssrRenderList(regions, (region) => {
            _push(`<button class="${ssrRenderClass([{ active: unref(activeBtn) === region.name }, "nav__btn"])}" data-v-1253aa43>${ssrInterpolate(region.name)}</button>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(isDropdownActive) && !unref(isDropdownHiddenOnLargeScreens)) {
          _push(`<div class="nav__dropdown" data-v-1253aa43><button class="${ssrRenderClass([{ active: unref(activeListIndex) === 0 }, "nav__dropdown-btn"])}" data-v-1253aa43> Москва </button><div class="nav__content" data-v-1253aa43><button class="${ssrRenderClass([{ active: unref(activeListIndex) === 1 }, "nav__dropdown-btn"])}" data-v-1253aa43> Центр <img class="${ssrRenderClass([{ active: unref(activeListIndex) === 1 }, "nav__dropdown-arrow"])}"${ssrRenderAttr("src", _imports_1$3)} alt="" data-v-1253aa43></button>`);
          if (unref(activeListIndex) === 1) {
            _push(`<ul class="nav__list" data-v-1253aa43><li data-v-1253aa43>Воронеж</li><li data-v-1253aa43>Ярославль</li><li data-v-1253aa43>Белгород</li></ul>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="nav__content" data-v-1253aa43><button class="${ssrRenderClass([{ active: unref(activeListIndex) === 2 }, "nav__dropdown-btn"])}" data-v-1253aa43> Северо-Запад <img class="${ssrRenderClass([{ active: unref(activeListIndex) === 2 }, "nav__dropdown-arrow"])}"${ssrRenderAttr("src", _imports_1$3)} alt="" data-v-1253aa43></button>`);
          if (unref(activeListIndex) === 2) {
            _push(`<ul class="nav__list" data-v-1253aa43><li data-v-1253aa43>Санкт-Петербург</li><li data-v-1253aa43>Калининград</li></ul>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="nav__content" data-v-1253aa43><button class="${ssrRenderClass([{ active: unref(activeListIndex) === 3 }, "nav__dropdown-btn"])}" data-v-1253aa43> Юг <img class="${ssrRenderClass([{ active: unref(activeListIndex) === 3 }, "nav__dropdown-arrow"])}"${ssrRenderAttr("src", _imports_1$3)} alt="" data-v-1253aa43></button>`);
          if (unref(activeListIndex) === 3) {
            _push(`<ul class="nav__list" data-v-1253aa43><li data-v-1253aa43>Ростов-на-Дону</li><li data-v-1253aa43>Краснодар</li><li data-v-1253aa43>Волгоград</li></ul>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="nav__content" data-v-1253aa43><button class="${ssrRenderClass([{ active: unref(activeListIndex) === 4 }, "nav__dropdown-btn"])}" data-v-1253aa43> Волга <img class="${ssrRenderClass([{ active: unref(activeListIndex) === 4 }, "nav__dropdown-arrow"])}"${ssrRenderAttr("src", _imports_1$3)} alt="" data-v-1253aa43></button>`);
          if (unref(activeListIndex) === 4) {
            _push(`<ul class="nav__list" data-v-1253aa43><li data-v-1253aa43>Казань</li><li data-v-1253aa43>Самара</li><li data-v-1253aa43>Уфа</li><li data-v-1253aa43>Оренбург</li><li data-v-1253aa43> Нижний<br data-v-1253aa43> Новгород </li></ul>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="nav__content" data-v-1253aa43><button class="${ssrRenderClass([{ active: unref(activeListIndex) === 5 }, "nav__dropdown-btn"])}" data-v-1253aa43> Урал <img class="${ssrRenderClass([{ active: unref(activeListIndex) === 5 }, "nav__dropdown-arrow"])}"${ssrRenderAttr("src", _imports_1$3)} alt="" data-v-1253aa43></button>`);
          if (unref(activeListIndex) === 5) {
            _push(`<ul class="nav__list" data-v-1253aa43><li data-v-1253aa43>Екатеринбург</li><li data-v-1253aa43>Челябинск</li><li data-v-1253aa43>Пермь</li><li data-v-1253aa43>Сургут</li><li data-v-1253aa43>Тюмень</li><li data-v-1253aa43>Ижевск</li></ul>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="nav__content" data-v-1253aa43><button class="${ssrRenderClass([{ active: unref(activeListIndex) === 6 }, "nav__dropdown-btn"])}" data-v-1253aa43> Сибирь <img class="${ssrRenderClass([{ active: unref(activeListIndex) === 6 }, "nav__dropdown-arrow"])}"${ssrRenderAttr("src", _imports_1$3)} alt="" data-v-1253aa43></button>`);
          if (unref(activeListIndex) === 6) {
            _push(`<ul class="nav__list" data-v-1253aa43><li data-v-1253aa43>Новосибирск</li><li data-v-1253aa43>Омск</li><li data-v-1253aa43>Томск</li><li data-v-1253aa43>Красноярск</li><li data-v-1253aa43>Иркутск</li></ul>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="nav__content" data-v-1253aa43><button class="${ssrRenderClass([{ active: unref(activeListIndex) === 7 }, "nav__dropdown-btn"])}" data-v-1253aa43> Дальний Восток <img class="${ssrRenderClass([{ active: unref(activeListIndex) === 7 }, "nav__dropdown-arrow"])}"${ssrRenderAttr("src", _imports_1$3)} alt="" data-v-1253aa43></button>`);
          if (unref(activeListIndex) === 7) {
            _push(`<ul class="nav__list" data-v-1253aa43><li data-v-1253aa43>Хабаровск</li><li data-v-1253aa43>Владивосток</li></ul>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (unref(isDropdownActiveFrom1440px)) {
          _push(`<div class="nav__dropdown nav__dropdown--from1440px" data-v-1253aa43><button class="nav__dropdown-btn" data-v-1253aa43>Москва</button><div class="nav__content" data-v-1253aa43><button class="nav__dropdown-btn" data-v-1253aa43>Центр</button><ul class="nav__list" data-v-1253aa43><li data-v-1253aa43>Воронеж</li><li data-v-1253aa43>Ярославль</li><li data-v-1253aa43>Белгород</li></ul></div><div class="nav__content" data-v-1253aa43><button class="nav__dropdown-btn" data-v-1253aa43>Северо-Запад</button><ul class="nav__list" data-v-1253aa43><li data-v-1253aa43>Санкт-Петербург</li><li data-v-1253aa43>Калининград</li></ul></div><div class="nav__content" data-v-1253aa43><button class="nav__dropdown-btn" data-v-1253aa43>Юг</button><ul class="nav__list" data-v-1253aa43><li data-v-1253aa43>Ростов-на-Дону</li><li data-v-1253aa43>Краснодар</li><li data-v-1253aa43>Волгоград</li></ul></div><div class="nav__content" data-v-1253aa43><button class="nav__dropdown-btn" data-v-1253aa43>Волга</button><ul class="nav__list" data-v-1253aa43><li data-v-1253aa43>Казань</li><li data-v-1253aa43>Самара</li><li data-v-1253aa43>Уфа</li><li data-v-1253aa43>Оренбург</li><li data-v-1253aa43> Нижний<br data-v-1253aa43> Новгород </li></ul></div><div class="nav__content" data-v-1253aa43><button class="nav__dropdown-btn" data-v-1253aa43>Урал</button><ul class="nav__list" data-v-1253aa43><li data-v-1253aa43>Екатеринбург</li><li data-v-1253aa43>Челябинск</li><li data-v-1253aa43>Пермь</li><li data-v-1253aa43>Сургут</li><li data-v-1253aa43>Тюмень</li><li data-v-1253aa43>Ижевск</li></ul></div><div class="nav__content" data-v-1253aa43><button class="nav__dropdown-btn" data-v-1253aa43>Сибирь</button><ul class="nav__list" data-v-1253aa43><li data-v-1253aa43>Новосибирск</li><li data-v-1253aa43>Омск</li><li data-v-1253aa43>Томск</li><li data-v-1253aa43>Красноярск</li><li data-v-1253aa43>Иркутск</li></ul></div><div class="nav__content" data-v-1253aa43><button class="nav__dropdown-btn" data-v-1253aa43>Дальний Восток</button><ul class="nav__list" data-v-1253aa43><li data-v-1253aa43>Хабаровск</li><li data-v-1253aa43>Владивосток</li></ul></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</nav><div class="${ssrRenderClass([{ "content--opacity": unref(shouldApplyOpacity) }, "content"])}" data-v-1253aa43><img class="content__hero"${ssrRenderAttr("src", unref(currentMap))} alt="Map" data-v-1253aa43></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Nav.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-1253aa43"]]);
const _imports_0$3 = publicAssetsURL("/imgs/mission-from320px.svg");
const _imports_1$2 = publicAssetsURL("/imgs/mission-from1440px.svg");
const _sfc_main$6 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "content" }, _attrs))} data-v-6d0aa079><img class="content__hero content__hero--from320px"${ssrRenderAttr("src", _imports_0$3)} alt="" data-v-6d0aa079><img class="content__hero content__hero--from1440px"${ssrRenderAttr("src", _imports_1$2)} alt="" data-v-6d0aa079></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Mission.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-6d0aa079"]]);
const _imports_0$2 = publicAssetsURL("/imgs/arrow-white.svg");
const _sfc_main$5 = {
  __name: "Business",
  __ssrInlineRender: true,
  setup(__props) {
    const isVisible = ref(false);
    const businesses = [
      {
        img: "/imgs/business-1.svg",
        title: "Решения Softline",
        desc: "ГК Softline предлагает клиентам собственную линейку оборудования (ПК, серверы, торговое оборудование и проч.), разработку программных продуктов, облачных решений, решений в области информационной безопасности."
      },
      {
        img: "/imgs/business-2.svg",
        title: "Кибербезопасность",
        desc: "Softline обладает всеми необходимыми государственными лицензиями для организации проектов по информационной безопасности и аттестации."
      },
      {
        img: "/imgs/business-3.svg",
        title: "Импортозамещение",
        desc: "ГК Softline обладает широчайшим портфелем решений и услуг для импортозамещения, включая ПО и оборудование собственного производства."
      },
      {
        img: "/imgs/business-4.svg",
        title: "Облачные решения",
        desc: "Softline использует современные облачные решения как российских, так и международных вендоров для масштабирования бизнеса своих клиентов. Подписки, услуги, трансформация."
      },
      {
        img: "/imgs/business-5.svg",
        title: "Цифровая трансформация и разработка ПО",
        desc: "Softline использует современные технологи и новые возможности для увеличения производительности бизнеса заказчика. В штате ГК Softline - 2000+ разработчиков, которые трансформируют ПО под нужды конкретного предприятия."
      },
      {
        img: "/imgs/business-6.svg",
        title: "Техническая поддержка Softline",
        desc: "200+ инженеров, 24 часа в сутки, 7 дней в неделю, 12 месяцев в году, сервисное партнерство с 30+ мировыми производителями."
      }
    ];
    const expandedIndex = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["container", { "container--visible": unref(isVisible) }]
      }, _attrs))} data-v-047c39fa><h2 class="container__title" data-v-047c39fa>Направления бизнеса</h2><div class="container__list" data-v-047c39fa><!--[-->`);
      ssrRenderList(businesses, (business, index) => {
        _push(`<div class="${ssrRenderClass([{ "container__rect--full": unref(expandedIndex) === index }, "container__rect"])}" data-v-047c39fa><img class="${ssrRenderClass([{ "container__hero--full": unref(expandedIndex) === index }, "container__hero"])}"${ssrRenderAttr("src", business.img)}${ssrRenderAttr("alt", business.title)} data-v-047c39fa><div class="container__hero-overlay" data-v-047c39fa></div><div class="${ssrRenderClass([{ "container__content--full": unref(expandedIndex) === index }, "container__content"])}" data-v-047c39fa><span class="container__rect-title" data-v-047c39fa>${ssrInterpolate(business.title)}</span><img${ssrRenderAttr("src", _imports_0$2)} alt="arrow" class="${ssrRenderClass([{ "container__rect-arrow--full": unref(expandedIndex) === index }, "container__rect-arrow"])}" data-v-047c39fa></div>`);
        if (unref(expandedIndex) === index) {
          _push(`<p class="container__desc" data-v-047c39fa>${ssrInterpolate(business.desc)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Business.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-047c39fa"]]);
const _imports_0$1 = publicAssetsURL("/imgs/dmc-icon.svg");
const _imports_1$1 = publicAssetsURL("/imgs/holiday-on-birthday-icon.svg");
const _imports_2 = publicAssetsURL("/imgs/phone-icon.svg");
const _imports_3 = publicAssetsURL("/imgs/dumbbell-icon.svg");
const _imports_4 = publicAssetsURL("/imgs/lti-icon.svg");
const _imports_5 = publicAssetsURL("/imgs/printer-icon.svg");
const _imports_6 = publicAssetsURL("/imgs/ipoteka-icon.svg");
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "content" }, _attrs))} data-v-8857e3bd><div class="container" data-v-8857e3bd><h2 class="container__title" data-v-8857e3bd>Компенсационный пакет</h2><div class="container__list" data-v-8857e3bd><div class="container__content" data-v-8857e3bd><div class="container__cirle" data-v-8857e3bd><img${ssrRenderAttr("src", _imports_0$1)} alt="" class="container__cirle-icon" data-v-8857e3bd></div><span class="container__text" data-v-8857e3bd>ДМС</span></div><div class="container__content" data-v-8857e3bd><div class="container__cirle" data-v-8857e3bd><img${ssrRenderAttr("src", _imports_1$1)} alt="" class="container__cirle-icon" data-v-8857e3bd></div><span class="container__text" data-v-8857e3bd>Выходной<br data-v-8857e3bd> в день рождения</span></div><div class="container__content" data-v-8857e3bd><div class="container__cirle" data-v-8857e3bd><img${ssrRenderAttr("src", _imports_2)} alt="" class="container__cirle-icon" data-v-8857e3bd></div><span class="container__text" data-v-8857e3bd>Корпоративная<br data-v-8857e3bd> мобильная связь</span></div><div class="container__content" data-v-8857e3bd><div class="container__cirle" data-v-8857e3bd><img${ssrRenderAttr("src", _imports_3)} alt="" class="container__cirle-icon" data-v-8857e3bd></div><span class="container__text" data-v-8857e3bd>Корпоративные<br data-v-8857e3bd> скидки на спорт</span></div><div class="container__content" data-v-8857e3bd><div class="container__cirle" data-v-8857e3bd><img${ssrRenderAttr("src", _imports_4)} alt="" class="container__cirle-icon" data-v-8857e3bd></div><span class="container__text" data-v-8857e3bd>LTI</span></div></div><div class="container__border" data-v-8857e3bd></div><h2 class="container__title container__title--small" data-v-8857e3bd> Программа дополнительной мотивации<br data-v-8857e3bd><span class="container__title--red" data-v-8857e3bd>доплата 12% от суммы</span></h2><div class="container__list" data-v-8857e3bd><div class="container__content" data-v-8857e3bd><div class="container__cirle" data-v-8857e3bd><img${ssrRenderAttr("src", _imports_5)} alt="" class="container__cirle-icon" data-v-8857e3bd></div><span class="container__text" data-v-8857e3bd>Оргтехники</span></div><div class="container__content" data-v-8857e3bd><div class="container__cirle" data-v-8857e3bd><img${ssrRenderAttr("src", _imports_0$1)} alt="" class="container__cirle-icon" data-v-8857e3bd></div><span class="container__text" data-v-8857e3bd>ДМС</span></div><div class="container__content" data-v-8857e3bd><div class="container__cirle" data-v-8857e3bd><img${ssrRenderAttr("src", _imports_6)} alt="" class="container__cirle-icon" data-v-8857e3bd></div><span class="container__text" data-v-8857e3bd>Ипотеки</span></div></div></div><div class="container container--over" data-v-8857e3bd><h2 class="container__title" data-v-8857e3bd>Компенсационный пакет</h2><div class="container__list" data-v-8857e3bd><div class="container__content" data-v-8857e3bd><div class="container__cirle" data-v-8857e3bd><img${ssrRenderAttr("src", _imports_0$1)} alt="" class="container__cirle-icon" data-v-8857e3bd></div><span class="container__text" data-v-8857e3bd>ДМС</span></div><div class="container__content" data-v-8857e3bd><div class="container__cirle" data-v-8857e3bd><img${ssrRenderAttr("src", _imports_1$1)} alt="" class="container__cirle-icon" data-v-8857e3bd></div><span class="container__text" data-v-8857e3bd>Выходной<br data-v-8857e3bd> в день рождения</span></div><div class="container__content" data-v-8857e3bd><div class="container__cirle" data-v-8857e3bd><img${ssrRenderAttr("src", _imports_2)} alt="" class="container__cirle-icon" data-v-8857e3bd></div><span class="container__text" data-v-8857e3bd>Корпоративная<br data-v-8857e3bd> мобильная связь</span></div><div class="container__content" data-v-8857e3bd><div class="container__cirle" data-v-8857e3bd><img${ssrRenderAttr("src", _imports_3)} alt="" class="container__cirle-icon" data-v-8857e3bd></div><span class="container__text" data-v-8857e3bd>Корпоративные<br data-v-8857e3bd> скидки на спорт</span></div><div class="container__content" data-v-8857e3bd><div class="container__cirle" data-v-8857e3bd><img${ssrRenderAttr("src", _imports_4)} alt="" class="container__cirle-icon" data-v-8857e3bd></div><span class="container__text" data-v-8857e3bd>LTI</span></div></div><div class="container__border" data-v-8857e3bd></div><h2 class="container__title container__title--small" data-v-8857e3bd> Программа дополнительной мотивации<br data-v-8857e3bd><span class="container__title--red" data-v-8857e3bd>доплата 12% от суммы</span></h2><div class="container__list" data-v-8857e3bd><div class="container__content" data-v-8857e3bd><div class="container__cirle" data-v-8857e3bd><img${ssrRenderAttr("src", _imports_5)} alt="" class="container__cirle-icon" data-v-8857e3bd></div><span class="container__text" data-v-8857e3bd>Оргтехники</span></div><div class="container__content" data-v-8857e3bd><div class="container__cirle" data-v-8857e3bd><img${ssrRenderAttr("src", _imports_0$1)} alt="" class="container__cirle-icon" data-v-8857e3bd></div><span class="container__text" data-v-8857e3bd>ДМС</span></div><div class="container__content" data-v-8857e3bd><div class="container__cirle" data-v-8857e3bd><img${ssrRenderAttr("src", _imports_6)} alt="" class="container__cirle-icon" data-v-8857e3bd></div><span class="container__text" data-v-8857e3bd>Ипотеки</span></div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Compensation.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-8857e3bd"]]);
const _imports_0 = publicAssetsURL("/imgs/arrow-left.svg");
const _imports_1 = publicAssetsURL("/imgs/arrow-right.svg");
const _sfc_main$3 = {
  __name: "UISlider",
  __ssrInlineRender: true,
  setup(__props) {
    const heroes = [
      "/imgs/slide-1.svg",
      "/imgs/slide-2.svg",
      "/imgs/slide-3.svg",
      "/imgs/slide-4.svg",
      "/imgs/slide-5.svg"
    ];
    const activeIndex = ref(0);
    ref(null);
    ref(0);
    heroes.length;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "slider" }, _attrs))} data-v-648f72c0><div class="slider__content" data-v-648f72c0><h2 class="slider__title" data-v-648f72c0>Корпоративная жизнь</h2><div class="slider__btns" data-v-648f72c0><button class="slider__prev-btn" data-v-648f72c0><img${ssrRenderAttr("src", _imports_0)} alt="arrow-left" data-v-648f72c0></button><button class="slider__next-btn" data-v-648f72c0><img${ssrRenderAttr("src", _imports_1)} alt="arrow-right" data-v-648f72c0></button></div></div><div class="slider__overflow" data-v-648f72c0><div class="slider__list" data-v-648f72c0><!--[-->`);
      ssrRenderList(heroes, (hero, index) => {
        _push(`<div class="slider__hero slider__slide" data-v-648f72c0><img${ssrRenderAttr("src", hero)} alt="hero" data-v-648f72c0></div>`);
      });
      _push(`<!--]--></div></div><div class="slider__indicators" data-v-648f72c0><!--[-->`);
      ssrRenderList(heroes, (image, index) => {
        _push(`<div class="${ssrRenderClass([{ active: index === unref(activeIndex) }, "slider__indicator"])}" data-v-648f72c0></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/UISlider.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-648f72c0"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UIHeader = __nuxt_component_0;
  const _component_UIInfo = __nuxt_component_1;
  const _component_UINav = __nuxt_component_2;
  const _component_UIMission = __nuxt_component_3;
  const _component_UIBusiness = __nuxt_component_4;
  const _component_UICompensation = __nuxt_component_5;
  const _component_UISlider = __nuxt_component_6;
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "app" }, _attrs))}><div class="page-container">`);
  _push(ssrRenderComponent(_component_UIHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_UIInfo, null, null, _parent));
  _push(ssrRenderComponent(_component_UINav, null, null, _parent));
  _push(ssrRenderComponent(_component_UIMission, null, null, _parent));
  _push(ssrRenderComponent(_component_UIBusiness, null, null, _parent));
  _push(ssrRenderComponent(_component_UICompensation, null, null, _parent));
  _push(ssrRenderComponent(_component_UISlider, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    _error.stack ? _error.stack.split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n") : "";
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import('./error-404-Ba1knVJB.mjs'));
    const _Error = defineAsyncComponent(() => import('./error-500-2NZUnzWz.mjs'));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error = nuxt.payload.error || createError(error);
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

export { _export_sfc as _, __nuxt_component_0$1 as a, entry$1 as default, injectHead as i, resolveUnrefHeadInput as r };
//# sourceMappingURL=server.mjs.map
