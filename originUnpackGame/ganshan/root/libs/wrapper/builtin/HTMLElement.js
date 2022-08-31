exports.__esModule = !0, exports.default = void 0;

var e, t = (e = require("./Element")) && e.__esModule ? e : {
    default: e
}, r = require("./util/index.js"), n = require("./WindowProperties");

function i(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
        Object.defineProperty(e, n.key, n);
    }
}

function o(e, t) {
    return (o = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e;
    })(e, t);
}

var u = function(e) {
    var t, u;
    function s(t) {
        var i;
        return void 0 === t && (t = ""), (i = e.call(this) || this).className = "", i.childern = [], 
        i.style = {
            width: n.innerWidth + "px",
            height: n.innerHeight + "px"
        }, i.insertBefore = r.noop, i.innerHTML = "", i.tagName = t.toUpperCase(), i;
    }
    u = e, (t = s).prototype = Object.create(u.prototype), t.prototype.constructor = t, 
    o(t, u);
    var a, l, p, c = s.prototype;
    return c.setAttribute = function(e, t) {
        this[e] = t;
    }, c.getAttribute = function(e) {
        return this[e];
    }, c.getBoundingClientRect = function() {
        return {
            top: 0,
            left: 0,
            width: n.innerWidth,
            height: n.innerHeight
        };
    }, c.focus = function() {}, a = s, (l = [ {
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
    } ]) && i(a.prototype, l), p && i(a, p), s;
}(t.default);

exports.default = u, module.exports = exports.default;