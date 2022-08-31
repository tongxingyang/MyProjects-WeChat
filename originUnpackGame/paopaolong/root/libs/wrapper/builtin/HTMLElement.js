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

var e, n = (e = require("./Element")) && e.__esModule ? e : {
    default: e
}, r = require("./util/index.js"), o = require("./WindowProperties");

function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function u(t, e) {
    for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
        Object.defineProperty(t, r.key, r);
    }
}

function c(t, e) {
    return (c = Object.setPrototypeOf || function(t, e) {
        return t.__proto__ = e, t;
    })(t, e);
}

function f(t) {
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
        var n, r = a(t);
        if (e) {
            var o = a(this).constructor;
            n = Reflect.construct(r, arguments, o);
        } else n = r.apply(this, arguments);
        return l(this, n);
    };
}

function l(e, n) {
    return !n || "object" !== t(n) && "function" != typeof n ? function(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }(e) : n;
}

function a(t) {
    return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
}

var s = function(t) {
    !function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && c(t, e);
    }(p, n["default"]);
    var e, l, a, s = f(p);
    function p() {
        var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return i(this, p), (t = s.call(this)).className = "", t.childern = [], t.style = {
            width: "".concat(o.innerWidth, "px"),
            height: "".concat(o.innerHeight, "px")
        }, t.insertBefore = r.noop, t.innerHTML = "", t.tagName = e.toUpperCase(), t;
    }
    return e = p, (l = [ {
        key: "setAttribute",
        value: function(t, e) {
            this[t] = e;
        }
    }, {
        key: "getAttribute",
        value: function(t) {
            return this[t];
        }
    }, {
        key: "clientWidth",
        get: function() {
            var t = parseInt(this.style.fontSize, 10) * this.innerHTML.length;
            return Number.isNaN(t) ? 0 : t;
        }
    }, {
        key: "clientHeight",
        get: function() {
            var t = parseInt(this.style.fontSize, 10);
            return Number.isNaN(t) ? 0 : t;
        }
    }, {
        key: "getBoundingClientRect",
        value: function() {
            return {
                top: 0,
                left: 0,
                width: o.innerWidth,
                height: o.innerHeight
            };
        }
    }, {
        key: "focus",
        value: function() {}
    } ]) && u(e.prototype, l), a && u(e, a), p;
}();

exports.default = s, module.exports = exports.default;