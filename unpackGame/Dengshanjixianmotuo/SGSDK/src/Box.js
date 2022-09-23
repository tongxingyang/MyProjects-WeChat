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

var BoxShowCount = 0;
var scheduler = null;
var winSize = cc.size(wx.getSystemInfoSync().windowWidth * 2, wx.getSystemInfoSync().windowHeight * 2);
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
    BoxShowCount++;
    let isShow=false;
    if (window.ConfigData.data.bannerBox_interval_level <= 0) 
      isShow = BoxShowCount >= window.ConfigData.data.bannerBox_level;
    else {
      isShow = BoxShowCount >=  window.ConfigData.data.bannerBox_level &&
      Math.floor((BoxShowCount -  window.ConfigData.data.bannerBox_level) % ( window.ConfigData.data.bannerBox_interval_level + 1)) == 0;
    }
    if(!isShow){
      cb&&cb();
      return;
    }
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
    this.closeCB = cb;
    this.onShowCB = () => {
      this.closeUI(root);
    };
    wx.onShow(this.onShowCB);
    adMgr.hideBannerAd();
    adMgr.visibleFullGridAd(false);

    let panel = getSprite("SGSDK/res/bg.png", cc.size(winSize.width, winSize.height));
    panel.on('touchstart', () => {}, this);
    panel.parent = root;

    let title1 = getSprite("SGSDK/res/jx_wz_01.png");
    title1.position = cc.v3(0, winSize.height / 2 - 100);
    root.addChild(title1);
    let title2 = getSprite("SGSDK/res/jx_wz_02.png");
    title2.position = cc.v3(0, winSize.height / 2 - 200);
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
    bar.setAnchorPoint(cc.v2(0, 0.5));
    bar.position = cc.v3(-556 / 2, 0);
    barBg.addChild(bar);
    if (!window.ConfigData.portrait) {
      title1.setScale(0.8, 0.8, 1);
      title2.setScale(0.8, 0.8, 1);
      title1.position = cc.v3(0, winSize.height / 2 - 50);
      title2.position = cc.v3(0, winSize.height / 2 - 120);
      light.setScale(1, 1, 1);
      box.setScale(0.6, 0.6, 1);
      barBg.setScale(0.7, 0.7, 1);
      barBg.position = cc.v3(0, -120);
    }

    let continueBtn = getSprite("SGSDK/res/jx_an_01.png");
    continueBtn.position = cc.v3(0, -winSize.height / 2 + 70);
    root.addChild(continueBtn);
    let btnTips = getSprite("SGSDK/res/jx_kd_01.png");
    btnTips.setAnchorPoint(cc.v2(0, 0));
    btnTips.position = cc.v3(160, 0);
    continueBtn.addChild(btnTips);
    continueBtn.on('touchstart', () => {
      if (window.ConfigData.portrait)
        box.setScale(1.1, 1.1, 1);
      else
        box.setScale(0.7, 0.7, 1);
      continueBtn.setScale(1.1, 1.1, 1);
    }, this);
    continueBtn.on('touchend', click, this);

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