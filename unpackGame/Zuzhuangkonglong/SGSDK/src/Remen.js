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
var cv = null;
var ds = cc.v2(cc.view.getDesignResolutionSize().width, cc.view.getDesignResolutionSize().height);
var winSize = cc.v2(cc.view.getFrameSize().width * 2, cc.view.getFrameSize().height * 2);
if (window.ConfigData.portrait)
winSize.y = winSize.y / (winSize.x / ds.x);
else 
winSize.x = winSize.x / (winSize.y / ds.y);
var Remen = {
  showUI(cb) {
    cv = cc.director.getScene().getComponentInChildren(cc.Canvas).node;
    if (!cv) {
      cb && cb();
      return;
    }
    let root = new cc.Node();
    root.zIndex = 9999;
    root.parent = cv;

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

    let panel = getSprite("SGSDK/res/bg.png", cc.size(winSize.x, winSize.y));
    panel.on('touchstart', () => {}, this);
    panel.parent = root;

    let title = getSprite("SGSDK/res/rmtj_1.png");
    title.position = cc.v3(0, winSize.y / 2 - 50);
    root.addChild(title);

    let continueBtn = getSprite("SGSDK/res/jxyx_1.png");
    continueBtn.position = cc.v3(0, -winSize.y / 2 + 80);
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