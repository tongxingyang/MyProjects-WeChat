var t;

function e(t, r) {
    return (e = Object.setPrototypeOf || function(t, e) {
        return t.__proto__ = e, t;
    })(t, r);
}

exports.__esModule = !0, exports.default = void 0;

var r = function(t) {
    var r, o;
    function u() {
        return t.call(this, "video") || this;
    }
    return o = t, (r = u).prototype = Object.create(o.prototype), r.prototype.constructor = r, 
    e(r, o), u;
}(((t = require("./HTMLMediaElement")) && t.__esModule ? t : {
    default: t
}).default);

exports.default = r, module.exports = exports.default;