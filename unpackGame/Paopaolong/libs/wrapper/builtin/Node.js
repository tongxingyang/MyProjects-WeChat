function t(e) {
    return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e, n = (e = require("./EventTarget.js")) && e.__esModule ? e : {
    default: e
};

function r(t, e) {
    for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
        Object.defineProperty(t, r.key, r);
    }
}

function o(t, e) {
    return (o = Object.setPrototypeOf || function(t, e) {
        return t.__proto__ = e, t;
    })(t, e);
}

function u(t) {
    var e = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), 
            !0;
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            return !1;
        }
    }();
    return function() {
        var n, r = i(t);
        if (e) {
            var o = i(this).constructor;
            n = Reflect.construct(r, arguments, o);
        } else n = r.apply(this, arguments);
        return c(this, n);
    };
}

function c(e, n) {
    return !n || "object" !== t(n) && "function" != typeof n ? function(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }(e) : n;
}

function i(t) {
    return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
}

var f = function(t) {
    !function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && o(t, e);
    }(l, n["default"]);
    var e, c, i, f = u(l);
    function l() {
        var t;
        return function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, l), (t = f.call(this)).childNodes = [], t;
    }
    return e = l, (c = [ {
        key: "appendChild",
        value: function(t) {
            this.childNodes.push(t);
        }
    }, {
        key: "cloneNode",
        value: function() {
            var t = Object.create(this);
            return Object.assign(t, this), t;
        }
    }, {
        key: "removeChild",
        value: function(t) {
            var e = this.childNodes.findIndex(function(e) {
                return e === t;
            });
            return e > -1 ? this.childNodes.splice(e, 1) : null;
        }
    } ]) && r(e.prototype, c), i && r(e, i), l;
}();

exports.default = f, module.exports = exports.default;