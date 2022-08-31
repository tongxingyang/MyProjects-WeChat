var t;

function e(t, r) {
    return (e = Object.setPrototypeOf || function(t, e) {
        return t.__proto__ = e, t;
    })(t, r);
}

exports.__esModule = !0, exports.default = void 0;

var r = function(t) {
    var r, o;
    function n() {
        var e;
        return (e = t.call(this) || this).childNodes = [], e;
    }
    o = t, (r = n).prototype = Object.create(o.prototype), r.prototype.constructor = r, 
    e(r, o);
    var u = n.prototype;
    return u.appendChild = function(t) {
        this.childNodes.push(t);
    }, u.cloneNode = function() {
        var t = Object.create(this);
        return Object.assign(t, this), t;
    }, u.removeChild = function(t) {
        var e = this.childNodes.findIndex(function(e) {
            return e === t;
        });
        return e > -1 ? this.childNodes.splice(e, 1) : null;
    }, n;
}(((t = require("./EventTarget.js")) && t.__esModule ? t : {
    default: t
}).default);

exports.default = r, module.exports = exports.default;