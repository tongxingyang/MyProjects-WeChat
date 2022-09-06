var t = {
    x: 0,
    y: 0,
    width: 0,
    height: 0
};

cc.view.convertToLocationInView = function(i, e, h, c) {
    var s = c || cc.v2(), a = this._devicePixelRatio * (i - h.left), n = this._devicePixelRatio * (h.top + h.height - e);
    return a = (a - t.x) * this._viewportRect.width / t.width, n = (n - t.y) * this._viewportRect.height / t.height, 
    this._isRotated ? (s.x = this._viewportRect.width - n, s.y = a) : (s.x = a, s.y = n), 
    s;
}, cc.game._prepareFinished = function(t) {
    var i = this;
    this._prepared = !0, this._initEngine(), cc.AssetLibrary._loadBuiltins(function() {
        console.log("Cocos Creator v" + cc.ENGINE_VERSION), i._setAnimFrame(), i.emit(i.EVENT_GAME_INITED), 
        t && t();
    });
}, wx.onMessage(function(i) {
    i.fromEngine && ("viewport" === i.event ? (t.x = i.x, t.y = i.y, t.width = i.width, 
    t.height = i.height) : "mainLoop" === i.event ? i.value ? cc.game.resume() : cc.game.pause() : "frameRate" === i.event ? cc.game.setFrameRate(i.value) : "step" === i.event && cc.game.step());
}), cc.Canvas.prototype.update = function() {
    this._width === cc.game.canvas.width && this._height === cc.game.canvas.height || this.applySettings();
}, cc.Canvas.prototype.applySettings = function() {
    var t, i = cc.ResolutionPolicy;
    t = this.fitHeight && this.fitWidth ? i.SHOW_ALL : this.fitWidth ? i.FIXED_WIDTH : this.fitHeight ? i.FIXED_HEIGHT : i.NO_BORDER;
    var e = this._designResolution;
    cc.view.setDesignResolutionSize(e.width, e.height, t), this._width = cc.game.canvas.width, 
    this._height = cc.game.canvas.height;
};