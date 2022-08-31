var t;

function e(t, o) {
    return (e = Object.setPrototypeOf || function(t, e) {
        return t.__proto__ = e, t;
    })(t, o);
}

exports.__esModule = !0, exports.default = void 0;

var o = function(t) {
    var o, r;
    function u(e) {
        return t.call(this, e) || this;
    }
    r = t, (o = u).prototype = Object.create(r.prototype), o.prototype.constructor = o, 
    e(o, r);
    var n = u.prototype;
    return n.addTextTrack = function() {}, n.captureStream = function() {}, n.fastSeek = function() {}, 
    n.load = function() {}, n.pause = function() {}, n.play = function() {}, u;
}(((t = require("./HTMLElement")) && t.__esModule ? t : {
    default: t
}).default);

exports.default = o, module.exports = exports.default;