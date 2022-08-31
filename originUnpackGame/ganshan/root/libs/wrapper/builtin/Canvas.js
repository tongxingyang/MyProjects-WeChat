exports.__esModule = !0, exports.default = function() {
    var t = wx.createCanvas();
    t.type = "canvas";
    t.getContext;
    return t.getBoundingClientRect = function() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    }, t.style = {
        top: "0px",
        left: "0px",
        width: e.innerWidth + "px",
        height: e.innerHeight + "px"
    }, t.addEventListener = function(e, t, n) {
        void 0 === n && (n = {}), document.addEventListener(e, t, n);
    }, t.removeEventListener = function(e, t) {
        document.removeEventListener(e, t);
    }, t.dispatchEvent = function(e) {
        void 0 === e && (e = {}), console.log("canvas.dispatchEvent", e.type, e);
    }, Object.defineProperty(t, "clientWidth", {
        enumerable: !0,
        get: function() {
            return e.innerWidth;
        }
    }), Object.defineProperty(t, "clientHeight", {
        enumerable: !0,
        get: function() {
            return e.innerHeight;
        }
    }), t;
};

var e = require("./WindowProperties");

module.exports = exports.default;