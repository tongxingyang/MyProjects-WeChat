Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e, t = (e = require("./EventTarget.js")) && e.__esModule ? e : {
    default: e
};

function o(e) {
    return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
}

function n(e, t) {
    for (var o = 0; o < t.length; o++) {
        var n = t[o];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
        Object.defineProperty(e, n.key, n);
    }
}

function r(e, t) {
    return !t || "object" !== o(t) && "function" != typeof t ? function(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
    }(e) : t;
}

function u(e) {
    return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}

function i(e, t) {
    return (i = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e;
    })(e, t);
}

var c = function(e) {
    function o() {
        var e;
        return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, o), (e = r(this, u(o).call(this))).childNodes = [], e;
    }
    var c, f, l;
    return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && i(e, t);
    }(o, t["default"]), c = o, (f = [ {
        key: "appendChild",
        value: function(e) {
            this.childNodes.push(e);
        }
    }, {
        key: "cloneNode",
        value: function() {
            var e = Object.create(this);
            return Object.assign(e, this), e;
        }
    }, {
        key: "removeChild",
        value: function(e) {
            var t = this.childNodes.findIndex(function(t) {
                return t === e;
            });
            return t > -1 ? this.childNodes.splice(t, 1) : null;
        }
    } ]) && n(c.prototype, f), l && n(c, l), o;
}();

exports.default = c, module.exports = exports.default;