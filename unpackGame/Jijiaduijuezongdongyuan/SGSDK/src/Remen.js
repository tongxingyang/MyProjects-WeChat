const adMgr = require('./AdMgr');
const Utils = require('./Utils');

var getSprite = (src, size) => {
  let node = new cc.Node();
  node.group = 'UI';
  let sp = node.addComponent(cc.Sprite);
  Utils.getSpriteFrame(src).then((sf) => {
    sp.spriteFrame = sf;
    if (size)
      node.setContentSize(size);
  });
  return node;
}

var scheduler = null;
var winSize = cc.v2(cc.view.getVisibleSize().width, cc.view.getVisibleSize().height);
var Remen = {
  showUI(cb) {
    let root = new cc.Node();
    root.group = 'UI';
    root.name = 'SGNode';
    root.zIndex = 9999;
    root.position = cc.v3(winSize.x / 2, winSize.y / 2);
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