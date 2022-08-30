exports.__esModule = !0, exports.default = void 0;

var t = require("../util/index.js"), e = function(e) {
    this.touches = [], this.targetTouches = [], this.changedTouches = [], this.preventDefault = t.noop, 
    this.stopPropagation = t.noop, this.type = e, this.target = window.canvas, this.currentTarget = window.canvas;
};

function o(t) {
    return function(o) {
        var c = new e(t);
        c.touches = o.touches, c.targetTouches = Array.prototype.slice.call(o.touches), 
        c.changedTouches = o.changedTouches, c.timeStamp = o.timeStamp, document.dispatchEvent(c);
    };
}

exports.default = e, wx.onTouchStart(o("touchstart")), wx.onTouchMove(o("touchmove")), 
wx.onTouchEnd(o("touchend")), wx.onTouchCancel(o("touchcancel")), module.exports = exports.default;