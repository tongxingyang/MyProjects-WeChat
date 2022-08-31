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

var t, n = (t = require("./EventTarget.js")) && t.__esModule ? t : {
    default: t
};

function r(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
        Object.defineProperty(e, r.key, r);
    }
}

function o(e, t) {
    return (o = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e;
    })(e, t);
}

function a(e) {
    var t = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), 
            !0;
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            return !1;
        }
    }();
    return function() {
        var n, r = l(e);
        if (t) {
            var o = l(this).constructor;
            n = Reflect.construct(r, arguments, o);
        } else n = r.apply(this, arguments);
        return s(this, n);
    };
}

function s(t, n) {
    return !n || "object" !== e(n) && "function" != typeof n ? u(t) : n;
}

function u(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}

function l(e) {
    return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}

var i = new WeakMap(), c = new WeakMap(), f = new WeakMap(), p = new WeakMap(), y = new WeakMap();

function d(e) {
    if ("function" == typeof this["on".concat(e)]) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        this["on".concat(e)].apply(this, n);
    }
}

function h(e) {
    this.readyState = e, d.call(this, "readystatechange");
}

var b = function(e) {
    !function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && o(e, t);
    }(v, n["default"]);
    var t, s, l, b = a(v);
    function v() {
        var e;
        return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, v), (e = b.call(this)).timeout = 0, e.onabort = null, e.onerror = null, 
        e.onload = null, e.onloadstart = null, e.onprogress = null, e.ontimeout = null, 
        e.onloadend = null, e.onreadystatechange = null, e.readyState = 0, e.response = null, 
        e.responseText = null, e.responseType = "", e.responseXML = null, e.status = 0, 
        e.statusText = "", e.upload = {}, e.withCredentials = !1, f.set(u(e), {
            "content-type": "application/x-www-form-urlencoded"
        }), p.set(u(e), {}), e;
    }
    return t = v, (s = [ {
        key: "abort",
        value: function() {
            var e = y.get(this);
            e && e.abort();
        }
    }, {
        key: "getAllResponseHeaders",
        value: function() {
            var e = p.get(this);
            return Object.keys(e).map(function(t) {
                return "".concat(t, ": ").concat(e[t]);
            }).join("\n");
        }
    }, {
        key: "getResponseHeader",
        value: function(e) {
            return p.get(this)[e];
        }
    }, {
        key: "open",
        value: function(e, t) {
            c.set(this, e), i.set(this, t), h.call(this, v.OPENED);
        }
    }, {
        key: "overrideMimeType",
        value: function() {}
    }, {
        key: "send",
        value: function() {
            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            if (this.readyState !== v.OPENED) throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.");
            var n = wx.request({
                data: t,
                url: i.get(this),
                method: c.get(this),
                header: f.get(this),
                dataType: "other",
                responseType: "arraybuffer" === this.responseType ? "arraybuffer" : "text",
                timeout: this.timeout || void 0,
                success: function(t) {
                    var n = t.data, r = t.statusCode, o = t.header;
                    switch (e.status = r, p.set(e, o), d.call(e, "loadstart"), h.call(e, v.HEADERS_RECEIVED), 
                    h.call(e, v.LOADING), e.responseType) {
                      case "json":
                        e.responseText = n;
                        try {
                            e.response = JSON.parse(n);
                        } catch (t) {
                            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                            e.response = null;
                        }
                        break;

                      case "":
                      case "text":
                        e.responseText = e.response = n;
                        break;

                      case "arraybuffer":
                        e.response = n, e.responseText = "";
                        for (var a = new Uint8Array(n), s = a.byteLength, u = 0; u < s; u++) e.responseText += String.fromCharCode(a[u]);
                        break;

                      default:
                        e.response = null;
                    }
                    h.call(e, v.DONE), d.call(e, "load"), d.call(e, "loadend");
                },
                fail: function(t) {
                    var n = t.errMsg;
                    -1 !== n.indexOf("abort") ? d.call(e, "abort") : -1 !== n.indexOf("timeout") ? d.call(e, "timeout") : d.call(e, "error", n), 
                    d.call(e, "loadend");
                }
            });
            y.set(this, n);
        }
    }, {
        key: "setRequestHeader",
        value: function(e, t) {
            var n = f.get(this);
            n[e] = t, f.set(this, n);
        }
    }, {
        key: "addEventListener",
        value: function(e, t) {
            if ("function" == typeof t) {
                var n = this;
                this["on" + e] = function(e) {
                    t.call(n, e);
                };
            }
        }
    } ]) && r(t.prototype, s), l && r(t, l), v;
}();

exports.default = b, b.UNSEND = 0, b.OPENED = 1, b.HEADERS_RECEIVED = 2, b.LOADING = 3, 
b.DONE = 4, module.exports = exports.default;