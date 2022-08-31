window.fl = window.fl || {}, fl.adapter = fl.adapter || {}, fl.adapter.isMiniGameOPPO && (console.log("fl.framework ===>>>", "适配OPPO小游戏平台"), 
fl.adapter.getStorageSync = window.localStorage.getItem, fl.adapter.setStorageSync = window.localStorage.setItem, 
fl.adapter.navigateToMiniProgram = fl.adapter.navigateToMiniGame, fl.adapter.updateApp = function() {}, 
fl.adapter.createInterstitialAd = function(a) {
    return new FLInterstitialAd(a);
}, fl.adapter.createAppBox = function(a) {
    return new FLGameBoxAd(a);
}, fl.adapter.showShareMenu = function(a) {}, fl.adapter.shareAppMessage = function(a) {}, 
fl.adapter.onShareAppMessage = function(a) {}, fl.adapter.updateShareMenu = function(a) {}, 
fl.adapter.getShareInfo = function(a) {});