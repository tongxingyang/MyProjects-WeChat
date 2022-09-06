Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e, t = (e = require("./Element")) && e.__esModule ? e : {
    default: e
}, n = require("./util/index.js"), r = require("./WindowProperties");

function o(e) {
    return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
}

function i(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
        Object.defineProperty(e, r.key, r);
    }
}

function u(e, t) {
    return !t || "object" !== o(t) && "function" != typeof t ? function(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
    }(e) : t;
}

function c(e) {
    return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}

function f(e, t) {
    return (f = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e;
    })(e, t);
}

var l = function(e) {
    function o() {
        var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, o), (e = u(this, c(o).call(this))).className = "", e.childern = [], e.style = {
            width: "".concat(r.innerWidth, "px"),
            height: "".concat(r.innerHeight, "px")
        }, e.insertBefore = n.noop, e.innerHTML = "", e.tagName = t.toUpperCase(), e;
    }
    var l, a, s;
    return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && f(e, t);
    }(o, t["default"]), l = o, (a = [ {
        key: "setAttribute",
        value: function(e, t) {
            this[e] = t;
        }
    }, {
        key: "getAttribute",
        value: function(e) {
            return this[e];
        }
    }, {
        key: "getBoundingClientRect",
        value: function() {
            return {
                top: 0,
                left: 0,
                width: r.innerWidth,
                height: r.innerHeight
            };
        }
    }, {
        key: "focus",
        value: function() {}
    }, {
        key: "clientWidth",
        get: function() {
            var e = parseInt(this.style.fontSize, 10) * this.innerHTML.length;
            return Number.isNaN(e) ? 0 : e;
        }
    }, {
        key: "clientHeight",
        get: function() {
            var e = parseInt(this.style.fontSize, 10);
            return Number.isNaN(e) ? 0 : e;
        }
    } ]) && i(l.prototype, a), s && i(l, s), o;
}();

exports.default = l, module.exports = exports.default;