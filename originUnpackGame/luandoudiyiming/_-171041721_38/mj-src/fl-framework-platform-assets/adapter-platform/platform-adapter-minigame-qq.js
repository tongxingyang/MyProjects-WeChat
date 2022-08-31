window.fl = window.fl || {}, fl.adapter = fl.adapter || {}, fl.adapter.isMiniGameQQ && (console.log("fl.framework ===>>>", "适配QQ小游戏平台"), 
fl.adapter.updateApp = function() {}, fl.adapter.navigateToMiniProgram = fl.adapter.navigateToMiniProgram || function() {}, 
fl.adapter.createNativeAd = function(a) {
    return new FLNativeAd(a);
});