function t(e) {
    return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e, n = (e = require("./HTMLAudioElement")) && e.__esModule ? e : {
    default: e
};

function o(t, e) {
    for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
        Object.defineProperty(t, o.key, o);
    }
}

function r(t, e, n) {
    return (r = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
        var o = function(t, e) {
            for (;!Object.prototype.hasOwnProperty.call(t, e) && null !== (t = s(t)); ) ;
            return t;
        }(t, e);
        if (o) {
            var r = Object.getOwnPropertyDescriptor(o, e);
            return r.get ? r.get.call(n) : r.value;
        }
    })(t, e, n || t);
}

function u(t, e) {
    return (u = Object.setPrototypeOf || function(t, e) {
        return t.__proto__ = e, t;
    })(t, e);
}

function i(t) {
    var e = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), 
            !0;
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            return !1;
        }
    }();
    return function() {
        var n, o = s(t);
        if (e) {
            var r = s(this).constructor;
            n = Reflect.construct(o, arguments, r);
        } else n = o.apply(this, arguments);
        return a(this, n);
    };
}

function a(e, n) {
    return !n || "object" !== t(n) && "function" != typeof n ? function(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }(e) : n;
}

function s(t) {
    return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
}

var c = 1, l = {}, f = function(t) {
    !function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && u(t, e);
    }(y, n["default"]);
    var e, a, f, p = i(y);
    function y(t) {
        var e;
        !function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, y), (e = p.call(this))._$sn = c++, e.HAVE_NOTHING = 0, e.HAVE_METADATA = 1, 
        e.HAVE_CURRENT_DATA = 2, e.HAVE_FUTURE_DATA = 3, e.HAVE_ENOUGH_DATA = 4, e.readyState = 0;
        var n = wx.createInnerAudioContext();
        return l[e._$sn] = n, e._canplayEvents = [ "load", "loadend", "canplay", "canplaythrough", "loadedmetadata" ], 
        n.onCanplay(function() {
            e._loaded = !0, e.readyState = e.HAVE_CURRENT_DATA, e._canplayEvents.forEach(function(t) {
                e.dispatchEvent({
                    type: t
                });
            });
        }), n.onPlay(function() {
            e._paused = l[e._$sn].paused, e.dispatchEvent({
                type: "play"
            });
        }), n.onPause(function() {
            e._paused = l[e._$sn].paused, e.dispatchEvent({
                type: "pause"
            });
        }), n.onEnded(function() {
            e._paused = l[e._$sn].paused, !1 === l[e._$sn].loop && e.dispatchEvent({
                type: "ended"
            }), e.readyState = 4;
        }), n.onError(function() {
            e._paused = l[e._$sn].paused, e.dispatchEvent({
                type: "error"
            });
        }), t ? e.src = t : e._src = "", e._loop = n.loop, e._autoplay = n.autoplay, e._paused = n.paused, 
        e._volume = n.volume, e._muted = !1, e;
    }
    return e = y, (a = [ {
        key: "addEventListener",
        value: function(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            r(s(y.prototype), "addEventListener", this).call(this, t, e, n), t = String(t).toLowerCase(), 
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
            l[this._$sn].play();
        }
    }, {
        key: "resume",
        value: function() {
            l[this._$sn].resume();
        }
    }, {
        key: "pause",
        value: function() {
            l[this._$sn].pause();
        }
    }, {
        key: "stop",
        value: function() {
            l[this._$sn].stop();
        }
    }, {
        key: "destroy",
        value: function() {
            l[this._$sn].destroy();
        }
    }, {
        key: "canPlayType",
        value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return "string" != typeof t ? "" : t.indexOf("audio/mpeg") > -1 || t.indexOf("audio/mp4") ? "probably" : "";
        }
    }, {
        key: "currentTime",
        get: function() {
            return l[this._$sn].currentTime;
        },
        set: function(t) {
            l[this._$sn].seek(t);
        }
    }, {
        key: "duration",
        get: function() {
            return l[this._$sn].duration;
        }
    }, {
        key: "src",
        get: function() {
            return this._src;
        },
        set: function(t) {
            this._src = t, this._loaded = !1, this.readyState = this.HAVE_NOTHING, l[this._$sn].src = t;
        }
    }, {
        key: "loop",
        get: function() {
            return this._loop;
        },
        set: function(t) {
            this._loop = t, l[this._$sn].loop = t;
        }
    }, {
        key: "autoplay",
        get: function() {
            return this.autoplay;
        },
        set: function(t) {
            this._autoplay = t, l[this._$sn].autoplay = t;
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
            this._volume = t, this._muted || (l[this._$sn].volume = t);
        }
    }, {
        key: "muted",
        get: function() {
            return this._muted;
        },
        set: function(t) {
            this._muted = t, l[this._$sn].volume = t ? 0 : this._volume;
        }
    }, {
        key: "cloneNode",
        value: function() {
            var t = new y();
            return t.loop = this.loop, t.autoplay = this.autoplay, t.src = this.src, t;
        }
    } ]) && o(e.prototype, a), f && o(e, f), y;
}();

exports.default = f, module.exports = exports.default;