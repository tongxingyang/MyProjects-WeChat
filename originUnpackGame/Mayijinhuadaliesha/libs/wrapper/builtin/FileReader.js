function e(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
        Object.defineProperty(e, n.key, n);
    }
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = function() {
    function t() {
        !function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t);
    }
    var r, n, o;
    return r = t, (n = [ {
        key: "construct",
        value: function() {}
    } ]) && e(r.prototype, n), o && e(r, o), t;
}();

exports.default = t, module.exports = exports.default;