cc.renderer;

var e = cc.game, r = 60;

Object.assign(e, {
    setFrameRate: function(e) {
        r = e, __globalAdapter.setPreferredFramesPerSecond ? __globalAdapter.setPreferredFramesPerSecond(e) : (this._paused = !0, 
        this._setAnimFrame());
    },
    getFrameRate: function() {
        return r;
    }
});