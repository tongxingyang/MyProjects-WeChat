Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = {
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
    TouchEvent: !0,
    MouseEvent: !0,
    DeviceMotionEvent: !0,
    localStorage: !0,
    location: !0
};

Object.defineProperty(exports, "navigator", {
    enumerable: !0,
    get: function() {
        return r.default;
    }
}), Object.defineProperty(exports, "XMLHttpRequest", {
    enumerable: !0,
    get: function() {
        return n.default;
    }
}), Object.defineProperty(exports, "WebSocket", {
    enumerable: !0,
    get: function() {
        return o.default;
    }
}), Object.defineProperty(exports, "Image", {
    enumerable: !0,
    get: function() {
        return a.default;
    }
}), Object.defineProperty(exports, "ImageBitmap", {
    enumerable: !0,
    get: function() {
        return u.default;
    }
}), Object.defineProperty(exports, "Audio", {
    enumerable: !0,
    get: function() {
        return i.default;
    }
}), Object.defineProperty(exports, "FileReader", {
    enumerable: !0,
    get: function() {
        return l.default;
    }
}), Object.defineProperty(exports, "HTMLElement", {
    enumerable: !0,
    get: function() {
        return c.default;
    }
}), Object.defineProperty(exports, "HTMLImageElement", {
    enumerable: !0,
    get: function() {
        return m.default;
    }
}), Object.defineProperty(exports, "HTMLCanvasElement", {
    enumerable: !0,
    get: function() {
        return s.default;
    }
}), Object.defineProperty(exports, "HTMLMediaElement", {
    enumerable: !0,
    get: function() {
        return p.default;
    }
}), Object.defineProperty(exports, "HTMLAudioElement", {
    enumerable: !0,
    get: function() {
        return d.default;
    }
}), Object.defineProperty(exports, "HTMLVideoElement", {
    enumerable: !0,
    get: function() {
        return f.default;
    }
}), Object.defineProperty(exports, "WebGLRenderingContext", {
    enumerable: !0,
    get: function() {
        return b.default;
    }
}), Object.defineProperty(exports, "TouchEvent", {
    enumerable: !0,
    get: function() {
        return x.TouchEvent;
    }
}), Object.defineProperty(exports, "MouseEvent", {
    enumerable: !0,
    get: function() {
        return x.MouseEvent;
    }
}), Object.defineProperty(exports, "DeviceMotionEvent", {
    enumerable: !0,
    get: function() {
        return x.DeviceMotionEvent;
    }
}), Object.defineProperty(exports, "localStorage", {
    enumerable: !0,
    get: function() {
        return v.default;
    }
}), Object.defineProperty(exports, "location", {
    enumerable: !0,
    get: function() {
        return g.default;
    }
}), exports.cancelAnimationFrame = exports.requestAnimationFrame = exports.clearInterval = exports.clearTimeout = exports.setInterval = exports.setTimeout = exports.canvas = void 0;

var t = E(require("./Canvas")), r = E(require("./navigator")), n = E(require("./XMLHttpRequest")), o = E(require("./WebSocket")), a = E(require("./Image")), u = E(require("./ImageBitmap")), i = E(require("./Audio")), l = E(require("./FileReader")), c = E(require("./HTMLElement")), m = E(require("./HTMLImageElement")), s = E(require("./HTMLCanvasElement")), p = E(require("./HTMLMediaElement")), d = E(require("./HTMLAudioElement")), f = E(require("./HTMLVideoElement")), b = E(require("./WebGLRenderingContext")), x = require("./EventIniter/index.js"), v = E(require("./localStorage")), g = E(require("./location")), M = require("./WindowProperties");

function E(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.keys(M).forEach(function(t) {
    "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(e, t) || t in exports && exports[t] === M[t] || Object.defineProperty(exports, t, {
        enumerable: !0,
        get: function() {
            return M[t];
        }
    }));
}), GameGlobal.screencanvas = GameGlobal.screencanvas || new t.default();

var T = GameGlobal.screencanvas;

exports.canvas = T;

var q = GameGlobal, j = q.setTimeout, y = q.setInterval, L = q.clearTimeout, O = q.clearInterval, P = q.requestAnimationFrame, H = q.cancelAnimationFrame;

exports.cancelAnimationFrame = H, exports.requestAnimationFrame = P, exports.clearInterval = O, 
exports.clearTimeout = L, exports.setInterval = y, exports.setTimeout = j;