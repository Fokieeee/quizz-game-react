(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerpolicy && (o.referrerPolicy = l.referrerpolicy),
      l.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function Gc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Hr = {},
  Xc = {
    get exports() {
      return Hr;
    },
    set exports(e) {
      Hr = e;
    },
  },
  gl = {},
  De = {},
  Zc = {
    get exports() {
      return De;
    },
    set exports(e) {
      De = e;
    },
  },
  L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ur = Symbol.for("react.element"),
  Jc = Symbol.for("react.portal"),
  qc = Symbol.for("react.fragment"),
  bc = Symbol.for("react.strict_mode"),
  ef = Symbol.for("react.profiler"),
  tf = Symbol.for("react.provider"),
  nf = Symbol.for("react.context"),
  rf = Symbol.for("react.forward_ref"),
  lf = Symbol.for("react.suspense"),
  of = Symbol.for("react.memo"),
  uf = Symbol.for("react.lazy"),
  wu = Symbol.iterator;
function sf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (wu && e[wu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Is = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  $s = Object.assign,
  Us = {};
function pn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Us),
    (this.updater = n || Is);
}
pn.prototype.isReactComponent = {};
pn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
pn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function As() {}
As.prototype = pn.prototype;
function yi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Us),
    (this.updater = n || Is);
}
var gi = (yi.prototype = new As());
gi.constructor = yi;
$s(gi, pn.prototype);
gi.isPureReactComponent = !0;
var Su = Array.isArray,
  Bs = Object.prototype.hasOwnProperty,
  wi = { current: null },
  Vs = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ws(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Bs.call(t, r) && !Vs.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: ur,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: wi.current,
  };
}
function af(e, t) {
  return {
    $$typeof: ur,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Si(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ur;
}
function cf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ku = /\/+/g;
function Il(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? cf("" + e.key)
    : t.toString(36);
}
function Rr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ur:
          case Jc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Il(i, 0) : r),
      Su(l)
        ? ((n = ""),
          e != null && (n = e.replace(ku, "$&/") + "/"),
          Rr(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (Si(l) &&
            (l = af(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(ku, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Su(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Il(o, u);
      i += Rr(o, t, n, s, l);
    }
  else if (((s = sf(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Il(o, u++)), (i += Rr(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function mr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Rr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function ff(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ue = { current: null },
  Dr = { transition: null },
  df = {
    ReactCurrentDispatcher: ue,
    ReactCurrentBatchConfig: Dr,
    ReactCurrentOwner: wi,
  };
L.Children = {
  map: mr,
  forEach: function (e, t, n) {
    mr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      mr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      mr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Si(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
L.Component = pn;
L.Fragment = qc;
L.Profiler = ef;
L.PureComponent = yi;
L.StrictMode = bc;
L.Suspense = lf;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = df;
L.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = $s({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = wi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Bs.call(t, s) &&
        !Vs.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: ur, type: e.type, key: l, ref: o, props: r, _owner: i };
};
L.createContext = function (e) {
  return (
    (e = {
      $$typeof: nf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: tf, _context: e }),
    (e.Consumer = e)
  );
};
L.createElement = Ws;
L.createFactory = function (e) {
  var t = Ws.bind(null, e);
  return (t.type = e), t;
};
L.createRef = function () {
  return { current: null };
};
L.forwardRef = function (e) {
  return { $$typeof: rf, render: e };
};
L.isValidElement = Si;
L.lazy = function (e) {
  return { $$typeof: uf, _payload: { _status: -1, _result: e }, _init: ff };
};
L.memo = function (e, t) {
  return { $$typeof: of, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function (e) {
  var t = Dr.transition;
  Dr.transition = {};
  try {
    e();
  } finally {
    Dr.transition = t;
  }
};
L.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
L.useCallback = function (e, t) {
  return ue.current.useCallback(e, t);
};
L.useContext = function (e) {
  return ue.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
  return ue.current.useDeferredValue(e);
};
L.useEffect = function (e, t) {
  return ue.current.useEffect(e, t);
};
L.useId = function () {
  return ue.current.useId();
};
L.useImperativeHandle = function (e, t, n) {
  return ue.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function (e, t) {
  return ue.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function (e, t) {
  return ue.current.useLayoutEffect(e, t);
};
L.useMemo = function (e, t) {
  return ue.current.useMemo(e, t);
};
L.useReducer = function (e, t, n) {
  return ue.current.useReducer(e, t, n);
};
L.useRef = function (e) {
  return ue.current.useRef(e);
};
L.useState = function (e) {
  return ue.current.useState(e);
};
L.useSyncExternalStore = function (e, t, n) {
  return ue.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function () {
  return ue.current.useTransition();
};
L.version = "18.2.0";
(function (e) {
  e.exports = L;
})(Zc);
const pf = Gc(De);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mf = De,
  vf = Symbol.for("react.element"),
  hf = Symbol.for("react.fragment"),
  yf = Object.prototype.hasOwnProperty,
  gf = mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  wf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Hs(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) yf.call(t, r) && !wf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: vf,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: gf.current,
  };
}
gl.Fragment = hf;
gl.jsx = Hs;
gl.jsxs = Hs;
(function (e) {
  e.exports = gl;
})(Xc);
const Z = Hr.jsx,
  rn = Hr.jsxs;
var yo = {},
  go = {},
  Sf = {
    get exports() {
      return go;
    },
    set exports(e) {
      go = e;
    },
  },
  Se = {},
  wo = {},
  kf = {
    get exports() {
      return wo;
    },
    set exports(e) {
      wo = e;
    },
  },
  Qs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, N) {
    var T = E.length;
    E.push(N);
    e: for (; 0 < T; ) {
      var W = (T - 1) >>> 1,
        G = E[W];
      if (0 < l(G, N)) (E[W] = N), (E[T] = G), (T = W);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var N = E[0],
      T = E.pop();
    if (T !== N) {
      E[0] = T;
      e: for (var W = 0, G = E.length, dr = G >>> 1; W < dr; ) {
        var St = 2 * (W + 1) - 1,
          jl = E[St],
          kt = St + 1,
          pr = E[kt];
        if (0 > l(jl, T))
          kt < G && 0 > l(pr, jl)
            ? ((E[W] = pr), (E[kt] = T), (W = kt))
            : ((E[W] = jl), (E[St] = T), (W = St));
        else if (kt < G && 0 > l(pr, T)) (E[W] = pr), (E[kt] = T), (W = kt);
        else break e;
      }
    }
    return N;
  }
  function l(E, N) {
    var T = E.sortIndex - N.sortIndex;
    return T !== 0 ? T : E.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    c = [],
    m = 1,
    v = null,
    p = 3,
    y = !1,
    S = !1,
    w = !1,
    z = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(E) {
    for (var N = n(c); N !== null; ) {
      if (N.callback === null) r(c);
      else if (N.startTime <= E)
        r(c), (N.sortIndex = N.expirationTime), t(s, N);
      else break;
      N = n(c);
    }
  }
  function h(E) {
    if (((w = !1), d(E), !S))
      if (n(s) !== null) (S = !0), Ml(k);
      else {
        var N = n(c);
        N !== null && Fl(h, N.startTime - E);
      }
  }
  function k(E, N) {
    (S = !1), w && ((w = !1), f(x), (x = -1)), (y = !0);
    var T = p;
    try {
      for (
        d(N), v = n(s);
        v !== null && (!(v.expirationTime > N) || (E && !ze()));

      ) {
        var W = v.callback;
        if (typeof W == "function") {
          (v.callback = null), (p = v.priorityLevel);
          var G = W(v.expirationTime <= N);
          (N = e.unstable_now()),
            typeof G == "function" ? (v.callback = G) : v === n(s) && r(s),
            d(N);
        } else r(s);
        v = n(s);
      }
      if (v !== null) var dr = !0;
      else {
        var St = n(c);
        St !== null && Fl(h, St.startTime - N), (dr = !1);
      }
      return dr;
    } finally {
      (v = null), (p = T), (y = !1);
    }
  }
  var C = !1,
    P = null,
    x = -1,
    V = 5,
    O = -1;
  function ze() {
    return !(e.unstable_now() - O < V);
  }
  function yn() {
    if (P !== null) {
      var E = e.unstable_now();
      O = E;
      var N = !0;
      try {
        N = P(!0, E);
      } finally {
        N ? gn() : ((C = !1), (P = null));
      }
    } else C = !1;
  }
  var gn;
  if (typeof a == "function")
    gn = function () {
      a(yn);
    };
  else if (typeof MessageChannel < "u") {
    var gu = new MessageChannel(),
      Yc = gu.port2;
    (gu.port1.onmessage = yn),
      (gn = function () {
        Yc.postMessage(null);
      });
  } else
    gn = function () {
      z(yn, 0);
    };
  function Ml(E) {
    (P = E), C || ((C = !0), gn());
  }
  function Fl(E, N) {
    x = z(function () {
      E(e.unstable_now());
    }, N);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || y || ((S = !0), Ml(k));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (V = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (E) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = p;
      }
      var T = p;
      p = N;
      try {
        return E();
      } finally {
        p = T;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, N) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var T = p;
      p = E;
      try {
        return N();
      } finally {
        p = T;
      }
    }),
    (e.unstable_scheduleCallback = function (E, N, T) {
      var W = e.unstable_now();
      switch (
        (typeof T == "object" && T !== null
          ? ((T = T.delay), (T = typeof T == "number" && 0 < T ? W + T : W))
          : (T = W),
        E)
      ) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return (
        (G = T + G),
        (E = {
          id: m++,
          callback: N,
          priorityLevel: E,
          startTime: T,
          expirationTime: G,
          sortIndex: -1,
        }),
        T > W
          ? ((E.sortIndex = T),
            t(c, E),
            n(s) === null &&
              E === n(c) &&
              (w ? (f(x), (x = -1)) : (w = !0), Fl(h, T - W)))
          : ((E.sortIndex = G), t(s, E), S || y || ((S = !0), Ml(k))),
        E
      );
    }),
    (e.unstable_shouldYield = ze),
    (e.unstable_wrapCallback = function (E) {
      var N = p;
      return function () {
        var T = p;
        p = N;
        try {
          return E.apply(this, arguments);
        } finally {
          p = T;
        }
      };
    });
})(Qs);
(function (e) {
  e.exports = Qs;
})(kf);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ks = De,
  ye = wo;
function g(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ys = new Set(),
  Vn = {};
function jt(e, t) {
  ln(e, t), ln(e + "Capture", t);
}
function ln(e, t) {
  for (Vn[e] = t, e = 0; e < t.length; e++) Ys.add(t[e]);
}
var Xe = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  So = Object.prototype.hasOwnProperty,
  _f =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  _u = {},
  Eu = {};
function Ef(e) {
  return So.call(Eu, e)
    ? !0
    : So.call(_u, e)
    ? !1
    : _f.test(e)
    ? (Eu[e] = !0)
    : ((_u[e] = !0), !1);
}
function Cf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Pf(e, t, n, r) {
  if (t === null || typeof t > "u" || Cf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function se(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new se(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ee[t] = new se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ee[e] = new se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ee[e] = new se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ee[e] = new se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ee[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ki = /[\-:]([a-z])/g;
function _i(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ki, _i);
    ee[t] = new se(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ki, _i);
    ee[t] = new se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ki, _i);
  ee[t] = new se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new se(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ei(e, t, n, r) {
  var l = ee.hasOwnProperty(t) ? ee[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Pf(t, n, l, r) && (n = null),
    r || l === null
      ? Ef(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var be = Ks.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  vr = Symbol.for("react.element"),
  Ut = Symbol.for("react.portal"),
  At = Symbol.for("react.fragment"),
  Ci = Symbol.for("react.strict_mode"),
  ko = Symbol.for("react.profiler"),
  Gs = Symbol.for("react.provider"),
  Xs = Symbol.for("react.context"),
  Pi = Symbol.for("react.forward_ref"),
  _o = Symbol.for("react.suspense"),
  Eo = Symbol.for("react.suspense_list"),
  xi = Symbol.for("react.memo"),
  tt = Symbol.for("react.lazy"),
  Zs = Symbol.for("react.offscreen"),
  Cu = Symbol.iterator;
function wn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Cu && e[Cu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var A = Object.assign,
  $l;
function zn(e) {
  if ($l === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      $l = (t && t[1]) || "";
    }
  return (
    `
` +
    $l +
    e
  );
}
var Ul = !1;
function Al(e, t) {
  if (!e || Ul) return "";
  Ul = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Ul = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? zn(e) : "";
}
function xf(e) {
  switch (e.tag) {
    case 5:
      return zn(e.type);
    case 16:
      return zn("Lazy");
    case 13:
      return zn("Suspense");
    case 19:
      return zn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Al(e.type, !1)), e;
    case 11:
      return (e = Al(e.type.render, !1)), e;
    case 1:
      return (e = Al(e.type, !0)), e;
    default:
      return "";
  }
}
function Co(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case At:
      return "Fragment";
    case Ut:
      return "Portal";
    case ko:
      return "Profiler";
    case Ci:
      return "StrictMode";
    case _o:
      return "Suspense";
    case Eo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Xs:
        return (e.displayName || "Context") + ".Consumer";
      case Gs:
        return (e._context.displayName || "Context") + ".Provider";
      case Pi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case xi:
        return (
          (t = e.displayName || null), t !== null ? t : Co(e.type) || "Memo"
        );
      case tt:
        (t = e._payload), (e = e._init);
        try {
          return Co(e(t));
        } catch {}
    }
  return null;
}
function Nf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Co(t);
    case 8:
      return t === Ci ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function vt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Js(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function zf(e) {
  var t = Js(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function hr(e) {
  e._valueTracker || (e._valueTracker = zf(e));
}
function qs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Js(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Qr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Po(e, t) {
  var n = t.checked;
  return A({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Pu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = vt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function bs(e, t) {
  (t = t.checked), t != null && Ei(e, "checked", t, !1);
}
function xo(e, t) {
  bs(e, t);
  var n = vt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? No(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && No(e, t.type, vt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function xu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function No(e, t, n) {
  (t !== "number" || Qr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Tn = Array.isArray;
function Jt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + vt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function zo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(g(91));
  return A({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Nu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(g(92));
      if (Tn(n)) {
        if (1 < n.length) throw Error(g(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: vt(n) };
}
function ea(e, t) {
  var n = vt(t.value),
    r = vt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function zu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ta(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function To(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ta(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var yr,
  na = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        yr = yr || document.createElement("div"),
          yr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = yr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Wn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Dn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Tf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Dn).forEach(function (e) {
  Tf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Dn[t] = Dn[e]);
  });
});
function ra(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Dn.hasOwnProperty(e) && Dn[e])
    ? ("" + t).trim()
    : t + "px";
}
function la(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = ra(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Lf = A(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Lo(e, t) {
  if (t) {
    if (Lf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(g(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(g(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(g(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(g(62));
  }
}
function Oo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ro = null;
function Ni(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Do = null,
  qt = null,
  bt = null;
function Tu(e) {
  if ((e = cr(e))) {
    if (typeof Do != "function") throw Error(g(280));
    var t = e.stateNode;
    t && ((t = El(t)), Do(e.stateNode, e.type, t));
  }
}
function oa(e) {
  qt ? (bt ? bt.push(e) : (bt = [e])) : (qt = e);
}
function ia() {
  if (qt) {
    var e = qt,
      t = bt;
    if (((bt = qt = null), Tu(e), t)) for (e = 0; e < t.length; e++) Tu(t[e]);
  }
}
function ua(e, t) {
  return e(t);
}
function sa() {}
var Bl = !1;
function aa(e, t, n) {
  if (Bl) return e(t, n);
  Bl = !0;
  try {
    return ua(e, t, n);
  } finally {
    (Bl = !1), (qt !== null || bt !== null) && (sa(), ia());
  }
}
function Hn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = El(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(g(231, t, typeof n));
  return n;
}
var Mo = !1;
if (Xe)
  try {
    var Sn = {};
    Object.defineProperty(Sn, "passive", {
      get: function () {
        Mo = !0;
      },
    }),
      window.addEventListener("test", Sn, Sn),
      window.removeEventListener("test", Sn, Sn);
  } catch {
    Mo = !1;
  }
function Of(e, t, n, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (m) {
    this.onError(m);
  }
}
var Mn = !1,
  Kr = null,
  Yr = !1,
  Fo = null,
  Rf = {
    onError: function (e) {
      (Mn = !0), (Kr = e);
    },
  };
function Df(e, t, n, r, l, o, i, u, s) {
  (Mn = !1), (Kr = null), Of.apply(Rf, arguments);
}
function Mf(e, t, n, r, l, o, i, u, s) {
  if ((Df.apply(this, arguments), Mn)) {
    if (Mn) {
      var c = Kr;
      (Mn = !1), (Kr = null);
    } else throw Error(g(198));
    Yr || ((Yr = !0), (Fo = c));
  }
}
function It(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ca(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Lu(e) {
  if (It(e) !== e) throw Error(g(188));
}
function Ff(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = It(e)), t === null)) throw Error(g(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Lu(l), e;
        if (o === r) return Lu(l), t;
        o = o.sibling;
      }
      throw Error(g(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(g(189));
      }
    }
    if (n.alternate !== r) throw Error(g(190));
  }
  if (n.tag !== 3) throw Error(g(188));
  return n.stateNode.current === n ? e : t;
}
function fa(e) {
  return (e = Ff(e)), e !== null ? da(e) : null;
}
function da(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = da(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var pa = ye.unstable_scheduleCallback,
  Ou = ye.unstable_cancelCallback,
  jf = ye.unstable_shouldYield,
  If = ye.unstable_requestPaint,
  H = ye.unstable_now,
  $f = ye.unstable_getCurrentPriorityLevel,
  zi = ye.unstable_ImmediatePriority,
  ma = ye.unstable_UserBlockingPriority,
  Gr = ye.unstable_NormalPriority,
  Uf = ye.unstable_LowPriority,
  va = ye.unstable_IdlePriority,
  wl = null,
  Be = null;
function Af(e) {
  if (Be && typeof Be.onCommitFiberRoot == "function")
    try {
      Be.onCommitFiberRoot(wl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Fe = Math.clz32 ? Math.clz32 : Wf,
  Bf = Math.log,
  Vf = Math.LN2;
function Wf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Bf(e) / Vf) | 0)) | 0;
}
var gr = 64,
  wr = 4194304;
function Ln(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Xr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = Ln(u)) : ((o &= i), o !== 0 && (r = Ln(o)));
  } else (i = n & ~l), i !== 0 ? (r = Ln(i)) : o !== 0 && (r = Ln(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Fe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Hf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Qf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Fe(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = Hf(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function jo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ha() {
  var e = gr;
  return (gr <<= 1), !(gr & 4194240) && (gr = 64), e;
}
function Vl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function sr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Fe(t)),
    (e[t] = n);
}
function Kf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Fe(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Ti(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Fe(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var D = 0;
function ya(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ga,
  Li,
  wa,
  Sa,
  ka,
  Io = !1,
  Sr = [],
  ut = null,
  st = null,
  at = null,
  Qn = new Map(),
  Kn = new Map(),
  rt = [],
  Yf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ru(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ut = null;
      break;
    case "dragenter":
    case "dragleave":
      st = null;
      break;
    case "mouseover":
    case "mouseout":
      at = null;
      break;
    case "pointerover":
    case "pointerout":
      Qn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Kn.delete(t.pointerId);
  }
}
function kn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = cr(t)), t !== null && Li(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Gf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (ut = kn(ut, e, t, n, r, l)), !0;
    case "dragenter":
      return (st = kn(st, e, t, n, r, l)), !0;
    case "mouseover":
      return (at = kn(at, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Qn.set(o, kn(Qn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Kn.set(o, kn(Kn.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function _a(e) {
  var t = Pt(e.target);
  if (t !== null) {
    var n = It(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ca(n)), t !== null)) {
          (e.blockedOn = t),
            ka(e.priority, function () {
              wa(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Mr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = $o(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ro = r), n.target.dispatchEvent(r), (Ro = null);
    } else return (t = cr(n)), t !== null && Li(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Du(e, t, n) {
  Mr(e) && n.delete(t);
}
function Xf() {
  (Io = !1),
    ut !== null && Mr(ut) && (ut = null),
    st !== null && Mr(st) && (st = null),
    at !== null && Mr(at) && (at = null),
    Qn.forEach(Du),
    Kn.forEach(Du);
}
function _n(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Io ||
      ((Io = !0),
      ye.unstable_scheduleCallback(ye.unstable_NormalPriority, Xf)));
}
function Yn(e) {
  function t(l) {
    return _n(l, e);
  }
  if (0 < Sr.length) {
    _n(Sr[0], e);
    for (var n = 1; n < Sr.length; n++) {
      var r = Sr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ut !== null && _n(ut, e),
      st !== null && _n(st, e),
      at !== null && _n(at, e),
      Qn.forEach(t),
      Kn.forEach(t),
      n = 0;
    n < rt.length;
    n++
  )
    (r = rt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < rt.length && ((n = rt[0]), n.blockedOn === null); )
    _a(n), n.blockedOn === null && rt.shift();
}
var en = be.ReactCurrentBatchConfig,
  Zr = !0;
function Zf(e, t, n, r) {
  var l = D,
    o = en.transition;
  en.transition = null;
  try {
    (D = 1), Oi(e, t, n, r);
  } finally {
    (D = l), (en.transition = o);
  }
}
function Jf(e, t, n, r) {
  var l = D,
    o = en.transition;
  en.transition = null;
  try {
    (D = 4), Oi(e, t, n, r);
  } finally {
    (D = l), (en.transition = o);
  }
}
function Oi(e, t, n, r) {
  if (Zr) {
    var l = $o(e, t, n, r);
    if (l === null) ql(e, t, r, Jr, n), Ru(e, r);
    else if (Gf(l, e, t, n, r)) r.stopPropagation();
    else if ((Ru(e, r), t & 4 && -1 < Yf.indexOf(e))) {
      for (; l !== null; ) {
        var o = cr(l);
        if (
          (o !== null && ga(o),
          (o = $o(e, t, n, r)),
          o === null && ql(e, t, r, Jr, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else ql(e, t, r, null, n);
  }
}
var Jr = null;
function $o(e, t, n, r) {
  if (((Jr = null), (e = Ni(r)), (e = Pt(e)), e !== null))
    if (((t = It(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ca(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Jr = e), null;
}
function Ea(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch ($f()) {
        case zi:
          return 1;
        case ma:
          return 4;
        case Gr:
        case Uf:
          return 16;
        case va:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ot = null,
  Ri = null,
  Fr = null;
function Ca() {
  if (Fr) return Fr;
  var e,
    t = Ri,
    n = t.length,
    r,
    l = "value" in ot ? ot.value : ot.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Fr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function jr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function kr() {
  return !0;
}
function Mu() {
  return !1;
}
function ke(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? kr
        : Mu),
      (this.isPropagationStopped = Mu),
      this
    );
  }
  return (
    A(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = kr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = kr));
      },
      persist: function () {},
      isPersistent: kr,
    }),
    t
  );
}
var mn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Di = ke(mn),
  ar = A({}, mn, { view: 0, detail: 0 }),
  qf = ke(ar),
  Wl,
  Hl,
  En,
  Sl = A({}, ar, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Mi,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== En &&
            (En && e.type === "mousemove"
              ? ((Wl = e.screenX - En.screenX), (Hl = e.screenY - En.screenY))
              : (Hl = Wl = 0),
            (En = e)),
          Wl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Hl;
    },
  }),
  Fu = ke(Sl),
  bf = A({}, Sl, { dataTransfer: 0 }),
  ed = ke(bf),
  td = A({}, ar, { relatedTarget: 0 }),
  Ql = ke(td),
  nd = A({}, mn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  rd = ke(nd),
  ld = A({}, mn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  od = ke(ld),
  id = A({}, mn, { data: 0 }),
  ju = ke(id),
  ud = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  sd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  ad = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function cd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ad[e]) ? !!t[e] : !1;
}
function Mi() {
  return cd;
}
var fd = A({}, ar, {
    key: function (e) {
      if (e.key) {
        var t = ud[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = jr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? sd[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Mi,
    charCode: function (e) {
      return e.type === "keypress" ? jr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? jr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  dd = ke(fd),
  pd = A({}, Sl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Iu = ke(pd),
  md = A({}, ar, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Mi,
  }),
  vd = ke(md),
  hd = A({}, mn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  yd = ke(hd),
  gd = A({}, Sl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  wd = ke(gd),
  Sd = [9, 13, 27, 32],
  Fi = Xe && "CompositionEvent" in window,
  Fn = null;
Xe && "documentMode" in document && (Fn = document.documentMode);
var kd = Xe && "TextEvent" in window && !Fn,
  Pa = Xe && (!Fi || (Fn && 8 < Fn && 11 >= Fn)),
  $u = String.fromCharCode(32),
  Uu = !1;
function xa(e, t) {
  switch (e) {
    case "keyup":
      return Sd.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Na(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Bt = !1;
function _d(e, t) {
  switch (e) {
    case "compositionend":
      return Na(t);
    case "keypress":
      return t.which !== 32 ? null : ((Uu = !0), $u);
    case "textInput":
      return (e = t.data), e === $u && Uu ? null : e;
    default:
      return null;
  }
}
function Ed(e, t) {
  if (Bt)
    return e === "compositionend" || (!Fi && xa(e, t))
      ? ((e = Ca()), (Fr = Ri = ot = null), (Bt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Pa && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Cd = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Au(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Cd[e.type] : t === "textarea";
}
function za(e, t, n, r) {
  oa(r),
    (t = qr(t, "onChange")),
    0 < t.length &&
      ((n = new Di("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var jn = null,
  Gn = null;
function Pd(e) {
  Ua(e, 0);
}
function kl(e) {
  var t = Ht(e);
  if (qs(t)) return e;
}
function xd(e, t) {
  if (e === "change") return t;
}
var Ta = !1;
if (Xe) {
  var Kl;
  if (Xe) {
    var Yl = "oninput" in document;
    if (!Yl) {
      var Bu = document.createElement("div");
      Bu.setAttribute("oninput", "return;"),
        (Yl = typeof Bu.oninput == "function");
    }
    Kl = Yl;
  } else Kl = !1;
  Ta = Kl && (!document.documentMode || 9 < document.documentMode);
}
function Vu() {
  jn && (jn.detachEvent("onpropertychange", La), (Gn = jn = null));
}
function La(e) {
  if (e.propertyName === "value" && kl(Gn)) {
    var t = [];
    za(t, Gn, e, Ni(e)), aa(Pd, t);
  }
}
function Nd(e, t, n) {
  e === "focusin"
    ? (Vu(), (jn = t), (Gn = n), jn.attachEvent("onpropertychange", La))
    : e === "focusout" && Vu();
}
function zd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return kl(Gn);
}
function Td(e, t) {
  if (e === "click") return kl(t);
}
function Ld(e, t) {
  if (e === "input" || e === "change") return kl(t);
}
function Od(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ie = typeof Object.is == "function" ? Object.is : Od;
function Xn(e, t) {
  if (Ie(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!So.call(t, l) || !Ie(e[l], t[l])) return !1;
  }
  return !0;
}
function Wu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Hu(e, t) {
  var n = Wu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Wu(n);
  }
}
function Oa(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Oa(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ra() {
  for (var e = window, t = Qr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Qr(e.document);
  }
  return t;
}
function ji(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Rd(e) {
  var t = Ra(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Oa(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ji(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Hu(n, o));
        var i = Hu(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Dd = Xe && "documentMode" in document && 11 >= document.documentMode,
  Vt = null,
  Uo = null,
  In = null,
  Ao = !1;
function Qu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ao ||
    Vt == null ||
    Vt !== Qr(r) ||
    ((r = Vt),
    "selectionStart" in r && ji(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (In && Xn(In, r)) ||
      ((In = r),
      (r = qr(Uo, "onSelect")),
      0 < r.length &&
        ((t = new Di("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Vt))));
}
function _r(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Wt = {
    animationend: _r("Animation", "AnimationEnd"),
    animationiteration: _r("Animation", "AnimationIteration"),
    animationstart: _r("Animation", "AnimationStart"),
    transitionend: _r("Transition", "TransitionEnd"),
  },
  Gl = {},
  Da = {};
Xe &&
  ((Da = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Wt.animationend.animation,
    delete Wt.animationiteration.animation,
    delete Wt.animationstart.animation),
  "TransitionEvent" in window || delete Wt.transitionend.transition);
function _l(e) {
  if (Gl[e]) return Gl[e];
  if (!Wt[e]) return e;
  var t = Wt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Da) return (Gl[e] = t[n]);
  return e;
}
var Ma = _l("animationend"),
  Fa = _l("animationiteration"),
  ja = _l("animationstart"),
  Ia = _l("transitionend"),
  $a = new Map(),
  Ku =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function yt(e, t) {
  $a.set(e, t), jt(t, [e]);
}
for (var Xl = 0; Xl < Ku.length; Xl++) {
  var Zl = Ku[Xl],
    Md = Zl.toLowerCase(),
    Fd = Zl[0].toUpperCase() + Zl.slice(1);
  yt(Md, "on" + Fd);
}
yt(Ma, "onAnimationEnd");
yt(Fa, "onAnimationIteration");
yt(ja, "onAnimationStart");
yt("dblclick", "onDoubleClick");
yt("focusin", "onFocus");
yt("focusout", "onBlur");
yt(Ia, "onTransitionEnd");
ln("onMouseEnter", ["mouseout", "mouseover"]);
ln("onMouseLeave", ["mouseout", "mouseover"]);
ln("onPointerEnter", ["pointerout", "pointerover"]);
ln("onPointerLeave", ["pointerout", "pointerover"]);
jt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
jt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
jt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
jt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
jt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
jt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var On =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  jd = new Set("cancel close invalid load scroll toggle".split(" ").concat(On));
function Yu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Mf(r, t, void 0, e), (e.currentTarget = null);
}
function Ua(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          Yu(l, u, c), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          Yu(l, u, c), (o = s);
        }
    }
  }
  if (Yr) throw ((e = Fo), (Yr = !1), (Fo = null), e);
}
function F(e, t) {
  var n = t[Qo];
  n === void 0 && (n = t[Qo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Aa(t, e, 2, !1), n.add(r));
}
function Jl(e, t, n) {
  var r = 0;
  t && (r |= 4), Aa(n, e, r, t);
}
var Er = "_reactListening" + Math.random().toString(36).slice(2);
function Zn(e) {
  if (!e[Er]) {
    (e[Er] = !0),
      Ys.forEach(function (n) {
        n !== "selectionchange" && (jd.has(n) || Jl(n, !1, e), Jl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Er] || ((t[Er] = !0), Jl("selectionchange", !1, t));
  }
}
function Aa(e, t, n, r) {
  switch (Ea(t)) {
    case 1:
      var l = Zf;
      break;
    case 4:
      l = Jf;
      break;
    default:
      l = Oi;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Mo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function ql(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = Pt(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  aa(function () {
    var c = o,
      m = Ni(n),
      v = [];
    e: {
      var p = $a.get(e);
      if (p !== void 0) {
        var y = Di,
          S = e;
        switch (e) {
          case "keypress":
            if (jr(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = dd;
            break;
          case "focusin":
            (S = "focus"), (y = Ql);
            break;
          case "focusout":
            (S = "blur"), (y = Ql);
            break;
          case "beforeblur":
          case "afterblur":
            y = Ql;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Fu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = ed;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = vd;
            break;
          case Ma:
          case Fa:
          case ja:
            y = rd;
            break;
          case Ia:
            y = yd;
            break;
          case "scroll":
            y = qf;
            break;
          case "wheel":
            y = wd;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = od;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Iu;
        }
        var w = (t & 4) !== 0,
          z = !w && e === "scroll",
          f = w ? (p !== null ? p + "Capture" : null) : p;
        w = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var h = d.stateNode;
          if (
            (d.tag === 5 &&
              h !== null &&
              ((d = h),
              f !== null && ((h = Hn(a, f)), h != null && w.push(Jn(a, h, d)))),
            z)
          )
            break;
          a = a.return;
        }
        0 < w.length &&
          ((p = new y(p, S, null, n, m)), v.push({ event: p, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          p &&
            n !== Ro &&
            (S = n.relatedTarget || n.fromElement) &&
            (Pt(S) || S[Ze]))
        )
          break e;
        if (
          (y || p) &&
          ((p =
            m.window === m
              ? m
              : (p = m.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          y
            ? ((S = n.relatedTarget || n.toElement),
              (y = c),
              (S = S ? Pt(S) : null),
              S !== null &&
                ((z = It(S)), S !== z || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((y = null), (S = c)),
          y !== S)
        ) {
          if (
            ((w = Fu),
            (h = "onMouseLeave"),
            (f = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Iu),
              (h = "onPointerLeave"),
              (f = "onPointerEnter"),
              (a = "pointer")),
            (z = y == null ? p : Ht(y)),
            (d = S == null ? p : Ht(S)),
            (p = new w(h, a + "leave", y, n, m)),
            (p.target = z),
            (p.relatedTarget = d),
            (h = null),
            Pt(m) === c &&
              ((w = new w(f, a + "enter", S, n, m)),
              (w.target = d),
              (w.relatedTarget = z),
              (h = w)),
            (z = h),
            y && S)
          )
            t: {
              for (w = y, f = S, a = 0, d = w; d; d = $t(d)) a++;
              for (d = 0, h = f; h; h = $t(h)) d++;
              for (; 0 < a - d; ) (w = $t(w)), a--;
              for (; 0 < d - a; ) (f = $t(f)), d--;
              for (; a--; ) {
                if (w === f || (f !== null && w === f.alternate)) break t;
                (w = $t(w)), (f = $t(f));
              }
              w = null;
            }
          else w = null;
          y !== null && Gu(v, p, y, w, !1),
            S !== null && z !== null && Gu(v, z, S, w, !0);
        }
      }
      e: {
        if (
          ((p = c ? Ht(c) : window),
          (y = p.nodeName && p.nodeName.toLowerCase()),
          y === "select" || (y === "input" && p.type === "file"))
        )
          var k = xd;
        else if (Au(p))
          if (Ta) k = Ld;
          else {
            k = zd;
            var C = Nd;
          }
        else
          (y = p.nodeName) &&
            y.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (k = Td);
        if (k && (k = k(e, c))) {
          za(v, k, n, m);
          break e;
        }
        C && C(e, p, c),
          e === "focusout" &&
            (C = p._wrapperState) &&
            C.controlled &&
            p.type === "number" &&
            No(p, "number", p.value);
      }
      switch (((C = c ? Ht(c) : window), e)) {
        case "focusin":
          (Au(C) || C.contentEditable === "true") &&
            ((Vt = C), (Uo = c), (In = null));
          break;
        case "focusout":
          In = Uo = Vt = null;
          break;
        case "mousedown":
          Ao = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ao = !1), Qu(v, n, m);
          break;
        case "selectionchange":
          if (Dd) break;
        case "keydown":
        case "keyup":
          Qu(v, n, m);
      }
      var P;
      if (Fi)
        e: {
          switch (e) {
            case "compositionstart":
              var x = "onCompositionStart";
              break e;
            case "compositionend":
              x = "onCompositionEnd";
              break e;
            case "compositionupdate":
              x = "onCompositionUpdate";
              break e;
          }
          x = void 0;
        }
      else
        Bt
          ? xa(e, n) && (x = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (x = "onCompositionStart");
      x &&
        (Pa &&
          n.locale !== "ko" &&
          (Bt || x !== "onCompositionStart"
            ? x === "onCompositionEnd" && Bt && (P = Ca())
            : ((ot = m),
              (Ri = "value" in ot ? ot.value : ot.textContent),
              (Bt = !0))),
        (C = qr(c, x)),
        0 < C.length &&
          ((x = new ju(x, e, null, n, m)),
          v.push({ event: x, listeners: C }),
          P ? (x.data = P) : ((P = Na(n)), P !== null && (x.data = P)))),
        (P = kd ? _d(e, n) : Ed(e, n)) &&
          ((c = qr(c, "onBeforeInput")),
          0 < c.length &&
            ((m = new ju("onBeforeInput", "beforeinput", null, n, m)),
            v.push({ event: m, listeners: c }),
            (m.data = P)));
    }
    Ua(v, t);
  });
}
function Jn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function qr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Hn(e, n)),
      o != null && r.unshift(Jn(e, o, l)),
      (o = Hn(e, t)),
      o != null && r.push(Jn(e, o, l))),
      (e = e.return);
  }
  return r;
}
function $t(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Gu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = Hn(n, o)), s != null && i.unshift(Jn(n, s, u)))
        : l || ((s = Hn(n, o)), s != null && i.push(Jn(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Id = /\r\n?/g,
  $d = /\u0000|\uFFFD/g;
function Xu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Id,
      `
`
    )
    .replace($d, "");
}
function Cr(e, t, n) {
  if (((t = Xu(t)), Xu(e) !== t && n)) throw Error(g(425));
}
function br() {}
var Bo = null,
  Vo = null;
function Wo(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ho = typeof setTimeout == "function" ? setTimeout : void 0,
  Ud = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Zu = typeof Promise == "function" ? Promise : void 0,
  Ad =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Zu < "u"
      ? function (e) {
          return Zu.resolve(null).then(e).catch(Bd);
        }
      : Ho;
function Bd(e) {
  setTimeout(function () {
    throw e;
  });
}
function bl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Yn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Yn(t);
}
function ct(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ju(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var vn = Math.random().toString(36).slice(2),
  Ae = "__reactFiber$" + vn,
  qn = "__reactProps$" + vn,
  Ze = "__reactContainer$" + vn,
  Qo = "__reactEvents$" + vn,
  Vd = "__reactListeners$" + vn,
  Wd = "__reactHandles$" + vn;
function Pt(e) {
  var t = e[Ae];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ze] || n[Ae])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ju(e); e !== null; ) {
          if ((n = e[Ae])) return n;
          e = Ju(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function cr(e) {
  return (
    (e = e[Ae] || e[Ze]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ht(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(g(33));
}
function El(e) {
  return e[qn] || null;
}
var Ko = [],
  Qt = -1;
function gt(e) {
  return { current: e };
}
function j(e) {
  0 > Qt || ((e.current = Ko[Qt]), (Ko[Qt] = null), Qt--);
}
function M(e, t) {
  Qt++, (Ko[Qt] = e.current), (e.current = t);
}
var ht = {},
  le = gt(ht),
  fe = gt(!1),
  Lt = ht;
function on(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ht;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function de(e) {
  return (e = e.childContextTypes), e != null;
}
function el() {
  j(fe), j(le);
}
function qu(e, t, n) {
  if (le.current !== ht) throw Error(g(168));
  M(le, t), M(fe, n);
}
function Ba(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(g(108, Nf(e) || "Unknown", l));
  return A({}, n, r);
}
function tl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ht),
    (Lt = le.current),
    M(le, e),
    M(fe, fe.current),
    !0
  );
}
function bu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(g(169));
  n
    ? ((e = Ba(e, t, Lt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      j(fe),
      j(le),
      M(le, e))
    : j(fe),
    M(fe, n);
}
var Qe = null,
  Cl = !1,
  eo = !1;
function Va(e) {
  Qe === null ? (Qe = [e]) : Qe.push(e);
}
function Hd(e) {
  (Cl = !0), Va(e);
}
function wt() {
  if (!eo && Qe !== null) {
    eo = !0;
    var e = 0,
      t = D;
    try {
      var n = Qe;
      for (D = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Qe = null), (Cl = !1);
    } catch (l) {
      throw (Qe !== null && (Qe = Qe.slice(e + 1)), pa(zi, wt), l);
    } finally {
      (D = t), (eo = !1);
    }
  }
  return null;
}
var Kt = [],
  Yt = 0,
  nl = null,
  rl = 0,
  _e = [],
  Ee = 0,
  Ot = null,
  Ke = 1,
  Ye = "";
function _t(e, t) {
  (Kt[Yt++] = rl), (Kt[Yt++] = nl), (nl = e), (rl = t);
}
function Wa(e, t, n) {
  (_e[Ee++] = Ke), (_e[Ee++] = Ye), (_e[Ee++] = Ot), (Ot = e);
  var r = Ke;
  e = Ye;
  var l = 32 - Fe(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Fe(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Ke = (1 << (32 - Fe(t) + l)) | (n << l) | r),
      (Ye = o + e);
  } else (Ke = (1 << o) | (n << l) | r), (Ye = e);
}
function Ii(e) {
  e.return !== null && (_t(e, 1), Wa(e, 1, 0));
}
function $i(e) {
  for (; e === nl; )
    (nl = Kt[--Yt]), (Kt[Yt] = null), (rl = Kt[--Yt]), (Kt[Yt] = null);
  for (; e === Ot; )
    (Ot = _e[--Ee]),
      (_e[Ee] = null),
      (Ye = _e[--Ee]),
      (_e[Ee] = null),
      (Ke = _e[--Ee]),
      (_e[Ee] = null);
}
var he = null,
  ve = null,
  I = !1,
  Re = null;
function Ha(e, t) {
  var n = Ce(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function es(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (he = e), (ve = ct(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (he = e), (ve = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ot !== null ? { id: Ke, overflow: Ye } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ce(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (he = e),
            (ve = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Yo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Go(e) {
  if (I) {
    var t = ve;
    if (t) {
      var n = t;
      if (!es(e, t)) {
        if (Yo(e)) throw Error(g(418));
        t = ct(n.nextSibling);
        var r = he;
        t && es(e, t)
          ? Ha(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (I = !1), (he = e));
      }
    } else {
      if (Yo(e)) throw Error(g(418));
      (e.flags = (e.flags & -4097) | 2), (I = !1), (he = e);
    }
  }
}
function ts(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  he = e;
}
function Pr(e) {
  if (e !== he) return !1;
  if (!I) return ts(e), (I = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Wo(e.type, e.memoizedProps))),
    t && (t = ve))
  ) {
    if (Yo(e)) throw (Qa(), Error(g(418)));
    for (; t; ) Ha(e, t), (t = ct(t.nextSibling));
  }
  if ((ts(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(g(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ve = ct(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ve = null;
    }
  } else ve = he ? ct(e.stateNode.nextSibling) : null;
  return !0;
}
function Qa() {
  for (var e = ve; e; ) e = ct(e.nextSibling);
}
function un() {
  (ve = he = null), (I = !1);
}
function Ui(e) {
  Re === null ? (Re = [e]) : Re.push(e);
}
var Qd = be.ReactCurrentBatchConfig;
function Le(e, t) {
  if (e && e.defaultProps) {
    (t = A({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ll = gt(null),
  ol = null,
  Gt = null,
  Ai = null;
function Bi() {
  Ai = Gt = ol = null;
}
function Vi(e) {
  var t = ll.current;
  j(ll), (e._currentValue = t);
}
function Xo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function tn(e, t) {
  (ol = e),
    (Ai = Gt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ce = !0), (e.firstContext = null));
}
function xe(e) {
  var t = e._currentValue;
  if (Ai !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Gt === null)) {
      if (ol === null) throw Error(g(308));
      (Gt = e), (ol.dependencies = { lanes: 0, firstContext: e });
    } else Gt = Gt.next = e;
  return t;
}
var xt = null;
function Wi(e) {
  xt === null ? (xt = [e]) : xt.push(e);
}
function Ka(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Wi(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Je(e, r)
  );
}
function Je(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var nt = !1;
function Hi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ya(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ge(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ft(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), R & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Je(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Wi(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Je(e, n)
  );
}
function Ir(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ti(e, n);
  }
}
function ns(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function il(e, t, n, r) {
  var l = e.updateQueue;
  nt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), i === null ? (o = c) : (i.next = c), (i = s);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (u = m.lastBaseUpdate),
      u !== i &&
        (u === null ? (m.firstBaseUpdate = c) : (u.next = c),
        (m.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var v = l.baseState;
    (i = 0), (m = c = s = null), (u = o);
    do {
      var p = u.lane,
        y = u.eventTime;
      if ((r & p) === p) {
        m !== null &&
          (m = m.next =
            {
              eventTime: y,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var S = e,
            w = u;
          switch (((p = t), (y = n), w.tag)) {
            case 1:
              if (((S = w.payload), typeof S == "function")) {
                v = S.call(y, v, p);
                break e;
              }
              v = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = w.payload),
                (p = typeof S == "function" ? S.call(y, v, p) : S),
                p == null)
              )
                break e;
              v = A({}, v, p);
              break e;
            case 2:
              nt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        (y = {
          eventTime: y,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          m === null ? ((c = m = y), (s = v)) : (m = m.next = y),
          (i |= p);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (m === null && (s = v),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = m),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Dt |= i), (e.lanes = i), (e.memoizedState = v);
  }
}
function rs(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(g(191, l));
        l.call(r);
      }
    }
}
var Ga = new Ks.Component().refs;
function Zo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : A({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Pl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? It(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ie(),
      l = pt(e),
      o = Ge(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = ft(e, o, l)),
      t !== null && (je(t, e, l, r), Ir(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ie(),
      l = pt(e),
      o = Ge(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = ft(e, o, l)),
      t !== null && (je(t, e, l, r), Ir(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ie(),
      r = pt(e),
      l = Ge(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ft(e, l, r)),
      t !== null && (je(t, e, r, n), Ir(t, e, r));
  },
};
function ls(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Xn(n, r) || !Xn(l, o)
      : !0
  );
}
function Xa(e, t, n) {
  var r = !1,
    l = ht,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = xe(o))
      : ((l = de(t) ? Lt : le.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? on(e, l) : ht)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Pl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function os(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Pl.enqueueReplaceState(t, t.state, null);
}
function Jo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Ga), Hi(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = xe(o))
    : ((o = de(t) ? Lt : le.current), (l.context = on(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Zo(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Pl.enqueueReplaceState(l, l.state, null),
      il(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Cn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(g(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(g(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === Ga && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(g(284));
    if (!n._owner) throw Error(g(290, e));
  }
  return e;
}
function xr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      g(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function is(e) {
  var t = e._init;
  return t(e._payload);
}
function Za(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = mt(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, h) {
    return a === null || a.tag !== 6
      ? ((a = uo(d, f.mode, h)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, h) {
    var k = d.type;
    return k === At
      ? m(f, a, d.props.children, h, d.key)
      : a !== null &&
        (a.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === tt &&
            is(k) === a.type))
      ? ((h = l(a, d.props)), (h.ref = Cn(f, a, d)), (h.return = f), h)
      : ((h = Wr(d.type, d.key, d.props, null, f.mode, h)),
        (h.ref = Cn(f, a, d)),
        (h.return = f),
        h);
  }
  function c(f, a, d, h) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = so(d, f.mode, h)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function m(f, a, d, h, k) {
    return a === null || a.tag !== 7
      ? ((a = Tt(d, f.mode, h, k)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function v(f, a, d) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = uo("" + a, f.mode, d)), (a.return = f), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case vr:
          return (
            (d = Wr(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = Cn(f, null, a)),
            (d.return = f),
            d
          );
        case Ut:
          return (a = so(a, f.mode, d)), (a.return = f), a;
        case tt:
          var h = a._init;
          return v(f, h(a._payload), d);
      }
      if (Tn(a) || wn(a))
        return (a = Tt(a, f.mode, d, null)), (a.return = f), a;
      xr(f, a);
    }
    return null;
  }
  function p(f, a, d, h) {
    var k = a !== null ? a.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return k !== null ? null : u(f, a, "" + d, h);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case vr:
          return d.key === k ? s(f, a, d, h) : null;
        case Ut:
          return d.key === k ? c(f, a, d, h) : null;
        case tt:
          return (k = d._init), p(f, a, k(d._payload), h);
      }
      if (Tn(d) || wn(d)) return k !== null ? null : m(f, a, d, h, null);
      xr(f, d);
    }
    return null;
  }
  function y(f, a, d, h, k) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (f = f.get(d) || null), u(a, f, "" + h, k);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case vr:
          return (f = f.get(h.key === null ? d : h.key) || null), s(a, f, h, k);
        case Ut:
          return (f = f.get(h.key === null ? d : h.key) || null), c(a, f, h, k);
        case tt:
          var C = h._init;
          return y(f, a, d, C(h._payload), k);
      }
      if (Tn(h) || wn(h)) return (f = f.get(d) || null), m(a, f, h, k, null);
      xr(a, h);
    }
    return null;
  }
  function S(f, a, d, h) {
    for (
      var k = null, C = null, P = a, x = (a = 0), V = null;
      P !== null && x < d.length;
      x++
    ) {
      P.index > x ? ((V = P), (P = null)) : (V = P.sibling);
      var O = p(f, P, d[x], h);
      if (O === null) {
        P === null && (P = V);
        break;
      }
      e && P && O.alternate === null && t(f, P),
        (a = o(O, a, x)),
        C === null ? (k = O) : (C.sibling = O),
        (C = O),
        (P = V);
    }
    if (x === d.length) return n(f, P), I && _t(f, x), k;
    if (P === null) {
      for (; x < d.length; x++)
        (P = v(f, d[x], h)),
          P !== null &&
            ((a = o(P, a, x)), C === null ? (k = P) : (C.sibling = P), (C = P));
      return I && _t(f, x), k;
    }
    for (P = r(f, P); x < d.length; x++)
      (V = y(P, f, x, d[x], h)),
        V !== null &&
          (e && V.alternate !== null && P.delete(V.key === null ? x : V.key),
          (a = o(V, a, x)),
          C === null ? (k = V) : (C.sibling = V),
          (C = V));
    return (
      e &&
        P.forEach(function (ze) {
          return t(f, ze);
        }),
      I && _t(f, x),
      k
    );
  }
  function w(f, a, d, h) {
    var k = wn(d);
    if (typeof k != "function") throw Error(g(150));
    if (((d = k.call(d)), d == null)) throw Error(g(151));
    for (
      var C = (k = null), P = a, x = (a = 0), V = null, O = d.next();
      P !== null && !O.done;
      x++, O = d.next()
    ) {
      P.index > x ? ((V = P), (P = null)) : (V = P.sibling);
      var ze = p(f, P, O.value, h);
      if (ze === null) {
        P === null && (P = V);
        break;
      }
      e && P && ze.alternate === null && t(f, P),
        (a = o(ze, a, x)),
        C === null ? (k = ze) : (C.sibling = ze),
        (C = ze),
        (P = V);
    }
    if (O.done) return n(f, P), I && _t(f, x), k;
    if (P === null) {
      for (; !O.done; x++, O = d.next())
        (O = v(f, O.value, h)),
          O !== null &&
            ((a = o(O, a, x)), C === null ? (k = O) : (C.sibling = O), (C = O));
      return I && _t(f, x), k;
    }
    for (P = r(f, P); !O.done; x++, O = d.next())
      (O = y(P, f, x, O.value, h)),
        O !== null &&
          (e && O.alternate !== null && P.delete(O.key === null ? x : O.key),
          (a = o(O, a, x)),
          C === null ? (k = O) : (C.sibling = O),
          (C = O));
    return (
      e &&
        P.forEach(function (yn) {
          return t(f, yn);
        }),
      I && _t(f, x),
      k
    );
  }
  function z(f, a, d, h) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === At &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case vr:
          e: {
            for (var k = d.key, C = a; C !== null; ) {
              if (C.key === k) {
                if (((k = d.type), k === At)) {
                  if (C.tag === 7) {
                    n(f, C.sibling),
                      (a = l(C, d.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  C.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === tt &&
                    is(k) === C.type)
                ) {
                  n(f, C.sibling),
                    (a = l(C, d.props)),
                    (a.ref = Cn(f, C, d)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                n(f, C);
                break;
              } else t(f, C);
              C = C.sibling;
            }
            d.type === At
              ? ((a = Tt(d.props.children, f.mode, h, d.key)),
                (a.return = f),
                (f = a))
              : ((h = Wr(d.type, d.key, d.props, null, f.mode, h)),
                (h.ref = Cn(f, a, d)),
                (h.return = f),
                (f = h));
          }
          return i(f);
        case Ut:
          e: {
            for (C = d.key; a !== null; ) {
              if (a.key === C)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  n(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  n(f, a);
                  break;
                }
              else t(f, a);
              a = a.sibling;
            }
            (a = so(d, f.mode, h)), (a.return = f), (f = a);
          }
          return i(f);
        case tt:
          return (C = d._init), z(f, a, C(d._payload), h);
      }
      if (Tn(d)) return S(f, a, d, h);
      if (wn(d)) return w(f, a, d, h);
      xr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        a !== null && a.tag === 6
          ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (n(f, a), (a = uo(d, f.mode, h)), (a.return = f), (f = a)),
        i(f))
      : n(f, a);
  }
  return z;
}
var sn = Za(!0),
  Ja = Za(!1),
  fr = {},
  Ve = gt(fr),
  bn = gt(fr),
  er = gt(fr);
function Nt(e) {
  if (e === fr) throw Error(g(174));
  return e;
}
function Qi(e, t) {
  switch ((M(er, t), M(bn, e), M(Ve, fr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : To(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = To(t, e));
  }
  j(Ve), M(Ve, t);
}
function an() {
  j(Ve), j(bn), j(er);
}
function qa(e) {
  Nt(er.current);
  var t = Nt(Ve.current),
    n = To(t, e.type);
  t !== n && (M(bn, e), M(Ve, n));
}
function Ki(e) {
  bn.current === e && (j(Ve), j(bn));
}
var $ = gt(0);
function ul(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var to = [];
function Yi() {
  for (var e = 0; e < to.length; e++)
    to[e]._workInProgressVersionPrimary = null;
  to.length = 0;
}
var $r = be.ReactCurrentDispatcher,
  no = be.ReactCurrentBatchConfig,
  Rt = 0,
  U = null,
  K = null,
  X = null,
  sl = !1,
  $n = !1,
  tr = 0,
  Kd = 0;
function te() {
  throw Error(g(321));
}
function Gi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ie(e[n], t[n])) return !1;
  return !0;
}
function Xi(e, t, n, r, l, o) {
  if (
    ((Rt = o),
    (U = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    ($r.current = e === null || e.memoizedState === null ? Zd : Jd),
    (e = n(r, l)),
    $n)
  ) {
    o = 0;
    do {
      if ((($n = !1), (tr = 0), 25 <= o)) throw Error(g(301));
      (o += 1),
        (X = K = null),
        (t.updateQueue = null),
        ($r.current = qd),
        (e = n(r, l));
    } while ($n);
  }
  if (
    (($r.current = al),
    (t = K !== null && K.next !== null),
    (Rt = 0),
    (X = K = U = null),
    (sl = !1),
    t)
  )
    throw Error(g(300));
  return e;
}
function Zi() {
  var e = tr !== 0;
  return (tr = 0), e;
}
function Ue() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return X === null ? (U.memoizedState = X = e) : (X = X.next = e), X;
}
function Ne() {
  if (K === null) {
    var e = U.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = K.next;
  var t = X === null ? U.memoizedState : X.next;
  if (t !== null) (X = t), (K = e);
  else {
    if (e === null) throw Error(g(310));
    (K = e),
      (e = {
        memoizedState: K.memoizedState,
        baseState: K.baseState,
        baseQueue: K.baseQueue,
        queue: K.queue,
        next: null,
      }),
      X === null ? (U.memoizedState = X = e) : (X = X.next = e);
  }
  return X;
}
function nr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ro(e) {
  var t = Ne(),
    n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = K,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      c = o;
    do {
      var m = c.lane;
      if ((Rt & m) === m)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var v = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((u = s = v), (i = r)) : (s = s.next = v),
          (U.lanes |= m),
          (Dt |= m);
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? (i = r) : (s.next = u),
      Ie(r, t.memoizedState) || (ce = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (U.lanes |= o), (Dt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function lo(e) {
  var t = Ne(),
    n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Ie(o, t.memoizedState) || (ce = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function ba() {}
function ec(e, t) {
  var n = U,
    r = Ne(),
    l = t(),
    o = !Ie(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (ce = !0)),
    (r = r.queue),
    Ji(rc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (X !== null && X.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      rr(9, nc.bind(null, n, r, l, t), void 0, null),
      J === null)
    )
      throw Error(g(349));
    Rt & 30 || tc(n, t, l);
  }
  return l;
}
function tc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = U.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (U.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function nc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), lc(t) && oc(e);
}
function rc(e, t, n) {
  return n(function () {
    lc(t) && oc(e);
  });
}
function lc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ie(e, n);
  } catch {
    return !0;
  }
}
function oc(e) {
  var t = Je(e, 1);
  t !== null && je(t, e, 1, -1);
}
function us(e) {
  var t = Ue();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: nr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Xd.bind(null, U, e)),
    [t.memoizedState, e]
  );
}
function rr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = U.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (U.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ic() {
  return Ne().memoizedState;
}
function Ur(e, t, n, r) {
  var l = Ue();
  (U.flags |= e),
    (l.memoizedState = rr(1 | t, n, void 0, r === void 0 ? null : r));
}
function xl(e, t, n, r) {
  var l = Ne();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (K !== null) {
    var i = K.memoizedState;
    if (((o = i.destroy), r !== null && Gi(r, i.deps))) {
      l.memoizedState = rr(t, n, o, r);
      return;
    }
  }
  (U.flags |= e), (l.memoizedState = rr(1 | t, n, o, r));
}
function ss(e, t) {
  return Ur(8390656, 8, e, t);
}
function Ji(e, t) {
  return xl(2048, 8, e, t);
}
function uc(e, t) {
  return xl(4, 2, e, t);
}
function sc(e, t) {
  return xl(4, 4, e, t);
}
function ac(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function cc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), xl(4, 4, ac.bind(null, t, e), n)
  );
}
function qi() {}
function fc(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Gi(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function dc(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Gi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function pc(e, t, n) {
  return Rt & 21
    ? (Ie(n, t) || ((n = ha()), (U.lanes |= n), (Dt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ce = !0)), (e.memoizedState = n));
}
function Yd(e, t) {
  var n = D;
  (D = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = no.transition;
  no.transition = {};
  try {
    e(!1), t();
  } finally {
    (D = n), (no.transition = r);
  }
}
function mc() {
  return Ne().memoizedState;
}
function Gd(e, t, n) {
  var r = pt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    vc(e))
  )
    hc(t, n);
  else if (((n = Ka(e, t, n, r)), n !== null)) {
    var l = ie();
    je(n, e, r, l), yc(n, t, r);
  }
}
function Xd(e, t, n) {
  var r = pt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (vc(e)) hc(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Ie(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Wi(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ka(e, t, l, r)),
      n !== null && ((l = ie()), je(n, e, r, l), yc(n, t, r));
  }
}
function vc(e) {
  var t = e.alternate;
  return e === U || (t !== null && t === U);
}
function hc(e, t) {
  $n = sl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function yc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ti(e, n);
  }
}
var al = {
    readContext: xe,
    useCallback: te,
    useContext: te,
    useEffect: te,
    useImperativeHandle: te,
    useInsertionEffect: te,
    useLayoutEffect: te,
    useMemo: te,
    useReducer: te,
    useRef: te,
    useState: te,
    useDebugValue: te,
    useDeferredValue: te,
    useTransition: te,
    useMutableSource: te,
    useSyncExternalStore: te,
    useId: te,
    unstable_isNewReconciler: !1,
  },
  Zd = {
    readContext: xe,
    useCallback: function (e, t) {
      return (Ue().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: xe,
    useEffect: ss,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ur(4194308, 4, ac.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ur(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ur(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ue();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ue();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Gd.bind(null, U, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ue();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: us,
    useDebugValue: qi,
    useDeferredValue: function (e) {
      return (Ue().memoizedState = e);
    },
    useTransition: function () {
      var e = us(!1),
        t = e[0];
      return (e = Yd.bind(null, e[1])), (Ue().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = U,
        l = Ue();
      if (I) {
        if (n === void 0) throw Error(g(407));
        n = n();
      } else {
        if (((n = t()), J === null)) throw Error(g(349));
        Rt & 30 || tc(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        ss(rc.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        rr(9, nc.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ue(),
        t = J.identifierPrefix;
      if (I) {
        var n = Ye,
          r = Ke;
        (n = (r & ~(1 << (32 - Fe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = tr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Kd++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Jd = {
    readContext: xe,
    useCallback: fc,
    useContext: xe,
    useEffect: Ji,
    useImperativeHandle: cc,
    useInsertionEffect: uc,
    useLayoutEffect: sc,
    useMemo: dc,
    useReducer: ro,
    useRef: ic,
    useState: function () {
      return ro(nr);
    },
    useDebugValue: qi,
    useDeferredValue: function (e) {
      var t = Ne();
      return pc(t, K.memoizedState, e);
    },
    useTransition: function () {
      var e = ro(nr)[0],
        t = Ne().memoizedState;
      return [e, t];
    },
    useMutableSource: ba,
    useSyncExternalStore: ec,
    useId: mc,
    unstable_isNewReconciler: !1,
  },
  qd = {
    readContext: xe,
    useCallback: fc,
    useContext: xe,
    useEffect: Ji,
    useImperativeHandle: cc,
    useInsertionEffect: uc,
    useLayoutEffect: sc,
    useMemo: dc,
    useReducer: lo,
    useRef: ic,
    useState: function () {
      return lo(nr);
    },
    useDebugValue: qi,
    useDeferredValue: function (e) {
      var t = Ne();
      return K === null ? (t.memoizedState = e) : pc(t, K.memoizedState, e);
    },
    useTransition: function () {
      var e = lo(nr)[0],
        t = Ne().memoizedState;
      return [e, t];
    },
    useMutableSource: ba,
    useSyncExternalStore: ec,
    useId: mc,
    unstable_isNewReconciler: !1,
  };
function cn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += xf(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function oo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function qo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var bd = typeof WeakMap == "function" ? WeakMap : Map;
function gc(e, t, n) {
  (n = Ge(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      fl || ((fl = !0), (si = r)), qo(e, t);
    }),
    n
  );
}
function wc(e, t, n) {
  (n = Ge(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        qo(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        qo(e, t),
          typeof r != "function" &&
            (dt === null ? (dt = new Set([this])) : dt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function as(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new bd();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = pp.bind(null, e, t, n)), t.then(e, e));
}
function cs(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function fs(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ge(-1, 1)), (t.tag = 2), ft(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ep = be.ReactCurrentOwner,
  ce = !1;
function oe(e, t, n, r) {
  t.child = e === null ? Ja(t, null, n, r) : sn(t, e.child, n, r);
}
function ds(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    tn(t, l),
    (r = Xi(e, t, n, r, o, l)),
    (n = Zi()),
    e !== null && !ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        qe(e, t, l))
      : (I && n && Ii(t), (t.flags |= 1), oe(e, t, r, l), t.child)
  );
}
function ps(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !iu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Sc(e, t, o, r, l))
      : ((e = Wr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Xn), n(i, r) && e.ref === t.ref)
    )
      return qe(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = mt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Sc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Xn(o, r) && e.ref === t.ref)
      if (((ce = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (ce = !0);
      else return (t.lanes = e.lanes), qe(e, t, l);
  }
  return bo(e, t, n, r, l);
}
function kc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        M(Zt, me),
        (me |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          M(Zt, me),
          (me |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        M(Zt, me),
        (me |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      M(Zt, me),
      (me |= r);
  return oe(e, t, l, n), t.child;
}
function _c(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function bo(e, t, n, r, l) {
  var o = de(n) ? Lt : le.current;
  return (
    (o = on(t, o)),
    tn(t, l),
    (n = Xi(e, t, n, r, o, l)),
    (r = Zi()),
    e !== null && !ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        qe(e, t, l))
      : (I && r && Ii(t), (t.flags |= 1), oe(e, t, n, l), t.child)
  );
}
function ms(e, t, n, r, l) {
  if (de(n)) {
    var o = !0;
    tl(t);
  } else o = !1;
  if ((tn(t, l), t.stateNode === null))
    Ar(e, t), Xa(t, n, r), Jo(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = xe(c))
      : ((c = de(n) ? Lt : le.current), (c = on(t, c)));
    var m = n.getDerivedStateFromProps,
      v =
        typeof m == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    v ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== c) && os(t, i, r, c)),
      (nt = !1);
    var p = t.memoizedState;
    (i.state = p),
      il(t, r, i, l),
      (s = t.memoizedState),
      u !== r || p !== s || fe.current || nt
        ? (typeof m == "function" && (Zo(t, n, m, r), (s = t.memoizedState)),
          (u = nt || ls(t, n, u, r, p, s, c))
            ? (v ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = c),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Ya(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : Le(t.type, u)),
      (i.props = c),
      (v = t.pendingProps),
      (p = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = xe(s))
        : ((s = de(n) ? Lt : le.current), (s = on(t, s)));
    var y = n.getDerivedStateFromProps;
    (m =
      typeof y == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== v || p !== s) && os(t, i, r, s)),
      (nt = !1),
      (p = t.memoizedState),
      (i.state = p),
      il(t, r, i, l);
    var S = t.memoizedState;
    u !== v || p !== S || fe.current || nt
      ? (typeof y == "function" && (Zo(t, n, y, r), (S = t.memoizedState)),
        (c = nt || ls(t, n, c, r, p, S, s) || !1)
          ? (m ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, S, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, S, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (i.props = r),
        (i.state = S),
        (i.context = s),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ei(e, t, n, r, o, l);
}
function ei(e, t, n, r, l, o) {
  _c(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && bu(t, n, !1), qe(e, t, o);
  (r = t.stateNode), (ep.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = sn(t, e.child, null, o)), (t.child = sn(t, null, u, o)))
      : oe(e, t, u, o),
    (t.memoizedState = r.state),
    l && bu(t, n, !0),
    t.child
  );
}
function Ec(e) {
  var t = e.stateNode;
  t.pendingContext
    ? qu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && qu(e, t.context, !1),
    Qi(e, t.containerInfo);
}
function vs(e, t, n, r, l) {
  return un(), Ui(l), (t.flags |= 256), oe(e, t, n, r), t.child;
}
var ti = { dehydrated: null, treeContext: null, retryLane: 0 };
function ni(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Cc(e, t, n) {
  var r = t.pendingProps,
    l = $.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    M($, l & 1),
    e === null)
  )
    return (
      Go(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Tl(i, r, 0, null)),
              (e = Tt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = ni(n)),
              (t.memoizedState = ti),
              e)
            : bi(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return tp(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = mt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = mt(u, o)) : ((o = Tt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? ni(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = ti),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = mt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function bi(e, t) {
  return (
    (t = Tl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Nr(e, t, n, r) {
  return (
    r !== null && Ui(r),
    sn(t, e.child, null, n),
    (e = bi(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function tp(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = oo(Error(g(422)))), Nr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Tl({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Tt(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && sn(t, e.child, null, i),
        (t.child.memoizedState = ni(i)),
        (t.memoizedState = ti),
        o);
  if (!(t.mode & 1)) return Nr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(g(419))), (r = oo(o, r, void 0)), Nr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), ce || u)) {
    if (((r = J), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Je(e, l), je(r, e, l, -1));
    }
    return ou(), (r = oo(Error(g(421)))), Nr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = mp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ve = ct(l.nextSibling)),
      (he = t),
      (I = !0),
      (Re = null),
      e !== null &&
        ((_e[Ee++] = Ke),
        (_e[Ee++] = Ye),
        (_e[Ee++] = Ot),
        (Ke = e.id),
        (Ye = e.overflow),
        (Ot = t)),
      (t = bi(t, r.children)),
      (t.flags |= 4096),
      t);
}
function hs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Xo(e.return, t, n);
}
function io(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Pc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((oe(e, t, r.children, n), (r = $.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && hs(e, n, t);
        else if (e.tag === 19) hs(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((M($, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && ul(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          io(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ul(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        io(t, !0, n, null, o);
        break;
      case "together":
        io(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ar(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function qe(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Dt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(g(153));
  if (t.child !== null) {
    for (
      e = t.child, n = mt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = mt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function np(e, t, n) {
  switch (t.tag) {
    case 3:
      Ec(t), un();
      break;
    case 5:
      qa(t);
      break;
    case 1:
      de(t.type) && tl(t);
      break;
    case 4:
      Qi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      M(ll, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (M($, $.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Cc(e, t, n)
          : (M($, $.current & 1),
            (e = qe(e, t, n)),
            e !== null ? e.sibling : null);
      M($, $.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Pc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        M($, $.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), kc(e, t, n);
  }
  return qe(e, t, n);
}
var xc, ri, Nc, zc;
xc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ri = function () {};
Nc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Nt(Ve.current);
    var o = null;
    switch (n) {
      case "input":
        (l = Po(e, l)), (r = Po(e, r)), (o = []);
        break;
      case "select":
        (l = A({}, l, { value: void 0 })),
          (r = A({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = zo(e, l)), (r = zo(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = br);
    }
    Lo(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Vn.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Vn.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && F("scroll", e),
                  o || u === s || (o = []))
                : (o = o || []).push(c, s));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
zc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Pn(e, t) {
  if (!I)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function rp(e, t, n) {
  var r = t.pendingProps;
  switch (($i(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ne(t), null;
    case 1:
      return de(t.type) && el(), ne(t), null;
    case 3:
      return (
        (r = t.stateNode),
        an(),
        j(fe),
        j(le),
        Yi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Pr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Re !== null && (fi(Re), (Re = null)))),
        ri(e, t),
        ne(t),
        null
      );
    case 5:
      Ki(t);
      var l = Nt(er.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Nc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(g(166));
          return ne(t), null;
        }
        if (((e = Nt(Ve.current)), Pr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ae] = t), (r[qn] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              F("cancel", r), F("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              F("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < On.length; l++) F(On[l], r);
              break;
            case "source":
              F("error", r);
              break;
            case "img":
            case "image":
            case "link":
              F("error", r), F("load", r);
              break;
            case "details":
              F("toggle", r);
              break;
            case "input":
              Pu(r, o), F("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                F("invalid", r);
              break;
            case "textarea":
              Nu(r, o), F("invalid", r);
          }
          Lo(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Cr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Cr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Vn.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  F("scroll", r);
            }
          switch (n) {
            case "input":
              hr(r), xu(r, o, !0);
              break;
            case "textarea":
              hr(r), zu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = br);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ta(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Ae] = t),
            (e[qn] = r),
            xc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Oo(n, r)), n)) {
              case "dialog":
                F("cancel", e), F("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                F("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < On.length; l++) F(On[l], e);
                l = r;
                break;
              case "source":
                F("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                F("error", e), F("load", e), (l = r);
                break;
              case "details":
                F("toggle", e), (l = r);
                break;
              case "input":
                Pu(e, r), (l = Po(e, r)), F("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = A({}, r, { value: void 0 })),
                  F("invalid", e);
                break;
              case "textarea":
                Nu(e, r), (l = zo(e, r)), F("invalid", e);
                break;
              default:
                l = r;
            }
            Lo(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? la(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && na(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Wn(e, s)
                    : typeof s == "number" && Wn(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Vn.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && F("scroll", e)
                      : s != null && Ei(e, o, s, i));
              }
            switch (n) {
              case "input":
                hr(e), xu(e, r, !1);
                break;
              case "textarea":
                hr(e), zu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + vt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Jt(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Jt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = br);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ne(t), null;
    case 6:
      if (e && t.stateNode != null) zc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(g(166));
        if (((n = Nt(er.current)), Nt(Ve.current), Pr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ae] = t),
            (o = r.nodeValue !== n) && ((e = he), e !== null))
          )
            switch (e.tag) {
              case 3:
                Cr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Cr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ae] = t),
            (t.stateNode = r);
      }
      return ne(t), null;
    case 13:
      if (
        (j($),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (I && ve !== null && t.mode & 1 && !(t.flags & 128))
          Qa(), un(), (t.flags |= 98560), (o = !1);
        else if (((o = Pr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(g(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(g(317));
            o[Ae] = t;
          } else
            un(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ne(t), (o = !1);
        } else Re !== null && (fi(Re), (Re = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || $.current & 1 ? Y === 0 && (Y = 3) : ou())),
          t.updateQueue !== null && (t.flags |= 4),
          ne(t),
          null);
    case 4:
      return (
        an(), ri(e, t), e === null && Zn(t.stateNode.containerInfo), ne(t), null
      );
    case 10:
      return Vi(t.type._context), ne(t), null;
    case 17:
      return de(t.type) && el(), ne(t), null;
    case 19:
      if ((j($), (o = t.memoizedState), o === null)) return ne(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Pn(o, !1);
        else {
          if (Y !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = ul(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Pn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return M($, ($.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            H() > fn &&
            ((t.flags |= 128), (r = !0), Pn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ul(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Pn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !I)
            )
              return ne(t), null;
          } else
            2 * H() - o.renderingStartTime > fn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Pn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = H()),
          (t.sibling = null),
          (n = $.current),
          M($, r ? (n & 1) | 2 : n & 1),
          t)
        : (ne(t), null);
    case 22:
    case 23:
      return (
        lu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? me & 1073741824 && (ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ne(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(g(156, t.tag));
}
function lp(e, t) {
  switch (($i(t), t.tag)) {
    case 1:
      return (
        de(t.type) && el(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        an(),
        j(fe),
        j(le),
        Yi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ki(t), null;
    case 13:
      if ((j($), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(g(340));
        un();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return j($), null;
    case 4:
      return an(), null;
    case 10:
      return Vi(t.type._context), null;
    case 22:
    case 23:
      return lu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var zr = !1,
  re = !1,
  op = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function Xt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        B(e, t, r);
      }
    else n.current = null;
}
function li(e, t, n) {
  try {
    n();
  } catch (r) {
    B(e, t, r);
  }
}
var ys = !1;
function ip(e, t) {
  if (((Bo = Zr), (e = Ra()), ji(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            c = 0,
            m = 0,
            v = e,
            p = null;
          t: for (;;) {
            for (
              var y;
              v !== n || (l !== 0 && v.nodeType !== 3) || (u = i + l),
                v !== o || (r !== 0 && v.nodeType !== 3) || (s = i + r),
                v.nodeType === 3 && (i += v.nodeValue.length),
                (y = v.firstChild) !== null;

            )
              (p = v), (v = y);
            for (;;) {
              if (v === e) break t;
              if (
                (p === n && ++c === l && (u = i),
                p === o && ++m === r && (s = i),
                (y = v.nextSibling) !== null)
              )
                break;
              (v = p), (p = v.parentNode);
            }
            v = y;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Vo = { focusedElem: e, selectionRange: n }, Zr = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var w = S.memoizedProps,
                    z = S.memoizedState,
                    f = t.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Le(t.type, w),
                      z
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(g(163));
            }
        } catch (h) {
          B(t, t.return, h);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (S = ys), (ys = !1), S;
}
function Un(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && li(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Nl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function oi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Tc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Tc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ae], delete t[qn], delete t[Qo], delete t[Vd], delete t[Wd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Lc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function gs(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Lc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ii(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = br));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ii(e, t, n), e = e.sibling; e !== null; ) ii(e, t, n), (e = e.sibling);
}
function ui(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ui(e, t, n), e = e.sibling; e !== null; ) ui(e, t, n), (e = e.sibling);
}
var q = null,
  Oe = !1;
function et(e, t, n) {
  for (n = n.child; n !== null; ) Oc(e, t, n), (n = n.sibling);
}
function Oc(e, t, n) {
  if (Be && typeof Be.onCommitFiberUnmount == "function")
    try {
      Be.onCommitFiberUnmount(wl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      re || Xt(n, t);
    case 6:
      var r = q,
        l = Oe;
      (q = null),
        et(e, t, n),
        (q = r),
        (Oe = l),
        q !== null &&
          (Oe
            ? ((e = q),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : q.removeChild(n.stateNode));
      break;
    case 18:
      q !== null &&
        (Oe
          ? ((e = q),
            (n = n.stateNode),
            e.nodeType === 8
              ? bl(e.parentNode, n)
              : e.nodeType === 1 && bl(e, n),
            Yn(e))
          : bl(q, n.stateNode));
      break;
    case 4:
      (r = q),
        (l = Oe),
        (q = n.stateNode.containerInfo),
        (Oe = !0),
        et(e, t, n),
        (q = r),
        (Oe = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !re &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && li(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      et(e, t, n);
      break;
    case 1:
      if (
        !re &&
        (Xt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          B(n, t, u);
        }
      et(e, t, n);
      break;
    case 21:
      et(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((re = (r = re) || n.memoizedState !== null), et(e, t, n), (re = r))
        : et(e, t, n);
      break;
    default:
      et(e, t, n);
  }
}
function ws(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new op()),
      t.forEach(function (r) {
        var l = vp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Te(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (q = u.stateNode), (Oe = !1);
              break e;
            case 3:
              (q = u.stateNode.containerInfo), (Oe = !0);
              break e;
            case 4:
              (q = u.stateNode.containerInfo), (Oe = !0);
              break e;
          }
          u = u.return;
        }
        if (q === null) throw Error(g(160));
        Oc(o, i, l), (q = null), (Oe = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        B(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Rc(t, e), (t = t.sibling);
}
function Rc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Te(t, e), $e(e), r & 4)) {
        try {
          Un(3, e, e.return), Nl(3, e);
        } catch (w) {
          B(e, e.return, w);
        }
        try {
          Un(5, e, e.return);
        } catch (w) {
          B(e, e.return, w);
        }
      }
      break;
    case 1:
      Te(t, e), $e(e), r & 512 && n !== null && Xt(n, n.return);
      break;
    case 5:
      if (
        (Te(t, e),
        $e(e),
        r & 512 && n !== null && Xt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Wn(l, "");
        } catch (w) {
          B(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && bs(l, o),
              Oo(u, i);
            var c = Oo(u, o);
            for (i = 0; i < s.length; i += 2) {
              var m = s[i],
                v = s[i + 1];
              m === "style"
                ? la(l, v)
                : m === "dangerouslySetInnerHTML"
                ? na(l, v)
                : m === "children"
                ? Wn(l, v)
                : Ei(l, m, v, c);
            }
            switch (u) {
              case "input":
                xo(l, o);
                break;
              case "textarea":
                ea(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null
                  ? Jt(l, !!o.multiple, y, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Jt(l, !!o.multiple, o.defaultValue, !0)
                      : Jt(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[qn] = o;
          } catch (w) {
            B(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Te(t, e), $e(e), r & 4)) {
        if (e.stateNode === null) throw Error(g(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (w) {
          B(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Te(t, e), $e(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Yn(t.containerInfo);
        } catch (w) {
          B(e, e.return, w);
        }
      break;
    case 4:
      Te(t, e), $e(e);
      break;
    case 13:
      Te(t, e),
        $e(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (nu = H())),
        r & 4 && ws(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((re = (c = re) || m), Te(t, e), (re = c)) : Te(t, e),
        $e(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !m && e.mode & 1)
        )
          for (_ = e, m = e.child; m !== null; ) {
            for (v = _ = m; _ !== null; ) {
              switch (((p = _), (y = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Un(4, p, p.return);
                  break;
                case 1:
                  Xt(p, p.return);
                  var S = p.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (w) {
                      B(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Xt(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    ks(v);
                    continue;
                  }
              }
              y !== null ? ((y.return = p), (_ = y)) : ks(v);
            }
            m = m.sibling;
          }
        e: for (m = null, v = e; ; ) {
          if (v.tag === 5) {
            if (m === null) {
              m = v;
              try {
                (l = v.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = v.stateNode),
                      (s = v.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = ra("display", i)));
              } catch (w) {
                B(e, e.return, w);
              }
            }
          } else if (v.tag === 6) {
            if (m === null)
              try {
                v.stateNode.nodeValue = c ? "" : v.memoizedProps;
              } catch (w) {
                B(e, e.return, w);
              }
          } else if (
            ((v.tag !== 22 && v.tag !== 23) ||
              v.memoizedState === null ||
              v === e) &&
            v.child !== null
          ) {
            (v.child.return = v), (v = v.child);
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            m === v && (m = null), (v = v.return);
          }
          m === v && (m = null), (v.sibling.return = v.return), (v = v.sibling);
        }
      }
      break;
    case 19:
      Te(t, e), $e(e), r & 4 && ws(e);
      break;
    case 21:
      break;
    default:
      Te(t, e), $e(e);
  }
}
function $e(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Lc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(g(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Wn(l, ""), (r.flags &= -33));
          var o = gs(e);
          ui(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = gs(e);
          ii(e, u, i);
          break;
        default:
          throw Error(g(161));
      }
    } catch (s) {
      B(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function up(e, t, n) {
  (_ = e), Dc(e);
}
function Dc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var l = _,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || zr;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || re;
        u = zr;
        var c = re;
        if (((zr = i), (re = s) && !c))
          for (_ = l; _ !== null; )
            (i = _),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? _s(l)
                : s !== null
                ? ((s.return = i), (_ = s))
                : _s(l);
        for (; o !== null; ) (_ = o), Dc(o), (o = o.sibling);
        (_ = l), (zr = u), (re = c);
      }
      Ss(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (_ = o)) : Ss(e);
  }
}
function Ss(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              re || Nl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !re)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Le(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && rs(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                rs(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var m = c.memoizedState;
                  if (m !== null) {
                    var v = m.dehydrated;
                    v !== null && Yn(v);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(g(163));
          }
        re || (t.flags & 512 && oi(t));
      } catch (p) {
        B(t, t.return, p);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function ks(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function _s(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Nl(4, t);
          } catch (s) {
            B(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              B(t, l, s);
            }
          }
          var o = t.return;
          try {
            oi(t);
          } catch (s) {
            B(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            oi(t);
          } catch (s) {
            B(t, i, s);
          }
      }
    } catch (s) {
      B(t, t.return, s);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (_ = u);
      break;
    }
    _ = t.return;
  }
}
var sp = Math.ceil,
  cl = be.ReactCurrentDispatcher,
  eu = be.ReactCurrentOwner,
  Pe = be.ReactCurrentBatchConfig,
  R = 0,
  J = null,
  Q = null,
  b = 0,
  me = 0,
  Zt = gt(0),
  Y = 0,
  lr = null,
  Dt = 0,
  zl = 0,
  tu = 0,
  An = null,
  ae = null,
  nu = 0,
  fn = 1 / 0,
  He = null,
  fl = !1,
  si = null,
  dt = null,
  Tr = !1,
  it = null,
  dl = 0,
  Bn = 0,
  ai = null,
  Br = -1,
  Vr = 0;
function ie() {
  return R & 6 ? H() : Br !== -1 ? Br : (Br = H());
}
function pt(e) {
  return e.mode & 1
    ? R & 2 && b !== 0
      ? b & -b
      : Qd.transition !== null
      ? (Vr === 0 && (Vr = ha()), Vr)
      : ((e = D),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ea(e.type))),
        e)
    : 1;
}
function je(e, t, n, r) {
  if (50 < Bn) throw ((Bn = 0), (ai = null), Error(g(185)));
  sr(e, n, r),
    (!(R & 2) || e !== J) &&
      (e === J && (!(R & 2) && (zl |= n), Y === 4 && lt(e, b)),
      pe(e, r),
      n === 1 && R === 0 && !(t.mode & 1) && ((fn = H() + 500), Cl && wt()));
}
function pe(e, t) {
  var n = e.callbackNode;
  Qf(e, t);
  var r = Xr(e, e === J ? b : 0);
  if (r === 0)
    n !== null && Ou(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ou(n), t === 1))
      e.tag === 0 ? Hd(Es.bind(null, e)) : Va(Es.bind(null, e)),
        Ad(function () {
          !(R & 6) && wt();
        }),
        (n = null);
    else {
      switch (ya(r)) {
        case 1:
          n = zi;
          break;
        case 4:
          n = ma;
          break;
        case 16:
          n = Gr;
          break;
        case 536870912:
          n = va;
          break;
        default:
          n = Gr;
      }
      n = Bc(n, Mc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Mc(e, t) {
  if (((Br = -1), (Vr = 0), R & 6)) throw Error(g(327));
  var n = e.callbackNode;
  if (nn() && e.callbackNode !== n) return null;
  var r = Xr(e, e === J ? b : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = pl(e, r);
  else {
    t = r;
    var l = R;
    R |= 2;
    var o = jc();
    (J !== e || b !== t) && ((He = null), (fn = H() + 500), zt(e, t));
    do
      try {
        fp();
        break;
      } catch (u) {
        Fc(e, u);
      }
    while (1);
    Bi(),
      (cl.current = o),
      (R = l),
      Q !== null ? (t = 0) : ((J = null), (b = 0), (t = Y));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = jo(e)), l !== 0 && ((r = l), (t = ci(e, l)))), t === 1)
    )
      throw ((n = lr), zt(e, 0), lt(e, r), pe(e, H()), n);
    if (t === 6) lt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !ap(l) &&
          ((t = pl(e, r)),
          t === 2 && ((o = jo(e)), o !== 0 && ((r = o), (t = ci(e, o)))),
          t === 1))
      )
        throw ((n = lr), zt(e, 0), lt(e, r), pe(e, H()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(g(345));
        case 2:
          Et(e, ae, He);
          break;
        case 3:
          if (
            (lt(e, r), (r & 130023424) === r && ((t = nu + 500 - H()), 10 < t))
          ) {
            if (Xr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ie(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ho(Et.bind(null, e, ae, He), t);
            break;
          }
          Et(e, ae, He);
          break;
        case 4:
          if ((lt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Fe(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = H() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * sp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ho(Et.bind(null, e, ae, He), r);
            break;
          }
          Et(e, ae, He);
          break;
        case 5:
          Et(e, ae, He);
          break;
        default:
          throw Error(g(329));
      }
    }
  }
  return pe(e, H()), e.callbackNode === n ? Mc.bind(null, e) : null;
}
function ci(e, t) {
  var n = An;
  return (
    e.current.memoizedState.isDehydrated && (zt(e, t).flags |= 256),
    (e = pl(e, t)),
    e !== 2 && ((t = ae), (ae = n), t !== null && fi(t)),
    e
  );
}
function fi(e) {
  ae === null ? (ae = e) : ae.push.apply(ae, e);
}
function ap(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Ie(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function lt(e, t) {
  for (
    t &= ~tu,
      t &= ~zl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Fe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Es(e) {
  if (R & 6) throw Error(g(327));
  nn();
  var t = Xr(e, 0);
  if (!(t & 1)) return pe(e, H()), null;
  var n = pl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = jo(e);
    r !== 0 && ((t = r), (n = ci(e, r)));
  }
  if (n === 1) throw ((n = lr), zt(e, 0), lt(e, t), pe(e, H()), n);
  if (n === 6) throw Error(g(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Et(e, ae, He),
    pe(e, H()),
    null
  );
}
function ru(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    (R = n), R === 0 && ((fn = H() + 500), Cl && wt());
  }
}
function Mt(e) {
  it !== null && it.tag === 0 && !(R & 6) && nn();
  var t = R;
  R |= 1;
  var n = Pe.transition,
    r = D;
  try {
    if (((Pe.transition = null), (D = 1), e)) return e();
  } finally {
    (D = r), (Pe.transition = n), (R = t), !(R & 6) && wt();
  }
}
function lu() {
  (me = Zt.current), j(Zt);
}
function zt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ud(n)), Q !== null))
    for (n = Q.return; n !== null; ) {
      var r = n;
      switch (($i(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && el();
          break;
        case 3:
          an(), j(fe), j(le), Yi();
          break;
        case 5:
          Ki(r);
          break;
        case 4:
          an();
          break;
        case 13:
          j($);
          break;
        case 19:
          j($);
          break;
        case 10:
          Vi(r.type._context);
          break;
        case 22:
        case 23:
          lu();
      }
      n = n.return;
    }
  if (
    ((J = e),
    (Q = e = mt(e.current, null)),
    (b = me = t),
    (Y = 0),
    (lr = null),
    (tu = zl = Dt = 0),
    (ae = An = null),
    xt !== null)
  ) {
    for (t = 0; t < xt.length; t++)
      if (((n = xt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    xt = null;
  }
  return e;
}
function Fc(e, t) {
  do {
    var n = Q;
    try {
      if ((Bi(), ($r.current = al), sl)) {
        for (var r = U.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        sl = !1;
      }
      if (
        ((Rt = 0),
        (X = K = U = null),
        ($n = !1),
        (tr = 0),
        (eu.current = null),
        n === null || n.return === null)
      ) {
        (Y = 1), (lr = t), (Q = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = b),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            m = u,
            v = m.tag;
          if (!(m.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var p = m.alternate;
            p
              ? ((m.updateQueue = p.updateQueue),
                (m.memoizedState = p.memoizedState),
                (m.lanes = p.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var y = cs(i);
          if (y !== null) {
            (y.flags &= -257),
              fs(y, i, u, o, t),
              y.mode & 1 && as(o, c, t),
              (t = y),
              (s = c);
            var S = t.updateQueue;
            if (S === null) {
              var w = new Set();
              w.add(s), (t.updateQueue = w);
            } else S.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              as(o, c, t), ou();
              break e;
            }
            s = Error(g(426));
          }
        } else if (I && u.mode & 1) {
          var z = cs(i);
          if (z !== null) {
            !(z.flags & 65536) && (z.flags |= 256),
              fs(z, i, u, o, t),
              Ui(cn(s, u));
            break e;
          }
        }
        (o = s = cn(s, u)),
          Y !== 4 && (Y = 2),
          An === null ? (An = [o]) : An.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = gc(o, s, t);
              ns(o, f);
              break e;
            case 1:
              u = s;
              var a = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (dt === null || !dt.has(d))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var h = wc(o, u, t);
                ns(o, h);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      $c(n);
    } catch (k) {
      (t = k), Q === n && n !== null && (Q = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function jc() {
  var e = cl.current;
  return (cl.current = al), e === null ? al : e;
}
function ou() {
  (Y === 0 || Y === 3 || Y === 2) && (Y = 4),
    J === null || (!(Dt & 268435455) && !(zl & 268435455)) || lt(J, b);
}
function pl(e, t) {
  var n = R;
  R |= 2;
  var r = jc();
  (J !== e || b !== t) && ((He = null), zt(e, t));
  do
    try {
      cp();
      break;
    } catch (l) {
      Fc(e, l);
    }
  while (1);
  if ((Bi(), (R = n), (cl.current = r), Q !== null)) throw Error(g(261));
  return (J = null), (b = 0), Y;
}
function cp() {
  for (; Q !== null; ) Ic(Q);
}
function fp() {
  for (; Q !== null && !jf(); ) Ic(Q);
}
function Ic(e) {
  var t = Ac(e.alternate, e, me);
  (e.memoizedProps = e.pendingProps),
    t === null ? $c(e) : (Q = t),
    (eu.current = null);
}
function $c(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = lp(n, t)), n !== null)) {
        (n.flags &= 32767), (Q = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Y = 6), (Q = null);
        return;
      }
    } else if (((n = rp(n, t, me)), n !== null)) {
      Q = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Q = t;
      return;
    }
    Q = t = e;
  } while (t !== null);
  Y === 0 && (Y = 5);
}
function Et(e, t, n) {
  var r = D,
    l = Pe.transition;
  try {
    (Pe.transition = null), (D = 1), dp(e, t, n, r);
  } finally {
    (Pe.transition = l), (D = r);
  }
  return null;
}
function dp(e, t, n, r) {
  do nn();
  while (it !== null);
  if (R & 6) throw Error(g(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(g(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Kf(e, o),
    e === J && ((Q = J = null), (b = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Tr ||
      ((Tr = !0),
      Bc(Gr, function () {
        return nn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Pe.transition), (Pe.transition = null);
    var i = D;
    D = 1;
    var u = R;
    (R |= 4),
      (eu.current = null),
      ip(e, n),
      Rc(n, e),
      Rd(Vo),
      (Zr = !!Bo),
      (Vo = Bo = null),
      (e.current = n),
      up(n),
      If(),
      (R = u),
      (D = i),
      (Pe.transition = o);
  } else e.current = n;
  if (
    (Tr && ((Tr = !1), (it = e), (dl = l)),
    (o = e.pendingLanes),
    o === 0 && (dt = null),
    Af(n.stateNode),
    pe(e, H()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (fl) throw ((fl = !1), (e = si), (si = null), e);
  return (
    dl & 1 && e.tag !== 0 && nn(),
    (o = e.pendingLanes),
    o & 1 ? (e === ai ? Bn++ : ((Bn = 0), (ai = e))) : (Bn = 0),
    wt(),
    null
  );
}
function nn() {
  if (it !== null) {
    var e = ya(dl),
      t = Pe.transition,
      n = D;
    try {
      if (((Pe.transition = null), (D = 16 > e ? 16 : e), it === null))
        var r = !1;
      else {
        if (((e = it), (it = null), (dl = 0), R & 6)) throw Error(g(331));
        var l = R;
        for (R |= 4, _ = e.current; _ !== null; ) {
          var o = _,
            i = o.child;
          if (_.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (_ = c; _ !== null; ) {
                  var m = _;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Un(8, m, o);
                  }
                  var v = m.child;
                  if (v !== null) (v.return = m), (_ = v);
                  else
                    for (; _ !== null; ) {
                      m = _;
                      var p = m.sibling,
                        y = m.return;
                      if ((Tc(m), m === c)) {
                        _ = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = y), (_ = p);
                        break;
                      }
                      _ = y;
                    }
                }
              }
              var S = o.alternate;
              if (S !== null) {
                var w = S.child;
                if (w !== null) {
                  S.child = null;
                  do {
                    var z = w.sibling;
                    (w.sibling = null), (w = z);
                  } while (w !== null);
                }
              }
              _ = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (_ = i);
          else
            e: for (; _ !== null; ) {
              if (((o = _), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Un(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (_ = f);
                break e;
              }
              _ = o.return;
            }
        }
        var a = e.current;
        for (_ = a; _ !== null; ) {
          i = _;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (_ = d);
          else
            e: for (i = a; _ !== null; ) {
              if (((u = _), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nl(9, u);
                  }
                } catch (k) {
                  B(u, u.return, k);
                }
              if (u === i) {
                _ = null;
                break e;
              }
              var h = u.sibling;
              if (h !== null) {
                (h.return = u.return), (_ = h);
                break e;
              }
              _ = u.return;
            }
        }
        if (
          ((R = l), wt(), Be && typeof Be.onPostCommitFiberRoot == "function")
        )
          try {
            Be.onPostCommitFiberRoot(wl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (D = n), (Pe.transition = t);
    }
  }
  return !1;
}
function Cs(e, t, n) {
  (t = cn(n, t)),
    (t = gc(e, t, 1)),
    (e = ft(e, t, 1)),
    (t = ie()),
    e !== null && (sr(e, 1, t), pe(e, t));
}
function B(e, t, n) {
  if (e.tag === 3) Cs(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Cs(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (dt === null || !dt.has(r)))
        ) {
          (e = cn(n, e)),
            (e = wc(t, e, 1)),
            (t = ft(t, e, 1)),
            (e = ie()),
            t !== null && (sr(t, 1, e), pe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function pp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ie()),
    (e.pingedLanes |= e.suspendedLanes & n),
    J === e &&
      (b & n) === n &&
      (Y === 4 || (Y === 3 && (b & 130023424) === b && 500 > H() - nu)
        ? zt(e, 0)
        : (tu |= n)),
    pe(e, t);
}
function Uc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = wr), (wr <<= 1), !(wr & 130023424) && (wr = 4194304))
      : (t = 1));
  var n = ie();
  (e = Je(e, t)), e !== null && (sr(e, t, n), pe(e, n));
}
function mp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Uc(e, n);
}
function vp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(g(314));
  }
  r !== null && r.delete(t), Uc(e, n);
}
var Ac;
Ac = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || fe.current) ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ce = !1), np(e, t, n);
      ce = !!(e.flags & 131072);
    }
  else (ce = !1), I && t.flags & 1048576 && Wa(t, rl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ar(e, t), (e = t.pendingProps);
      var l = on(t, le.current);
      tn(t, n), (l = Xi(null, t, r, e, l, n));
      var o = Zi();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            de(r) ? ((o = !0), tl(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Hi(t),
            (l.updater = Pl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Jo(t, r, e, n),
            (t = ei(null, t, r, !0, o, n)))
          : ((t.tag = 0), I && o && Ii(t), oe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ar(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = yp(r)),
          (e = Le(r, e)),
          l)
        ) {
          case 0:
            t = bo(null, t, r, e, n);
            break e;
          case 1:
            t = ms(null, t, r, e, n);
            break e;
          case 11:
            t = ds(null, t, r, e, n);
            break e;
          case 14:
            t = ps(null, t, r, Le(r.type, e), n);
            break e;
        }
        throw Error(g(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        bo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        ms(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Ec(t), e === null)) throw Error(g(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Ya(e, t),
          il(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = cn(Error(g(423)), t)), (t = vs(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = cn(Error(g(424)), t)), (t = vs(e, t, r, n, l));
            break e;
          } else
            for (
              ve = ct(t.stateNode.containerInfo.firstChild),
                he = t,
                I = !0,
                Re = null,
                n = Ja(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((un(), r === l)) {
            t = qe(e, t, n);
            break e;
          }
          oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        qa(t),
        e === null && Go(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Wo(r, l) ? (i = null) : o !== null && Wo(r, o) && (t.flags |= 32),
        _c(e, t),
        oe(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Go(t), null;
    case 13:
      return Cc(e, t, n);
    case 4:
      return (
        Qi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = sn(t, null, r, n)) : oe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        ds(e, t, r, l, n)
      );
    case 7:
      return oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          M(ll, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Ie(o.value, i)) {
            if (o.children === l.children && !fe.current) {
              t = qe(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = Ge(-1, n & -n)), (s.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var m = c.pending;
                        m === null
                          ? (s.next = s)
                          : ((s.next = m.next), (m.next = s)),
                          (c.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Xo(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(g(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Xo(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        oe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        tn(t, n),
        (l = xe(l)),
        (r = r(l)),
        (t.flags |= 1),
        oe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Le(r, t.pendingProps)),
        (l = Le(r.type, l)),
        ps(e, t, r, l, n)
      );
    case 15:
      return Sc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Ar(e, t),
        (t.tag = 1),
        de(r) ? ((e = !0), tl(t)) : (e = !1),
        tn(t, n),
        Xa(t, r, l),
        Jo(t, r, l, n),
        ei(null, t, r, !0, e, n)
      );
    case 19:
      return Pc(e, t, n);
    case 22:
      return kc(e, t, n);
  }
  throw Error(g(156, t.tag));
};
function Bc(e, t) {
  return pa(e, t);
}
function hp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ce(e, t, n, r) {
  return new hp(e, t, n, r);
}
function iu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function yp(e) {
  if (typeof e == "function") return iu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Pi)) return 11;
    if (e === xi) return 14;
  }
  return 2;
}
function mt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ce(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Wr(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) iu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case At:
        return Tt(n.children, l, o, t);
      case Ci:
        (i = 8), (l |= 8);
        break;
      case ko:
        return (
          (e = Ce(12, n, t, l | 2)), (e.elementType = ko), (e.lanes = o), e
        );
      case _o:
        return (e = Ce(13, n, t, l)), (e.elementType = _o), (e.lanes = o), e;
      case Eo:
        return (e = Ce(19, n, t, l)), (e.elementType = Eo), (e.lanes = o), e;
      case Zs:
        return Tl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Gs:
              i = 10;
              break e;
            case Xs:
              i = 9;
              break e;
            case Pi:
              i = 11;
              break e;
            case xi:
              i = 14;
              break e;
            case tt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(g(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ce(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Tt(e, t, n, r) {
  return (e = Ce(7, e, r, t)), (e.lanes = n), e;
}
function Tl(e, t, n, r) {
  return (
    (e = Ce(22, e, r, t)),
    (e.elementType = Zs),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function uo(e, t, n) {
  return (e = Ce(6, e, null, t)), (e.lanes = n), e;
}
function so(e, t, n) {
  return (
    (t = Ce(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function gp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Vl(0)),
    (this.expirationTimes = Vl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Vl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function uu(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new gp(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ce(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Hi(o),
    e
  );
}
function wp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ut,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Vc(e) {
  if (!e) return ht;
  e = e._reactInternals;
  e: {
    if (It(e) !== e || e.tag !== 1) throw Error(g(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (de(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(g(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (de(n)) return Ba(e, n, t);
  }
  return t;
}
function Wc(e, t, n, r, l, o, i, u, s) {
  return (
    (e = uu(n, r, !0, e, l, o, i, u, s)),
    (e.context = Vc(null)),
    (n = e.current),
    (r = ie()),
    (l = pt(n)),
    (o = Ge(r, l)),
    (o.callback = t ?? null),
    ft(n, o, l),
    (e.current.lanes = l),
    sr(e, l, r),
    pe(e, r),
    e
  );
}
function Ll(e, t, n, r) {
  var l = t.current,
    o = ie(),
    i = pt(l);
  return (
    (n = Vc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ge(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ft(l, t, i)),
    e !== null && (je(e, l, i, o), Ir(e, l, i)),
    i
  );
}
function ml(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ps(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function su(e, t) {
  Ps(e, t), (e = e.alternate) && Ps(e, t);
}
function Sp() {
  return null;
}
var Hc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function au(e) {
  this._internalRoot = e;
}
Ol.prototype.render = au.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(g(409));
  Ll(e, t, null, null);
};
Ol.prototype.unmount = au.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Mt(function () {
      Ll(null, e, null, null);
    }),
      (t[Ze] = null);
  }
};
function Ol(e) {
  this._internalRoot = e;
}
Ol.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Sa();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < rt.length && t !== 0 && t < rt[n].priority; n++);
    rt.splice(n, 0, e), n === 0 && _a(e);
  }
};
function cu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Rl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function xs() {}
function kp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = ml(i);
        o.call(c);
      };
    }
    var i = Wc(t, r, e, 0, null, !1, !1, "", xs);
    return (
      (e._reactRootContainer = i),
      (e[Ze] = i.current),
      Zn(e.nodeType === 8 ? e.parentNode : e),
      Mt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = ml(s);
      u.call(c);
    };
  }
  var s = uu(e, 0, !1, null, null, !1, !1, "", xs);
  return (
    (e._reactRootContainer = s),
    (e[Ze] = s.current),
    Zn(e.nodeType === 8 ? e.parentNode : e),
    Mt(function () {
      Ll(t, s, n, r);
    }),
    s
  );
}
function Dl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = ml(i);
        u.call(s);
      };
    }
    Ll(t, i, e, l);
  } else i = kp(n, t, e, l, r);
  return ml(i);
}
ga = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ln(t.pendingLanes);
        n !== 0 &&
          (Ti(t, n | 1), pe(t, H()), !(R & 6) && ((fn = H() + 500), wt()));
      }
      break;
    case 13:
      Mt(function () {
        var r = Je(e, 1);
        if (r !== null) {
          var l = ie();
          je(r, e, 1, l);
        }
      }),
        su(e, 1);
  }
};
Li = function (e) {
  if (e.tag === 13) {
    var t = Je(e, 134217728);
    if (t !== null) {
      var n = ie();
      je(t, e, 134217728, n);
    }
    su(e, 134217728);
  }
};
wa = function (e) {
  if (e.tag === 13) {
    var t = pt(e),
      n = Je(e, t);
    if (n !== null) {
      var r = ie();
      je(n, e, t, r);
    }
    su(e, t);
  }
};
Sa = function () {
  return D;
};
ka = function (e, t) {
  var n = D;
  try {
    return (D = e), t();
  } finally {
    D = n;
  }
};
Do = function (e, t, n) {
  switch (t) {
    case "input":
      if ((xo(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = El(r);
            if (!l) throw Error(g(90));
            qs(r), xo(r, l);
          }
        }
      }
      break;
    case "textarea":
      ea(e, n);
      break;
    case "select":
      (t = n.value), t != null && Jt(e, !!n.multiple, t, !1);
  }
};
ua = ru;
sa = Mt;
var _p = { usingClientEntryPoint: !1, Events: [cr, Ht, El, oa, ia, ru] },
  xn = {
    findFiberByHostInstance: Pt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Ep = {
    bundleType: xn.bundleType,
    version: xn.version,
    rendererPackageName: xn.rendererPackageName,
    rendererConfig: xn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: be.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = fa(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: xn.findFiberByHostInstance || Sp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Lr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Lr.isDisabled && Lr.supportsFiber)
    try {
      (wl = Lr.inject(Ep)), (Be = Lr);
    } catch {}
}
Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _p;
Se.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!cu(t)) throw Error(g(200));
  return wp(e, t, null, n);
};
Se.createRoot = function (e, t) {
  if (!cu(e)) throw Error(g(299));
  var n = !1,
    r = "",
    l = Hc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = uu(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ze] = t.current),
    Zn(e.nodeType === 8 ? e.parentNode : e),
    new au(t)
  );
};
Se.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(g(188))
      : ((e = Object.keys(e).join(",")), Error(g(268, e)));
  return (e = fa(t)), (e = e === null ? null : e.stateNode), e;
};
Se.flushSync = function (e) {
  return Mt(e);
};
Se.hydrate = function (e, t, n) {
  if (!Rl(t)) throw Error(g(200));
  return Dl(null, e, t, !0, n);
};
Se.hydrateRoot = function (e, t, n) {
  if (!cu(e)) throw Error(g(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = Hc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Wc(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Ze] = t.current),
    Zn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Ol(t);
};
Se.render = function (e, t, n) {
  if (!Rl(t)) throw Error(g(200));
  return Dl(null, e, t, !1, n);
};
Se.unmountComponentAtNode = function (e) {
  if (!Rl(e)) throw Error(g(40));
  return e._reactRootContainer
    ? (Mt(function () {
        Dl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ze] = null);
        });
      }),
      !0)
    : !1;
};
Se.unstable_batchedUpdates = ru;
Se.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Rl(n)) throw Error(g(200));
  if (e == null || e._reactInternals === void 0) throw Error(g(38));
  return Dl(e, t, n, !1, r);
};
Se.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = Se);
})(Sf);
var Ns = go;
(yo.createRoot = Ns.createRoot), (yo.hydrateRoot = Ns.hydrateRoot);
const Cp = "_left_a5ulf_1",
  Pp = "_right_a5ulf_11",
  zs = { left: Cp, right: Pp },
  xp = () =>
    rn("div", {
      children: [
        Z("img", { className: zs.left, src: "public/blob.svg" }),
        Z("img", { className: zs.right, src: "public/blob1.svg" }),
      ],
    }),
  Np = "_btn_1hgf2_1",
  zp = { btn: Np },
  Tp = ({ checkResult: e }) =>
    Z("button", {
      onClick: () => e(),
      className: zp.btn,
      children: "Check Answers",
    }),
  Lp = "_start_14slf_1",
  Op = "_btn_14slf_9",
  Rp = "_title_14slf_23",
  Dp = "_description_14slf_33",
  Or = { start: Lp, btn: Op, title: Rp, description: Dp },
  Mp = ({ setGameStart: e }) =>
    rn("div", {
      className: Or.start,
      children: [
        Z("h1", { className: Or.title, children: "Quizz Game" }),
        Z("h3", {
          className: Or.description,
          children: "Answer some questions and have fun!!!",
        }),
        Z("button", {
          onClick: () => e(!1),
          className: Or.btn,
          children: "Start Game",
        }),
      ],
    }),
  Fp = "_test_1f9v4_1",
  jp = "_question_1f9v4_9",
  Ip = "_answer_1f9v4_18",
  $p = "_hr_1f9v4_32",
  Nn = { test: Fp, question: jp, answer: Ip, hr: $p },
  Up = ({
    test: e,
    correctAnswerOnClick: t,
    incorrectAnswerOnClick: n,
    gameEnd: r,
  }) => {
    const [l, o] = De.useState(Math.ceil(Math.random() * 4));
    return rn("div", {
      className: Nn.test,
      children: [
        Z("h2", { className: Nn.question, children: e.question }),
        Z("button", {
          disabled: e.correct_answer.disable,
          className: Nn.answer,
          style: {
            gridColumn: l,
            background: r
              ? "#94D7A2"
              : e.correct_answer.isPressed
              ? "#D6DBF5"
              : "#F5F7FB",
          },
          onClick: () => t(e.correct_answer.id),
          children: e.correct_answer.answer,
        }),
        e.incorrect_answers.map((i) =>
          Z(
            "button",
            {
              disabled: i.disable,
              style: {
                background:
                  r === !0 && i.isPressed === !0
                    ? "#F8BCBC"
                    : i.isPressed
                    ? "#D6DBF5"
                    : "#F5F7FB",
              },
              className: Nn.answer,
              onClick: () => n({ answerId: i.id, testId: e.id }),
              children: i.answer,
            },
            i.id
          )
        ),
        Z("hr", { className: Nn.hr }),
      ],
    });
  },
  Ap = "_container_5wx6k_1",
  Bp = "_btn_5wx6k_9",
  Vp = "_result_5wx6k_23",
  ao = { container: Ap, btn: Bp, result: Vp },
  Wp = ({ result: e, restartGame: t }) =>
    rn("div", {
      className: ao.container,
      children: [
        rn("h3", {
          className: ao.result,
          children: ["You scored ", e, "/5 correct answers"],
        }),
        Z("button", {
          onClick: () => t(),
          className: ao.btn,
          children: "Play again",
        }),
      ],
    });
let co = (e = 21) =>
  crypto
    .getRandomValues(new Uint8Array(e))
    .reduce(
      (t, n) => (
        (n &= 63),
        n < 36
          ? (t += n.toString(36))
          : n < 62
          ? (t += (n - 26).toString(36).toUpperCase())
          : n > 62
          ? (t += "-")
          : (t += "_"),
        t
      ),
      ""
    );
function Me(e) {
  for (
    var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw Error(
    "[Immer] minified error nr: " +
      e +
      (n.length
        ? " " +
          n
            .map(function (l) {
              return "'" + l + "'";
            })
            .join(",")
        : "") +
      ". Find the full error at: https://bit.ly/3cXEKWf"
  );
}
function dn(e) {
  return !!e && !!e[ge];
}
function Ft(e) {
  var t;
  return (
    !!e &&
    ((function (n) {
      if (!n || typeof n != "object") return !1;
      var r = Object.getPrototypeOf(n);
      if (r === null) return !0;
      var l = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
      return (
        l === Object ||
        (typeof l == "function" && Function.toString.call(l) === Jp)
      );
    })(e) ||
      Array.isArray(e) ||
      !!e[js] ||
      !!(!((t = e.constructor) === null || t === void 0) && t[js]) ||
      fu(e) ||
      du(e))
  );
}
function or(e, t, n) {
  n === void 0 && (n = !1),
    hn(e) === 0
      ? (n ? Object.keys : yu)(e).forEach(function (r) {
          (n && typeof r == "symbol") || t(r, e[r], e);
        })
      : e.forEach(function (r, l) {
          return t(l, r, e);
        });
}
function hn(e) {
  var t = e[ge];
  return t
    ? t.i > 3
      ? t.i - 4
      : t.i
    : Array.isArray(e)
    ? 1
    : fu(e)
    ? 2
    : du(e)
    ? 3
    : 0;
}
function di(e, t) {
  return hn(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Hp(e, t) {
  return hn(e) === 2 ? e.get(t) : e[t];
}
function Qc(e, t, n) {
  var r = hn(e);
  r === 2 ? e.set(t, n) : r === 3 ? (e.delete(t), e.add(n)) : (e[t] = n);
}
function Qp(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function fu(e) {
  return Xp && e instanceof Map;
}
function du(e) {
  return Zp && e instanceof Set;
}
function Ct(e) {
  return e.o || e.t;
}
function pu(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = qp(e);
  delete t[ge];
  for (var n = yu(t), r = 0; r < n.length; r++) {
    var l = n[r],
      o = t[l];
    o.writable === !1 && ((o.writable = !0), (o.configurable = !0)),
      (o.get || o.set) &&
        (t[l] = {
          configurable: !0,
          writable: !0,
          enumerable: o.enumerable,
          value: e[l],
        });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function mu(e, t) {
  return (
    t === void 0 && (t = !1),
    vu(e) ||
      dn(e) ||
      !Ft(e) ||
      (hn(e) > 1 && (e.set = e.add = e.clear = e.delete = Kp),
      Object.freeze(e),
      t &&
        or(
          e,
          function (n, r) {
            return mu(r, !0);
          },
          !0
        )),
    e
  );
}
function Kp() {
  Me(2);
}
function vu(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function We(e) {
  var t = bp[e];
  return t || Me(18, e), t;
}
function Ts() {
  return ir;
}
function fo(e, t) {
  t && (We("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function vl(e) {
  pi(e), e.p.forEach(Yp), (e.p = null);
}
function pi(e) {
  e === ir && (ir = e.l);
}
function Ls(e) {
  return (ir = { p: [], l: ir, h: e, m: !0, _: 0 });
}
function Yp(e) {
  var t = e[ge];
  t.i === 0 || t.i === 1 ? t.j() : (t.O = !0);
}
function po(e, t) {
  t._ = t.p.length;
  var n = t.p[0],
    r = e !== void 0 && e !== n;
  return (
    t.h.g || We("ES5").S(t, e, r),
    r
      ? (n[ge].P && (vl(t), Me(4)),
        Ft(e) && ((e = hl(t, e)), t.l || yl(t, e)),
        t.u && We("Patches").M(n[ge].t, e, t.u, t.s))
      : (e = hl(t, n, [])),
    vl(t),
    t.u && t.v(t.u, t.s),
    e !== Kc ? e : void 0
  );
}
function hl(e, t, n) {
  if (vu(t)) return t;
  var r = t[ge];
  if (!r)
    return (
      or(
        t,
        function (o, i) {
          return Os(e, r, t, o, i, n);
        },
        !0
      ),
      t
    );
  if (r.A !== e) return t;
  if (!r.P) return yl(e, r.t, !0), r.t;
  if (!r.I) {
    (r.I = !0), r.A._--;
    var l = r.i === 4 || r.i === 5 ? (r.o = pu(r.k)) : r.o;
    or(r.i === 3 ? new Set(l) : l, function (o, i) {
      return Os(e, r, l, o, i, n);
    }),
      yl(e, l, !1),
      n && e.u && We("Patches").R(r, n, e.u, e.s);
  }
  return r.o;
}
function Os(e, t, n, r, l, o) {
  if (dn(l)) {
    var i = hl(e, l, o && t && t.i !== 3 && !di(t.D, r) ? o.concat(r) : void 0);
    if ((Qc(n, r, i), !dn(i))) return;
    e.m = !1;
  }
  if (Ft(l) && !vu(l)) {
    if (!e.h.F && e._ < 1) return;
    hl(e, l), (t && t.A.l) || yl(e, l);
  }
}
function yl(e, t, n) {
  n === void 0 && (n = !1), e.h.F && e.m && mu(t, n);
}
function mo(e, t) {
  var n = e[ge];
  return (n ? Ct(n) : e)[t];
}
function Rs(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var r = Object.getOwnPropertyDescriptor(n, t);
      if (r) return r;
      n = Object.getPrototypeOf(n);
    }
}
function mi(e) {
  e.P || ((e.P = !0), e.l && mi(e.l));
}
function vo(e) {
  e.o || (e.o = pu(e.t));
}
function vi(e, t, n) {
  var r = fu(t)
    ? We("MapSet").N(t, n)
    : du(t)
    ? We("MapSet").T(t, n)
    : e.g
    ? (function (l, o) {
        var i = Array.isArray(l),
          u = {
            i: i ? 1 : 0,
            A: o ? o.A : Ts(),
            P: !1,
            I: !1,
            D: {},
            l: o,
            t: l,
            k: null,
            o: null,
            j: null,
            C: !1,
          },
          s = u,
          c = hi;
        i && ((s = [u]), (c = Rn));
        var m = Proxy.revocable(s, c),
          v = m.revoke,
          p = m.proxy;
        return (u.k = p), (u.j = v), p;
      })(t, n)
    : We("ES5").J(t, n);
  return (n ? n.A : Ts()).p.push(r), r;
}
function Gp(e) {
  return (
    dn(e) || Me(22, e),
    (function t(n) {
      if (!Ft(n)) return n;
      var r,
        l = n[ge],
        o = hn(n);
      if (l) {
        if (!l.P && (l.i < 4 || !We("ES5").K(l))) return l.t;
        (l.I = !0), (r = Ds(n, o)), (l.I = !1);
      } else r = Ds(n, o);
      return (
        or(r, function (i, u) {
          (l && Hp(l.t, i) === u) || Qc(r, i, t(u));
        }),
        o === 3 ? new Set(r) : r
      );
    })(e)
  );
}
function Ds(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return pu(e);
}
var Ms,
  ir,
  hu = typeof Symbol < "u" && typeof Symbol("x") == "symbol",
  Xp = typeof Map < "u",
  Zp = typeof Set < "u",
  Fs = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u",
  Kc = hu
    ? Symbol.for("immer-nothing")
    : (((Ms = {})["immer-nothing"] = !0), Ms),
  js = hu ? Symbol.for("immer-draftable") : "__$immer_draftable",
  ge = hu ? Symbol.for("immer-state") : "__$immer_state",
  Jp = "" + Object.prototype.constructor,
  yu =
    typeof Reflect < "u" && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e)
          );
        }
      : Object.getOwnPropertyNames,
  qp =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        yu(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n);
        }),
        t
      );
    },
  bp = {},
  hi = {
    get: function (e, t) {
      if (t === ge) return e;
      var n = Ct(e);
      if (!di(n, t))
        return (function (l, o, i) {
          var u,
            s = Rs(o, i);
          return s
            ? "value" in s
              ? s.value
              : (u = s.get) === null || u === void 0
              ? void 0
              : u.call(l.k)
            : void 0;
        })(e, n, t);
      var r = n[t];
      return e.I || !Ft(r)
        ? r
        : r === mo(e.t, t)
        ? (vo(e), (e.o[t] = vi(e.A.h, r, e)))
        : r;
    },
    has: function (e, t) {
      return t in Ct(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(Ct(e));
    },
    set: function (e, t, n) {
      var r = Rs(Ct(e), t);
      if (r != null && r.set) return r.set.call(e.k, n), !0;
      if (!e.P) {
        var l = mo(Ct(e), t),
          o = l == null ? void 0 : l[ge];
        if (o && o.t === n) return (e.o[t] = n), (e.D[t] = !1), !0;
        if (Qp(n, l) && (n !== void 0 || di(e.t, t))) return !0;
        vo(e), mi(e);
      }
      return (
        (e.o[t] === n && typeof n != "number" && (n !== void 0 || t in e.o)) ||
        ((e.o[t] = n), (e.D[t] = !0), !0)
      );
    },
    deleteProperty: function (e, t) {
      return (
        mo(e.t, t) !== void 0 || t in e.t
          ? ((e.D[t] = !1), vo(e), mi(e))
          : delete e.D[t],
        e.o && delete e.o[t],
        !0
      );
    },
    getOwnPropertyDescriptor: function (e, t) {
      var n = Ct(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.i !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty: function () {
      Me(11);
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function () {
      Me(12);
    },
  },
  Rn = {};
or(hi, function (e, t) {
  Rn[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  (Rn.deleteProperty = function (e, t) {
    return Rn.set.call(this, e, t, void 0);
  }),
  (Rn.set = function (e, t, n) {
    return hi.set.call(this, e[0], t, n, e[0]);
  });
var em = (function () {
    function e(n) {
      var r = this;
      (this.g = Fs),
        (this.F = !0),
        (this.produce = function (l, o, i) {
          if (typeof l == "function" && typeof o != "function") {
            var u = o;
            o = l;
            var s = r;
            return function (w) {
              var z = this;
              w === void 0 && (w = u);
              for (
                var f = arguments.length, a = Array(f > 1 ? f - 1 : 0), d = 1;
                d < f;
                d++
              )
                a[d - 1] = arguments[d];
              return s.produce(w, function (h) {
                var k;
                return (k = o).call.apply(k, [z, h].concat(a));
              });
            };
          }
          var c;
          if (
            (typeof o != "function" && Me(6),
            i !== void 0 && typeof i != "function" && Me(7),
            Ft(l))
          ) {
            var m = Ls(r),
              v = vi(r, l, void 0),
              p = !0;
            try {
              (c = o(v)), (p = !1);
            } finally {
              p ? vl(m) : pi(m);
            }
            return typeof Promise < "u" && c instanceof Promise
              ? c.then(
                  function (w) {
                    return fo(m, i), po(w, m);
                  },
                  function (w) {
                    throw (vl(m), w);
                  }
                )
              : (fo(m, i), po(c, m));
          }
          if (!l || typeof l != "object") {
            if (
              ((c = o(l)) === void 0 && (c = l),
              c === Kc && (c = void 0),
              r.F && mu(c, !0),
              i)
            ) {
              var y = [],
                S = [];
              We("Patches").M(l, c, y, S), i(y, S);
            }
            return c;
          }
          Me(21, l);
        }),
        (this.produceWithPatches = function (l, o) {
          if (typeof l == "function")
            return function (c) {
              for (
                var m = arguments.length, v = Array(m > 1 ? m - 1 : 0), p = 1;
                p < m;
                p++
              )
                v[p - 1] = arguments[p];
              return r.produceWithPatches(c, function (y) {
                return l.apply(void 0, [y].concat(v));
              });
            };
          var i,
            u,
            s = r.produce(l, o, function (c, m) {
              (i = c), (u = m);
            });
          return typeof Promise < "u" && s instanceof Promise
            ? s.then(function (c) {
                return [c, i, u];
              })
            : [s, i, u];
        }),
        typeof (n == null ? void 0 : n.useProxies) == "boolean" &&
          this.setUseProxies(n.useProxies),
        typeof (n == null ? void 0 : n.autoFreeze) == "boolean" &&
          this.setAutoFreeze(n.autoFreeze);
    }
    var t = e.prototype;
    return (
      (t.createDraft = function (n) {
        Ft(n) || Me(8), dn(n) && (n = Gp(n));
        var r = Ls(this),
          l = vi(this, n, void 0);
        return (l[ge].C = !0), pi(r), l;
      }),
      (t.finishDraft = function (n, r) {
        var l = n && n[ge],
          o = l.A;
        return fo(o, r), po(void 0, o);
      }),
      (t.setAutoFreeze = function (n) {
        this.F = n;
      }),
      (t.setUseProxies = function (n) {
        n && !Fs && Me(20), (this.g = n);
      }),
      (t.applyPatches = function (n, r) {
        var l;
        for (l = r.length - 1; l >= 0; l--) {
          var o = r[l];
          if (o.path.length === 0 && o.op === "replace") {
            n = o.value;
            break;
          }
        }
        l > -1 && (r = r.slice(l + 1));
        var i = We("Patches").$;
        return dn(n)
          ? i(n, r)
          : this.produce(n, function (u) {
              return i(u, r);
            });
      }),
      e
    );
  })(),
  we = new em(),
  tm = we.produce;
we.produceWithPatches.bind(we);
we.setAutoFreeze.bind(we);
we.setUseProxies.bind(we);
we.applyPatches.bind(we);
we.createDraft.bind(we);
we.finishDraft.bind(we);
const ho = tm;
function nm() {
  const [e, t] = De.useState([]),
    [n, r] = De.useState(0),
    [l, o] = De.useState(!0),
    [i, u] = De.useState(!1);
  De.useEffect(() => {
    async function y() {
      const z = (
        await (
          await fetch(
            "https://opentdb.com/api.php?amount=20&difficulty=easy&type=multiple&encode=base64"
          )
        ).json()
      ).results.map((a) => ({
        id: co(),
        question: atob(a.question),
        correct_answer: {
          answer: atob(a.correct_answer),
          id: co(),
          isPressed: !1,
          disable: !1,
        },
        incorrect_answers: a.incorrect_answers.map((d) => ({
          answer: atob(d),
          id: co(),
          isPressed: !1,
          disable: !1,
        })),
      }));
      for (let a = z.length - 1; a > 0; a--) {
        const d = Math.floor(Math.random() * (a + 1)),
          h = z[a];
        (z[a] = z[d]), (z[d] = h);
      }
      const f = z.splice(0, 5);
      t(f);
    }
    y();
  }, []);
  const s = () => {
      r(
        e.map((y) => y.correct_answer.isPressed === !0).filter((y) => y).length
      ),
        t(
          ho((y) => {
            y.map((S) => {
              (S.correct_answer.disable = !0),
                S.incorrect_answers.map((w) => {
                  w.disable = !0;
                });
            });
          })
        ),
        u(!0);
    },
    c = (y) => {
      t(
        ho((S) => {
          S.map((w) => {
            w.correct_answer.id === y &&
              ((w.correct_answer.isPressed = !w.correct_answer.isPressed),
              w.incorrect_answers.map((z) => {
                z.isPressed = !1;
              }));
          });
        })
      );
    },
    m = ({ answerId: y, testId: S }) => {
      t(
        ho((w) => {
          w.map((z) => {
            z.id === S &&
              ((z.correct_answer.isPressed = !1),
              z.incorrect_answers.map((f) => {
                f.id === y ? (f.isPressed = !f.isPressed) : (f.isPressed = !1);
              }));
          });
        })
      );
    },
    v = e.map((y) =>
      Z(
        Up,
        {
          gameEnd: i,
          test: y,
          correctAnswerOnClick: c,
          incorrectAnswerOnClick: m,
        },
        y.question
      )
    );
  return rn("div", {
    className: "App",
    children: [
      Z(xp, {}),
      !l && v,
      l && Z(Mp, { setGameStart: o }),
      i && Z(Wp, { restartGame: () => window.location.reload(), result: n }),
      !i && !l && Z(Tp, { checkResult: s }),
    ],
  });
}
yo.createRoot(document.getElementById("root")).render(
  Z(pf.StrictMode, { children: Z(nm, {}) })
);