var e = require("../../../@babel/runtime/helpers/typeof");

exports.__esModule = !0, exports.default = void 0;

var t = function(t) {
    if (t && t.__esModule) return t;
    if (null === t || "object" !== e(t) && "function" != typeof t) return {
        default: t
    };
    var n = l();
    if (n && n.has(t)) return n.get(t);
    var r = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in t) if (Object.prototype.hasOwnProperty.call(t, u)) {
        var o = a ? Object.getOwnPropertyDescriptor(t, u) : null;
        o && (o.get || o.set) ? Object.defineProperty(r, u, o) : r[u] = t[u];
    }
    r.default = t, n && n.set(t, r);
    return r;
}(require("./window")), n = i(require("./HTMLElement")), r = i(require("./HTMLVideoElement")), a = i(require("./Image")), u = i(require("./Audio")), o = i(require("./Canvas"));

function i(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function l() {
    if ("function" != typeof WeakMap) return null;
    var e = new WeakMap();
    return l = function() {
        return e;
    }, e;
}

require("./EventIniter/index.js");

var d = {}, c = {
    readyState: "complete",
    visibilityState: "visible",
    documentElement: t,
    hidden: !1,
    style: {},
    location: t.location,
    ontouchstart: null,
    ontouchmove: null,
    ontouchend: null,
    head: new n.default("head"),
    body: new n.default("body"),
    createElement: function(e) {
        return "canvas" === e ? new o.default() : "audio" === e ? new u.default() : "img" === e ? new a.default() : "video" === e ? new r.default() : new n.default(e);
    },
    createElementNS: function(e, t) {
        return this.createElement(t);
    },
    getElementById: function(e) {
        return e === t.canvas.id ? t.canvas : null;
    },
    getElementsByTagName: function(e) {
        return "head" === e ? [ c.head ] : "body" === e ? [ c.body ] : "canvas" === e ? [ t.canvas ] : [];
    },
    getElementsByName: function(e) {
        return "head" === e ? [ c.head ] : "body" === e ? [ c.body ] : "canvas" === e ? [ t.canvas ] : [];
    },
    querySelector: function(e) {
        return "head" === e ? c.head : "body" === e ? c.body : "canvas" === e || e === "#" + t.canvas.id ? t.canvas : null;
    },
    querySelectorAll: function(e) {
        return "head" === e ? [ c.head ] : "body" === e ? [ c.body ] : "canvas" === e ? [ t.canvas ] : [];
    },
    addEventListener: function(e, t) {
        d[e] || (d[e] = []), d[e].push(t);
    },
    removeEventListener: function(e, t) {
        var n = d[e];
        if (n && n.length > 0) for (var r = n.length; r--; r > 0) if (n[r] === t) {
            n.splice(r, 1);
            break;
        }
    },
    dispatchEvent: function(e) {
        var t = d[e.type];
        if (t) for (var n = 0; n < t.length; n++) t[n](e);
    }
}, f = c;

exports.default = f, module.exports = exports.default;