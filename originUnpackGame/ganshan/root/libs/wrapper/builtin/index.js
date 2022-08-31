var e = require("../../../@babel/runtime/helpers/typeof"), t = function(t) {
    if (t && t.__esModule) return t;
    if (null === t || "object" !== e(t) && "function" != typeof t) return {
        default: t
    };
    var n = o();
    if (n && n.has(t)) return n.get(t);
    var r = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in t) if (Object.prototype.hasOwnProperty.call(t, u)) {
        var a = i ? Object.getOwnPropertyDescriptor(t, u) : null;
        a && (a.get || a.set) ? Object.defineProperty(r, u, a) : r[u] = t[u];
    }
    r.default = t, n && n.set(t, r);
    return r;
}(require("./window")), n = r(require("./document"));

r(require("./HTMLElement"));

function r(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function o() {
    if ("function" != typeof WeakMap) return null;
    var e = new WeakMap();
    return o = function() {
        return e;
    }, e;
}

var i = GameGlobal;

GameGlobal.__isAdapterInjected || (GameGlobal.__isAdapterInjected = !0, function() {
    t.document = n.default, t.addEventListener = function(e, n) {
        t.document.addEventListener(e, n);
    }, t.removeEventListener = function(e, n) {
        t.document.removeEventListener(e, n);
    }, t.dispatchEvent = function(e) {
        void 0 === e && (e = {}), console.log("window.dispatchEvent", e.type, e);
    };
    var e = wx.getSystemInfoSync().platform;
    if ("undefined" == typeof __devtoolssubcontext && "devtools" === e) {
        for (var r in t) {
            var o = Object.getOwnPropertyDescriptor(i, r);
            o && !0 !== o.configurable || Object.defineProperty(window, r, {
                value: t[r]
            });
        }
        for (var u in t.document) {
            var a = Object.getOwnPropertyDescriptor(i.document, u);
            a && !0 !== a.configurable || Object.defineProperty(i.document, u, {
                value: t.document[u]
            });
        }
        window.parent = window;
    } else {
        for (var c in t) i[c] = t[c];
        i.window = t, window = i, window.top = window.parent = window;
    }
}()), i.WebAssembly = i.WXWebAssembly;