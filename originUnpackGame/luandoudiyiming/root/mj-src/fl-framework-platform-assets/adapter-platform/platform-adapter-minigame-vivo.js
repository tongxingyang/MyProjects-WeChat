window.fl = window.fl || {}, fl.adapter = fl.adapter || {}, fl.adapter.isMiniGameVIVO && (console.log("fl.framework ===>>>", "适配VIVO小游戏平台"), 
fl.adapter.updateApp = function() {}, fl.adapter.navigateToMiniProgram = fl.adapter.navigateToMiniGame || function() {}, 
fl.adapter._createBannerAdVIVO = fl.adapter.createBannerAd, fl.adapter.createBannerAd = function(a) {
    return a.posId = a.adUnitId || a.posId, fl.adapter._createBannerAdVIVO(a);
}, fl.adapter._createRewardedVideoAdVIVO = fl.adapter.createRewardedVideoAd, fl.adapter.createRewardedVideoAd = function(a) {
    return a.posId = a.adUnitId || a.posId, fl.adapter._createRewardedVideoAdVIVO(a);
}, fl.adapter._createInterstitialAdVIVO = fl.adapter.createInterstitialAd, fl.adapter.createInterstitialAd = function(a) {
    return a.posId = a.adUnitId || a.posId, fl.adapter._createInterstitialAdVIVO(a);
}, fl.adapter.createAppBox = function(a) {
    return new FLGameBoxAd(a);
}, fl.adapter.updateShareMenu = function(a) {}, fl.adapter.showShareMenu = function(a) {}, 
fl.adapter.shareAppMessage = function(a) {}, fl.adapter.onShareAppMessage = function(a) {}, 
fl.adapter.getShareInfo = function(a) {});