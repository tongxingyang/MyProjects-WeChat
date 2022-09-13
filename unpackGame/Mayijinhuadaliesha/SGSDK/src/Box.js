const adMgr = require('./AdMgr');
const Utils = require('./Utils');

var getSprite = (src, size) => {
  let node = new cc.Node();
  node.layer = cc.Layers.Enum.UI_2D;
  node.addComponent(cc.UITransformComponent);
  let sp = node.addComponent(cc.SpriteComponent);
  Utils.getSpriteFrame(src).then((sf) => {
    sp.spriteFrame = sf;
    if (size)
      node.getComponent(cc.UITransformComponent).setContentSize(size);
  });
  return node;
}

var scheduler = null;
var cv = null;
var Box = {
  progress: 0,
  onShowCB: null,
  closeCB: null,
  closeUI(node) {
    adMgr.hideBannerAd();
    wx.offShow(this.onShowCB);
    scheduler.unscheduleAllCallbacks();
    this.closeCB && this.closeCB();
    node.destroy();
  },
  showUI(cb) {
    cv = cc.director.getScene().getChildByName('_Start').getChildByName('Canvas');
    if (!cv) {
      cb && cb();
      return;
    }
    let root = new cc.Node();
    root.layer = cc.Layers.Enum.UI_2D;
    root.addComponent(cc.UITransformComponent);
    root.setSiblingIndex(9999);
    root.parent = cv;

    var schedulerNode = new cc.Node();
    schedulerNode.addComponent(cc.UITransformComponent);
    scheduler = schedulerNode.addComponent(cc.SpriteComponent);
    scheduler.schedule(()=>{
      root.setSiblingIndex(9999);
    });
    schedulerNode.parent = root;
    this.closeCB = cb;
    this.onShowCB = () => {
      this.closeUI();
    };
    adMgr.hideBannerAd();
    adMgr.visibleFullGridAd(false);

    let panel = getSprite("SGSDK/res/bg.png", cc.size(cc.view.getVisibleSize().width, cc.view.getVisibleSize().height));
    panel.on('touch-start', () => {}, this);
    panel.parent = root;

    let title1 = getSprite("SGSDK/res/jx_wz_01.png");
    title1.position = cc.v3(0, cc.view.getVisibleSize().height / 2 - 100);
    root.addChild(title1);
    let title2 = getSprite("SGSDK/res/jx_wz_02.png");
    title2.position = cc.v3(0, cc.view.getVisibleSize().height / 2 - 200);
    root.addChild(title2);
    let light = getSprite("SGSDK/res/jx_tx_01.png");
    light.position = cc.v3(0, 0);
    light.setScale(1.5, 1.5, 1);
    root.addChild(light);
    let box = getSprite("SGSDK/res/bx_1.png");
    box.position = cc.v3(0, 0);
    root.addChild(box);

    let barBg = getSprite("SGSDK/res/jx_jdt_01.png");
    barBg.position = cc.v3(0, -250);
    root.addChild(barBg);
    let bar = getSprite("SGSDK/res/jx_jdt_01$bar.png");
    bar.getComponent(cc.UITransformComponent).setAnchorPoint(cc.v2(0, 0.5));
    bar.position = cc.v3(-556 / 2, 0);
    barBg.addChild(bar);
    if (!window.ConfigData.portrait) {
      title1.setScale(0.8, 0.8, 1);
      title2.setScale(0.8, 0.8, 1);
      title1.position = cc.v3(0, cc.view.getVisibleSize().height / 2 - 50);
      title2.position = cc.v3(0, cc.view.getVisibleSize().height / 2 - 120);
      light.setScale(1, 1, 1);
      box.setScale(0.6, 0.6, 1);
      barBg.setScale(0.7, 0.7, 1);
      barBg.position = cc.v3(0, -120);
    }

    let continueBtn = getSprite("SGSDK/res/jx_an_01.png");
    continueBtn.position = cc.v3(0, -cc.view.getVisibleSize().height / 2 + 70);
    root.addChild(continueBtn);
    let btnTips = getSprite("SGSDK/res/jx_kd_01.png");
    btnTips.getComponent(cc.UITransformComponent).setAnchorPoint(cc.v2(0, 0));
    btnTips.position = cc.v3(160, 0);
    continueBtn.addChild(btnTips);
    continueBtn.on('touch-start', () => {
      if (window.ConfigData.portrait)
        box.setScale(1.1, 1.1, 1);
      else
        box.setScale(0.7, 0.7, 1);
      continueBtn.setScale(1.1, 1.1, 1);
    }, this);
    continueBtn.on('touch-end', click, this);

    let hadShowBanner = false;
    let clickCount = 0;
    let maxProgress = Math.random() * 0.4 + 0.3;
    scheduler.schedule(() => {
      this.progress -= 0.01;
      if (this.progress < 0) this.progress = 0;
      bar.width = this.progress * 556;
      light.angle += 1;
    });

    function click() {
      if (window.ConfigData.portrait)
        box.setScale(1, 1, 1);
      else
        box.setScale(0.6, 0.6, 1);
      continueBtn.setScale(1, 1, 1);
      this.progress += 0.2;
      if (this.progress >= maxProgress && !hadShowBanner) {
        clickCount++;
        adMgr.showBannerAd();
        scheduler.scheduleOnce(() => {
          if (clickCount >= window.ConfigData.data.bannerBox_count) {
            this.closeUI(root);
          } else {
            adMgr.hideBannerAd();
            hadShowBanner = false;
            this.progress = 0;
            maxProgress = Math.random() * 0.4 + 0.3;
          }
        }, 1);
      }
    };
  }
}

module.exports = Box;