module.exports = function(e) {
    Object.assign(e, {
        _adjustViewportMeta: function() {},
        setRealPixelResolution: function(e, i, n) {
            this.setDesignResolutionSize(e, i, n);
        },
        enableAutoFullScreen: function(e) {
            cc.warn("cc.view.enableAutoFullScreen() is not supported on minigame platform.");
        },
        isAutoFullScreenEnabled: function() {
            return !1;
        },
        setCanvasSize: function() {
            cc.warn("cc.view.setCanvasSize() is not supported on minigame platform.");
        },
        setFrameSize: function() {
            cc.warn("frame size is readonly on minigame platform.");
        },
        _initFrameSize: function() {
            var e = this._frameSize;
            if (__globalAdapter.isSubContext) {
                var i = window.sharedCanvas || __globalAdapter.getSharedCanvas();
                e.width = i.width, e.height = i.height;
            } else e.width = window.innerWidth, e.height = window.innerHeight;
        }
    });
};