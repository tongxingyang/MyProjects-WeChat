exports.__esModule = !0, exports.default = void 0;

var e = new WeakMap(), t = function() {
    function t(o, n) {
        var r = this;
        if (void 0 === n && (n = []), this.binaryType = "", this.bufferedAmount = 0, this.extensions = "", 
        this.onclose = null, this.onerror = null, this.onmessage = null, this.onopen = null, 
        this.protocol = "", this.readyState = 3, "string" != typeof o || !/(^ws:\/\/)|(^wss:\/\/)/.test(o)) throw new TypeError("Failed to construct 'WebSocket': The URL '" + o + "' is invalid");
        this.url = o, this.readyState = t.CONNECTING;
        var s = wx.connectSocket({
            url: o,
            protocols: Array.isArray(n) ? n : [ n ],
            tcpNoDelay: !0
        });
        return e.set(this, s), s.onClose(function(e) {
            r.readyState = t.CLOSED, "function" == typeof r.onclose && r.onclose(e);
        }), s.onMessage(function(e) {
            "function" == typeof r.onmessage && r.onmessage(e);
        }), s.onOpen(function() {
            r.readyState = t.OPEN, "function" == typeof r.onopen && r.onopen();
        }), s.onError(function(e) {
            "function" == typeof r.onerror && r.onerror(new Error(e.errMsg));
        }), this;
    }
    var o = t.prototype;
    return o.close = function(o, n) {
        this.readyState = t.CLOSING, e.get(this).close({
            code: o,
            reason: n
        });
    }, o.send = function(t) {
        if (!("string" == typeof t || t instanceof ArrayBuffer || ArrayBuffer.isView(t))) throw new TypeError("Failed to send message: The data " + t + " is invalid");
        e.get(this).send({
            data: t
        });
    }, t;
}();

exports.default = t, t.CONNECTING = 0, t.OPEN = 1, t.CLOSING = 2, t.CLOSED = 3, 
module.exports = exports.default;