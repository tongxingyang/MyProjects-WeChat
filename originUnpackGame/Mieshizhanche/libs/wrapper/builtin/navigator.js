Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("./util/index.js"), o = wx.getSystemInfoSync();

console.log(o);

var n = o.system, t = o.platform, a = o.language, i = o.version, r = -1 !== n.toLowerCase().indexOf("android") ? "Android; CPU ".concat(n) : "iPhone; CPU iPhone OS ".concat(n, " like Mac OS X"), c = "Mozilla/5.0 (".concat(r, ") AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/").concat(i, " MiniGame NetType/WIFI Language/").concat(a), s = {
    platform: t,
    language: a,
    appVersion: "5.0 (".concat(r, ") AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"),
    userAgent: c,
    onLine: !0,
    geolocation: {
        getCurrentPosition: e.noop,
        watchPosition: e.noop,
        clearWatch: e.noop
    }
};

wx.onNetworkStatusChange && wx.onNetworkStatusChange(function(e) {
    s.onLine = e.isConnected;
});

var l = s;

exports.default = l, module.exports = exports.default;