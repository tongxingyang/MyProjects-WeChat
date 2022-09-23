const adMgr = require('./AdMgr');
const Utils = require('./Utils');

var getSprite = (src, size) => {
  let node = new cc.Node();
  let sp = node.addComponent(cc.Sprite);
  Utils.getSpriteFrame(src).then((sf) => {
    sp.spriteFrame = sf;
    if (size)
      node.setContentSize(size);
  });
  return node;
}

var scheduler = null;
var winSize = cc.size(wx.getSystemInfoSync().windowWidth * 2, wx.getSystemInfoSync().windowHeight * 2);
var Remen = {
  showUI(cb) {
    let root = new cc.Node();
    root.name = 'SGNode';
    root.group = 'ui';
    root.zIndex = 9999;
    root.position = cc.v3(cc.view.getVisibleSize().width / 2, cc.view.getVisibleSize().height / 2);
    let s = window.ConfigData.portrait ? cc.view.getVisibleSize().width / winSize.width : cc.view.getVisibleSize().height / winSize.height;
    root.setScale(s, s, 1);
    if (!root) {
      cb && cb();
      return;
    }
    root.parent = cc.director.getScene();

    var schedulerNode = new cc.Node();
    scheduler = schedulerNode.addComponent(cc.Sprite);
    scheduler.schedule(() => {
      root.zIndex = 9999;
    });
    schedulerNode.parent = root;
    if (window.remenBanner) {
      this.bannerShowHide();
    } else {
      adMgr.hideBannerAd();
    }
    adMgr.visibleFullGridAd(true);

    let panel = getSprite("SGSDK/res/bg.png", cc.size(winSize.width, winSize.height));
    panel.on('touchstart', () => {}, this);
    panel.parent = root;

    let title = getSprite("SGSDK/res/rmtj_1.png");
    title.position = cc.v3(0, winSize.height / 2 - 50);
    root.addChild(title);

    let continueBtn = getSprite("SGSDK/res/jxyx_1.png");
    continueBtn.position = cc.v3(0, -winSize.height / 2 + 80);
    root.addChild(continueBtn);
    continueBtn.on('touchstart', () => {
      continueBtn.setScale(1.1, 1.1, 1);
    }, this);
    continueBtn.on('touchend', click, this);
    let count = 0;

    function click() {
      count++;
      if (count >= window.ConfigData.data.remenBanner_count) {
        scheduler.unscheduleAllCallbacks();
        adMgr.visibleFullGridAd(false);
        adMgr.hideBannerAd();
        root.destroy();
        cb && cb();
      }
    };
  },

  bannerShowHide() {
    adMgr.hideBannerAd();
    scheduler.scheduleOnce(() => {
      adMgr.showBannerAd();
      scheduler.scheduleOnce(() => {
        this.bannerShowHide();
      }, 0.8);
    }, 0.6);
  }
}

module.exports = Remen;