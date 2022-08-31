function e(t) {
    return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = function(t) {
    if (t && t.__esModule) return t;
    if (null === t || "object" !== e(t) && "function" != typeof t) return {
        default: t
    };
    var n = l();
    if (n && n.has(t)) return n.get(t);
    var r = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var a in t) if (Object.prototype.hasOwnProperty.call(t, a)) {
        var u = o ? Object.getOwnPropertyDescriptor(t, a) : null;
        u && (u.get || u.set) ? Object.defineProperty(r, a, u) : r[a] = t[a];
    }
    r.default = t, n && n.set(t, r);
    return r;
}(require("./window")), n = i(require("./HTMLElement")), r = i(require("./HTMLVideoElement")), o = i(require("./Image")), a = i(require("./Audio")), u = i(require("./Canvas"));

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

var c = {}, d = {
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
        return "canvas" === e ? new u.default() : "audio" === e ? new a.default() : "img" === e ? new o.default() : "video" === e ? new r.default() : new n.default(e);
    },
    createElementNS: function(e, t) {
        return this.createElement(t);
    },
    getElementById: function(e) {
        return e === t.canvas.id ? t.canvas : null;
    },
    getElementsByTagName: function(e) {
        return "head" === e ? [ d.head ] : "body" === e ? [ d.body ] : "canvas" === e ? [ t.canvas ] : [];
    },
    getElementsByName: function(e) {
        return "head" === e ? [ d.head ] : "body" === e ? [ d.body ] : "canvas" === e ? [ t.canvas ] : [];
    },
    querySelector: function(e) {
        return "head" === e ? d.head : "body" === e ? d.body : "canvas" === e || e === "#".concat(t.canvas.id) ? t.canvas : null;
    },
    querySelectorAll: function(e) {
        return "head" === e ? [ d.head ] : "body" === e ? [ d.body ] : "canvas" === e ? [ t.canvas ] : [];
    },
    addEventListener: function(e, t) {
        c[e] || (c[e] = []), c[e].push(t);
    },
    removeEventListener: function(e, t) {
        var n = c[e];
        if (n && n.length > 0) for (var r = n.length; r--; r > 0) if (n[r] === t) {
            n.splice(r, 1);
            break;
        }
    },
    dispatchEvent: function(e) {
        var t = c[e.type];
        if (t) for (var n = 0; n < t.length; n++) t[n](e);
    }
}, f = d;

exports.default = f, module.exports = exports.default;