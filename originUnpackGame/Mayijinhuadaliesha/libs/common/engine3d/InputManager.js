var e = cc.internal.inputManager, n = {
    left: 0,
    top: 0,
    width: window.innerWidth,
    height: window.innerHeight
};

e && Object.assign(e, {
    _updateCanvasBoundingRect: function() {},
    registerSystemEvent: function(e) {
        if (!this._isRegisterEvent) {
            this._glView = cc.view;
            var t = this, i = {
                onTouchStart: this.handleTouchesBegin,
                onTouchMove: this.handleTouchesMove,
                onTouchEnd: this.handleTouchesEnd,
                onTouchCancel: this.handleTouchesCancel
            }, h = function(e) {
                var h = i[e];
                __globalAdapter[e](function(e) {
                    e.changedTouches && h.call(t, t.getTouchesByEvent(e, n));
                });
            };
            for (var o in i) h(o);
            this._isRegisterEvent = !0;
        }
    }
});