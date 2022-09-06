cc.internal.inputManager, cc.renderer;

var e = cc.game, n = 60;

Object.assign(e, {
    setFrameRate: function(e) {
        n = e, __globalAdapter.setPreferredFramesPerSecond ? __globalAdapter.setPreferredFramesPerSecond(e) : (this._paused = !0, 
        this._setAnimFrame(), this._runMainLoop());
    },
    getFrameRate: function() {
        return n;
    },
    _runMainLoop: function() {
        var e, i = this, t = i.config, o = cc.director, r = !0;
        t.frameRate;
        cc.debug.setDisplayStats(t.showFPS), o.startAnimation(), e = function(t) {
            if (!i._paused) {
                if (i._intervalId = window.rAF(e), 30 === n && !__globalAdapter.setPreferredFramesPerSecond && (r = !r)) return;
                o.mainLoop(t);
            }
        }, i._intervalId && (window.cAF(i._intervalId), i._intervalId = 0), i._intervalId = window.rAF(e), 
        i._paused = !1;
    },
    _initEvents: function() {
        var e, n = window;
        void 0 !== document.hidden ? e = "hidden" : void 0 !== document.mozHidden ? e = "mozHidden" : void 0 !== document.msHidden ? e = "msHidden" : void 0 !== document.webkitHidden && (e = "webkitHidden");
        var i = !1;
        function t() {
            i || (i = !0, cc.game.emit(cc.Game.EVENT_HIDE));
        }
        function o() {
            i && (i = !1, cc.game.emit(cc.Game.EVENT_SHOW));
        }
        if (e) for (var r = [ "visibilitychange", "mozvisibilitychange", "msvisibilitychange", "webkitvisibilitychange", "qbrowserVisibilityChange" ], a = 0; a < r.length; a++) document.addEventListener(r[a], function(n) {
            var i = document[e];
            (i = i || n.hidden) ? t() : o();
        }); else n.addEventListener("blur", t), n.addEventListener("focus", o);
        window.navigator.userAgent.indexOf("MicroMessenger") > -1 && (n.onfocus = o), __globalAdapter.onShow && __globalAdapter.onShow(o), 
        __globalAdapter.onHide && __globalAdapter.onHide(t), "onpageshow" in window && "onpagehide" in window && (n.addEventListener("pagehide", t), 
        n.addEventListener("pageshow", o), document.addEventListener("pagehide", t), document.addEventListener("pageshow", o)), 
        this.on(cc.Game.EVENT_HIDE, function() {
            cc.game.pause();
        }), this.on(cc.Game.EVENT_SHOW, function() {
            cc.game.resume();
        });
    },
    end: function() {}
}), __globalAdapter.onError && __globalAdapter.onError(function e(n) {
    __globalAdapter.offError && __globalAdapter.offError(e);
    var i = Math.random() < .001;
    if (!__globalAdapter.isSubContext && i) {
        var t = __globalAdapter.getSystemInfoSync();
        if (t) {
            var o = cc.Canvas.instance.node;
            if (o) {
                var r = new cc.Node();
                r.color = cc.Color.BLACK, r.parent = o;
                var a = r.addComponent(cc.Label);
                r.height = o.height - 60, r.width = o.width - 60, a.overflow = cc.Label.Overflow.SHRINK, 
                a.horizontalAlign = cc.Label.HorizontalAlign.LEFT, a.verticalAlign = cc.Label.VerticalAlign.TOP, 
                a.fontSize = 24, cc.LabelOutline && (r.addComponent(cc.LabelOutline).color = cc.Color.WHITE), 
                a.string = "请截屏发送以下信息反馈给游戏开发者（Please send this screen shot to the game developer）\n", 
                a.string += "Device: " + t.brand + " " + t.model + "\nSystem: " + t.system + "\nPlatform: WeChat " + t.version + "\nEngine: Cocos Creator v" + window.CocosEngine + "\nError:\n" + n.message, 
                cc.director.pause(), r.once("touchend", function() {
                    r.destroy(), setTimeout(function() {
                        cc.director.resume();
                    }, 1e3);
                });
            }
        }
    }
});