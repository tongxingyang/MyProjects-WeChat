exports.__esModule = !0, exports.default = void 0;

var t, e = (t = require("./HTMLAudioElement")) && t.__esModule ? t : {
    default: t
};

function n(t, e) {
    for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
        Object.defineProperty(t, o.key, o);
    }
}

function o(t, e) {
    return (o = Object.setPrototypeOf || function(t, e) {
        return t.__proto__ = e, t;
    })(t, e);
}

var s = 1, u = {}, a = function(t) {
    var e, a;
    function i(e) {
        var n;
        (n = t.call(this) || this)._$sn = s++, n.HAVE_NOTHING = 0, n.HAVE_METADATA = 1, 
        n.HAVE_CURRENT_DATA = 2, n.HAVE_FUTURE_DATA = 3, n.HAVE_ENOUGH_DATA = 4, n.readyState = 0;
        var o = wx.createInnerAudioContext();
        return u[n._$sn] = o, n._canplayEvents = [ "load", "loadend", "canplay", "canplaythrough", "loadedmetadata" ], 
        o.onCanplay(function() {
            n._loaded = !0, n.readyState = n.HAVE_CURRENT_DATA, n._canplayEvents.forEach(function(t) {
                n.dispatchEvent({
                    type: t
                });
            });
        }), o.onPlay(function() {
            n._paused = u[n._$sn].paused, n.dispatchEvent({
                type: "play"
            });
        }), o.onPause(function() {
            n._paused = u[n._$sn].paused, n.dispatchEvent({
                type: "pause"
            });
        }), o.onEnded(function() {
            n._paused = u[n._$sn].paused, !1 === u[n._$sn].loop && n.dispatchEvent({
                type: "ended"
            }), n.readyState = 4;
        }), o.onError(function() {
            n._paused = u[n._$sn].paused, n.dispatchEvent({
                type: "error"
            });
        }), e ? n.src = e : n._src = "", n._loop = o.loop, n._autoplay = o.autoplay, n._paused = o.paused, 
        n._volume = o.volume, n._muted = !1, n;
    }
    a = t, (e = i).prototype = Object.create(a.prototype), e.prototype.constructor = e, 
    o(e, a);
    var r, p, d, c = i.prototype;
    return c.addEventListener = function(e, n, o) {
        void 0 === o && (o = {}), t.prototype.addEventListener.call(this, e, n, o), e = String(e).toLowerCase(), 
        this._loaded && -1 !== this._canplayEvents.indexOf(e) && this.dispatchEvent({
            type: e
        });
    }, c.load = function() {}, c.play = function() {
        u[this._$sn].play();
    }, c.resume = function() {
        u[this._$sn].resume();
    }, c.pause = function() {
        u[this._$sn].pause();
    }, c.stop = function() {
        u[this._$sn].stop();
    }, c.destroy = function() {
        u[this._$sn].destroy();
    }, c.canPlayType = function(t) {
        return void 0 === t && (t = ""), "string" != typeof t ? "" : t.indexOf("audio/mpeg") > -1 || t.indexOf("audio/mp4") ? "probably" : "";
    }, c.cloneNode = function() {
        var t = new i();
        return t.loop = this.loop, t.autoplay = this.autoplay, t.src = this.src, t;
    }, r = i, (p = [ {
        key: "currentTime",
        get: function() {
            return u[this._$sn].currentTime;
        },
        set: function(t) {
            u[this._$sn].seek(t);
        }
    }, {
        key: "duration",
        get: function() {
            return u[this._$sn].duration;
        }
    }, {
        key: "src",
        get: function() {
            return this._src;
        },
        set: function(t) {
            this._src = t, this._loaded = !1, this.readyState = this.HAVE_NOTHING, u[this._$sn].src = t;
        }
    }, {
        key: "loop",
        get: function() {
            return this._loop;
        },
        set: function(t) {
            this._loop = t, u[this._$sn].loop = t;
        }
    }, {
        key: "autoplay",
        get: function() {
            return this.autoplay;
        },
        set: function(t) {
            this._autoplay = t, u[this._$sn].autoplay = t;
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
            this._volume = t, this._muted || (u[this._$sn].volume = t);
        }
    }, {
        key: "muted",
        get: function() {
            return this._muted;
        },
        set: function(t) {
            this._muted = t, u[this._$sn].volume = t ? 0 : this._volume;
        }
    } ]) && n(r.prototype, p), d && n(r, d), i;
}(e.default);

exports.default = a, module.exports = exports.default;