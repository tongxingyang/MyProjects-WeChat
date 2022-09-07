const adMgr = require('./AdMgr');
const Utils = require('./Utils');

var getSprite = (src, size) => {
  let node = new cc.Node();
  node.layer = cc.Layers.Enum.UI_2D;
  let sp = node.addComponent(cc.Sprite);
  Utils.getSpriteFrame(src).then((sf) => {
    sp.spriteFrame = sf;
    if (size)
      node.getComponent(cc.UITransformComponent).setContentSize(size);
  });
  return node;
}

var scheduler = null;
var cv = null;
var Remen = {
  showUI(cb) {
    cv = cc.director.getScene().getChildByName('Canvas');
    if (!cv) {
      cb && cb();
      return;
    }
    let root = new cc.Node();
    root.setSiblingIndex(9999);
    root.parent = cv;

    var schedulerNode = new cc.Node();
    scheduler = schedulerNode.addComponent(cc.Sprite);
    scheduler.schedule(()=>{
      root.setSiblingIndex(9999);
    });
    schedulerNode.parent = root;
    if (window.remenBanner) {
      this.bannerShowHide();
    } else {
      adMgr.hideBannerAd();
    }
    adMgr.visibleFullGridAd(true);

    let panel = getSprite("SGSDK/res/bg.png", cc.size(cc.view.getVisibleSize().width, cc.view.getVisibleSize().height));
    panel.on('touch-start', () => {}, this);
    panel.parent = root;

    let title = getSprite("SGSDK/res/rmtj_1.png");
    title.position = cc.v3(0, cc.view.getVisibleSize().height / 2 - 50);
    root.addChild(title);

    let continueBtn = getSprite("SGSDK/res/jxyx_1.png");
    continueBtn.position = cc.v3(0, -cc.view.getVisibleSize().height / 2 + 80);
    root.addChild(continueBtn);
    continueBtn.on('touch-start', () => {
      continueBtn.setScale(1.1, 1.1, 1);
    }, this);
    continueBtn.on('touch-end', click, this);
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