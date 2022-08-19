!function(e) {
    var t = {};
    function n(o) {
        if (t[o]) return t[o].exports;
        var r = t[o] = {
            exports: {},
            id: o,
            loaded: !1
        };
        return e[o].call(r.exports, r, r.exports, n), r.loaded = !0, r.exports;
    }
    n.m = e, n.c = t, n.p = "", n(0);
}([ function(e, t, n) {
    "use strict";
    var o, r = function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t;
    }(n(1)), i = (o = n(4)) && o.__esModule ? o : {
        default: o
    }, a = GameGlobal;
    GameGlobal.__isAdapterInjected || (GameGlobal.__isAdapterInjected = !0, function() {
        r.addEventListener = function(e, t) {
            r.document.addEventListener(e, t);
        }, r.removeEventListener = function(e, t) {
            r.document.removeEventListener(e, t);
        }, r.canvas && (r.canvas.addEventListener = r.addEventListener, r.canvas.removeEventListener = r.removeEventListener), 
        a.sharedCanvas && (sharedCanvas.__proto__.__proto__ = new i.default("canvas"), sharedCanvas.addEventListener = r.addEventListener, 
        sharedCanvas.removeEventListener = r.removeEventListener);
        var e = wx.getSystemInfoSync().platform;
        if ("undefined" == typeof __devtoolssubcontext && "devtools" === e) {
            for (var t in r) {
                var n = Object.getOwnPropertyDescriptor(a, t);
                n && !0 !== n.configurable || Object.defineProperty(window, t, {
                    value: r[t]
                });
            }
            for (var o in r.document) {
                var u = Object.getOwnPropertyDescriptor(a.document, o);
                u && !0 !== u.configurable || Object.defineProperty(a.document, o, {
                    value: r.document[o]
                });
            }
            window.parent = window;
        } else {
            for (var c in r) a[c] = r[c];
            a.window = r, window = a, window.top = window.parent = window;
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
            get: function() {
                return o[e];
            }
        });
    });
    var r = n(3);
    Object.keys(r).forEach(function(e) {
        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
                return r[e];
            }
        });
    });
    var i = b(n(9)), a = n(17), u = b(n(10)), c = b(n(18)), s = b(n(19)), l = b(n(20)), f = b(n(11)), d = b(n(12)), p = b(n(21)), h = b(n(4)), y = b(n(22)), v = b(n(23));
    function b(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    t.document = u.default, t.navigator = c.default, t.XMLHttpRequest = s.default, t.WebSocket = l.default, 
    t.Image = f.default, t.Audio = d.default, t.FileReader = p.default, t.HTMLElement = h.default, 
    t.localStorage = y.default, t.location = v.default;
    var g = (0, a.isSubContext)() ? void 0 : new i.default();
    t.canvas = g, t.setTimeout = setTimeout, t.setInterval = setInterval, t.clearTimeout = clearTimeout, 
    t.clearInterval = clearInterval, t.requestAnimationFrame = requestAnimationFrame, 
    t.cancelAnimationFrame = cancelAnimationFrame;
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = wx.getSystemInfoSync(), o = n.screenWidth, r = n.screenHeight, i = n.devicePixelRatio, a = t.innerWidth = o, u = t.innerHeight = r;
    t.devicePixelRatio = i, t.screen = {
        availWidth: a,
        availHeight: u
    }, t.performance = {
        now: function() {
            return Date.now() / 1e3;
        }
    }, t.ontouchstart = null, t.ontouchmove = null, t.ontouchend = null;
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HTMLCanvasElement = t.HTMLImageElement = void 0;
    var o, r = (o = n(4)) && o.__esModule ? o : {
        default: o
    };
    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    function u(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
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
        function t() {
            return i(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "img"));
        }
        return u(t, r.default), t;
    }(), t.HTMLCanvasElement = function(e) {
        function t() {
            return i(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "canvas"));
        }
        return u(t, r.default), t;
    }();
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o, r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
        };
    }(), i = (o = n(5)) && o.__esModule ? o : {
        default: o
    }, a = n(8), u = n(2), c = function(e) {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t);
            var n = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return n.className = "", n.childern = [], n.style = {
                width: u.innerWidth + "px",
                height: u.innerHeight + "px"
            }, n.insertBefore = a.noop, n.innerHTML = "", n.tagName = e.toUpperCase(), n;
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(t, i.default), r(t, [ {
            key: "setAttribute",
            value: function(e, t) {
                this[e] = t;
            }
        }, {
            key: "getAttribute",
            value: function(e) {
                return this[e];
            }
        }, {
            key: "getBoundingClientRect",
            value: function() {
                return {
                    top: 0,
                    left: 0,
                    width: u.innerWidth,
                    height: u.innerHeight
                };
            }
        }, {
            key: "focus",
            value: function() {}
        }, {
            key: "clientWidth",
            get: function() {
                var e = parseInt(this.style.fontSize, 10) * this.innerHTML.length;
                return Number.isNaN(e) ? 0 : e;
            }
        }, {
            key: "clientHeight",
            get: function() {
                var e = parseInt(this.style.fontSize, 10);
                return Number.isNaN(e) ? 0 : e;
            }
        } ]), t;
    }();
    t.default = c;
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o, r = (o = n(6)) && o.__esModule ? o : {
        default: o
    }, i = function(e) {
        function t() {
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t);
            var e = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return e.className = "", e.children = [], e;
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(t, r.default), t;
    }();
    t.default = i;
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o, r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
        };
    }(), i = (o = n(7)) && o.__esModule ? o : {
        default: o
    }, a = function(e) {
        function t() {
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t);
            var e = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return e.childNodes = [], e;
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(t, i.default), r(t, [ {
            key: "appendChild",
            value: function(e) {
                if (!(e instanceof t)) throw new TypeError("Failed to executed 'appendChild' on 'Node': parameter 1 is not of type 'Node'.");
                this.childNodes.push(e);
            }
        }, {
            key: "cloneNode",
            value: function() {
                var e = Object.create(this);
                return Object.assign(e, this), e;
            }
        }, {
            key: "removeChild",
            value: function(e) {
                var t = this.childNodes.findIndex(function(t) {
                    return t === e;
                });
                return t > -1 ? this.childNodes.splice(t, 1) : null;
            }
        } ]), t;
    }();
    t.default = a;
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
        };
    }(), o = new WeakMap(), r = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, e), o.set(this, {});
        }
        return n(e, [ {
            key: "addEventListener",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = o.get(this);
                r || (r = {}, o.set(this, r)), r[e] || (r[e] = []), r[e].push(t), n.capture && console.warn("EventTarget.addEventListener: options.capture is not implemented."), 
                n.once && console.warn("EventTarget.addEventListener: options.once is not implemented."), 
                n.passive && console.warn("EventTarget.addEventListener: options.passive is not implemented.");
            }
        }, {
            key: "removeEventListener",
            value: function(e, t) {
                var n = o.get(this)[e];
                if (n && n.length > 0) for (var r = n.length; r--; r > 0) if (n[r] === t) {
                    n.splice(r, 1);
                    break;
                }
            }
        }, {
            key: "dispatchEvent",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = o.get(this)[e.type];
                if (t) for (var n = 0; n < t.length; n++) t[n](e);
            }
        } ]), e;
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
        return e.type = "canvas", e.__proto__.__proto__ = new o.default("canvas"), e.getContext, 
        e.getBoundingClientRect = function() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }, e;
    }, n(3);
    var o = r(n(4));
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    r(n(10));
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t;
    }(n(1)), r = c(n(4)), i = c(n(11)), a = c(n(12)), u = c(n(9));
    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    n(15);
    var s = {}, l = {
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
        createElement: function(e) {
            return "canvas" === e ? new u.default() : "audio" === e ? new a.default() : "img" === e ? new i.default() : new r.default(e);
        },
        getElementById: function(e) {
            return e === o.canvas.id ? o.canvas : null;
        },
        getElementsByTagName: function(e) {
            return "head" === e ? [ l.head ] : "body" === e ? [ l.body ] : "canvas" === e ? [ o.canvas ] : [];
        },
        querySelector: function(e) {
            return "head" === e ? l.head : "body" === e ? l.body : "canvas" === e || e === "#" + o.canvas.id ? o.canvas : null;
        },
        querySelectorAll: function(e) {
            return "head" === e ? [ l.head ] : "body" === e ? [ l.body ] : "canvas" === e ? [ o.canvas ] : [];
        },
        addEventListener: function(e, t) {
            s[e] || (s[e] = []), s[e].push(t);
        },
        removeEventListener: function(e, t) {
            var n = s[e];
            if (n && n.length > 0) for (var o = n.length; o--; o > 0) if (n[o] === t) {
                n.splice(o, 1);
                break;
            }
        },
        dispatchEvent: function(e) {
            var t = s[e.type];
            if (t) for (var n = 0; n < t.length; n++) t[n](e);
        }
    };
    t.default = l;
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
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
        };
    }(), i = (o = n(13)) && o.__esModule ? o : {
        default: o
    }, a = n(8);
    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var c = new WeakMap(), s = new WeakMap(), l = (new WeakMap(), new WeakMap(), function(e) {
        function t(e) {
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t);
            var n = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            if (n.HAVE_NOTHING = 0, n.HAVE_METADATA = 1, n.HAVE_CURRENT_DATA = 2, n.HAVE_FUTURE_DATA = 3, 
            n.HAVE_ENOUGH_DATA = 4, n.readyState = 0, (0, a.isSubContext)()) return console.warn("HTMLAudioElement is not supported in SubContext."), 
            u(n);
            s.set(n, "");
            var o = wx.createInnerAudioContext();
            return c.set(n, o), o.onCanplay(function() {
                n.dispatchEvent({
                    type: "load"
                }), n.dispatchEvent({
                    type: "loadend"
                }), n.dispatchEvent({
                    type: "canplay"
                }), n.dispatchEvent({
                    type: "canplaythrough"
                }), n.dispatchEvent({
                    type: "loadedmetadata"
                }), n.readyState = 2;
            }), o.onPlay(function() {
                n.dispatchEvent({
                    type: "play"
                });
            }), o.onPause(function() {
                n.dispatchEvent({
                    type: "pause"
                });
            }), o.onEnded(function() {
                n.dispatchEvent({
                    type: "ended"
                }), n.readyState = 4;
            }), o.onError(function() {
                n.dispatchEvent({
                    type: "error"
                });
            }), e && (c.get(n).src = e), n;
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(t, i.default), r(t, [ {
            key: "load",
            value: function() {
                console.warn("HTMLAudioElement.load() is not implemented.");
            }
        }, {
            key: "play",
            value: function() {
                (0, a.isSubContext)() || c.get(this).play();
            }
        }, {
            key: "pause",
            value: function() {
                (0, a.isSubContext)() || c.get(this).pause();
            }
        }, {
            key: "canPlayType",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return "string" != typeof e ? "" : e.indexOf("audio/mpeg") > -1 || e.indexOf("audio/mp4") ? "probably" : "";
            }
        }, {
            key: "cloneNode",
            value: function() {
                var e = new t();
                return (0, a.isSubContext)() || (e.loop = c.get(this).loop, e.autoplay = c.get(this).loop, 
                e.src = this.src), e;
            }
        }, {
            key: "currentTime",
            get: function() {
                return (0, a.isSubContext)() ? 0 : c.get(this).currentTime;
            },
            set: function(e) {
                (0, a.isSubContext)() || c.get(this).seek(e);
            }
        }, {
            key: "src",
            get: function() {
                return s.get(this);
            },
            set: function(e) {
                s.set(this, e), (0, a.isSubContext)() || (c.get(this).src = e);
            }
        }, {
            key: "loop",
            get: function() {
                return !(0, a.isSubContext)() && c.get(this).loop;
            },
            set: function(e) {
                (0, a.isSubContext)() || (c.get(this).loop = e);
            }
        }, {
            key: "autoplay",
            get: function() {
                return !(0, a.isSubContext)() && c.get(this).autoplay;
            },
            set: function(e) {
                (0, a.isSubContext)() || (c.get(this).autoplay = e);
            }
        }, {
            key: "paused",
            get: function() {
                return !(0, a.isSubContext)() && c.get(this).paused;
            }
        } ]), t;
    }());
    t.default = l;
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o, r = (o = n(14)) && o.__esModule ? o : {
        default: o
    }, i = function(e) {
        function t() {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t), function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "audio"));
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(t, r.default), t;
    }();
    t.default = i;
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o, r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
        };
    }(), i = (o = n(4)) && o.__esModule ? o : {
        default: o
    }, a = function(e) {
        function t(e) {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t), function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(t, i.default), r(t, [ {
            key: "addTextTrack",
            value: function() {}
        }, {
            key: "captureStream",
            value: function() {}
        }, {
            key: "fastSeek",
            value: function() {}
        }, {
            key: "load",
            value: function() {}
        }, {
            key: "pause",
            value: function() {}
        }, {
            key: "play",
            value: function() {}
        } ]), t;
    }();
    t.default = a;
}, function(e, t, n) {
    "use strict";
    n(16);
}, function(e, t, n) {
    "use strict";
    var o, r = function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t;
    }(n(1)), i = (o = n(10)) && o.__esModule ? o : {
        default: o
    }, a = n(8), u = function e(t) {
        !function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.target = r.canvas, this.currentTarget = r.canvas, this.touches = [], 
        this.targetTouches = [], this.changedTouches = [], this.preventDefault = a.noop, 
        this.stopPropagation = a.noop, this.type = t;
    };
    function c(e) {
        return function(t) {
            var n = new u(e);
            n.touches = t.touches, n.targetTouches = Array.prototype.slice.call(t.touches), 
            n.changedTouches = t.changedTouches, n.timeStamp = t.timeStamp, i.default.dispatchEvent(n);
        };
    }
    wx.onTouchStart(c("touchstart")), wx.onTouchMove(c("touchmove")), wx.onTouchEnd(c("touchend")), 
    wx.onTouchCancel(c("touchcancel"));
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
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
        };
    }(), o = new WeakMap(), r = new WeakMap(), i = new WeakMap(), a = new WeakMap(), u = new WeakMap();
    function c(e) {
        if ("function" == typeof this["on" + e]) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
            this["on" + e].apply(this, n);
        }
    }
    function s(e) {
        this.readyState = e, c.call(this, "readystatechange");
    }
    var l = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, e), this.onabort = null, this.onerror = null, this.onload = null, this.onloadstart = null, 
            this.onprogress = null, this.ontimeout = null, this.onloadend = null, this.onreadystatechange = null, 
            this.readyState = 0, this.response = null, this.responseText = null, this.responseType = "", 
            this.responseXML = null, this.status = 0, this.statusText = "", this.upload = {}, 
            this.withCredentials = !1, i.set(this, {
                "content-type": "application/x-www-form-urlencoded"
            }), a.set(this, {});
        }
        return n(e, [ {
            key: "abort",
            value: function() {
                var e = u.get(this);
                e && e.abort();
            }
        }, {
            key: "getAllResponseHeaders",
            value: function() {
                var e = a.get(this);
                return Object.keys(e).map(function(t) {
                    return t + ": " + e[t];
                }).join("\n");
            }
        }, {
            key: "getResponseHeader",
            value: function(e) {
                return a.get(this)[e];
            }
        }, {
            key: "open",
            value: function(t, n) {
                r.set(this, t), o.set(this, n), s.call(this, e.OPENED);
            }
        }, {
            key: "overrideMimeType",
            value: function() {}
        }, {
            key: "send",
            value: function() {
                var t = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                if (this.readyState !== e.OPENED) throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.");
                wx.request({
                    data: n,
                    url: o.get(this),
                    method: r.get(this),
                    header: i.get(this),
                    responseType: this.responseType,
                    success: function(n) {
                        var o = n.data, r = n.statusCode, i = n.header;
                        if ("string" != typeof o && !(o instanceof ArrayBuffer)) try {
                            o = JSON.stringify(o);
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            o = o;
                        }
                        if (t.status = r, a.set(t, i), c.call(t, "loadstart"), s.call(t, e.HEADERS_RECEIVED), 
                        s.call(t, e.LOADING), t.response = o, o instanceof ArrayBuffer) {
                            t.responseText = "";
                            for (var u = new Uint8Array(o), l = u.byteLength, f = 0; f < l; f++) t.responseText += String.fromCharCode(u[f]);
                        } else t.responseText = o;
                        s.call(t, e.DONE), c.call(t, "load"), c.call(t, "loadend");
                    },
                    fail: function(e) {
                        var n = e.errMsg;
                        -1 !== n.indexOf("abort") ? c.call(t, "abort") : c.call(t, "error", n), c.call(t, "loadend");
                    }
                });
            }
        }, {
            key: "setRequestHeader",
            value: function(e, t) {
                var n = i.get(this);
                n[e] = t, i.set(this, n);
            }
        } ]), e;
    }();
    l.UNSEND = 0, l.OPENED = 1, l.HEADERS_RECEIVED = 2, l.LOADING = 3, l.DONE = 4, t.default = l;
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
        };
    }(), r = n(8), i = new WeakMap(), a = function() {
        function e(t) {
            var n = this, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            if (function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, e), this.binaryType = "", this.bufferedAmount = 0, this.extensions = "", 
            this.onclose = null, this.onerror = null, this.onmessage = null, this.onopen = null, 
            this.protocol = "", this.readyState = 3, (0, r.isSubContext)()) throw new Error("WebSocket is not supported in SubContext.");
            if ("string" != typeof t || !/(^ws:\/\/)|(^wss:\/\/)/.test(t)) throw new TypeError("Failed to construct 'WebSocket': The URL '" + t + "' is invalid");
            this.url = t, this.readyState = e.CONNECTING;
            var a = wx.connectSocket({
                url: t,
                protocols: Array.isArray(o) ? o : [ o ]
            });
            return i.set(this, a), a.onClose(function(t) {
                n.readyState = e.CLOSED, "function" == typeof n.onclose && n.onclose(t);
            }), a.onMessage(function(e) {
                "function" == typeof n.onmessage && n.onmessage(e);
            }), a.onOpen(function() {
                n.readyState = e.OPEN, "function" == typeof n.onopen && n.onopen();
            }), a.onError(function(e) {
                "function" == typeof n.onerror && n.onerror(new Error(e.errMsg));
            }), this;
        }
        return o(e, [ {
            key: "close",
            value: function(t, n) {
                this.readyState = e.CLOSING, i.get(this).close({
                    code: t,
                    reason: n
                });
            }
        }, {
            key: "send",
            value: function(e) {
                if ("string" != typeof e && !(e instanceof ArrayBuffer)) throw new TypeError("Failed to send message: The data " + e + " is invalid");
                i.get(this).send({
                    data: e
                });
            }
        } ]), e;
    }();
    a.CONNECTING = 0, a.OPEN = 1, a.CLOSING = 2, a.CLOSED = 3, t.default = a;
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
        };
    }(), r = n(8), i = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, e);
        }
        return o(e, [ {
            key: "construct",
            value: function() {
                if ((0, r.isSubContext)()) throw new Error("FileReader is not supported in SubContext.");
            }
        } ]), e;
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
        key: function(e) {
            return wx.getStorageInfoSync().keys[e];
        },
        getItem: function(e) {
            return wx.getStorageSync(e);
        },
        setItem: function(e, t) {
            return wx.setStorageSync(e, t);
        },
        removeItem: function(e) {
            wx.removeStorageSync(e);
        },
        clear: function() {
            wx.clearStorageSync();
        }
    }, i = {}, a = {
        get length() {
            return Object.keys(i).length;
        },
        key: function(e) {
            return Object.keys(i)[e];
        },
        getItem: function(e) {
            return i[e];
        },
        setItem: function(e, t) {
            i[e] = t;
        },
        removeItem: function(e) {
            delete i[e];
        },
        clear: function() {
            i = {};
        }
    }, u = (0, o.isSubContext)() ? a : r;
    t.default = u;
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = {
        href: "game.js",
        reload: function() {}
    };
} ]);