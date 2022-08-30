exports.__esModule = !0, exports.default = void 0;

var t = require("./util");

exports.default = function(e) {
    this.cancelBubble = !1, this.cancelable = !1, this.target = null, this.timestampe = Date.now(), 
    this.preventDefault = t.noop, this.stopPropagation = t.noop, this.type = e;
}, module.exports = exports.default;