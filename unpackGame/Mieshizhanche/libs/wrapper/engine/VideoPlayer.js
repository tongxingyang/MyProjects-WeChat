function e(t) {
    return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(t);
}

function t(e, t) {
    for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
        Object.defineProperty(e, n.key, n);
    }
}

function i(e, t) {
    return (i = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e;
    })(e, t);
}

function n(e) {
    var t = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), 
            !0;
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            return !1;
        }
    }();
    return function() {
        var i, n = r(e);
        if (t) {
            var a = r(this).constructor;
            i = Reflect.construct(n, arguments, a);
        } else i = n.apply(this, arguments);
        return o(this, i);
    };
}

function o(t, i) {
    return !i || "object" !== e(i) && "function" != typeof i ? function(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
    }(t) : i;
}

function r(e) {
    return (r = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}

if (cc.internal.VideoPlayer) {
    var a = cc.internal.VideoPlayer.EventType, s = cc.Vec3, c = cc.mat4(), u = new s(), l = new s(), h = wx.getSystemInfoSync().pixelRatio;
    cc.internal.VideoPlayerImplManager.getImpl = function(e) {
        return new d(e);
    };
    var d = function(e) {
        !function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && i(e, t);
        }(y, cc.internal.VideoPlayerImpl);
        var o, r, d, f = n(y);
        function y(e) {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, y), f.call(this, e);
        }
        return o = y, (r = [ {
            key: "syncClip",
            value: function(e) {
                this.removeVideoPlayer(), e && this.createVideoPlayer(e._nativeAsset);
            }
        }, {
            key: "syncURL",
            value: function(e) {
                this.removeVideoPlayer(), e && this.createVideoPlayer(e);
            }
        }, {
            key: "onCanplay",
            value: function() {
                this._loaded || (this._loaded = !0, this.setVisible(this._visible), this.dispatchEvent(a.READY_TO_PLAY), 
                this.delayedPlay());
            }
        }, {
            key: "_bindEvent",
            value: function() {
                var e = this._video, t = this;
                e && (e.onPlay(function() {
                    t._video === e && (t._playing = !0, t.dispatchEvent(a.PLAYING));
                }), e.onEnded(function() {
                    t._video === e && (t._playing = !1, t._currentTime = t._duration, t.dispatchEvent(a.COMPLETED));
                }), e.onPause(function() {
                    t._video === e && (t._playing = !1, t.dispatchEvent(a.PAUSED));
                }), e.onTimeUpdate(function(e) {
                    t._duration = e.duration, t._currentTime = e.position;
                }));
            }
        }, {
            key: "_unbindEvent",
            value: function() {
                var e = this._video;
                e && (e.offPlay(), e.offEnded(), e.offPause(), e.offTimeUpdate());
            }
        }, {
            key: "createVideoPlayer",
            value: function(e) {
                __globalAdapter.createVideo ? (this._video || (this._video = __globalAdapter.createVideo(), 
                this._video.showCenterPlayBtn = !1, this._video.controls = !1, this._duration = 0, 
                this._currentTime = 0, this._loaded = !1, this.setVisible(this._visible), this._bindEvent(), 
                this._forceUpdate = !0), this.setURL(e), this._forceUpdate = !0) : console.warn("VideoPlayer not supported");
            }
        }, {
            key: "setURL",
            value: function(e) {
                var t = this._video;
                if (t && t.src !== e) {
                    t.stop(), this._unbindEvent(), t.autoplay = !0, t.src = e, t.muted = !0;
                    var i = this;
                    this._loaded = !1, t.onPlay(function() {
                        t.offPlay(), i._bindEvent(), t.stop(), t.muted = !1, i._loaded = !0, i._playing = !1, 
                        i._currentTime = 0, i.dispatchEvent(a.READY_TO_PLAY), t.autoplay = !1;
                    });
                }
            }
        }, {
            key: "removeVideoPlayer",
            value: function() {
                var e = this.video;
                e && (e.stop(), e.destroy(), this._playing = !1, this._loaded = !1, this._loadedMeta = !1, 
                this._ignorePause = !1, this._cachedCurrentTime = 0, this._video = null);
            }
        }, {
            key: "setVisible",
            value: function(e) {
                var t = this._video;
                t && this._visible !== e && (t.width = e && this._actualWidth || 0, this._visible = e);
            }
        }, {
            key: "getDuration",
            value: function() {
                return this.duration();
            }
        }, {
            key: "duration",
            value: function() {
                return this._duration;
            }
        }, {
            key: "syncPlaybackRate",
            value: function(e) {
                var t = this._video;
                t && e !== t.playbackRate && (.5 === e | .8 === e | 1 === e | 1.25 === e | 1.5 === e ? t.playbackRate = e : console.warn("The platform does not support this PlaybackRate!"));
            }
        }, {
            key: "syncVolume",
            value: function() {
                console.warn("The platform does not support");
            }
        }, {
            key: "syncMute",
            value: function(e) {
                var t = this._video;
                t && t.muted !== e && (t.muted = e);
            }
        }, {
            key: "syncLoop",
            value: function(e) {
                var t = this._video;
                t && t.loop !== e && (t.loop = e);
            }
        }, {
            key: "syncStayOnBottom",
            value: function() {
                console.warn("The platform does not support");
            }
        }, {
            key: "getCurrentTime",
            value: function() {
                return this.video ? this.currentTime() : -1;
            }
        }, {
            key: "currentTime",
            value: function() {
                return this._currentTime;
            }
        }, {
            key: "seekTo",
            value: function(e) {
                var t = this._video;
                t && this._loaded && t.seek(e);
            }
        }, {
            key: "disable",
            value: function(e) {
                this._video && (e || this._video.pause(), this.setVisible(!1), this._visible = !1);
            }
        }, {
            key: "enable",
            value: function() {
                this._video && (this.setVisible(!0), this._visible = !0);
            }
        }, {
            key: "canPlay",
            value: function() {
                this._video.play(), this.syncCurrentTime();
            }
        }, {
            key: "resume",
            value: function() {
                var e = this._video;
                !this._playing && e && e.play();
            }
        }, {
            key: "pause",
            value: function() {
                var e = this._video;
                this._playing && e && e.pause();
            }
        }, {
            key: "stop",
            value: function() {
                var e = this, t = this._video;
                t && this._visible && t.stop().then(function(t) {
                    !t.errMsg || t.errMsg.includes("ok") ? (e._currentTime = 0, e._playing = !1, e.dispatchEvent(a.STOPPED)) : console.error("failed to stop video player");
                });
            }
        }, {
            key: "canFullScreen",
            value: function(e) {
                this._video && this.setFullScreenEnabled(e);
            }
        }, {
            key: "setFullScreenEnabled",
            value: function(e) {
                var t = this._video;
                t && this._fullScreenEnabled !== e && (e ? t.requestFullScreen() : t.exitFullScreen(), 
                this._fullScreenEnabled = e);
            }
        }, {
            key: "syncKeepAspectRatio",
            value: function(e) {
                console.warn("On wechat game videoPlayer is always keep the aspect ratio");
            }
        }, {
            key: "syncMatrix",
            value: function() {
                if (this._video && this._component && this._uiTrans) {
                    var e = this.UICamera;
                    if (e) {
                        this._component.node.getWorldMatrix(c);
                        var t = this._uiTrans.contentSize, i = t.width, n = t.height;
                        if (this._forceUpdate || this._m00 !== c.m00 || this._m01 !== c.m01 || this._m04 !== c.m04 || this._m05 !== c.m05 || this._m12 !== c.m12 || this._m13 !== c.m13 || this._w !== i || this._h !== n) {
                            this._m00 = c.m00, this._m01 = c.m01, this._m04 = c.m04, this._m05 = c.m05, this._m12 = c.m12, 
                            this._m13 = c.m13, this._w = i, this._h = n, cc.game.canvas.width;
                            var o = cc.game.canvas.height, r = this._uiTrans.anchorPoint;
                            s.set(u, -r.x * this._w, (1 - r.y) * this._h, 0), s.set(l, (1 - r.x) * this._w, -r.y * this._h, 0), 
                            s.transformMat4(u, u, c), s.transformMat4(l, l, c), e.worldToScreen(u, u), e.worldToScreen(l, l);
                            var a = l.x - u.x, d = u.y - l.y;
                            this._video.x = u.x / h, this._video.y = (o - u.y) / h, this._actualWidth = this._video.width = a / h, 
                            this._video.height = d / h, this._forceUpdate = !1;
                        }
                    }
                }
            }
        } ]) && t(o.prototype, r), d && t(o, d), y;
    }();
}