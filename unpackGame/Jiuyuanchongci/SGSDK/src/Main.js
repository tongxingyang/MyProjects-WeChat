require("./wxsdk.min");
require("./ConfigData");
const adMgr = require('./AdMgr');
const remen = require('./Remen');
const box = require('./Box');
var initSDK = function (cb) {
  window.wxsdk.init({
    version: '1.0.0', // 当前的小游戏版本号，只能以数字
    appid: window.ConfigData.appid, // 此项目在云平台的appid
    secret: window.ConfigData.secret, // 此项目在云平台的secret, 用于与后端通信签名
    share: {
      title: '你能过得了这一关吗？', // 默认分享文案
      image: 'https://game-oss.smallshark.cn/game/20211119/1216327431258.jpg?imageslim', // 默认分享图片
    },
  });
  window.wxsdk.onInit(() => {
    console.log('wxsdk初始化成功:', window.wxsdk);
    let conf = window.ConfigData.data;
    for (let key in conf) {
      conf[key] = window.wxsdk.conf[key] || conf[key];
    }
    if (conf.channel_ditch && !window.wxsdk.user.channel) {
      conf.allowMistouch = false;
    }
    console.log('config:', conf);
    //初始化广告
    adMgr.bannerIdArr = window.wxsdk.conf.bannerIds ? window.wxsdk.conf.bannerIds.split(',') : []
    adMgr.fullGridId = window.wxsdk.conf.fullGridIds ? window.wxsdk.conf.fullGridIds.split(',') : []
    adMgr.singleGridId = window.wxsdk.conf.singleGridIds ? window.wxsdk.conf.singleGridIds.split(',') : []

    window.canTrapAll = allowScene() && window.ConfigData.data.allowMistouch && window.ConfigData.version.split('.')[2] <= window.ConfigData.data.version.split('.')[2];
    window.showRemen = canTrapAll && window.ConfigData.data.showRemen;
    window.remenBanner = canTrapAll && window.ConfigData.data.remenBanner;
    window.bannerBox = canTrapAll && window.ConfigData.data.bannerBox;
    adMgr.initAd(() => {
      cb && cb();
    });
  });
  window.wxsdk.login();
};

function allowScene() {
  var launchInfo = wx.getLaunchOptionsSync();
  let scene = launchInfo.scene.toString();
  let arr = window.ConfigData.data.sceneList.split(',');
  return arr.indexOf(scene) != -1;
};

//展示热门推荐页
function showRemenUI(cb) {
  if (window.showRemen) {
    remen.showUI(cb);
  } else {
    cb && cb();
  }
}
//展示宝箱
function showBoxUI(cb) {
  if (window.bannerBox) {
    box.showUI(cb);
  } else {
    cb && cb();
  }
}

//循环套路
function loopSchedule() {
  Laya.timer.once(window.ConfigData.data.mistouchtime * 1000, this, () => {
    adMgr.visibleSingleGridAd(false);
    showRemenUI(() => {
      showBoxUI(() => {
        adMgr.hideBannerAd();
        if (!isHiding && window.ConfigData.data.is_showGameBanner) {
          adMgr.showBannerAd();
        }
        loopSchedule();
        adMgr.visibleSingleGridAd(true);
      });
    });
  });
}
//初始化SDK
initSDK(() => {
  Laya.stage.scaleMode = window.ConfigData.portrait ? 'fixedwidth' : 'fixedheight';
  Laya.stage.setScreenSize(Laya.stage.displayWidth, Laya.stage.displayHeight);
  Laya.stage.useRetinalCanvas = true;
  if (window.ConfigData.data.is_showGameBanner) {
    adMgr.showBannerAd();
  }
  loopSchedule();
  adMgr.visibleSingleGridAd(true);
});

var isHiding = false;
var hideGameBanner = function(){
  adMgr.hideBannerAd();
  isHiding = true;
};
var showGameBanner = function(){
  adMgr.showBannerAd();
  isHiding = false;
};
window.hideGameBanner = hideGameBanner;
window.showGameBanner = showGameBanner;