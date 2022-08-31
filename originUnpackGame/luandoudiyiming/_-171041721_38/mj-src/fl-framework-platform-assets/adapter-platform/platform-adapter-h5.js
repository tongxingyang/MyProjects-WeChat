window.fl = window.fl || {}, fl.adapter = fl.adapter || {}, cc.sys.isBrowser && (console.log("fl.framework ===>>>", "适配H5平台"), 
fl.adapter.onShow = function(a) {}, fl.adapter.offShow = function(a) {}, fl.adapter.onHide = function(a) {}, 
fl.adapter.offHide = function(a) {}, fl.adapter.login = function(a) {}, fl.adapter.updateApp = function() {}, 
fl.adapter.getLaunchOptionsSync = function() {
    return fl.log("在H5平台上尚未实现fl.adapter.getLaunchOptionsSync方法"), {};
}, fl.adapter.getSystemInfoSync = function() {
    return fl.log("在H5平台上尚未实现fl.adapter.getSystemInfoSync方法"), {};
}, fl.adapter.navigateToMiniProgram = function() {}, fl.adapter.setKeepScreenOn = function(a) {}, 
fl.adapter.showToast = function(a) {
    return fl.log("在H5平台上尚未实现fl.adapter.showToast方法", a);
}, fl.adapter.createBannerAd = function(a) {
    return new FLBanner();
}, fl.adapter.createRewardedVideoAd = function(a) {
    return new FLRewardedVideoAd();
}, fl.adapter.createInterstitialAd = function(a) {
    return new FLInterstitialAd(a);
}, fl.adapter.createNativeAd = function(a) {
    return new FLNativeAd(a);
}, fl.adapter.createAppBox = function(a) {
    return new FLGameBoxAd(a);
}, fl.adapter.showShareMenu = function(a) {}, fl.adapter.shareAppMessage = function(a) {}, 
fl.adapter.onShareAppMessage = function(a) {}, fl.adapter.updateShareMenu = function(a) {}, 
fl.adapter.getShareInfo = function(a) {}, fl.adapter.onMoreGamesModalClose = function() {}, 
fl.adapter.onNavigateToMiniProgram = function() {}, fl.adapter.setKeepScreenOn = function() {}, 
fl.adapter.setClipboardData = function() {}, fl.adapter.getClipboardData = function() {}, 
fl.adapter.vibrateShort = function() {}, fl.adapter.vibrateLong = function() {}, 
fl.adapter.showModal = function() {}, fl.adapter.showToast = function() {});