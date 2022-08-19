function t(i, e) {
    return (t = Object.setPrototypeOf || function(t, i) {
        return t.__proto__ = i, t;
    })(i, e);
}

if (cc.internal.VideoPlayer) {
    var i = cc.internal.VideoPlayer.EventType, e = cc.Vec3, n = cc.mat4(), o = new e(), s = new e(), a = wx.getSystemInfoSync().pixelRatio;
    cc.internal.VideoPlayerImplManager.getImpl = function(t) {
        return new r(t);
    };
    var r = function(r) {
        var h, c;
        function d(t) {
            return r.call(this, t) || this;
        }
        c = r, (h = d).prototype = Object.create(c.prototype), h.prototype.constructor = h, 
        t(h, c);
        var l = d.prototype;
        return l.syncClip = function(t) {
            this.removeVideoPlayer(), t && this.createVideoPlayer(t._nativeAsset);
        }, l.syncURL = function(t) {
            this.removeVideoPlayer(), t && this.createVideoPlayer(t);
        }, l.onCanplay = function() {
            this._loaded || (this._loaded = !0, this.setVisible(this._visible), this.dispatchEvent(i.READY_TO_PLAY), 
            this.delayedPlay());
        }, l._bindEvent = function() {
            var t = this._video, e = this;
            t && (t.onPlay(function() {
                e._video === t && (e._playing = !0, e.dispatchEvent(i.PLAYING));
            }), t.onEnded(function() {
                e._video === t && (e._playing = !1, e._currentTime = e._duration, e.dispatchEvent(i.COMPLETED));
            }), t.onPause(function() {
                e._video === t && (e._playing = !1, e.dispatchEvent(i.PAUSED));
            }), t.onTimeUpdate(function(t) {
                e._duration = t.duration, e._currentTime = t.position;
            }));
        }, l._unbindEvent = function() {
            var t = this._video;
            t && (t.offPlay(), t.offEnded(), t.offPause(), t.offTimeUpdate());
        }, l.createVideoPlayer = function(t) {
            __globalAdapter.createVideo ? (this._video || (this._video = __globalAdapter.createVideo(), 
            this._video.showCenterPlayBtn = !1, this._video.controls = !1, this._duration = 0, 
            this._currentTime = 0, this._loaded = !1, this.setVisible(this._visible), this._bindEvent(), 
            this._forceUpdate = !0), this.setURL(t), this._forceUpdate = !0) : console.warn("VideoPlayer not supported");
        }, l.setURL = function(t) {
            var e = this._video;
            if (e && e.src !== t) {
                e.stop(), this._unbindEvent(), e.autoplay = !0, e.src = t, e.muted = !0;
                var n = this;
                this._loaded = !1, e.onPlay(function() {
                    e.offPlay(), n._bindEvent(), e.stop(), e.muted = !1, n._loaded = !0, n._playing = !1, 
                    n._currentTime = 0, n.dispatchEvent(i.READY_TO_PLAY), e.autoplay = !1;
                });
            }
        }, l.removeVideoPlayer = function() {
            var t = this.video;
            t && (t.stop(), t.destroy(), this._playing = !1, this._loaded = !1, this._loadedMeta = !1, 
            this._ignorePause = !1, this._cachedCurrentTime = 0, this._video = null);
        }, l.setVisible = function(t) {
            var i = this._video;
            i && this._visible !== t && (i.width = t && this._actualWidth || 0, this._visible = t);
        }, l.getDuration = function() {
            return this.duration();
        }, l.duration = function() {
            return this._duration;
        }, l.syncPlaybackRate = function(t) {
            var i = this._video;
            i && t !== i.playbackRate && (.5 === t | .8 === t | 1 === t | 1.25 === t | 1.5 === t ? i.playbackRate = t : console.warn("The platform does not support this PlaybackRate!"));
        }, l.syncVolume = function() {
            console.warn("The platform does not support");
        }, l.syncMute = function(t) {
            var i = this._video;
            i && i.muted !== t && (i.muted = t);
        }, l.syncLoop = function(t) {
            var i = this._video;
            i && i.loop !== t && (i.loop = t);
        }, l.syncStayOnBottom = function() {
            console.warn("The platform does not support");
        }, l.getCurrentTime = function() {
            return this.video ? this.currentTime() : -1;
        }, l.currentTime = function() {
            return this._currentTime;
        }, l.seekTo = function(t) {
            var i = this._video;
            i && this._loaded && i.seek(t);
        }, l.disable = function(t) {
            this._video && (t || this._video.pause(), this.setVisible(!1), this._visible = !1);
        }, l.enable = function() {
            this._video && (this.setVisible(!0), this._visible = !0);
        }, l.canPlay = function() {
            this._video.play(), this.syncCurrentTime();
        }, l.resume = function() {
            var t = this._video;
            !this._playing && t && t.play();
        }, l.pause = function() {
            var t = this._video;
            this._playing && t && t.pause();
        }, l.stop = function() {
            var t = this, e = this._video;
            e && this._visible && e.stop().then(function(e) {
                !e.errMsg || e.errMsg.includes("ok") ? (t._currentTime = 0, t._playing = !1, t.dispatchEvent(i.STOPPED)) : console.error("failed to stop video player");
            });
        }, l.canFullScreen = function(t) {
            this._video && this.setFullScreenEnabled(t);
        }, l.setFullScreenEnabled = function(t) {
            var i = this._video;
            i && this._fullScreenEnabled !== t && (t ? i.requestFullScreen() : i.exitFullScreen(), 
            this._fullScreenEnabled = t);
        }, l.syncKeepAspectRatio = function(t) {
            console.warn("On wechat game videoPlayer is always keep the aspect ratio");
        }, l.syncMatrix = function() {
            if (this._video && this._component && this._uiTrans) {
                var t = this.UICamera;
                if (t) {
                    this._component.node.getWorldMatrix(n);
                    var i = this._uiTrans.contentSize, r = i.width, h = i.height;
                    if (this._forceUpdate || this._m00 !== n.m00 || this._m01 !== n.m01 || this._m04 !== n.m04 || this._m05 !== n.m05 || this._m12 !== n.m12 || this._m13 !== n.m13 || this._w !== r || this._h !== h) {
                        this._m00 = n.m00, this._m01 = n.m01, this._m04 = n.m04, this._m05 = n.m05, this._m12 = n.m12, 
                        this._m13 = n.m13, this._w = r, this._h = h;
                        cc.game.canvas.width;
                        var c = cc.game.canvas.height, d = this._uiTrans.anchorPoint;
                        e.set(o, -d.x * this._w, (1 - d.y) * this._h, 0), e.set(s, (1 - d.x) * this._w, -d.y * this._h, 0), 
                        e.transformMat4(o, o, n), e.transformMat4(s, s, n), t.worldToScreen(o, o), t.worldToScreen(s, s);
                        var l = s.x - o.x, _ = o.y - s.y;
                        this._video.x = o.x / a, this._video.y = (c - o.y) / a, this._actualWidth = this._video.width = l / a, 
                        this._video.height = _ / a, this._forceUpdate = !1;
                    }
                }
            }
        }, d;
    }(cc.internal.VideoPlayerImpl);
}