function e(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
        Object.defineProperty(e, r.key, r);
    }
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = new WeakMap(), n = function() {
    function n() {
        !function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, n), t.set(this, {});
    }
    var r, a, i;
    return r = n, (a = [ {
        key: "addEventListener",
        value: function(e, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a = t.get(this);
            a || (a = {}, t.set(this, a)), a[e] || (a[e] = []), a[e].push(n), r.capture, r.once, 
            r.passive;
        }
    }, {
        key: "removeEventListener",
        value: function(e, n) {
            var r = t.get(this);
            if (r) {
                var a = r[e];
                if (a && a.length > 0) for (var i = a.length; i--; i > 0) if (a[i] === n) {
                    a.splice(i, 1);
                    break;
                }
            }
        }
    }, {
        key: "dispatchEvent",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.get(this)[e.type];
            if (n) for (var r = 0; r < n.length; r++) n[r](e);
        }
    } ]) && e(r.prototype, a), i && e(r, i), n;
}();

exports.default = n, module.exports = exports.default;