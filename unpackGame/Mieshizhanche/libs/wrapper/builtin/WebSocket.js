function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function t(e, t) {
    for (var o = 0; o < t.length; o++) {
        var n = t[o];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
        Object.defineProperty(e, n.key, n);
    }
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var o = new WeakMap(), n = function() {
    function n(t) {
        var r = this, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (e(this, n), this.binaryType = "", this.bufferedAmount = 0, this.extensions = "", 
        this.onclose = null, this.onerror = null, this.onmessage = null, this.onopen = null, 
        this.protocol = "", this.readyState = 3, "string" != typeof t || !/(^ws:\/\/)|(^wss:\/\/)/.test(t)) throw new TypeError("Failed to construct 'WebSocket': The URL '".concat(t, "' is invalid"));
        this.url = t, this.readyState = n.CONNECTING;
        var i = wx.connectSocket({
            url: t,
            protocols: Array.isArray(s) ? s : [ s ],
            tcpNoDelay: !0
        });
        return o.set(this, i), i.onClose(function(e) {
            r.readyState = n.CLOSED, "function" == typeof r.onclose && r.onclose(e);
        }), i.onMessage(function(e) {
            "function" == typeof r.onmessage && r.onmessage(e);
        }), i.onOpen(function() {
            r.readyState = n.OPEN, "function" == typeof r.onopen && r.onopen();
        }), i.onError(function(e) {
            "function" == typeof r.onerror && r.onerror(new Error(e.errMsg));
        }), this;
    }
    var r, s, i;
    return r = n, (s = [ {
        key: "close",
        value: function(e, t) {
            this.readyState = n.CLOSING, o.get(this).close({
                code: e,
                reason: t
            });
        }
    }, {
        key: "send",
        value: function(e) {
            if (!("string" == typeof e || e instanceof ArrayBuffer || ArrayBuffer.isView(e))) throw new TypeError("Failed to send message: The data ".concat(e, " is invalid"));
            o.get(this).send({
                data: e
            });
        }
    } ]) && t(r.prototype, s), i && t(r, i), n;
}();

exports.default = n, n.CONNECTING = 0, n.OPEN = 1, n.CLOSING = 2, n.CLOSED = 3, 
module.exports = exports.default;