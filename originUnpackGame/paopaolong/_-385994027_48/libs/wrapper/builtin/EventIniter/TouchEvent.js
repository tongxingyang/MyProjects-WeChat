Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = require("../util/index.js");

var e = function e(o) {
    !function(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }(this, e), this.touches = [], this.targetTouches = [], this.changedTouches = [], 
    this.preventDefault = t.noop, this.stopPropagation = t.noop, this.type = o, this.target = window.canvas, 
    this.currentTarget = window.canvas;
};

function o(t) {
    return function(o) {
        var n = new e(t);
        n.touches = o.touches, n.targetTouches = Array.prototype.slice.call(o.touches), 
        n.changedTouches = o.changedTouches, n.timeStamp = o.timeStamp, document.dispatchEvent(n);
    };
}

exports.default = e, wx.onTouchStart(o("touchstart")), wx.onTouchMove(o("touchmove")), 
wx.onTouchEnd(o("touchend")), wx.onTouchCancel(o("touchcancel")), module.exports = exports.default;