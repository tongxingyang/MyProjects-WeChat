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

var e, o = (e = require("./HTMLMediaElement")) && e.__esModule ? e : {
    default: e
};

function r(t, e) {
    return (r = Object.setPrototypeOf || function(t, e) {
        return t.__proto__ = e, t;
    })(t, e);
}

function n(t) {
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
        var o, r = c(t);
        if (e) {
            var n = c(this).constructor;
            o = Reflect.construct(r, arguments, n);
        } else o = r.apply(this, arguments);
        return u(this, o);
    };
}

function u(e, o) {
    return !o || "object" !== t(o) && "function" != typeof o ? function(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }(e) : o;
}

function c(t) {
    return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
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
        }), e && r(t, e);
    }(u, o["default"]);
    var e = n(u);
    function u() {
        return function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, u), e.call(this, "audio");
    }
    return u;
}();

exports.default = f, module.exports = exports.default;