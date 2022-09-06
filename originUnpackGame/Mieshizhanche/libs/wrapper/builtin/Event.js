Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = require("./util");

exports.default = function e(o) {
    !function(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }(this, e), this.cancelBubble = !1, this.cancelable = !1, this.target = null, this.timestampe = Date.now(), 
    this.preventDefault = t.noop, this.stopPropagation = t.noop, this.type = o;
}, module.exports = exports.default;