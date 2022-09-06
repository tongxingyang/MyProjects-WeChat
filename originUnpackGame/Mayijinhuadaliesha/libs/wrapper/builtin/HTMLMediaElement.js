Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e, t = (e = require("./HTMLElement")) && e.__esModule ? e : {
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

function f(e, t) {
    return (f = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e;
    })(e, t);
}

var i = function(e) {
    function o(e) {
        return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, o), r(this, u(o).call(this, e));
    }
    var i, c, a;
    return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && f(e, t);
    }(o, t["default"]), i = o, (c = [ {
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
    } ]) && n(i.prototype, c), a && n(i, a), o;
}();

exports.default = i, module.exports = exports.default;