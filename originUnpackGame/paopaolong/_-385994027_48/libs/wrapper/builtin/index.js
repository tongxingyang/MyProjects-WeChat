function e(t) {
    return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(t);
}

var t = function(t) {
    if (t && t.__esModule) return t;
    if (null === t || "object" !== e(t) && "function" != typeof t) return {
        default: t
    };
    var n = r();
    if (n && n.has(t)) return n.get(t);
    var o = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in t) if (Object.prototype.hasOwnProperty.call(t, u)) {
        var c = i ? Object.getOwnPropertyDescriptor(t, u) : null;
        c && (c.get || c.set) ? Object.defineProperty(o, u, c) : o[u] = t[u];
    }
    o.default = t, n && n.set(t, o);
    return o;
}(require("./window")), n = o(require("./document"));

o(require("./HTMLElement"));

function o(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function r() {
    if ("function" != typeof WeakMap) return null;
    var e = new WeakMap();
    return r = function() {
        return e;
    }, e;
}

var i = GameGlobal;

GameGlobal.__isAdapterInjected || (GameGlobal.__isAdapterInjected = !0, function() {
    t.document = n.default, t.addEventListener = function(e, n) {
        t.document.addEventListener(e, n);
    }, t.removeEventListener = function(e, n) {
        t.document.removeEventListener(e, n);
    }, t.dispatchEvent = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        console.log("window.dispatchEvent", e.type, e);
    };
    var e = wx.getSystemInfoSync().platform;
    if ("undefined" == typeof __devtoolssubcontext && "devtools" === e) {
        for (var o in t) {
            var r = Object.getOwnPropertyDescriptor(i, o);
            r && !0 !== r.configurable || Object.defineProperty(window, o, {
                value: t[o]
            });
        }
        for (var u in t.document) {
            var c = Object.getOwnPropertyDescriptor(i.document, u);
            c && !0 !== c.configurable || Object.defineProperty(i.document, u, {
                value: t.document[u]
            });
        }
        window.parent = window;
    } else {
        for (var f in t) i[f] = t[f];
        i.window = t, window = i, window.top = window.parent = window;
    }
}()), i.WebAssembly = i.WXWebAssembly;