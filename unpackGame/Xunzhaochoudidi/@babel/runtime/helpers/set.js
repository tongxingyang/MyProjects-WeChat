var superPropBase = require("./superPropBase"), defineProperty = require("./defineProperty");

function set(e, r, t, i) {
    return (set = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function(e, r, t, i) {
        var n, o = superPropBase(e, r);
        if (o) {
            if ((n = Object.getOwnPropertyDescriptor(o, r)).set) return n.set.call(i, t), !0;
            if (!n.writable) return !1;
        }
        if (n = Object.getOwnPropertyDescriptor(i, r)) {
            if (!n.writable) return !1;
            n.value = t, Object.defineProperty(i, r, n);
        } else defineProperty(i, r, t);
        return !0;
    })(e, r, t, i);
}

function _set(e, r, t, i, n) {
    if (!set(e, r, t, i || e) && n) throw new Error("failed to set property");
    return t;
}

module.exports = _set;