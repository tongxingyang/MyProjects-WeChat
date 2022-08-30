window.fl = window.fl || {}, fl.adapter = fl.adapter || {}, fl.adapter.isMiniGameWX && (console.log("fl.framework ===>>>", "适配微信小游戏平台"), 
fl.adapter.updateApp = fl.adapter.updateWeChatApp, fl.adapter.getGameRecorderManager = fl.adapter.getGameRecorder, 
fl.adapter.createNativeAd = function(e) {
    return new FLNativeAd(e);
}, fl.adapter.createAppBox = function(e) {
    return new FLGameBoxAd(e);
}, fl.adapter.checkUpdateVersion = function() {
    var e = fl.adapter.getUpdateManager();
    e.onCheckForUpdate(function(e) {
        fl.log("check game update:", e);
    }), e.onUpdateReady(function() {
        fl.log("update game successd"), e.applyUpdate();
    }), e.onUpdateFailed(function() {
        fl.log("update game failed");
    });
}, fl.adapter.checkUpdateVersion(), fl.adapter.onShow(function(e) {
    fl.log("游戏唤醒参数:", e), fl.adapter.checkUpdateVersion(), fl.adapter.launchOption = e || {}, 
    cc.systemEvent.emit("WECHAT_MINI_GAME_SHOW", fl.adapter.launchOption);
}), fl.adapter.onHide(function(e) {
    fl.log("游戏暂停参数:", e);
    try {
        if (cc.systemEvent.emit("WECHAT_MINI_GAME_HIDE", e), !e || !e.mode) return;
        if ("close" === e.mode) return cc.systemEvent.emit("WECHAT_MINI_GAME_CLOSE", e);
        if (!e.targetPagePath) return;
        if (-1 !== e.targetPagePath.indexOf("weixinadinfo") && -1 !== e.targetPagePath.indexOf("gdt_vid")) return -1 !== e.targetPagePath.indexOf("mp.weixin.qq.com/mp/ad_biz_info") ? e.adType = "关注公众号链接" : e.adType = "电商链接", 
        cc.systemEvent.emit("WECHAT_MINI_GAME_TOUCH_BANNER_AD", e);
        if (-1 !== e.targetPagePath.indexOf("SnsAdNativeLandingPagesPreviewUI")) return e.adType = "APP下载页", 
        cc.systemEvent.emit("WECHAT_MINI_GAME_TOUCH_BANNER_AD", e);
        "hide" === e.mode ? -1 !== e.targetPagePath.indexOf("SnsAdNativeLandingPagesPreviewUI") ? (e.adType = "APP下载页", 
        cc.systemEvent.emit("WECHAT_MINI_GAME_TOUCH_BANNER_AD", e)) : -1 !== e.targetPagePath.indexOf("weixinadinfo") && -1 !== e.targetPagePath.indexOf("gdt_vid") ? (-1 !== e.targetPagePath.indexOf("mp.weixin.qq.com/mp/ad_biz_info") ? e.adType = "关注公众号链接" : e.adType = "电商链接", 
        cc.systemEvent.emit("WECHAT_MINI_GAME_TOUCH_BANNER_AD", e)) : -1 !== e.targetPagePath.indexOf("SelectConversationUI") || -1 !== e.targetPagePath.indexOf("MMUINavigationController") ? cc.systemEvent.emit("WECHAT_MINI_GAME_EMIT_SHARE", e) : -1 !== e.targetPagePath.indexOf("mp.weixin.qq.com/mp/wapreportwxadevlog?action=get_page&appid=wx") ? cc.systemEvent.emit("WECHAT_MINI_GAME_FEED_BACK", e) : -1 === e.targetPagePath.indexOf("AppBrandProfileUI") && -1 === e.targetPagePath.indexOf("NewWAProfileViewController") || cc.systemEvent.emit("WECHAT_MINI_GAME_ABOUT", e) : "launchMiniProgram" === e.mode ? -1 !== e.targetPagePath.indexOf("weixinadinfo") && -1 !== e.targetPagePath.indexOf("gdt_vid") ? (e.adType = "微信小游戏", 
        cc.systemEvent.emit("WECHAT_MINI_GAME_TOUCH_BANNER_AD", e)) : -1 !== e.targetPagePath.indexOf("wx") && cc.systemEvent.emit("WECHAT_MINI_GAME_LAUNCH_MINI_GAME", e) : "back" === e.mode && 9 === e.targetAction && -1 !== e.targetPagePath.indexOf("wx") && cc.systemEvent.emit("WECHAT_MINI_GAME_LAUNCH_MINI_GAME", e);
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        console.error(e);
    }
}));