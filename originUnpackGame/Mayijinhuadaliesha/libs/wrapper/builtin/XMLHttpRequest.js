Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e, t = (e = require("./EventTarget.js")) && e.__esModule ? e : {
    default: e
};

function n(e) {
    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
}

function r(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
        Object.defineProperty(e, r.key, r);
    }
}

function o(e) {
    return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}

function a(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}

function s(e, t) {
    return (s = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e;
    })(e, t);
}

var l = new WeakMap(), u = new WeakMap(), i = new WeakMap(), c = new WeakMap(), f = new WeakMap();

function p(e) {
    if ("function" == typeof this["on".concat(e)]) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        this["on".concat(e)].apply(this, n);
    }
}

function y(e) {
    this.readyState = e, p.call(this, "readystatechange");
}

var d = function(e) {
    function d() {
        var e, t, r;
        return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, d), t = this, (e = !(r = o(d).call(this)) || "object" !== n(r) && "function" != typeof r ? a(t) : r).onabort = null, 
        e.onerror = null, e.onload = null, e.onloadstart = null, e.onprogress = null, e.ontimeout = null, 
        e.onloadend = null, e.onreadystatechange = null, e.readyState = 0, e.response = null, 
        e.responseText = null, e.responseType = "", e.responseXML = null, e.status = 0, 
        e.statusText = "", e.upload = {}, e.withCredentials = !1, i.set(a(e), {
            "content-type": "application/x-www-form-urlencoded"
        }), c.set(a(e), {}), e;
    }
    var h, b, v;
    return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && s(e, t);
    }(d, t["default"]), h = d, (b = [ {
        key: "abort",
        value: function() {
            var e = f.get(this);
            e && e.abort();
        }
    }, {
        key: "getAllResponseHeaders",
        value: function() {
            var e = c.get(this);
            return Object.keys(e).map(function(t) {
                return "".concat(t, ": ").concat(e[t]);
            }).join("\n");
        }
    }, {
        key: "getResponseHeader",
        value: function(e) {
            return c.get(this)[e];
        }
    }, {
        key: "open",
        value: function(e, t) {
            u.set(this, e), l.set(this, t), y.call(this, d.OPENED);
        }
    }, {
        key: "overrideMimeType",
        value: function() {}
    }, {
        key: "send",
        value: function() {
            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            if (this.readyState !== d.OPENED) throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.");
            var n = wx.request({
                data: t,
                url: l.get(this),
                method: u.get(this),
                header: i.get(this),
                dataType: "other",
                responseType: "arraybuffer" === this.responseType ? "arraybuffer" : "text",
                success: function(t) {
                    var n = t.data, r = t.statusCode, o = t.header;
                    switch (e.status = r, c.set(e, o), p.call(e, "loadstart"), y.call(e, d.HEADERS_RECEIVED), 
                    y.call(e, d.LOADING), e.responseType) {
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
                        for (var a = new Uint8Array(n), s = a.byteLength, l = 0; l < s; l++) e.responseText += String.fromCharCode(a[l]);
                        break;

                      default:
                        e.response = null;
                    }
                    y.call(e, d.DONE), p.call(e, "load"), p.call(e, "loadend");
                },
                fail: function(t) {
                    var n = t.errMsg;
                    -1 !== n.indexOf("abort") ? p.call(e, "abort") : -1 !== n.indexOf("timeout") ? p.call(e, "timeout") : p.call(e, "error", n), 
                    p.call(e, "loadend");
                }
            });
            f.set(this, n);
        }
    }, {
        key: "setRequestHeader",
        value: function(e, t) {
            var n = i.get(this);
            n[e] = t, i.set(this, n);
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
    } ]) && r(h.prototype, b), v && r(h, v), d;
}();

exports.default = d, d.UNSEND = 0, d.OPENED = 1, d.HEADERS_RECEIVED = 2, d.LOADING = 3, 
d.DONE = 4, module.exports = exports.default;