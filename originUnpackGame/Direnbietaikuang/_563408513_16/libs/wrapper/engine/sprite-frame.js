cc.SpriteFrame && (cc.SpriteFrame.prototype._checkPackable = function() {
    var e = cc.internal.dynamicAtlasManager;
    if (e) {
        var a = this._texture;
        if (a instanceof cc.Texture2D && !a.isCompressed) {
            var t = this.width, i = this.height;
            !a.image || t > e.maxFrameSize || i > e.maxFrameSize ? this._packable = !1 : a.image && a.image.getContext && (this._packable = !0);
        } else this._packable = !1;
    }
});