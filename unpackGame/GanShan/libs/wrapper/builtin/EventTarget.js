exports.__esModule = !0, exports.default = void 0;

var e = new WeakMap(), t = function() {
    function t() {
        e.set(this, {});
    }
    var r = t.prototype;
    return r.addEventListener = function(t, r, i) {
        void 0 === i && (i = {});
        var s = e.get(this);
        s || (s = {}, e.set(this, s)), s[t] || (s[t] = []), s[t].push(r), i.capture, i.once, 
        i.passive;
    }, r.removeEventListener = function(t, r) {
        var i = e.get(this);
        if (i) {
            var s = i[t];
            if (s && s.length > 0) for (var n = s.length; n--; n > 0) if (s[n] === r) {
                s.splice(n, 1);
                break;
            }
        }
    }, r.dispatchEvent = function(t) {
        void 0 === t && (t = {});
        var r = e.get(this)[t.type];
        if (r) for (var i = 0; i < r.length; i++) r[i](t);
    }, t;
}();

exports.default = t, module.exports = exports.default;