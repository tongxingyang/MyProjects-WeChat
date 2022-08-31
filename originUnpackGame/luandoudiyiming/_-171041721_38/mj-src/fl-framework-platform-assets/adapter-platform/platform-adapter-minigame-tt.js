window.fl = window.fl || {}, fl.adapter = fl.adapter || {}, fl.adapter.isMiniGameTT && (console.log("fl.framework ===>>>", "适配字节小游戏平台"), 
fl.adapter.updateApp = function() {}, fl.adapter.navigateToMiniProgram = fl.adapter.navigateToMiniProgram || function() {}, 
fl.adapter.createNativeAd = function(a) {
    return new FLNativeAd(a);
}, fl.adapter.createAppBox = function(a) {
    return new FLGameBoxAd(a);
}, fl.adapter.updateShareMenu = function(a) {}, fl.adapter.getShareInfo = function(a) {});