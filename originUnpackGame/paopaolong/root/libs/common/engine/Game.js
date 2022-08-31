cc.internal.inputManager, cc.renderer;

var e = cc.game, r = 60;

Object.assign(e, {
    setFrameRate: function(e) {
        r = e, __globalAdapter.setPreferredFramesPerSecond ? __globalAdapter.setPreferredFramesPerSecond(e) : (this._paused = !0, 
        this._setAnimFrame());
    },
    getFrameRate: function() {
        return r;
    }
}), __globalAdapter.onError && __globalAdapter.onError(function e(r) {
    __globalAdapter.offError && __globalAdapter.offError(e);
    var o = Math.random() < .001;
    if (!__globalAdapter.isSubContext && o) {
        var t = __globalAdapter.getSystemInfoSync();
        if (t) {
            var n = cc.Canvas.instance.node;
            if (n) {
                var a = new cc.Node();
                a.color = cc.Color.BLACK, a.parent = n;
                var c = a.addComponent(cc.Label);
                if (a.height = n.height - 60, a.width = n.width - 60, c.overflow = cc.Label.Overflow.SHRINK, 
                c.horizontalAlign = cc.Label.HorizontalAlign.LEFT, c.verticalAlign = cc.Label.VerticalAlign.TOP, 
                c.fontSize = 24, cc.LabelOutline) a.addComponent(cc.LabelOutline).color = cc.Color.WHITE;
                c.string = "请截屏发送以下信息反馈给游戏开发者（Please send this screen shot to the game developer）\n", 
                c.string += "Device: " + t.brand + " " + t.model + "\nSystem: " + t.system + "\nPlatform: WeChat " + t.version + "\nEngine: Cocos Creator v" + window.CocosEngine + "\nError:\n" + r.message, 
                cc.director.pause(), a.once("touchend", function() {
                    a.destroy(), setTimeout(function() {
                        cc.director.resume();
                    }, 1e3);
                });
            }
        }
    }
});