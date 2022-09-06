Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t, e = (t = require("./HTMLMediaElement")) && t.__esModule ? t : {
    default: t
};

function o(t) {
    return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
}

function n(t, e) {
    return !e || "object" !== o(e) && "function" != typeof e ? function(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }(t) : e;
}

function r(t) {
    return (r = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
}

function u(t, e) {
    return (u = Object.setPrototypeOf || function(t, e) {
        return t.__proto__ = e, t;
    })(t, e);
}

var i = function(t) {
    function o() {
        return function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, o), n(this, r(o).call(this, "video"));
    }
    return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && u(t, e);
    }(o, e["default"]), o;
}();

exports.default = i, module.exports = exports.default;