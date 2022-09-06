var e = require("../common/engine3d/globalAdapter/BaseSystemInfo"), t = wx.getSystemInfoSync(), o = e.adaptSys;

Object.assign(e, {
    adaptSys: function(e) {
        if (o.call(this, e), "windows" === t.platform) e.isMobile = !1, e.os = e.OS_WINDOWS; else if ("devtools" === t.platform) {
            var a = t.system.toLowerCase();
            a.indexOf("android") > -1 ? e.os = e.OS_ANDROID : a.indexOf("ios") > -1 && (e.os = e.OS_IOS);
        }
        wx.getOpenDataContext ? (e.platform = e.WECHAT_GAME, e.browserType = e.BROWSER_TYPE_WECHAT_GAME) : (e.platform = e.WECHAT_GAME_SUB, 
        e.browserType = e.BROWSER_TYPE_WECHAT_GAME_SUB), e.glExtension = function(e) {
            return "OES_texture_float" !== e && !!cc.renderer.device.ext(e);
        };
    }
}), __globalAdapter.init = e.init, __globalAdapter.adaptSys = e.adaptSys;