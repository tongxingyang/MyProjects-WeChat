function _iterableToArrayLimit(r, t) {
    var e = [], i = !0, l = !1, a = void 0;
    try {
        for (var n, o = r[Symbol.iterator](); !(i = (n = o.next()).done) && (e.push(n.value), 
        !t || e.length !== t); i = !0) ;
    } catch (r) {
        r = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(r);
        l = !0, a = r;
    } finally {
        try {
            i || null == o.return || o.return();
        } finally {
            if (l) throw a;
        }
    }
    return e;
}

module.exports = _iterableToArrayLimit;