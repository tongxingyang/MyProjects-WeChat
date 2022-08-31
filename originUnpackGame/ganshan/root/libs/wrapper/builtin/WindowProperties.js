exports.__esModule = !0, exports.ontouchend = exports.ontouchmove = exports.ontouchstart = exports.performance = exports.screen = exports.devicePixelRatio = exports.innerHeight = exports.innerWidth = void 0;

var e = wx.getSystemInfoSync(), t = e.screenWidth, o = e.screenHeight, r = e.devicePixelRatio;

exports.devicePixelRatio = r;

var i = t;

exports.innerWidth = i;

var n = o;

exports.innerHeight = n;

var s = {
    width: t,
    height: o,
    availWidth: i,
    availHeight: n,
    availLeft: 0,
    availTop: 0
};

exports.screen = s;

var a = {
    now: Date.now
};

exports.performance = a;

exports.ontouchstart = null;

exports.ontouchmove = null;

exports.ontouchend = null;