function t(e) {
    return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(e);
}

function e(t, e) {
    for (var o = 0; o < e.length; o++) {
        var i = e[o];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
        Object.defineProperty(t, i.key, i);
    }
}

function o(e, o) {
    return !o || "object" !== t(o) && "function" != typeof o ? function(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }(e) : o;
}

function i(t, e, o) {
    return (i = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, o) {
        var i = function(t, e) {
            for (;!Object.prototype.hasOwnProperty.call(t, e) && null !== (t = n(t)); ) ;
            return t;
        }(t, e);
        if (i) {
            var r = Object.getOwnPropertyDescriptor(i, e);
            return r.get ? r.get.call(o) : r.value;
        }
    })(t, e, o || t);
}

function n(t) {
    return (n = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
}

function r(t, e) {
    return (r = Object.setPrototypeOf || function(t, e) {
        return t.__proto__ = e, t;
    })(t, e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.AudioPlayerWX = void 0;

var u = cc.internal.AudioPlayer, a = cc.AudioClip, s = a.PlayingState, f = a.AudioType;

cc.AudioClip.prototype._getPlayer = function(t) {
    return this._loadMode = f.JSB_AUDIO, l;
};

var l = function(t) {
    function a(t) {
        var e;
        return function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, a), (e = o(this, n(a).call(this, t)))._startTime = 0, e._offset = 0, e._volume = 1, 
        e._loop = !1, e._oneShoting = !1, e._audio = t.clip, e._audio.onPlay(function() {
            e._state !== s.PLAYING && (e._state = s.PLAYING, e._startTime = performance.now(), 
            e._eventTarget.emit("started"));
        }), e._audio.onPause(function() {
            e._state !== s.STOPPED && (e._state = s.STOPPED, e._offset += performance.now() - e._startTime);
        }), e._audio.onStop(function() {
            e._state !== s.STOPPED && (e._state = s.STOPPED, e._offset = 0);
        }), e._audio.onEnded(function() {
            e._state !== s.STOPPED && (e._state = s.STOPPED, e._offset = 0, e._eventTarget.emit("ended"));
        }), e._audio.onError(function(t) {
            return console.error(t.errMsg);
        }), e;
    }
    var f, l, c;
    return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && r(t, e);
    }(a, u), f = a, (l = [ {
        key: "play",
        value: function() {
            this._audio && this._state !== s.PLAYING && (this._blocking ? this._interrupted = !0 : (this._oneShoting && (this._audio.volume = this._volume, 
            this._audio.loop = this._loop, this._oneShoting = !1), this._audio.play()));
        }
    }, {
        key: "pause",
        value: function() {
            this._audio && this._state === s.PLAYING && this._audio.pause();
        }
    }, {
        key: "stop",
        value: function() {
            this._audio && this._audio.stop();
        }
    }, {
        key: "playOneShot",
        value: function(t) {
            void 0 === t && (t = 1), this._audio && (this._offset = 0, this._oneShoting = !0, 
            this._audio.loop = !1, this._audio.volume = t, this._state === s.PLAYING ? this._audio.seek(0) : this._audio.play());
        }
    }, {
        key: "getCurrentTime",
        value: function() {
            if (this._state !== s.PLAYING) return this._offset / 1e3;
            var t = (performance.now() - this._startTime + this._offset) / 1e3;
            if (t > this._duration) {
                if (!this._loop) return 0;
                t -= this._duration, this._startTime += 1e3 * this._duration;
            }
            return t;
        }
    }, {
        key: "setCurrentTime",
        value: function(t) {
            this._audio && (this._offset = 1e3 * cc.math.clamp(t, 0, this._duration), this._startTime = performance.now(), 
            this._audio.seek(t));
        }
    }, {
        key: "getVolume",
        value: function() {
            return this._volume;
        }
    }, {
        key: "setVolume",
        value: function(t, e) {
            this._volume = t, this._audio && (this._audio.volume = t);
        }
    }, {
        key: "getLoop",
        value: function() {
            return this._loop;
        }
    }, {
        key: "setLoop",
        value: function(t) {
            this._loop = t, this._audio && (this._audio.loop = t);
        }
    }, {
        key: "destroy",
        value: function() {
            this._audio && this._audio.destroy(), i(n(a.prototype), "destroy", this).call(this);
        }
    } ]) && e(f.prototype, l), c && e(f, c), a;
}();

exports.AudioPlayerWX = l;