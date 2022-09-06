function e(e, t) {
    for (var o = 0; o < t.length; o++) {
        var n = t[o];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
        Object.defineProperty(e, n.key, n);
    }
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = new WeakMap(), o = function() {
    function o(e) {
        var n = this, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, o), this.binaryType = "", this.bufferedAmount = 0, this.extensions = "", 
        this.onclose = null, this.onerror = null, this.onmessage = null, this.onopen = null, 
        this.protocol = "", this.readyState = 3, "string" != typeof e || !/(^ws:\/\/)|(^wss:\/\/)/.test(e)) throw new TypeError("Failed to construct 'WebSocket': The URL '".concat(e, "' is invalid"));
        this.url = e, this.readyState = o.CONNECTING;
        var s = wx.connectSocket({
            url: e,
            protocols: Array.isArray(r) ? r : [ r ],
            tcpNoDelay: !0
        });
        return t.set(this, s), s.onClose(function(e) {
            n.readyState = o.CLOSED, "function" == typeof n.onclose && n.onclose(e);
        }), s.onMessage(function(e) {
            "function" == typeof n.onmessage && n.onmessage(e);
        }), s.onOpen(function() {
            n.readyState = o.OPEN, "function" == typeof n.onopen && n.onopen();
        }), s.onError(function(e) {
            "function" == typeof n.onerror && n.onerror(new Error(e.errMsg));
        }), this;
    }
    var n, r, s;
    return n = o, (r = [ {
        key: "close",
        value: function(e, n) {
            this.readyState = o.CLOSING, t.get(this).close({
                code: e,
                reason: n
            });
        }
    }, {
        key: "send",
        value: function(e) {
            if ("string" != typeof e && !(e instanceof ArrayBuffer)) throw new TypeError("Failed to send message: The data ".concat(e, " is invalid"));
            t.get(this).send({
                data: e
            });
        }
    } ]) && e(n.prototype, r), s && e(n, s), o;
}();

exports.default = o, o.CONNECTING = 0, o.OPEN = 1, o.CLOSING = 2, o.CLOSED = 3, 
module.exports = exports.default;