exports.__esModule = !0, exports.default = void 0;

var e, t = (e = require("./EventTarget.js")) && e.__esModule ? e : {
    default: e
};

function r(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}

function n(e, t) {
    return (n = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e;
    })(e, t);
}

var s = new WeakMap(), o = new WeakMap(), a = new WeakMap(), l = new WeakMap(), i = new WeakMap();

function u(e) {
    if ("function" == typeof this["on" + e]) {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        this["on" + e].apply(this, r);
    }
}

function c(e) {
    this.readyState = e, u.call(this, "readystatechange");
}

var p = function(e) {
    var t, p;
    function d() {
        var t;
        return (t = e.call(this) || this).timeout = 0, t.onabort = null, t.onerror = null, 
        t.onload = null, t.onloadstart = null, t.onprogress = null, t.ontimeout = null, 
        t.onloadend = null, t.onreadystatechange = null, t.readyState = 0, t.response = null, 
        t.responseText = null, t.responseType = "", t.responseXML = null, t.status = 0, 
        t.statusText = "", t.upload = {}, t.withCredentials = !1, a.set(r(t), {
            "content-type": "application/x-www-form-urlencoded"
        }), l.set(r(t), {}), t;
    }
    p = e, (t = d).prototype = Object.create(p.prototype), t.prototype.constructor = t, 
    n(t, p);
    var f = d.prototype;
    return f.abort = function() {
        var e = i.get(this);
        e && e.abort();
    }, f.getAllResponseHeaders = function() {
        var e = l.get(this);
        return Object.keys(e).map(function(t) {
            return t + ": " + e[t];
        }).join("\n");
    }, f.getResponseHeader = function(e) {
        return l.get(this)[e];
    }, f.open = function(e, t) {
        o.set(this, e), s.set(this, t), c.call(this, d.OPENED);
    }, f.overrideMimeType = function() {}, f.send = function(e) {
        var t = this;
        if (void 0 === e && (e = ""), this.readyState !== d.OPENED) throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.");
        var r = wx.request({
            data: e,
            url: s.get(this),
            method: o.get(this),
            header: a.get(this),
            dataType: "other",
            responseType: "arraybuffer" === this.responseType ? "arraybuffer" : "text",
            timeout: this.timeout || void 0,
            success: function(e) {
                var r = e.data, n = e.statusCode, s = e.header;
                switch (t.status = n, l.set(t, s), u.call(t, "loadstart"), c.call(t, d.HEADERS_RECEIVED), 
                c.call(t, d.LOADING), t.responseType) {
                  case "json":
                    t.responseText = r;
                    try {
                        t.response = JSON.parse(r);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        t.response = null;
                    }
                    break;

                  case "":
                  case "text":
                    t.responseText = t.response = r;
                    break;

                  case "arraybuffer":
                    t.response = r, t.responseText = "";
                    for (var o = new Uint8Array(r), a = o.byteLength, i = 0; i < a; i++) t.responseText += String.fromCharCode(o[i]);
                    break;

                  default:
                    t.response = null;
                }
                c.call(t, d.DONE), u.call(t, "load"), u.call(t, "loadend");
            },
            fail: function(e) {
                var r = e.errMsg;
                -1 !== r.indexOf("abort") ? u.call(t, "abort") : -1 !== r.indexOf("timeout") ? u.call(t, "timeout") : u.call(t, "error", r), 
                u.call(t, "loadend");
            }
        });
        i.set(this, r);
    }, f.setRequestHeader = function(e, t) {
        var r = a.get(this);
        r[e] = t, a.set(this, r);
    }, f.addEventListener = function(e, t) {
        if ("function" == typeof t) {
            var r = this;
            this["on" + e] = function(e) {
                t.call(r, e);
            };
        }
    }, d;
}(t.default);

exports.default = p, p.UNSEND = 0, p.OPENED = 1, p.HEADERS_RECEIVED = 2, p.LOADING = 3, 
p.DONE = 4, module.exports = exports.default;