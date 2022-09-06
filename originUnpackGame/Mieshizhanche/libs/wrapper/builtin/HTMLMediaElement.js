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

var e, n = (e = require("./HTMLElement")) && e.__esModule ? e : {
    default: e
};

function o(t, e) {
    for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
        Object.defineProperty(t, o.key, o);
    }
}

function r(t, e) {
    return (r = Object.setPrototypeOf || function(t, e) {
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
        var n, o = f(t);
        if (e) {
            var r = f(this).constructor;
            n = Reflect.construct(o, arguments, r);
        } else n = o.apply(this, arguments);
        return c(this, n);
    };
}

function c(e, n) {
    return !n || "object" !== t(n) && "function" != typeof n ? function(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }(e) : n;
}

function f(t) {
    return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
}

var i = function(t) {
    !function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && r(t, e);
    }(a, n["default"]);
    var e, c, f, i = u(a);
    function a(t) {
        return function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, a), i.call(this, t);
    }
    return e = a, (c = [ {
        key: "addTextTrack",
        value: function() {}
    }, {
        key: "captureStream",
        value: function() {}
    }, {
        key: "fastSeek",
        value: function() {}
    }, {
        key: "load",
        value: function() {}
    }, {
        key: "pause",
        value: function() {}
    }, {
        key: "play",
        value: function() {}
    } ]) && o(e.prototype, c), f && o(e, f), a;
}();

exports.default = i, module.exports = exports.default;