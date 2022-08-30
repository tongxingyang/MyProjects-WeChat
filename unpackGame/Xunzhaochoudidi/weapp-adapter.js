var _typeof2 = require("@babel/runtime/helpers/typeof");

!function(e) {
    var t = {};
    function __webpack_require__(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return e[n].call(o.exports, o, o.exports, __webpack_require__), o.loaded = !0, o.exports;
    }
    __webpack_require__.m = e, __webpack_require__.c = t, __webpack_require__.p = "", 
    __webpack_require__(0);
}([ function(e, t, n) {
    "use strict";
    var o, r = function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) {
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        }
        return t.default = e, t;
    }(n(1)), i = n(4), a = (o = i) && o.__esModule ? o : {
        default: o
    };
    var u = GameGlobal;
    GameGlobal.__isAdapterInjected || (GameGlobal.__isAdapterInjected = !0, function() {
        r.addEventListener = function(e, t) {
            r.document.addEventListener(e, t);
        }, r.removeEventListener = function(e, t) {
            r.document.removeEventListener(e, t);
        }, r.canvas && (r.canvas.addEventListener = r.addEventListener, r.canvas.removeEventListener = r.removeEventListener), 
        u.sharedCanvas && (sharedCanvas.__proto__.__proto__ = new a.default("canvas"), sharedCanvas.addEventListener = r.addEventListener, 
        sharedCanvas.removeEventListener = r.removeEventListener);
        var e = wx.getSystemInfoSync().platform;
        if ("undefined" == typeof __devtoolssubcontext && "devtools" === e) {
            for (var t in r) {
                var n = Object.getOwnPropertyDescriptor(u, t);
                n && !0 !== n.configurable || Object.defineProperty(window, t, {
                    value: r[t]
                });
            }
            for (var o in r.document) {
                var i = Object.getOwnPropertyDescriptor(u.document, o);
                i && !0 !== i.configurable || Object.defineProperty(u.document, o, {
                    value: r.document[o]
                });
            }
            window.parent = window;
        } else {
            for (var s in r) {
                u[s] = r[s];
            }
            u.window = r, window = u, window.top = window.parent = window;
        }
    }());
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.cancelAnimationFrame = t.requestAnimationFrame = t.clearInterval = t.clearTimeout = t.setInterval = t.setTimeout = t.canvas = t.location = t.localStorage = t.HTMLElement = t.FileReader = t.Audio = t.Image = t.WebSocket = t.XMLHttpRequest = t.navigator = t.document = void 0;
    var o = n(2);
    Object.keys(o).forEach(function(e) {
        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
            enumerable: !0,
            get: function get() {
                return o[e];
            }
        });
    });
    var r = n(3);
    Object.keys(r).forEach(function(e) {
        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
            enumerable: !0,
            get: function get() {
                return r[e];
            }
        });
    });
    var i = _interopRequireDefault(n(9)), a = n(17), u = _interopRequireDefault(n(10)), s = _interopRequireDefault(n(18)), c = _interopRequireDefault(n(19)), l = _interopRequireDefault(n(20)), f = _interopRequireDefault(n(11)), d = _interopRequireDefault(n(12)), p = _interopRequireDefault(n(21)), h = _interopRequireDefault(n(4)), y = _interopRequireDefault(n(22)), v = _interopRequireDefault(n(23));
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    t.document = u.default, t.navigator = s.default, t.XMLHttpRequest = c.default, t.WebSocket = l.default, 
    t.Image = f.default, t.Audio = d.default, t.FileReader = p.default, t.HTMLElement = h.default, 
    t.localStorage = y.default, t.location = v.default;
    var _ = (0, a.isSubContext)() ? void 0 : new i.default();
    t.canvas = _, t.setTimeout = setTimeout, t.setInterval = setInterval, t.clearTimeout = clearTimeout, 
    t.clearInterval = clearInterval, t.requestAnimationFrame = requestAnimationFrame, 
    t.cancelAnimationFrame = cancelAnimationFrame;
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = wx.getSystemInfoSync(), o = n.screenWidth, r = n.screenHeight, i = n.devicePixelRatio, a = t.innerWidth = o, u = t.innerHeight = r;
    t.devicePixelRatio = i;
    t.screen = {
        availWidth: a,
        availHeight: u
    }, t.performance = {
        now: function now() {
            return Date.now() / 1e3;
        }
    }, t.ontouchstart = null, t.ontouchmove = null, t.ontouchend = null;
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HTMLCanvasElement = t.HTMLImageElement = void 0;
    var o, r = n(4), i = (o = r) && o.__esModule ? o : {
        default: o
    };
    function _classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != _typeof2(t) && "function" != typeof t ? e : t;
    }
    function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + _typeof2(t));
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    t.HTMLImageElement = function(e) {
        function HTMLImageElement() {
            return _classCallCheck(this, HTMLImageElement), _possibleConstructorReturn(this, (HTMLImageElement.__proto__ || Object.getPrototypeOf(HTMLImageElement)).call(this, "img"));
        }
        return _inherits(HTMLImageElement, i.default), HTMLImageElement;
    }(), t.HTMLCanvasElement = function(e) {
        function HTMLCanvasElement() {
            return _classCallCheck(this, HTMLCanvasElement), _possibleConstructorReturn(this, (HTMLCanvasElement.__proto__ || Object.getPrototypeOf(HTMLCanvasElement)).call(this, "canvas"));
        }
        return _inherits(HTMLCanvasElement, i.default), HTMLCanvasElement;
    }();
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o, r = function() {
        function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(e, t, n) {
            return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e;
        };
    }(), i = n(5), a = (o = i) && o.__esModule ? o : {
        default: o
    }, u = n(8), s = n(2);
    var c = function(e) {
        function HTMLElement() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, HTMLElement);
            var t = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != _typeof2(t) && "function" != typeof t ? e : t;
            }(this, (HTMLElement.__proto__ || Object.getPrototypeOf(HTMLElement)).call(this));
            return t.className = "", t.childern = [], t.style = {
                width: s.innerWidth + "px",
                height: s.innerHeight + "px"
            }, t.insertBefore = u.noop, t.innerHTML = "", t.tagName = e.toUpperCase(), t;
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + _typeof2(t));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(HTMLElement, a.default), r(HTMLElement, [ {
            key: "setAttribute",
            value: function value(e, t) {
                this[e] = t;
            }
        }, {
            key: "getAttribute",
            value: function value(e) {
                return this[e];
            }
        }, {
            key: "getBoundingClientRect",
            value: function value() {
                return {
                    top: 0,
                    left: 0,
                    width: s.innerWidth,
                    height: s.innerHeight
                };
            }
        }, {
            key: "focus",
            value: function value() {}
        }, {
            key: "clientWidth",
            get: function get() {
                var e = parseInt(this.style.fontSize, 10) * this.innerHTML.length;
                return Number.isNaN(e) ? 0 : e;
            }
        }, {
            key: "clientHeight",
            get: function get() {
                var e = parseInt(this.style.fontSize, 10);
                return Number.isNaN(e) ? 0 : e;
            }
        } ]), HTMLElement;
    }();
    t.default = c;
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o, r = n(6), i = (o = r) && o.__esModule ? o : {
        default: o
    };
    var a = function(e) {
        function ELement() {
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, ELement);
            var e = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != _typeof2(t) && "function" != typeof t ? e : t;
            }(this, (ELement.__proto__ || Object.getPrototypeOf(ELement)).call(this));
            return e.className = "", e.children = [], e;
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + _typeof2(t));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(ELement, i.default), ELement;
    }();
    t.default = a;
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o, r = function() {
        function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(e, t, n) {
            return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e;
        };
    }(), i = n(7), a = (o = i) && o.__esModule ? o : {
        default: o
    };
    var u = function(e) {
        function Node() {
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, Node);
            var e = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != _typeof2(t) && "function" != typeof t ? e : t;
            }(this, (Node.__proto__ || Object.getPrototypeOf(Node)).call(this));
            return e.childNodes = [], e;
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + _typeof2(t));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(Node, a.default), r(Node, [ {
            key: "appendChild",
            value: function value(e) {
                if (!(e instanceof Node)) throw new TypeError("Failed to executed 'appendChild' on 'Node': parameter 1 is not of type 'Node'.");
                this.childNodes.push(e);
            }
        }, {
            key: "cloneNode",
            value: function value() {
                var e = Object.create(this);
                return Object.assign(e, this), e;
            }
        }, {
            key: "removeChild",
            value: function value(e) {
                var t = this.childNodes.findIndex(function(t) {
                    return t === e;
                });
                return t > -1 ? this.childNodes.splice(t, 1) : null;
            }
        } ]), Node;
    }();
    t.default = u;
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(e, t, n) {
            return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e;
        };
    }();
    var o = new WeakMap(), r = function() {
        function EventTarget() {
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, EventTarget), o.set(this, {});
        }
        return n(EventTarget, [ {
            key: "addEventListener",
            value: function value(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = o.get(this);
                r || (r = {}, o.set(this, r)), r[e] || (r[e] = []), r[e].push(t), n.capture && console.warn("EventTarget.addEventListener: options.capture is not implemented."), 
                n.once && console.warn("EventTarget.addEventListener: options.once is not implemented."), 
                n.passive && console.warn("EventTarget.addEventListener: options.passive is not implemented.");
            }
        }, {
            key: "removeEventListener",
            value: function value(e, t) {
                var n = o.get(this)[e];
                if (n && n.length > 0) for (var r = n.length; r--; r > 0) {
                    if (n[r] === t) {
                        n.splice(r, 1);
                        break;
                    }
                }
            }
        }, {
            key: "dispatchEvent",
            value: function value() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = o.get(this)[e.type];
                if (t) for (var n = 0; n < t.length; n++) {
                    t[n](e);
                }
            }
        } ]), EventTarget;
    }();
    t.default = r;
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.noop = function() {}, t.isSubContext = function() {
        return "undefined" != typeof GameGlobal && !0 === GameGlobal.__isSubContext;
    };
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function() {
        var e = wx.createCanvas();
        e.type = "canvas", e.__proto__.__proto__ = new o.default("canvas");
        e.getContext;
        return e.getBoundingClientRect = function() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }, e;
    };
    n(3);
    var o = _interopRequireDefault(n(4));
    _interopRequireDefault(n(10));
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) {
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        }
        return t.default = e, t;
    }(n(1)), r = _interopRequireDefault(n(4)), i = _interopRequireDefault(n(11)), a = _interopRequireDefault(n(12)), u = _interopRequireDefault(n(9));
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    n(15);
    var s = {}, c = {
        readyState: "complete",
        visibilityState: "visible",
        documentElement: o,
        hidden: !1,
        style: {},
        location: o.location,
        ontouchstart: null,
        ontouchmove: null,
        ontouchend: null,
        head: new r.default("head"),
        body: new r.default("body"),
        createElement: function createElement(e) {
            return "canvas" === e ? new u.default() : "audio" === e ? new a.default() : "img" === e ? new i.default() : new r.default(e);
        },
        getElementById: function getElementById(e) {
            return e === o.canvas.id ? o.canvas : null;
        },
        getElementsByTagName: function getElementsByTagName(e) {
            return "head" === e ? [ c.head ] : "body" === e ? [ c.body ] : "canvas" === e ? [ o.canvas ] : [];
        },
        querySelector: function querySelector(e) {
            return "head" === e ? c.head : "body" === e ? c.body : "canvas" === e ? o.canvas : e === "#" + o.canvas.id ? o.canvas : null;
        },
        querySelectorAll: function querySelectorAll(e) {
            return "head" === e ? [ c.head ] : "body" === e ? [ c.body ] : "canvas" === e ? [ o.canvas ] : [];
        },
        addEventListener: function addEventListener(e, t) {
            s[e] || (s[e] = []), s[e].push(t);
        },
        removeEventListener: function removeEventListener(e, t) {
            var n = s[e];
            if (n && n.length > 0) for (var o = n.length; o--; o > 0) {
                if (n[o] === t) {
                    n.splice(o, 1);
                    break;
                }
            }
        },
        dispatchEvent: function dispatchEvent(e) {
            var t = s[e.type];
            if (t) for (var n = 0; n < t.length; n++) {
                t[n](e);
            }
        }
    };
    t.default = c;
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function() {
        return wx.createImage();
    };
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o, r = function() {
        function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(e, t, n) {
            return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e;
        };
    }(), i = n(13), a = (o = i) && o.__esModule ? o : {
        default: o
    }, u = n(8);
    function _possibleConstructorReturn(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != _typeof2(t) && "function" != typeof t ? e : t;
    }
    var s = 0, c = 1, l = 2, f = 3, d = 4, p = new WeakMap(), h = new WeakMap(), y = (new WeakMap(), 
    new WeakMap(), function(e) {
        function Audio(e) {
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, Audio);
            var t = _possibleConstructorReturn(this, (Audio.__proto__ || Object.getPrototypeOf(Audio)).call(this));
            if (t.HAVE_NOTHING = s, t.HAVE_METADATA = c, t.HAVE_CURRENT_DATA = l, t.HAVE_FUTURE_DATA = f, 
            t.HAVE_ENOUGH_DATA = d, t.readyState = s, (0, u.isSubContext)()) return console.warn("HTMLAudioElement is not supported in SubContext."), 
            _possibleConstructorReturn(t);
            h.set(t, "");
            var n = wx.createInnerAudioContext();
            return p.set(t, n), n.onCanplay(function() {
                t.dispatchEvent({
                    type: "load"
                }), t.dispatchEvent({
                    type: "loadend"
                }), t.dispatchEvent({
                    type: "canplay"
                }), t.dispatchEvent({
                    type: "canplaythrough"
                }), t.dispatchEvent({
                    type: "loadedmetadata"
                }), t.readyState = l;
            }), n.onPlay(function() {
                t.dispatchEvent({
                    type: "play"
                });
            }), n.onPause(function() {
                t.dispatchEvent({
                    type: "pause"
                });
            }), n.onEnded(function() {
                t.dispatchEvent({
                    type: "ended"
                }), t.readyState = d;
            }), n.onError(function() {
                t.dispatchEvent({
                    type: "error"
                });
            }), e && (p.get(t).src = e), t;
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + _typeof2(t));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(Audio, a.default), r(Audio, [ {
            key: "load",
            value: function value() {
                console.warn("HTMLAudioElement.load() is not implemented.");
            }
        }, {
            key: "play",
            value: function value() {
                (0, u.isSubContext)() || p.get(this).play();
            }
        }, {
            key: "pause",
            value: function value() {
                (0, u.isSubContext)() || p.get(this).pause();
            }
        }, {
            key: "canPlayType",
            value: function value() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return "string" != typeof e ? "" : e.indexOf("audio/mpeg") > -1 || e.indexOf("audio/mp4") ? "probably" : "";
            }
        }, {
            key: "cloneNode",
            value: function value() {
                var e = new Audio();
                return (0, u.isSubContext)() || (e.loop = p.get(this).loop, e.autoplay = p.get(this).loop, 
                e.src = this.src), e;
            }
        }, {
            key: "currentTime",
            get: function get() {
                return (0, u.isSubContext)() ? 0 : p.get(this).currentTime;
            },
            set: function set(e) {
                (0, u.isSubContext)() || p.get(this).seek(e);
            }
        }, {
            key: "src",
            get: function get() {
                return h.get(this);
            },
            set: function set(e) {
                h.set(this, e), (0, u.isSubContext)() || (p.get(this).src = e);
            }
        }, {
            key: "loop",
            get: function get() {
                return !(0, u.isSubContext)() && p.get(this).loop;
            },
            set: function set(e) {
                (0, u.isSubContext)() || (p.get(this).loop = e);
            }
        }, {
            key: "autoplay",
            get: function get() {
                return !(0, u.isSubContext)() && p.get(this).autoplay;
            },
            set: function set(e) {
                (0, u.isSubContext)() || (p.get(this).autoplay = e);
            }
        }, {
            key: "paused",
            get: function get() {
                return !(0, u.isSubContext)() && p.get(this).paused;
            }
        } ]), Audio;
    }());
    t.default = y;
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o, r = n(14), i = (o = r) && o.__esModule ? o : {
        default: o
    };
    var a = function(e) {
        function HTMLAudioElement() {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, HTMLAudioElement), function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != _typeof2(t) && "function" != typeof t ? e : t;
            }(this, (HTMLAudioElement.__proto__ || Object.getPrototypeOf(HTMLAudioElement)).call(this, "audio"));
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + _typeof2(t));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(HTMLAudioElement, i.default), HTMLAudioElement;
    }();
    t.default = a;
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o, r = function() {
        function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(e, t, n) {
            return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e;
        };
    }(), i = n(4), a = (o = i) && o.__esModule ? o : {
        default: o
    };
    var u = function(e) {
        function HTMLMediaElement(e) {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, HTMLMediaElement), function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != _typeof2(t) && "function" != typeof t ? e : t;
            }(this, (HTMLMediaElement.__proto__ || Object.getPrototypeOf(HTMLMediaElement)).call(this, e));
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + _typeof2(t));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(HTMLMediaElement, a.default), r(HTMLMediaElement, [ {
            key: "addTextTrack",
            value: function value() {}
        }, {
            key: "captureStream",
            value: function value() {}
        }, {
            key: "fastSeek",
            value: function value() {}
        }, {
            key: "load",
            value: function value() {}
        }, {
            key: "pause",
            value: function value() {}
        }, {
            key: "play",
            value: function value() {}
        } ]), HTMLMediaElement;
    }();
    t.default = u;
}, function(e, t, n) {
    "use strict";
    n(16);
}, function(e, t, n) {
    "use strict";
    var o, r = function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) {
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        }
        return t.default = e, t;
    }(n(1)), i = n(10), a = (o = i) && o.__esModule ? o : {
        default: o
    }, u = n(8);
    var s = function TouchEvent(e) {
        !function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, TouchEvent), this.target = r.canvas, this.currentTarget = r.canvas, this.touches = [], 
        this.targetTouches = [], this.changedTouches = [], this.preventDefault = u.noop, 
        this.stopPropagation = u.noop, this.type = e;
    };
    function touchEventHandlerFactory(e) {
        return function(t) {
            var n = new s(e);
            n.touches = t.touches, n.targetTouches = Array.prototype.slice.call(t.touches), 
            n.changedTouches = t.changedTouches, n.timeStamp = t.timeStamp, a.default.dispatchEvent(n);
        };
    }
    wx.onTouchStart(touchEventHandlerFactory("touchstart")), wx.onTouchMove(touchEventHandlerFactory("touchmove")), 
    wx.onTouchEnd(touchEventHandlerFactory("touchend")), wx.onTouchCancel(touchEventHandlerFactory("touchcancel"));
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.noop = function() {}, t.isSubContext = function() {
        return "undefined" != typeof GameGlobal && !0 === GameGlobal.__isSubContext;
    };
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(8), r = {
        platform: wx.getSystemInfoSync().platform,
        language: "zh-cn",
        appVersion: "5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
        userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN",
        onLine: !0,
        geolocation: {
            getCurrentPosition: o.noop,
            watchPosition: o.noop,
            clearWatch: o.noop
        }
    };
    t.default = r;
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(e, t, n) {
            return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e;
        };
    }();
    var o = new WeakMap(), r = new WeakMap(), i = new WeakMap(), a = new WeakMap(), u = new WeakMap();
    function _triggerEvent(e) {
        if ("function" == typeof this["on" + e]) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) {
                n[o - 1] = arguments[o];
            }
            this["on" + e].apply(this, n);
        }
    }
    function _changeReadyState(e) {
        this.readyState = e, _triggerEvent.call(this, "readystatechange");
    }
    var s = function() {
        function XMLHttpRequest() {
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, XMLHttpRequest), this.onabort = null, this.onerror = null, this.onload = null, 
            this.onloadstart = null, this.onprogress = null, this.ontimeout = null, this.onloadend = null, 
            this.onreadystatechange = null, this.readyState = 0, this.response = null, this.responseText = null, 
            this.responseType = "", this.responseXML = null, this.status = 0, this.statusText = "", 
            this.upload = {}, this.withCredentials = !1, i.set(this, {
                "content-type": "application/x-www-form-urlencoded"
            }), a.set(this, {});
        }
        return n(XMLHttpRequest, [ {
            key: "abort",
            value: function value() {
                var e = u.get(this);
                e && e.abort();
            }
        }, {
            key: "getAllResponseHeaders",
            value: function value() {
                var e = a.get(this);
                return Object.keys(e).map(function(t) {
                    return t + ": " + e[t];
                }).join("\n");
            }
        }, {
            key: "getResponseHeader",
            value: function value(e) {
                return a.get(this)[e];
            }
        }, {
            key: "open",
            value: function value(e, t) {
                r.set(this, e), o.set(this, t), _changeReadyState.call(this, XMLHttpRequest.OPENED);
            }
        }, {
            key: "overrideMimeType",
            value: function value() {}
        }, {
            key: "send",
            value: function value() {
                var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                if (this.readyState !== XMLHttpRequest.OPENED) throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.");
                wx.request({
                    data: t,
                    url: o.get(this),
                    method: r.get(this),
                    header: i.get(this),
                    responseType: this.responseType,
                    success: function success(t) {
                        var n = t.data, o = t.statusCode, r = t.header;
                        if ("string" != typeof n && !(n instanceof ArrayBuffer)) try {
                            n = JSON.stringify(n);
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            n = n;
                        }
                        if (e.status = o, a.set(e, r), _triggerEvent.call(e, "loadstart"), _changeReadyState.call(e, XMLHttpRequest.HEADERS_RECEIVED), 
                        _changeReadyState.call(e, XMLHttpRequest.LOADING), e.response = n, n instanceof ArrayBuffer) {
                            e.responseText = "";
                            for (var i = new Uint8Array(n), u = i.byteLength, s = 0; s < u; s++) {
                                e.responseText += String.fromCharCode(i[s]);
                            }
                        } else e.responseText = n;
                        _changeReadyState.call(e, XMLHttpRequest.DONE), _triggerEvent.call(e, "load"), _triggerEvent.call(e, "loadend");
                    },
                    fail: function fail(t) {
                        var n = t.errMsg;
                        -1 !== n.indexOf("abort") ? _triggerEvent.call(e, "abort") : _triggerEvent.call(e, "error", n), 
                        _triggerEvent.call(e, "loadend");
                    }
                });
            }
        }, {
            key: "setRequestHeader",
            value: function value(e, t) {
                var n = i.get(this);
                n[e] = t, i.set(this, n);
            }
        } ]), XMLHttpRequest;
    }();
    s.UNSEND = 0, s.OPENED = 1, s.HEADERS_RECEIVED = 2, s.LOADING = 3, s.DONE = 4, t.default = s;
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(e, t, n) {
            return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e;
        };
    }(), r = n(8);
    var i = new WeakMap(), a = function() {
        function WebSocket(e) {
            var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            if (function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, WebSocket), this.binaryType = "", this.bufferedAmount = 0, this.extensions = "", 
            this.onclose = null, this.onerror = null, this.onmessage = null, this.onopen = null, 
            this.protocol = "", this.readyState = 3, (0, r.isSubContext)()) throw new Error("WebSocket is not supported in SubContext.");
            if ("string" != typeof e || !/(^ws:\/\/)|(^wss:\/\/)/.test(e)) throw new TypeError("Failed to construct 'WebSocket': The URL '" + e + "' is invalid");
            this.url = e, this.readyState = WebSocket.CONNECTING;
            var o = wx.connectSocket({
                url: e,
                protocols: Array.isArray(n) ? n : [ n ]
            });
            return i.set(this, o), o.onClose(function(e) {
                t.readyState = WebSocket.CLOSED, "function" == typeof t.onclose && t.onclose(e);
            }), o.onMessage(function(e) {
                "function" == typeof t.onmessage && t.onmessage(e);
            }), o.onOpen(function() {
                t.readyState = WebSocket.OPEN, "function" == typeof t.onopen && t.onopen();
            }), o.onError(function(e) {
                "function" == typeof t.onerror && t.onerror(new Error(e.errMsg));
            }), this;
        }
        return o(WebSocket, [ {
            key: "close",
            value: function value(e, t) {
                this.readyState = WebSocket.CLOSING, i.get(this).close({
                    code: e,
                    reason: t
                });
            }
        }, {
            key: "send",
            value: function value(e) {
                if ("string" != typeof e && !(e instanceof ArrayBuffer)) throw new TypeError("Failed to send message: The data " + e + " is invalid");
                i.get(this).send({
                    data: e
                });
            }
        } ]), WebSocket;
    }();
    a.CONNECTING = 0, a.OPEN = 1, a.CLOSING = 2, a.CLOSED = 3, t.default = a;
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(e, t, n) {
            return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e;
        };
    }(), r = n(8);
    var i = function() {
        function FileReader() {
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, FileReader);
        }
        return o(FileReader, [ {
            key: "construct",
            value: function value() {
                if ((0, r.isSubContext)()) throw new Error("FileReader is not supported in SubContext.");
            }
        } ]), FileReader;
    }();
    t.default = i;
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(8), r = {
        get length() {
            return wx.getStorageInfoSync().keys.length;
        },
        key: function key(e) {
            return wx.getStorageInfoSync().keys[e];
        },
        getItem: function getItem(e) {
            return wx.getStorageSync(e);
        },
        setItem: function setItem(e, t) {
            return wx.setStorageSync(e, t);
        },
        removeItem: function removeItem(e) {
            wx.removeStorageSync(e);
        },
        clear: function clear() {
            wx.clearStorageSync();
        }
    }, i = {}, a = {
        get length() {
            return Object.keys(i).length;
        },
        key: function key(e) {
            return Object.keys(i)[e];
        },
        getItem: function getItem(e) {
            return i[e];
        },
        setItem: function setItem(e, t) {
            i[e] = t;
        },
        removeItem: function removeItem(e) {
            delete i[e];
        },
        clear: function clear() {
            i = {};
        }
    }, u = (0, o.isSubContext)() ? a : r;
    t.default = u;
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = {
        href: "game.js",
        reload: function reload() {}
    };
} ]);