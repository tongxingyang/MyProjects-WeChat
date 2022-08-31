exports.__esModule = !0;

var e = {
    TouchEvent: !0,
    MouseEvent: !0,
    DeviceMotionEvent: !0,
    canvas: !0,
    setTimeout: !0,
    setInterval: !0,
    clearTimeout: !0,
    clearInterval: !0,
    requestAnimationFrame: !0,
    cancelAnimationFrame: !0,
    navigator: !0,
    XMLHttpRequest: !0,
    WebSocket: !0,
    Image: !0,
    ImageBitmap: !0,
    Audio: !0,
    FileReader: !0,
    HTMLElement: !0,
    HTMLImageElement: !0,
    HTMLCanvasElement: !0,
    HTMLMediaElement: !0,
    HTMLAudioElement: !0,
    HTMLVideoElement: !0,
    WebGLRenderingContext: !0,
    localStorage: !0,
    location: !0
};

exports.cancelAnimationFrame = exports.requestAnimationFrame = exports.clearInterval = exports.clearTimeout = exports.setInterval = exports.setTimeout = exports.canvas = exports.DeviceMotionEvent = exports.MouseEvent = exports.TouchEvent = void 0;

var t = L(require("./Canvas")), r = L(require("./navigator"));

exports.navigator = r.default;

var a = L(require("./XMLHttpRequest"));

exports.XMLHttpRequest = a.default;

var o = L(require("./WebSocket"));

exports.WebSocket = o.default;

var n = L(require("./Image"));

exports.Image = n.default;

var i = L(require("./ImageBitmap"));

exports.ImageBitmap = i.default;

var l = L(require("./Audio"));

exports.Audio = l.default;

var s = L(require("./FileReader"));

exports.FileReader = s.default;

var u = L(require("./HTMLElement"));

exports.HTMLElement = u.default;

var v = L(require("./HTMLImageElement"));

exports.HTMLImageElement = v.default;

var m = L(require("./HTMLCanvasElement"));

exports.HTMLCanvasElement = m.default;

var p = L(require("./HTMLMediaElement"));

exports.HTMLMediaElement = p.default;

var c = L(require("./HTMLAudioElement"));

exports.HTMLAudioElement = c.default;

var x = L(require("./HTMLVideoElement"));

exports.HTMLVideoElement = x.default;

var d = L(require("./WebGLRenderingContext"));

exports.WebGLRenderingContext = d.default;

var M = require("./EventIniter/index.js");

exports.TouchEvent = M.TouchEvent, exports.MouseEvent = M.MouseEvent, exports.DeviceMotionEvent = M.DeviceMotionEvent;

var E = L(require("./localStorage"));

exports.localStorage = E.default;

var T = L(require("./location"));

exports.location = T.default;

var q = require("./WindowProperties");

function L(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.keys(q).forEach(function(t) {
    "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(e, t) || t in exports && exports[t] === q[t] || (exports[t] = q[t]));
}), GameGlobal.screencanvas = GameGlobal.screencanvas || new t.default();

var f = GameGlobal.screencanvas;

exports.canvas = f;

var H = GameGlobal, g = H.setTimeout, I = H.setInterval, A = H.clearTimeout, b = H.clearInterval, F = H.requestAnimationFrame, G = H.cancelAnimationFrame;

exports.cancelAnimationFrame = G, exports.requestAnimationFrame = F, exports.clearInterval = b, 
exports.clearTimeout = A, exports.setInterval = I, exports.setTimeout = g;