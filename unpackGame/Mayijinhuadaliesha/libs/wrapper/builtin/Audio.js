Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t, e = (t = require("./HTMLAudioElement")) && t.__esModule ? t : {
    default: t
};

function n(t) {
    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
}

function o(t, e) {
    for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
        Object.defineProperty(t, o.key, o);
    }
}

function r(t, e) {
    return !e || "object" !== n(e) && "function" != typeof e ? function(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }(t) : e;
}

function u(t, e, n) {
    return (u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
        var o = function(t, e) {
            for (;!Object.prototype.hasOwnProperty.call(t, e) && null !== (t = i(t)); ) ;
            return t;
        }(t, e);
        if (o) {
            var r = Object.getOwnPropertyDescriptor(o, e);
            return r.get ? r.get.call(n) : r.value;
        }
    })(t, e, n || t);
}

function i(t) {
    return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
}

function a(t, e) {
    return (a = Object.setPrototypeOf || function(t, e) {
        return t.__proto__ = e, t;
    })(t, e);
}

var s = 0, c = 1, l = 2, p = 3, f = 4, y = 1, d = {}, _ = function(t) {
    function n(t) {
        var e;
        !function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, n), (e = r(this, i(n).call(this)))._$sn = y++, e.HAVE_NOTHING = s, e.HAVE_METADATA = c, 
        e.HAVE_CURRENT_DATA = l, e.HAVE_FUTURE_DATA = p, e.HAVE_ENOUGH_DATA = f, e.readyState = s;
        var o = wx.createInnerAudioContext();
        return d[e._$sn] = o, e._canplayEvents = [ "load", "loadend", "canplay", "canplaythrough", "loadedmetadata" ], 
        o.onCanplay(function() {
            e._loaded = !0, e.readyState = e.HAVE_CURRENT_DATA, e._canplayEvents.forEach(function(t) {
                e.dispatchEvent({
                    type: t
                });
            });
        }), o.onPlay(function() {
            e._paused = d[e._$sn].paused, e.dispatchEvent({
                type: "play"
            });
        }), o.onPause(function() {
            e._paused = d[e._$sn].paused, e.dispatchEvent({
                type: "pause"
            });
        }), o.onEnded(function() {
            e._paused = d[e._$sn].paused, !1 === d[e._$sn].loop && e.dispatchEvent({
                type: "ended"
            }), e.readyState = f;
        }), o.onError(function() {
            e._paused = d[e._$sn].paused, e.dispatchEvent({
                type: "error"
            });
        }), t ? e.src = t : e._src = "", e._loop = o.loop, e._autoplay = o.autoplay, e._paused = o.paused, 
        e._volume = o.volume, e._muted = !1, e;
    }
    var _, h, v;
    return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && a(t, e);
    }(n, e["default"]), _ = n, (h = [ {
        key: "addEventListener",
        value: function(t, e) {
            var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            u(i(n.prototype), "addEventListener", this).call(this, t, e, o), t = String(t).toLowerCase(), 
            this._loaded && -1 !== this._canplayEvents.indexOf(t) && this.dispatchEvent({
                type: t
            });
        }
    }, {
        key: "load",
        value: function() {}
    }, {
        key: "play",
        value: function() {
            d[this._$sn].play();
        }
    }, {
        key: "resume",
        value: function() {
            d[this._$sn].resume();
        }
    }, {
        key: "pause",
        value: function() {
            d[this._$sn].pause();
        }
    }, {
        key: "stop",
        value: function() {
            d[this._$sn].stop();
        }
    }, {
        key: "destroy",
        value: function() {
            d[this._$sn].destroy();
        }
    }, {
        key: "canPlayType",
        value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return "string" != typeof t ? "" : t.indexOf("audio/mpeg") > -1 || t.indexOf("audio/mp4") ? "probably" : "";
        }
    }, {
        key: "cloneNode",
        value: function() {
            var t = new n();
            return t.loop = this.loop, t.autoplay = this.autoplay, t.src = this.src, t;
        }
    }, {
        key: "currentTime",
        get: function() {
            return d[this._$sn].currentTime;
        },
        set: function(t) {
            d[this._$sn].seek(t);
        }
    }, {
        key: "duration",
        get: function() {
            return d[this._$sn].duration;
        }
    }, {
        key: "src",
        get: function() {
            return this._src;
        },
        set: function(t) {
            this._src = t, this._loaded = !1, this.readyState = this.HAVE_NOTHING, d[this._$sn].src = t;
        }
    }, {
        key: "loop",
        get: function() {
            return this._loop;
        },
        set: function(t) {
            this._loop = t, d[this._$sn].loop = t;
        }
    }, {
        key: "autoplay",
        get: function() {
            return this.autoplay;
        },
        set: function(t) {
            this._autoplay = t, d[this._$sn].autoplay = t;
        }
    }, {
        key: "paused",
        get: function() {
            return this._paused;
        }
    }, {
        key: "volume",
        get: function() {
            return this._volume;
        },
        set: function(t) {
            this._volume = t, this._muted || (d[this._$sn].volume = t);
        }
    }, {
        key: "muted",
        get: function() {
            return this._muted;
        },
        set: function(t) {
            this._muted = t, d[this._$sn].volume = t ? 0 : this._volume;
        }
    } ]) && o(_.prototype, h), v && o(_, v), n;
}();

exports.default = _, module.exports = exports.default;